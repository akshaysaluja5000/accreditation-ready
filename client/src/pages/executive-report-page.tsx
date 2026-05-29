import { useState, useMemo, useEffect } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, Download, AlertTriangle, CheckCircle2, Clock,
  Building2, TrendingUp, TrendingDown, Filter, X,
  ChevronRight, ClipboardList, Printer, FileText,
  ShieldCheck, ShieldAlert, ShieldX, ChevronDown, ChevronUp,
  Minus, Lock, GraduationCap, BookOpen, FlaskConical, Database,
} from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Legend
} from "recharts";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useFacilityAuth } from "@/lib/facility-auth";
import { auditLog } from "@/lib/audit-log";
import { MOCK_FACILITIES } from "@shared/facility-roles";
import { format, parseISO, startOfWeek, subWeeks } from "date-fns";

// ── Types ──────────────────────────────────────────────────────────────────

type PlanStatus = "Assigned" | "In Progress" | "Completed" | "Verified";
type RiskLevel = "green" | "yellow" | "red";

interface ExecPlan {
  id: string;
  category: string;
  facilityType: "Hospital" | "ASC";
  learner: string;
  facility: string;
  facilityId: string;
  quizScore: number;
  passingThreshold: number;
  status: PlanStatus;
  assignedDate: string;
  dueDate: string;
  completedAt?: string;
  daysActive: number;
  daysOverdue: number;
}

interface TrendPoint { week: string; assigned: number; completed: number; }

// ── Mock Data ──────────────────────────────────────────────────────────────

const TODAY = new Date();
const d = (offset: number) => {
  const dt = new Date(TODAY);
  dt.setDate(dt.getDate() + offset);
  return dt.toISOString().split("T")[0];
};

