import { eq, and, desc, asc, lte, gte, sql, inArray, gt } from "drizzle-orm";
import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import {
  users, userProgress, userStreaks, dailyActivity, quizSessions, facilities,
  diagnosticResults, masteryResults, diagnosticSessions, masterySessions,
  ascPretestResults, ascPosttestResults,
  dnvPretestResults, dnvPosttestResults,
  roles, roleChapterMappings, flashcardReviews, auditLogs, riskAssessments, feedback, leadershipRoleCodes,
  complianceItems, complianceLogs, complianceDocuments, complianceTrainingModules,
  complianceTasks, complianceCompletionLog, staffTrainingAlerts, regulatoryWatchFindings, executiveBriefs,
  teams, teamMembers, rateLimitEvents,
  contentLevels, contentQuestions, contentDeepDiveLevels, contentDeepDiveQuestions,
  contentHandbookChapters, contentAssessmentQuestions,
  contentChangelog,
  type User, type InsertUser, type UserProgress, type UserStreak, type DailyActivity, type QuizSession,
  type Facility, type InsertFacility, type DiagnosticResult, type MasteryResult,
  type DiagnosticSession, type MasterySession, type Role, type RoleChapterMapping,
  type AscPretestResult, type AscPosttestResult, type FlashcardReview, type AuditLog, type RiskAssessment, type Feedback,
  type DnvPretestResult, type DnvPosttestResult,
  type ComplianceItem, type ComplianceLog, type ComplianceDocument, type ComplianceTrainingModule,
  type ComplianceTask, type ComplianceCompletionLog, type StaffTrainingAlert, type RegulatoryWatchFinding, type ExecutiveBrief,
  type ContentChangelog, type InsertContentChangelog,
  type Team,
  type Level, type Question, type DeepDiveLevel, type HandbookChapter, type ModuleId,
} from "@shared/schema";
import type { DiagnosticQuestion } from "@shared/diagnostic-questions";
import type { MasteryQuestion } from "@shared/mastery-questions";
import type { AscPretestQuestion } from "@shared/asc-pretest";
import type { DnvTestQuestion } from "@shared/dnv-pretest";

export const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000,
  allowExitOnIdle: true,
});

export const db = drizzle(pool);

