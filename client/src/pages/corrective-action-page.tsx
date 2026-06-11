import { useState, useMemo, useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, Plus, AlertTriangle, CheckCircle2,
  Clock, X, Calendar, Info, FlaskConical, Database,
  GraduationCap, ShieldCheck, User, ClipboardList,
  Hospital, Stethoscope, ChevronRight, BookOpen,
  Library, Sparkles, CalendarDays, Loader2, LayoutList,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { useFacilityAuth } from "@/lib/facility-auth";
import { auditLog } from "@/lib/audit-log";
import { DEMO_REMEDIATION_PLANS } from "@/data/demoCorrectiveActions";
import { REMEDIATION_LIBRARY, type LibraryStep } from "@/data/remediationLibrary";

// ── Types ──────────────────────────────────────────────────────────────────
// Remediation plans are assigned ONLY when a learner scores below the required
// passing threshold on a FINAL test.
//
// Assessment types tracked across the platform:
//   "diagnostic" - knowledge-gap diagnostic, never triggers remediation
//   "drill"      - rapid-fire drill, never triggers remediation
//   "practice"   - practice quiz, never triggers remediation
//   "final"      - formal post-test / final assessment - the ONLY type that
//                  triggers remediation when score < passing threshold

export type AssessmentType = "diagnostic" | "drill" | "practice" | "final";

export const ASSESSMENT_TYPE_LABELS: Record<AssessmentType, string> = {
  diagnostic: "Diagnostic",
  drill:      "Drill",
  practice:   "Practice Quiz",
  final:      "Final Test",
};

// ── Remediation Guard ──────────────────────────────────────────────────────
//
// THIS IS THE SINGLE SOURCE OF TRUTH for whether a remediation plan should
// be created. Every code path that creates a remediation plan MUST call
// this function before proceeding.
//
// Logic:
//   assessment_type === "final"  AND  score < passingThreshold
//
// Callers:
//   - handleSave()               in the Create Demo dialog (manual demo only)
//   - getRemediationPlan()       in remediationLibrary.ts (quiz engine hook)
//   - (future) quiz result hook  in the backend when a final test is submitted

export function shouldCreateRemediationPlan(
  assessmentType: AssessmentType,
  score: number,
  passingThreshold = PASSING_THRESHOLD,
): boolean {
  return assessmentType === "final" && score < passingThreshold;
}

export interface RemediationStep {
  title: string;
  description: string;
}

export interface LessonPlanEntry {
  period: string;
  task: string;
  description: string;
}

export type PlanStatus = "Assigned" | "In Progress" | "Completed" | "Verified";

export interface RemediationPlan {
  id: string;
  learner: string;
  facilityType: "Hospital" | "ASC";
  category: string;
  assessmentType: AssessmentType;
  quizScore: number;
  passingThreshold: number;
  remediationSteps: RemediationStep[];
  reassessmentRequired: boolean;
  status: PlanStatus;
  assignedDate: string;
  dueDate: string;
  facilityId: string;
  facilityName: string;
  assignedBy?: string;
  verifiedBy?: string;
  notes?: string;
  isDemo?: boolean;
  lessonPlan?: LessonPlanEntry[];
  lessonPlanCadence?: "daily" | "weekly";
}

interface CreatePlanForm {
  facilityType: "Hospital" | "ASC" | "";
  category: string;
  learner: string;
  quizScore: string;
  dueDate: string;
  assignedBy: string;
  notes: string;
  cadence: "daily" | "weekly";
}

type DataMode = "demo" | "live";

// ── Category Options ────────────────────────────────────────────────────────

export const HOSPITAL_CATEGORIES = [
  "Instrument Integrity",
  "Facilities & Equipment",
  "SPD & Decontamination",
  "OR & Sterile Technique",
  "Transport of Instruments",
  "Environment & Surfaces",
  "Clean vs. Dirty",
  "Sterile Storage",
  "Surgical Safety & Consent",
  "Patient Care & Documentation",
  "EOC & Safety Compliance",
];

const ASC_CATEGORIES = [
  "Patient Rights and Responsibilities",
  "Governance",
  "Administration",
  "Quality of Care Provided",
  "Quality Management and Improvement",
  "Clinical Records and Health Information",
  "Infection Prevention and Control and Safety",
  "Facilities and Environment",
  "Anesthesia and Surgical Services",
  "Surgical and Related Services",
  "Pharmaceutical Services",
  "Pathology and Medical Laboratory Services",
  "Diagnostic and Other Imaging Services",
];

const ALL_STATUSES: PlanStatus[] = ["Assigned", "In Progress", "Completed", "Verified"];
const PASSING_THRESHOLD = 75;

// ── Library Helpers ────────────────────────────────────────────────────────

function getLibraryKey(facilityType: "Hospital" | "ASC" | "", category: string): string {
  return facilityType === "ASC" ? `ASC: ${category}` : category;
}

function getStepsForScore(
  facilityType: "Hospital" | "ASC" | "",
  category: string,
  score: number,
): RemediationStep[] {
  if (!facilityType || !category || isNaN(score) || score <= 0) return [];
  const key = getLibraryKey(facilityType, category);
  const plans = REMEDIATION_LIBRARY[key];
  if (!plans) return [];
  if (score >= 60) return [plans[0]];
  return [plans[0], plans[1]];
}

// ── UI Helpers ─────────────────────────────────────────────────────────────

function statusConfig(status: PlanStatus) {
  switch (status) {
    case "Assigned":
      return { color: "text-blue-400", bg: "bg-blue-500/20 border-blue-400/40", icon: ClipboardList, next: "In Progress" as PlanStatus, nextLabel: "Mark In Progress", nextColor: "text-blue-400 border-blue-400/50 hover:bg-blue-500/20" };
    case "In Progress":
      return { color: "text-blue-400", bg: "bg-blue-500/20 border-blue-400/40", icon: Clock, next: "Completed" as PlanStatus, nextLabel: "Mark Completed", nextColor: "text-green-400 border-green-400/50 hover:bg-green-500/20" };
    case "Completed":
      return { color: "text-green-400", bg: "bg-green-500/20 border-green-400/40", icon: CheckCircle2, next: "Verified" as PlanStatus, nextLabel: "Mark Verified", nextColor: "text-purple-500 border-purple-400/50 hover:bg-purple-500/20" };
    case "Verified":
      return { color: "text-purple-500", bg: "bg-purple-500/20 border-purple-400/40", icon: ShieldCheck, next: null, nextLabel: null, nextColor: "" };
  }
}

function scoreColor(score: number, threshold: number) {
  const gap = threshold - score;
  if (gap <= 10) return "text-orange-500";
  if (gap <= 20) return "text-orange-500";
  return "text-red-400";
}

function isOverdue(plan: RemediationPlan) {
  return (plan.status === "Assigned" || plan.status === "In Progress")
    && new Date(plan.dueDate) < new Date();
}

function formatDate(iso: string) {
  try { return format(new Date(iso), "MMM d, yyyy"); } catch { return iso; }
}

// ── Education Plan Directory ────────────────────────────────────────────────

function PlanDirectoryCard({ facilityTypeFilter }: { facilityTypeFilter: "All" | "Hospital" | "ASC" }) {
  const allCategories = useMemo(() => {
    const cats = Object.keys(REMEDIATION_LIBRARY);
    if (facilityTypeFilter === "Hospital") return cats.filter((c) => !c.startsWith("ASC:")).sort();
    if (facilityTypeFilter === "ASC") return cats.filter((c) => c.startsWith("ASC:")).sort();
    return cats.sort();
  }, [facilityTypeFilter]);

  const [selectedCat, setSelectedCat] = useState(() => allCategories[0] ?? "");
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (!allCategories.includes(selectedCat)) setSelectedCat(allCategories[0] ?? "");
  }, [allCategories, selectedCat]);

  const steps = selectedCat ? REMEDIATION_LIBRARY[selectedCat] : null;

  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      <button
        className="w-full flex items-center gap-3 px-5 py-4 text-left hover:bg-muted/20 transition-colors"
        onClick={() => setExpanded((v) => !v)}
        data-testid="button-toggle-directory"
      >
        <div className="w-9 h-9 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
          <BookOpen size={16} className="text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold">Education Plan Directory</p>
          <p className="text-xs text-muted-foreground mt-0.5">Browse what steps are assigned per category and score band</p>
        </div>
        {expanded
          ? <ChevronRight size={16} className="text-muted-foreground rotate-90 transition-transform" />
          : <ChevronRight size={16} className="text-muted-foreground transition-transform" />}
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="dir-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-4 flex flex-col gap-4 border-t border-border/40">

              {/* Category selector */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  Select Category
                </label>
                <select
                  value={selectedCat}
                  onChange={(e) => setSelectedCat(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  data-testid="select-directory-category"
                >
                  {allCategories.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              {steps && (
                <div className="flex flex-col gap-4">

                  {/* Step 1 - Score 60–69% */}
                  <div className="flex flex-col gap-2">
                    <span className="self-start text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-400">
                      Score 60–69% - Step 1 assigned
                    </span>
                    <div className="pl-4 border-l-2 border-blue-400/40 flex flex-col gap-0.5">
                      <p className="text-sm font-semibold">{steps[0].title}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{steps[0].description}</p>
                    </div>
                  </div>

                  {/* Step 2 - Score 50–59% */}
                  <div className="flex flex-col gap-2">
                    <span className="self-start text-xs font-bold px-2.5 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-300">
                      Score 50–59% - Step 2 also assigned
                    </span>
                    <div className="pl-4 border-l-2 border-orange-400/40 flex flex-col gap-0.5">
                      <p className="text-sm font-semibold">{steps[1].title}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{steps[1].description}</p>
                    </div>
                  </div>

                  {/* Step 3 - educator-led reinforcement */}
                  <div className="flex flex-col gap-2">
                    <span className="self-start text-xs font-bold px-2.5 py-0.5 rounded-full bg-muted/60 border border-border text-muted-foreground">
                      Step 3 - educator-led reinforcement
                    </span>
                    <div className="pl-4 border-l-2 border-border/60 flex flex-col gap-0.5">
                      <p className="text-sm font-semibold">{steps[2].title}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{steps[2].description}</p>
                    </div>
                  </div>

                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Purpose Banner ─────────────────────────────────────────────────────────

function PurposeBanner() {
  return (
    <div className="rounded-2xl border border-primary/25 bg-primary/6 px-5 py-4" data-testid="banner-purpose">
      <p className="text-sm leading-relaxed text-foreground/80">
        <span className="font-semibold text-foreground/95">Guided Education Plans</span> are assigned when a learner scores below the required passing threshold on the final test.
        Each plan provides targeted review steps and reinforcement activities.
      </p>
    </div>
  );
}

// ── How to Read This Page ──────────────────────────────────────────────────

function HowToReadBox() {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-border overflow-hidden" data-testid="container-how-to-read">
      <button
        className="w-full flex items-center gap-3 px-5 py-4 text-left hover:bg-white/4 transition-colors bg-card"
        onClick={() => setOpen((v) => !v)}
        data-testid="button-toggle-how-to-read"
      >
        <Info size={17} className="text-primary flex-shrink-0" />
        <span className="text-base font-bold">How to read this page</span>
        <span className="ml-auto text-sm text-muted-foreground">{open ? "Hide" : "Show"}</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-4 flex flex-col gap-4 text-sm text-muted-foreground leading-relaxed border-t border-border/40 bg-card">
              <p className="text-foreground/80 text-base">
                Each card represents a learner guided education plan created after a final test score below the required passing threshold.
              </p>
              <div>
                <p className="font-bold text-foreground/90 mb-2 text-sm uppercase tracking-wide">Status</p>
                <ul className="space-y-2 pl-1">
                  <li><span className="font-semibold text-blue-300">Assigned</span> - the guided education plan has been created and assigned</li>
                  <li><span className="font-semibold text-blue-400">In Progress</span> - the learner is completing review or reinforcement steps</li>
                  <li><span className="font-semibold text-green-300">Completed</span> - the learner finished the assigned education activities</li>
                  <li><span className="font-semibold text-purple-500">Verified</span> - the educator confirmed completion</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-foreground/90 mb-1 text-sm uppercase tracking-wide">Final Test Score</p>
                <p>The learner's score on the formal post-test / final assessment.</p>
              </div>
              <div>
                <p className="font-bold text-foreground/90 mb-1 text-sm uppercase tracking-wide">Passing Threshold</p>
                <p>The minimum score required to pass without a guided education plan.</p>
              </div>
              <div>
                <p className="font-bold text-foreground/90 mb-1 text-sm uppercase tracking-wide">Assigned Plan</p>
                <p>The preset educational follow-up selected for the learner's category or chapter. One plan is assigned for scores 60–74%; two plans for scores below 60%.</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Steps Preview ──────────────────────────────────────────────────────────

function StepsPreview({ facilityType, category, score }: { facilityType: "Hospital" | "ASC" | ""; category: string; score: number; }) {
  const steps = getStepsForScore(facilityType, category, score);
  if (!steps.length || !category || !facilityType) return null;
  return (
    <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 flex flex-col gap-3">
      <p className="text-xs font-bold uppercase tracking-wider text-primary/80">
        Plans that will be assigned ({steps.length} step{steps.length > 1 ? "s" : ""})
      </p>
      {steps.map((s, i) => (
        <div key={i} className="flex flex-col gap-0.5">
          <p className="text-sm font-semibold">{i + 1}. {s.title}</p>
          <p className="text-xs text-muted-foreground leading-relaxed">{s.description}</p>
        </div>
      ))}
    </div>
  );
}

// ── Create Plan Dialog ─────────────────────────────────────────────────────

type PlanPrefill = { learner?: string; facilityType?: "Hospital" | "ASC"; category?: string; score?: number };

function CreatePlanDialog({
  open, onClose, onSave, defaultFacilityId, defaultFacilityName, prefill,
}: {
  open: boolean;
  onClose: () => void;
  onSave: (plan: RemediationPlan) => void;
  defaultFacilityId: string;
  defaultFacilityName: string;
  prefill?: PlanPrefill;
}) {
  const { register, handleSubmit, reset, setValue, watch, formState: { errors } } = useForm<CreatePlanForm>({
    defaultValues: { facilityType: "", category: "", learner: "", quizScore: "", dueDate: "", assignedBy: "", notes: "", cadence: "daily" },
  });

  useEffect(() => {
    if (open && prefill) {
      reset({
        facilityType: (prefill.facilityType ?? "") as "Hospital" | "ASC" | "",
        category: prefill.category ?? "",
        learner: prefill.learner ?? "",
        quizScore: prefill.score != null ? String(prefill.score) : "",
        dueDate: "",
        assignedBy: "",
        notes: "",
        cadence: "daily",
      });
      setGeneratedPlan(null);
      setPlanGenError(null);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);
  const facilityType = watch("facilityType");
  const category = watch("category");
  const quizScoreRaw = watch("quizScore");
  const dueDate = watch("dueDate");
  const learner = watch("learner");
  const cadence = watch("cadence");
  const scoreNum = parseInt(quizScoreRaw, 10);

  const [generatingPlan, setGeneratingPlan] = useState(false);
  const [generatedPlan, setGeneratedPlan] = useState<LessonPlanEntry[] | null>(null);
  const [planGenError, setPlanGenError] = useState<string | null>(null);

  const categoryOptions = facilityType === "Hospital" ? HOSPITAL_CATEGORIES : facilityType === "ASC" ? ASC_CATEGORIES : [];
  const previewSteps = getStepsForScore(facilityType as "Hospital" | "ASC" | "", category, scoreNum);
  const canGeneratePlan = !!(facilityType && category && learner && dueDate && !isNaN(scoreNum) && scoreNum > 0 && scoreNum < 75 && previewSteps.length > 0);

  async function handleGeneratePlan() {
    if (!canGeneratePlan) return;
    setGeneratingPlan(true);
    setPlanGenError(null);
    setGeneratedPlan(null);
    try {
      const res = await fetch("/api/admin/lesson-plan/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          assignedDate: new Date().toISOString().split("T")[0],
          dueDate,
          cadence,
          category,
          facilityType,
          learner,
          steps: previewSteps,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to generate plan");
      setGeneratedPlan(data.lessonPlan);
    } catch (err: any) {
      setPlanGenError(err.message || "Could not generate lesson plan.");
    } finally {
      setGeneratingPlan(false);
    }
  }

  function handleClose() {
    onClose();
    reset();
    setGeneratedPlan(null);
    setPlanGenError(null);
  }

  function onSubmit(data: CreatePlanForm) {
    const score = parseInt(data.quizScore, 10);
    if (!shouldCreateRemediationPlan("final", score)) return;
    const steps = getStepsForScore(data.facilityType as "Hospital" | "ASC", data.category, score);
    const newPlan: RemediationPlan = {
      id: `rem-${Date.now()}`,
      learner: data.learner,
      facilityType: data.facilityType as "Hospital" | "ASC",
      category: data.category,
      assessmentType: "final",
      quizScore: score,
      passingThreshold: PASSING_THRESHOLD,
      remediationSteps: steps,
      reassessmentRequired: false,
      status: "Assigned",
      assignedDate: new Date().toISOString().split("T")[0],
      dueDate: data.dueDate,
      facilityId: defaultFacilityId,
      facilityName: defaultFacilityName,
      assignedBy: data.assignedBy || undefined,
      notes: data.notes || undefined,
      lessonPlan: generatedPlan || undefined,
      lessonPlanCadence: generatedPlan ? data.cadence : undefined,
    };
    onSave(newPlan);
    reset();
    setGeneratedPlan(null);
    setPlanGenError(null);
    onClose();
  }

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) handleClose(); }}>
      <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto" data-testid="dialog-create-plan">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-lg">
            <GraduationCap size={19} className="text-primary" />
            Create Demo Guided Education Plan
          </DialogTitle>
        </DialogHeader>
        <p className="text-sm text-muted-foreground -mt-1 mb-2 leading-relaxed">
          Creates a sample plan for demonstration. In production, guided education plans are assigned automatically when a learner scores below the passing threshold on a final test.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-bold">Facility Type</label>
            <Select value={facilityType} onValueChange={(v) => { setValue("facilityType", v as "Hospital" | "ASC"); setValue("category", ""); setGeneratedPlan(null); }}>
              <SelectTrigger data-testid="select-facility-type">
                <SelectValue placeholder="Select Hospital or ASC..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Hospital">Hospital (Joint Commission)</SelectItem>
                <SelectItem value="ASC">ASC (AAAHC / CMS)</SelectItem>
              </SelectContent>
            </Select>
            {errors.facilityType && <span className="text-xs text-destructive">Required</span>}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-bold">Category / Chapter</label>
            <Select value={category} onValueChange={(v) => { setValue("category", v); setGeneratedPlan(null); }} disabled={!facilityType}>
              <SelectTrigger data-testid="select-chapter">
                <SelectValue placeholder={facilityType ? "Select category..." : "Select facility type first"} />
              </SelectTrigger>
              <SelectContent>
                {categoryOptions.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
              </SelectContent>
            </Select>
            {errors.category && <span className="text-xs text-destructive">Required</span>}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-bold">Learner</label>
            <input
              {...register("learner", { required: true })}
              placeholder="e.g. Learner A, OR Circulating Nurse"
              className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              data-testid="input-learner"
            />
            {errors.learner && <span className="text-xs text-destructive">Required</span>}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-bold">Assessment Type</label>
            <div className="rounded-lg border border-border bg-muted/30 px-3 py-2.5 text-sm text-muted-foreground flex items-center gap-2">
              <BookOpen size={13} className="text-primary/60" />
              Final Test
              <span className="ml-1 text-[10px] text-muted-foreground/55">(only final tests trigger a guided education plan)</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-bold">Final Test Score (%)</label>
              <input
                type="number" min={1} max={74}
                {...register("quizScore", { required: true, min: { value: 1, message: "Min 1" }, max: { value: 74, message: "Must be below 75%" } })}
                placeholder="e.g. 58"
                className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                data-testid="input-quiz-score"
              />
              {errors.quizScore && <span className="text-xs text-destructive">{errors.quizScore.message || "Required"}</span>}
              {!isNaN(scoreNum) && scoreNum > 0 && scoreNum < 75 && (
                <p className="text-[11px] text-muted-foreground">
                  {scoreNum >= 60 ? "1 step assigned" : "2 steps assigned"}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-bold">Due Date</label>
              <input
                type="date"
                {...register("dueDate", { required: true })}
                className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                data-testid="input-plan-due-date"
              />
              {errors.dueDate && <span className="text-xs text-destructive">Required</span>}
            </div>
          </div>

          {previewSteps.length > 0 && (
            <StepsPreview facilityType={facilityType as "Hospital" | "ASC" | ""} category={category} score={scoreNum} />
          )}

          {/* ── AI Lesson Plan Section ── */}
          {previewSteps.length > 0 && dueDate && (
            <div className="rounded-xl border border-primary/25 bg-primary/5 p-4 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Sparkles size={15} className="text-primary flex-shrink-0" />
                <p className="text-sm font-bold">AI Lesson Plan</p>
                <span className="text-[10px] text-muted-foreground font-semibold ml-auto">optional</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Generate a structured {cadence} schedule showing the learner exactly what to complete each {cadence === "daily" ? "day" : "week"} between now and the due date.
              </p>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Schedule Cadence</label>
                <div className="flex gap-2">
                  {(["daily", "weekly"] as const).map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => { setValue("cadence", c); setGeneratedPlan(null); }}
                      className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg border text-sm font-bold transition-all ${
                        cadence === c
                          ? "bg-primary/20 border-primary/60 text-primary"
                          : "bg-background border-border text-muted-foreground hover:border-primary/30"
                      }`}
                      data-testid={`button-cadence-${c}`}
                    >
                      <CalendarDays size={13} />
                      {c === "daily" ? "Daily" : "Weekly"}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={handleGeneratePlan}
                disabled={generatingPlan || !canGeneratePlan}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-primary/40 bg-primary/10 text-primary text-sm font-bold hover:bg-primary/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                data-testid="button-generate-lesson-plan"
              >
                {generatingPlan ? <Loader2 size={14} className="animate-spin" /> : <Sparkles size={14} />}
                {generatingPlan ? "Generating plan…" : generatedPlan ? "Regenerate Lesson Plan" : "Generate AI Lesson Plan"}
              </button>

              {planGenError && (
                <p className="text-xs text-destructive font-semibold">{planGenError}</p>
              )}

              {generatedPlan && (
                <div className="flex flex-col gap-2 pt-1" data-testid="container-generated-plan">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    Generated {cadence === "daily" ? "Daily" : "Weekly"} Schedule ({generatedPlan.length} {cadence === "daily" ? "days" : "weeks"})
                  </p>
                  <div className="flex flex-col gap-1.5 max-h-48 overflow-y-auto pr-1">
                    {generatedPlan.map((entry, i) => (
                      <div key={i} className="flex gap-2.5 items-start" data-testid={`lesson-entry-${i}`}>
                        <span className="text-[10px] font-black text-primary/70 bg-primary/10 rounded px-1.5 py-0.5 flex-shrink-0 mt-0.5 whitespace-nowrap">
                          {entry.period}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold leading-tight">{entry.task}</p>
                          <p className="text-[11px] text-muted-foreground leading-snug">{entry.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-bold">
              Assigned By <span className="font-normal text-muted-foreground">(optional)</span>
            </label>
            <input
              {...register("assignedBy")}
              placeholder="Educator, Clinical Supervisor..."
              className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              data-testid="input-assigned-by"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-bold">
              Notes <span className="font-normal text-muted-foreground">(optional)</span>
            </label>
            <textarea
              {...register("notes")}
              rows={3}
              placeholder="Educational context or learner notes..."
              className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              data-testid="textarea-plan-notes"
            />
          </div>

          <div className="flex gap-2 pt-1">
            <Button type="submit" className="flex-1" size="lg" data-testid="button-submit-plan">
              <Plus size={16} className="mr-1.5" /> Assign Guided Education Plan
            </Button>
            <Button type="button" variant="outline" size="lg" onClick={handleClose} data-testid="button-cancel-plan">
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

// ── Lesson Plan Display ────────────────────────────────────────────────────

function LessonPlanDisplay({ plan, cadence, planId }: { plan: LessonPlanEntry[]; cadence: "daily" | "weekly"; planId: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border-t border-border/40 pt-3" data-testid={`container-lesson-plan-${planId}`}>
      <button
        className="w-full flex items-center gap-2 text-left mb-2"
        onClick={() => setExpanded((v) => !v)}
        data-testid={`button-toggle-lesson-plan-${planId}`}
      >
        <LayoutList size={14} className="text-primary flex-shrink-0" />
        <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/70 flex-1">
          AI {cadence === "daily" ? "Daily" : "Weekly"} Lesson Plan
        </span>
        <span className="text-[10px] font-bold text-primary/70 bg-primary/10 rounded px-1.5 py-0.5">
          {plan.length} {cadence === "daily" ? "days" : "weeks"}
        </span>
        <ChevronRight size={13} className={`text-muted-foreground transition-transform flex-shrink-0 ${expanded ? "rotate-90" : ""}`} />
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="lesson-plan-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-2 pt-1">
              {plan.map((entry, i) => (
                <div
                  key={i}
                  className="flex gap-3 items-start rounded-xl border border-border/50 bg-muted/20 px-3 py-2.5"
                  data-testid={`lesson-plan-entry-${planId}-${i}`}
                >
                  <span className="text-[10px] font-black text-primary bg-primary/12 border border-primary/20 rounded-lg px-2 py-1 flex-shrink-0 mt-0.5 whitespace-nowrap leading-tight">
                    {entry.period}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold leading-snug mb-0.5">{entry.task}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{entry.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Plan Card ──────────────────────────────────────────────────────────────

function PlanCard({
  plan, showFacility, onStatusChange,
}: {
  plan: RemediationPlan;
  showFacility: boolean;
  onStatusChange: (id: string, status: PlanStatus) => void;
}) {
  const sc = statusConfig(plan.status);
  const StatusIcon = sc.icon;
  const overdue = isOverdue(plan);
  const TypeIcon = plan.facilityType === "Hospital" ? Hospital : Stethoscope;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border-2 border-border bg-card shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden"
      data-testid={`card-plan-${plan.id}`}
    >
      {/* ── Header bar ── */}
      <div className="px-5 pt-5 pb-4 flex flex-wrap items-center gap-2 border-b border-border/40">
        <span
          className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full border ${
            plan.facilityType === "Hospital"
              ? "bg-blue-500/10 border-blue-400/25 text-blue-300"
              : "bg-teal-500/10 border-teal-400/25 text-teal-300"
          }`}
          data-testid={`badge-type-${plan.id}`}
        >
          <TypeIcon size={11} /> {plan.facilityType}
        </span>
        <span
          className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full border ${sc.bg} ${sc.color}`}
          data-testid={`badge-status-${plan.id}`}
        >
          <StatusIcon size={11} /> {plan.status}
        </span>
        {overdue && (
          <span className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full border bg-red-500/15 border-red-400/30 text-red-400" data-testid={`badge-overdue-${plan.id}`}>
            <AlertTriangle size={11} /> Overdue
          </span>
        )}
        {showFacility && (
          <span className="ml-auto text-xs font-semibold text-muted-foreground" data-testid={`text-facility-${plan.id}`}>{plan.facilityName}</span>
        )}
      </div>

      <div className="px-5 py-4 flex flex-col gap-4 flex-1">

        {/* ── Score + Category ── */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 text-center">
            <div className={`text-5xl font-black leading-none ${scoreColor(plan.quizScore, plan.passingThreshold)}`} data-testid={`text-plan-score-${plan.id}`}>
              {plan.quizScore}%
            </div>
            <div className="text-[11px] text-muted-foreground mt-1 font-semibold">{plan.passingThreshold}% required</div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/55 mb-0.5">Category</p>
            <p className="text-lg font-bold leading-snug" data-testid={`text-plan-category-${plan.id}`}>{plan.category}</p>
            <p className="text-xs text-muted-foreground mt-0.5" data-testid={`text-plan-assessment-${plan.id}`}>{ASSESSMENT_TYPE_LABELS[plan.assessmentType]}</p>
          </div>
        </div>

        {/* ── Assigned Steps ── */}
        <div className="flex flex-col gap-3 pt-3 border-t border-border/40">
          <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/55">
            Education Plan{plan.remediationSteps.length > 1 ? "s" : ""} ({plan.remediationSteps.length} step{plan.remediationSteps.length > 1 ? "s" : ""})
          </p>
          {plan.remediationSteps.map((step, i) => (
            <div key={i} className="flex gap-3" data-testid={`container-step-${plan.id}-${i}`}>
              <div className="w-6 h-6 rounded-full bg-primary/15 border border-primary/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-[10px] font-black text-primary">{i + 1}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold leading-snug mb-1" data-testid={`text-step-title-${plan.id}-${i}`}>{step.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-step-desc-${plan.id}-${i}`}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Meta grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-3 pt-3 border-t border-border/40 text-sm">
          <div className="flex flex-col gap-0.5" data-testid={`text-plan-learner-${plan.id}`}>
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/55">Learner</span>
            <span className="font-semibold flex items-center gap-1">
              <User size={11} className="text-muted-foreground flex-shrink-0" />
              {plan.learner}
            </span>
          </div>
          <div className="flex flex-col gap-0.5" data-testid={`text-plan-assigned-date-${plan.id}`}>
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/55">Assigned</span>
            <span className="flex items-center gap-1 font-medium">
              <Calendar size={11} className="text-muted-foreground flex-shrink-0" />
              {formatDate(plan.assignedDate)}
            </span>
          </div>
          <div className="flex flex-col gap-0.5" data-testid={`text-plan-due-${plan.id}`}>
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/55">Due Date</span>
            <span className={`flex items-center gap-1 font-medium ${overdue ? "text-red-400" : ""}`}>
              <Calendar size={11} className={`flex-shrink-0 ${overdue ? "text-red-400" : "text-muted-foreground"}`} />
              {formatDate(plan.dueDate)}
            </span>
          </div>
          {plan.assignedBy && (
            <div className="flex flex-col gap-0.5" data-testid={`text-plan-assigned-by-${plan.id}`}>
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/55">Assigned By</span>
              <span className="font-medium">{plan.assignedBy}</span>
            </div>
          )}
          {plan.verifiedBy && (
            <div className="flex flex-col gap-0.5" data-testid={`text-plan-verified-by-${plan.id}`}>
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/55">Verified By</span>
              <span className="text-purple-500 font-medium flex items-center gap-1">
                <ShieldCheck size={11} /> {plan.verifiedBy}
              </span>
            </div>
          )}
        </div>

        {/* ── Notes ── */}
        {plan.notes && (
          <p className="text-sm text-muted-foreground italic border-t border-border/40 pt-3 leading-relaxed" data-testid={`text-plan-notes-${plan.id}`}>
            {plan.notes}
          </p>
        )}

        {/* ── Lesson Plan ── */}
        {plan.lessonPlan && plan.lessonPlan.length > 0 && (
          <LessonPlanDisplay plan={plan.lessonPlan} cadence={plan.lessonPlanCadence ?? "daily"} planId={plan.id} />
        )}

        {/* ── Action buttons ── */}
        {sc.next && (
          <div className="pt-2 border-t border-border/30">
            <button
              onClick={() => onStatusChange(plan.id, sc.next!)}
              className={`w-full flex items-center justify-center gap-2 rounded-xl border py-2.5 text-sm font-bold transition-colors ${sc.nextColor}`}
              data-testid={`button-advance-${plan.id}`}
            >
              <ChevronRight size={15} />
              {sc.nextLabel}
            </button>
          </div>
        )}
        {plan.status === "Verified" && (
          <div className="pt-2 border-t border-border/30">
            <div className="flex items-center justify-center gap-2 rounded-xl border border-purple-500/40 bg-purple-500/15 py-2.5 text-sm font-bold text-purple-500">
              <ShieldCheck size={15} /> Plan Verified
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

// ── Plan Library Drawer ────────────────────────────────────────────────────

function PlanLibraryDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [libFacilityType, setLibFacilityType] = useState<"All" | "Hospital" | "ASC">("All");
  const [libCategory, setLibCategory] = useState<string>("All");
  const [libScoreBand, setLibScoreBand] = useState<"all" | "60-69" | "50-59" | "below-50">("all");

  const categoryOptions = useMemo(() => {
    if (libFacilityType === "Hospital") return ["All", ...HOSPITAL_CATEGORIES];
    if (libFacilityType === "ASC") return ["All", ...ASC_CATEGORIES];
    return ["All", ...HOSPITAL_CATEGORIES, ...ASC_CATEGORIES];
  }, [libFacilityType]);

  useEffect(() => { setLibCategory("All"); }, [libFacilityType]);

  const entries = useMemo(() => {
    return Object.entries(REMEDIATION_LIBRARY)
      .filter(([key]) => {
        const isAsc = key.startsWith("ASC: ");
        if (libFacilityType === "Hospital" && isAsc) return false;
        if (libFacilityType === "ASC" && !isAsc) return false;
        if (libCategory !== "All") {
          const display = isAsc ? key.replace("ASC: ", "") : key;
          if (display !== libCategory) return false;
        }
        return true;
      })
      .map(([key, steps]) => {
        const isAsc = key.startsWith("ASC: ");
        const displayCategory = isAsc ? key.replace("ASC: ", "") : key;
        const type = isAsc ? "ASC" : "Hospital";
        let shownSteps: LibraryStep[];
        let showReassessment = false;
        if (libScoreBand === "60-69") { shownSteps = [steps[0]]; }
        else if (libScoreBand === "50-59") { shownSteps = [steps[0], steps[1]]; }
        else if (libScoreBand === "below-50") { shownSteps = [steps[0], steps[1]]; showReassessment = true; }
        else { shownSteps = [...steps]; }
        return { key, displayCategory, type, shownSteps, showReassessment };
      });
  }, [libFacilityType, libCategory, libScoreBand]);

  return (
    <Sheet open={open} onOpenChange={(v) => { if (!v) onClose(); }}>
      <SheetContent side="right" className="w-full max-w-lg flex flex-col p-0 gap-0" data-testid="drawer-plan-library">
        <SheetHeader className="px-6 pt-6 pb-4 border-b border-border/40 flex-shrink-0">
          <SheetTitle className="flex items-center gap-2 text-xl">
            <Library size={20} className="text-primary" /> Guided Education Library
          </SheetTitle>
          <SheetDescription className="text-sm leading-relaxed">
            Browse all preset guided education plans by facility type, category, or score band.
          </SheetDescription>
        </SheetHeader>

        {/* ── Filters ── */}
        <div className="px-6 py-4 border-b border-border/40 flex flex-col gap-4 flex-shrink-0">
          <div className="flex flex-col gap-2">
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Facility Type</p>
            <div className="flex gap-2 flex-wrap">
              {(["All", "Hospital", "ASC"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setLibFacilityType(t)}
                  className={`text-sm font-bold px-3 py-1.5 rounded-lg border transition-all ${
                    libFacilityType === t
                      ? t === "Hospital" ? "bg-blue-500/20 border-blue-400/60 text-blue-300"
                        : t === "ASC" ? "bg-teal-500/20 border-teal-400/60 text-teal-300"
                        : "bg-primary/20 border-primary/50 text-primary"
                      : "bg-card border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
                  }`}
                  data-testid={`lib-filter-type-${t.toLowerCase()}`}
                >
                  {t === "All" ? "All" : t}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Category / Chapter</p>
            <select
              value={libCategory}
              onChange={(e) => setLibCategory(e.target.value)}
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              data-testid="lib-filter-category"
            >
              {categoryOptions.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Score Band</p>
            <div className="flex flex-wrap gap-2">
              {([
                ["all", "All scores"],
                ["60-69", "60–69%"],
                ["50-59", "50–59%"],
                ["below-50", "Below 50%"],
              ] as const).map(([val, label]) => (
                <button
                  key={val}
                  onClick={() => setLibScoreBand(val)}
                  className={`text-sm font-bold px-3 py-1.5 rounded-lg border transition-all ${
                    libScoreBand === val
                      ? "bg-primary/20 border-primary/50 text-primary"
                      : "bg-card border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
                  }`}
                  data-testid={`lib-filter-band-${val}`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Entries ── */}
        <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-4" data-testid="lib-entries-list">
          {entries.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <BookOpen size={36} className="mx-auto mb-3 opacity-30" />
              <p className="text-sm">No library entries match the selected filters.</p>
            </div>
          ) : (
            entries.map(({ key, displayCategory, type, shownSteps, showReassessment }) => (
              <div
                key={key}
                className="rounded-xl border border-border bg-card p-4 flex flex-col gap-3"
                data-testid={`lib-entry-${key.replace(/[\s:]/g, "-").toLowerCase()}`}
              >
                <div className="flex items-center gap-2 flex-wrap">
                  <span
                    className={`inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full border ${
                      type === "Hospital"
                        ? "bg-blue-500/10 border-blue-400/25 text-blue-300"
                        : "bg-teal-500/10 border-teal-400/25 text-teal-300"
                    }`}
                  >
                    {type === "Hospital" ? <Hospital size={10} /> : <Stethoscope size={10} />} {type}
                  </span>
                  <p className="font-bold text-sm">{displayCategory}</p>
                </div>
                {shownSteps.map((step, i) => (
                  <div key={i} className="flex flex-col gap-1 pl-3 border-l-2 border-primary/30">
                    <p className="text-sm font-semibold">Step {i + 1}: {step.title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            ))
          )}
          <p className="text-center text-xs text-muted-foreground pb-2">
            {entries.length} entr{entries.length === 1 ? "y" : "ies"} shown
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}

// ── Live Empty State ───────────────────────────────────────────────────────

function LiveEmptyState({ onCreateDemo, onBrowseLibrary }: { onCreateDemo: () => void; onBrowseLibrary: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-20 text-center" data-testid="container-live-empty">
      <div className="w-20 h-20 rounded-full border-2 border-border flex items-center justify-center bg-muted/20">
        <GraduationCap size={36} className="text-muted-foreground" />
      </div>
      <div className="max-w-md">
        <h3 className="text-xl font-bold mb-2" data-testid="text-empty-title">All learners are on track.</h3>
        <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-empty-body">
          Guided Education Plans appear here when a learner scores below the passing threshold on a final test. Browse the library to see what education plans are available.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button size="lg" variant="outline" onClick={onBrowseLibrary} data-testid="button-browse-library-empty">
          <Library size={16} className="mr-2" /> Browse Education Library
        </Button>
        <Button size="lg" variant="ghost" onClick={onCreateDemo} data-testid="button-create-plan-empty">
          <Plus size={16} className="mr-2" /> Create Demo Plan
        </Button>
      </div>
    </div>
  );
}

// ── Weak Learners Section ──────────────────────────────────────────────────

interface WeakLearner {
  userId: number;
  username: string;
  firstName: string;
  lastName: string;
  overallAccuracy: number;
  organizationType: string;
  weakAreas: { category: string; facilityType: "Hospital" | "ASC"; score: number }[];
}

function WeakLearnersSection({ onCreatePlan }: {
  onCreatePlan: (prefill: PlanPrefill) => void;
}) {
  const { data: weakLearners, isLoading } = useQuery<WeakLearner[]>({
    queryKey: ["/api/admin/weak-learners"],
  });

  if (isLoading) {
    return (
      <div className="rounded-2xl border border-border bg-card p-6 flex items-center gap-3" data-testid="container-weak-learners-loading">
        <Loader2 size={18} className="animate-spin text-muted-foreground" />
        <p className="text-sm text-muted-foreground">Loading learner performance data…</p>
      </div>
    );
  }

  if (!weakLearners?.length) {
    return (
      <div className="rounded-2xl border border-border bg-card p-6 text-center" data-testid="container-weak-learners-empty">
        <CheckCircle2 size={28} className="mx-auto text-emerald-400 mb-3" />
        <p className="text-base font-bold mb-1">All learners are on track</p>
        <p className="text-sm text-muted-foreground">No learners with scores below 75% were found in your facility.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4" data-testid="container-weak-learners">
      <div className="flex items-center gap-2">
        <AlertTriangle size={15} className="text-orange-500 flex-shrink-0" />
        <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Learners Below Passing Threshold ({weakLearners.length})
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {weakLearners.map((learner) => {
          const displayName = learner.firstName
            ? `${learner.firstName} ${learner.lastName}`.trim()
            : learner.username;
          const worstArea = learner.weakAreas[0];
          const isHighRisk = learner.overallAccuracy < 50;
          return (
            <div
              key={learner.userId}
              className={`rounded-2xl border p-4 flex flex-col gap-3 ${isHighRisk ? "border-red-500/30 bg-red-500/5" : "border-orange-500/25 bg-orange-500/5"}`}
              data-testid={`card-weak-learner-${learner.userId}`}
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="font-bold text-base leading-snug">{displayName}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Overall accuracy: <span className={`font-semibold ${isHighRisk ? "text-red-400" : "text-orange-400"}`}>{learner.overallAccuracy}%</span>
                    {isHighRisk && <span className="ml-2 text-[10px] font-bold uppercase tracking-wider text-red-400">High Risk</span>}
                  </p>
                </div>
                <div className={`shrink-0 text-3xl font-black leading-none ${isHighRisk ? "text-red-400" : "text-orange-400"}`}>
                  {learner.overallAccuracy}%
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">Weak Areas</p>
                {learner.weakAreas.map((area, i) => (
                  <div key={i} className="flex items-center justify-between gap-2 text-sm">
                    <span className="text-foreground/80 truncate">{area.category}</span>
                    <span className={`font-bold flex-shrink-0 ${area.score < 50 ? "text-red-400" : "text-orange-400"}`}>{area.score}%</span>
                  </div>
                ))}
              </div>
              {worstArea && (
                <button
                  type="button"
                  className="mt-1 w-full flex items-center justify-center gap-1.5 py-2 rounded-xl border border-orange-500/40 bg-background text-orange-500 text-sm font-bold hover:bg-orange-500/10 transition-colors"
                  onClick={() => onCreatePlan({
                    learner: displayName,
                    facilityType: worstArea.facilityType,
                    category: worstArea.category,
                    score: worstArea.score,
                  })}
                  data-testid={`button-create-plan-${learner.userId}`}
                >
                  <Plus size={13} /> Create Guided Education Plan
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────

export default function CorrectiveActionPage() {
  const [, setLocation] = useLocation();
  const facilityAuth = useFacilityAuth();
  const { facilityId: scopedFacilityId, facilityName: scopedFacilityName, isSuperAdmin } = facilityAuth;

  const [dataMode, setDataMode] = useState<DataMode>("demo");
  const [demoPlans, setDemoPlans] = useState<RemediationPlan[]>(DEMO_REMEDIATION_PLANS);
  const [livePlans, setLivePlans] = useState<RemediationPlan[]>([]);
  const [activeStatus, setActiveStatus] = useState<PlanStatus | "All">("All");
  const [facilityTypeFilter, setFacilityTypeFilter] = useState<"All" | "Hospital" | "ASC">("All");
  const [createOpen, setCreateOpen] = useState(false);
  const [prefillData, setPrefillData] = useState<PlanPrefill | undefined>(undefined);
  const [libraryOpen, setLibraryOpen] = useState(false);
  const filterInitialized = useRef(false);

  function openWithPrefill(prefill: PlanPrefill) {
    setPrefillData(prefill);
    setCreateOpen(true);
  }

  // Auto-default facility type filter to the logged-in user's org type.
  // Hospital users see Hospital plans by default; ASC users see ASC plans.
  // SuperAdmins default to All (they oversee both).
  useEffect(() => {
    if (filterInitialized.current) return;
    if (!facilityAuth.user) return;
    filterInitialized.current = true;
    if (isSuperAdmin) return;
    const orgType = facilityAuth.user.organizationType;
    setFacilityTypeFilter(orgType === "asc" ? "ASC" : "Hospital");
  }, [facilityAuth.user, isSuperAdmin]);

  const sourcePlans = dataMode === "demo" ? demoPlans : livePlans;

  const facilityPlans = useMemo(() => {
    if (dataMode === "demo") return sourcePlans;
    if (isSuperAdmin) return sourcePlans;
    if (!scopedFacilityId) return [];
    return sourcePlans.filter((p) => p.facilityId === scopedFacilityId);
  }, [sourcePlans, dataMode, isSuperAdmin, scopedFacilityId]);

  const typedPlans = useMemo(() =>
    facilityTypeFilter === "All"
      ? facilityPlans
      : facilityPlans.filter((p) => p.facilityType === facilityTypeFilter),
    [facilityPlans, facilityTypeFilter]
  );

  const countOf = (s: PlanStatus) => typedPlans.filter((p) => p.status === s).length;
  const overdueCount = typedPlans.filter(isOverdue).length;

  const filtered = typedPlans.filter((p) =>
    activeStatus === "All" || p.status === activeStatus
  );

  function handleStatusChange(id: string, newStatus: PlanStatus) {
    if (dataMode === "demo") {
      setDemoPlans((prev) => prev.map((p) => p.id === id ? { ...p, status: newStatus } : p));
    } else {
      setLivePlans((prev) => prev.map((p) => p.id === id ? { ...p, status: newStatus } : p));
    }
  }

  function handleSave(plan: RemediationPlan) {
    if (dataMode === "live") {
      setLivePlans((prev) => [plan, ...prev]);
    } else {
      setDemoPlans((prev) => [plan, ...prev]);
    }
    auditLog({
      userId: facilityAuth.user?.id ?? null,
      leadershipRole: (facilityAuth.user as any)?.leadershipRole ?? "learner",
      facilityId: scopedFacilityId,
      facilityName: scopedFacilityName,
      action: "education_plan_created",
      meta: { planId: plan.id, category: plan.category, score: plan.quizScore },
    });
  }

  const showFacility = isSuperAdmin && dataMode !== "demo";

  return (
    <div className="min-h-screen flex flex-col pb-20">

      {/* ── Header ── */}
      <div className="sticky top-[58px] z-40 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 py-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4 sm:py-4 sm:px-6">
          {/* Row 1: back + title */}
          <div className="flex items-center gap-3 min-w-0">
            <Button variant="ghost" size="icon" onClick={() => setLocation("/leadership")} data-testid="button-back">
              <ArrowLeft size={20} />
            </Button>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <GraduationCap size={16} className="text-primary flex-shrink-0" />
                <h2 className="font-bold text-lg" data-testid="text-page-title">Guided Education Plans</h2>
                {dataMode === "demo" ? (
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full border border-orange-500/50 bg-orange-500/20 text-orange-500" data-testid="badge-mode-demo">
                    <FlaskConical size={10} /> Demo Data
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full border border-green-500/40 bg-green-500/15 text-green-400" data-testid="badge-mode-live">
                    <Database size={10} /> Live Data
                  </span>
                )}
              </div>
              <p className="text-xs text-muted-foreground truncate" data-testid="text-facility-scope">
                {dataMode === "demo" ? "Sample data mode" : scopedFacilityName} · Final test only · {PASSING_THRESHOLD}% passing threshold
              </p>
            </div>
          </div>
          {/* Row 2 on mobile / right side on desktop: action buttons */}
          <div className="flex gap-2 flex-wrap sm:flex-nowrap sm:ml-auto sm:flex-shrink-0">
            <Button size="sm" variant="outline" onClick={() => setLibraryOpen(true)} data-testid="button-browse-library-header">
              <Library size={14} className="mr-1.5" /> Browse Library
            </Button>
            <Button size="sm" onClick={() => setCreateOpen(true)} data-testid="button-create-plan-header">
              <Plus size={14} className="mr-1.5" /> Create Demo Plan
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-1 max-w-5xl mx-auto w-full px-6 py-7 flex flex-col gap-7">

        {/* ── Demo / Live Toggle ── */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 rounded-2xl border border-border bg-card p-1.5" data-testid="container-data-mode-toggle">
            <button
              onClick={() => { setDataMode("demo"); setActiveStatus("All"); }}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-bold transition-all ${
                dataMode === "demo"
                  ? "bg-orange-500/20 text-orange-500 border border-orange-500/50"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/4"
              }`}
              data-testid="button-mode-demo"
            >
              <FlaskConical size={15} /> Demo Data
            </button>
            <button
              onClick={() => { setDataMode("live"); setActiveStatus("All"); }}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-bold transition-all ${
                dataMode === "live"
                  ? "bg-primary/20 text-primary border border-primary/40"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/4"
              }`}
              data-testid="button-mode-live"
            >
              <Database size={15} /> Live Data
            </button>
          </div>
          {dataMode === "demo" && (
            <div className="flex items-start gap-2.5 rounded-xl border border-orange-500/40 bg-orange-500/10 px-4 py-3" data-testid="banner-demo-mode">
              <FlaskConical size={14} className="text-orange-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-orange-500/90 leading-relaxed">
                <span className="font-bold text-orange-500">Demo Data - </span>
                Sample guided education plans for demonstration. In production, plans are assigned automatically when a learner scores below the passing threshold on a final test.
              </p>
            </div>
          )}
        </div>

        {/* ── Purpose Statement ── */}
        <PurposeBanner />

        {/* ── How to Read ── */}
        <HowToReadBox />

        {/* ── Education Plan Directory ── */}
        <PlanDirectoryCard facilityTypeFilter={facilityTypeFilter} />

        {/* ── Stat Summary ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3" data-testid="container-stats">
          {(["Assigned", "In Progress", "Completed", "Verified"] as PlanStatus[]).map((s) => {
            const cfg = statusConfig(s);
            const Icon = cfg.icon;
            return (
              <button
                key={s}
                onClick={() => setActiveStatus(activeStatus === s ? "All" : s)}
                className={`rounded-2xl border-2 p-5 flex flex-col items-center gap-2 transition-all text-center ${
                  activeStatus === s
                    ? "border-primary/40 bg-primary/10"
                    : "border-border bg-card hover:border-primary/25 hover:bg-card/80"
                }`}
                data-testid={`stat-${s.toLowerCase().replace(/ /g, "-")}`}
              >
                <Icon size={18} className={cfg.color} />
                <span className="text-4xl font-black leading-none">{countOf(s)}</span>
                <span className="text-xs text-muted-foreground font-bold leading-tight">{s}</span>
              </button>
            );
          })}
        </div>

        {/* Overdue callout */}
        {overdueCount > 0 && (
          <div className="rounded-2xl border border-red-500/30 bg-red-500/8 px-5 py-3.5 flex items-center gap-3" data-testid="banner-overdue">
            <AlertTriangle size={18} className="text-red-400 flex-shrink-0" />
            <p className="text-base font-bold text-red-400">
              {overdueCount} plan{overdueCount > 1 ? "s" : ""} overdue. Learner follow-up required.
            </p>
          </div>
        )}

        {/* ── Facility Type Tabs ── */}
        <div className="flex items-center gap-2" data-testid="container-type-filter">
          {(["All", "Hospital", "ASC"] as const).map((t) => {
            const count = t === "All" ? facilityPlans.length : facilityPlans.filter((p) => p.facilityType === t).length;
            const Icon = t === "Hospital" ? Hospital : t === "ASC" ? Stethoscope : null;
            return (
              <button
                key={t}
                onClick={() => { setFacilityTypeFilter(t); setActiveStatus("All"); }}
                className={`flex items-center gap-1.5 text-sm font-bold px-4 py-2 rounded-xl border-2 transition-all ${
                  facilityTypeFilter === t
                    ? t === "Hospital"
                      ? "bg-blue-500/20 border-blue-400/60 text-blue-300"
                      : t === "ASC"
                        ? "bg-teal-500/20 border-teal-400/60 text-teal-300"
                        : "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                }`}
                data-testid={`filter-type-${t.toLowerCase()}`}
              >
                {Icon && <Icon size={13} />}
                {t === "All" ? `All Facilities (${count})` : `${t} (${count})`}
              </button>
            );
          })}
        </div>

        {/* ── Status Filter Row ── */}
        <div className="flex flex-wrap gap-2.5 items-center" data-testid="container-filters">
          {(["All", ...ALL_STATUSES] as const).map((s) => (
            <button
              key={s}
              onClick={() => setActiveStatus(s === "All" ? "All" : s as PlanStatus)}
              className={`text-sm font-bold px-4 py-2 rounded-xl border-2 transition-all ${
                activeStatus === s
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
              }`}
              data-testid={`filter-status-${s.toLowerCase().replace(/ /g, "-")}`}
            >
              {s === "All" ? `All (${typedPlans.length})` : `${s} (${countOf(s)})`}
            </button>
          ))}
          {activeStatus !== "All" && (
            <Button variant="ghost" size="sm" onClick={() => setActiveStatus("All")} data-testid="button-clear-filters">
              <X size={14} className="mr-1" /> Clear filter
            </Button>
          )}
        </div>

        {/* ── Struggling Learners (live mode only) ── */}
        {dataMode === "live" && (
          <WeakLearnersSection onCreatePlan={openWithPrefill} />
        )}

        {/* ── Cards area ── */}
        {dataMode === "live" && livePlans.length === 0 ? (
          <LiveEmptyState onCreateDemo={() => setCreateOpen(true)} onBrowseLibrary={() => setLibraryOpen(true)} />
        ) : (
          <div data-testid="container-plan-cards">
            {filtered.length === 0 ? (
              <div className="text-center py-16 text-muted-foreground" data-testid="text-no-results">
                <Database size={40} className="mx-auto mb-4 opacity-30" />
                <p className="text-lg font-semibold">No guided education plans match the selected filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {filtered.map((plan) => (
                  <PlanCard
                    key={plan.id}
                    plan={plan}
                    showFacility={showFacility}
                    onStatusChange={handleStatusChange}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {facilityPlans.length > 0 && filtered.length > 0 && (
          <p className="text-center text-sm text-muted-foreground pb-4" data-testid="text-result-count">
            Showing {filtered.length} of {facilityPlans.length} plan{facilityPlans.length !== 1 ? "s" : ""}
            {dataMode === "demo" && " (demo data)"}
          </p>
        )}
      </div>

      <CreatePlanDialog
        open={createOpen}
        onClose={() => { setCreateOpen(false); setPrefillData(undefined); }}
        onSave={handleSave}
        defaultFacilityId={scopedFacilityId ?? ""}
        defaultFacilityName={scopedFacilityName ?? ""}
        prefill={prefillData}
      />

      <PlanLibraryDrawer open={libraryOpen} onClose={() => setLibraryOpen(false)} />
    </div>
  );
}
