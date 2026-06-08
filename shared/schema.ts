import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, boolean, timestamp, date, serial, jsonb, pgEnum, index, uniqueIndex } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contentChangelog = pgTable("content_changelog", {
  id: serial("id").primaryKey(),
  contentType: text("content_type").notNull(),
  scope: text("scope"),
  action: text("action").notNull(),
  itemCount: integer("item_count"),
  version: text("version"),
  description: text("description"),
  changedBy: text("changed_by").notNull().default("system"),
  changedAt: timestamp("changed_at").notNull().defaultNow(),
});

export type ContentChangelog = typeof contentChangelog.$inferSelect;
export type InsertContentChangelog = typeof contentChangelog.$inferInsert;

export const COMPLIANCE_MODES = ["off", "education_only", "full_platform"] as const;
export type ComplianceMode = (typeof COMPLIANCE_MODES)[number];

export const facilities = pgTable("facilities", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  code: text("code").notNull().unique(),
  complianceMode: text("compliance_mode").notNull().default("education_only"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const roles = pgTable("roles", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  department: text("department").notNull(),
  scope: text("scope").notNull().default("standard"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const roleChapterMappings = pgTable("role_chapter_mappings", {
  id: serial("id").primaryKey(),
  roleId: integer("role_id").notNull().references(() => roles.id),
  chapterSlug: text("chapter_slug").notNull(),
  displayOrder: integer("display_order").notNull().default(0),
});

export const MODULE_IDS = ["hospital", "asc", "dnv"] as const;
export type ModuleId = (typeof MODULE_IDS)[number];

export const LEADERSHIP_ROLES = ["learner", "educator", "director", "ceo", "admin", "super_admin"] as const;
export type LeadershipRole = (typeof LEADERSHIP_ROLES)[number];

export const leadershipRoleEnum = pgEnum("leadership_role_type", ["learner", "educator", "director", "ceo", "admin", "super_admin"]);

export const LEADERSHIP_RANK: Record<LeadershipRole, number> = {
  learner: 0,
  educator: 1,
  director: 2,
  ceo: 3,
  admin: 4,
  super_admin: 5,
};

export const LEADERSHIP_LABELS: Record<LeadershipRole, string> = {
  learner: "Learner",
  educator: "Educator / Supervisor",
  director: "Director / Quality Leader",
  ceo: "CEO / Quality Officer",
  admin: "System Administrator",
  super_admin: "Super Admin",
};

export const MODULE_LABELS: Record<ModuleId, string> = {
  hospital: "Hospital",
  asc: "Ambulatory Surgery Center (ASC)",
  dnv: "Hospital (DNV NIAHO)",
};

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  firstName: text("first_name").notNull().default(""),
  lastName: text("last_name").notNull().default(""),
  password: text("password").notNull(),
  isAdmin: boolean("is_admin").notNull().default(false),
  leadershipRole: leadershipRoleEnum("leadership_role").notNull().default("learner"),
  facilityId: integer("facility_id").references(() => facilities.id),
  department: text("department"),
  mfaSecret: text("mfa_secret"),
  mfaEnabled: boolean("mfa_enabled").notNull().default(false),
  roleId: integer("role_id").references(() => roles.id),
  additionalRoleIds: integer("additional_role_ids").array().notNull().default(sql`ARRAY[]::integer[]`),
  organizationType: text("organization_type").notNull().default("hospital"),
  viewScope: text("view_scope").notNull().default("department"),
  roleAssignedAt: timestamp("role_assigned_at"),
  dailyGoal: integer("daily_goal").notNull().default(5),
  reminderEnabled: boolean("reminder_enabled").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
}, (t) => [
  index("idx_users_facility_id").on(t.facilityId),
  index("idx_users_leadership_role").on(t.leadershipRole),
]);

export type Role = typeof roles.$inferSelect;
export type RoleChapterMapping = typeof roleChapterMappings.$inferSelect;

export const userProgress = pgTable("user_progress", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  levelId: text("level_id").notNull(),
  score: integer("score").notNull().default(0),
  totalQuestions: integer("total_questions").notNull().default(0),
  bestScore: integer("best_score").notNull().default(0),
  completed: boolean("completed").notNull().default(false),
  completedAt: timestamp("completed_at"),
}, (t) => [
  index("idx_user_progress_user_id").on(t.userId),
  uniqueIndex("idx_user_progress_user_level").on(t.userId, t.levelId),
]);

export const userStreaks = pgTable("user_streaks", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id).unique(),
  currentStreak: integer("current_streak").notNull().default(0),
  longestStreak: integer("longest_streak").notNull().default(0),
  lastPlayedDate: date("last_played_date"),
  totalXp: integer("total_xp").notNull().default(0),
});