const EXEC_MOCK_PLANS: ExecPlan[] = [
  // ── facility_mosh ────────────────────────────────────────────────────────
  {
    id: "rem-001",
    category: "OR & Sterile Technique", facilityType: "Hospital",
    learner: "OR Circulating Nurse",
    facility: "Midwest Orthopedic Specialty Hospital", facilityId: "facility_mosh",
    quizScore: 62, passingThreshold: 70,
    status: "Assigned",
    assignedDate: d(-21), dueDate: d(-4), daysActive: 21, daysOverdue: 4,
  },
  {
    id: "rem-002",
    category: "Instrument Integrity", facilityType: "Hospital",
    learner: "OR Scrub Tech",
    facility: "Midwest Orthopedic Specialty Hospital", facilityId: "facility_mosh",
    quizScore: 48, passingThreshold: 70,
    status: "In Progress",
    assignedDate: d(-14), dueDate: d(-2), daysActive: 14, daysOverdue: 2,
  },
  {
    id: "rem-005",
    category: "EOC & Safety Compliance", facilityType: "Hospital",
    learner: "RN - Pre/Post",
    facility: "Midwest Orthopedic Specialty Hospital", facilityId: "facility_mosh",
    quizScore: 52, passingThreshold: 70,
    status: "Verified",
    assignedDate: d(-30), dueDate: d(-5), completedAt: d(-1),
    daysActive: 29, daysOverdue: 0,
  },
  {
    id: "rem-009",
    category: "Anesthesia and Surgical Services", facilityType: "ASC",
    learner: "CRNA",
    facility: "Midwest Orthopedic Specialty Hospital", facilityId: "facility_mosh",
    quizScore: 55, passingThreshold: 70,
    status: "Assigned",
    assignedDate: d(-12), dueDate: d(-1), daysActive: 12, daysOverdue: 1,
  },
  {
    id: "rem-012",
    category: "Surgical Safety & Consent", facilityType: "Hospital",
    learner: "Quality Coordinator",
    facility: "Midwest Orthopedic Specialty Hospital", facilityId: "facility_mosh",
    quizScore: 67, passingThreshold: 70,
    status: "Completed",
    assignedDate: d(-18), dueDate: d(7), daysActive: 18, daysOverdue: 0,
  },
  // ── facility_ohw ─────────────────────────────────────────────────────────
  {
    id: "rem-003",
    category: "SPD & Decontamination", facilityType: "Hospital",
    learner: "SPD Technician",
    facility: "Orthopedic Hospital of Wisconsin", facilityId: "facility_ohw",
    quizScore: 55, passingThreshold: 70,
    status: "Assigned",
    assignedDate: d(-10), dueDate: d(4), daysActive: 10, daysOverdue: 0,
  },
  {
    id: "rem-006",
    category: "Environment & Surfaces", facilityType: "Hospital",
    learner: "Charge RN",
    facility: "Orthopedic Hospital of Wisconsin", facilityId: "facility_ohw",
    quizScore: 62, passingThreshold: 70,
    status: "Assigned",
    assignedDate: d(-7), dueDate: d(17), daysActive: 7, daysOverdue: 0,
  },
  {
    id: "rem-010",
    category: "Clean vs. Dirty", facilityType: "Hospital",
    learner: "OR Scrub Tech",
    facility: "Orthopedic Hospital of Wisconsin", facilityId: "facility_ohw",
    quizScore: 44, passingThreshold: 70,
    status: "In Progress",
    assignedDate: d(-9), dueDate: d(5), daysActive: 9, daysOverdue: 0,
  },
  {
    id: "rem-013",
    category: "Patient Care & Documentation", facilityType: "Hospital",
    learner: "Infection Preventionist",
    facility: "Orthopedic Hospital of Wisconsin", facilityId: "facility_ohw",
    quizScore: 65, passingThreshold: 70,
    status: "Verified",
    assignedDate: d(-38), dueDate: d(-10), completedAt: d(-12),
    daysActive: 26, daysOverdue: 0,
  },
  // ── facility_ascension ────────────────────────────────────────────────────
  {
    id: "rem-004",
    category: "Facilities & Equipment", facilityType: "Hospital",
    learner: "Biomedical Technician",
    facility: "Ascension SE Wisconsin", facilityId: "facility_ascension",
    quizScore: 67, passingThreshold: 70,
    status: "Completed",
    assignedDate: d(-18), dueDate: d(7), daysActive: 18, daysOverdue: 0,
  },
  {
    id: "rem-007",
    category: "Transport of Instruments", facilityType: "Hospital",
    learner: "SPD Technician",
    facility: "Ascension SE Wisconsin", facilityId: "facility_ascension",
    quizScore: 60, passingThreshold: 70,
    status: "Verified",
    assignedDate: d(-45), dueDate: d(-18), completedAt: d(-20),
    daysActive: 25, daysOverdue: 0,
  },
  {
    id: "rem-008",
    category: "Infection Prevention and Control and Safety", facilityType: "ASC",
    learner: "ASC Circulating RN",
    facility: "Ascension SE Wisconsin", facilityId: "facility_ascension",
    quizScore: 58, passingThreshold: 70,
    status: "Assigned",
    assignedDate: d(-5), dueDate: d(1), daysActive: 5, daysOverdue: 0,
  },
  {
    id: "rem-011",
    category: "Pharmaceutical Services", facilityType: "ASC",
    learner: "ASC Charge RN",
    facility: "Ascension SE Wisconsin", facilityId: "facility_ascension",
    quizScore: 62, passingThreshold: 70,
    status: "Verified",
    assignedDate: d(-28), dueDate: d(-7), completedAt: d(-2),
    daysActive: 26, daysOverdue: 0,
  },
  // ── facility_demo_hospital ────────────────────────────────────────────────
  {
    id: "rem-demo-001",
    category: "OR & Sterile Technique", facilityType: "Hospital",
    learner: "OR Director",
    facility: "Demo Regional Medical Center", facilityId: "facility_demo_hospital",
    quizScore: 55, passingThreshold: 70,
    status: "Assigned",
    assignedDate: d(-8), dueDate: d(3), daysActive: 8, daysOverdue: 0,
  },
  {
    id: "rem-demo-002",
    category: "Instrument Integrity", facilityType: "Hospital",
    learner: "SPD Technician",
    facility: "Demo Regional Medical Center", facilityId: "facility_demo_hospital",
    quizScore: 44, passingThreshold: 70,
    status: "In Progress",
    assignedDate: d(-4), dueDate: d(10), daysActive: 4, daysOverdue: 0,
  },
  {
    id: "rem-demo-003",
    category: "Patient Care & Documentation", facilityType: "Hospital",
    learner: "Charge RN",
    facility: "Demo Regional Medical Center", facilityId: "facility_demo_hospital",
    quizScore: 62, passingThreshold: 70,
    status: "Completed",
    assignedDate: d(-16), dueDate: d(-3), daysActive: 16, daysOverdue: 3,
  },
  {
    id: "rem-demo-004",
    category: "EOC & Safety Compliance", facilityType: "Hospital",
    learner: "Quality Coordinator",
    facility: "Demo Regional Medical Center", facilityId: "facility_demo_hospital",
    quizScore: 65, passingThreshold: 70,
    status: "Assigned",
    assignedDate: d(-11), dueDate: d(-2), daysActive: 11, daysOverdue: 2,
  },
  {
    id: "rem-demo-005",
    category: "Anesthesia and Surgical Services", facilityType: "ASC",
    learner: "CRNA",
    facility: "Demo Regional Medical Center", facilityId: "facility_demo_hospital",
    quizScore: 52, passingThreshold: 70,
    status: "Verified",
    assignedDate: d(-28), dueDate: d(-7), completedAt: d(-2),
    daysActive: 26, daysOverdue: 0,
  },
];

// ── Trend Data ─────────────────────────────────────────────────────────────

function buildTrendData(plans: ExecPlan[]): TrendPoint[] {
  return Array.from({ length: 8 }, (_, i) => {
    const w = 7 - i;
    const weekStart = startOfWeek(subWeeks(TODAY, w));
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekEnd.getDate() + 6);
    return {
      week: format(weekStart, "MMM d"),
      assigned: plans.filter((p) => {
        const c = parseISO(p.assignedDate);
        return c >= weekStart && c <= weekEnd;
      }).length,
      completed: plans.filter((p) => {
        if (!p.completedAt) return false;
        const c = parseISO(p.completedAt);
        return c >= weekStart && c <= weekEnd;
      }).length,
    };
  });
}

