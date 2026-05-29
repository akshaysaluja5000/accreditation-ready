import { useState, useEffect, useMemo } from "react";
import { useRoute, useLocation, useSearch } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, BookOpen, ChevronLeft, ChevronRight, Play,
  AlertTriangle, ListChecks, FileText, CheckCircle2, RotateCcw,
  Trophy, RefreshCw, Timer, Clock, X, HelpCircle, Trash2, Microscope,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { findLevelById } from "@shared/all-levels";
import type { StudyConcept } from "@shared/schema";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import type { FlashcardReview } from "@shared/schema";

// ── Types ────────────────────────────────────────────────────────────────────

type SRRating = "again" | "hard" | "good";

const SR_CONFIG: Record<SRRating, {
  label: string;
  interval: string;
  icon: typeof Timer;
  btn: string;
  dot: string;
  badge: string;
  requeue: number | null; // null = done for session; number = slots ahead to reinsert
}> = {
  again: {
    label: "Again",
    interval: "< 2 min",
    icon: Timer,
    btn: "bg-red-500 hover:bg-red-600 text-white border-0",
    dot: "#f87171",
    badge: "bg-red-500/15 text-red-400 border-red-500/25",
    requeue: 2,
  },
  hard: {
    label: "Hard",
    interval: "< 10 min",
    icon: Clock,
    btn: "bg-orange-500 hover:bg-orange-600 text-white border-0",
    dot: "#fb923c",
    badge: "bg-orange-500/15 text-orange-400 border-orange-500/25",
    requeue: 8,
  },
  good: {
    label: "Good",
    interval: "1 day",
    icon: CheckCircle2,
    btn: "bg-emerald-600 hover:bg-emerald-500 text-white border-0",
    dot: "#34d399",
    badge: "bg-emerald-500/15 text-emerald-400 border-emerald-500/25",
    requeue: null,
  },
};

// ── Category config ───────────────────────────────────────────────────────────

const CATEGORY_CONFIG: Record<
  NonNullable<StudyConcept["category"]>,
  { label: string; bg: string; text: string; border: string }
> = {
  rule:       { label: "Rule",           bg: "bg-blue-500/15",    text: "text-blue-400",    border: "border-blue-500/25" },
  definition: { label: "Definition",     bg: "bg-indigo-500/15",  text: "text-indigo-400",  border: "border-indigo-500/25" },
  scenario:   { label: "Scenario",       bg: "bg-orange-500/15",   text: "text-orange-500",   border: "border-orange-500/25" },
  mistake:    { label: "Common Mistake", bg: "bg-red-500/15",     text: "text-red-400",     border: "border-red-500/25" },
  number:     { label: "Key Number",     bg: "bg-emerald-500/15", text: "text-emerald-400", border: "border-emerald-500/25" },
  tip:        { label: "Surveyor Tip",   bg: "bg-violet-500/15",  text: "text-violet-400",  border: "border-violet-500/25" },
};

const FLIP_VARIANTS = {
  enterFront: { opacity: 0, rotateY: -12, scale: 0.97 },
  center:     { opacity: 1, rotateY: 0,   scale: 1 },
  exitFront:  { opacity: 0, rotateY: 12,  scale: 0.97 },
};

function getTopicLabel(title: string): string {
  const dashIdx = title.indexOf(" - ");
  if (dashIdx !== -1) return title.slice(dashIdx + 3);
  return title;
}

function getCodeLabel(title: string): string | null {
  const dashIdx = title.indexOf(" - ");
  if (dashIdx !== -1) return title.slice(0, dashIdx);
  return null;
}

const CATEGORY_PROMPTS: Record<string, string> = {
  rule:       "What does this standard require?",
  definition: "How is this term defined?",
  scenario:   "What applies in this situation?",
  mistake:    "What's the common mistake to avoid?",
  number:     "What's the key number or threshold?",
  tip:        "What would a surveyor check here?",
};