export const dailyActivity = pgTable("daily_activity", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  date: date("date").notNull(),
  questionsAnswered: integer("questions_answered").notNull().default(0),
  correctAnswers: integer("correct_answers").notNull().default(0),
  xpEarned: integer("xp_earned").notNull().default(0),
}, (t) => [
  index("idx_daily_activity_user_id").on(t.userId),
  index("idx_daily_activity_user_date").on(t.userId, t.date),
]);

export const quizSessions = pgTable("quiz_sessions", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  levelId: text("level_id").notNull(),
  questionOrder: text("question_order").array().notNull(),
  answers: jsonb("answers").notNull().default(sql`'[]'::jsonb`),
  currentQuestion: integer("current_question").notNull().default(0),
  correctAnswers: integer("correct_answers").notNull().default(0),
  xpEarned: integer("xp_earned").notNull().default(0),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
}, (t) => [
  index("idx_quiz_sessions_user_id").on(t.userId),
  index("idx_quiz_sessions_user_level").on(t.userId, t.levelId),
]);

export type QuizSession = typeof quizSessions.$inferSelect;

export const insertFacilitySchema = createInsertSchema(facilities).pick({
  name: true,
  code: true,
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  firstName: true,
  lastName: true,
  password: true,
  facilityId: true,
});

export const loginSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const registerSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  facilityCode: z
    .string()
    .min(3, "Institution code is required (ask your administrator if you don't have one)")
    .max(40, "Institution code is too long"),
  organizationType: z.enum(MODULE_IDS).default("hospital"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export const updateOrganizationTypeSchema = z.object({
  organizationType: z.enum(MODULE_IDS),
});

export const resetPasswordSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  newPassword: z.string().min(6, "Password must be at least 6 characters"),
  confirmNewPassword: z.string(),
}).refine((data) => data.newPassword === data.confirmNewPassword, {
  message: "Passwords don't match",
  path: ["confirmNewPassword"],
});

export const diagnosticResults = pgTable("diagnostic_results", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  score: integer("score").notNull(),
  totalQuestions: integer("total_questions").notNull(),
  answers: jsonb("answers").notNull().default(sql`'[]'::jsonb`),
  completedAt: timestamp("completed_at").notNull().defaultNow(),
}, (t) => [
  index("idx_diagnostic_results_user_id").on(t.userId),
]);

export const masteryResults = pgTable("mastery_results", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  score: integer("score").notNull(),
  totalQuestions: integer("total_questions").notNull(),
  answers: jsonb("answers").notNull().default(sql`'[]'::jsonb`),
  completedAt: timestamp("completed_at").notNull().defaultNow(),
}, (t) => [
  index("idx_mastery_results_user_id").on(t.userId),
]);

export const diagnosticSessions = pgTable("diagnostic_sessions", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  questionOrder: text("question_order").array().notNull(),
  answers: jsonb("answers").notNull().default(sql`'[]'::jsonb`),
  currentQuestion: integer("current_question").notNull().default(0),
  shuffleMaps: jsonb("shuffle_maps").notNull().default(sql`'{}'::jsonb`),
  questionData: text("question_data"),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
}, (t) => [
  index("idx_diagnostic_sessions_user_id").on(t.userId),
]);

export const masterySessions = pgTable("mastery_sessions", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  questionOrder: text("question_order").array().notNull(),
  answers: jsonb("answers").notNull().default(sql`'[]'::jsonb`),
  currentQuestion: integer("current_question").notNull().default(0),
  shuffleMaps: jsonb("shuffle_maps").notNull().default(sql`'{}'::jsonb`),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
}, (t) => [
  index("idx_mastery_sessions_user_id").on(t.userId),
]);