// ── KPI Calculations ───────────────────────────────────────────────────────
// Active Plans = Assigned + In Progress
// Completed This Month = Completed + Verified this month

function calcKpis(plans: ExecPlan[]) {
  const now = new Date();
  const active = plans.filter((p) => p.status === "Assigned" || p.status === "In Progress").length;
  const overdue = plans.filter((p) => p.daysOverdue > 0).length;
  const completedThisMonth = plans.filter((p) => {
    const isFinished = p.status === "Completed" || p.status === "Verified";
    if (!isFinished || !p.completedAt) return false;
    const c = parseISO(p.completedAt);
    return c.getMonth() === now.getMonth() && c.getFullYear() === now.getFullYear();
  }).length;
  const overdueCount = plans.filter((p) => p.daysOverdue > 0).length;
  const finishedPlans = plans.filter((p) => p.completedAt);
  const avgDaysToComplete = finishedPlans.length
    ? Math.round(finishedPlans.reduce((s, p) => s + p.daysActive, 0) / finishedPlans.length)
    : 0;
  return { active, overdue, completedThisMonth, overdueCount, avgDaysToComplete };
}

// ── Risk Status ────────────────────────────────────────────────────────────

function calcRiskStatus(plans: ExecPlan[], trendData: TrendPoint[]): RiskLevel {
  const overdueActive = plans.filter(
    (p) => p.daysOverdue > 0 && (p.status === "Assigned" || p.status === "In Progress")
  );
  const recent = trendData.slice(-4);
  const recentAssigned = recent.reduce((s, w) => s + w.assigned, 0);
  const recentCompleted = recent.reduce((s, w) => s + w.completed, 0);
  const worsening = recentAssigned > 0 && recentCompleted < recentAssigned * 0.6;
  if (overdueActive.some((p) => p.quizScore < 55) || worsening) return "red";
  if (overdueActive.length > 0) return "red";
  return "green";
}

// ── Executive Narrative ────────────────────────────────────────────────────

function generateNarrative(
  plans: ExecPlan[],
  kpis: ReturnType<typeof calcKpis>,
  trendData: TrendPoint[],
  facilityName: string,
  isSuperAdmin: boolean,
): string {
  const facilityCount = new Set(plans.map((p) => p.facility)).size;
  const scopeLabel = isSuperAdmin
    ? `across ${facilityCount} facilit${facilityCount !== 1 ? "ies" : "y"}`
    : `at ${facilityName}`;

  const categoryMap: Record<string, number> = {};
  for (const p of plans.filter((p) => p.status === "Assigned" || p.status === "In Progress")) {
    categoryMap[p.category] = (categoryMap[p.category] || 0) + 1;
  }
  const topCategories = Object.entries(categoryMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2)
    .map(([c]) => c);

  const recent = trendData.slice(-4);
  const recentAssigned = recent.reduce((s, w) => s + w.assigned, 0);
  const recentCompleted = recent.reduce((s, w) => s + w.completed, 0);
  const trendImproving = recentCompleted >= recentAssigned;

  let text = `As of ${format(TODAY, "MMMM d, yyyy")}, there are ${kpis.active} active guided education plan${kpis.active !== 1 ? "s" : ""} ${scopeLabel}.`;
  text += " All plans were triggered by final test scores below the 70% passing threshold.";

  if (kpis.overdue > 0) {
    text += ` ${kpis.overdue} plan${kpis.overdue !== 1 ? "s are" : " is"} past the due date and require learner follow-up.`;
  } else {
    text += " No plans are currently overdue.";
  }

  if (topCategories.length > 0) {
    text += ` ${topCategories.join(" and ")} ${topCategories.length > 1 ? "have" : "has"} the most active plans.`;
  }

  if (recentAssigned + recentCompleted > 0) {
    text += trendImproving
      ? " Completion is outpacing new assignments over the past four weeks. Learners are progressing."
      : " New assignments are outpacing completions over the past four weeks. Follow-up is recommended.";
  }

  return text;
}

// ── Chapter Breakdown ──────────────────────────────────────────────────────

function buildChapterBreakdown(plans: ExecPlan[]) {
  const map: Record<string, { active: number; overdue: number }> = {};
  for (const p of plans) {
    if (!map[p.category]) map[p.category] = { active: 0, overdue: 0 };
    if (p.status === "Assigned" || p.status === "In Progress") map[p.category].active++;
    if (p.daysOverdue > 0) map[p.category].overdue++;
  }
  return Object.entries(map)
    .map(([category, s]) => ({ category, ...s }))
    .sort((a, b) => b.active - a.active);
}

// ── Attention Sort ─────────────────────────────────────────────────────────

