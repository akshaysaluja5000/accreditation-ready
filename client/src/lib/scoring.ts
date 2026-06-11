import { POINT_VALUES, PASSING_THRESHOLD, calculateFinalExamResult } from "@shared/scoring-constants";

export type PointEventType = keyof typeof POINT_VALUES;

export { POINT_VALUES, PASSING_THRESHOLD, calculateFinalExamResult };

/**
 * Record a scoreable activity — non-blocking, never throws.
 * Only call for events that earn points:
 *   question_correct, flashcard_reviewed,
 *   final_complete, final_passed_first_attempt
 * Do NOT call for incorrect answers.
 * All flashcard ratings (Again/Hard/Good) use flashcard_reviewed (+10 pts each).
 */
export async function recordActivity(
  eventType: PointEventType,
  options: { moduleId?: string | number; questionId?: string | number; metadata?: Record<string, unknown> } = {}
): Promise<{ pointsAwarded: number; totalPoints: number } | null> {
  try {
    const res = await fetch("/api/points/award", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        eventType,
        moduleId:   options.moduleId   ?? null,
        questionId: options.questionId ?? null,
        metadata:   options.metadata   ?? {},
      }),
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    console.error("Scoring error (non-blocking):", err);
    return null;
  }
}

/**
 * Fetch the current user's score and rank.
 */
export async function getMyScore(startDate?: string, endDate?: string) {
  try {
    const params = new URLSearchParams();
    if (startDate) params.append("start", startDate);
    if (endDate)   params.append("end",   endDate);
    const res = await fetch(`/api/points/me?${params.toString()}`, { credentials: "include" });
    if (!res.ok) return null;
    return await res.json() as { totalPoints: number; rank: number | null; totalParticipants: number };
  } catch (err) {
    console.error("Error fetching score:", err);
    return null;
  }
}

/**
 * Fetch the facility leaderboard.
 */
export async function getLeaderboard(startDate?: string, endDate?: string) {
  try {
    const params = new URLSearchParams();
    if (startDate) params.append("start", startDate);
    if (endDate)   params.append("end",   endDate);
    const res = await fetch(`/api/points/leaderboard?${params.toString()}`, { credentials: "include" });
    if (!res.ok) return [];
    return await res.json();
  } catch (err) {
    console.error("Error fetching leaderboard:", err);
    return [];
  }
}