export const ascPretestResults = pgTable("asc_pretest_results", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  score: integer("score").notNull(),
  totalQuestions: integer("total_questions").notNull(),
  answers: jsonb("answers").notNull().default(sql`'[]'::jsonb`),
  chapterScores: jsonb("chapter_scores").notNull().default(sql`'{}'::jsonb`),
  completedAt: timestamp("completed_at").notNull().defaultNow(),
}, (t) => [
  index("idx_asc_pretest_results_user_id").on(t.userId),
]);

export const ascPosttestResults = pgTable("asc_posttest_results", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  score: integer("score").notNull(),
  totalQuestions: integer("total_questions").notNull(),
  answers: jsonb("answers").notNull().default(sql`'[]'::jsonb`),
  chapterScores: jsonb("chapter_scores").notNull().default(sql`'{}'::jsonb`),
  completedAt: timestamp("completed_at").notNull().defaultNow(),
}, (t) => [
  index("idx_asc_posttest_results_user_id").on(t.userId),
]);

export const dnvPretestResults = pgTable("dnv_pretest_results", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  score: integer("score").notNull(),
  totalQuestions: integer("total_questions").notNull(),
  answers: jsonb("answers").notNull().default(sql`'[]'::jsonb`),
  chapterScores: jsonb("chapter_scores").notNull().default(sql`'{}'::jsonb`),
  completedAt: timestamp("completed_at").notNull().defaultNow(),
}, (t) => [
  index("idx_dnv_pretest_results_user_id").on(t.userId),
]);

export const dnvPosttestResults = pgTable("dnv_posttest_results", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  score: integer("score").notNull(),
  totalQuestions: integer("total_questions").notNull(),
  answers: jsonb("answers").notNull().default(sql`'[]'::jsonb`),
  chapterScores: jsonb("chapter_scores").notNull().default(sql`'{}'::jsonb`),
  completedAt: timestamp("completed_at").notNull().defaultNow(),
}, (t) => [
  index("idx_dnv_posttest_results_user_id").on(t.userId),
]);

export type DiagnosticSession = typeof diagnosticSessions.$inferSelect;
export type MasterySession = typeof masterySessions.$inferSelect;

export type DiagnosticResult = typeof diagnosticResults.$inferSelect;
export type MasteryResult = typeof masteryResults.$inferSelect;
export type AscPretestResult = typeof ascPretestResults.$inferSelect;
export type AscPosttestResult = typeof ascPosttestResults.$inferSelect;
export type DnvPretestResult = typeof dnvPretestResults.$inferSelect;
export type DnvPosttestResult = typeof dnvPosttestResults.$inferSelect;

export type InsertFacility = z.infer<typeof insertFacilitySchema>;
export type Facility = typeof facilities.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type UserProgress = typeof userProgress.$inferSelect;
export type UserStreak = typeof userStreaks.$inferSelect;
export type DailyActivity = typeof dailyActivity.$inferSelect;

export interface QuestionTutor {
  whyCorrect: string;
  whyWrong: Record<string, string>;
  operationalContext: string;
}

export interface Question {
  id: string;
  question: string;
  scenario?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  xpReward: number;
  isSwipe: boolean;
  module?: ModuleId;
  draft?: boolean;
  cmsTag?: string;
  tutor?: QuestionTutor;
}

export interface StudyConcept {
  title: string;
  content: string;
  keyPoint: string;
  category?: "rule" | "definition" | "scenario" | "mistake" | "number" | "tip";
  extraInfo?: string;
}

export interface ChapterSummary {
  chapterTitle: string;
  plainLanguageSummary: string;
  keyOperationalExpectations: string[];
  commonRiskPoints: string[];
  cmsTags: string[];
}

export interface Level {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  requiredScore: number;
  studyMaterial: StudyConcept[];
  questions: Question[];
  module?: ModuleId;
  draft?: boolean;
  chapterSummary?: ChapterSummary;
}

export interface HandbookSection {
  heading: string;
  content: string;
  criticalValues?: { label: string; value: string }[];
  thinkAboutIt?: string;
}

