import { useState, useMemo, useRef, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, Link } from "wouter";
import { Flame, Zap, Target, TrendingUp, ChevronRight, ChevronDown, ChevronUp, LogOut, BarChart3, Calendar as CalendarIcon, Settings, BookOpen, Trophy, Shuffle, Microscope, BrainCircuit, Stethoscope, Crown, Briefcase, Play, FileText, ClipboardCheck, ClipboardList, ShieldAlert, Brain, Layers, GraduationCap, Search, X as XIcon, ZoomIn, HelpCircle, MessageSquare, MoreHorizontal, Moon, Sun, AlertCircle } from "lucide-react"; // eslint-disable-line @typescript-eslint/no-unused-vars
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { StreakFlame } from "@/components/streak-flame";
import { XpBar } from "@/components/xp-bar";
import { LevelCard } from "@/components/level-card";
import { DailyCalendar } from "@/components/daily-calendar";
import { PathwayMenu } from "@/components/pathway-menu";
import { useAuth } from "@/lib/auth";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import type { UserStreak, UserProgress, DailyActivity, QuizSession, DiagnosticResult } from "@shared/schema";
import { getVisibleLevelsForModule, findLevelById } from "@shared/all-levels";
import { ascHandbook, ASC_HANDBOOK_CATEGORY_ORDER, type AscHandbookChapter } from "@shared/asc-handbook";
import { MODULE_LABELS, type ModuleId } from "@shared/schema";
import { getRoleConfig } from "@shared/roles";
import { TopicQuizModal, type SearchEntry } from "@/components/topic-quiz-modal";
import wallchart1 from "@assets/IMG_5138_1778809817331.jpeg";
import wallchart2 from "@assets/IMG_5139_1778809821358.jpeg";
import wallchart3 from "@assets/IMG_5140_1778809824135.jpeg";

const WALLCHARTS = [
  { id: "eoc-utilities", label: "Environment of Care & Utilities", subtitle: "Vols. 1–3 · Building, Emergency Preparedness, Utility Systems", src: wallchart1 },
  { id: "fire-safety", label: "Fire Safety", subtitle: "Vols. 4–5 · Fire Risks, Drills, Alarm & Suppression", src: wallchart2 },
  { id: "medical-infection", label: "Medical Equipment & Infection Control", subtitle: "Vol. 6 · Equipment Testing, Sterilization, IPC Program", src: wallchart3 },
];

const PATHWAY_HEADERS: Record<ModuleId, string> = {
  hospital: "Hospital Standards",
  asc: "ASC Domains",
  dnv: "DNV NIAHO Standards",
};

const PATHWAY_DISCLAIMERS: Record<ModuleId, string> = {
  hospital: "Not affiliated with, endorsed by, or sponsored by The Joint Commission, DNV, AAAHC, or CMS. For educational purposes only.",
  asc: "Not affiliated with, endorsed by, or sponsored by AAAHC, The Joint Commission, DNV, or CMS. For educational purposes only.",
  dnv: "Not affiliated with, endorsed by, or sponsored by DNV, The Joint Commission, AAAHC, or CMS. For educational purposes only.",
};