function sortForAttention(plans: ExecPlan[]) {
  return [...plans]
    .filter((p) => p.status === "Assigned" || p.status === "In Progress")
    .sort((a, b) => {
      if (b.daysOverdue !== a.daysOverdue) return b.daysOverdue - a.daysOverdue;
      return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
    });
}

// ── Helpers ────────────────────────────────────────────────────────────────

function scoreColor(score: number, threshold: number) {
  const gap = threshold - score;
  if (gap <= 6) return "text-orange-500";
  if (gap <= 16) return "text-orange-400";
  return "text-red-400";
}

function statusIcon(s: PlanStatus) {
  switch (s) {
    case "Assigned": return <ClipboardList size={12} className="text-blue-400" />;
    case "In Progress": return <Clock size={12} className="text-blue-400" />;
    case "Completed": return <CheckCircle2 size={12} className="text-green-400" />;
    case "Verified": return <ShieldCheck size={12} className="text-purple-400" />;
  }
}

// ── Risk Status Config ─────────────────────────────────────────────────────

const RISK_CONFIG = {
  green: {
    Icon: ShieldCheck,
    label: "Readiness On Track",
    sub: "No overdue plans. All learners progressing on schedule.",
    bg: "bg-green-500/10 border-green-500/25",
    text: "text-green-400",
    dot: "bg-green-400",
  },
  yellow: {
    Icon: ShieldAlert,
    label: "Learner Attention Required",
    sub: "Some guided education plans are overdue. Learner follow-up recommended.",
    bg: "bg-destructive/10 border-destructive/30",
    text: "text-destructive",
    dot: "bg-destructive",
  },
  red: {
    Icon: ShieldX,
    label: "Guided Education Action Required",
    sub: "Overdue plans with significant score gaps, or completion backlog growing.",
    bg: "bg-destructive/10 border-destructive/30",
    text: "text-destructive",
    dot: "bg-destructive",
  },
};

// ── Export Helpers ─────────────────────────────────────────────────────────