function deriveQuestion(topic: string): string {
  const label = getTopicLabel(topic);
  const t = topic.toLowerCase();
  if (t.includes("notif") || t.includes("within 15"))
    return `Which events trigger the "${label}" requirement, and within how many days must notification be submitted?`;
  if (t.includes("public representation") || t.includes("representation of accreditation"))
    return `What restrictions govern how an organization may publicly represent its "${label}" status?`;
  if (t.includes("fiscal") || t.includes("financial control"))
    return `What must be documented and maintained to satisfy "${label}"?`;
  if (t.includes("orientation") || t.includes("personnel polic"))
    return `What must the organization's "${label}" address and document?`;
  if (t.includes("professional development") || t.includes("personnel sufficiency"))
    return `What must be maintained and documented to satisfy "${label}"?`;
  if (t.includes("pre-op") || t.includes("pre-operative") || t.includes("pre-procedural"))
    return `What assessments and documentation are required for "${label}"?`;
  if (t.includes("patient identification") || t.includes("site marking"))
    return `What processes must be in place for "${label}"?`;
  if (t.includes("time-out") || t.includes("timeout"))
    return `During the "${label}", what must be verified and who must be present?`;
  if (t.includes("anesthesia monitor") || t.includes("anesthesia management"))
    return `What monitoring and documentation are required during "${label}"?`;
  if (t.includes("post-anesthesia") || t.includes("recovery") || t.includes("discharge criteria"))
    return `What criteria must be met for "${label}" before the patient may leave?`;
  if (t.includes("therapeutic environment") || t.includes("behavioral health"))
    return `What requirements apply specifically to "${label}"?`;
  if (t.includes("individualized treatment") || t.includes("treatment plan"))
    return `What must a "${label}" address and document?`;
  if (t.includes("staff qualif") || (t.includes("qualified") && t.includes("personnel")))
    return `What qualifications must staff hold, and how must "${label}" be verified?`;
  if (t.includes("continuity") || t.includes("discharge planning"))
    return `What must be documented to ensure "${label}"?`;
  if (t.includes("clinical record") && (t.includes("requirement") || t.includes("individual") || t.includes("element")))
    return `What specific elements must appear in every patient's clinical record under "${label}"?`;
  if (t.includes("records system") || (t.includes("collection") && t.includes("record")))
    return `What are the requirements for "${label}"?`;
  if (t.includes("written polic") && t.includes("record"))
    return `What written policies for "${label}" must the organization maintain?`;
  if (t.includes("confidentiality") || (t.includes("privacy") && t.includes("record")))
    return `What safeguards must protect "${label}"?`;
  if (t.includes("allergy") || t.includes("sensitivity"))
    return `How must "${label}" be documented in the clinical record?`;
  if (t.includes("informed consent") && (t.includes("document") || t.includes("incorporat")))
    return `How must "${label}" be documented?`;
  if (t.includes("informed consent"))
    return `What elements must be present for "${label}" to be legally valid?`;
  if (t.includes("governing body") && t.includes("credentialing"))
    return `What accountability does the governing body hold for "${label}"?`;
  if (t.includes("credentialing") || t.includes("privileging"))
    return `What must a compliant "${label}" process verify and document?`;
  if (t.includes("initial application") || t.includes("evidence of competence"))
    return `What must an initial "${label}" demonstrate and verify before privileges are granted?`;
  if (t.includes("attestation"))
    return `What "${label}" are required as part of a valid credentialing application?`;
  if (t.includes("source verification") || t.includes("npdb"))
    return `What "${label}" must be completed before granting privileges?`;
  if (t.includes("reappointment"))
    return `How frequently must "${label}" occur, and what must the process include?`;
  if (t.includes("peer review") && t.includes("who reviews"))
    return `Who must conduct "${label}", and why does it matter for patient safety?`;
  if (t.includes("peer review"))
    return `What does a compliant "${label}" process require, and who must participate?`;
  if (t.includes("ongoing monitoring") && (t.includes("credential") || t.includes("date-sensitive")))
    return `What date-sensitive information must be tracked for "${label}"?`;
  if (t.includes("medical emergency") || t.includes("unplanned transfer"))
    return `What must written procedures for "${label}" address?`;
  if (t.includes("bls") || t.includes("basic life support"))
    return `Who must hold current "${label}" certification, and what equipment training is required?`;
  if (t.includes("disaster preparedness") || t.includes("emergency and disaster") || (t.includes("emergency") && t.includes("comprehensive")))
    return `What must a comprehensive "${label}" plan include?`;
  if (t.includes("drill") || t.includes("quarterly") || t.includes("scenario-based"))
    return `How frequently must "${label}" be conducted, and what must each evaluation document?`;
  if (t.includes("emergency equipment") && (t.includes("maintained") || t.includes("accessible")))
    return `What does it mean for "${label}" to be "maintained" and "readily accessible"?`;
  if (t.includes("building code") || t.includes("life safety"))
    return `What must be maintained and documented to demonstrate "${label}" compliance?`;
  if (t.includes("patient comfort") || (t.includes("physical environment") && !t.includes("surgical")))
    return `What conditions must the facility maintain for "${label}"?`;
  if (t.includes("clean") || t.includes("visible hazard"))
    return `What "${label}" conditions would a surveyor expect to observe?`;
  if (t.includes("fire protection") || t.includes("emergency exiting") || t.includes("exit sign"))
    return `What must be maintained for "${label}"?`;
  if (t.includes("equipment maintenance") || t.includes("calibration"))
    return `What records must be current for "${label}"?`;
  if (t.includes("alternate power") || t.includes("backup power") || t.includes("generator"))
    return `When is "${label}" required, and what documentation proves the system is adequate?`;
  if (t.includes("scope of services"))
    return `What must the governing body formally define in its approved "${label}" document?`;
  if (t.includes("contract") || t.includes("arrangement oversight"))
    return `What governing body oversight is required for "${label}"?`;
  if (t.includes("meeting frequency") || t.includes("annual review"))
    return `How often must the governing body meet, and what does "${label}" require?`;
  if (t.includes("oversight of anesthesia") || t.includes("oversight of surgery") || t.includes("anesthesia and surgery"))
    return `What governing body approval is required for "${label}"?`;
  if (t.includes("strategic direction") || t.includes("operational accountability"))
    return `What responsibilities must the governing body fulfill for "${label}"?`;
  if (t.includes("written ipc") || t.includes("ipc program"))
    return `What elements must the "${label}" include?`;
  if (t.includes("hand hygiene") || t.includes("safe injection"))
    return `What surveillance must be conducted for "${label}"?`;
  if (t.includes("sterilization") || t.includes("three-indicator"))
    return `What three types of indicators are required for "${label}", and what does each confirm?`;
  if (t.includes("sharps"))
    return `What must a compliant "${label}" include and actively document?`;
  if (t.includes("surgical environment") || t.includes("surgical safeguard"))
    return `What environmental safeguards must be maintained for "${label}"?`;
  if (t.includes("clia") || t.includes("laboratory license"))
    return `What "${label}" must the organization maintain and keep current?`;
  if (t.includes("laboratory personnel") || (t.includes("qualified") && t.includes("lab")))
    return `What qualifications must staff hold for "${label}"?`;
  if (t.includes("quality control") && t.includes("lab"))
    return `What "${label}" procedures and documentation are required?`;
  if (t.includes("test description") || (t.includes("procedure") && t.includes("lab")))
    return `What written "${label}" must the laboratory maintain?`;
  if (t.includes("pathology") || t.includes("provider review of results"))
    return `How must "${label}" be reviewed and documented in patient care?`;
  if (t.includes("pharmaceutical") || (t.includes("medication") && t.includes("oversight")))
    return `Who holds oversight responsibility for "${label}", and what does that entail?`;
  if (t.includes("high-alert") || t.includes("lasa"))
    return `What safeguards must be in place for "${label}"?`;
  if (t.includes("drug security") || (t.includes("medication") && t.includes("storage")))
    return `What are the security and storage requirements for "${label}"?`;
  if (t.includes("medication labeling") || t.includes("labeling outside") || t.includes("original container"))
    return `What "${label}" requirements apply when medications leave their original containers?`;
  if (t.includes("vaccine"))
    return `What are the storage and handling requirements for "${label}"?`;
  if (t.includes("anticoagulant"))
    return `What safety requirements apply to "${label}" management?`;
  if (t.includes("alarm"))
    return `What are the "${label}" requirements for clinical settings?`;
  if (t.includes("critical value") || (t.includes("communication") && t.includes("reporting")))
    return `What requirements govern "${label}" communication and documentation?`;
  if (t.includes("fall prevention") || t.includes("fall risk"))
    return `What "${label}" measures and documentation must be in place?`;
  if (t.includes("pressure injur") || t.includes("pressure ulcer"))
    return `What "${label}" measures must be in place?`;
  if (t.includes("correct patient") || (t.includes("patient identification") && !t.includes("site")))
    return `What must be in place to ensure "${label}"?`;
  if (t.includes("suicide"))
    return `What screening and risk-reduction measures must be in place for "${label}"?`;
  if (t.includes("dental") || t.includes("oncology") || t.includes("chemo") || t.includes("reproductive") || t.includes("ivf") || t.includes("fertilization"))
    return `What additional requirements apply to organizations providing "${label}"?`;
  if (t.includes("quality monitoring") && t.includes("specialty"))
    return `What quality monitoring is required for "${label}"?`;
  if (t.includes("dignity") || t.includes("shared decision"))
    return `What rights around "${label}" must be actively protected?`;
  if (t.includes("communicating rights") || t.includes("before care"))
    return `When and how must "${label}" be communicated before care begins?`;
  if (t.includes("organizational information") || t.includes("accessible to patient"))
    return `What "${label}" must be made accessible to patients upon request?`;
  if (t.includes("language") || t.includes("manner the patient"))
    return `What "${label}" accommodations must the organization provide?`;
  if (t.includes("risk management"))
    return `What must the "${label}" program include and actively monitor?`;
  if (t.includes("incident") || t.includes("adverse event"))
    return `How are "${label}" defined, and what actions must follow when one occurs?`;
  if (t.includes("safety program") && !t.includes("risk"))
    return `What must the "${label}" include and address?`;
  if (t.includes("product recall") || t.includes("expiration"))
    return `What "${label}" processes must be in place?`;
  if (t.includes("biolog") || t.includes("bloodborne"))
    return `What "${label}" protections must be in place for healthcare workers?`;
  if (t.includes("val") || t.includes("validation"))
    return `What does "${label}" require, and how does it differ from full accreditation?`;
  if (t.includes("care plan") || t.includes("goal setting"))
    return `What must the "${label}" address and document?`;
  if (t.includes("ongoing monitoring") && t.includes("data"))
    return `What three-step sequence is required for "${label}"?`;
  if (t.includes("governing body reporting") || t.includes("privileging connection"))
    return `How must "${label}" be reported to the governing body, and how does it connect to privilege renewal?`;
  if (t.includes("quality improvement stud") || t.includes("qi stud"))
    return `What components must a compliant "${label}" include?`;
  if (t.includes("integrating") || (t.includes("ipc") && t.includes("safety") && t.includes("risk")))
    return `How must "${label}" be formally integrated across the organization?`;
  if (t.includes("administrative polic"))
    return `What must the "${label}" include and document for accreditation compliance?`;
  return `What must be documented and demonstrated for "${label}"?`;
}

