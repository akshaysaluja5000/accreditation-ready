/**
 * Backfill points_ledger for users whose quiz_sessions correct answers
 * predate the points_ledger table. Safe to run multiple times (idempotent).
 *
 * Usage: npx tsx scripts/backfill-points-ledger.ts
 * Run in Render shell against production DB.
 */
import pg from "pg";
import { POINT_VALUES } from "../shared/scoring-constants";

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });

async function run() {
  const client = await pool.connect();
  try {
    console.log("=== Points Ledger Backfill ===");
    console.log(`POINT_VALUES.question_correct = ${POINT_VALUES.question_correct}`);

    // For each user+level, find how many correct answers exist in quiz_sessions
    // vs how many question_correct events exist in points_ledger for that level.
    const { rows: gaps } = await client.query<{
      user_id: number;
      facility_id: number | null;
      level_id: string;
      quiz_correct: number;
      ledger_count: number;
      missing: number;
      session_updated_at: Date;
    }>(`
      SELECT
        qs.user_id,
        u.facility_id,
        qs.level_id,
        qs.correct_answers::int                               AS quiz_correct,
        COALESCE(pl.cnt, 0)::int                              AS ledger_count,
        (qs.correct_answers - COALESCE(pl.cnt, 0))::int       AS missing,
        qs.updated_at                                          AS session_updated_at
      FROM quiz_sessions qs
      JOIN users u ON u.id = qs.user_id
      LEFT JOIN (
        SELECT user_id,
               metadata->>'levelId' AS level_id,
               COUNT(*)             AS cnt
        FROM points_ledger
        WHERE event_type = 'question_correct'
          AND metadata->>'levelId' IS NOT NULL
        GROUP BY user_id, metadata->>'levelId'
      ) pl ON pl.user_id = qs.user_id AND pl.level_id = qs.level_id
      WHERE qs.correct_answers > COALESCE(pl.cnt, 0)
      ORDER BY qs.user_id, qs.level_id
    `);

    if (gaps.length === 0) {
      console.log("Nothing to backfill — all quiz correct answers are already in points_ledger.");
      return;
    }

    const totalMissing = gaps.reduce((s, r) => s + r.missing, 0);
    console.log(`Found ${gaps.length} user+level gaps, ${totalMissing} total missing entries.\n`);

    let inserted = 0;
    const affectedUsers = new Set<number>();

    for (const row of gaps) {
      console.log(
        `  user=${row.user_id} level=${row.level_id}: ` +
        `quiz_correct=${row.quiz_correct} ledger=${row.ledger_count} → inserting ${row.missing}`
      );

      // Insert one row per missing correct answer, backdated to the session timestamp.
      for (let i = 0; i < row.missing; i++) {
        await client.query(
          `INSERT INTO points_ledger (user_id, facility_id, event_type, points_awarded, metadata, created_at)
           VALUES ($1, $2, 'question_correct', $3, $4, $5)`,
          [
            row.user_id,
            row.facility_id,
            POINT_VALUES.question_correct,
            JSON.stringify({ levelId: row.level_id, backfilled: true }),
            row.session_updated_at,
          ],
        );
        inserted++;
      }
      affectedUsers.add(row.user_id);
    }

    console.log(`\nInserted ${inserted} points_ledger rows for ${affectedUsers.size} users.`);

    // Recompute user_streaks.total_xp from the full points_ledger sum for affected users.
    console.log("Resyncing user_streaks.total_xp from points_ledger...");
    await client.query(`
      UPDATE user_streaks
      SET total_xp = (
        SELECT COALESCE(SUM(points_awarded), 0)
        FROM points_ledger
        WHERE user_id = user_streaks.user_id
      )
      WHERE user_id = ANY($1)
    `, [Array.from(affectedUsers)]);

    console.log("Done. user_streaks.total_xp is now in sync with points_ledger.");
    console.log("\nVerification:");
    const { rows: check } = await client.query(`
      SELECT u.first_name, u.last_name,
             COALESCE(pl.total_points, 0) AS total_points,
             COALESCE(us.total_xp, 0)     AS streak_xp
      FROM users u
      LEFT JOIN (
        SELECT user_id, SUM(points_awarded)::int AS total_points
        FROM points_ledger GROUP BY user_id
      ) pl ON pl.user_id = u.id
      LEFT JOIN user_streaks us ON us.user_id = u.id
      WHERE u.id = ANY($1)
      ORDER BY total_points DESC
    `, [Array.from(affectedUsers)]);
    check.forEach(r =>
      console.log(`  ${r.first_name} ${r.last_name}: points_ledger=${r.total_points} streak_xp=${r.streak_xp}`)
    );

  } finally {
    client.release();
    await pool.end();
  }
}

run().catch((err) => { console.error(err); process.exit(1); });