export interface HandbookChapter {
  levelId: string;
  title: string;
  overview: string;
  sections: HandbookSection[];
  quickReference: { fact: string; detail: string }[];
}

export interface GameState {
  currentQuestion: number;
  score: number;
  correctAnswers: number;
  totalQuestions: number;
  xpEarned: number;
  answers: { questionId: string; correct: boolean; selectedIndex: number }[];
}

export interface DeepDiveFollowUp {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  expertXp: number;
}

export interface DeepDiveQuestion {
  id: string;
  baseQuestion: string;
  baseOptions: string[];
  baseCorrectIndex: number;
  baseExplanation: string;
  baseXp: number;
  followUps: DeepDiveFollowUp[];
}

export interface DeepDiveLevel {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  baseLevelId: string;
  questions: DeepDiveQuestion[];
}

// ── Teams ─────────────────────────────────────────────────────────────────────

export const teams = pgTable("teams", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  facilityId: integer("facility_id").references(() => facilities.id),
  department: text("department"),
  createdByUserId: integer("created_by_user_id").references(() => users.id),
  createdAt: timestamp("created_at").notNull().defaultNow(),
}, (t) => [
  index("idx_teams_facility_id").on(t.facilityId),
]);

export const teamMembers = pgTable("team_members", {
  id: serial("id").primaryKey(),
  teamId: integer("team_id").notNull().references(() => teams.id),
  userId: integer("user_id").notNull().references(() => users.id),
  addedAt: timestamp("added_at").notNull().defaultNow(),
}, (t) => [
  index("idx_team_members_user_id").on(t.userId),
  index("idx_team_members_team_id").on(t.teamId),
]);

export type Team = typeof teams.$inferSelect;
export type TeamMember = typeof teamMembers.$inferSelect;

// ── Audit Log ────────────────────────────────────────────────────────────────

export const auditLogs = pgTable("audit_logs", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  username: text("username"),
  leadershipRole: leadershipRoleEnum("leadership_role").notNull().default("learner"),
  facilityId: text("facility_id"),
  facilityName: text("facility_name"),
  action: text("action").notNull(),
  meta: text("meta"),
  ipAddress: text("ip_address"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
}, (t) => [
  index("idx_audit_logs_user_id").on(t.userId),
  index("idx_audit_logs_created_at").on(t.createdAt),
]);

export type AuditLog = typeof auditLogs.$inferSelect;

// ── Feedback ──────────────────────────────────────────────────────────────────

export const feedback = pgTable("feedback", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  username: text("username"),
  firstName: text("first_name"),
  lastName: text("last_name"),
  facilityId: integer("facility_id"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export type Feedback = typeof feedback.$inferSelect;

// ── Risk Assessments ─────────────────────────────────────────────────────────

export const riskAssessments = pgTable("risk_assessments", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  module: text("module").notNull().default("hospital"),
  riskAreas: jsonb("risk_areas").notNull().default(sql`'[]'::jsonb`),
  notes: text("notes").notNull().default(""),
  actionPlan: jsonb("action_plan").notNull().default(sql`'{}'::jsonb`),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
}, (t) => [
  index("idx_risk_assessments_user_id").on(t.userId),
]);

export type RiskAssessment = typeof riskAssessments.$inferSelect;

// ── Flashcard Reviews (Spaced Repetition) ────────────────────────────────────

export const flashcardReviews = pgTable("flashcard_reviews", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  levelId: text("level_id").notNull(),
  cardIndex: integer("card_index").notNull(),
  nextReviewAt: timestamp("next_review_at").notNull().defaultNow(),
  intervalMinutes: integer("interval_minutes").notNull().default(1440),
  reviewCount: integer("review_count").notNull().default(0),
  lastRating: text("last_rating").notNull().default("good"),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
}, (t) => [
  index("idx_flashcard_reviews_user_level").on(t.userId, t.levelId),
  index("idx_flashcard_reviews_next_review").on(t.userId, t.nextReviewAt),
]);

export type FlashcardReview = typeof flashcardReviews.$inferSelect;

// ── Leadership Role Access Codes ──────────────────────────────────────────────