export async function ensureTablesExist() {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS facilities (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        code TEXT NOT NULL UNIQUE,
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
      ALTER TABLE facilities ADD COLUMN IF NOT EXISTS features JSONB DEFAULT '{}';
      ALTER TABLE facilities ADD COLUMN IF NOT EXISTS role_visibility JSONB DEFAULT '{}';
      CREATE TABLE IF NOT EXISTS roles (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        slug TEXT NOT NULL UNIQUE,
        department TEXT NOT NULL,
        scope TEXT NOT NULL DEFAULT 'standard',
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
      CREATE TABLE IF NOT EXISTS role_chapter_mappings (
        id SERIAL PRIMARY KEY,
        role_id INTEGER NOT NULL REFERENCES roles(id),
        chapter_slug TEXT NOT NULL,
        display_order INTEGER NOT NULL DEFAULT 0
      );
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username TEXT NOT NULL UNIQUE,
        first_name TEXT NOT NULL DEFAULT '',
        last_name TEXT NOT NULL DEFAULT '',
        password TEXT NOT NULL,
        is_admin BOOLEAN NOT NULL DEFAULT false,
        facility_id INTEGER REFERENCES facilities(id),
        role_id INTEGER REFERENCES roles(id),
        view_scope TEXT NOT NULL DEFAULT 'department',
        role_assigned_at TIMESTAMP,
        daily_goal INTEGER NOT NULL DEFAULT 5,
        reminder_enabled BOOLEAN NOT NULL DEFAULT true,
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
      ALTER TABLE users ADD COLUMN IF NOT EXISTS role_id INTEGER REFERENCES roles(id);
      ALTER TABLE users ADD COLUMN IF NOT EXISTS view_scope TEXT NOT NULL DEFAULT 'department';
      ALTER TABLE users ADD COLUMN IF NOT EXISTS role_assigned_at TIMESTAMP;
      ALTER TABLE users ADD COLUMN IF NOT EXISTS additional_role_ids INTEGER[] NOT NULL DEFAULT ARRAY[]::INTEGER[];
      ALTER TABLE users ADD COLUMN IF NOT EXISTS organization_type TEXT NOT NULL DEFAULT 'hospital';
      ALTER TABLE users ADD COLUMN IF NOT EXISTS leadership_role TEXT NOT NULL DEFAULT 'learner';
      ALTER TABLE users ADD COLUMN IF NOT EXISTS department TEXT;
      ALTER TABLE users ADD COLUMN IF NOT EXISTS mfa_secret TEXT;
      ALTER TABLE users ADD COLUMN IF NOT EXISTS mfa_enabled BOOLEAN NOT NULL DEFAULT false;
      ALTER TABLE facilities ADD COLUMN IF NOT EXISTS compliance_mode TEXT NOT NULL DEFAULT 'education_only';
      CREATE TABLE IF NOT EXISTS content_changelog (
        id SERIAL PRIMARY KEY,
        content_type TEXT NOT NULL,
        scope TEXT,
        action TEXT NOT NULL,
        item_count INTEGER,
        version TEXT,
        description TEXT,
        changed_by TEXT NOT NULL DEFAULT 'system',
        changed_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
      CREATE TABLE IF NOT EXISTS audit_logs (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id),
        username TEXT,
        leadership_role TEXT NOT NULL DEFAULT 'learner',
        facility_id TEXT,
        facility_name TEXT,
        action TEXT NOT NULL,
        meta TEXT,
        ip_address TEXT,
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
      CREATE TABLE IF NOT EXISTS user_progress (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id),
        level_id TEXT NOT NULL,
        score INTEGER NOT NULL DEFAULT 0,
        total_questions INTEGER NOT NULL DEFAULT 0,
        best_score INTEGER NOT NULL DEFAULT 0,
        completed BOOLEAN NOT NULL DEFAULT false,
        completed_at TIMESTAMP
      );
      CREATE TABLE IF NOT EXISTS user_streaks (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id) UNIQUE,
        current_streak INTEGER NOT NULL DEFAULT 0,
        longest_streak INTEGER NOT NULL DEFAULT 0,
        last_played_date DATE,
        total_xp INTEGER NOT NULL DEFAULT 0
      );
      CREATE TABLE IF NOT EXISTS daily_activity (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id),
        date DATE NOT NULL,
        questions_answered INTEGER NOT NULL DEFAULT 0,
        correct_answers INTEGER NOT NULL DEFAULT 0,
        xp_earned INTEGER NOT NULL DEFAULT 0
      );
      CREATE TABLE IF NOT EXISTS quiz_sessions (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id),
        level_id TEXT NOT NULL,
        question_order TEXT[] NOT NULL,
        answers TEXT NOT NULL DEFAULT '[]',
        current_question INTEGER NOT NULL DEFAULT 0,
        correct_answers INTEGER NOT NULL DEFAULT 0,
        xp_earned INTEGER NOT NULL DEFAULT 0,
        updated_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
      CREATE TABLE IF NOT EXISTS diagnostic_results (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id),
        score INTEGER NOT NULL,
        total_questions INTEGER NOT NULL,
        answers TEXT NOT NULL DEFAULT '[]',
        completed_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
      CREATE TABLE IF NOT EXISTS mastery_results (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id),
        score INTEGER NOT NULL,
        total_questions INTEGER NOT NULL,
        answers TEXT NOT NULL DEFAULT '[]',
        completed_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
      CREATE TABLE IF NOT EXISTS diagnostic_sessions (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id),
        question_order TEXT[] NOT NULL,
        answers TEXT NOT NULL DEFAULT '[]',
        current_question INTEGER NOT NULL DEFAULT 0,
        shuffle_maps TEXT NOT NULL DEFAULT '{}',
        updated_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
      ALTER TABLE diagnostic_sessions ADD COLUMN IF NOT EXISTS question_data TEXT;
      ALTER TABLE mastery_sessions ADD COLUMN IF NOT EXISTS question_data TEXT;
      CREATE TABLE IF NOT EXISTS mastery_sessions (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id),
        question_order TEXT[] NOT NULL,
        answers TEXT NOT NULL DEFAULT '[]',
        current_question INTEGER NOT NULL DEFAULT 0,
        shuffle_maps TEXT NOT NULL DEFAULT '{}',
        updated_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
      CREATE TABLE IF NOT EXISTS asc_pretest_results (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id),
        score INTEGER NOT NULL,
        total_questions INTEGER NOT NULL,
        answers TEXT NOT NULL DEFAULT '[]',
        chapter_scores TEXT NOT NULL DEFAULT '{}',
        completed_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
      CREATE TABLE IF NOT EXISTS asc_posttest_results (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id),
        score INTEGER NOT NULL,
        total_questions INTEGER NOT NULL,
        answers TEXT NOT NULL DEFAULT '[]',
        chapter_scores TEXT NOT NULL DEFAULT '{}',
        completed_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
      CREATE TABLE IF NOT EXISTS asc_test_sessions (
        user_id INTEGER NOT NULL REFERENCES users(id),
        test_type TEXT NOT NULL,
        shuffle_maps TEXT NOT NULL DEFAULT '{}',
        updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
        PRIMARY KEY (user_id, test_type)
      );
      CREATE TABLE IF NOT EXISTS flashcard_reviews (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id),
        level_id TEXT NOT NULL,
        card_index INTEGER NOT NULL,
        next_review_at TIMESTAMP NOT NULL DEFAULT NOW(),
        interval_minutes INTEGER NOT NULL DEFAULT 1440,
        review_count INTEGER NOT NULL DEFAULT 0,
        last_rating TEXT NOT NULL DEFAULT 'good',
        updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
        UNIQUE (user_id, level_id, card_index)
      );
      CREATE TABLE IF NOT EXISTS risk_assessments (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id),
        module TEXT NOT NULL DEFAULT 'hospital',
        risk_areas TEXT NOT NULL DEFAULT '[]',
        notes TEXT NOT NULL DEFAULT '',
        action_plan TEXT NOT NULL DEFAULT '{}',
        updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
        UNIQUE (user_id, module)
      );
      CREATE TABLE IF NOT EXISTS feedback (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id),
        username TEXT,
        first_name TEXT,
        last_name TEXT,
        facility_id INTEGER,
        message TEXT NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
      ALTER TABLE feedback ADD COLUMN IF NOT EXISTS attachments JSONB;
      ALTER TABLE feedback ADD COLUMN IF NOT EXISTS category TEXT;
      CREATE TABLE IF NOT EXISTS leadership_role_codes (
        id SERIAL PRIMARY KEY,
        code TEXT NOT NULL UNIQUE,
        facility_id INTEGER REFERENCES facilities(id),
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
      CREATE TABLE IF NOT EXISTS compliance_items (
        id SERIAL PRIMARY KEY,
        module TEXT NOT NULL DEFAULT 'asc',
        module_scope TEXT NOT NULL DEFAULT 'ASC',
        volume TEXT NOT NULL,
        standard_code TEXT NOT NULL,
        item_name TEXT NOT NULL,
        frequency TEXT NOT NULL,
        tier INTEGER NOT NULL,
        category TEXT NOT NULL,
        surveyor_priority INTEGER NOT NULL DEFAULT 2,
        agent_watch BOOLEAN NOT NULL DEFAULT true
      );
      CREATE TABLE IF NOT EXISTS compliance_logs (
        id SERIAL PRIMARY KEY,
        facility_id INTEGER NOT NULL,
        item_id INTEGER NOT NULL REFERENCES compliance_items(id),
        completed_by TEXT NOT NULL,
        completed_at TIMESTAMP NOT NULL DEFAULT NOW(),
        status TEXT NOT NULL DEFAULT 'completed',
        notes TEXT,
        next_due DATE,
        agent_flagged BOOLEAN NOT NULL DEFAULT false
      );
      CREATE TABLE IF NOT EXISTS compliance_documents (
        id SERIAL PRIMARY KEY,
        facility_id INTEGER NOT NULL,
        item_id INTEGER NOT NULL REFERENCES compliance_items(id),
        document_name TEXT NOT NULL,
        uploaded_by TEXT NOT NULL,
        uploaded_at TIMESTAMP NOT NULL DEFAULT NOW(),
        effective_date DATE,
        expiration_date DATE,
        status TEXT NOT NULL DEFAULT 'current',
        ai_tagged_standards TEXT NOT NULL DEFAULT '[]',
        ai_questions_generated BOOLEAN NOT NULL DEFAULT false
      );
      CREATE TABLE IF NOT EXISTS compliance_tasks (
        id SERIAL PRIMARY KEY,
        facility_id INTEGER NOT NULL,
        item_id INTEGER NOT NULL REFERENCES compliance_items(id),
        assigned_to TEXT,
        due_date DATE,
        created_by TEXT,
        created_by_agent BOOLEAN NOT NULL DEFAULT false,
        status TEXT NOT NULL DEFAULT 'pending',
        reminder_sent BOOLEAN NOT NULL DEFAULT false,
        escalated BOOLEAN NOT NULL DEFAULT false
      );
      CREATE TABLE IF NOT EXISTS compliance_training_modules (
        id SERIAL PRIMARY KEY,
        facility_id INTEGER NOT NULL,
        document_id INTEGER NOT NULL REFERENCES compliance_documents(id),
        item_id INTEGER NOT NULL REFERENCES compliance_items(id),
        title TEXT NOT NULL,
        tagged_standards TEXT NOT NULL DEFAULT '[]',
        questions TEXT NOT NULL DEFAULT '[]',
        conflict_flags TEXT NOT NULL DEFAULT '[]',
        assigned_roles TEXT NOT NULL DEFAULT '[]',
        assigned_member_count INTEGER NOT NULL DEFAULT 0,
        status TEXT NOT NULL DEFAULT 'pending',
        created_at TIMESTAMP NOT NULL DEFAULT NOW(),
        approved_at TIMESTAMP,
        approved_by TEXT
      );
      CREATE TABLE IF NOT EXISTS staff_training_alerts (
        id SERIAL PRIMARY KEY,
        facility_id INTEGER NOT NULL,
        user_id INTEGER NOT NULL REFERENCES users(id),
        compliance_item_id INTEGER REFERENCES compliance_items(id),
        alert_type TEXT NOT NULL DEFAULT 'reminder',
        category TEXT NOT NULL,
        message TEXT NOT NULL,
        days_overdue INTEGER NOT NULL DEFAULT 0,
        is_read BOOLEAN NOT NULL DEFAULT false,
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
      CREATE TABLE IF NOT EXISTS executive_briefs (
        id SERIAL PRIMARY KEY,
        facility_id INTEGER NOT NULL,
        week_of DATE NOT NULL,
        readiness_score INTEGER NOT NULL DEFAULT 0,
        previous_score INTEGER,
        trend_direction TEXT NOT NULL DEFAULT 'stable',
        top_risks TEXT NOT NULL DEFAULT '[]',
        overdue_tasks_count INTEGER NOT NULL DEFAULT 0,
        expiring_docs_count INTEGER NOT NULL DEFAULT 0,
        training_alerts_count INTEGER NOT NULL DEFAULT 0,
        regulatory_findings_count INTEGER NOT NULL DEFAULT 0,
        days_to_next_event INTEGER,
        narrative_summary TEXT NOT NULL DEFAULT '',
        email_sent_at TIMESTAMP,
        email_sent_to TEXT NOT NULL DEFAULT '[]',
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
      CREATE TABLE IF NOT EXISTS regulatory_watch_findings (
        id SERIAL PRIMARY KEY,
        facility_id INTEGER NOT NULL,
        source TEXT NOT NULL,
        standard_code TEXT NOT NULL,
        title TEXT NOT NULL,
        summary TEXT NOT NULL,
        source_url TEXT,
        affected_item_ids TEXT NOT NULL DEFAULT '[]',
        affected_item_count INTEGER NOT NULL DEFAULT 0,
        affected_document_count INTEGER NOT NULL DEFAULT 0,
        status TEXT NOT NULL DEFAULT 'new',
        task_id INTEGER REFERENCES compliance_tasks(id),
        scanned_at TIMESTAMP NOT NULL DEFAULT NOW(),
        reviewed_at TIMESTAMP,
        reviewed_by TEXT
      );
      CREATE TABLE IF NOT EXISTS teams (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        facility_id INTEGER REFERENCES facilities(id),
        department TEXT,
        created_by_user_id INTEGER REFERENCES users(id),
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
      CREATE TABLE IF NOT EXISTS team_members (
        id SERIAL PRIMARY KEY,
        team_id INTEGER NOT NULL REFERENCES teams(id) ON DELETE CASCADE,
        user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        added_at TIMESTAMP NOT NULL DEFAULT NOW(),
        UNIQUE(team_id, user_id)
      );

      CREATE TABLE IF NOT EXISTS rate_limit_events (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id),
        endpoint TEXT NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
      CREATE INDEX IF NOT EXISTS idx_rate_limit_events_user_endpoint ON rate_limit_events(user_id, endpoint);
      CREATE INDEX IF NOT EXISTS idx_rate_limit_events_created_at ON rate_limit_events(created_at);

      -- CRITICAL-4: Indexes on all heavily-queried FK and filter columns
      CREATE INDEX IF NOT EXISTS idx_users_facility_id ON users(facility_id);
      CREATE INDEX IF NOT EXISTS idx_users_leadership_role ON users(leadership_role);
      CREATE INDEX IF NOT EXISTS idx_user_progress_user_id ON user_progress(user_id);

      -- MEDIUM-5: deduplicate before adding unique constraint (keep row with highest best_score)
      DELETE FROM user_progress
      WHERE id NOT IN (
        SELECT DISTINCT ON (user_id, level_id) id
        FROM user_progress
        ORDER BY user_id, level_id, best_score DESC, id ASC
      );
      DO $$ BEGIN
        IF NOT EXISTS (
          SELECT 1 FROM pg_constraint WHERE conname = 'user_progress_user_level_unique'
        ) THEN
          ALTER TABLE user_progress
            ADD CONSTRAINT user_progress_user_level_unique UNIQUE (user_id, level_id);
        END IF;
      END $$;
      CREATE INDEX IF NOT EXISTS idx_daily_activity_user_id ON daily_activity(user_id);
      CREATE INDEX IF NOT EXISTS idx_daily_activity_user_date ON daily_activity(user_id, date);
      CREATE INDEX IF NOT EXISTS idx_quiz_sessions_user_id ON quiz_sessions(user_id);
      CREATE INDEX IF NOT EXISTS idx_quiz_sessions_user_level ON quiz_sessions(user_id, level_id);
      CREATE INDEX IF NOT EXISTS idx_diagnostic_sessions_user_id ON diagnostic_sessions(user_id);
      CREATE INDEX IF NOT EXISTS idx_mastery_sessions_user_id ON mastery_sessions(user_id);
      CREATE INDEX IF NOT EXISTS idx_diagnostic_results_user_id ON diagnostic_results(user_id);
      CREATE INDEX IF NOT EXISTS idx_mastery_results_user_id ON mastery_results(user_id);
      CREATE INDEX IF NOT EXISTS idx_asc_pretest_results_user_id ON asc_pretest_results(user_id);
      CREATE INDEX IF NOT EXISTS idx_asc_posttest_results_user_id ON asc_posttest_results(user_id);
      CREATE TABLE IF NOT EXISTS dnv_pretest_results (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id),
        score INTEGER NOT NULL,
        total_questions INTEGER NOT NULL,
        answers JSONB NOT NULL DEFAULT '[]'::jsonb,
        chapter_scores JSONB NOT NULL DEFAULT '{}'::jsonb,
        completed_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
      CREATE TABLE IF NOT EXISTS dnv_posttest_results (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id),
        score INTEGER NOT NULL,
        total_questions INTEGER NOT NULL,
        answers JSONB NOT NULL DEFAULT '[]'::jsonb,
        chapter_scores JSONB NOT NULL DEFAULT '{}'::jsonb,
        completed_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
      CREATE INDEX IF NOT EXISTS idx_dnv_pretest_results_user_id ON dnv_pretest_results(user_id);
      CREATE INDEX IF NOT EXISTS idx_dnv_posttest_results_user_id ON dnv_posttest_results(user_id);
      CREATE INDEX IF NOT EXISTS idx_flashcard_reviews_user_level ON flashcard_reviews(user_id, level_id);
      CREATE INDEX IF NOT EXISTS idx_flashcard_reviews_next_review ON flashcard_reviews(user_id, next_review_at);
      CREATE INDEX IF NOT EXISTS idx_audit_logs_user_id ON audit_logs(user_id);
      CREATE INDEX IF NOT EXISTS idx_audit_logs_created_at ON audit_logs(created_at DESC);
      CREATE INDEX IF NOT EXISTS idx_risk_assessments_user_id ON risk_assessments(user_id);
      CREATE INDEX IF NOT EXISTS idx_teams_facility_id ON teams(facility_id);
      CREATE INDEX IF NOT EXISTS idx_team_members_user_id ON team_members(user_id);
      CREATE INDEX IF NOT EXISTS idx_team_members_team_id ON team_members(team_id);
      CREATE INDEX IF NOT EXISTS idx_compliance_logs_facility_id ON compliance_logs(facility_id);
      CREATE INDEX IF NOT EXISTS idx_compliance_logs_facility_completed ON compliance_logs(facility_id, completed_at);
      CREATE INDEX IF NOT EXISTS idx_compliance_documents_facility_id ON compliance_documents(facility_id);
      CREATE INDEX IF NOT EXISTS idx_compliance_tasks_facility_id ON compliance_tasks(facility_id);
      CREATE INDEX IF NOT EXISTS idx_compliance_training_modules_facility ON compliance_training_modules(facility_id);
      CREATE INDEX IF NOT EXISTS idx_staff_training_alerts_facility_id ON staff_training_alerts(facility_id);
      CREATE INDEX IF NOT EXISTS idx_staff_training_alerts_facility_user ON staff_training_alerts(facility_id, user_id);
      CREATE INDEX IF NOT EXISTS idx_regulatory_watch_findings_facility ON regulatory_watch_findings(facility_id);
      CREATE INDEX IF NOT EXISTS idx_executive_briefs_facility_week ON executive_briefs(facility_id, week_of DESC);

      -- HIGH-4: FK constraints on compliance tables (idempotent)
      DO $$ BEGIN ALTER TABLE compliance_logs ADD CONSTRAINT compliance_logs_facility_fk FOREIGN KEY (facility_id) REFERENCES facilities(id); EXCEPTION WHEN duplicate_object THEN NULL; WHEN others THEN NULL; END $$;
      DO $$ BEGIN ALTER TABLE compliance_documents ADD CONSTRAINT compliance_documents_facility_fk FOREIGN KEY (facility_id) REFERENCES facilities(id); EXCEPTION WHEN duplicate_object THEN NULL; WHEN others THEN NULL; END $$;
      DO $$ BEGIN ALTER TABLE compliance_tasks ADD CONSTRAINT compliance_tasks_facility_fk FOREIGN KEY (facility_id) REFERENCES facilities(id); EXCEPTION WHEN duplicate_object THEN NULL; WHEN others THEN NULL; END $$;
      DO $$ BEGIN ALTER TABLE compliance_training_modules ADD CONSTRAINT compliance_training_modules_facility_fk FOREIGN KEY (facility_id) REFERENCES facilities(id); EXCEPTION WHEN duplicate_object THEN NULL; WHEN others THEN NULL; END $$;
      DO $$ BEGIN ALTER TABLE staff_training_alerts ADD CONSTRAINT staff_training_alerts_facility_fk FOREIGN KEY (facility_id) REFERENCES facilities(id); EXCEPTION WHEN duplicate_object THEN NULL; WHEN others THEN NULL; END $$;
      DO $$ BEGIN ALTER TABLE regulatory_watch_findings ADD CONSTRAINT regulatory_watch_findings_facility_fk FOREIGN KEY (facility_id) REFERENCES facilities(id); EXCEPTION WHEN duplicate_object THEN NULL; WHEN others THEN NULL; END $$;
      DO $$ BEGIN ALTER TABLE executive_briefs ADD CONSTRAINT executive_briefs_facility_fk FOREIGN KEY (facility_id) REFERENCES facilities(id); EXCEPTION WHEN duplicate_object THEN NULL; WHEN others THEN NULL; END $$;

      -- MEDIUM-4: Enforce leadershipRole as DB enum
      DO $$ BEGIN
        CREATE TYPE leadership_role_type AS ENUM ('learner', 'educator', 'director', 'ceo', 'admin', 'super_admin');
      EXCEPTION WHEN duplicate_object THEN NULL;
      END $$;
      DO $$ BEGIN
        ALTER TABLE users ALTER COLUMN leadership_role TYPE leadership_role_type USING leadership_role::leadership_role_type;
      EXCEPTION WHEN others THEN NULL;
      END $$;
      DO $$ BEGIN
        ALTER TABLE audit_logs ALTER COLUMN leadership_role TYPE leadership_role_type USING leadership_role::leadership_role_type;
      EXCEPTION WHEN others THEN NULL;
      END $$;

      -- MEDIUM-3: Migrate JSON-as-TEXT columns to jsonb
      DO $$ BEGIN ALTER TABLE quiz_sessions ALTER COLUMN answers TYPE jsonb USING answers::jsonb; EXCEPTION WHEN others THEN NULL; END $$;
      DO $$ BEGIN ALTER TABLE diagnostic_results ALTER COLUMN answers TYPE jsonb USING answers::jsonb; EXCEPTION WHEN others THEN NULL; END $$;
      DO $$ BEGIN ALTER TABLE mastery_results ALTER COLUMN answers TYPE jsonb USING answers::jsonb; EXCEPTION WHEN others THEN NULL; END $$;
      DO $$ BEGIN ALTER TABLE diagnostic_sessions ALTER COLUMN answers TYPE jsonb USING answers::jsonb; EXCEPTION WHEN others THEN NULL; END $$;
      DO $$ BEGIN ALTER TABLE diagnostic_sessions ALTER COLUMN shuffle_maps TYPE jsonb USING shuffle_maps::jsonb; EXCEPTION WHEN others THEN NULL; END $$;
      DO $$ BEGIN ALTER TABLE mastery_sessions ALTER COLUMN answers TYPE jsonb USING answers::jsonb; EXCEPTION WHEN others THEN NULL; END $$;
      DO $$ BEGIN ALTER TABLE mastery_sessions ALTER COLUMN shuffle_maps TYPE jsonb USING shuffle_maps::jsonb; EXCEPTION WHEN others THEN NULL; END $$;
      DO $$ BEGIN ALTER TABLE asc_pretest_results ALTER COLUMN answers TYPE jsonb USING answers::jsonb; EXCEPTION WHEN others THEN NULL; END $$;
      DO $$ BEGIN ALTER TABLE asc_pretest_results ALTER COLUMN chapter_scores TYPE jsonb USING chapter_scores::jsonb; EXCEPTION WHEN others THEN NULL; END $$;
      DO $$ BEGIN ALTER TABLE asc_posttest_results ALTER COLUMN answers TYPE jsonb USING answers::jsonb; EXCEPTION WHEN others THEN NULL; END $$;
      DO $$ BEGIN ALTER TABLE asc_posttest_results ALTER COLUMN chapter_scores TYPE jsonb USING chapter_scores::jsonb; EXCEPTION WHEN others THEN NULL; END $$;
      DO $$ BEGIN ALTER TABLE asc_test_sessions ALTER COLUMN shuffle_maps TYPE jsonb USING shuffle_maps::jsonb; EXCEPTION WHEN others THEN NULL; END $$;
      DO $$ BEGIN ALTER TABLE risk_assessments ALTER COLUMN risk_areas TYPE jsonb USING risk_areas::jsonb; EXCEPTION WHEN others THEN NULL; END $$;
      DO $$ BEGIN ALTER TABLE risk_assessments ALTER COLUMN action_plan TYPE jsonb USING action_plan::jsonb; EXCEPTION WHEN others THEN NULL; END $$;
      DO $$ BEGIN ALTER TABLE compliance_documents ALTER COLUMN ai_tagged_standards TYPE jsonb USING ai_tagged_standards::jsonb; EXCEPTION WHEN others THEN NULL; END $$;
      DO $$ BEGIN ALTER TABLE compliance_training_modules ALTER COLUMN tagged_standards TYPE jsonb USING tagged_standards::jsonb; EXCEPTION WHEN others THEN NULL; END $$;
      DO $$ BEGIN ALTER TABLE compliance_training_modules ALTER COLUMN questions TYPE jsonb USING questions::jsonb; EXCEPTION WHEN others THEN NULL; END $$;
      DO $$ BEGIN ALTER TABLE compliance_training_modules ALTER COLUMN conflict_flags TYPE jsonb USING conflict_flags::jsonb; EXCEPTION WHEN others THEN NULL; END $$;
      DO $$ BEGIN ALTER TABLE compliance_training_modules ALTER COLUMN assigned_roles TYPE jsonb USING assigned_roles::jsonb; EXCEPTION WHEN others THEN NULL; END $$;
      DO $$ BEGIN ALTER TABLE regulatory_watch_findings ALTER COLUMN affected_item_ids TYPE jsonb USING affected_item_ids::jsonb; EXCEPTION WHEN others THEN NULL; END $$;
      DO $$ BEGIN ALTER TABLE executive_briefs ALTER COLUMN top_risks TYPE jsonb USING top_risks::jsonb; EXCEPTION WHEN others THEN NULL; END $$;
      DO $$ BEGIN ALTER TABLE executive_briefs ALTER COLUMN email_sent_to TYPE jsonb USING email_sent_to::jsonb; EXCEPTION WHEN others THEN NULL; END $$;

      -- MEDIUM-7: Content tables (quiz levels, questions, deep-dive, handbook, assessments)
      CREATE TABLE IF NOT EXISTS content_levels (
        id TEXT PRIMARY KEY,
        module_id TEXT NOT NULL,
        name TEXT NOT NULL,
        description TEXT NOT NULL,
        icon TEXT NOT NULL,
        color TEXT NOT NULL,
        required_score INTEGER NOT NULL DEFAULT 0,
        chapter_summary JSONB,
        study_material JSONB,
        is_draft BOOLEAN NOT NULL DEFAULT false,
        display_order INTEGER NOT NULL DEFAULT 0
      );
      CREATE INDEX IF NOT EXISTS idx_content_levels_module ON content_levels(module_id);
      CREATE TABLE IF NOT EXISTS content_questions (
        id TEXT PRIMARY KEY,
        level_id TEXT NOT NULL,
        question TEXT NOT NULL,
        scenario TEXT,
        options TEXT[] NOT NULL,
        correct_index INTEGER NOT NULL,
        explanation TEXT NOT NULL DEFAULT '',
        xp_reward INTEGER NOT NULL DEFAULT 10,
        is_swipe BOOLEAN NOT NULL DEFAULT false,
        is_draft BOOLEAN NOT NULL DEFAULT false,
        cms_tag TEXT,
        tutor JSONB,
        display_order INTEGER NOT NULL DEFAULT 0
      );
      CREATE INDEX IF NOT EXISTS idx_content_questions_level ON content_questions(level_id);
      CREATE TABLE IF NOT EXISTS content_deep_dive_levels (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        description TEXT NOT NULL DEFAULT '',
        icon TEXT NOT NULL DEFAULT '',
        color TEXT NOT NULL DEFAULT '',
        base_level_id TEXT NOT NULL DEFAULT '',
        module_id TEXT NOT NULL DEFAULT 'hospital',
        display_order INTEGER NOT NULL DEFAULT 0
      );
      CREATE INDEX IF NOT EXISTS idx_content_dd_levels_module ON content_deep_dive_levels(module_id);
      CREATE TABLE IF NOT EXISTS content_deep_dive_questions (
        id TEXT PRIMARY KEY,
        level_id TEXT NOT NULL,
        base_question TEXT NOT NULL,
        base_options TEXT[] NOT NULL,
        base_correct_index INTEGER NOT NULL,
        base_explanation TEXT NOT NULL DEFAULT '',
        base_xp INTEGER NOT NULL DEFAULT 15,
        follow_ups JSONB NOT NULL DEFAULT '[]',
        display_order INTEGER NOT NULL DEFAULT 0
      );
      CREATE INDEX IF NOT EXISTS idx_content_dd_questions_level ON content_deep_dive_questions(level_id);
      CREATE TABLE IF NOT EXISTS content_handbook_chapters (
        id SERIAL PRIMARY KEY,
        level_id TEXT NOT NULL,
        module_id TEXT NOT NULL,
        title TEXT NOT NULL,
        overview TEXT NOT NULL DEFAULT '',
        sections JSONB NOT NULL DEFAULT '[]',
        quick_reference JSONB NOT NULL DEFAULT '[]',
        display_order INTEGER NOT NULL DEFAULT 0
      );
      CREATE UNIQUE INDEX IF NOT EXISTS idx_content_handbook_level_module ON content_handbook_chapters(level_id, module_id);
      CREATE INDEX IF NOT EXISTS idx_content_handbook_module ON content_handbook_chapters(module_id);
      CREATE TABLE IF NOT EXISTS content_assessment_questions (
        id TEXT PRIMARY KEY,
        assessment_type TEXT NOT NULL,
        section_id TEXT NOT NULL DEFAULT '',
        chapter_id TEXT NOT NULL DEFAULT '',
        chapter_name TEXT NOT NULL DEFAULT '',
        question TEXT NOT NULL,
        scenario TEXT,
        options TEXT[] NOT NULL,
        correct_index INTEGER NOT NULL,
        explanation TEXT NOT NULL DEFAULT '',
        xp_reward INTEGER NOT NULL DEFAULT 10,
        is_swipe BOOLEAN NOT NULL DEFAULT false,
        cms_tag TEXT,
        tutor JSONB,
        display_order INTEGER NOT NULL DEFAULT 0
      );
      CREATE INDEX IF NOT EXISTS idx_content_assessment_type ON content_assessment_questions(assessment_type);

      -- Points Ledger
      CREATE TABLE IF NOT EXISTS points_ledger (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id),
        facility_id INTEGER REFERENCES facilities(id),
        event_type VARCHAR(50) NOT NULL,
        points_awarded INTEGER NOT NULL,
        level_id TEXT,
        question_id TEXT,
        metadata JSONB DEFAULT '{}',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );
      CREATE INDEX IF NOT EXISTS idx_points_ledger_user_id ON points_ledger(user_id);
      CREATE INDEX IF NOT EXISTS idx_points_ledger_facility_id ON points_ledger(facility_id);
      CREATE INDEX IF NOT EXISTS idx_points_ledger_created_at ON points_ledger(created_at);
      CREATE INDEX IF NOT EXISTS idx_points_ledger_event_type ON points_ledger(event_type);

      -- Pilot Config
      CREATE TABLE IF NOT EXISTS pilot_config (
        id SERIAL PRIMARY KEY,
        facility_id INTEGER NOT NULL REFERENCES facilities(id),
        pilot_name TEXT,
        start_date TIMESTAMP WITH TIME ZONE NOT NULL,
        end_date TIMESTAMP WITH TIME ZONE NOT NULL,
        is_active BOOLEAN DEFAULT true,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );
    `);
    console.log("Ensured all database tables exist");
    await seedFacilities(client);
    // One-time adoption: assign orphan users (null facility_id) to the matching known facility.
    // Covers users who registered before facility codes were required.
    await client.query(`
      UPDATE users SET facility_id = f.id
      FROM facilities f
      WHERE users.facility_id IS NULL
        AND f.code = '482601'
        AND (users.organization_type = 'hospital' OR users.organization_type IS NULL)
    `);
    // Normalize org type within each facility: update any user whose org type
    // differs from the majority in their facility so that teammates always see
    // each other on the leaderboard and in admin views.
    await client.query(`
      WITH facility_majority AS (
        SELECT DISTINCT ON (facility_id)
          facility_id,
          organization_type
        FROM (
          SELECT facility_id, organization_type, COUNT(*) AS cnt
          FROM users
          WHERE facility_id IS NOT NULL AND organization_type IS NOT NULL
          GROUP BY facility_id, organization_type
        ) ranked
        ORDER BY facility_id, cnt DESC, organization_type
      )
      UPDATE users
      SET organization_type = fm.organization_type
      FROM facility_majority fm
      WHERE users.facility_id = fm.facility_id
        AND users.organization_type IS DISTINCT FROM fm.organization_type
    `);
    // Sync total_xp from points_ledger — the single source of truth for all earned points.
    // points_ledger is written server-side for every quiz answer, flashcard review, etc.
    // This matches the Leadership Console (Staff Engagement) so both surfaces always agree.
    await client.query(`
      UPDATE user_streaks SET total_xp = (
        SELECT COALESCE(SUM(pl.points_awarded), 0)
        FROM points_ledger pl
        WHERE pl.user_id = user_streaks.user_id
      )
    `);
    await seedRoles(client);
    await seedLeadershipCodes(client);
    await seedComplianceItems(client);
  } catch (err) {
    console.error("Error ensuring tables exist:", err);
  } finally {
    client.release();
  }
  // MEDIUM-7: seed question/level/handbook content (idempotent - skips if already seeded)
  try {
    const { seedAllContent } = await import("./seed-content.js");
    await seedAllContent();
  } catch (err) {
    console.error("Error seeding content:", err);
  }
}

import { ROLE_CONFIGS } from "@shared/roles";

function scopeToDb(scope: "DEPT" | "DEPT_PLUS_ALL" | "FULL"): "standard" | "dual" | "all" {
  if (scope === "FULL") return "all";
  if (scope === "DEPT_PLUS_ALL") return "dual";
  return "standard";
}

function deptToDbCode(department: string): string {
  switch (department) {
    case "Operating Room": return "OR";
    case "Sterile Processing": return "SPD";
    case "PACU & Floor": return "PACU";
    case "Environmental Services": return "EVS";
    case "Facilities & Maintenance": return "Facilities";
    case "Leadership & Compliance": return "Leadership";
    default: return department;
  }
}

const ROLE_SEED: { name: string; slug: string; department: string; scope: "standard" | "all" | "dual"; chapters: string[] }[] =
  ROLE_CONFIGS.map((r) => ({
    name: r.title,
    slug: r.id,
    department: deptToDbCode(r.department),
    scope: scopeToDb(r.scope),
    chapters: r.chapters,
  }));

const MOSH_FEATURES = {
  education: true,
  compliance: false,
  survey_readiness_agent: false,
  content_intelligence_agent: false,
  compliance_task_manager: false,
  executive_readiness_agent: false,
  wall_chart_tracker: false,
  regulatory_watch_agent: false,
};

const FULL_FEATURES = {
  education: true,
  compliance: true,
  survey_readiness_agent: true,
  content_intelligence_agent: true,
  compliance_task_manager: true,
  executive_readiness_agent: true,
  wall_chart_tracker: true,
  regulatory_watch_agent: true,
};

const STANDARD_ROLE_VISIBILITY = {
  or_circulating_nurse: true,
  or_manager_charge_nurse: true,
  scrub_tech_surgical_tech: true,
  surgical_orthopedic_assistant: true,
  anesthesia_assistant_crna: true,
  spd_technician: true,
  pacu_floor_nurse: true,
  preadmission_testing_nurse: true,
  environmental_services: true,
  facilities_maintenance: false,
  compliance_officer_cno: true,
  nurse_educator_staff_dev: true,
};

const ENTERPRISE_ROLE_VISIBILITY = {
  ...STANDARD_ROLE_VISIBILITY,
  facilities_maintenance: true,
};

interface KnownFacility {
  code: string;
  name: string;
  features: Record<string, boolean>;
  roleVisibility: Record<string, boolean>;
}

const KNOWN_FACILITIES: KnownFacility[] = [
  {
    code: "TSC001",
    name: "The Surgery Center",
    features: FULL_FEATURES,
    roleVisibility: STANDARD_ROLE_VISIBILITY,
  },
  {
    code: "482601",
    name: "Midwest Orthopedic Specialty Hospital",
    features: MOSH_FEATURES,
    roleVisibility: STANDARD_ROLE_VISIBILITY,
  },
];

const LEADERSHIP_CODES_BY_FACILITY: Record<string, string[]> = {
  TSC001: [
    "ARLD-K4X9-PQ2M",
    "ARLD-T7NB-W1CJ",
    "ARLD-5HFR-D8LZ",
  ],
  "482601": [
    "MOSH-J7KP-X4NR",
    "MOSH-B2WQ-T9FV",
    "MOSH-C6LD-Y3HZ",
  ],
};

async function seedComplianceItems(client: pg.PoolClient) {
  // Ensure module_scope, surface, and owner_role columns exist on pre-migration DBs
  await client.query(`ALTER TABLE compliance_items ADD COLUMN IF NOT EXISTS module_scope TEXT NOT NULL DEFAULT 'ASC'`);
  await client.query(`ALTER TABLE compliance_items ADD COLUMN IF NOT EXISTS surface TEXT NOT NULL DEFAULT 'tasks'`);
  await client.query(`ALTER TABLE compliance_items ADD COLUMN IF NOT EXISTS owner_role TEXT NOT NULL DEFAULT 'administrator'`);
  await client.query(`
    CREATE TABLE IF NOT EXISTS compliance_completion_log (
      id            SERIAL PRIMARY KEY,
      item_id       INTEGER NOT NULL,
      item_code     VARCHAR(50),
      item_name     TEXT,
      completed_by  VARCHAR(100),
      completed_at  TIMESTAMPTZ DEFAULT NOW(),
      notes         TEXT,
      facility_id   VARCHAR(50),
      module        VARCHAR(20) DEFAULT 'ASC',
      volume        INTEGER,
      frequency     VARCHAR(30)
    )
  `);
  await client.query(`ALTER TABLE compliance_items ADD COLUMN IF NOT EXISTS status VARCHAR(20) DEFAULT 'missing'`);
  await client.query(`ALTER TABLE compliance_items ADD COLUMN IF NOT EXISTS posted_date TIMESTAMPTZ DEFAULT NULL`);
  await client.query(`ALTER TABLE compliance_items ADD COLUMN IF NOT EXISTS next_due_date TIMESTAMPTZ DEFAULT NULL`);
  await client.query(`ALTER TABLE compliance_items ADD COLUMN IF NOT EXISTS posted_by VARCHAR(100) DEFAULT NULL`);

  const { ASC_COMPLIANCE_ITEMS, HOSPITAL_COMPLIANCE_ITEMS } = await import("./compliance-seed-data.js");

  const { rows: ascRows } = await client.query("SELECT COUNT(*) FROM compliance_items WHERE module_scope = 'ASC'");
  if (parseInt(ascRows[0].count) === 0) {
    for (const item of ASC_COMPLIANCE_ITEMS) {
      await client.query(
        `INSERT INTO compliance_items (module, module_scope, volume, standard_code, item_name, frequency, tier, category, surveyor_priority, agent_watch)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
        ["asc", "ASC", item.volume, item.standardCode, item.itemName, item.frequency, item.tier, item.category, item.surveyorPriority, true]
      );
    }
    await client.query(
      `INSERT INTO content_changelog (content_type, scope, action, item_count, version, description, changed_by)
       VALUES ('compliance_items', 'ASC', 'initial_seed', $1, 'v44', 'Initial AAAHC v44 ASC compliance items seeded from wall chart', 'system')`,
      [ASC_COMPLIANCE_ITEMS.length]
    );
    console.log(`Seeded ${ASC_COMPLIANCE_ITEMS.length} ASC compliance items`);
  }

  // Seed AAAHC document vault — vendor-owned service records (TIER_4)
  const { rows: docVaultVendorRows } = await client.query("SELECT COUNT(*) FROM compliance_items WHERE surface = 'document_vault' AND owner_role = 'vendor'");
  if (parseInt(docVaultVendorRows[0].count) === 0) {
    const { ASC_DOCUMENT_VAULT_VENDOR } = await import("./compliance-seed-data.js");
    for (const item of ASC_DOCUMENT_VAULT_VENDOR) {
      await client.query(
        `INSERT INTO compliance_items (module, module_scope, volume, standard_code, item_name, frequency, tier, category, surveyor_priority, agent_watch, surface, owner_role)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`,
        ["asc", "ASC", item.volume, item.standardCode, item.itemName, item.frequency, item.tier, item.category, item.surveyorPriority, true, item.surface, item.ownerRole]
      );
    }
    console.log(`Seeded ${ASC_DOCUMENT_VAULT_VENDOR.length} ASC document vault vendor items`);
  }

  // Seed AAAHC document vault — policies, plans, certifications (TIER_2)
  const { rows: docVaultRows } = await client.query("SELECT COUNT(*) FROM compliance_items WHERE surface = 'document_vault' AND owner_role = 'administrator'");
  if (parseInt(docVaultRows[0].count) === 0) {
    const { ASC_DOCUMENT_VAULT } = await import("./compliance-seed-data.js");
    for (const item of ASC_DOCUMENT_VAULT) {
      await client.query(
        `INSERT INTO compliance_items (module, module_scope, volume, standard_code, item_name, frequency, tier, category, surveyor_priority, agent_watch, surface, owner_role)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`,
        ["asc", "ASC", item.volume, item.standardCode, item.itemName, item.frequency, item.tier, item.category, item.surveyorPriority, true, item.surface, item.ownerRole]
      );
    }
    console.log(`Seeded ${ASC_DOCUMENT_VAULT.length} ASC document vault items`);
  }

  // Seed AAAHC facility logs — recurring operational checklists (TIER_1)
  const { rows: facilityLogRows } = await client.query("SELECT COUNT(*) FROM compliance_items WHERE surface = 'facility_logs'");
  if (parseInt(facilityLogRows[0].count) === 0) {
    const { ASC_FACILITY_LOGS } = await import("./compliance-seed-data.js");
    for (const item of ASC_FACILITY_LOGS) {
      await client.query(
        `INSERT INTO compliance_items (module, module_scope, volume, standard_code, item_name, frequency, tier, category, surveyor_priority, agent_watch, surface, owner_role)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`,
        ["asc", "ASC", item.volume, item.standardCode, item.itemName, item.frequency, item.tier, item.category, item.surveyorPriority, true, item.surface, item.ownerRole]
      );
    }
    console.log(`Seeded ${ASC_FACILITY_LOGS.length} ASC facility log items`);
  }

  // Seed AAAHC wall chart posting items — idempotent check by surface; migrate old category-based rows
  const { rows: wallChartRows } = await client.query("SELECT COUNT(*) FROM compliance_items WHERE surface = 'wall_chart'");
  if (parseInt(wallChartRows[0].count) === 0) {
    // Remove old schema posting requirement rows (category-based) before re-seeding
    await client.query("DELETE FROM compliance_items WHERE category = 'Posting Requirements'");
    const { ASC_POSTING_REQUIREMENTS } = await import("./compliance-seed-data.js");
    for (const item of ASC_POSTING_REQUIREMENTS) {
      await client.query(
        `INSERT INTO compliance_items (module, module_scope, volume, standard_code, item_name, frequency, tier, category, surveyor_priority, agent_watch, surface, owner_role)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`,
        ["asc", "ASC", item.volume, item.standardCode, item.itemName, item.frequency, item.tier, item.category, item.surveyorPriority, true, item.surface, item.ownerRole]
      );
    }
    console.log(`Seeded ${ASC_POSTING_REQUIREMENTS.length} ASC wall chart posting items`);
  }

  const { rows: hospRows } = await client.query("SELECT COUNT(*) FROM compliance_items WHERE module_scope = 'Hospital'");
  if (parseInt(hospRows[0].count) === 0) {
    for (const item of HOSPITAL_COMPLIANCE_ITEMS) {
      await client.query(
        `INSERT INTO compliance_items (module, module_scope, volume, standard_code, item_name, frequency, tier, category, surveyor_priority, agent_watch)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
        ["hospital", "Hospital", item.volume, item.standardCode, item.itemName, item.frequency, item.tier, item.category, item.surveyorPriority, true]
      );
    }
    await client.query(
      `INSERT INTO content_changelog (content_type, scope, action, item_count, version, description, changed_by)
       VALUES ('compliance_items', 'Hospital', 'initial_seed', $1, 'v1.0', 'Initial JCAHO Hospital compliance items seeded (EC, EM, HR, IC, LS, MM, NPSG, PI, RC, LD, MS)', 'system')`,
      [HOSPITAL_COMPLIANCE_ITEMS.length]
    );
    console.log(`Seeded ${HOSPITAL_COMPLIANCE_ITEMS.length} Hospital compliance items`);
  }
}

async function seedLeadershipCodes(client: pg.PoolClient) {
  for (const [facilityCode, codes] of Object.entries(LEADERSHIP_CODES_BY_FACILITY)) {
    const fRes = await client.query("SELECT id FROM facilities WHERE code = $1", [facilityCode]);
    if (fRes.rows.length === 0) continue;
    const facilityId = fRes.rows[0].id;
    for (const code of codes) {
      await client.query(
        "INSERT INTO leadership_role_codes (code, facility_id) VALUES ($1, $2) ON CONFLICT (code) DO NOTHING",
        [code, facilityId]
      );
    }
  }
}

async function seedFacilities(client: pg.PoolClient) {
  for (const f of KNOWN_FACILITIES) {
    const existing = await client.query("SELECT id FROM facilities WHERE code = $1", [f.code]);
    if (existing.rows.length === 0) {
      await client.query(
        "INSERT INTO facilities (code, name, features, role_visibility) VALUES ($1, $2, $3, $4)",
        [f.code, f.name, JSON.stringify(f.features), JSON.stringify(f.roleVisibility)],
      );
      console.log(`Seeded facility: ${f.name} (${f.code})`);
    } else {
      await client.query(
        "UPDATE facilities SET name = $1, features = $2, role_visibility = $3 WHERE code = $4",
        [f.name, JSON.stringify(f.features), JSON.stringify(f.roleVisibility), f.code],
      );
    }
  }
  console.log("Seeded known facilities");
}

async function seedRoles(client: pg.PoolClient) {
  for (const r of ROLE_SEED) {
    const existing = await client.query("SELECT id FROM roles WHERE slug = $1", [r.slug]);
    let roleId: number;
    if (existing.rows.length === 0) {
      const inserted = await client.query(
        "INSERT INTO roles (name, slug, department, scope) VALUES ($1, $2, $3, $4) RETURNING id",
        [r.name, r.slug, r.department, r.scope]
      );
      roleId = inserted.rows[0].id;
    } else {
      roleId = existing.rows[0].id;
      await client.query("UPDATE roles SET name=$1, department=$2, scope=$3 WHERE id=$4",
        [r.name, r.department, r.scope, roleId]);
    }
    await client.query("DELETE FROM role_chapter_mappings WHERE role_id = $1", [roleId]);
    for (let i = 0; i < r.chapters.length; i++) {
      await client.query(
        "INSERT INTO role_chapter_mappings (role_id, chapter_slug, display_order) VALUES ($1, $2, $3)",
        [roleId, r.chapters[i], i]
      );
    }
  }
  console.log("Seeded roles and role_chapter_mappings");
}

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUser(id: number, data: Partial<User>): Promise<User | undefined>;

  getStreak(userId: number): Promise<UserStreak | undefined>;
  upsertStreak(userId: number, data: Partial<UserStreak>): Promise<UserStreak>;

  getProgress(userId: number): Promise<UserProgress[]>;
  getProgressForUsers(userIds: number[]): Promise<UserProgress[]>;
  getProgressByLevel(userId: number, levelId: string): Promise<UserProgress | undefined>;
  upsertProgress(userId: number, levelId: string, score: number, totalQuestions: number): Promise<UserProgress>;

  getDailyActivity(userId: number, date: string): Promise<DailyActivity | undefined>;
  getActivities(userId: number): Promise<DailyActivity[]>;
  upsertDailyActivity(userId: number, date: string, questionsAnswered: number, correctAnswers: number, xpEarned: number): Promise<DailyActivity>;

  getQuizSession(userId: number, levelId: string): Promise<QuizSession | undefined>;
  getUserQuizSessions(userId: number): Promise<QuizSession[]>;
  getAllQuizSessions(): Promise<QuizSession[]>;
  getQuizSessionsForUsers(userIds: number[]): Promise<QuizSession[]>;
  upsertQuizSession(userId: number, levelId: string, data: Partial<QuizSession>): Promise<QuizSession>;
  deleteQuizSession(userId: number, levelId: string): Promise<void>;

  getAllUsers(): Promise<User[]>;
  getUsersByFacility(facilityId: number): Promise<User[]>;
  getAllStreaks(): Promise<UserStreak[]>;
  getStreaksForUsers(userIds: number[]): Promise<UserStreak[]>;
  getAllActivities(): Promise<DailyActivity[]>;
  getActivitiesForUsers(userIds: number[]): Promise<DailyActivity[]>;
  clearAllActivities(): Promise<void>;

  addContentChangelog(entry: Omit<InsertContentChangelog, "id" | "changedAt">): Promise<ContentChangelog>;
  getContentChangelog(limit?: number): Promise<ContentChangelog[]>;

  createFacility(data: InsertFacility): Promise<Facility>;
  updateFacility(id: number, data: { complianceMode?: string }): Promise<Facility>;
  getFacility(id: number): Promise<Facility | undefined>;
  getFacilityByCode(code: string): Promise<Facility | undefined>;
  getAllFacilities(): Promise<Facility[]>;

  getDiagnosticResults(userId: number): Promise<DiagnosticResult[]>;
  createDiagnosticResult(userId: number, score: number, totalQuestions: number, answers: unknown): Promise<DiagnosticResult>;
  getMasteryResults(userId: number): Promise<MasteryResult[]>;
  createMasteryResult(userId: number, score: number, totalQuestions: number, answers: unknown): Promise<MasteryResult>;

  getAscPretestResults(userId: number): Promise<AscPretestResult[]>;
  createAscPretestResult(userId: number, score: number, totalQuestions: number, answers: unknown, chapterScores: unknown): Promise<AscPretestResult>;
  getAscPosttestResults(userId: number): Promise<AscPosttestResult[]>;
  createAscPosttestResult(userId: number, score: number, totalQuestions: number, answers: unknown, chapterScores: unknown): Promise<AscPosttestResult>;

  getDnvPretestResults(userId: number): Promise<DnvPretestResult[]>;
  createDnvPretestResult(userId: number, score: number, totalQuestions: number, answers: unknown, chapterScores: unknown): Promise<DnvPretestResult>;
  getDnvPosttestResults(userId: number): Promise<DnvPosttestResult[]>;
  createDnvPosttestResult(userId: number, score: number, totalQuestions: number, answers: unknown, chapterScores: unknown): Promise<DnvPosttestResult>;

  getAllRoles(): Promise<Role[]>;
  getRoleById(id: number): Promise<Role | undefined>;
  getRoleBySlug(slug: string): Promise<Role | undefined>;
  getRoleChapters(roleId: number): Promise<RoleChapterMapping[]>;
  getUserAssignedChapters(userId: number): Promise<string[]>;

  getDiagnosticSession(userId: number): Promise<DiagnosticSession | undefined>;
  upsertDiagnosticSession(userId: number, data: Partial<DiagnosticSession>): Promise<DiagnosticSession>;
  deleteDiagnosticSession(userId: number): Promise<void>;
  getMasterySession(userId: number): Promise<MasterySession | undefined>;
  upsertMasterySession(userId: number, data: Partial<MasterySession>): Promise<MasterySession>;
  deleteMasterySession(userId: number): Promise<void>;

  getFlashcardReviews(userId: number, levelId: string): Promise<FlashcardReview[]>;
  upsertFlashcardReview(userId: number, levelId: string, cardIndex: number, nextReviewAt: Date, intervalMinutes: number, lastRating: string): Promise<FlashcardReview>;
  resetFlashcardReviews(userId: number, levelId: string): Promise<void>;
  getDueFlashcards(userId: number): Promise<FlashcardReview[]>;
  getDueFlashcardCount(userId: number): Promise<number>;

  enableMfa(userId: number, secret: string): Promise<void>;
  disableMfa(userId: number): Promise<void>;

  createAuditLog(entry: {
    userId?: number | null;
    username?: string | null;
    leadershipRole: string;
    facilityId?: string | null;
    facilityName?: string | null;
    action: string;
    meta?: Record<string, unknown> | null;
    ipAddress?: string | null;
  }): Promise<AuditLog>;
  getAuditLogs(limit?: number): Promise<AuditLog[]>;
  getAuditLogsByUser(userId: number): Promise<AuditLog[]>;

  getRiskAssessment(userId: number, module: string): Promise<RiskAssessment | undefined>;
  upsertRiskAssessment(userId: number, module: string, riskAreas: unknown, notes: string, actionPlan: unknown): Promise<RiskAssessment>;
  deleteRiskAssessment(userId: number, module: string): Promise<void>;
  getRiskAssessmentsByFacility(facilityId: number | null, module: string): Promise<(RiskAssessment & { username: string; firstName: string; lastName: string; department: string | null })[]>;

  createFeedback(data: { userId?: number; username?: string; firstName?: string; lastName?: string; facilityId?: number; message: string; category?: string; attachments?: { name: string; type: string; data: string }[] }): Promise<Feedback>;
  getAllFeedback(): Promise<Feedback[]>;

  getDailyActivitySince(startDate: string): Promise<DailyActivity[]>;

  validateLeadershipCode(code: string, facilityId: number | null): Promise<boolean>;
  getLeadershipCodes(): Promise<{ id: number; code: string; facilityId: number | null; facilityName: string | null; createdAt: Date }[]>;

  // Compliance
  getComplianceItems(organizationType?: string): Promise<ComplianceItem[]>;
  getFacilityLogsItems(): Promise<ComplianceItem[]>;
  getDocumentVaultItems(): Promise<ComplianceItem[]>;
  getDocumentVaultWithStatus(facilityId: number): Promise<{ item: ComplianceItem; doc: ComplianceDocument | null }[]>;
  upsertDocumentUpload(data: { facilityId: number; itemId: number; documentName: string; uploadedBy: string; expirationDate?: string; effectiveDate?: string }): Promise<ComplianceDocument>;
  getWallChartItems(): Promise<ComplianceItem[]>;
  markWallChartItemPosted(itemId: number, postedBy: string, nextDueDate: string): Promise<ComplianceItem>;
  logChecklistCompletion(data: { itemId: number; itemCode: string; itemName: string; completedBy: string; notes?: string; facilityId: string; volume: number; frequency: string }): Promise<ComplianceCompletionLog>;
  getChecklistLogs(facilityId: string): Promise<ComplianceCompletionLog[]>;
  getChecklistHistory(itemId: number, facilityId: string): Promise<ComplianceCompletionLog[]>;
  getComplianceLogs(facilityId: number): Promise<ComplianceLog[]>;
  createComplianceLog(data: { facilityId: number; itemId: number; completedBy: string; notes?: string; nextDue?: string }): Promise<ComplianceLog>;
  getComplianceDocuments(facilityId: number): Promise<ComplianceDocument[]>;
  createComplianceDocument(data: { facilityId: number; itemId: number; documentName: string; uploadedBy: string; expirationDate?: string; effectiveDate?: string }): Promise<ComplianceDocument>;
  getComplianceTrainingModules(facilityId: number, status?: string): Promise<ComplianceTrainingModule[]>;
  getComplianceTrainingModule(id: number): Promise<ComplianceTrainingModule | undefined>;
  createComplianceTrainingModule(data: { facilityId: number; documentId: number; itemId: number; title: string; taggedStandards: unknown; questions: unknown; conflictFlags: unknown; assignedRoles: unknown; assignedMemberCount: number }): Promise<ComplianceTrainingModule>;
  updateComplianceTrainingModuleStatus(id: number, status: string, approvedBy?: string): Promise<ComplianceTrainingModule>;
  getStaffTrainingAlerts(facilityId: number): Promise<StaffTrainingAlert[]>;
  createStaffTrainingAlert(data: { facilityId: number; userId: number; complianceItemId?: number | null; alertType: string; category: string; message: string; daysOverdue: number }): Promise<StaffTrainingAlert>;
  clearStaffTrainingAlerts(facilityId: number): Promise<void>;
  markAllStaffTrainingAlertsRead(facilityId: number): Promise<void>;
  createComplianceTask(data: { facilityId: number; itemId: number; assignedTo: string; dueDate: string; createdBy: string; createdByAgent: boolean }): Promise<ComplianceTask>;
  getComplianceTasks(facilityId: number): Promise<ComplianceTask[]>;
  getExecutiveBriefs(facilityId: number): Promise<ExecutiveBrief[]>;
  getExecutiveBrief(id: number): Promise<ExecutiveBrief | undefined>;
  getLatestExecutiveBrief(facilityId: number): Promise<ExecutiveBrief | undefined>;
  createExecutiveBrief(data: { facilityId: number; weekOf: string; readinessScore: number; previousScore?: number | null; trendDirection: string; topRisks: unknown; overdueTasksCount: number; expiringDocsCount: number; trainingAlertsCount: number; regulatoryFindingsCount: number; daysToNextEvent?: number | null; narrativeSummary: string }): Promise<ExecutiveBrief>;
  updateExecutiveBriefEmailStatus(id: number, emailSentTo: unknown, emailSentAt: Date): Promise<ExecutiveBrief>;
  updateComplianceTaskStatus(id: number, status: string): Promise<ComplianceTask>;
  getRegulatoryWatchFindings(facilityId: number): Promise<RegulatoryWatchFinding[]>;
  createRegulatoryWatchFinding(data: { facilityId: number; source: string; standardCode: string; title: string; summary: string; sourceUrl?: string; affectedItemIds: unknown; affectedItemCount: number; affectedDocumentCount: number; taskId?: number }): Promise<RegulatoryWatchFinding>;
  updateRegulatoryWatchFindingStatus(id: number, status: string, reviewedBy?: string): Promise<RegulatoryWatchFinding>;
  clearRegulatoryWatchFindings(facilityId: number): Promise<void>;

  // Teams
  createTeam(data: { name: string; facilityId: number | null; department?: string | null; createdByUserId: number }): Promise<Team>;
  getTeamsForFacility(facilityId: number | null): Promise<(Team & { memberCount: number })[]>;
  getAllTeams(): Promise<(Team & { memberCount: number })[]>;
  renameTeam(teamId: number, name: string): Promise<Team>;
  deleteTeam(teamId: number): Promise<void>;
  getTeamMemberIds(teamId: number): Promise<number[]>;
  getTeamMembersWithStats(teamId: number): Promise<{ id: number; username: string; firstName: string; lastName: string; department: string | null; totalXp: number; currentStreak: number; leadershipRole: string }[]>;
  setTeamMembers(teamId: number, userIds: number[]): Promise<void>;

  // Rate limiting (HIGH-3: persistent, restart-safe)
  recordRateLimitEvent(userId: number, endpoint: string): Promise<void>;
  countRateLimitEvents(userId: number, endpoint: string, windowMs: number): Promise<number>;
  pruneRateLimitEvents(): Promise<void>;

  // Content queries (MEDIUM-7: question/level/handbook content served from DB)
  getLevelsByModule(moduleId: ModuleId, opts?: { includeDraft?: boolean }): Promise<Level[]>;
  getLevelById(levelId: string): Promise<Level | undefined>;
  getAllDeepDiveLevels(): Promise<DeepDiveLevel[]>;
  getDeepDiveLevelsByModule(moduleId: string): Promise<DeepDiveLevel[]>;
  getHandbookByModule(moduleId: string): Promise<HandbookChapter[]>;
  getDiagnosticQuestions(): Promise<DiagnosticQuestion[]>;
  getMasteryQuestions(): Promise<MasteryQuestion[]>;
  getAscPretestQuestions(): Promise<AscPretestQuestion[]>;
  getAscPosttestQuestions(): Promise<AscPretestQuestion[]>;
  getDnvPretestQuestions(): Promise<DnvTestQuestion[]>;
  getDnvPosttestQuestions(): Promise<DnvTestQuestion[]>;

  // Points Ledger
  addPointsEvent(userId: number, facilityId: number | null, eventType: string, pointsAwarded: number, meta?: Record<string, unknown>): Promise<void>;
  getUserTotalPoints(userId: number, startDate?: Date, endDate?: Date): Promise<number>;
  getFacilityLeaderboard(facilityId: number | null, limit?: number, startDate?: Date, endDate?: Date, orgType?: string): Promise<import("@shared/schema").PointsLeaderboardEntry[]>;
  getStaffEngagement(facilityId: number | null, startDate?: Date, endDate?: Date, orgType?: string): Promise<import("@shared/schema").StaffEngagementEntry[]>;
  getUserDrillDown(userId: number, facilityId: number, startDate?: Date, endDate?: Date): Promise<import("@shared/schema").UserDrillDown>;
  getActivePilotConfig(facilityId: number): Promise<import("@shared/schema").PilotConfig | null>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const normalized = username.trim().toLowerCase();
    const [user] = await db.select().from(users)
      .where(sql`lower(${users.username}) = ${normalized}`);
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async updateUser(id: number, data: Partial<User>): Promise<User | undefined> {
    const [user] = await db.update(users).set(data).where(eq(users.id, id)).returning();
    return user;
  }

  async getStreak(userId: number): Promise<UserStreak | undefined> {
    const [streak] = await db.select().from(userStreaks).where(eq(userStreaks.userId, userId));
    return streak;
  }

  async upsertStreak(userId: number, data: Partial<UserStreak>): Promise<UserStreak> {
    const existing = await this.getStreak(userId);
    if (existing) {
      const [updated] = await db.update(userStreaks).set(data).where(eq(userStreaks.userId, userId)).returning();
      return updated;
    }
    const [created] = await db.insert(userStreaks).values({
      userId,
      currentStreak: data.currentStreak || 0,
      longestStreak: data.longestStreak || 0,
      totalXp: data.totalXp || 0,
      lastPlayedDate: data.lastPlayedDate || null,
    }).returning();
    return created;
  }

  async getProgress(userId: number): Promise<UserProgress[]> {
    return db.select().from(userProgress).where(eq(userProgress.userId, userId));
  }

  async getProgressForUsers(userIds: number[]): Promise<UserProgress[]> {
    if (userIds.length === 0) return [];
    return db.select().from(userProgress).where(inArray(userProgress.userId, userIds));
  }

  async getProgressByLevel(userId: number, levelId: string): Promise<UserProgress | undefined> {
    const [p] = await db.select().from(userProgress).where(
      and(eq(userProgress.userId, userId), eq(userProgress.levelId, levelId))
    );
    return p;
  }

  async upsertProgress(userId: number, levelId: string, score: number, totalQuestions: number): Promise<UserProgress> {
    // MEDIUM-5: single atomic INSERT … ON CONFLICT DO UPDATE - eliminates race-condition duplicates
    const [row] = await db
      .insert(userProgress)
      .values({
        userId,
        levelId,
        score,
        totalQuestions,
        bestScore: score,
        completed: true,
        completedAt: new Date(),
      })
      .onConflictDoUpdate({
        target: [userProgress.userId, userProgress.levelId],
        set: {
          score,
          totalQuestions,
          bestScore: sql`GREATEST(user_progress.best_score, ${score})`,
          completed: true,
          completedAt: sql`COALESCE(user_progress.completed_at, NOW())`,
        },
      })
      .returning();
    return row;
  }

  async getDailyActivity(userId: number, date: string): Promise<DailyActivity | undefined> {
    const [activity] = await db.select().from(dailyActivity).where(
      and(eq(dailyActivity.userId, userId), eq(dailyActivity.date, date))
    );
    return activity;
  }

  async getActivities(userId: number): Promise<DailyActivity[]> {
    return db.select().from(dailyActivity).where(eq(dailyActivity.userId, userId)).orderBy(desc(dailyActivity.date));
  }

  async upsertDailyActivity(userId: number, date: string, questionsAnswered: number, correctAnswers: number, xpEarned: number): Promise<DailyActivity> {
    const existing = await this.getDailyActivity(userId, date);
    let result: DailyActivity;

    if (existing) {
      const [updated] = await db.update(dailyActivity).set({
        questionsAnswered: existing.questionsAnswered + questionsAnswered,
        correctAnswers: existing.correctAnswers + correctAnswers,
        xpEarned: existing.xpEarned + xpEarned,
      }).where(eq(dailyActivity.id, existing.id)).returning();
      result = updated;
    } else {
      const [created] = await db.insert(dailyActivity).values({
        userId,
        date,
        questionsAnswered,
        correctAnswers,
        xpEarned,
      }).returning();
      result = created;
    }

    // Keep user_streaks.total_xp in sync with points_ledger (single source of truth).
    // points_ledger is written server-side and matches the Leadership Console display.
    if (xpEarned > 0) {
      await pool.query(
        `INSERT INTO user_streaks (user_id, total_xp, current_streak, longest_streak)
         VALUES ($1, (SELECT COALESCE(SUM(points_awarded),0) FROM points_ledger WHERE user_id=$1), 0, 0)
         ON CONFLICT (user_id) DO UPDATE
         SET total_xp = (SELECT COALESCE(SUM(points_awarded),0) FROM points_ledger WHERE user_id=$1)`,
        [userId],
      );
    }

    return result;
  }

  async getQuizSession(userId: number, levelId: string): Promise<QuizSession | undefined> {
    const [session] = await db.select().from(quizSessions).where(
      and(eq(quizSessions.userId, userId), eq(quizSessions.levelId, levelId))
    );
    return session;
  }

  async getUserQuizSessions(userId: number): Promise<QuizSession[]> {
    return db.select().from(quizSessions).where(eq(quizSessions.userId, userId));
  }

  async getAllQuizSessions(): Promise<QuizSession[]> {
    return db.select().from(quizSessions);
  }

  async getQuizSessionsForUsers(userIds: number[]): Promise<QuizSession[]> {
    if (userIds.length === 0) return [];
    return db.select().from(quizSessions).where(inArray(quizSessions.userId, userIds));
  }

  async upsertQuizSession(userId: number, levelId: string, data: Partial<QuizSession>): Promise<QuizSession> {
    const existing = await this.getQuizSession(userId, levelId);
    if (existing) {
      const [updated] = await db.update(quizSessions).set({
        ...data,
        updatedAt: new Date(),
      }).where(eq(quizSessions.id, existing.id)).returning();
      return updated;
    }
    const [created] = await db.insert(quizSessions).values({
      userId,
      levelId,
      questionOrder: data.questionOrder || [],
      answers: (data.answers as any) ?? [],
      currentQuestion: data.currentQuestion || 0,
      correctAnswers: data.correctAnswers || 0,
      xpEarned: data.xpEarned || 0,
    }).returning();
    return created;
  }

  async deleteQuizSession(userId: number, levelId: string): Promise<void> {
    await db.delete(quizSessions).where(
      and(eq(quizSessions.userId, userId), eq(quizSessions.levelId, levelId))
    );
  }

  async getAllUsers(): Promise<User[]> {
    return db.select().from(users).orderBy(users.createdAt);
  }

  async getUsersByFacility(facilityId: number): Promise<User[]> {
    return db.select().from(users).where(eq(users.facilityId, facilityId)).orderBy(users.createdAt);
  }

  async getAllStreaks(): Promise<UserStreak[]> {
    return db.select().from(userStreaks);
  }

  async getStreaksForUsers(userIds: number[]): Promise<UserStreak[]> {
    if (userIds.length === 0) return [];
    return db.select().from(userStreaks).where(inArray(userStreaks.userId, userIds));
  }

  async getAllActivities(): Promise<DailyActivity[]> {
    return db.select().from(dailyActivity);
  }

  async getActivitiesForUsers(userIds: number[]): Promise<DailyActivity[]> {
    if (userIds.length === 0) return [];
    return db.select().from(dailyActivity).where(inArray(dailyActivity.userId, userIds));
  }

  async getDailyActivitySince(startDate: string): Promise<DailyActivity[]> {
    return db.select().from(dailyActivity).where(gte(dailyActivity.date, startDate));
  }

  async clearAllActivities(): Promise<void> {
    await db.delete(dailyActivity);
  }

  async createFacility(data: InsertFacility): Promise<Facility> {
    const [facility] = await db.insert(facilities)
      .values(data)
      .onConflictDoNothing()
      .returning();
    if (facility) return facility;
    // Another concurrent request already created this facility code — fetch it
    const [existing] = await db.select().from(facilities).where(eq(facilities.code, data.code));
    return existing;
  }

  async updateFacility(id: number, data: { complianceMode?: string }): Promise<Facility> {
    const [facility] = await db.update(facilities)
      .set({ ...(data.complianceMode !== undefined ? { complianceMode: data.complianceMode } : {}) })
      .where(eq(facilities.id, id))
      .returning();
    return facility;
  }

  async getFacility(id: number): Promise<Facility | undefined> {
    const [facility] = await db.select().from(facilities).where(eq(facilities.id, id));
    return facility;
  }

  async getFacilityByCode(code: string): Promise<Facility | undefined> {
    const [facility] = await db.select().from(facilities).where(eq(facilities.code, code));
    return facility;
  }

  async getAllFacilities(): Promise<Facility[]> {
    return db.select().from(facilities).orderBy(facilities.name);
  }

  async getDiagnosticResults(userId: number): Promise<DiagnosticResult[]> {
    return db.select().from(diagnosticResults).where(eq(diagnosticResults.userId, userId)).orderBy(desc(diagnosticResults.completedAt));
  }

  async createDiagnosticResult(userId: number, score: number, totalQuestions: number, answers: unknown): Promise<DiagnosticResult> {
    const [result] = await db.insert(diagnosticResults).values({ userId, score, totalQuestions, answers }).returning();
    return result;
  }

  async getMasteryResults(userId: number): Promise<MasteryResult[]> {
    return db.select().from(masteryResults).where(eq(masteryResults.userId, userId)).orderBy(desc(masteryResults.completedAt));
  }

  async createMasteryResult(userId: number, score: number, totalQuestions: number, answers: unknown): Promise<MasteryResult> {
    const [result] = await db.insert(masteryResults).values({ userId, score, totalQuestions, answers }).returning();
    return result;
  }

  async getAscPretestResults(userId: number): Promise<AscPretestResult[]> {
    return db.select().from(ascPretestResults).where(eq(ascPretestResults.userId, userId)).orderBy(desc(ascPretestResults.completedAt));
  }

  async createAscPretestResult(userId: number, score: number, totalQuestions: number, answers: unknown, chapterScores: unknown): Promise<AscPretestResult> {
    const [result] = await db.insert(ascPretestResults).values({ userId, score, totalQuestions, answers, chapterScores }).returning();
    return result;
  }

  async getAscTestSession(userId: number, testType: string): Promise<{ shuffleMaps: unknown } | null> {
    const client = await pool.connect();
    try {
      const r = await client.query(
        "SELECT shuffle_maps FROM asc_test_sessions WHERE user_id = $1 AND test_type = $2",
        [userId, testType],
      );
      if (r.rows.length === 0) return null;
      return { shuffleMaps: r.rows[0].shuffle_maps };
    } finally {
      client.release();
    }
  }

  async upsertAscTestSession(userId: number, testType: string, shuffleMaps: unknown): Promise<void> {
    const client = await pool.connect();
    try {
      await client.query(
        `INSERT INTO asc_test_sessions (user_id, test_type, shuffle_maps, updated_at)
         VALUES ($1, $2, $3, NOW())
         ON CONFLICT (user_id, test_type)
         DO UPDATE SET shuffle_maps = EXCLUDED.shuffle_maps, updated_at = NOW()`,
        [userId, testType, shuffleMaps],
      );
    } finally {
      client.release();
    }
  }

  async deleteAscTestSession(userId: number, testType: string): Promise<void> {
    const client = await pool.connect();
    try {
      await client.query(
        "DELETE FROM asc_test_sessions WHERE user_id = $1 AND test_type = $2",
        [userId, testType],
      );
    } finally {
      client.release();
    }
  }

  async claimAscTestSession(userId: number, testType: string): Promise<{ shuffleMaps: unknown } | null> {
    const client = await pool.connect();
    try {
      const r = await client.query(
        "DELETE FROM asc_test_sessions WHERE user_id = $1 AND test_type = $2 RETURNING shuffle_maps",
        [userId, testType],
      );
      if (r.rows.length === 0) return null;
      return { shuffleMaps: r.rows[0].shuffle_maps };
    } finally {
      client.release();
    }
  }

  async getAscPosttestResults(userId: number): Promise<AscPosttestResult[]> {
    return db.select().from(ascPosttestResults).where(eq(ascPosttestResults.userId, userId)).orderBy(desc(ascPosttestResults.completedAt));
  }

  async createAscPosttestResult(userId: number, score: number, totalQuestions: number, answers: unknown, chapterScores: unknown): Promise<AscPosttestResult> {
    const [result] = await db.insert(ascPosttestResults).values({ userId, score, totalQuestions, answers, chapterScores }).returning();
    return result;
  }

  async getDnvPretestResults(userId: number): Promise<DnvPretestResult[]> {
    return db.select().from(dnvPretestResults).where(eq(dnvPretestResults.userId, userId)).orderBy(desc(dnvPretestResults.completedAt));
  }

  async createDnvPretestResult(userId: number, score: number, totalQuestions: number, answers: unknown, chapterScores: unknown): Promise<DnvPretestResult> {
    const [result] = await db.insert(dnvPretestResults).values({ userId, score, totalQuestions, answers, chapterScores }).returning();
    return result;
  }

  async getDnvPosttestResults(userId: number): Promise<DnvPosttestResult[]> {
    return db.select().from(dnvPosttestResults).where(eq(dnvPosttestResults.userId, userId)).orderBy(desc(dnvPosttestResults.completedAt));
  }

  async createDnvPosttestResult(userId: number, score: number, totalQuestions: number, answers: unknown, chapterScores: unknown): Promise<DnvPosttestResult> {
    const [result] = await db.insert(dnvPosttestResults).values({ userId, score, totalQuestions, answers, chapterScores }).returning();
    return result;
  }

  async getDiagnosticSession(userId: number): Promise<DiagnosticSession | undefined> {
    const [session] = await db.select().from(diagnosticSessions).where(eq(diagnosticSessions.userId, userId));
    return session;
  }

  async upsertDiagnosticSession(userId: number, data: Partial<DiagnosticSession>): Promise<DiagnosticSession> {
    const existing = await this.getDiagnosticSession(userId);
    if (existing) {
      const [updated] = await db.update(diagnosticSessions).set({
        ...data,
        updatedAt: new Date(),
      }).where(eq(diagnosticSessions.id, existing.id)).returning();
      return updated;
    }
    const [created] = await db.insert(diagnosticSessions).values({
      userId,
      questionOrder: data.questionOrder || [],
      answers: (data.answers as any) ?? [],
      currentQuestion: data.currentQuestion || 0,
      shuffleMaps: (data.shuffleMaps as any) ?? {},
      questionData: data.questionData ?? null,
    }).returning();
    return created;
  }

  async deleteDiagnosticSession(userId: number): Promise<void> {
    await db.delete(diagnosticSessions).where(eq(diagnosticSessions.userId, userId));
  }

  async getMasterySession(userId: number): Promise<MasterySession | undefined> {
    const [session] = await db.select().from(masterySessions).where(eq(masterySessions.userId, userId));
    return session;
  }

  async upsertMasterySession(userId: number, data: Partial<MasterySession>): Promise<MasterySession> {
    const existing = await this.getMasterySession(userId);
    if (existing) {
      const [updated] = await db.update(masterySessions).set({
        ...data,
        updatedAt: new Date(),
      }).where(eq(masterySessions.id, existing.id)).returning();
      return updated;
    }
    const [created] = await db.insert(masterySessions).values({
      userId,
      questionOrder: data.questionOrder || [],
      answers: (data.answers as any) ?? [],
      currentQuestion: data.currentQuestion || 0,
      shuffleMaps: (data.shuffleMaps as any) ?? {},
      questionData: data.questionData ?? null,
    }).returning();
    return created;
  }

  async deleteMasterySession(userId: number): Promise<void> {
    await db.delete(masterySessions).where(eq(masterySessions.userId, userId));
  }

  async getFlashcardReviews(userId: number, levelId: string): Promise<FlashcardReview[]> {
    return db.select().from(flashcardReviews).where(
      and(eq(flashcardReviews.userId, userId), eq(flashcardReviews.levelId, levelId))
    );
  }

  async upsertFlashcardReview(userId: number, levelId: string, cardIndex: number, nextReviewAt: Date, intervalMinutes: number, lastRating: string): Promise<FlashcardReview> {
    const client = await pool.connect();
    try {
      const r = await client.query(
        `INSERT INTO flashcard_reviews (user_id, level_id, card_index, next_review_at, interval_minutes, review_count, last_rating, updated_at)
         VALUES ($1, $2, $3, $4, $5, 1, $6, NOW())
         ON CONFLICT (user_id, level_id, card_index)
         DO UPDATE SET
           next_review_at = EXCLUDED.next_review_at,
           interval_minutes = EXCLUDED.interval_minutes,
           review_count = flashcard_reviews.review_count + 1,
           last_rating = EXCLUDED.last_rating,
           updated_at = NOW()
         RETURNING *`,
        [userId, levelId, cardIndex, nextReviewAt.toISOString(), intervalMinutes, lastRating]
      );
      const row = r.rows[0];
      return {
        id: row.id,
        userId: row.user_id,
        levelId: row.level_id,
        cardIndex: row.card_index,
        nextReviewAt: new Date(row.next_review_at),
        intervalMinutes: row.interval_minutes,
        reviewCount: row.review_count,
        lastRating: row.last_rating,
        updatedAt: new Date(row.updated_at),
      };
    } finally {
      client.release();
    }
  }

  async resetFlashcardReviews(userId: number, levelId: string): Promise<void> {
    await db.delete(flashcardReviews).where(
      and(eq(flashcardReviews.userId, userId), eq(flashcardReviews.levelId, levelId))
    );
  }

  async getDueFlashcards(userId: number): Promise<FlashcardReview[]> {
    return db.select().from(flashcardReviews).where(
      and(eq(flashcardReviews.userId, userId), lte(flashcardReviews.nextReviewAt, new Date()))
    );
  }

  async getDueFlashcardCount(userId: number): Promise<number> {
    const rows = await this.getDueFlashcards(userId);
    return rows.length;
  }

  async enableMfa(userId: number, secret: string): Promise<void> {
    await db.update(users).set({ mfaSecret: secret, mfaEnabled: true }).where(eq(users.id, userId));
  }

  async disableMfa(userId: number): Promise<void> {
    await db.update(users).set({ mfaSecret: null, mfaEnabled: false }).where(eq(users.id, userId));
  }

  async createAuditLog(entry: {
    userId?: number | null;
    username?: string | null;
    leadershipRole: string;
    facilityId?: string | null;
    facilityName?: string | null;
    action: string;
    meta?: Record<string, unknown> | null;
    ipAddress?: string | null;
  }): Promise<AuditLog> {
    const [row] = await db.insert(auditLogs).values({
      userId: entry.userId ?? null,
      username: entry.username ?? null,
      leadershipRole: entry.leadershipRole,
      facilityId: entry.facilityId ?? null,
      facilityName: entry.facilityName ?? null,
      action: entry.action,
      meta: entry.meta ? JSON.stringify(entry.meta) : null,
      ipAddress: entry.ipAddress ?? null,
    }).returning();
    return row;
  }

  async getAuditLogs(limit = 500): Promise<AuditLog[]> {
    return db.select().from(auditLogs).orderBy(desc(auditLogs.createdAt)).limit(limit);
  }

  async getAuditLogsByUser(userId: number): Promise<AuditLog[]> {
    return db.select().from(auditLogs).where(eq(auditLogs.userId, userId)).orderBy(desc(auditLogs.createdAt));
  }

  async getAllRoles(): Promise<Role[]> {
    return await db.select().from(roles).orderBy(roles.department, roles.name);
  }

  async getRoleById(id: number): Promise<Role | undefined> {
    const [role] = await db.select().from(roles).where(eq(roles.id, id));
    return role;
  }

  async getRoleBySlug(slug: string): Promise<Role | undefined> {
    const [role] = await db.select().from(roles).where(eq(roles.slug, slug));
    return role;
  }

  async getRoleChapters(roleId: number): Promise<RoleChapterMapping[]> {
    return await db.select().from(roleChapterMappings)
      .where(eq(roleChapterMappings.roleId, roleId))
      .orderBy(roleChapterMappings.displayOrder);
  }

  async getUserAssignedChapters(userId: number): Promise<string[]> {
    const user = await this.getUser(userId);
    if (!user || !user.roleId) return [];
    if (user.organizationType && user.organizationType !== "hospital") return [];
    const ALL_LEVELS = ["transport","environment","segregation","sterile_storage","instruments","facilities","spd_decontam","or_sterile_field","universal_protocol","patient_care_docs","eoc_safety"];
    const DEPT_TO_LEVELS: Record<string, string[]> = {
      OR: ["or_sterile_field", "universal_protocol", "instruments", "transport"],
      SPD: ["spd_decontam", "segregation", "sterile_storage", "transport", "instruments"],
      PACU: ["patient_care_docs", "eoc_safety", "universal_protocol"],
      EVS: ["environment", "segregation", "eoc_safety"],
      Facilities: ["facilities", "eoc_safety", "environment"],
      Leadership: ALL_LEVELS,
    };
    const chaptersForRole = async (roleId: number): Promise<string[]> => {
      const role = await this.getRoleById(roleId);
      if (!role) return [];
      const mappings = await this.getRoleChapters(role.id);
      const allMapped = mappings.map(m => m.chapterSlug);
      if (role.scope === "all") return allMapped;
      if (role.scope === "dual") {
        if (user.viewScope === "all") return allMapped;
        const deptLevels = DEPT_TO_LEVELS[role.department] || ALL_LEVELS;
        return allMapped.filter(c => deptLevels.includes(c));
      }
      return allMapped;
    };
    const ids = [user.roleId, ...(user.additionalRoleIds || []).filter(id => id !== user.roleId)];
    const union = new Set<string>();
    for (const rid of ids) {
      const list = await chaptersForRole(rid);
      list.forEach(c => union.add(c));
    }
    return Array.from(union);
  }

  async getRiskAssessment(userId: number, module: string): Promise<RiskAssessment | undefined> {
    const [row] = await db.select().from(riskAssessments).where(
      and(eq(riskAssessments.userId, userId), eq(riskAssessments.module, module))
    );
    return row;
  }

  async upsertRiskAssessment(userId: number, module: string, riskAreas: string, notes: string, actionPlan: string): Promise<RiskAssessment> {
    const existing = await this.getRiskAssessment(userId, module);
    if (existing) {
      const [updated] = await db.update(riskAssessments).set({
        riskAreas, notes, actionPlan, updatedAt: new Date(),
      }).where(and(eq(riskAssessments.userId, userId), eq(riskAssessments.module, module))).returning();
      return updated;
    }
    const [created] = await db.insert(riskAssessments).values({
      userId, module, riskAreas, notes, actionPlan,
    }).returning();
    return created;
  }

  async deleteRiskAssessment(userId: number, module: string): Promise<void> {
    await db.delete(riskAssessments).where(
      and(eq(riskAssessments.userId, userId), eq(riskAssessments.module, module))
    );
  }

  async createFeedback(data: { userId?: number; username?: string; firstName?: string; lastName?: string; facilityId?: number; message: string; category?: string; attachments?: { name: string; type: string; data: string }[] }): Promise<Feedback> {
    const [row] = await db.insert(feedback).values({
      userId: data.userId ?? null,
      username: data.username ?? null,
      firstName: data.firstName ?? null,
      lastName: data.lastName ?? null,
      facilityId: data.facilityId ?? null,
      message: data.message,
      category: data.category ?? null,
      attachments: data.attachments && data.attachments.length > 0 ? (data.attachments as any) : null,
    }).returning();
    return row;
  }

  async getAllFeedback(): Promise<Feedback[]> {
    return db.select().from(feedback).orderBy(desc(feedback.createdAt));
  }

  async validateLeadershipCode(code: string, facilityId: number | null): Promise<boolean> {
    const result = await pool.query(
      "SELECT id FROM leadership_role_codes WHERE UPPER(code) = UPPER($1) AND (facility_id = $2 OR facility_id IS NULL)",
      [code.trim(), facilityId]
    );
    return result.rows.length > 0;
  }

  async getLeadershipCodes(): Promise<{ id: number; code: string; facilityId: number | null; facilityName: string | null; createdAt: Date }[]> {
    const result = await pool.query(
      `SELECT lrc.id, lrc.code, lrc.facility_id, f.name as facility_name, lrc.created_at
       FROM leadership_role_codes lrc
       LEFT JOIN facilities f ON f.id = lrc.facility_id
       ORDER BY f.name NULLS LAST, lrc.code`
    );
    return result.rows.map((r: any) => ({
      id: r.id,
      code: r.code,
      facilityId: r.facility_id,
      facilityName: r.facility_name,
      createdAt: r.created_at,
    }));
  }

  async getRiskAssessmentsByFacility(facilityId: number | null, module: string): Promise<(RiskAssessment & { username: string; firstName: string; lastName: string; department: string | null })[]> {
    const allUsers = facilityId
      ? await db.select().from(users).where(eq(users.facilityId, facilityId))
      : await db.select().from(users);
    const orgFiltered = allUsers.filter(u => (u.organizationType || "hospital") === module);
    const userIds = orgFiltered.map(u => u.id);
    if (userIds.length === 0) return [];
    const rows = await db.select().from(riskAssessments).where(
      sql`${riskAssessments.userId} = ANY(${sql`ARRAY[${sql.join(userIds.map(id => sql`${id}`), sql`, `)}]::integer[]`})`
    );
    const userMap = new Map(orgFiltered.map(u => [u.id, u]));
    return rows.map(r => ({
      ...r,
      username: userMap.get(r.userId)?.username ?? "",
      firstName: userMap.get(r.userId)?.firstName ?? "",
      lastName: userMap.get(r.userId)?.lastName ?? "",
      department: userMap.get(r.userId)?.department ?? null,
    }));
  }

  // ── Content Changelog ────────────────────────────────────────────────────────

  async addContentChangelog(entry: Omit<InsertContentChangelog, "id" | "changedAt">): Promise<ContentChangelog> {
    const [row] = await db.insert(contentChangelog).values(entry).returning();
    return row;
  }

  async getContentChangelog(limit = 100): Promise<ContentChangelog[]> {
    return db.select().from(contentChangelog).orderBy(desc(contentChangelog.changedAt)).limit(limit);
  }

  // ── Compliance ───────────────────────────────────────────────────────────────

  async getComplianceItems(organizationType = "asc"): Promise<ComplianceItem[]> {
    // Hospital users see Hospital + Both; ASC users see ASC + Both
    const scopes = organizationType === "hospital" ? ["Hospital", "Both"] : ["ASC", "Both"];
    return db.select().from(complianceItems)
      .where(inArray(complianceItems.moduleScope, scopes))
      .orderBy(complianceItems.volume, complianceItems.surveyorPriority);
  }

  async getFacilityLogsItems(): Promise<ComplianceItem[]> {
    return db.select().from(complianceItems)
      .where(eq(complianceItems.surface, "facility_logs"))
      .orderBy(complianceItems.ownerRole, complianceItems.category, complianceItems.standardCode);
  }

  async getDocumentVaultItems(): Promise<ComplianceItem[]> {
    return db.select().from(complianceItems)
      .where(eq(complianceItems.surface, "document_vault"))
      .orderBy(complianceItems.tier, complianceItems.category, complianceItems.standardCode);
  }

  async getDocumentVaultWithStatus(facilityId: number): Promise<{ item: ComplianceItem; doc: ComplianceDocument | null }[]> {
    const [items, docs] = await Promise.all([
      db.select().from(complianceItems)
        .where(eq(complianceItems.surface, "document_vault"))
        .orderBy(complianceItems.tier, complianceItems.category, complianceItems.standardCode),
      db.select().from(complianceDocuments)
        .where(eq(complianceDocuments.facilityId, facilityId))
        .orderBy(desc(complianceDocuments.uploadedAt)),
    ]);
    const docsByItem = new Map<number, ComplianceDocument>();
    for (const doc of docs) {
      if (!docsByItem.has(doc.itemId)) docsByItem.set(doc.itemId, doc);
    }
    return items.map(item => ({ item, doc: docsByItem.get(item.id) ?? null }));
  }

  async upsertDocumentUpload(data: { facilityId: number; itemId: number; documentName: string; uploadedBy: string; expirationDate?: string; effectiveDate?: string }): Promise<ComplianceDocument> {
    const existing = await db.select().from(complianceDocuments)
      .where(and(eq(complianceDocuments.facilityId, data.facilityId), eq(complianceDocuments.itemId, data.itemId)))
      .orderBy(desc(complianceDocuments.uploadedAt))
      .limit(1);
    if (existing.length > 0) {
      const [row] = await db.update(complianceDocuments)
        .set({
          documentName: data.documentName,
          uploadedBy: data.uploadedBy,
          uploadedAt: new Date(),
          expirationDate: data.expirationDate ?? null,
          effectiveDate: data.effectiveDate ?? null,
          status: "current",
        })
        .where(eq(complianceDocuments.id, existing[0].id))
        .returning();
      return row;
    }
    const [row] = await db.insert(complianceDocuments).values({
      facilityId: data.facilityId,
      itemId: data.itemId,
      documentName: data.documentName,
      uploadedBy: data.uploadedBy,
      expirationDate: data.expirationDate ?? null,
      effectiveDate: data.effectiveDate ?? null,
      status: "current",
    }).returning();
    return row;
  }

  async getWallChartItems(): Promise<ComplianceItem[]> {
    return db.select().from(complianceItems)
      .where(eq(complianceItems.surface, "wall_chart"))
      .orderBy(complianceItems.surveyorPriority, complianceItems.itemName);
  }

  async logChecklistCompletion(data: { itemId: number; itemCode: string; itemName: string; completedBy: string; notes?: string; facilityId: string; volume: number; frequency: string }): Promise<ComplianceCompletionLog> {
    const [row] = await db.insert(complianceCompletionLog).values({
      itemId: data.itemId,
      itemCode: data.itemCode,
      itemName: data.itemName,
      completedBy: data.completedBy,
      notes: data.notes ?? null,
      facilityId: data.facilityId,
      module: "ASC",
      volume: data.volume,
      frequency: data.frequency,
    }).returning();
    return row;
  }

  async getChecklistLogs(facilityId: string): Promise<ComplianceCompletionLog[]> {
    // Most recent log per item_id for this facility
    const all = await db.select().from(complianceCompletionLog)
      .where(eq(complianceCompletionLog.facilityId, facilityId))
      .orderBy(desc(complianceCompletionLog.completedAt));
    // De-dup: keep most recent per itemId
    const seen = new Set<number>();
    return all.filter(r => {
      if (seen.has(r.itemId)) return false;
      seen.add(r.itemId);
      return true;
    });
  }

  async getChecklistHistory(itemId: number, facilityId: string): Promise<ComplianceCompletionLog[]> {
    return db.select().from(complianceCompletionLog)
      .where(and(
        eq(complianceCompletionLog.itemId, itemId),
        eq(complianceCompletionLog.facilityId, facilityId),
      ))
      .orderBy(desc(complianceCompletionLog.completedAt))
      .limit(20);
  }

  async markWallChartItemPosted(itemId: number, postedBy: string, nextDueDate: string): Promise<ComplianceItem> {
    const [row] = await db.update(complianceItems)
      .set({
        status: "current",
        postedDate: new Date(),
        nextDueDate: new Date(nextDueDate + "T00:00:00"),
        postedBy,
      })
      .where(eq(complianceItems.id, itemId))
      .returning();
    return row;
  }

  async getComplianceLogs(facilityId: number): Promise<ComplianceLog[]> {
    return db.select().from(complianceLogs)
      .where(eq(complianceLogs.facilityId, facilityId))
      .orderBy(desc(complianceLogs.completedAt));
  }

  async createComplianceLog(data: {
    facilityId: number; itemId: number; completedBy: string; notes?: string; nextDue?: string;
  }): Promise<ComplianceLog> {
    const [row] = await db.insert(complianceLogs).values({
      facilityId: data.facilityId,
      itemId: data.itemId,
      completedBy: data.completedBy,
      notes: data.notes ?? null,
      nextDue: data.nextDue ?? null,
      status: "completed",
    }).returning();
    return row;
  }

  async getComplianceDocuments(facilityId: number): Promise<ComplianceDocument[]> {
    return db.select().from(complianceDocuments)
      .where(eq(complianceDocuments.facilityId, facilityId))
      .orderBy(desc(complianceDocuments.uploadedAt));
  }

  async createComplianceDocument(data: {
    facilityId: number; itemId: number; documentName: string; uploadedBy: string;
    expirationDate?: string; effectiveDate?: string;
  }): Promise<ComplianceDocument> {
    const [row] = await db.insert(complianceDocuments).values({
      facilityId: data.facilityId,
      itemId: data.itemId,
      documentName: data.documentName,
      uploadedBy: data.uploadedBy,
      expirationDate: data.expirationDate ?? null,
      effectiveDate: data.effectiveDate ?? null,
      status: "current",
    }).returning();
    return row;
  }

  async getComplianceTrainingModules(facilityId: number, status?: string): Promise<ComplianceTrainingModule[]> {
    let query = db.select().from(complianceTrainingModules)
      .where(eq(complianceTrainingModules.facilityId, facilityId))
      .$dynamic();
    if (status) {
      query = query.where(eq(complianceTrainingModules.status, status));
    }
    const rows = await query.orderBy(desc(complianceTrainingModules.createdAt));
    return rows;
  }

  async getComplianceTrainingModule(id: number): Promise<ComplianceTrainingModule | undefined> {
    const [row] = await db.select().from(complianceTrainingModules)
      .where(eq(complianceTrainingModules.id, id));
    return row;
  }

  async createComplianceTrainingModule(data: {
    facilityId: number; documentId: number; itemId: number; title: string;
    taggedStandards: string; questions: string; conflictFlags: string;
    assignedRoles: string; assignedMemberCount: number;
  }): Promise<ComplianceTrainingModule> {
    const [row] = await db.insert(complianceTrainingModules).values({
      ...data,
      status: "pending",
    }).returning();
    return row;
  }

  async updateComplianceTrainingModuleStatus(id: number, status: string, approvedBy?: string): Promise<ComplianceTrainingModule> {
    const [row] = await db.update(complianceTrainingModules)
      .set({
        status,
        approvedAt: status === "approved" ? new Date() : null,
        approvedBy: approvedBy ?? null,
      })
      .where(eq(complianceTrainingModules.id, id))
      .returning();
    return row;
  }

  async getStaffTrainingAlerts(facilityId: number): Promise<StaffTrainingAlert[]> {
    return db.select().from(staffTrainingAlerts)
      .where(eq(staffTrainingAlerts.facilityId, facilityId))
      .orderBy(desc(staffTrainingAlerts.daysOverdue), desc(staffTrainingAlerts.createdAt));
  }

  async createStaffTrainingAlert(data: {
    facilityId: number; userId: number; complianceItemId?: number | null;
    alertType: string; category: string; message: string; daysOverdue: number;
  }): Promise<StaffTrainingAlert> {
    const [row] = await db.insert(staffTrainingAlerts).values({
      facilityId: data.facilityId,
      userId: data.userId,
      complianceItemId: data.complianceItemId ?? null,
      alertType: data.alertType,
      category: data.category,
      message: data.message,
      daysOverdue: data.daysOverdue,
    }).returning();
    return row;
  }

  async clearStaffTrainingAlerts(facilityId: number): Promise<void> {
    await db.delete(staffTrainingAlerts).where(eq(staffTrainingAlerts.facilityId, facilityId));
  }

  async markAllStaffTrainingAlertsRead(facilityId: number): Promise<void> {
    await db.update(staffTrainingAlerts)
      .set({ isRead: true })
      .where(eq(staffTrainingAlerts.facilityId, facilityId));
  }

  async createComplianceTask(data: {
    facilityId: number; itemId: number; assignedTo: string;
    dueDate: string; createdBy: string; createdByAgent: boolean;
  }): Promise<ComplianceTask> {
    const [row] = await db.insert(complianceTasks).values({
      facilityId: data.facilityId,
      itemId: data.itemId,
      assignedTo: data.assignedTo,
      dueDate: data.dueDate,
      createdBy: data.createdBy,
      createdByAgent: data.createdByAgent,
      status: "pending",
    }).returning();
    return row;
  }

  async getComplianceTasks(facilityId: number): Promise<ComplianceTask[]> {
    return db.select().from(complianceTasks)
      .where(eq(complianceTasks.facilityId, facilityId))
      .orderBy(desc(complianceTasks.createdAt));
  }

  async getWallChartData(facilityId: number): Promise<{ item: ComplianceItem; task: ComplianceTask | null }[]> {
    const [items, allTasks] = await Promise.all([
      db.select().from(complianceItems)
        .where(eq(complianceItems.surface, "wall_chart"))
        .orderBy(complianceItems.surveyorPriority, complianceItems.itemName),
      db.select().from(complianceTasks)
        .where(eq(complianceTasks.facilityId, facilityId)),
    ]);
    const tasksByItem = new Map<number, ComplianceTask>();
    for (const task of allTasks) {
      const existing = tasksByItem.get(task.itemId);
      if (!existing || task.id > existing.id) {
        tasksByItem.set(task.itemId, task);
      }
    }
    return items.map(item => ({ item, task: tasksByItem.get(item.id) ?? null }));
  }

  async markWallChartPosting(facilityId: number, itemId: number, assignedTo: string, dueDate: string): Promise<ComplianceTask> {
    const existing = await db.select().from(complianceTasks)
      .where(and(eq(complianceTasks.facilityId, facilityId), eq(complianceTasks.itemId, itemId)))
      .orderBy(desc(complianceTasks.id))
      .limit(1);
    if (existing.length > 0) {
      const [row] = await db.update(complianceTasks)
        .set({ status: "completed", dueDate, assignedTo, escalated: false })
        .where(eq(complianceTasks.id, existing[0].id))
        .returning();
      return row;
    }
    const [row] = await db.insert(complianceTasks).values({
      facilityId, itemId, assignedTo, dueDate,
      createdBy: "manual", createdByAgent: false, status: "completed",
    }).returning();
    return row;
  }

  async getExecutiveBriefs(facilityId: number): Promise<ExecutiveBrief[]> {
    return db.select().from(executiveBriefs)
      .where(eq(executiveBriefs.facilityId, facilityId))
      .orderBy(desc(executiveBriefs.weekOf));
  }

  async getExecutiveBrief(id: number): Promise<ExecutiveBrief | undefined> {
    const [row] = await db.select().from(executiveBriefs).where(eq(executiveBriefs.id, id));
    return row;
  }

  async getLatestExecutiveBrief(facilityId: number): Promise<ExecutiveBrief | undefined> {
    const [row] = await db.select().from(executiveBriefs)
      .where(eq(executiveBriefs.facilityId, facilityId))
      .orderBy(desc(executiveBriefs.weekOf))
      .limit(1);
    return row;
  }

  async createExecutiveBrief(data: {
    facilityId: number; weekOf: string; readinessScore: number; previousScore?: number | null;
    trendDirection: string; topRisks: string; overdueTasksCount: number; expiringDocsCount: number;
    trainingAlertsCount: number; regulatoryFindingsCount: number; daysToNextEvent?: number | null;
    narrativeSummary: string;
  }): Promise<ExecutiveBrief> {
    const [row] = await db.insert(executiveBriefs).values({
      facilityId: data.facilityId,
      weekOf: data.weekOf,
      readinessScore: data.readinessScore,
      previousScore: data.previousScore ?? null,
      trendDirection: data.trendDirection,
      topRisks: data.topRisks,
      overdueTasksCount: data.overdueTasksCount,
      expiringDocsCount: data.expiringDocsCount,
      trainingAlertsCount: data.trainingAlertsCount,
      regulatoryFindingsCount: data.regulatoryFindingsCount,
      daysToNextEvent: data.daysToNextEvent ?? null,
      narrativeSummary: data.narrativeSummary,
    }).returning();
    return row;
  }

  async updateComplianceTaskStatus(id: number, status: string): Promise<ComplianceTask> {
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const [task] = await db.select().from(complianceTasks).where(eq(complianceTasks.id, id));
    const isOverdue = task?.status !== "completed" && task?.dueDate && new Date(task.dueDate + "T00:00:00") < today;
    const [row] = await db.update(complianceTasks)
      .set({ status, escalated: status === "pending" && !!isOverdue })
      .where(eq(complianceTasks.id, id))
      .returning();
    return row;
  }

  async updateExecutiveBriefEmailStatus(id: number, emailSentTo: string, emailSentAt: Date): Promise<ExecutiveBrief> {
    const [row] = await db.update(executiveBriefs)
      .set({ emailSentTo, emailSentAt })
      .where(eq(executiveBriefs.id, id))
      .returning();
    return row;
  }

  async getRegulatoryWatchFindings(facilityId: number): Promise<RegulatoryWatchFinding[]> {
    return db.select().from(regulatoryWatchFindings)
      .where(eq(regulatoryWatchFindings.facilityId, facilityId))
      .orderBy(desc(regulatoryWatchFindings.scannedAt));
  }

  async createRegulatoryWatchFinding(data: {
    facilityId: number; source: string; standardCode: string; title: string;
    summary: string; sourceUrl?: string; affectedItemIds: string;
    affectedItemCount: number; affectedDocumentCount: number; taskId?: number;
  }): Promise<RegulatoryWatchFinding> {
    const [row] = await db.insert(regulatoryWatchFindings).values({
      facilityId: data.facilityId,
      source: data.source,
      standardCode: data.standardCode,
      title: data.title,
      summary: data.summary,
      sourceUrl: data.sourceUrl ?? null,
      affectedItemIds: data.affectedItemIds,
      affectedItemCount: data.affectedItemCount,
      affectedDocumentCount: data.affectedDocumentCount,
      taskId: data.taskId ?? null,
    }).returning();
    return row;
  }

  async updateRegulatoryWatchFindingStatus(id: number, status: string, reviewedBy?: string): Promise<RegulatoryWatchFinding> {
    const [row] = await db.update(regulatoryWatchFindings)
      .set({
        status,
        reviewedAt: status !== "new" ? new Date() : null,
        reviewedBy: reviewedBy ?? null,
      })
      .where(eq(regulatoryWatchFindings.id, id))
      .returning();
    return row;
  }

  async clearRegulatoryWatchFindings(facilityId: number): Promise<void> {
    await db.delete(regulatoryWatchFindings).where(eq(regulatoryWatchFindings.facilityId, facilityId));
  }

  async createTeam(data: { name: string; facilityId: number | null; department?: string | null; createdByUserId: number }): Promise<Team> {
    const [row] = await db.insert(teams).values({
      name: data.name,
      facilityId: data.facilityId ?? null,
      department: data.department ?? null,
      createdByUserId: data.createdByUserId,
    }).returning();
    return row;
  }

  private async _getTeamsWithCounts(whereClause?: any): Promise<(Team & { memberCount: number })[]> {
    const allTeams = whereClause
      ? await db.select().from(teams).where(whereClause).orderBy(desc(teams.createdAt))
      : await db.select().from(teams).orderBy(desc(teams.createdAt));
    if (allTeams.length === 0) return [];
    const counts = await db.select({
      teamId: teamMembers.teamId,
      count: sql<number>`COUNT(*)::int`,
    }).from(teamMembers).groupBy(teamMembers.teamId);
    const countMap = new Map(counts.map(c => [c.teamId, c.count]));
    return allTeams.map(t => ({ ...t, memberCount: countMap.get(t.id) ?? 0 }));
  }

  async getTeamsForFacility(facilityId: number | null): Promise<(Team & { memberCount: number })[]> {
    if (facilityId === null) return this._getTeamsWithCounts();
    return this._getTeamsWithCounts(eq(teams.facilityId, facilityId));
  }

  async getAllTeams(): Promise<(Team & { memberCount: number })[]> {
    return this._getTeamsWithCounts();
  }

  async renameTeam(teamId: number, name: string): Promise<Team> {
    const [row] = await db.update(teams).set({ name }).where(eq(teams.id, teamId)).returning();
    return row;
  }

  async deleteTeam(teamId: number): Promise<void> {
    await db.delete(teams).where(eq(teams.id, teamId));
  }

  async getTeamMemberIds(teamId: number): Promise<number[]> {
    const rows = await db.select({ userId: teamMembers.userId }).from(teamMembers).where(eq(teamMembers.teamId, teamId));
    return rows.map(r => r.userId);
  }

  async getTeamMembersWithStats(teamId: number): Promise<{ id: number; username: string; firstName: string; lastName: string; department: string | null; totalXp: number; currentStreak: number; leadershipRole: string }[]> {
    const memberIds = await this.getTeamMemberIds(teamId);
    if (memberIds.length === 0) return [];
    const memberUsers = await db.select().from(users).where(sql`${users.id} = ANY(${memberIds})`);
    const allStreaks = await db.select().from(userStreaks).where(sql`${userStreaks.userId} = ANY(${memberIds})`);
    const streakMap = new Map(allStreaks.map(s => [s.userId, s]));
    return memberUsers.map(u => ({
      id: u.id,
      username: u.username,
      firstName: u.firstName || "",
      lastName: u.lastName || "",
      department: (u as any).department ?? null,
      totalXp: streakMap.get(u.id)?.totalXp ?? 0,
      currentStreak: streakMap.get(u.id)?.currentStreak ?? 0,
      leadershipRole: u.leadershipRole,
    }));
  }

  async setTeamMembers(teamId: number, userIds: number[]): Promise<void> {
    await db.delete(teamMembers).where(eq(teamMembers.teamId, teamId));
    if (userIds.length > 0) {
      await db.insert(teamMembers).values(userIds.map(userId => ({ teamId, userId })));
    }
  }

  async recordRateLimitEvent(userId: number, endpoint: string): Promise<void> {
    await db.insert(rateLimitEvents).values({ userId, endpoint });
  }

  async countRateLimitEvents(userId: number, endpoint: string, windowMs: number): Promise<number> {
    const cutoff = new Date(Date.now() - windowMs);
    const result = await db
      .select({ count: sql<number>`count(*)::int` })
      .from(rateLimitEvents)
      .where(
        and(
          eq(rateLimitEvents.userId, userId),
          eq(rateLimitEvents.endpoint, endpoint),
          gt(rateLimitEvents.createdAt, cutoff),
        ),
      );
    return result[0]?.count ?? 0;
  }

  async pruneRateLimitEvents(): Promise<void> {
    const cutoff = new Date(Date.now() - 25 * 60 * 60 * 1000);
    await db.delete(rateLimitEvents).where(lte(rateLimitEvents.createdAt, cutoff));
  }

  // ── MEDIUM-7: Content queries ─────────────────────────────────────────────

  async getLevelsByModule(moduleId: ModuleId, opts?: { includeDraft?: boolean }): Promise<Level[]> {
    const where = opts?.includeDraft
      ? eq(contentLevels.moduleId, moduleId)
      : and(eq(contentLevels.moduleId, moduleId), eq(contentLevels.isDraft, false));
    const levelRows = await db.select().from(contentLevels).where(where).orderBy(asc(contentLevels.displayOrder));
    if (levelRows.length === 0) return [];
    const levelIds = levelRows.map(l => l.id);
    const questionRows = await db.select().from(contentQuestions)
      .where(inArray(contentQuestions.levelId, levelIds))
      .orderBy(asc(contentQuestions.displayOrder));
    const qByLevel = new Map<string, typeof questionRows>();
    for (const q of questionRows) {
      const arr = qByLevel.get(q.levelId) ?? [];
      arr.push(q);
      qByLevel.set(q.levelId, arr);
    }
    return levelRows.map(l => ({
      id: l.id,
      name: l.name,
      description: l.description,
      icon: l.icon,
      color: l.color,
      requiredScore: l.requiredScore,
      module: l.moduleId as ModuleId,
      draft: l.isDraft,
      chapterSummary: (l.chapterSummary as any) ?? undefined,
      studyMaterial: (l.studyMaterial as any) ?? [],
      questions: (qByLevel.get(l.id) ?? []).map(q => ({
        id: q.id,
        question: q.question,
        scenario: q.scenario ?? undefined,
        options: q.options,
        correctIndex: q.correctIndex,
        explanation: q.explanation,
        xpReward: q.xpReward,
        isSwipe: q.isSwipe,
        module: l.moduleId as ModuleId,
        draft: q.isDraft,
        cmsTag: q.cmsTag ?? undefined,
        tutor: (q.tutor as any) ?? undefined,
      } as Question)),
    } as Level));
  }

  async getLevelById(levelId: string): Promise<Level | undefined> {
    const [levelRow] = await db.select().from(contentLevels).where(eq(contentLevels.id, levelId));
    if (!levelRow) return undefined;
    const questionRows = await db.select().from(contentQuestions)
      .where(eq(contentQuestions.levelId, levelId))
      .orderBy(asc(contentQuestions.displayOrder));
    return {
      id: levelRow.id,
      name: levelRow.name,
      description: levelRow.description,
      icon: levelRow.icon,
      color: levelRow.color,
      requiredScore: levelRow.requiredScore,
      module: levelRow.moduleId as ModuleId,
      draft: levelRow.isDraft,
      chapterSummary: (levelRow.chapterSummary as any) ?? undefined,
      studyMaterial: (levelRow.studyMaterial as any) ?? [],
      questions: questionRows.map(q => ({
        id: q.id,
        question: q.question,
        scenario: q.scenario ?? undefined,
        options: q.options,
        correctIndex: q.correctIndex,
        explanation: q.explanation,
        xpReward: q.xpReward,
        isSwipe: q.isSwipe,
        module: levelRow.moduleId as ModuleId,
        draft: q.isDraft,
        cmsTag: q.cmsTag ?? undefined,
        tutor: (q.tutor as any) ?? undefined,
      } as Question)),
    };
  }

  async getAllDeepDiveLevels(): Promise<DeepDiveLevel[]> {
    return this._fetchDeepDiveLevels();
  }

  async getDeepDiveLevelsByModule(moduleId: string): Promise<DeepDiveLevel[]> {
    return this._fetchDeepDiveLevels(moduleId);
  }

  private async _fetchDeepDiveLevels(moduleId?: string): Promise<DeepDiveLevel[]> {
    const levelRows = moduleId
      ? await db.select().from(contentDeepDiveLevels).where(eq(contentDeepDiveLevels.moduleId, moduleId)).orderBy(asc(contentDeepDiveLevels.displayOrder))
      : await db.select().from(contentDeepDiveLevels).orderBy(asc(contentDeepDiveLevels.displayOrder));
    if (levelRows.length === 0) return [];
    const levelIds = levelRows.map(l => l.id);
    const questionRows = await db.select().from(contentDeepDiveQuestions)
      .where(inArray(contentDeepDiveQuestions.levelId, levelIds))
      .orderBy(asc(contentDeepDiveQuestions.displayOrder));
    const qByLevel = new Map<string, typeof questionRows>();
    for (const q of questionRows) {
      const arr = qByLevel.get(q.levelId) ?? [];
      arr.push(q);
      qByLevel.set(q.levelId, arr);
    }
    return levelRows.map(l => ({
      id: l.id,
      name: l.name,
      description: l.description,
      icon: l.icon,
      color: l.color,
      baseLevelId: l.baseLevelId,
      questions: (qByLevel.get(l.id) ?? []).map(q => ({
        id: q.id,
        baseQuestion: q.baseQuestion,
        baseOptions: q.baseOptions,
        baseCorrectIndex: q.baseCorrectIndex,
        baseExplanation: q.baseExplanation,
        baseXp: q.baseXp,
        followUps: (q.followUps as any) ?? [],
      })),
    } as DeepDiveLevel));
  }

  async getHandbookByModule(moduleId: string): Promise<HandbookChapter[]> {
    const rows = await db.select().from(contentHandbookChapters)
      .where(eq(contentHandbookChapters.moduleId, moduleId))
      .orderBy(asc(contentHandbookChapters.displayOrder));
    return rows.map(r => ({
      levelId: r.levelId,
      title: r.title,
      overview: r.overview,
      sections: (r.sections as any) ?? [],
      quickReference: (r.quickReference as any) ?? [],
    } as HandbookChapter));
  }

  async getDiagnosticQuestions(): Promise<DiagnosticQuestion[]> {
    const rows = await db.select().from(contentAssessmentQuestions)
      .where(eq(contentAssessmentQuestions.assessmentType, "diagnostic"))
      .orderBy(asc(contentAssessmentQuestions.displayOrder));
    return rows.map(r => ({
      id: r.id,
      sectionId: r.sectionId,
      question: r.question,
      options: r.options,
      correctIndex: r.correctIndex,
    }));
  }

  async getMasteryQuestions(): Promise<MasteryQuestion[]> {
    const rows = await db.select().from(contentAssessmentQuestions)
      .where(eq(contentAssessmentQuestions.assessmentType, "mastery"))
      .orderBy(asc(contentAssessmentQuestions.displayOrder));
    return rows.map(r => ({
      id: r.id,
      sectionId: r.sectionId,
      question: r.question,
      options: r.options,
      correctIndex: r.correctIndex,
      explanation: r.explanation,
    }));
  }

  async getAscPretestQuestions(): Promise<AscPretestQuestion[]> {
    return this._fetchAscAssessmentQuestions("asc_pretest");
  }

  async getAscPosttestQuestions(): Promise<AscPretestQuestion[]> {
    return this._fetchAscAssessmentQuestions("asc_posttest");
  }

  private async _fetchAscAssessmentQuestions(type: "asc_pretest" | "asc_posttest"): Promise<AscPretestQuestion[]> {
    const rows = await db.select().from(contentAssessmentQuestions)
      .where(eq(contentAssessmentQuestions.assessmentType, type))
      .orderBy(asc(contentAssessmentQuestions.displayOrder));
    return rows.map(r => ({
      id: r.id,
      chapterId: r.chapterId,
      chapterName: r.chapterName,
      question: r.question,
      scenario: r.scenario ?? undefined,
      options: r.options,
      correctIndex: r.correctIndex,
      explanation: r.explanation,
      xpReward: r.xpReward,
      isSwipe: r.isSwipe,
      cmsTag: r.cmsTag ?? undefined,
      tutor: (r.tutor as any) ?? undefined,
    } as AscPretestQuestion));
  }

  async getDnvPretestQuestions(): Promise<DnvTestQuestion[]> {
    const { dnvPretestQuestions } = await import("@shared/dnv-pretest");
    return dnvPretestQuestions;
  }

  async getDnvPosttestQuestions(): Promise<DnvTestQuestion[]> {
    const { dnvPosttestQuestions } = await import("@shared/dnv-posttest");
    return dnvPosttestQuestions as DnvTestQuestion[];
  }

  // ── Points Ledger ───────────────────────────────────────────────────────────

  async addPointsEvent(
    userId: number,
    facilityId: number | null,
    eventType: string,
    pointsAwarded: number,
    meta: Record<string, unknown> = {},
  ): Promise<void> {
    await pool.query(
      `INSERT INTO points_ledger (user_id, facility_id, event_type, points_awarded, metadata)
       VALUES ($1, $2, $3, $4, $5)`,
      [userId, facilityId, eventType, pointsAwarded, JSON.stringify(meta)],
    );
    if (pointsAwarded > 0) {
      await pool.query(
        `INSERT INTO user_streaks (user_id, total_xp, current_streak, longest_streak)
         VALUES ($1, $2, 0, 0)
         ON CONFLICT (user_id) DO UPDATE SET total_xp = user_streaks.total_xp + $2`,
        [userId, pointsAwarded],
      );
    }
  }



  async getUserTotalPoints(
    userId: number,
    startDate?: Date,
    endDate?: Date,
  ): Promise<number> {
    const params: unknown[] = [userId];
    let clause = "";
    if (startDate) { params.push(startDate); clause += ` AND created_at >= $${params.length}`; }
    if (endDate)   { params.push(endDate);   clause += ` AND created_at <= $${params.length}`; }
    const { rows } = await pool.query(
      `SELECT COALESCE(SUM(points_awarded), 0) AS total
       FROM points_ledger WHERE user_id = $1${clause}`,
      params,
    );
    return parseInt(rows[0].total, 10);
  }

  async getFacilityLeaderboard(
    facilityId: number | null,
    limit = 50,
    startDate?: Date,
    endDate?: Date,
    orgType?: string,
  ): Promise<import("@shared/schema").PointsLeaderboardEntry[]> {
    const params: unknown[] = [facilityId ?? null, startDate ?? null, endDate ?? null, limit, orgType ?? null];
    const { rows } = await pool.query(
      `SELECT u.id AS user_id, u.username, u.first_name, u.last_name,
              COALESCE((
                SELECT SUM(pl.points_awarded)
                FROM points_ledger pl
                WHERE pl.user_id = u.id
                  AND ($2::timestamptz IS NULL OR pl.created_at >= $2)
                  AND ($3::timestamptz IS NULL OR pl.created_at <= $3)
              ), 0) AS total_points
       FROM users u
       WHERE ($1::int IS NULL OR u.facility_id = $1)
         AND ($5::text IS NULL OR u.organization_type = $5)
       ORDER BY total_points DESC
       LIMIT $4`,
      params,
    );
    return rows.map((r: any, i: number) => ({
      userId: r.user_id,
      username: r.username,
      firstName: r.first_name,
      lastName: r.last_name,
      totalPoints: parseInt(r.total_points, 10),
      rank: i + 1,
    }));
  }

  async getStaffEngagement(
    facilityId: number | null,
    startDate?: Date,
    endDate?: Date,
    orgType?: string,
  ): Promise<import("@shared/schema").StaffEngagementEntry[]> {
    const params: unknown[] = [facilityId ?? null, startDate ?? null, endDate ?? null, orgType ?? null];
    const { rows } = await pool.query(
      `SELECT u.id AS user_id, u.username, u.first_name, u.last_name, u.department,
              COALESCE(SUM(pl.points_awarded), 0) AS total_points,
              COUNT(CASE WHEN pl.event_type = 'question_correct' THEN 1 END) AS questions_correct,
              COUNT(CASE WHEN pl.event_type = 'flashcard_reviewed' THEN 1 END) AS flashcards_reviewed,
              COUNT(CASE WHEN pl.event_type = 'final_complete' THEN 1 END) AS finals_completed,
              MAX(pl.created_at) AS last_active,
              CASE
                WHEN MAX(pl.created_at) >= NOW() - INTERVAL '1 day'  THEN 'High'
                WHEN MAX(pl.created_at) >= NOW() - INTERVAL '7 days' THEN 'Medium'
                ELSE 'Low'
              END AS engagement_level
       FROM users u
       LEFT JOIN points_ledger pl ON pl.user_id = u.id
         AND ($2::timestamptz IS NULL OR pl.created_at >= $2)
         AND ($3::timestamptz IS NULL OR pl.created_at <= $3)
       WHERE ($1::int IS NULL OR u.facility_id = $1)
         AND ($4::text IS NULL OR u.organization_type = $4)
       GROUP BY u.id, u.username, u.first_name, u.last_name, u.department
       ORDER BY total_points DESC`,
      params,
    );
    return rows.map((r: any) => ({
      userId: r.user_id,
      username: r.username,
      firstName: r.first_name,
      lastName: r.last_name,
      department: r.department,
      totalPoints: parseInt(r.total_points, 10),
      questionsCorrect: parseInt(r.questions_correct, 10),
      flashcardsReviewed: parseInt(r.flashcards_reviewed, 10),
      finalsCompleted: parseInt(r.finals_completed, 10),
      lastActive: r.last_active ? new Date(r.last_active).toISOString() : null,
      engagementLevel: (r.engagement_level as "High" | "Medium" | "Low") ?? "Low",
    }));
  }

  async getUserDrillDown(
    userId: number,
    facilityId: number,
    startDate?: Date,
    endDate?: Date,
  ): Promise<import("@shared/schema").UserDrillDown> {
    const dateParams: unknown[] = [userId, facilityId, startDate ?? null, endDate ?? null];
    const dateWhere = `user_id = $1 AND facility_id = $2
      AND ($3::timestamptz IS NULL OR created_at >= $3)
      AND ($4::timestamptz IS NULL OR created_at <= $4)`;

    const [totalRes, breakdownRes, levelRes, dailyRes] = await Promise.all([
      pool.query(
        `SELECT COALESCE(SUM(points_awarded), 0) AS total_points
         FROM points_ledger WHERE ${dateWhere}`,
        dateParams,
      ),
      pool.query(
        `SELECT event_type,
                COUNT(*)::int            AS event_count,
                SUM(points_awarded)::int AS points_earned
         FROM points_ledger WHERE ${dateWhere}
         GROUP BY event_type
         ORDER BY points_earned DESC`,
        dateParams,
      ),
      pool.query(
        `SELECT level_id,
                COUNT(CASE WHEN event_type = 'question_correct' THEN 1 END)::int AS questions_correct,
                COUNT(CASE WHEN event_type = 'flashcard_reviewed' THEN 1 END)::int AS flashcards_reviewed,
                SUM(points_awarded)::int AS level_points
         FROM points_ledger
         WHERE ${dateWhere} AND level_id IS NOT NULL
         GROUP BY level_id
         ORDER BY level_points DESC`,
        dateParams,
      ),
      pool.query(
        `SELECT DATE(created_at)              AS activity_date,
                SUM(points_awarded)::int       AS daily_points,
                COUNT(CASE WHEN event_type = 'question_correct' THEN 1 END)::int AS daily_correct
         FROM points_ledger WHERE ${dateWhere}
         GROUP BY DATE(created_at)
         ORDER BY activity_date DESC
         LIMIT 90`,
        dateParams,
      ),
    ]);

    return {
      totalPoints: parseInt(totalRes.rows[0]?.total_points ?? 0, 10),
      breakdown: breakdownRes.rows.map((r: any) => ({
        eventType: r.event_type,
        eventCount: r.event_count,
        pointsEarned: r.points_earned,
      })),
      byLevel: levelRes.rows.map((r: any) => ({
        levelId: r.level_id,
        questionsCorrect: r.questions_correct,
        flashcardsReviewed: r.flashcards_reviewed,
        levelPoints: r.level_points,
      })),
      dailyActivity: dailyRes.rows.map((r: any) => ({
        activityDate: r.activity_date instanceof Date
          ? r.activity_date.toISOString().split("T")[0]
          : String(r.activity_date),
        dailyPoints: r.daily_points,
        dailyCorrect: r.daily_correct,
      })),
    };
  }

  async getActivePilotConfig(
    facilityId: number,
  ): Promise<import("@shared/schema").PilotConfig | null> {
    const { rows } = await pool.query(
      `SELECT * FROM pilot_config WHERE facility_id = $1 AND is_active = true AND NOW() BETWEEN start_date AND end_date LIMIT 1`,
      [facilityId],
    );
    if (!rows[0]) return null;
    const r = rows[0];
    return {
      id: r.id,
      facilityId: r.facility_id,
      pilotName: r.pilot_name,
      startDate: r.start_date,
      endDate: r.end_date,
      isActive: r.is_active,
      createdAt: r.created_at,
    };
  }
}

export const storage = new DatabaseStorage();
