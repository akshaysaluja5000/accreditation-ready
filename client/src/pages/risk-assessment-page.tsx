import { useState } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, ShieldAlert, Sparkles, CheckCircle2, BookOpen,
  Calendar, AlertTriangle, ChevronDown, ChevronUp, Loader2,
  RotateCcw, Target, Lightbulb, ClipboardList, Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/lib/auth";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { RiskAssessment } from "@shared/schema";

const HOSPITAL_RISK_AREAS = [
  "Transport of Instruments",
  "Environment & Surfaces",
  "Clean vs. Dirty Segregation",
  "Sterile Storage",
  "Instrument Integrity",
  "Facilities & Equipment",
  "SPD & Decontamination",
  "OR & Sterile Technique",
  "Surgical Safety & Consent",
  "Patient Care & Documentation",
  "EOC & Safety Compliance",
  "Anesthesia & Sedation",
  "Medication Management",
  "National Patient Safety Goals",
  "Infection Prevention & Control",
  "Patient Rights & Responsibilities",
  "Life Safety",
];

const ASC_RISK_AREAS = [
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

interface ActionPlan {
  weeklySchedule: { week: string; focus: string; tasks: string[] }[];
  studyChapters: { chapterName: string; reason: string }[];
  keyRisks: string[];
  coachingTip: string;
}

interface AssessmentResponse {
  assessment: RiskAssessment | null;
}

interface GenerateResponse {
  assessment: RiskAssessment;
  actionPlan: ActionPlan;
}

function WeekCard({ week, focus, tasks, index }: { week: string; focus: string; tasks: string[]; index: number }) {
  const colors = [
    { bg: "bg-primary/8 border-primary/25", badge: "bg-primary/15 text-primary", dot: "bg-primary" },
    { bg: "bg-chart-2/8 border-chart-2/25", badge: "bg-chart-2/15 text-chart-2", dot: "bg-chart-2" },
    { bg: "bg-violet-500/8 border-violet-500/25", badge: "bg-violet-500/15 text-violet-600", dot: "bg-violet-500" },
    { bg: "bg-chart-4/8 border-chart-4/25", badge: "bg-chart-4/15 text-chart-4", dot: "bg-chart-4" },
  ];
  const c = colors[index % colors.length];
  return (
    <div className={`rounded-2xl border p-4 flex flex-col gap-3 ${c.bg}`} data-testid={`card-week-${index}`}>
      <div className="flex items-center gap-2">
        <span className={`text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-full ${c.badge}`}>{week}</span>
        <span className="text-sm font-bold text-foreground">{focus}</span>
      </div>
      <ul className="flex flex-col gap-2">
        {tasks.map((task, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.dot}`} />
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ActionPlanView({ plan, riskAreas, onReset }: { plan: ActionPlan; riskAreas: string[]; onReset: () => void }) {
  const [, setLocation] = useLocation();
  const [chaptersOpen, setChaptersOpen] = useState(true);
  const [risksOpen, setRisksOpen] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col gap-6"
    >
      {/* Coaching tip */}
      <div className="rounded-2xl border border-primary/25 bg-primary/6 px-5 py-4 flex items-start gap-3">
        <Lightbulb size={18} className="text-primary flex-shrink-0 mt-0.5" />
        <p className="text-sm text-foreground/90 leading-relaxed italic">"{plan.coachingTip}"</p>
      </div>

      {/* Selected risk areas */}
      <div className="flex flex-col gap-2">
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Your identified risk areas</p>
        <div className="flex flex-wrap gap-2">
          {riskAreas.map((area, i) => (
            <span key={i} className="px-3 py-1 rounded-full text-xs font-semibold bg-destructive/10 text-destructive border border-destructive/20" data-testid={`badge-risk-area-${i}`}>
              {area}
            </span>
          ))}
        </div>
      </div>

      {/* Weekly schedule */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Calendar size={16} className="text-primary" />
          <h3 className="font-bold text-sm">4-Week Study Schedule</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {plan.weeklySchedule.map((w, i) => (
            <WeekCard key={i} index={i} week={w.week} focus={w.focus} tasks={w.tasks} />
          ))}
        </div>
      </div>

      {/* Study chapters */}
      <div className="rounded-2xl border border-border bg-card overflow-hidden">
        <button
          className="w-full flex items-center gap-3 px-5 py-4 text-left hover:bg-muted/20 transition-colors"
          onClick={() => setChaptersOpen(v => !v)}
          data-testid="button-toggle-chapters"
        >
          <BookOpen size={16} className="text-chart-2 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold">Recommended Study Chapters</p>
            <p className="text-xs text-muted-foreground mt-0.5">{plan.studyChapters.length} chapters prioritized for your gaps</p>
          </div>
          {chaptersOpen ? <ChevronUp size={16} className="text-muted-foreground" /> : <ChevronDown size={16} className="text-muted-foreground" />}
        </button>
        <AnimatePresence initial={false}>
          {chaptersOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="border-t border-border/40 px-5 pb-4 pt-3 flex flex-col gap-3">
                {plan.studyChapters.map((ch, i) => (
                  <div key={i} className="flex items-start gap-3" data-testid={`item-chapter-${i}`}>
                    <div className="w-6 h-6 rounded-lg bg-chart-2/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[10px] font-black text-chart-2">{i + 1}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <button
                        onClick={() => setLocation("/handbook")}
                        className="text-sm font-semibold text-primary hover:underline text-left"
                        data-testid={`button-chapter-link-${i}`}
                      >
                        {ch.chapterName}
                      </button>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{ch.reason}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Key risks */}
      <div className="rounded-2xl border border-orange-500/25 bg-orange-500/5 overflow-hidden">
        <button
          className="w-full flex items-center gap-3 px-5 py-4 text-left hover:bg-orange-500/5 transition-colors"
          onClick={() => setRisksOpen(v => !v)}
          data-testid="button-toggle-key-risks"
        >
          <AlertTriangle size={16} className="text-orange-500 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold">Surveyor Hot Buttons</p>
            <p className="text-xs text-muted-foreground mt-0.5">Critical items surveyors look for in your weak areas</p>
          </div>
          {risksOpen ? <ChevronUp size={16} className="text-muted-foreground" /> : <ChevronDown size={16} className="text-muted-foreground" />}
        </button>
        <AnimatePresence initial={false}>
          {risksOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="border-t border-orange-500/20 px-5 pb-4 pt-3 flex flex-col gap-2">
                {plan.keyRisks.map((risk, i) => (
                  <div key={i} className="flex items-start gap-2" data-testid={`item-key-risk-${i}`}>
                    <ShieldAlert size={13} className="text-orange-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground/85 leading-relaxed">{risk}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Redo */}
      <div className="flex items-center gap-3 pt-2">
        <Button variant="outline" size="sm" onClick={onReset} data-testid="button-redo-assessment" className="gap-1.5">
          <RotateCcw size={14} />
          Update My Risks
        </Button>
        <Button size="sm" onClick={() => setLocation("/handbook")} data-testid="button-go-to-handbook" className="gap-1.5">
          <BookOpen size={14} />
          Open Handbook
        </Button>
      </div>
    </motion.div>
  );
}

export default function RiskAssessmentPage() {
  const { user } = useAuth();
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const module = (user?.organizationType || "hospital") as string;
  const isAsc = module === "asc";
  const riskAreaOptions = isAsc ? ASC_RISK_AREAS : HOSPITAL_RISK_AREAS;

  const [selected, setSelected] = useState<string[]>([]);
  const [notes, setNotes] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [liveActionPlan, setLiveActionPlan] = useState<ActionPlan | null>(null);

  const { data, isLoading: loadingExisting } = useQuery<AssessmentResponse>({
    queryKey: ["/api/risk-assessment", module],
    queryFn: () => fetch(`/api/risk-assessment?module=${module}`, { credentials: "include" }).then(r => r.json()),
  });

  const existing = data?.assessment ?? null;
  const existingPlan: ActionPlan | null = (() => {
    if (!existing?.actionPlan) return null;
    try { return JSON.parse(existing.actionPlan) as ActionPlan; } catch { return null; }
  })();
  const existingRiskAreas: string[] = (() => {
    if (!existing?.riskAreas) return [];
    try { return JSON.parse(existing.riskAreas) as string[]; } catch { return []; }
  })();

  const displayPlan = liveActionPlan ?? existingPlan;
  const displayRiskAreas = liveActionPlan ? selected : existingRiskAreas;

  const generateMutation = useMutation({
    mutationFn: async (data: { module: string; riskAreas: string[]; notes: string }) => {
      const res = await apiRequest("POST", "/api/risk-assessment", data);
      return res.json() as Promise<GenerateResponse>;
    },
    onSuccess: (result) => {
      setLiveActionPlan(result.actionPlan);
      setShowForm(false);
      queryClient.invalidateQueries({ queryKey: ["/api/risk-assessment"] });
      toast({ title: "Action plan generated!", description: "Your personalized compliance plan is ready." });
    },
    onError: (err: any) => {
      toast({ title: "Generation failed", description: err?.message || "Unable to generate action plan right now.", variant: "destructive" });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async () => {
      await apiRequest("DELETE", `/api/risk-assessment?module=${module}`);
    },
    onSuccess: () => {
      setShowForm(false);
      setSelected([]);
      setNotes("");
      setLiveActionPlan(null);
      queryClient.invalidateQueries({ queryKey: ["/api/risk-assessment"] });
      toast({ title: "Plan cleared", description: "Your risk assessment plan has been removed." });
    },
    onError: () => {
      toast({ title: "Could not clear plan", description: "Please try again.", variant: "destructive" });
    },
  });

  function toggleArea(area: string) {
    setSelected(prev => prev.includes(area) ? prev.filter(a => a !== area) : [...prev, area]);
  }

  function handleStartForm() {
    setSelected(existingRiskAreas.length > 0 ? existingRiskAreas : []);
    setNotes(existing?.notes || "");
    setShowForm(true);
    setLiveActionPlan(null);
  }

  function handleSubmit() {
    if (selected.length === 0) {
      toast({ title: "Select at least one risk area", description: "Choose the areas where you would like to improve.", variant: "destructive" });
      return;
    }
    generateMutation.mutate({ module, riskAreas: selected, notes });
  }

  const hasPlan = !!displayPlan;

  return (
    <div className="min-h-screen pb-20">
      {/* Sub-header */}
      <div className="sticky top-[58px] z-40 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="max-w-3xl mx-auto px-6 py-3 flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => setLocation("/")} data-testid="button-back-dashboard" aria-label="Back">
            <ArrowLeft size={20} />
          </Button>
          <div className="flex-1 min-w-0">
            <h1 className="font-bold text-base text-foreground">My Risk Self-Assessment</h1>
            <p className="text-xs text-muted-foreground">Identify your gaps · Get a personalized action plan</p>
          </div>
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <ShieldAlert size={14} className="text-orange-500" />
            <span className="text-xs font-semibold text-orange-500 hidden sm:inline">Risk-Based</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 pt-8 flex flex-col gap-6">

        {loadingExisting ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 size={28} className="animate-spin text-primary" />
          </div>
        ) : (

          <>
            {/* No plan yet + no form open */}
            {!hasPlan && !showForm && (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-6">
                <div className="rounded-2xl border-2 border-primary/20 bg-primary/4 p-6 flex flex-col gap-4 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-primary/15 flex items-center justify-center">
                    <Target size={24} className="text-primary" />
                  </div>
                  <div>
                    <h2 className="font-bold text-lg">Build your personal compliance plan</h2>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                      Select the areas where you feel least confident. The AI will generate a personalized 4-week study schedule, chapter recommendations, and a list of surveyor hot buttons to know cold.
                    </p>
                  </div>
                  <Button onClick={handleStartForm} data-testid="button-start-assessment" className="gap-2">
                    <Sparkles size={15} />
                    Start Self-Assessment
                  </Button>
                </div>

                {/* Explainer cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { icon: ClipboardList, label: "Pick your gaps", desc: "Choose any areas where you feel less confident or unprepared" },
                    { icon: Sparkles, label: "AI builds your plan", desc: "Get a 4-week schedule tailored to your specific weak areas" },
                    { icon: BookOpen, label: "Study & improve", desc: "Follow chapter links and surveyor hot-button reminders" },
                  ].map(({ icon: Icon, label, desc }, i) => (
                    <div key={i} className="rounded-2xl border border-border bg-card p-4 flex flex-col gap-2">
                      <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon size={16} className="text-primary" />
                      </div>
                      <p className="text-sm font-bold">{label}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Existing plan view */}
            {hasPlan && !showForm && (
              <ActionPlanView plan={displayPlan!} riskAreas={displayRiskAreas} onReset={handleStartForm} />
            )}

            {/* Assessment form */}
            {showForm && (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-6">

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="font-bold text-base">Select your risk areas</h2>
                    <p className="text-xs text-muted-foreground mt-0.5">Check every area where you feel uncertain or less prepared</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {existing && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteMutation.mutate()}
                        disabled={deleteMutation.isPending}
                        data-testid="button-clear-plan"
                        className="gap-1.5 text-destructive hover:text-destructive hover:bg-destructive/8"
                      >
                        {deleteMutation.isPending ? (
                          <Loader2 size={13} className="animate-spin" />
                        ) : (
                          <Trash2 size={13} />
                        )}
                        Clear plan
                      </Button>
                    )}
                    {hasPlan && (
                      <Button variant="ghost" size="sm" onClick={() => setShowForm(false)} data-testid="button-cancel-form">
                        Cancel
                      </Button>
                    )}
                  </div>
                </div>

                {/* Area selection grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2" data-testid="grid-risk-areas">
                  {riskAreaOptions.map((area) => {
                    const isSelected = selected.includes(area);
                    return (
                      <button
                        key={area}
                        onClick={() => toggleArea(area)}
                        data-testid={`button-risk-area-${area.replace(/\s+/g, "-").toLowerCase()}`}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 text-left transition-all ${
                          isSelected
                            ? "border-primary bg-primary/8 shadow-sm"
                            : "border-border bg-card hover:border-primary/40 hover:bg-primary/3"
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                          isSelected ? "bg-primary border-primary" : "border-border"
                        }`}>
                          {isSelected && <CheckCircle2 size={12} className="text-white" />}
                        </div>
                        <span className={`text-sm font-medium leading-tight ${isSelected ? "text-foreground" : "text-foreground/80"}`}>
                          {area}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Notes */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Additional context (optional)
                  </label>
                  <Textarea
                    placeholder="E.g. I struggle most with documentation timing, and recently got feedback about sterile field breaks during complex cases..."
                    value={notes}
                    onChange={e => setNotes(e.target.value)}
                    className="resize-none min-h-[90px] text-sm"
                    maxLength={2000}
                    data-testid="textarea-assessment-notes"
                  />
                  <p className="text-xs text-muted-foreground text-right">{notes.length}/2000</p>
                </div>

                {/* Selected count */}
                {selected.length > 0 && (
                  <div className="flex items-center gap-2 text-sm text-foreground/70">
                    <CheckCircle2 size={15} className="text-primary" />
                    <span><strong className="text-foreground">{selected.length}</strong> risk area{selected.length !== 1 ? "s" : ""} selected</span>
                  </div>
                )}

                {/* Generate button */}
                <Button
                  onClick={handleSubmit}
                  disabled={selected.length === 0 || generateMutation.isPending}
                  className="gap-2 self-start"
                  data-testid="button-generate-plan"
                  size="lg"
                >
                  {generateMutation.isPending ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Generating your plan...
                    </>
                  ) : (
                    <>
                      <Sparkles size={16} />
                      Generate My Action Plan
                    </>
                  )}
                </Button>
              </motion.div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