export const leadershipRoleCodes = pgTable("leadership_role_codes", {
  id: serial("id").primaryKey(),
  code: text("code").notNull().unique(),
  facilityId: integer("facility_id").references(() => facilities.id),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export type LeadershipRoleCode = typeof leadershipRoleCodes.$inferSelect;

// ── Compliance System (ASC Survey Readiness) ─────────────────────────────────

export const complianceItems = pgTable("compliance_items", {
  id: serial("id").primaryKey(),
  module: text("module").notNull().default("asc"),
  moduleScope: text("module_scope").notNull().default("ASC"),
  volume: text("volume").notNull(),
  standardCode: text("standard_code").notNull(),
  itemName: text("item_name").notNull(),
  frequency: text("frequency").notNull(),
  tier: integer("tier").notNull(),
  category: text("category").notNull(),
  surveyorPriority: integer("surveyor_priority").notNull().default(2),
  agentWatch: boolean("agent_watch").notNull().default(true),
  surface: text("surface").notNull().default("tasks"),
  ownerRole: text("owner_role").notNull().default("administrator"),
  status: varchar("status", { length: 20 }).default("missing"),
  postedDate: timestamp("posted_date"),
  nextDueDate: timestamp("next_due_date"),
  postedBy: varchar("posted_by", { length: 100 }),
});

export type ComplianceItem = typeof complianceItems.$inferSelect;

export const complianceLogs = pgTable("compliance_logs", {
  id: serial("id").primaryKey(),
  facilityId: integer("facility_id").notNull().references(() => facilities.id),
  itemId: integer("item_id").notNull().references(() => complianceItems.id),
  completedBy: text("completed_by").notNull(),
  completedAt: timestamp("completed_at").notNull().defaultNow(),
  status: text("status").notNull().default("completed"),
  notes: text("notes"),
  nextDue: date("next_due"),
  agentFlagged: boolean("agent_flagged").notNull().default(false),
}, (t) => [
  index("idx_compliance_logs_facility_id").on(t.facilityId),
  index("idx_compliance_logs_facility_completed").on(t.facilityId, t.completedAt),
]);

export type ComplianceLog = typeof complianceLogs.$inferSelect;

export const complianceDocuments = pgTable("compliance_documents", {
  id: serial("id").primaryKey(),
  facilityId: integer("facility_id").notNull().references(() => facilities.id),
  itemId: integer("item_id").notNull().references(() => complianceItems.id),
  documentName: text("document_name").notNull(),
  uploadedBy: text("uploaded_by").notNull(),
  uploadedAt: timestamp("uploaded_at").notNull().defaultNow(),
  effectiveDate: date("effective_date"),
  expirationDate: date("expiration_date"),
  status: text("status").notNull().default("current"),
  aiTaggedStandards: jsonb("ai_tagged_standards").notNull().default(sql`'[]'::jsonb`),
  aiQuestionsGenerated: boolean("ai_questions_generated").notNull().default(false),
}, (t) => [
  index("idx_compliance_documents_facility_id").on(t.facilityId),
]);

export type ComplianceDocument = typeof complianceDocuments.$inferSelect;

export const complianceTasks = pgTable("compliance_tasks", {
  id: serial("id").primaryKey(),
  facilityId: integer("facility_id").notNull().references(() => facilities.id),
  itemId: integer("item_id").notNull().references(() => complianceItems.id),
  assignedTo: text("assigned_to"),
  dueDate: date("due_date"),
  createdBy: text("created_by"),
  createdByAgent: boolean("created_by_agent").notNull().default(false),
  status: text("status").notNull().default("pending"),
  reminderSent: boolean("reminder_sent").notNull().default(false),
  escalated: boolean("escalated").notNull().default(false),
}, (t) => [
  index("idx_compliance_tasks_facility_id").on(t.facilityId),
]);

export type ComplianceTask = typeof complianceTasks.$inferSelect;

export const complianceTrainingModules = pgTable("compliance_training_modules", {
  id: serial("id").primaryKey(),
  facilityId: integer("facility_id").notNull().references(() => facilities.id),
  documentId: integer("document_id").notNull().references(() => complianceDocuments.id),
  itemId: integer("item_id").notNull().references(() => complianceItems.id),
  title: text("title").notNull(),
  taggedStandards: jsonb("tagged_standards").notNull().default(sql`'[]'::jsonb`),
  questions: jsonb("questions").notNull().default(sql`'[]'::jsonb`),
  conflictFlags: jsonb("conflict_flags").notNull().default(sql`'[]'::jsonb`),
  assignedRoles: jsonb("assigned_roles").notNull().default(sql`'[]'::jsonb`),
  assignedMemberCount: integer("assigned_member_count").notNull().default(0),
  status: text("status").notNull().default("pending"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  approvedAt: timestamp("approved_at"),
  approvedBy: text("approved_by"),
}, (t) => [
  index("idx_compliance_training_modules_facility").on(t.facilityId),
]);

export type ComplianceTrainingModule = typeof complianceTrainingModules.$inferSelect;

export const staffTrainingAlerts = pgTable("staff_training_alerts", {
  id: serial("id").primaryKey(),
  facilityId: integer("facility_id").notNull().references(() => facilities.id),
  userId: integer("user_id").notNull().references(() => users.id),
  complianceItemId: integer("compliance_item_id").references(() => complianceItems.id),
  alertType: text("alert_type").notNull().default("reminder"),
  category: text("category").notNull(),
  message: text("message").notNull(),
  daysOverdue: integer("days_overdue").notNull().default(0),
  isRead: boolean("is_read").notNull().default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
}, (t) => [
  index("idx_staff_training_alerts_facility_user").on(t.facilityId, t.userId),
  index("idx_staff_training_alerts_facility_id").on(t.facilityId),
]);

export type StaffTrainingAlert = typeof staffTrainingAlerts.$inferSelect;

export const regulatoryWatchFindings = pgTable("regulatory_watch_findings", {
  id: serial("id").primaryKey(),
  facilityId: integer("facility_id").notNull().references(() => facilities.id),
  source: text("source").notNull(),
  standardCode: text("standard_code").notNull(),
  title: text("title").notNull(),
  summary: text("summary").notNull(),
  sourceUrl: text("source_url"),
  affectedItemIds: jsonb("affected_item_ids").notNull().default(sql`'[]'::jsonb`),
  affectedItemCount: integer("affected_item_count").notNull().default(0),
  affectedDocumentCount: integer("affected_document_count").notNull().default(0),
  status: text("status").notNull().default("new"),
  taskId: integer("task_id").references(() => complianceTasks.id),
  scannedAt: timestamp("scanned_at").notNull().defaultNow(),
  reviewedAt: timestamp("reviewed_at"),
  reviewedBy: text("reviewed_by"),
}, (t) => [
  index("idx_regulatory_watch_findings_facility").on(t.facilityId),
]);

export type RegulatoryWatchFinding = typeof regulatoryWatchFindings.$inferSelect;

export const executiveBriefs = pgTable("executive_briefs", {
  id: serial("id").primaryKey(),
  facilityId: integer("facility_id").notNull().references(() => facilities.id),
  weekOf: date("week_of").notNull(),
  readinessScore: integer("readiness_score").notNull().default(0),
  previousScore: integer("previous_score"),
  trendDirection: text("trend_direction").notNull().default("stable"),
  topRisks: jsonb("top_risks").notNull().default(sql`'[]'::jsonb`),
  overdueTasksCount: integer("overdue_tasks_count").notNull().default(0),
  expiringDocsCount: integer("expiring_docs_count").notNull().default(0),
  trainingAlertsCount: integer("training_alerts_count").notNull().default(0),
  regulatoryFindingsCount: integer("regulatory_findings_count").notNull().default(0),
  daysToNextEvent: integer("days_to_next_event"),
  narrativeSummary: text("narrative_summary").notNull().default(""),
  emailSentAt: timestamp("email_sent_at"),
  emailSentTo: jsonb("email_sent_to").notNull().default(sql`'[]'::jsonb`),
  createdAt: timestamp("created_at").notNull().defaultNow(),
}, (t) => [
  index("idx_executive_briefs_facility_week").on(t.facilityId, t.weekOf),
]);

export type ExecutiveBrief = typeof executiveBriefs.$inferSelect;

// ── Rate Limit Events (persistent, restart-safe) ─────────────────────────────

export const rateLimitEvents = pgTable("rate_limit_events", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  endpoint: text("endpoint").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
}, (t) => [
  index("idx_rate_limit_events_user_endpoint").on(t.userId, t.endpoint),
  index("idx_rate_limit_events_created_at").on(t.createdAt),
]);

// ── Content Tables (MEDIUM-7: question/level/handbook content moved from TS to DB) ──

export const contentLevels = pgTable("content_levels", {
  id: text("id").primaryKey(),
  moduleId: text("module_id").notNull(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  icon: text("icon").notNull(),
  color: text("color").notNull(),
  requiredScore: integer("required_score").notNull().default(0),
  chapterSummary: jsonb("chapter_summary"),
  studyMaterial: jsonb("study_material"),
  isDraft: boolean("is_draft").notNull().default(false),
  displayOrder: integer("display_order").notNull().default(0),
}, (t) => [
  index("idx_content_levels_module").on(t.moduleId),
]);

export const contentQuestions = pgTable("content_questions", {
  id: text("id").primaryKey(),
  levelId: text("level_id").notNull(),
  question: text("question").notNull(),
  scenario: text("scenario"),
  options: text("options").array().notNull(),
  correctIndex: integer("correct_index").notNull(),
  explanation: text("explanation").notNull().default(""),
  xpReward: integer("xp_reward").notNull().default(10),
  isSwipe: boolean("is_swipe").notNull().default(false),
  isDraft: boolean("is_draft").notNull().default(false),
  cmsTag: text("cms_tag"),
  tutor: jsonb("tutor"),
  displayOrder: integer("display_order").notNull().default(0),
}, (t) => [
  index("idx_content_questions_level").on(t.levelId),
]);

export const contentDeepDiveLevels = pgTable("content_deep_dive_levels", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull().default(""),
  icon: text("icon").notNull().default(""),
  color: text("color").notNull().default(""),
  baseLevelId: text("base_level_id").notNull().default(""),
  moduleId: text("module_id").notNull().default("hospital"),
  displayOrder: integer("display_order").notNull().default(0),
}, (t) => [
  index("idx_content_dd_levels_module").on(t.moduleId),
]);

export const contentDeepDiveQuestions = pgTable("content_deep_dive_questions", {
  id: text("id").primaryKey(),
  levelId: text("level_id").notNull(),
  baseQuestion: text("base_question").notNull(),
  baseOptions: text("base_options").array().notNull(),
  baseCorrectIndex: integer("base_correct_index").notNull(),
  baseExplanation: text("base_explanation").notNull().default(""),
  baseXp: integer("base_xp").notNull().default(15),
  followUps: jsonb("follow_ups").notNull().default(sql`'[]'::jsonb`),
  displayOrder: integer("display_order").notNull().default(0),
}, (t) => [
  index("idx_content_dd_questions_level").on(t.levelId),
]);

export const contentHandbookChapters = pgTable("content_handbook_chapters", {
  id: serial("id").primaryKey(),
  levelId: text("level_id").notNull(),
  moduleId: text("module_id").notNull(),
  title: text("title").notNull(),
  overview: text("overview").notNull().default(""),
  sections: jsonb("sections").notNull().default(sql`'[]'::jsonb`),
  quickReference: jsonb("quick_reference").notNull().default(sql`'[]'::jsonb`),
  displayOrder: integer("display_order").notNull().default(0),
}, (t) => [
  uniqueIndex("idx_content_handbook_level_module").on(t.levelId, t.moduleId),
  index("idx_content_handbook_module").on(t.moduleId),
]);

export const contentAssessmentQuestions = pgTable("content_assessment_questions", {
  id: text("id").primaryKey(),
  assessmentType: text("assessment_type").notNull(),
  sectionId: text("section_id").notNull().default(""),
  chapterId: text("chapter_id").notNull().default(""),
  chapterName: text("chapter_name").notNull().default(""),
  question: text("question").notNull(),
  scenario: text("scenario"),
  options: text("options").array().notNull(),
  correctIndex: integer("correct_index").notNull(),
  explanation: text("explanation").notNull().default(""),
  xpReward: integer("xp_reward").notNull().default(10),
  isSwipe: boolean("is_swipe").notNull().default(false),
  cmsTag: text("cms_tag"),
  tutor: jsonb("tutor"),
  displayOrder: integer("display_order").notNull().default(0),
}, (t) => [
  index("idx_content_assessment_type").on(t.assessmentType),
]);

export const complianceCompletionLog = pgTable("compliance_completion_log", {
  id: serial("id").primaryKey(),
  itemId: integer("item_id").notNull(),
  itemCode: varchar("item_code", { length: 50 }),
  itemName: text("item_name"),
  completedBy: varchar("completed_by", { length: 100 }),
  completedAt: timestamp("completed_at", { withTimezone: true }).defaultNow(),
  notes: text("notes"),
  facilityId: varchar("facility_id", { length: 50 }),
  module: varchar("module", { length: 20 }).default("ASC"),
  volume: integer("volume"),
  frequency: varchar("frequency", { length: 30 }),
});

export type ComplianceCompletionLog = typeof complianceCompletionLog.$inferSelect;

// ── Points Ledger ─────────────────────────────────────────────────────────────

export const POINT_EVENT_TYPES = [
  "question_correct",
  "flashcard_again",
  "flashcard_hard",
  "flashcard_good",
  "daily_login",
  "final_complete",
  "final_passed_first_attempt",
] as const;

export type PointEventType = typeof POINT_EVENT_TYPES[number];

export const pointsLedger = pgTable("points_ledger", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  facilityId: integer("facility_id").references(() => facilities.id),
  eventType: text("event_type").notNull(),
  pointsAwarded: integer("points_awarded").notNull(),
  levelId: text("level_id"),
  questionId: text("question_id"),
  metadata: jsonb("metadata").notNull().default(sql`'{}'::jsonb`),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
}, (t) => [
  index("idx_points_ledger_user_id").on(t.userId),
  index("idx_points_ledger_facility_id").on(t.facilityId),
  index("idx_points_ledger_created_at").on(t.createdAt),
  index("idx_points_ledger_event_type").on(t.eventType),
]);

export type PointsLedgerEntry = typeof pointsLedger.$inferSelect;

export const pilotConfig = pgTable("pilot_config", {
  id: serial("id").primaryKey(),
  facilityId: integer("facility_id").notNull().references(() => facilities.id),
  pilotName: text("pilot_name"),
  startDate: timestamp("start_date", { withTimezone: true }).notNull(),
  endDate: timestamp("end_date", { withTimezone: true }).notNull(),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export type PilotConfig = typeof pilotConfig.$inferSelect;

// Points query result shapes (not DB tables — just TS interfaces)
export interface PointsLeaderboardEntry {
  userId: number;
  username: string;
  firstName: string;
  lastName: string;
  totalPoints: number;
  rank: number;
}

export interface StaffEngagementEntry {
  userId: number;
  username: string;
  firstName: string;
  lastName: string;
  department: string | null;
  totalPoints: number;
  questionsCorrect: number;
  flashcardsReviewed: number;
  finalsCompleted: number;
  lastActive: string | null;
  engagementLevel: "High" | "Medium" | "Low";
}

export interface UserDrillDownEventRow {
  eventType: string;
  eventCount: number;
  pointsEarned: number;
}

export interface UserDrillDownLevelRow {
  levelId: string;
  questionsCorrect: number;
  flashcardsReviewed: number;
  levelPoints: number;
}

export interface UserDrillDownDayRow {
  activityDate: string;
  dailyPoints: number;
  dailyCorrect: number;
}

export interface UserDrillDown {
  totalPoints: number;
  breakdown: UserDrillDownEventRow[];
  byLevel: UserDrillDownLevelRow[];
  dailyActivity: UserDrillDownDayRow[];
}

export interface DeepDiveGameState {
  currentQuestion: number;
  totalQuestions: number;
  phase: "base" | "followUp" | "result";
  currentFollowUpIndex: number;
  baseCorrect: number;
  followUpCorrect: number;
  followUpAttempted: number;
  baseXpEarned: number;
  expertXpEarned: number;
  answers: {
    questionId: string;
    baseCorrect: boolean;
    baseSelectedIndex: number;
    followUpResults: { correct: boolean; selectedIndex: number }[];
  }[];
}