function getQuestionPrompt(category?: string, title?: string): string {
  const topic = title ? getTopicLabel(title) : null;
  if (category && topic) {
    switch (category) {
      case "definition":
        if (topic.trim().endsWith("?")) return topic;
        return `How is the ${topic} defined?`;
      case "rule":
        return deriveQuestion(topic);
      case "scenario":
        return `How would you handle this situation: ${topic}?`;
      case "mistake":
        return `What is the common mistake to avoid with: ${topic}?`;
      case "number":
        return `What is the key number or threshold for: ${topic}?`;
      case "tip":
        return `What would a surveyor look for regarding: ${topic}?`;
    }
  }
  if (category && CATEGORY_PROMPTS[category]) return CATEGORY_PROMPTS[category];
  if (topic) return deriveQuestion(topic);
  return "What does this standard require?";
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function buildInitialQueue(n: number): number[] {
  return Array.from({ length: n }, (_, i) => i);
}

function insertAt<T>(arr: T[], idx: number, item: T): T[] {
  const next = [...arr];
  next.splice(idx, 0, item);
  return next;
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function StudyPage() {
  const [, params] = useRoute("/study/:levelId");
  const [, setLocation] = useLocation();
  const levelId = params?.levelId;
  const level = useMemo(() => findLevelById(levelId ?? ""), [levelId]);

  const searchStr = useSearch();
  const initialView = new URLSearchParams(searchStr).get("view") === "summary" ? "summary" : "concepts";
  const [view, setView] = useState<"summary" | "concepts">(initialView);
  const [flipped, setFlipped] = useState(false);
  const [sessionDone, setSessionDone] = useState(false);
  const [howItWorksOpen, setHowItWorksOpen] = useState(true);

  // Spaced-repetition queue state
  const [queue, setQueue] = useState<number[]>(() =>
    buildInitialQueue(level?.studyMaterial?.length ?? 0)
  );
  const [queueIndex, setQueueIndex] = useState(0);
  // Last rating per original card index
  const [ratings, setRatings] = useState<Record<number, SRRating>>({});

  // ── Persistence: fetch existing review schedule for this level ─────────────
  const { data: existingReviews } = useQuery<FlashcardReview[]>({
    queryKey: ["/api/flashcards", levelId],
    queryFn: async () => {
      const res = await fetch(`/api/flashcards/${levelId}`, { credentials: "include" });
      if (!res.ok) return [];
      return res.json();
    },
    enabled: !!levelId,
    staleTime: 30_000,
  });

  // Build a map of cardIndex → stored review for quick lookup
  const reviewMap = useMemo<Record<number, FlashcardReview>>(() => {
    if (!existingReviews) return {};
    const m: Record<number, FlashcardReview> = {};
    for (const r of existingReviews) m[r.cardIndex] = r;
    return m;
  }, [existingReviews]);

  const reviewMutation = useMutation({
    mutationFn: async ({ cardIndex, rating }: { cardIndex: number; rating: SRRating }) => {
      const res = await apiRequest("POST", `/api/flashcards/${levelId}/review`, { cardIndex, rating });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/flashcards/due/count"] });
    },
  });

  const resetMutation = useMutation({
    mutationFn: async () => {
      await apiRequest("DELETE", `/api/flashcards/${levelId}/reviews`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/flashcards", levelId] });
      queryClient.invalidateQueries({ queryKey: ["/api/flashcards/due/count"] });
      setRatings({});
      setSessionDone(false);
      setQueueIndex(0);
      setFlipped(false);
    },
  });

  useEffect(() => {
    setFlipped(false);
  }, [queueIndex]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (view !== "concepts" || sessionDone) return;
      if (e.key === " ") { e.preventDefault(); setFlipped((v) => !v); }
      if (e.key === "ArrowRight" && flipped) rate("good");
      if (e.key === "ArrowLeft" && !flipped && queueIndex > 0) goBack();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [view, flipped, queueIndex, sessionDone]);

  if (!level) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Level not found</p>
      </div>
    );
  }

  const concepts = level.studyMaterial;
  const currentCardIndex = queue[queueIndex];
  const currentConcept = concepts[currentCardIndex];
  const isFirst = queueIndex === 0;
  const summary = level.chapterSummary;
  const catKey = currentConcept?.category;
  const cat = catKey ? CATEGORY_CONFIG[catKey] : null;

  // How many unique original cards remain in queue from queueIndex onward
  const remainingUnique = new Set(queue.slice(queueIndex)).size;

  const rate = (rating: SRRating) => {
    const cfg = SR_CONFIG[rating];

    // Store rating for this card
    setRatings((prev) => ({ ...prev, [currentCardIndex]: rating }));

    // Persist to backend (fire-and-forget - session UX is not blocked)
    if (levelId) {
      reviewMutation.mutate({ cardIndex: currentCardIndex, rating });
    }

    const nextQueueIndex = queueIndex + 1;

    if (cfg.requeue !== null) {
      // Re-insert the card into the queue ahead
      const insertPos = Math.min(nextQueueIndex + cfg.requeue, queue.length);
      const newQueue = insertAt(queue, insertPos, currentCardIndex);
      setQueue(newQueue);
      if (nextQueueIndex >= newQueue.length) {
        setSessionDone(true);
      } else {
        setQueueIndex(nextQueueIndex);
      }
    } else {
      // Good / Easy - just advance
      if (nextQueueIndex >= queue.length) {
        setSessionDone(true);
      } else {
        setQueueIndex(nextQueueIndex);
      }
    }
  };

  const goBack = () => {
    if (!isFirst) {
      setQueueIndex((i) => i - 1);
      setFlipped(false);
    }
  };

  const restart = () => {
    setQueue(buildInitialQueue(concepts.length));
    setQueueIndex(0);
    setFlipped(false);
    setRatings({});
    setSessionDone(false);
  };

  // Summary counts - use last rating per card
  const ratingCounts: Record<SRRating, number> = { again: 0, hard: 0, good: 0 };
  Object.values(ratings).forEach((r) => { ratingCounts[r]++; });
  const totalRated = Object.values(ratingCounts).reduce((a, b) => a + b, 0);

  // For progress dots (original card count), derive color from last rating
  const dotColor = (i: number): string => {
    const r = ratings[i];
    if (r) return SR_CONFIG[r].dot;
    if (i === currentCardIndex && !sessionDone) return level.color;
    return level.color;
  };

  const dotOpacity = (i: number): string => {
    const r = ratings[i];
    if (r) return "opacity-90";
    const posInQueue = queue.indexOf(i, queueIndex);
    if (posInQueue === queueIndex) return "opacity-90";
    if (posInQueue > queueIndex) return "opacity-20";
    return "opacity-35";
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* ── Sticky Header ── */}
      <div className="sticky top-[58px] z-40 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="max-w-lg mx-auto px-4 py-3 flex flex-col gap-3">
          <div className="flex items-center justify-between gap-3">
            <Button variant="ghost" size="icon" onClick={() => setLocation("/")} data-testid="button-back">
              <ArrowLeft size={20} />
            </Button>
            <div className="flex-1 text-center">
              <div className="flex items-center justify-center gap-2">
                <BookOpen size={16} style={{ color: level.color }} />
                <h2 className="font-bold text-base" style={{ color: level.color }} data-testid="text-study-title">
                  {level.name}
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <Button variant="default" size="sm" onClick={() => setLocation(`/play/${level.id}`)} data-testid="button-start-quiz">
                <Play size={14} className="mr-1" /> Quiz
              </Button>
              <Button variant="outline" size="sm" onClick={() => setLocation(`/deep-dive/${level.id}`)} data-testid="button-header-deep-dive">
                <Microscope size={14} className="mr-1" /> Deep Dive
              </Button>
            </div>
          </div>

          {summary && (
            <div className="flex gap-2">
              <button
                onClick={() => setView("summary")}
                className={`flex-1 text-xs font-bold uppercase tracking-wide py-1.5 rounded-md border transition-all ${
                  view === "summary" ? "bg-primary text-primary-foreground border-primary" : "bg-background text-muted-foreground border-border"
                }`}
                data-testid="button-view-summary"
              >
                <FileText size={12} className="inline mr-1" /> Chapter Overview
              </button>
              <button
                onClick={() => setView("concepts")}
                className={`flex-1 text-xs font-bold uppercase tracking-wide py-1.5 rounded-md border transition-all ${
                  view === "concepts" ? "bg-primary text-primary-foreground border-primary" : "bg-background text-muted-foreground border-border"
                }`}
                data-testid="button-view-concepts"
              >
                <BookOpen size={12} className="inline mr-1" /> Flashcards
              </button>
            </div>
          )}

          {/* Progress dots - one per original card */}
          {view === "concepts" && !sessionDone && (
            <div className="flex gap-1">
              {concepts.map((_, i) => (
                <div
                  key={i}
                  className={`flex-1 h-1.5 rounded-full transition-all ${dotOpacity(i)}`}
                  style={{ backgroundColor: dotColor(i) }}
                  data-testid={`dot-concept-${i}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── Summary View ── */}
      {view === "summary" && summary && (
        <div className="flex-1 flex flex-col items-center p-4">
          <div className="w-full max-w-lg space-y-4">
            <Card className="rounded-2xl border-2 p-6 shadow-lg" style={{ borderColor: `${level.color}30` }}>
              <h3 className="text-xl font-black mb-3" data-testid="text-chapter-title">{summary.chapterTitle}</h3>
              <p className="text-base text-foreground/80 leading-relaxed" data-testid="text-chapter-summary">
                {summary.plainLanguageSummary}
              </p>
              {summary.cmsTags && summary.cmsTags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-border" data-testid="container-chapter-cms-tags">
                  {summary.cmsTags.map((tag, i) => (
                    <span key={i} className="text-[11px] px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border" data-testid={`text-chapter-cms-tag-${i}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Card>

            {summary.commonRiskPoints && summary.commonRiskPoints.length > 0 && (
              <div className="rounded-2xl p-6 shadow-lg border-2 border-red-300 bg-red-50">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle size={22} className="text-red-600 flex-shrink-0" />
                  <h4 className="text-base font-black uppercase tracking-wide text-red-700">Where Teams Get Cited</h4>
                  <span className="ml-auto text-xs font-bold px-2.5 py-1 rounded-full text-red-700 bg-red-100 border border-red-300" data-testid="badge-risk-count">
                    {summary.commonRiskPoints.length} high-risk failures
                  </span>
                </div>
                <ul className="space-y-3" data-testid="list-risks">
                  {summary.commonRiskPoints.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-red-900">
                      <AlertTriangle size={14} className="text-red-500 flex-shrink-0 mt-0.5" />
                      <span data-testid={`text-risk-${i}`}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {summary.keyOperationalExpectations && summary.keyOperationalExpectations.length > 0 && (
              <div className="rounded-2xl p-6 shadow-md border-2 border-primary/30 bg-primary/5">
                <div className="flex items-center gap-2 mb-3">
                  <ListChecks size={20} className="text-primary" />
                  <h4 className="text-base font-black uppercase tracking-wide text-primary">What Surveyors Expect</h4>
                </div>
                <ul className="space-y-2" data-testid="list-expectations">
                  {summary.keyOperationalExpectations.map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm text-foreground/80 leading-relaxed">
                      <span className="text-primary mt-0.5 font-bold">•</span>
                      <span data-testid={`text-expectation-${i}`}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex gap-3">
              <Button size="lg" className="flex-1" onClick={() => setLocation(`/play/${level.id}`)} data-testid="button-start-quiz-from-summary">
                <Play size={18} className="mr-1" /> Quiz Me on These Risks
              </Button>
              {concepts.length > 0 && (
                <Button variant="outline" size="lg" className="flex-1" onClick={() => setView("concepts")} data-testid="button-go-to-concepts">
                  <BookOpen size={18} className="mr-1" /> Flashcards
                </Button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── Concepts View: Active Cards ── */}
      {view === "concepts" && !sessionDone && (
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-6 gap-5">

          {/* How it works panel */}
          {howItWorksOpen ? (
            <div className="w-full max-w-lg rounded-2xl border border-primary/20 bg-primary/5 p-4">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <HelpCircle size={15} className="text-primary flex-shrink-0" />
                  <p className="text-xs font-black uppercase tracking-wide text-primary">How flashcards work</p>
                </div>
                <button
                  onClick={() => setHowItWorksOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
                  data-testid="button-dismiss-tip"
                >
                  <X size={14} />
                </button>
              </div>
              <p className="text-xs text-foreground/80 leading-relaxed mb-3">
                Tap a card to flip it and reveal the answer. After flipping, rate how well you remembered it:
              </p>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="rounded-xl border border-red-500/30 bg-red-500/8 p-2.5 text-center">
                  <p className="font-black text-red-400">Again</p>
                  <p className="text-muted-foreground mt-0.5 leading-tight">Forgot it - shows again right away</p>
                </div>
                <div className="rounded-xl border border-orange-500/30 bg-orange-500/8 p-2.5 text-center">
                  <p className="font-black text-orange-400">Hard</p>
                  <p className="text-muted-foreground mt-0.5 leading-tight">Struggled - comes back in ~15 min</p>
                </div>
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/8 p-2.5 text-center">
                  <p className="font-black text-emerald-400">Good</p>
                  <p className="text-muted-foreground mt-0.5 leading-tight">Got it - scheduled for tomorrow</p>
                </div>
              </div>
              <p className="text-[10px] text-muted-foreground mt-2.5 leading-relaxed">
                Cards you find hard come back sooner. Cards you know well are spaced further out. This is how long-term memory is built.
              </p>
            </div>
          ) : (
            <button
              onClick={() => setHowItWorksOpen(true)}
              className="flex items-center gap-1.5 text-[11px] text-muted-foreground hover:text-foreground transition-colors"
              data-testid="button-show-tip"
            >
              <HelpCircle size={12} />
              How does rating work?
            </button>
          )}

          {/* Counter + queue info */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
              Card <span className="font-black" style={{ color: level.color }}>{queueIndex + 1}</span>
              {queue.length > concepts.length
                ? <span className="text-muted-foreground/60"> · {remainingUnique} left</span>
                : <span className="text-muted-foreground/60"> of {concepts.length}</span>
              }
            </span>
            {ratingCounts.good > 0 && (
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                ✓ {ratingCounts.good} done
              </span>
            )}
            {ratingCounts.again + ratingCounts.hard > 0 && (
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-orange-500/15 text-orange-400 border border-orange-500/25">
                ↺ {ratingCounts.again + ratingCounts.hard} queued
              </span>
            )}
          </div>

          {/* Flip card */}
          <div className="w-full max-w-lg" data-testid={`card-concept-${currentCardIndex}`}>
            <AnimatePresence mode="wait" initial={false}>
              {!flipped ? (
                <motion.div
                  key={`front-${queueIndex}`}
                  initial={FLIP_VARIANTS.enterFront}
                  animate={FLIP_VARIANTS.center}
                  exit={FLIP_VARIANTS.exitFront}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <Card
                    className="rounded-2xl border-2 p-7 flex flex-col gap-5 shadow-lg cursor-pointer select-none active:scale-[0.99] transition-transform"
                    style={{ borderColor: `${level.color}30`, minHeight: "320px" }}
                    onClick={() => setFlipped(true)}
                    data-testid="card-front"
                  >
                    <div className="flex items-center justify-between">
                      {cat ? (
                        <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border ${cat.bg} ${cat.text} ${cat.border}`}>
                          {cat.label}
                        </span>
                      ) : (
                        <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border bg-muted text-muted-foreground border-border">
                          Concept
                        </span>
                      )}
                      {ratings[currentCardIndex] ? (
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${SR_CONFIG[ratings[currentCardIndex]].badge}`}>
                          This session: {SR_CONFIG[ratings[currentCardIndex]].label}
                        </span>
                      ) : reviewMap[currentCardIndex] ? (
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${SR_CONFIG[reviewMap[currentCardIndex].lastRating as SRRating]?.badge ?? "bg-muted text-muted-foreground border-border"}`}>
                          Last: {reviewMap[currentCardIndex].lastRating}
                        </span>
                      ) : null}
                    </div>

                    <div className="flex-1 flex flex-col justify-center gap-4">
                      <p className="text-xl font-black leading-snug" data-testid="text-concept-question">
                        {getQuestionPrompt(currentConcept.category, currentConcept.title)}
                      </p>
                      {getCodeLabel(currentConcept.title) ? (
                        <p className="text-xs font-bold text-muted-foreground/60 uppercase tracking-widest" data-testid="text-concept-title">
                          {getCodeLabel(currentConcept.title)}
                        </p>
                      ) : null}
                    </div>

                    <div className="flex items-center justify-center gap-2 pt-2 border-t border-border/40">
                      <span className="text-xs text-muted-foreground/60 font-medium tracking-wide">
                        Tap card to reveal answer
                      </span>
                    </div>
                  </Card>
                </motion.div>
              ) : (
                <motion.div
                  key={`back-${queueIndex}`}
                  initial={FLIP_VARIANTS.enterFront}
                  animate={FLIP_VARIANTS.center}
                  exit={FLIP_VARIANTS.exitFront}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <Card
                    className="rounded-2xl border-2 p-7 flex flex-col gap-5 shadow-lg"
                    style={{ borderColor: `${level.color}50` }}
                    data-testid="card-back"
                  >
                    <div className="flex items-center justify-between">
                      {cat ? (
                        <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border ${cat.bg} ${cat.text} ${cat.border}`}>
                          {cat.label}
                        </span>
                      ) : (
                        <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border bg-muted text-muted-foreground border-border">
                          Concept
                        </span>
                      )}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setFlipped(false)}
                          className="flex items-center gap-1 text-[10px] font-semibold text-muted-foreground/60 hover:text-muted-foreground transition-colors"
                          data-testid="button-flip-to-question"
                        >
                          <RotateCcw size={11} />
                          See question
                        </button>
                        <span className="text-[10px] text-muted-foreground/40">·</span>
                        <span className="text-[10px] text-muted-foreground font-semibold">
                          {currentCardIndex + 1} of {concepts.length}
                        </span>
                      </div>
                    </div>

                    {/* Answer - keyPoint is the direct answer shown first and prominently */}
                    <div
                      className="rounded-xl p-5 border"
                      style={{ backgroundColor: `${level.color}12`, borderColor: `${level.color}30` }}
                    >
                      <p className="text-[10px] font-black uppercase tracking-widest mb-2" style={{ color: level.color }}>
                        Answer
                      </p>
                      <p className="text-lg font-bold leading-snug" data-testid="text-concept-keypoint">
                        {currentConcept.keyPoint}
                      </p>
                    </div>

                    {/* Explanation - content is supplementary context below the answer */}
                    <div className="flex flex-col gap-1.5">
                      <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                        Explanation
                      </p>
                      <p className="text-sm text-foreground/80 leading-relaxed" data-testid="text-concept-content">
                        {currentConcept.content}
                      </p>
                    </div>

                    {currentConcept.extraInfo && (
                      <div className="rounded-xl p-4 bg-muted/40 border border-border/50">
                        <p className="text-[10px] font-black uppercase tracking-widest mb-1 text-muted-foreground">
                          Also Note
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-concept-extrainfo">
                          {currentConcept.extraInfo}
                        </p>
                      </div>
                    )}

                    {/* ── 4-Button Spaced Repetition Row ── */}
                    <div className="flex flex-col gap-2 pt-1">
                      <p className="text-[10px] text-center text-muted-foreground/50 font-semibold uppercase tracking-widest">
                        How well did you know this?
                      </p>
                      <div className="grid grid-cols-3 gap-2">
                        {(["again", "hard", "good"] as SRRating[]).map((r) => {
                          const cfg = SR_CONFIG[r];
                          const Icon = cfg.icon;
                          return (
                            <button
                              key={r}
                              onClick={() => rate(r)}
                              className={`flex flex-col items-center gap-1 px-1 py-2.5 rounded-xl border font-bold text-[11px] transition-all active:scale-95 ${cfg.btn}`}
                              data-testid={`button-rate-${r}`}
                            >
                              <Icon size={14} />
                              <span>{cfg.label}</span>
                              <span className="text-[9px] font-semibold opacity-70">{cfg.interval}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Nav row */}
          <div className="flex items-center gap-3 w-full max-w-lg">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground"
              disabled={isFirst}
              onClick={goBack}
              data-testid="button-prev-concept"
            >
              <ChevronLeft size={16} className="mr-1" /> Prev
            </Button>
            <div className="flex-1 text-center">
              {!flipped && (
                <button
                  className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-border/60 text-muted-foreground hover:text-foreground hover:border-border transition-colors"
                  onClick={() => setFlipped(true)}
                  data-testid="button-flip-card"
                >
                  Flip
                </button>
              )}
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground"
              onClick={() => {
                const next = queueIndex + 1;
                if (next >= queue.length) setSessionDone(true);
                else setQueueIndex(next);
              }}
              data-testid="button-skip-concept"
            >
              Skip <ChevronRight size={16} className="ml-1" />
            </Button>
          </div>

          {/* Keyboard hint */}
          <p className="text-[11px] text-muted-foreground/40 text-center hidden sm:block">
            Space = flip &nbsp;·&nbsp; → = Good &nbsp;·&nbsp; ← = Back
          </p>
        </div>
      )}

      {/* ── Session Complete Screen ── */}
      {view === "concepts" && sessionDone && (
        <div className="flex-1 flex flex-col items-center justify-center p-6">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="w-full max-w-lg space-y-5"
            >
              {/* Trophy */}
              <div className="flex flex-col items-center gap-3 py-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: `${level.color}20`, border: `2px solid ${level.color}40` }}>
                  <Trophy size={30} style={{ color: level.color }} />
                </div>
                <div className="text-center">
                  <h2 className="text-2xl font-black" data-testid="text-session-complete">Session Complete</h2>
                  <p className="text-muted-foreground text-sm mt-1">
                    You reviewed {totalRated} card{totalRated !== 1 ? "s" : ""} this session
                  </p>
                </div>
              </div>

              {/* 3-bucket summary */}
              <div className="grid grid-cols-3 gap-3">
                {(["good", "hard", "again"] as SRRating[]).map((r) => {
                  const cfg = SR_CONFIG[r];
                  const Icon = cfg.icon;
                  const count = ratingCounts[r];
                  return (
                    <Card
                      key={r}
                      className={`rounded-2xl p-4 border-2 text-center ${count === 0 ? "opacity-40" : ""}`}
                      style={{
                        borderColor: count > 0 ? `${cfg.dot}40` : undefined,
                        background: count > 0 ? `${cfg.dot}10` : undefined,
                      }}
                      data-testid={`stat-rating-${r}`}
                    >
                      <Icon size={18} className="mx-auto mb-1" style={{ color: count > 0 ? cfg.dot : undefined }} />
                      <div className="text-3xl font-black" style={{ color: count > 0 ? cfg.dot : undefined }}>{count}</div>
                      <div className="text-xs font-bold uppercase tracking-wide mt-0.5 opacity-80" style={{ color: count > 0 ? cfg.dot : undefined }}>
                        {cfg.label}
                      </div>
                      <div className="text-[10px] text-muted-foreground mt-0.5">{cfg.interval}</div>
                    </Card>
                  );
                })}
              </div>

              {/* Next-session nudge */}
              <Card className="rounded-2xl border-2 p-5" style={{ borderColor: `${level.color}25` }}>
                <p className="text-sm text-foreground/75 leading-relaxed text-center">
                  {ratingCounts.again + ratingCounts.hard === 0
                    ? "Excellent session. Every card rated Good. Ready to prove it on the quiz?"
                    : ratingCounts.good === 0
                    ? "Keep reviewing. Run through the deck again until more cards feel Good."
                    : `${ratingCounts.good} card${ratingCounts.good !== 1 ? "s" : ""} feeling solid. ${ratingCounts.again + ratingCounts.hard} still need more review.`}
                </p>
              </Card>

              {/* Action buttons */}
              <div className="flex flex-col gap-3">
                <Button
                  size="lg"
                  className="w-full"
                  onClick={() => setLocation(`/play/${level.id}`)}
                  data-testid="button-start-quiz-done"
                >
                  <Play size={18} className="mr-2" /> Take the Quiz
                </Button>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1"
                    onClick={restart}
                    data-testid="button-restart-cards"
                  >
                    <RefreshCw size={16} className="mr-2" /> Run Again
                  </Button>
                  {(ratingCounts.again > 0 || ratingCounts.hard > 0) && (
                    <Button
                      variant="outline"
                      size="lg"
                      className="flex-1 border-orange-500/40 text-orange-400 hover:bg-orange-500/10"
                      onClick={() => {
                        const needsWork = Object.entries(ratings)
                          .filter(([, r]) => r === "again" || r === "hard")
                          .map(([i]) => Number(i));
                        setQueue(needsWork);
                        setQueueIndex(0);
                        setFlipped(false);
                        setRatings({});
                        setSessionDone(false);
                      }}
                      data-testid="button-review-weak"
                    >
                      <RotateCcw size={16} className="mr-2" /> Review Weak
                    </Button>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full text-muted-foreground/50 hover:text-red-400 hover:bg-red-500/10 text-xs"
                  onClick={() => resetMutation.mutate()}
                  disabled={resetMutation.isPending}
                  data-testid="button-forget-all"
                >
                  <Trash2 size={13} className="mr-1.5" />
                  {resetMutation.isPending ? "Resetting…" : "Forget all - start from scratch"}
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