function exportCsv(plans: ExecPlan[], facilityName: string) {
  const headers = [
    "ID", "Category", "Facility Type", "Learner", "Facility",
    "Score %", "Threshold %", "Status", "Assigned Date", "Due Date",
    "Days Active", "Days Overdue",
  ];
  const rows = plans.map((p) => [
    p.id, `"${p.category}"`, p.facilityType, `"${p.learner}"`, `"${p.facility}"`,
    p.quizScore, p.passingThreshold, p.status, p.assignedDate, p.dueDate,
    p.daysActive, p.daysOverdue,
  ]);
  const csv = [headers, ...rows].map((r) => r.join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const slug = facilityName.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
  link.href = url;
  link.download = `education-report-${slug}-${format(TODAY, "yyyy-MM-dd")}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

// ── Constants ──────────────────────────────────────────────────────────────

const ALL_STATUSES: (PlanStatus | "All")[] = ["All", "Assigned", "In Progress", "Completed", "Verified"];

// ── Main Page ──────────────────────────────────────────────────────────────

export default function ExecutiveReportPage() {
  const facilityAuth = useFacilityAuth();
  const { user, facilityId: scopedFacilityId, facilityName: scopedFacilityName, permissions, isSuperAdmin } = facilityAuth;
  const [, setLocation] = useLocation();

  const [dataMode, setDataMode] = useState<"demo" | "live">("live");
  const [selectedFacility, setSelectedFacility] = useState("All Facilities");
  const [chapter, setChapter] = useState("All Chapters");
  const [status, setStatus] = useState<PlanStatus | "All">("All");
  const [tableExpanded, setTableExpanded] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const leadershipRole = (user as any)?.leadershipRole as string ?? "learner";
  const execReportRank = { learner: 0, educator: 1, director: 2, ceo: 3, admin: 4, super_admin: 5 };
  const canExportReports = (execReportRank[leadershipRole as keyof typeof execReportRank] ?? 0) >= execReportRank["ceo"] || !!(user as any)?.isAdmin;

  useEffect(() => {
    if (permissions.canViewExecutiveReport && user !== undefined) {
      auditLog({
        userId: user?.id ?? null,
        leadershipRole,
        facilityId: scopedFacilityId,
        facilityName: scopedFacilityName,
        action: "executive_report_viewed",
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const facilityScoped = useMemo(() => {
    if (dataMode === "live") return [];
    if (isSuperAdmin) return EXEC_MOCK_PLANS;
    if (!scopedFacilityId) return [];
    return EXEC_MOCK_PLANS.filter((p) => p.facilityId === scopedFacilityId);
  }, [dataMode, isSuperAdmin, scopedFacilityId]);

  const ALL_CHAPTERS = useMemo(
    () => ["All Chapters", ...Array.from(new Set(facilityScoped.map((p) => p.category))).sort()],
    [facilityScoped]
  );

  const filtered = useMemo(() => {
    return facilityScoped.filter((p) => {
      if (isSuperAdmin && selectedFacility !== "All Facilities" && p.facility !== selectedFacility) return false;
      if (chapter !== "All Chapters" && p.category !== chapter) return false;
      if (status !== "All" && p.status !== status) return false;
      return true;
    });
  }, [facilityScoped, isSuperAdmin, selectedFacility, chapter, status]);

  const kpis = useMemo(() => calcKpis(filtered), [filtered]);
  const trendData = useMemo(() => buildTrendData(filtered), [filtered]);
  const chapterBreakdown = useMemo(() => buildChapterBreakdown(filtered), [filtered]);
  const attentionList = useMemo(() => sortForAttention(filtered), [filtered]);
  const riskLevel = useMemo(() => calcRiskStatus(filtered, trendData), [filtered, trendData]);
  const narrative = useMemo(
    () => generateNarrative(filtered, kpis, trendData, scopedFacilityName, isSuperAdmin),
    [filtered, kpis, trendData, scopedFacilityName, isSuperAdmin]
  );

  const hasFilters = (isSuperAdmin && selectedFacility !== "All Facilities")
    || chapter !== "All Chapters" || status !== "All";

  const recent = trendData.slice(-4);
  const recentAssigned = recent.reduce((s, w) => s + w.assigned, 0);
  const recentCompleted = recent.reduce((s, w) => s + w.completed, 0);
  const trendImproving = recentCompleted >= recentAssigned;

  const riskCfg = RISK_CONFIG[riskLevel];
  const RiskIcon = riskCfg.Icon;

  if (!permissions.canViewExecutiveReport) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-sm text-center flex flex-col items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-destructive/15 flex items-center justify-center">
            <Lock size={28} className="text-destructive" />
          </div>
          <h2 className="text-xl font-bold" data-testid="text-access-denied">Access Restricted</h2>
          <p className="text-sm text-muted-foreground">
            The Executive Readiness Report is available to Admin, CEO, and Compliance Officer roles only.
          </p>
          <Button variant="outline" onClick={() => setLocation("/leadership")} data-testid="button-go-home">
            <ArrowLeft size={14} className="mr-1.5" /> Back to Console
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col print:bg-white print:text-black">

      {/* ── Header ── */}
      <div className="sticky top-[58px] z-40 border-b border-border print:hidden bg-background/95 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 py-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
          {/* Row 1: back + title */}
          <div className="flex items-center gap-2 min-w-0">
            <Button variant="ghost" size="icon" onClick={() => setLocation("/leadership")} data-testid="button-back">
              <ArrowLeft size={20} />
            </Button>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <TrendingUp size={16} className="text-primary" />
                <h2 className="font-bold text-base" data-testid="text-page-title">Executive Readiness Report</h2>
              </div>
              <p className="text-xs text-muted-foreground truncate" data-testid="text-facility-scope">
                {scopedFacilityName} · {format(TODAY, "MMMM d, yyyy")} · Guided Education Plans
              </p>
            </div>
          </div>
          {/* Row 2 on mobile / right side on desktop: controls */}
          <div className="flex gap-2 items-center flex-wrap sm:flex-nowrap sm:ml-auto sm:flex-shrink-0">
            {/* Live / Demo toggle */}
            <div className="flex items-center rounded-lg border border-border bg-white/5 p-0.5" data-testid="container-mode-toggle">
              <button
                onClick={() => setDataMode("live")}
                className={`flex items-center gap-1 text-xs font-bold px-2.5 py-1.5 rounded-md transition-all ${
                  dataMode === "live" ? "bg-green-600 text-white shadow-sm" : "text-muted-foreground hover:text-foreground"
                }`}
                data-testid="button-exec-mode-live"
              >
                <Database size={11} /> Live
              </button>
              <button
                onClick={() => setDataMode("demo")}
                className={`flex items-center gap-1 text-xs font-bold px-2.5 py-1.5 rounded-md transition-all ${
                  dataMode === "demo" ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
                data-testid="button-exec-mode-demo"
              >
                <FlaskConical size={11} /> Demo
              </button>
            </div>
            <Button variant="ghost" size="sm" className="text-muted-foreground h-8 px-2.5" onClick={() => setFiltersOpen((v) => !v)} data-testid="button-toggle-filters">
              <Filter size={13} className="mr-1" /> Filters {hasFilters && <span className="ml-1 w-1.5 h-1.5 rounded-full bg-primary inline-block" />}
            </Button>
            {canExportReports ? (
              <Button variant="outline" size="sm" className="h-8 px-2.5" onClick={() => {
                exportCsv(filtered, scopedFacilityName);
                auditLog({ userId: user?.id ?? null, leadershipRole, facilityId: scopedFacilityId, facilityName: scopedFacilityName, action: "executive_report_csv_export", meta: { count: filtered.length } });
              }} data-testid="button-export-csv">
                <Download size={13} className="mr-1" /> CSV
              </Button>
            ) : (
              <Button variant="outline" size="sm" className="h-8 px-2.5" disabled title="CEO or Administrator role required to export" data-testid="button-export-csv-locked">
                <Lock size={13} className="mr-1" /> CSV
              </Button>
            )}
            {canExportReports ? (
              <Button variant="outline" size="sm" className="h-8 px-2.5" onClick={() => {
                window.print();
                auditLog({ userId: user?.id ?? null, leadershipRole, facilityId: scopedFacilityId, facilityName: scopedFacilityName, action: "executive_report_pdf_export" });
              }} data-testid="button-export-pdf">
                <Printer size={13} className="mr-1" /> PDF
              </Button>
            ) : (
              <Button variant="outline" size="sm" className="h-8 px-2.5" disabled title="CEO or Administrator role required to export" data-testid="button-export-pdf-locked">
                <Lock size={13} className="mr-1" /> PDF
              </Button>
            )}
          </div>
        </div>

        {/* Collapsible filters */}
        <AnimatePresence>
          {filtersOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-white/8"
            >
              <div className="max-w-4xl mx-auto px-4 py-3 flex flex-wrap gap-2 items-center" data-testid="container-filters">
                {isSuperAdmin && (
                  <Select value={selectedFacility} onValueChange={setSelectedFacility}>
                    <SelectTrigger className="h-8 text-xs w-56" data-testid="select-facility">
                      <Building2 size={11} className="mr-1.5 text-muted-foreground flex-shrink-0" />
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All Facilities">All Facilities</SelectItem>
                      {MOCK_FACILITIES.map((f) => (
                        <SelectItem key={f.id} value={f.name}>{f.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
                <Select value={chapter} onValueChange={setChapter}>
                  <SelectTrigger className="h-8 text-xs w-56" data-testid="select-chapter">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {ALL_CHAPTERS.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                  </SelectContent>
                </Select>
                <Select value={status} onValueChange={(v) => setStatus(v as PlanStatus | "All")}>
                  <SelectTrigger className="h-8 text-xs w-44" data-testid="select-status">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {ALL_STATUSES.map((s) => (
                      <SelectItem key={s} value={s}>{s === "All" ? "All Statuses" : s}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {hasFilters && (
                  <button
                    onClick={() => { setSelectedFacility("All Facilities"); setChapter("All Chapters"); setStatus("All"); }}
                    className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1"
                    data-testid="button-clear-filters"
                  >
                    <X size={11} /> Clear all
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-6 flex flex-col gap-5">

        {/* ── Demo Banner ── */}
        {dataMode === "demo" && (
          <div className="flex items-start gap-2.5 rounded-xl border border-orange-500/40 bg-orange-50 dark:bg-orange-500/10 px-4 py-3" data-testid="banner-exec-demo-mode">
            <FlaskConical size={14} className="text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-foreground/80 leading-relaxed">
              <span className="font-bold text-foreground">Demo Data - </span>
              Sample guided education plans for demonstration. Switch to <strong className="text-foreground">Live</strong> to see your facility's real plan data.
            </p>
          </div>
        )}

        {/* ── Live Empty State ── */}
        {dataMode === "live" && filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center gap-5 py-24 text-center" data-testid="container-exec-live-empty">
            <div className="w-16 h-16 rounded-full border-2 border-border flex items-center justify-center bg-muted/20">
              <GraduationCap size={28} className="text-muted-foreground" />
            </div>
            <div className="max-w-md">
              <h3 className="text-lg font-bold mb-1" data-testid="text-exec-empty-title">No guided education plans yet.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Plans appear here automatically when a learner scores below the 70% passing threshold on a final test. Switch to Demo mode to explore a sample report.
              </p>
            </div>
            <Button variant="outline" onClick={() => setDataMode("demo")} data-testid="button-exec-switch-demo">
              <FlaskConical size={14} className="mr-1.5" /> View Demo Report
            </Button>
          </div>
        )}

        {/* ── Main Content (only shown when plans exist) ── */}
        {filtered.length > 0 && (<>

        {/* ── Risk Status Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-2xl border-2 p-5 flex items-center gap-4 ${riskCfg.bg}`}
          data-testid="container-risk-status"
        >
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${riskCfg.bg}`}>
            <RiskIcon size={26} className={riskCfg.text} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <span className={`inline-block w-2 h-2 rounded-full flex-shrink-0 ${riskCfg.dot}`} />
              <span className={`font-black text-base ${riskCfg.text}`} data-testid="text-risk-label">{riskCfg.label}</span>
            </div>
            <p className="text-sm text-muted-foreground" data-testid="text-risk-sub">{riskCfg.sub}</p>
          </div>
          <div className="flex-shrink-0 text-right hidden sm:block">
            <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">Survey Risk</p>
            <p className={`text-2xl font-black ${riskCfg.text}`} data-testid="text-risk-level">
              {riskLevel === "green" ? "Low" : riskLevel === "yellow" ? "Moderate" : "High"}
            </p>
          </div>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="rounded-2xl border-2 border-border bg-card p-5 shadow-sm"
          data-testid="container-executive-summary"
        >
          <div className="flex items-center gap-2 mb-3">
            <FileText size={15} className="text-primary flex-shrink-0" />
            <h3 className="font-bold text-sm">Executive Summary</h3>
            <span className="ml-auto text-[10px] font-semibold text-muted-foreground">{format(TODAY, "MMM d, yyyy")}</span>
          </div>
          <p className="text-sm leading-relaxed text-foreground/85" data-testid="text-narrative">{narrative}</p>

          <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-border/60">
            <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${
              trendImproving ? "bg-green-500/10 border-green-500/25 text-green-400" : "bg-destructive/10 border-destructive/25 text-destructive"
            }`} data-testid="pill-trend">
              {trendImproving ? <TrendingDown size={11} /> : <TrendingUp size={11} />}
              {trendImproving ? "Completion trend improving" : "Assignments outpacing completions"}
            </span>
            {kpis.overdue > 0 && (
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border bg-destructive/10 border-destructive/25 text-destructive" data-testid="pill-critical-overdue">
                <AlertTriangle size={11} /> {kpis.overdue} plan{kpis.overdue !== 1 ? "s" : ""} overdue
              </span>
            )}
            {kpis.overdue === 0 && (
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border bg-green-500/10 border-green-500/25 text-green-400" data-testid="pill-on-track">
                <CheckCircle2 size={11} /> All plans on track
              </span>
            )}
            {!isSuperAdmin && (
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border bg-muted/40 border-border text-muted-foreground" data-testid="pill-facility-scope">
                <Building2 size={11} /> {scopedFacilityName}
              </span>
            )}
          </div>
        </motion.div>

        {/* ── 3 KPI Cards ── */}
        <div className="grid grid-cols-3 gap-3" data-testid="container-kpis">
          {[
            {
              label: "Active Plans",
              value: kpis.active,
              sub: "Assigned + In Progress",
              icon: GraduationCap,
              color: "text-blue-400",
              testid: "kpi-open",
            },
            {
              label: "Overdue",
              value: kpis.overdue,
              sub: "Past due date",
              icon: AlertTriangle,
              color: kpis.overdue > 0 ? "text-destructive" : "text-muted-foreground",
              testid: "kpi-overdue",
            },
            {
              label: "Completed This Month",
              value: kpis.completedThisMonth,
              sub: `Avg ${kpis.avgDaysToComplete}d to complete`,
              icon: CheckCircle2,
              color: "text-green-400",
              testid: "kpi-closed-month",
            },
          ].map(({ label, value, sub, icon: Icon, color, testid }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border-2 border-border bg-card p-4 flex flex-col items-center gap-1 text-center shadow-sm"
              data-testid={testid}
            >
              <Icon size={15} className={color} />
              <span className="text-3xl font-black mt-0.5">{value}</span>
              <span className="text-xs text-muted-foreground font-semibold leading-tight">{label}</span>
              <span className="text-xs text-muted-foreground mt-0.5">{sub}</span>
            </motion.div>
          ))}
        </div>

        {/* ── Trend + Chapter Breakdown ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          {/* Trend */}
          <div className="rounded-2xl border-2 border-border bg-card p-5 shadow-sm" data-testid="container-trend-chart">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <TrendingUp size={14} className="text-primary" />
                <h3 className="font-bold text-sm">Assigned vs Completed - 8 Weeks</h3>
              </div>
              <span className={`text-[11px] font-bold flex items-center gap-1 ${trendImproving ? "text-green-400" : "text-destructive"}`}>
                {trendImproving ? <TrendingDown size={12} /> : <TrendingUp size={12} />}
                {trendImproving ? "Improving" : "Worsening"}
              </span>
            </div>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={trendData} barGap={2} barSize={9}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(128,128,128,0.15)" />
                <XAxis dataKey="week" tick={{ fontSize: 10, fill: "#888" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 10, fill: "#888" }} axisLine={false} tickLine={false} allowDecimals={false} />
                <Tooltip contentStyle={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "8px", fontSize: 12 }} labelStyle={{ color: "#374151", marginBottom: 3 }} />
                <Legend wrapperStyle={{ fontSize: 12, paddingTop: 8 }} />
                <Bar dataKey="assigned" name="Assigned" fill="hsl(var(--primary))" radius={[3, 3, 0, 0]} opacity={0.8} />
                <Bar dataKey="completed" name="Completed" fill="hsl(var(--chart-2))" radius={[3, 3, 0, 0]} opacity={0.8} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Chapter Breakdown */}
          <div className="rounded-2xl border-2 border-border bg-card p-5 shadow-sm" data-testid="container-dept-breakdown">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen size={14} className="text-primary" />
              <h3 className="font-bold text-sm">Active Plans by Chapter</h3>
            </div>
            <div className="flex flex-col gap-1">
              <div className="grid grid-cols-4 text-[9px] font-bold uppercase tracking-wider text-muted-foreground pb-1.5 border-b border-border px-1">
                <span className="col-span-2">Category / Chapter</span>
                <span className="text-center">Active</span>
                <span className="text-center">Overdue</span>
              </div>
              {chapterBreakdown.map(({ category: cat, active, overdue }) => (
                <div key={cat} className="grid grid-cols-4 text-xs px-1 py-1.5 rounded-lg hover:bg-white/5 transition-colors items-center" data-testid={`row-dept-${cat}`}>
                  <span className="col-span-2 font-medium truncate pr-2 text-[11px]">{cat}</span>
                  <span className="text-center font-bold text-blue-600 dark:text-blue-400">{active || "-"}</span>
                  <span className={`text-center font-bold ${overdue > 0 ? "text-destructive" : "text-muted-foreground"}`}>
                    {overdue > 0 ? overdue : "-"}
                  </span>
                </div>
              ))}
              {chapterBreakdown.length === 0 && (
                <p className="text-xs text-muted-foreground text-center py-4">No data for current filters</p>
              )}
            </div>
          </div>
        </div>

        {/* ── Needs Attention Table (collapsible) ── */}
        <div className="rounded-2xl border-2 border-border bg-card shadow-sm overflow-hidden" data-testid="container-needs-attention">
          <div
            role="button"
            tabIndex={0}
            className="w-full flex items-center justify-between px-5 py-4 hover:bg-white/3 transition-colors text-left cursor-pointer"
            onClick={() => setTableExpanded((v) => !v)}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setTableExpanded((v) => !v); }}
            data-testid="button-toggle-table"
          >
            <div className="flex items-center gap-2.5">
              <AlertTriangle size={15} className={kpis.overdue > 0 ? "text-destructive" : "text-muted-foreground"} />
              <span className="font-bold text-sm">Needs Attention</span>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                {attentionList.length} active
              </span>
              {kpis.overdue > 0 && (
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-destructive/15 text-destructive border border-destructive/25">
                  {kpis.overdue} overdue
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-xs h-7 px-2.5"
                onClick={(e) => { e.stopPropagation(); setLocation("/corrective-actions"); }}
                data-testid="button-view-all-actions"
              >
                View All <ChevronRight size={11} className="ml-0.5" />
              </Button>
              {tableExpanded ? <ChevronUp size={15} className="text-muted-foreground" /> : <ChevronDown size={15} className="text-muted-foreground" />}
            </div>
          </div>

          <AnimatePresence initial={false}>
            {tableExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden border-t border-border/60"
              >
                <div className="overflow-x-auto">
                  <table className="w-full text-xs" data-testid="table-needs-attention">
                    <thead>
                      <tr className="border-b border-border/60 text-muted-foreground font-bold uppercase tracking-wider text-[9px]">
                        <th className="text-left px-5 py-2.5">Category</th>
                        <th className="text-left px-3 py-2.5 hidden sm:table-cell">Learner</th>
                        <th className="text-center px-3 py-2.5">Score</th>
                        <th className="text-center px-3 py-2.5 hidden sm:table-cell">Due</th>
                        <th className="text-center px-3 py-2.5">Status</th>
                        <th className="text-center px-3 py-2.5">Overdue</th>
                        <th className="px-3 py-2.5"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {attentionList.length === 0 && (
                        <tr>
                          <td colSpan={7} className="text-center py-8 text-muted-foreground">
                            <CheckCircle2 size={20} className="text-green-400/40 mx-auto mb-1.5" />
                            No active plans match current filters
                          </td>
                        </tr>
                      )}
                      {attentionList.map((plan, i) => (
                        <tr
                          key={plan.id}
                          className={`border-b border-border/40 hover:bg-white/3 transition-colors ${i % 2 === 0 ? "" : "bg-white/[0.015]"}`}
                          data-testid={`row-action-${plan.id}`}
                        >
                          <td className="px-5 py-3 max-w-[200px]">
                            <p className="font-semibold leading-snug line-clamp-2 text-[11px]">{plan.category}</p>
                            <p className="text-muted-foreground mt-0.5 text-[10px]">{plan.facilityType}</p>
                          </td>
                          <td className="px-3 py-3 hidden sm:table-cell text-muted-foreground whitespace-nowrap text-[11px]">
                            {plan.learner}
                          </td>
                          <td className="px-3 py-3 text-center">
                            <span className={`font-bold text-[11px] ${scoreColor(plan.quizScore, plan.passingThreshold)}`}>
                              {plan.quizScore}%
                            </span>
                          </td>
                          <td className={`px-3 py-3 text-center hidden sm:table-cell whitespace-nowrap font-semibold text-[11px] ${plan.daysOverdue > 0 ? "text-destructive" : "text-muted-foreground"}`}>
                            {format(parseISO(plan.dueDate), "MMM d")}
                          </td>
                          <td className="px-3 py-3 text-center">
                            <span className="inline-flex items-center justify-center gap-1">{statusIcon(plan.status)}</span>
                          </td>
                          <td className="px-3 py-3 text-center">
                            {plan.daysOverdue > 0
                              ? <span className="font-bold text-destructive">{plan.daysOverdue}d</span>
                              : <Minus size={12} className="text-muted-foreground/30 mx-auto" />}
                          </td>
                          <td className="px-3 py-3">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-6 text-[10px] px-2"
                              onClick={() => setLocation("/corrective-actions")}
                              data-testid={`button-drilldown-${plan.id}`}
                            >
                              View
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        </>)}

      </div>
    </div>
  );
}