function AscChapterCard({
  chapter,
  progressMap,
  sessionsMap,
  onRead,
  onPlay,
  onStudy,
}: {
  chapter: AscHandbookChapter;
  progressMap: Map<string, UserProgress>;
  sessionsMap: Map<string, QuizSession>;
  onRead: () => void;
  onPlay: (quizId: string) => void;
  onStudy: (quizId: string) => void;
}) {
  const [, setLocation] = useLocation();
  const [riskExpanded, setRiskExpanded] = useState(false);
  const quizId = chapter.quizLevelId;
  const quizLevel = quizId ? findLevelById(quizId) : undefined;
  const riskPoints = quizLevel?.chapterSummary?.commonRiskPoints;
  const totalQuestions = quizLevel?.questions.filter((q) => !q.draft).length ?? 0;
  // "Has a quiz" = published questions exist. "Has flashcards" = study material exists (independent of quiz).
  const hasPublishedQuiz = Boolean(quizId && quizLevel && totalQuestions > 0);
  const hasFlashcards = Boolean(quizId && quizLevel && quizLevel.studyMaterial && quizLevel.studyMaterial.length > 0);
  const progress = hasPublishedQuiz ? progressMap.get(quizId!) : undefined;
  const session = hasPublishedQuiz ? sessionsMap.get(quizId!) : undefined;
  const bestScore = progress?.bestScore ?? 0;
  const hasPlayed = progress && progress.totalQuestions > 0;
  const percentage = totalQuestions > 0 ? Math.round((bestScore / totalQuestions) * 100) : 0;

  return (
    <motion.div
      className="w-full rounded-2xl border-2 border-primary/80 bg-primary p-5 shadow-md hover:shadow-xl transition-all"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -1 }}
      data-testid={`card-asc-chapter-${chapter.levelId}`}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center bg-white/10 text-white">
          <span className="font-black text-xl">{chapter.chapterNumber}</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-black text-base leading-tight text-white" data-testid={`text-asc-chapter-title-${chapter.levelId}`}>
              {chapter.title}
            </h3>
            {hasPublishedQuiz && hasPlayed && (
              <span
                className="px-2 py-0.5 rounded-full bg-white/15 text-white text-xs font-bold flex items-center gap-1"
                data-testid={`badge-best-score-${chapter.levelId}`}
              >
                <Trophy size={12} />
                Best: {percentage}%
              </span>
            )}
            {!hasPublishedQuiz && (
              <span
                className="px-2 py-0.5 rounded-full bg-white/10 text-white/70 text-xs font-bold"
                data-testid={`badge-reading-only-${chapter.levelId}`}
              >
                Reading
              </span>
            )}
          </div>
          <p className="text-sm text-white/90 mt-1.5 leading-snug">
            {chapter.sections.length} standards · {chapter.quickReference.length} quick reference items
          </p>
          <div className="flex flex-col gap-2 mt-3">
            {/* Study tools */}
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={onRead}
                data-testid={`button-asc-read-${chapter.levelId}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold bg-white/15 hover:bg-white/25 text-white border border-white/20 transition-all active:scale-95"
              >
                <FileText size={15} />
                Read in Handbook
              </button>
              {quizId && quizLevel?.chapterSummary && (
                <button
                  onClick={() => setLocation(`/study/${quizId}?view=summary`)}
                  data-testid={`button-asc-overview-${chapter.levelId}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold bg-white/15 hover:bg-white/25 text-white border border-white/20 transition-all active:scale-95"
                >
                  <BookOpen size={15} />
                  Chapter Overview
                </button>
              )}
              {hasFlashcards && quizId && (
                <button
                  onClick={() => onStudy(quizId)}
                  data-testid={`button-asc-study-${chapter.levelId}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold bg-white/15 hover:bg-white/25 text-white border border-white/20 transition-all active:scale-95"
                >
                  <Layers size={15} />
                  Flashcards
                </button>
              )}
            </div>

            {/* Practice / test options - always visible as a pair */}
            <div className="flex items-center gap-2 pt-1 border-t border-white/10 flex-wrap">
              <span className="text-xs font-bold text-white/90">Practice:</span>
              {hasPublishedQuiz && quizId && (
                <button
                  onClick={() => onPlay(quizId)}
                  data-testid={`button-asc-practice-${chapter.levelId}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold bg-white text-primary hover:bg-white/90 transition-all active:scale-95 shadow-sm"
                >
                  <Play size={15} />
                  {hasPlayed || session ? "Quiz Again" : "Practice Quiz"}
                </button>
              )}
              <button
                onClick={() => setLocation(`/deep-dive/${chapter.levelId}`)}
                data-testid={`button-asc-deep-dive-${chapter.levelId}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold bg-white/15 hover:bg-white/25 text-white border border-white/20 transition-all active:scale-95"
              >
                <Microscope size={15} />
                Deep Dive Tracer
              </button>
            </div>
          </div>

          {riskPoints && riskPoints.length > 0 && (
            <div className="mt-4 border-t border-white/10 pt-3 rounded-lg bg-black/20 px-3 py-2 -mx-1">
              <button
                className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide hover:opacity-80 transition-opacity w-full text-left text-red-400"
                onClick={() => setRiskExpanded(!riskExpanded)}
                data-testid={`button-asc-risk-toggle-${chapter.levelId}`}
              >
                <ShieldAlert size={13} />
                {riskPoints.length} Common Survey Risk Points
                {riskExpanded ? <ChevronUp size={13} className="ml-auto" /> : <ChevronDown size={13} className="ml-auto" />}
              </button>
              {riskExpanded && (
                <ul className="mt-2 flex flex-col gap-1.5" data-testid={`list-asc-risk-points-${chapter.levelId}`}>
                  {riskPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-white leading-snug">
                      <span className="mt-0.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-400/80" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ComplianceReminderBanner() {
  const [, setLocation] = useLocation();
  const [dismissed, setDismissed] = useState(false);
  const { data: alerts = [] } = useQuery<{ id: number; category: string; message: string; daysOverdue: number; alertType: string }[]>({
    queryKey: ["/api/compliance/my-training-alerts"],
    staleTime: 5 * 60 * 1000,
  });

  if (dismissed || alerts.length === 0) return null;

  const categories = [...new Set(alerts.map(a => a.category))].slice(0, 3);
  const maxOverdue = Math.max(...alerts.map(a => a.daysOverdue ?? 0));
  const isEscalation = alerts.some(a => a.alertType === "escalation");

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      className={`max-w-6xl mx-auto px-6 pt-4`}
      data-testid="banner-compliance-reminder"
    >
      <div className={`rounded-xl border px-4 py-3 flex items-center gap-3 ${isEscalation ? "border-red-200 bg-red-50" : "border-amber-200 bg-amber-50"}`}>
        <AlertCircle className={`w-4 h-4 shrink-0 ${isEscalation ? "text-red-500" : "text-amber-500"}`} />
        <div className="flex-1 min-w-0">
          <span className="text-sm font-semibold text-foreground">
            You have {alerts.length} required compliance training item{alerts.length !== 1 ? "s" : ""} due
          </span>
          <span className="text-xs text-muted-foreground ml-2">
            {categories.join(" · ")}
            {maxOverdue > 0 && ` · ${maxOverdue} day${maxOverdue !== 1 ? "s" : ""} overdue`}
          </span>
        </div>
        <button
          onClick={() => setLocation("/my-log-entries")}
          data-testid="link-compliance-banner-review"
          className={`text-xs font-semibold shrink-0 hover:underline ${isEscalation ? "text-red-700" : "text-amber-700"}`}
        >
          Review Training →
        </button>
        <button
          onClick={() => setDismissed(true)}
          data-testid="button-compliance-banner-dismiss"
          className="text-muted-foreground hover:text-foreground transition-colors ml-1 shrink-0"
          aria-label="Dismiss"
        >
          <XIcon size={14} />
        </button>
      </div>
    </motion.div>
  );
}

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const [, setLocation] = useLocation();

  const { data: streak, isLoading: streakLoading } = useQuery<UserStreak>({
    queryKey: ["/api/game/streak"],
  });

  const { data: progress, isLoading: progressLoading } = useQuery<UserProgress[]>({
    queryKey: ["/api/game/progress"],
  });

  const { data: activities, isLoading: activitiesLoading } = useQuery<DailyActivity[]>({
    queryKey: ["/api/game/activities"],
  });

  const { data: todayActivity } = useQuery<DailyActivity>({
    queryKey: ["/api/game/today"],
  });

  const { data: savedSessions } = useQuery<QuizSession[]>({
    queryKey: ["/api/game/sessions"],
  });

  const { data: diagnosticResults } = useQuery<DiagnosticResult[]>({
    queryKey: ["/api/diagnostic/results"],
  });

  const { data: dueData } = useQuery<{ count: number; byLevel: Record<string, number> }>({
    queryKey: ["/api/flashcards/due/count"],
  });

  const { data: masteryEligibility } = useQuery<{ eligible: boolean; missingSections: string[] }>({
    queryKey: ["/api/mastery/eligibility"],
  });

  const { data: rolesList } = useQuery<{ id: number; slug: string; name: string }[]>({
    queryKey: ["/api/roles"],
    enabled: !!user?.roleId,
  });
  const { data: assignedData } = useQuery<{ chapters: string[]; role: { name: string; scope: string; department: string } | null }>({
    queryKey: ["/api/user/assigned-chapters"],
  });

  const viewScopeMutation = useMutation({
    mutationFn: async (scope: "department" | "all") => {
      const res = await apiRequest("PATCH", "/api/user/view-scope", { scope });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/auth/me"] });
      queryClient.invalidateQueries({ queryKey: ["/api/user/assigned-chapters"] });
    },
  });

  const isLoading = streakLoading || progressLoading || activitiesLoading;

  const progressMap = new Map<string, UserProgress>();
  progress?.forEach((p) => progressMap.set(p.levelId, p));

  const userModule: ModuleId = (user?.organizationType as ModuleId) || "hospital";
  const isAsc = userModule === "asc";
  const isDnv = userModule === "dnv";
  const moduleLevels = getVisibleLevelsForModule(userModule);

  // Hospital users still respect role-based assigned chapters. ASC/DNV users always see every chapter.
  const assignedFilteredLevels = (isAsc || isDnv)
    ? moduleLevels
    : (assignedData?.chapters && assignedData.chapters.length > 0)
      ? moduleLevels.filter(l => assignedData.chapters.includes(l.id))
      : moduleLevels;

  const ascChapterGroups = ASC_HANDBOOK_CATEGORY_ORDER.map((cat) => ({
    category: cat,
    chapters: ascHandbook
      .filter((c) => c.category === cat)
      .sort((a, b) => a.chapterNumber - b.chapterNumber),
  }));

  const sessionsMap = new Map<string, QuizSession>();
  savedSessions?.forEach((s) => sessionsMap.set(s.levelId, s));

  // Module-scoped XP: only count XP earned on levels in the current module (hospital vs ASC).
  // Quiz sessions persist past completion with their final xpEarned value, so summing per-module
  // sessions is the correct module-specific total without leaking the other module's XP.
  const moduleLevelIdSet = new Set(getVisibleLevelsForModule(userModule, { includeDraft: true }).map((l) => l.id));
  const displayXp = savedSessions
    ?.filter((s) => moduleLevelIdSet.has(s.levelId))
    .reduce((sum, s) => sum + (s.xpEarned || 0), 0) || 0;

  const isLevelUnlocked = (_levelIndex: number) => {
    return true;
  };

  // ── Search index (built from all visible levels + ASC handbook) ──────────
  const searchIndex = useMemo<SearchEntry[]>(() => {
    const entries: SearchEntry[] = [];

    // Hospital levels - module-level entry + one entry per study concept for granular search
    const hospLevels = getVisibleLevelsForModule("hospital");
    for (const lvl of hospLevels) {
      const conceptText = (lvl.studyMaterial ?? [])
        .map((c) => `${c.title} ${c.content} ${c.keyPoint} ${c.extraInfo ?? ""}`)
        .join(" ");
      const questionText = (lvl.questions ?? [])
        .map((q) => `${q.text} ${(q.options ?? []).join(" ")} ${q.explanation ?? ""}`)
        .join(" ");
      const moduleAiContext = [
        lvl.description ?? "",
        lvl.chapterSummary?.plainLanguageSummary ?? "",
        (lvl.chapterSummary?.commonRiskPoints ?? []).join(". "),
        (lvl.chapterSummary?.keyOperationalExpectations ?? []).join(". "),
        conceptText,
        questionText,
      ].filter(Boolean).join(" ");
      // Module-level entry
      entries.push({
        id: `hosp-${lvl.id}`,
        title: lvl.name,
        subtitle: lvl.description ?? "",
        module: "hospital",
        levelId: lvl.id,
        aiContext: moduleAiContext,
      });
      // Concept-level entries - one per study concept for specific topic searches
      for (const concept of (lvl.studyMaterial ?? [])) {
        if (!concept?.title) continue;
        entries.push({
          id: `hosp-${lvl.id}-${concept.title.toLowerCase().replace(/[^a-z0-9]+/g, "_")}`,
          title: concept.title,
          subtitle: `${lvl.name} · ${(concept.keyPoint ?? "").slice(0, 80)}`,
          module: "hospital",
          levelId: lvl.id,
          aiContext: `${concept.title} ${concept.content ?? ""} ${concept.keyPoint ?? ""} ${concept.extraInfo ?? ""}`,
        });
      }
    }

    // ASC handbook chapters - index title, overview, risk points, section content, study material, and questions
    const ascLevelsAll = getVisibleLevelsForModule("asc");
    for (const ch of ascHandbook) {
      const ascLvl = ascLevelsAll.find((l) => l.id === ch.levelId);
      const sectionText = ((ch as any).sections ?? [])
        .map((s: any) => `${s.title ?? ""} ${s.content ?? ""}`.trim())
        .filter(Boolean)
        .join(" ");
      const conceptText = (ascLvl?.studyMaterial ?? [])
        .map((c) => `${c.title} ${c.content} ${c.keyPoint} ${c.extraInfo ?? ""}`)
        .join(" ");
      const questionText = (ascLvl?.questions ?? [])
        .map((q) => `${q.text} ${(q.options ?? []).join(" ")} ${q.explanation ?? ""}`)
        .join(" ");
      entries.push({
        id: `asc-${ch.levelId}`,
        title: ch.title,
        subtitle: ch.overview?.slice(0, 120) ?? "",
        module: "asc",
        levelId: ch.levelId,
        aiContext: [
          ch.overview ?? "",
          (ch.riskPoints ?? []).join(". "),
          sectionText,
          conceptText,
          questionText,
        ].filter(Boolean).join(" "),
      });
    }

    return entries;
  }, []);

  // ── Search state ────────────────────────────────────────────────────────
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [quizEntry, setQuizEntry] = useState<SearchEntry | null>(null);
  const [quizOpen, setQuizOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => localStorage.getItem("ar_night_mode") === "1");
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [wallchartSrc, setWallchartSrc] = useState<string | null>(null);
  const [wallchartLabel, setWallchartLabel] = useState<string>("");

  function toggleDark() {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      localStorage.setItem("ar_night_mode", "1");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.removeItem("ar_night_mode");
      document.documentElement.classList.remove("dark");
    }
  }
  const searchRef = useRef<HTMLDivElement>(null);

  const searchResults = useMemo<Array<SearchEntry & { snippet?: string }>>(() => {
    const q = searchQuery.trim().toLowerCase();
    if (q.length < 2) return [];
    const words = q.split(/\s+/);

    function extractSnippet(text: string, query: string): string | undefined {
      const lc = text.toLowerCase();
      const firstWord = query.split(/\s+/)[0];
      const idx = lc.indexOf(firstWord);
      if (idx === -1) return undefined;
      const start = Math.max(0, idx - 35);
      const end = Math.min(text.length, idx + query.length + 90);
      return (start > 0 ? "…" : "") + text.slice(start, end).replace(/\s+/g, " ").trim() + (end < text.length ? "…" : "");
    }

    const scored = searchIndex
      .filter((e) => {
        const haystack = `${e.title} ${e.subtitle} ${e.aiContext}`.toLowerCase();
        return words.every((w) => haystack.includes(w));
      })
      .map((e) => {
        const title = e.title.toLowerCase();
        const subtitle = e.subtitle.toLowerCase();
        let score = 0;
        if (title === q) score += 100;
        else if (title.startsWith(q)) score += 50;
        else if (title.includes(q)) score += 20;
        else if (subtitle.includes(q)) score += 10;
        // Content-only match - lower priority but still shown
        const inContent = !title.includes(q) && !subtitle.includes(q);
        const snippet = inContent ? extractSnippet(e.aiContext, q) : undefined;
        return { entry: { ...e, snippet }, score };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, 12)
      .map((x) => x.entry);
    return scored;
  }, [searchQuery, searchIndex]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const dailyGoal = user?.dailyGoal || 5;
  const todayQuestions = todayActivity?.questionsAnswered || 0;
  const goalProgress = Math.min((todayQuestions / dailyGoal) * 100, 100);

  const [showAllModules, setShowAllModules] = useState(false);

  const priorityLevelId = useMemo(() => {
    if (!diagnosticResults || diagnosticResults.length === 0) return null;
    if (isAsc || isDnv) return null;
    const ss = (diagnosticResults[0] as any).sectionScores as Record<string, { correct: number; total: number }> | undefined;
    if (!ss) return null;
    const levelIds = new Set(assignedFilteredLevels.map(l => l.id));
    let worstId: string | null = null;
    let worstRatio = Infinity;
    for (const [id, stats] of Object.entries(ss)) {
      if (!stats || stats.total === 0) continue;
      if (!levelIds.has(id)) continue;
      const ratio = stats.correct / stats.total;
      if (ratio < worstRatio) { worstRatio = ratio; worstId = id; }
    }
    return worstId;
  }, [diagnosticResults, assignedFilteredLevels, isAsc, isDnv]);

  const priorityLevel = priorityLevelId
    ? (assignedFilteredLevels.find(l => l.id === priorityLevelId) ?? null)
    : null;

  const prioritySectionScore = useMemo(() => {
    if (!priorityLevelId || !diagnosticResults || diagnosticResults.length === 0) return null;
    const ss = (diagnosticResults[0] as any).sectionScores as Record<string, { correct: number; total: number }> | undefined;
    return ss?.[priorityLevelId] ?? null;
  }, [priorityLevelId, diagnosticResults]);

  const visibleLevels = showAllModules
    ? assignedFilteredLevels
    : assignedFilteredLevels.slice(0, 4);

  if (isLoading) {
    return (
      <div className="min-h-screen p-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 pt-4">
          <div className="flex flex-col gap-4">
            <Skeleton className="h-16 rounded-2xl" />
            {[1, 2, 3, 4].map((i) => <Skeleton key={i} className="h-28 rounded-2xl" />)}
          </div>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3].map((i) => <Skeleton key={i} className="h-24 rounded-2xl" />)}
            </div>
            <Skeleton className="h-24 rounded-2xl" />
            <Skeleton className="h-12 rounded-2xl" />
            <Skeleton className="h-14 rounded-2xl" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-28">
      {/* Wallchart lightbox */}
      <AnimatePresence>
        {wallchartSrc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex flex-col"
            onClick={() => setWallchartSrc(null)}
          >
            <div className="flex items-center justify-between px-4 py-3 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
              <span className="text-white font-bold text-sm">{wallchartLabel}</span>
              <button
                className="text-white hover:bg-white/20 rounded-lg p-2"
                onClick={() => setWallchartSrc(null)}
                data-testid="button-close-wallchart"
              >
                <XIcon size={22} />
              </button>
            </div>
            <div className="flex-1 overflow-auto p-2 flex items-start justify-center" onClick={(e) => e.stopPropagation()}>
              <img src={wallchartSrc} alt={wallchartLabel} className="max-w-full rounded-lg shadow-2xl" data-testid="img-wallchart-view" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Sub-header */}
      <div className="sticky top-[58px] z-40 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-2">
          {/* Left: avatar + name */}
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center flex-shrink-0 bg-primary/10 border border-border">
              <span className="font-black text-sm text-primary">
                {user?.username?.charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="min-w-0">
              <h1 className="font-bold text-sm sm:text-base text-foreground truncate max-w-[120px] sm:max-w-none" data-testid="text-username">
                {user?.username}
              </h1>
              <p className="text-xs text-muted-foreground hidden sm:block">Welcome back!</p>
            </div>
          </div>

          {/* Right: actions */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <PathwayMenu triggerVariant="outline" triggerSize="sm" />

            {/* Educator console - always visible, text collapses on mobile */}
            {user?.leadershipRole === "educator" && !user?.isAdmin && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLocation("/educator")}
                data-testid="button-educator-console"
                className="gap-1.5 font-semibold text-violet-600 border-violet-400/40 hover:bg-violet-500/5"
              >
                <GraduationCap size={15} />
                <span className="hidden sm:inline">Educator</span>
              </Button>
            )}

            {/* Leadership console - always visible, text collapses on mobile */}
            {(user?.isAdmin || ["director","ceo","admin","super_admin"].includes(user?.leadershipRole ?? "")) && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLocation("/leadership")}
                data-testid="button-leadership-console"
                className="gap-1.5 font-semibold text-primary border-primary/40 hover:bg-primary/5"
              >
                <BarChart3 size={15} />
                <span className="hidden sm:inline">Leadership</span>
              </Button>
            )}

            {/* Desktop-only secondary actions */}
            <Button variant="outline" size="sm" onClick={() => setLocation("/leaderboard")} data-testid="button-leaderboard" className="hidden sm:flex">
              <Trophy size={16} />
            </Button>
            <a
              href={
                (user?.isAdmin || ["director","ceo","admin","super_admin"].includes(user?.leadershipRole ?? "") || user?.leadershipRole === "educator")
                  ? "/tutorial-leadership.html"
                  : "/tutorial-employee.html"
              }
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-tutorial-help"
              className="hidden sm:block"
            >
              <Button variant="outline" size="sm" title="How-to guide">
                <HelpCircle size={16} />
              </Button>
            </a>
            <Button variant="outline" size="sm" onClick={() => setLocation("/profile")} data-testid="button-profile" className="hidden sm:flex">
              <Settings size={16} />
            </Button>
            {/* Dark mode toggle - always visible */}
            <Button variant="outline" size="sm" onClick={toggleDark} data-testid="button-toggle-dark" title={isDark ? "Switch to light mode" : "Switch to night mode"}>
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </Button>

            <Button variant="outline" size="sm" onClick={async () => { await logout(); setLocation("/auth"); }} data-testid="button-logout" className="hidden sm:flex">
              <LogOut size={16} />
            </Button>

            {/* Mobile overflow menu - replaces Trophy / Help / Settings / Logout */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="sm:hidden" data-testid="button-mobile-menu">
                  <MoreHorizontal size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={() => setLocation("/leaderboard")} data-testid="menu-item-leaderboard">
                  <Trophy size={14} className="mr-2 text-muted-foreground" /> Leaderboard
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => { setFeedbackOpen(true); setFeedbackSent(false); setFeedbackMessage(""); }} data-testid="menu-item-feedback">
                  <MessageSquare size={14} className="mr-2 text-muted-foreground" /> Send Feedback
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    href={
                      (user?.isAdmin || ["director","ceo","admin","super_admin"].includes(user?.leadershipRole ?? "") || user?.leadershipRole === "educator")
                        ? "/tutorial-leadership.html"
                        : "/tutorial-employee.html"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="menu-item-tutorial"
                    className="flex items-center"
                  >
                    <HelpCircle size={14} className="mr-2 text-muted-foreground" /> How-to Guide
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLocation("/profile")} data-testid="menu-item-profile">
                  <Settings size={14} className="mr-2 text-muted-foreground" /> Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={async () => { await logout(); setLocation("/auth"); }}
                  data-testid="menu-item-logout"
                  className="text-destructive focus:text-destructive"
                >
                  <LogOut size={14} className="mr-2" /> Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Compliance reminder panel - only visible to clinical staff with active alerts */}
      <ComplianceReminderBanner />

      {/* Two-column layout */}
      <div className="max-w-6xl mx-auto px-6 pt-6 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">

          {/* ── LEFT: Training content ── */}
          <div className="flex flex-col gap-6">

            {/* ── Search Bar ── */}
            <div ref={searchRef} className="relative" data-testid="search-container">
              <div className="relative flex items-center">
                <Search size={17} className="absolute left-3.5 text-primary pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search any topic, standard, or concept…"
                  value={searchQuery}
                  onChange={(e) => { setSearchQuery(e.target.value); setSearchOpen(true); }}
                  onFocus={() => setSearchOpen(true)}
                  className="w-full pl-10 pr-10 py-3 rounded-2xl border-2 border-primary/40 bg-background text-sm font-semibold placeholder:text-foreground/75 placeholder:font-bold focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all shadow-sm"
                  data-testid="input-search"
                />
                {searchQuery && (
                  <button
                    onClick={() => { setSearchQuery(""); setSearchOpen(false); }}
                    className="absolute right-3.5 text-muted-foreground hover:text-foreground transition-colors"
                    data-testid="button-search-clear"
                  >
                    <XIcon size={15} />
                  </button>
                )}
              </div>

              <AnimatePresence>
                {searchOpen && searchResults.length > 0 && (
                  <motion.div
                    key="search-dropdown"
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.12 }}
                    className="absolute top-full mt-2 left-0 right-0 z-50 rounded-2xl border border-border bg-card shadow-xl overflow-hidden"
                    data-testid="search-results"
                  >
                    <div className="flex flex-col divide-y divide-border/60">
                      {searchResults.map((entry) => (
                        <div
                          key={entry.id}
                          className="flex items-center gap-2 px-4 py-3 hover:bg-muted/50 transition-colors"
                        >
                          <button
                            className="flex-1 min-w-0 text-left cursor-pointer"
                            onClick={() => {
                              setSearchOpen(false);
                              setSearchQuery("");
                              setLocation(entry.module === "asc" ? `/handbook/${entry.levelId}` : `/study/${entry.levelId}`);
                            }}
                            data-testid={`button-explore-${entry.id}`}
                          >
                            <div className="flex items-center gap-1.5 flex-wrap mb-0.5">
                              <span className={`flex-shrink-0 px-1.5 py-0.5 rounded text-xs font-black uppercase tracking-wider ${
                                entry.module === "asc"
                                  ? "bg-teal-500/15 text-teal-700 dark:text-teal-400"
                                  : "bg-primary/10 text-primary"
                              }`}>
                                {entry.module === "asc" ? "ASC" : "Hospital"}
                              </span>
                              <p className="text-sm font-bold truncate" data-testid={`search-result-title-${entry.id}`}>
                                {entry.title}
                              </p>
                            </div>
                            {(entry as any).snippet ? (
                              <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed mt-0.5 italic">
                                {(entry as any).snippet}
                              </p>
                            ) : (
                              <p className="text-xs text-muted-foreground truncate mt-0.5">{entry.subtitle}</p>
                            )}
                            <p className="text-[10px] text-primary/60 font-semibold mt-0.5 flex items-center gap-1">
                              <BookOpen size={9} />
                              Click to explore
                            </p>
                          </button>
                          <div className="flex flex-col gap-1.5 flex-shrink-0">
                            <button
                              onClick={() => {
                                setQuizEntry(entry);
                                setQuizOpen(true);
                                setSearchOpen(false);
                              }}
                              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-all active:scale-95"
                              data-testid={`button-quick-quiz-${entry.id}`}
                            >
                              <BrainCircuit size={12} />
                              Quick Quiz
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="px-4 py-2 bg-muted/30 border-t border-border/60">
                      <p className="text-xs text-muted-foreground font-semibold">
                        {searchResults.length} result{searchResults.length !== 1 ? "s" : ""} · Click a result to explore · Quick Quiz for AI questions
                      </p>
                    </div>
                  </motion.div>
                )}
                {searchOpen && searchQuery.trim().length >= 2 && searchResults.length === 0 && (
                  <motion.div
                    key="search-empty"
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="absolute top-full mt-2 left-0 right-0 z-50 rounded-2xl border border-border bg-card shadow-xl px-4 py-5 text-center"
                    data-testid="search-empty"
                  >
                    <p className="text-sm font-semibold text-muted-foreground">No matching content found</p>
                    <p className="text-xs text-muted-foreground/70 mt-1">Searches module titles, descriptions, study concepts, and chapter content</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Role card */}
            {!isAsc && !isDnv && user?.roleId && (() => {
              const dbRole = rolesList?.find((r) => r.id === user.roleId);
              const cfg = dbRole ? getRoleConfig(dbRole.slug) : undefined;
              const title = cfg?.title || dbRole?.name || assignedData?.role?.name || "Your role";
              const department = cfg?.department || assignedData?.role?.department || "";
              return (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl bg-card border border-card-border p-4 flex items-center gap-3"
                  data-testid="card-current-role"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Briefcase size={18} className="text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold leading-none mb-1">Your role</p>
                    <p className="font-bold text-sm truncate" data-testid="text-current-role-title">{title}</p>
                    {department && <p className="text-xs text-muted-foreground truncate">{department}</p>}
                  </div>
                  <Button variant="outline" size="sm" onClick={() => setLocation("/role-select")} data-testid="button-dashboard-change-role">
                    Change
                  </Button>
                </motion.div>
              );
            })()}

            {/* Daily goal strip — hospital only, compact row below role card */}
            {!isAsc && !isDnv && (
              <motion.div
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-muted/50 border border-border"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                data-testid="strip-daily-goal"
              >
                <Flame size={15} className={`flex-shrink-0 ${todayQuestions > 0 ? "text-orange-500" : "text-muted-foreground"}`} />
                <span className="text-xs font-bold text-muted-foreground flex-shrink-0">Today</span>
                <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-orange-400 to-primary"
                    initial={{ width: 0 }}
                    animate={{ width: `${goalProgress}%` }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                </div>
                <span className="text-xs font-bold text-foreground tabular-nums flex-shrink-0" data-testid="text-goal-strip-progress">
                  {todayQuestions}/{dailyGoal}
                </span>
                {goalProgress >= 100 && (
                  <span className="text-xs font-bold text-emerald-600 flex-shrink-0">Done!</span>
                )}
              </motion.div>
            )}

            {/* Hospital Up Next hero — pre-diagnostic state */}
            {userModule !== "asc" && !isDnv && !(diagnosticResults && diagnosticResults.length > 0) && (
              <motion.div
                className="w-full rounded-2xl border-2 p-5 bg-gradient-to-br from-teal-500/10 to-cyan-500/5 border-teal-500/30"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                data-testid="card-up-next-hero"
              >
                <p className="text-[10px] font-black uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-3" data-testid="label-up-next">Up Next for You</p>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-teal-500 to-cyan-600 shadow-lg">
                    <Stethoscope size={24} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-black text-lg leading-tight">Diagnostic Quiz</h3>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-teal-500/20 text-teal-700 dark:text-teal-300 uppercase tracking-wider border border-teal-500/30">Benchmark</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">25 questions · about 10 minutes · identifies your knowledge gaps before training begins</p>
                    <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 mt-1.5" data-testid="text-diagnostic-explainer">
                      After you finish, we will show you which chapters to focus on first.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setLocation("/diagnostic")}
                  data-testid="button-up-next-hero-cta"
                  className="mt-4 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white shadow-md transition-all active:scale-95"
                >
                  Begin Diagnostic Quiz <ChevronRight size={16} />
                </button>
              </motion.div>
            )}

            {/* DNV Diagnostic */}
            {isDnv && (
              <motion.div
                className="w-full rounded-2xl border-2 p-5 text-left bg-teal-500/5 border-teal-500/20"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                data-testid="card-dnv-pretest-main"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-teal-500 to-cyan-600 shadow-md">
                    <Stethoscope size={22} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-bold text-base leading-tight">Diagnostic Quiz</h3>
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-black bg-teal-500/15 text-teal-500 uppercase tracking-wider">Benchmark</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-0.5">25 questions across all 11 NIAHO chapters - establish your baseline</p>
                  </div>
                  <button
                    onClick={() => setLocation("/dnv-pretest")}
                    data-testid="button-dnv-pretest-main"
                    className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white shadow-md transition-all active:scale-95"
                  >
                    Start <ChevronRight size={15} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* ASC Diagnostic - main column, mirrors hospital diagnostic placement */}
            {userModule === "asc" && (
              <motion.div
                className="w-full rounded-2xl border-2 p-5 text-left bg-teal-500/5 border-teal-500/20"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                data-testid="card-asc-pretest-main"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-teal-500 to-cyan-600 shadow-md">
                    <Stethoscope size={22} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-bold text-base leading-tight">Diagnostic Quiz</h3>
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-black bg-teal-500/15 text-teal-500 uppercase tracking-wider">Benchmark</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-0.5">25 questions across 6 AAAHC chapters - establish your baseline</p>
                  </div>
                  <button
                    onClick={() => setLocation("/asc-pretest")}
                    data-testid="button-asc-pretest-main"
                    className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white shadow-md transition-all active:scale-95"
                  >
                    Start <ChevronRight size={15} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Hospital Up Next hero — post-diagnostic state */}
            {userModule !== "asc" && !isDnv && diagnosticResults && diagnosticResults.length > 0 && (
              <motion.div
                className={`w-full rounded-2xl border-2 p-5 ${priorityLevel ? "bg-gradient-to-br from-emerald-500/10 to-teal-500/5 border-emerald-500/30" : "bg-teal-500/5 border-teal-500/20"}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                data-testid="card-up-next-hero-post-diag"
              >
                <p className="text-[10px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3" data-testid="label-up-next-post">Up Next for You</p>

                {priorityLevel ? (
                  <>
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg">
                        <BookOpen size={22} className="text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-black text-lg leading-tight" data-testid="text-priority-level-title">{priorityLevel.name}</h3>
                        {prioritySectionScore && (
                          <p className="text-sm text-muted-foreground mt-0.5">
                            Diagnostic score: {prioritySectionScore.correct}/{prioritySectionScore.total} · lowest of your assigned chapters
                          </p>
                        )}
                        {(priorityLevel.chapterSummary?.commonRiskPoints?.length ?? 0) > 0 && (
                          <span className="inline-flex items-center gap-1 mt-1.5 px-2 py-0.5 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 text-[11px] font-bold border border-red-500/20">
                            <ShieldAlert size={11} />
                            {priorityLevel.chapterSummary!.commonRiskPoints!.length} survey risk points
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between gap-3">
                      <button
                        onClick={() => setLocation(`/play/${priorityLevel.id}`)}
                        data-testid="button-up-next-hero-play"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-md transition-all active:scale-95"
                      >
                        Start Practice Quiz <ChevronRight size={16} />
                      </button>
                      <button
                        onClick={() => setLocation("/diagnostic")}
                        data-testid="button-retake-diagnostic-small"
                        className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2 flex-shrink-0"
                      >
                        Retake diagnostic
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-teal-500 to-cyan-600 shadow-md">
                      <Stethoscope size={20} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-base leading-tight">Looking strong across all chapters</h3>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        Last score: {diagnosticResults[0].score}/{diagnosticResults[0].totalQuestions} · keep building on your strengths. Choose any chapter below.
                      </p>
                    </div>
                    <button
                      onClick={() => setLocation("/diagnostic")}
                      data-testid="button-diagnostic-retake"
                      className="flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold text-xs bg-teal-500/15 text-teal-700 dark:text-teal-300 hover:bg-teal-500/25 transition-all"
                    >
                      Retake
                    </button>
                  </div>
                )}
              </motion.div>
            )}

            {/* Pathway section */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-black flex items-center gap-2" data-testid="text-pathway-header">
                  <CalendarIcon size={20} className="text-primary" />
                  {PATHWAY_HEADERS[userModule]}
                </h2>
                <span className="text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-full bg-primary/10 text-primary" data-testid="badge-pathway">
                  {MODULE_LABELS[userModule]}
                </span>
              </div>
              <div className="flex items-center gap-2 mb-4 px-3 py-3 rounded-xl bg-primary/5 border border-primary/10" data-testid="text-shuffle-note">
                <Shuffle size={16} className="text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  You get <span className="font-semibold text-foreground">fresh questions</span> every session, drawn from a larger pool each time you play.
                </p>
              </div>
              {!isAsc && !isDnv && assignedData?.role && (
                <div className="flex flex-wrap items-center gap-3 mb-4 px-4 py-3 rounded-xl bg-muted border border-border" data-testid="text-role-banner">
                  <Briefcase size={16} className="text-muted-foreground flex-shrink-0" />
                  <p className="text-sm flex-1 min-w-[180px] text-foreground">
                    Showing <span className="font-semibold">{assignedFilteredLevels.length}</span> level{assignedFilteredLevels.length === 1 ? "" : "s"} for your role:{" "}
                    <span className="font-semibold">{assignedData.role.name}</span>
                  </p>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {assignedData.role.scope === "dual" && (
                      <Button variant="ghost" size="sm" data-testid="button-toggle-view-scope"
                        onClick={() => viewScopeMutation.mutate(user?.viewScope === "all" ? "department" : "all")}
                        disabled={viewScopeMutation.isPending}
                      >
                        {user?.viewScope === "all" ? "Show only my role" : "Show all chapters"}
                      </Button>
                    )}
                    <Button variant="outline" size="sm" data-testid="button-banner-change-role" onClick={() => setLocation("/role-select")}>
                      Change role
                    </Button>
                  </div>
                </div>
              )}

              {isAsc ? (
                <div className="flex flex-col gap-6">
                  {ascChapterGroups.map(({ category, chapters }) => (
                    <div key={category} className="flex flex-col gap-3" data-testid={`group-dashboard-${category.toLowerCase().replace(/\s+/g, "-")}`}>
                      <div className="flex items-baseline justify-between px-1">
                        <h3 className="font-black text-sm uppercase tracking-wide text-primary" data-testid={`heading-dashboard-${category.toLowerCase().replace(/\s+/g, "-")}`}>
                          {category}
                        </h3>
                        <span className="text-xs text-muted-foreground">
                          {category === "Universal Standards" ? "Apply to every accredited ASC" : "Apply when the service is provided"}
                        </span>
                      </div>
                      {category === "Selective Standards" && (
                        <p className="px-1 text-xs text-muted-foreground/80" data-testid="text-asc-numbering-note">
                          All ASC-required chapters included. Apply when the listed service is provided at your facility.
                        </p>
                      )}
                      <div className="flex flex-col gap-3">
                        {chapters.map((chapter) => (
                          <AscChapterCard
                            key={chapter.levelId}
                            chapter={chapter}
                            progressMap={progressMap}
                            sessionsMap={sessionsMap}
                            onRead={() => setLocation(`/handbook/${chapter.levelId}`)}
                            onPlay={(quizId) => setLocation(`/play/${quizId}`)}
                            onStudy={(quizId) => setLocation(`/study/${quizId}`)}
                          />
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* Visual Wall Charts */}
                  <div className="flex flex-col gap-3" data-testid="group-dashboard-wall-charts">
                    <div className="flex items-baseline justify-between px-1">
                      <h3 className="font-black text-sm uppercase tracking-wide text-primary">Wall Charts</h3>
                      <span className="text-xs text-muted-foreground">Tap to enlarge</span>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {WALLCHARTS.map((wc) => (
                        <button
                          key={wc.id}
                          onClick={() => { setWallchartSrc(wc.src); setWallchartLabel(wc.label); }}
                          data-testid={`button-wallchart-${wc.id}`}
                          className="rounded-xl overflow-hidden border border-border bg-muted/30 flex flex-col text-left hover:border-primary/40 hover:shadow-md transition-all active:scale-95"
                        >
                          <img src={wc.src} alt={wc.label} className="w-full aspect-[3/4] object-cover object-top" />
                          <div className="px-2 py-2">
                            <p className="text-[11px] font-bold leading-tight">{wc.label}</p>
                            <p className="text-[10px] text-muted-foreground mt-0.5 leading-tight">{wc.subtitle}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : isDnv ? (
                <div className="flex flex-col gap-3">
                  {moduleLevels.length === 0 ? (
                    <div className="rounded-2xl border-2 border-dashed border-border bg-muted/30 p-6 text-center" data-testid="empty-state-dnv-domains">
                      <p className="font-semibold text-base mb-1">DNV content is in development</p>
                      <p className="text-sm text-muted-foreground">DNV NIAHO domains are set up, but training questions and study material aren't published yet. Check back soon.</p>
                    </div>
                  ) : (
                    moduleLevels.map((level, index) => (
                      <LevelCard
                        key={level.id}
                        level={level}
                        progress={progressMap.get(level.id)}
                        savedSession={sessionsMap.get(level.id)}
                        isUnlocked={true}
                        index={index}
                        onPlay={() => setLocation(`/play/${level.id}`)}
                        onStudy={() => setLocation(`/study/${level.id}`)}
                      />
                    ))
                  )}
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  {assignedFilteredLevels.length === 0 ? (
                    <div className="rounded-2xl border-2 border-dashed border-border bg-muted/30 p-6 text-center" data-testid="empty-state-pathway-domains">
                      <p className="font-semibold text-base mb-1">{MODULE_LABELS[userModule]} content is in development</p>
                      <p className="text-sm text-muted-foreground">
                        Domains for the {MODULE_LABELS[userModule]} pathway are set up, but training questions and study material are not published yet. Check back soon.
                      </p>
                    </div>
                  ) : (
                    <>
                      {visibleLevels.map((level, index) => {
                        const isPriority = level.id === priorityLevelId;
                        const hasProgress = (progressMap.get(level.id)?.totalQuestions ?? 0) > 0;
                        const isDimmed = !!priorityLevelId && !isPriority && !hasProgress;
                        return (
                          <div
                            key={level.id}
                            className={`relative transition-opacity duration-200 ${isDimmed ? "opacity-60" : ""} ${isPriority ? "ring-2 ring-emerald-500/60 rounded-[18px]" : ""}`}
                            data-testid={isPriority ? "card-priority-module" : undefined}
                          >
                            {isPriority && (
                              <span className="absolute -top-2 left-3 z-10 px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[10px] font-black uppercase tracking-wider shadow-sm">
                                Priority
                              </span>
                            )}
                            <LevelCard
                              level={level}
                              progress={progressMap.get(level.id)}
                              savedSession={sessionsMap.get(level.id)}
                              isUnlocked={isLevelUnlocked(index)}
                              index={index}
                              onPlay={() => setLocation(`/play/${level.id}`)}
                              onStudy={() => setLocation(`/study/${level.id}`)}
                            />
                          </div>
                        );
                      })}
                      {!showAllModules && assignedFilteredLevels.length > 4 && (
                        <button
                          onClick={() => setShowAllModules(true)}
                          data-testid="button-show-more-modules"
                          className="w-full py-3 rounded-2xl border-2 border-dashed border-border text-sm font-bold text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors flex items-center justify-center gap-2"
                        >
                          <ChevronDown size={16} />
                          Show {assignedFilteredLevels.length - 4} more module{assignedFilteredLevels.length - 4 === 1 ? "" : "s"}
                        </button>
                      )}
                      {showAllModules && assignedFilteredLevels.length > 4 && (
                        <button
                          onClick={() => setShowAllModules(false)}
                          data-testid="button-show-fewer-modules"
                          className="w-full py-3 rounded-2xl border-2 border-dashed border-border text-sm font-bold text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors flex items-center justify-center gap-2"
                        >
                          <ChevronUp size={16} />
                          Show fewer modules
                        </button>
                      )}
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Final Assessment - hospital only */}
            {masteryEligibility?.eligible && userModule !== "asc" && (
              <motion.div
                className="w-full rounded-2xl border-2 p-5 text-left bg-primary/5 border-primary/30"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                data-testid="card-mastery-cta"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-primary to-indigo-600 shadow-md">
                    <Crown size={28} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-bold text-lg leading-tight">Final Assessment</h3>
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-black bg-primary/10 text-primary uppercase tracking-wider">Unlocked</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1 leading-snug">
                      25 advanced questions to see how much you have learned. Compare your results to your Diagnostic score.
                    </p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={() => setLocation("/mastery")}
                    data-testid="button-mastery-cta"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-primary to-indigo-600 hover:from-primary/90 hover:to-indigo-700 text-white shadow-md transition-all active:scale-95"
                  >
                    Take Assessment <ChevronRight size={16} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* ASC Final Assessment */}
            {userModule === "asc" && (
              <motion.div
                className="w-full rounded-2xl border-2 p-4 bg-primary/5 border-primary/20"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-primary to-indigo-600 shadow-md">
                    <Trophy size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-lg leading-tight">Final Assessment</h3>
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-black bg-primary/10 text-primary uppercase tracking-wider">Check growth</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1 leading-snug">25 fresh questions to compare against your Diagnostic score</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={() => setLocation("/asc-posttest")}
                    data-testid="button-asc-posttest-cta"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-primary to-indigo-600 hover:from-primary/90 hover:to-indigo-700 text-white shadow-md transition-all active:scale-95"
                  >
                    Take Assessment <ChevronRight size={16} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* DNV Final Assessment */}
            {isDnv && (
              <motion.div
                className="w-full rounded-2xl border-2 p-4 bg-primary/5 border-primary/20"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-primary to-indigo-600 shadow-md">
                    <Trophy size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-lg leading-tight">Final Assessment</h3>
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-black bg-primary/10 text-primary uppercase tracking-wider">Check growth</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1 leading-snug">25 fresh NIAHO questions to compare against your Diagnostic score</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={() => setLocation("/dnv-posttest")}
                    data-testid="button-dnv-posttest-cta"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-primary to-indigo-600 hover:from-primary/90 hover:to-indigo-700 text-white shadow-md transition-all active:scale-95"
                  >
                    Take Assessment <ChevronRight size={16} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Wall Chart Tracker — ASC only */}
            {isAsc && (
              <motion.button
                className="rounded-2xl border-2 p-4 flex items-center gap-3 transition-colors text-left bg-primary/5 border-primary/20 hover:bg-primary/10 hover:border-primary/30"
                onClick={() => setLocation("/asc-wall-chart")}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileTap={{ scale: 0.98 }}
                data-testid="button-wall-chart"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-primary/10">
                  <ClipboardCheck size={20} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-sm">Wall Chart Tracker</h3>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-black bg-primary/10 text-primary uppercase tracking-wider border border-primary/20">Required Postings</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">AAAHC required postings · verify status and due dates</p>
                </div>
                <ChevronRight size={16} className="text-muted-foreground flex-shrink-0" />
              </motion.button>
            )}

            {/* Handbook — styled as a reference tool, not a training module */}
            <motion.button
              className="rounded-2xl border-2 border-dashed p-4 flex items-center gap-3 transition-colors text-left bg-muted/30 border-border hover:bg-muted/50 hover:border-border/80"
              onClick={() => setLocation("/handbook")}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              whileTap={{ scale: 0.98 }}
              data-testid="button-handbook"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-muted border border-border">
                <BookOpen size={20} className="text-muted-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-sm">Compliance Handbook</h3>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-black bg-muted border border-border text-muted-foreground uppercase tracking-wider">Reference</span>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">Complete standards reference · search any topic</p>
              </div>
              <ChevronRight size={16} className="text-muted-foreground flex-shrink-0" />
            </motion.button>


          </div>

          {/* ── RIGHT SIDEBAR ── */}
          <div className="flex flex-col gap-4">

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              <motion.div className="game-card p-4 flex flex-col items-center justify-center" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <StreakFlame streak={streak?.currentStreak || 0} size="sm" />
              </motion.div>
              <motion.div className="game-card p-4 flex flex-col items-center justify-center gap-1" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <div className="flex items-center gap-1">
                  <Zap size={16} className="text-chart-4" fill="currentColor" />
                  <span className="text-xl font-black" data-testid="text-total-xp">{displayXp}</span>
                </div>
                <span className="text-xs text-muted-foreground font-semibold">Total XP</span>
              </motion.div>
              <motion.div className="game-card p-4 flex flex-col items-center justify-center gap-1" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <div className="flex items-center gap-1">
                  <TrendingUp size={16} className="text-chart-3" />
                  <span className="text-xl font-black" data-testid="text-longest-streak">{streak?.longestStreak || 0}</span>
                </div>
                <span className="text-xs text-muted-foreground font-semibold">Best Streak</span>
              </motion.div>
            </div>

            {/* ── Due Flashcards Banner ── */}
            {dueData && dueData.count > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl border-2 p-4 bg-violet-500/8 border-violet-500/30"
                data-testid="card-due-flashcards"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-violet-500 to-purple-600 shadow-md">
                    <Brain size={18} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <h3 className="font-bold text-sm leading-tight">Flashcards Due</h3>
                      <span
                        className="px-1.5 py-0.5 rounded-full bg-violet-500/20 text-violet-600 dark:text-violet-300 text-xs font-black border border-violet-500/30"
                        data-testid="badge-due-count"
                      >
                        {dueData.count}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">Due for review today</p>
                  </div>
                  <button
                    onClick={() => setLocation("/flashcard-review")}
                    data-testid="button-review-due"
                    className="flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold text-xs bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white shadow-sm transition-all active:scale-95"
                  >
                    Review <ChevronRight size={12} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Daily Goal */}
            <motion.div className="rounded-2xl bg-card border border-card-border p-4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <Target size={16} className="text-primary" />
                  <h3 className="font-bold text-sm">Daily Goal</h3>
                </div>
                <span className="text-sm font-bold text-primary" data-testid="text-daily-progress">{todayQuestions}/{dailyGoal} questions</span>
              </div>
              <div className="relative h-3 rounded-full bg-muted overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 gradient-progress"
                  initial={{ width: 0 }}
                  animate={{ width: `${goalProgress}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
              {goalProgress >= 100 && (
                <p className="text-xs text-chart-1 font-bold mt-2">Goal complete! Keep going for bonus XP!</p>
              )}
            </motion.div>

            {/* Risk Self-Assessment Card */}
            <motion.button
              className="rounded-2xl border-2 p-4 flex items-center gap-3 transition-all text-left bg-orange-500/5 border-orange-500/20 hover:bg-orange-500/10 hover:border-orange-500/40"
              onClick={() => setLocation("/risk-assessment")}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              whileTap={{ scale: 0.98 }}
              data-testid="button-risk-assessment"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-orange-500/15">
                <ShieldAlert size={18} className="text-orange-500" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-sm">My Risk Assessment</h3>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-black bg-orange-500/15 text-orange-500 uppercase tracking-wider">AI</span>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">Identify your gaps · get a personalized plan</p>
              </div>
              <ChevronRight size={16} className="text-muted-foreground flex-shrink-0" />
            </motion.button>

            {/* Readiness Gaps Panel */}
            {(() => {
              const attempted = assignedFilteredLevels
                .map(level => ({ level, prog: progressMap.get(level.id) }))
                .filter(({ prog }) => prog && prog.totalQuestions > 0)
                .map(({ level, prog }) => ({
                  level,
                  pct: prog!.totalQuestions > 0 ? Math.round((prog!.bestScore / prog!.totalQuestions) * 100) : 0,
                }))
                .sort((a, b) => a.pct - b.pct);

              const weakest = attempted.filter(x => x.pct < 80).slice(0, 3);

              const diagWeak: string[] = [];
              if (diagnosticResults && diagnosticResults.length > 0 && (diagnosticResults[0] as any).sectionScores) {
                const ss = (diagnosticResults[0] as any).sectionScores as Record<string, { correct: number; total: number }>;
                Object.entries(ss)
                  .filter(([, s]) => s.total > 0 && s.correct / s.total < 0.6)
                  .sort((a, b) => (a[1].correct / a[1].total) - (b[1].correct / b[1].total))
                  .slice(0, 2)
                  .forEach(([id]) => diagWeak.push(id));
              }

              const SECTION_NAMES: Record<string, string> = {
                transport: "Transport of Instruments", environment: "Environment & Surfaces",
                segregation: "Clean vs. Dirty", sterile_storage: "Sterile Storage",
                instruments: "Instrument Integrity", facilities: "Facilities & Equipment",
                spd_decontam: "SPD & Decontamination", or_sterile_field: "OR & Sterile Technique",
                universal_protocol: "Surgical Safety & Consent", patient_care_docs: "Patient Care & Docs",
                eoc_safety: "EOC & Safety Compliance",
              };

              if (weakest.length === 0 && diagWeak.length === 0) return null;

              return (
                <motion.div
                  className="rounded-2xl bg-card border border-card-border p-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  data-testid="card-readiness-gaps"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <ShieldAlert size={15} className="text-orange-500" />
                    <h3 className="font-bold text-sm">Focus Areas</h3>
                  </div>

                  {weakest.length > 0 && (
                    <div className="space-y-2 mb-3">
                      {weakest.map(({ level, pct }) => (
                        <div key={level.id} className="flex items-center gap-2" data-testid={`row-gap-${level.id}`}>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold truncate">{level.name}</p>
                            <div className="flex items-center gap-1.5 mt-0.5">
                              <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
                                <div
                                  className={`h-full rounded-full ${pct >= 60 ? "bg-orange-500" : "bg-red-500"}`}
                                  style={{ width: `${pct}%` }}
                                />
                              </div>
                              <span className={`text-[10px] font-bold ${pct >= 60 ? "text-orange-500" : "text-red-500"}`}>{pct}%</span>
                            </div>
                          </div>
                          <button
                            onClick={() => setLocation(`/play/${level.id}`)}
                            className="flex-shrink-0 text-[10px] font-bold px-2 py-1 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                            data-testid={`button-gap-retry-${level.id}`}
                          >
                            Retry
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {diagWeak.length > 0 && (
                    <div className="border-t border-border pt-2 mt-2">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">Diagnostic gaps</p>
                      <div className="flex flex-wrap gap-1.5">
                        {diagWeak.map(id => (
                          <span key={id} className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-red-500/10 text-red-500 border border-red-500/20">
                            {SECTION_NAMES[id] || id}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })()}

            {/* XP Bar */}
            <XpBar currentXp={displayXp} />


            {/* Activity Calendar */}
            <div className="rounded-2xl bg-card border border-card-border p-4">
              <h3 className="font-bold text-sm mb-3 flex items-center gap-2">
                <CalendarIcon size={15} className="text-primary" />
                Activity Calendar
              </h3>
              <DailyCalendar activities={activities || []} dailyGoal={dailyGoal} />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-4 mb-6 text-xs text-muted-foreground" data-testid="text-disclaimer-footer">
        {PATHWAY_DISCLAIMERS[userModule]}{" "}
        <Link href="/terms" className="underline hover:text-primary">Terms & Privacy</Link>
        <p className="text-sm font-medium text-muted-foreground mt-1" data-testid="text-company-dashboard">Division of Innovans LLC</p>
      </div>

      {/* AI Topic Quiz Modal */}
      <TopicQuizModal
        entry={quizEntry}
        open={quizOpen}
        onClose={() => { setQuizOpen(false); setQuizEntry(null); }}
      />

      {/* Floating Feedback Button */}
      <button
        onClick={() => { setFeedbackOpen(true); setFeedbackSent(false); setFeedbackMessage(""); }}
        data-testid="button-open-feedback"
        className="fixed bottom-20 right-4 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all text-sm font-bold"
      >
        <MessageSquare size={16} />
        Feedback
      </button>

      {/* Feedback Modal */}
      {feedbackOpen && (
        <div
          className="fixed inset-0 z-[200] bg-black/50 flex items-end sm:items-center justify-center p-4"
          onClick={() => setFeedbackOpen(false)}
        >
          <div
            className="w-full max-w-lg bg-white dark:bg-card rounded-2xl border border-border shadow-2xl p-6 flex flex-col gap-4"
            onClick={e => e.stopPropagation()}
          >
            {feedbackSent ? (
              <div className="flex flex-col items-center gap-3 py-4 text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                  <Target size={28} className="text-emerald-600" />
                </div>
                <h2 className="text-lg font-black">Thank you!</h2>
                <p className="text-sm text-muted-foreground">Your feedback has been sent to the Accreditation Ready team. We read every message.</p>
                <Button className="mt-2 rounded-xl font-bold" onClick={() => setFeedbackOpen(false)} data-testid="button-close-feedback-sent">
                  Close
                </Button>
              </div>
            ) : (
              <>
                <div>
                  <h2 className="text-lg font-black">Send Feedback</h2>
                  <p className="text-sm text-muted-foreground mt-1">Questions, concerns, or suggestions - we want to hear it all.</p>
                </div>
                <textarea
                  className="w-full min-h-[140px] rounded-xl border border-border bg-background px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/40 placeholder:text-muted-foreground"
                  placeholder="Type your message here… no character limit."
                  value={feedbackMessage}
                  onChange={e => setFeedbackMessage(e.target.value)}
                  autoFocus
                  data-testid="textarea-feedback"
                />
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1 rounded-xl font-bold" onClick={() => setFeedbackOpen(false)} data-testid="button-cancel-feedback">
                    Cancel
                  </Button>
                  <Button
                    className="flex-1 rounded-xl font-bold"
                    disabled={feedbackMessage.trim().length === 0}
                    data-testid="button-submit-feedback"
                    onClick={async () => {
                      if (!feedbackMessage.trim()) return;
                      try {
                        await fetch("/api/feedback", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          credentials: "include",
                          body: JSON.stringify({ message: feedbackMessage.trim() }),
                        });
                        setFeedbackSent(true);
                      } catch {
                        // still show success to not confuse user
                        setFeedbackSent(true);
                      }
                    }}
                  >
                    Send Feedback
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
