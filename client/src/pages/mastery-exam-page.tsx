import { useState, useEffect, useCallback } from "react";
import { useLocation } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Home, Loader2, Lock, ChevronRight, ChevronDown, ChevronUp, Trophy, Crown, Sparkles, Save, AlertTriangle, CheckCircle2, XCircle, TrendingUp, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useAuth } from "@/lib/auth";
import { findLevelById } from "@shared/all-levels";
import type { MasteryResult } from "@shared/schema";

interface RichMasteryResult extends MasteryResult {
  detailedResults?: DetailedResult[];
  sectionScores?: Record<string, { correct: number; total: number }>;
}

interface MasteryQ {
  id: string;
  sectionId: string;
  question: string;
  options: string[];
  shuffleMap: number[];
}

interface Eligibility {
  eligible: boolean;
  completedSections: string[];
  missingSections: string[];
  completedCount: number;
  levelsRequired: number;
  isAdmin: boolean;
}

interface SavedSession {
  questions: MasteryQ[];
  answers: { questionId: string; selectedIndex: number }[];
  currentQuestion: number;
}

interface DetailedResult {
  questionId: string;
  sectionId: string;
  question: string;
  options: string[];
  selectedIndex: number;
  correctIndex: number;
  correct: boolean;
  explanation: string;
}

interface SubmitResponse {
  score: number;
  totalQuestions: number;
  resultId: number;
  detailedResults: DetailedResult[];
  sectionScores: Record<string, { correct: number; total: number }>;
}

const SECTION_NAMES: Record<string, string> = {
  transport: "Transport of Instruments",
  environment: "Environment & Surfaces",
  segregation: "Clean vs. Dirty",
  sterile_storage: "Sterile Storage",
  instruments: "Instrument Integrity",
  facilities: "Facilities & Equipment",
  spd_decontam: "SPD & Decontamination",
  or_sterile_field: "OR & Sterile Technique",
  universal_protocol: "Surgical Safety & Consent",
  patient_care_docs: "Patient Care & Documentation",
  eoc_safety: "EOC & Safety Compliance",
};

export default function MasteryExamPage() {
  const [, setLocation] = useLocation();
  const { user } = useAuth();
  const [phase, setPhase] = useState<"loading" | "intro" | "quiz" | "results">("loading");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<({ questionId: string; selectedIndex: number } | null)[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [resultData, setResultData] = useState<SubmitResponse | null>(null);
  const [questions, setQuestions] = useState<MasteryQ[] | null>(null);
  const [showExitDialog, setShowExitDialog] = useState(false);
  const [expandedQuestions, setExpandedQuestions] = useState<Set<number>>(new Set());
  const [showAllQuestions, setShowAllQuestions] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const { data: eligibility, isLoading: eligLoading } = useQuery<Eligibility>({
    queryKey: ["/api/mastery/eligibility"],
  });

  const { data: pastResults } = useQuery<RichMasteryResult[]>({
    queryKey: ["/api/mastery/results"],
  });

  const { data: savedSession, isLoading: sessionLoading } = useQuery<SavedSession | null>({
    queryKey: ["/api/mastery/session"],
    staleTime: 0,
    refetchOnMount: "always",
  });

  const hasSession = !!(savedSession && savedSession.questions && savedSession.questions.length > 0);

  useEffect(() => {
    if (sessionLoading || eligLoading) return;
    if (phase === "loading") setPhase("intro");
  }, [sessionLoading, eligLoading, phase]);

  const fetchQuestions = async () => {
    const res = await fetch("/api/mastery/questions", { credentials: "include" });
    if (!res.ok) throw new Error("Failed to load questions");
    const data = await res.json();
    return data as MasteryQ[];
  };

  const buildShuffleMaps = (qs: MasteryQ[]): Record<string, number[]> => {
    const maps: Record<string, number[]> = {};
    for (const q of qs) {
      if (q.shuffleMap) maps[q.id] = q.shuffleMap;
    }
    return maps;
  };

  const saveMutation = useMutation({
    mutationFn: async (params: { questionOrder: string[]; answers: { questionId: string; selectedIndex: number }[]; currentQuestion: number; shuffleMaps: Record<string, number[]> }) => {
      await apiRequest("POST", "/api/mastery/session", params);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/mastery/session"] });
    },
  });

  const deleteSavedSession = useMutation({
    mutationFn: async () => {
      await apiRequest("DELETE", "/api/mastery/session");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/mastery/session"] });
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (params: { answers: { questionId: string; selectedIndex: number }[]; shuffleMaps: Record<string, number[]> }) => {
      const res = await apiRequest("POST", "/api/mastery/submit", params);
      return res.json() as Promise<SubmitResponse>;
    },
    onSuccess: (data) => {
      setResultData(data);
      setPhase("results");
      setSubmitError(null);
      queryClient.invalidateQueries({ queryKey: ["/api/mastery/results"] });
      queryClient.invalidateQueries({ queryKey: ["/api/mastery/session"] });
    },
    onError: (err: Error) => {
      setSubmitError(err.message || "Failed to submit. Please try again.");
    },
  });

  const startFresh = async () => {
    const qs = await fetchQuestions();
    setQuestions(qs);
    setCurrentQ(0);
    setAnswers(new Array(qs.length).fill(null));
    setSelected(null);
    setPhase("quiz");
    saveMutation.mutate({
      questionOrder: qs.map(q => q.id),
      answers: [],
      currentQuestion: 0,
      shuffleMaps: buildShuffleMaps(qs),
    });
  };

  const resumeSession = () => {
    if (!savedSession || !savedSession.questions.length) return;
    setQuestions(savedSession.questions);
    const ansArray: ({ questionId: string; selectedIndex: number } | null)[] = new Array(savedSession.questions.length).fill(null);
    for (const a of savedSession.answers) {
      const idx = savedSession.questions.findIndex(q => q.id === a.questionId);
      if (idx >= 0) ansArray[idx] = a;
    }
    setAnswers(ansArray);
    const clampedQ = Math.min(Math.max(0, savedSession.currentQuestion), savedSession.questions.length - 1);
    setCurrentQ(clampedQ);
    setSelected(ansArray[clampedQ]?.selectedIndex ?? null);
    setPhase("quiz");
  };

  const saveAndExit = useCallback(() => {
    if (!questions) return;
    const finalAnswers = [...answers];
    if (selected !== null && questions[currentQ]) {
      finalAnswers[currentQ] = { questionId: questions[currentQ].id, selectedIndex: selected };
    }
    const filledAnswers = finalAnswers.filter((a): a is { questionId: string; selectedIndex: number } => a !== null);
    saveMutation.mutate({
      questionOrder: questions.map(q => q.id),
      answers: filledAnswers,
      currentQuestion: currentQ,
      shuffleMaps: buildShuffleMaps(questions),
    }, {
      onSettled: () => setLocation("/"),
    });
  }, [questions, answers, selected, currentQ, saveMutation, setLocation]);

  const handleSelect = (index: number) => {
    setSelected(index);
  };

  const handleNext = () => {
    if (selected === null || !questions) return;
    const currentQuestion = questions[currentQ];
    const newAnswers = [...answers];
    newAnswers[currentQ] = { questionId: currentQuestion.id, selectedIndex: selected };
    setAnswers(newAnswers);

    if (currentQ + 1 >= questions.length) {
      const filledAnswers = newAnswers.filter((a): a is { questionId: string; selectedIndex: number } => a !== null);
      submitMutation.mutate({ answers: filledAnswers, shuffleMaps: buildShuffleMaps(questions) });
    } else {
      const nextQ = currentQ + 1;
      setCurrentQ(nextQ);
      setSelected(newAnswers[nextQ]?.selectedIndex ?? null);
      const filledAnswers = newAnswers.filter((a): a is { questionId: string; selectedIndex: number } => a !== null);
      saveMutation.mutate({
        questionOrder: questions.map(q => q.id),
        answers: filledAnswers,
        currentQuestion: nextQ,
        shuffleMaps: buildShuffleMaps(questions),
      });
    }
  };

  const handleBack = () => {
    if (currentQ <= 0 || !questions) return;
    const currentQuestion = questions[currentQ];
    const newAnswers = [...answers];
    if (selected !== null) {
      newAnswers[currentQ] = { questionId: currentQuestion.id, selectedIndex: selected };
      setAnswers(newAnswers);
    }
    const prevQ = currentQ - 1;
    setCurrentQ(prevQ);
    setSelected(newAnswers[prevQ]?.selectedIndex ?? null);
    const filledAnswers = newAnswers.filter((a): a is { questionId: string; selectedIndex: number } => a !== null);
    saveMutation.mutate({
      questionOrder: questions.map(q => q.id),
      answers: filledAnswers,
      currentQuestion: prevQ,
      shuffleMaps: buildShuffleMaps(questions),
    });
  };

  const hasPastResults = pastResults && pastResults.length > 0;

  const viewLastResults = () => {
    const last = pastResults?.[0];
    if (!last?.detailedResults || !last?.sectionScores) return;
    setResultData({ score: last.score, totalQuestions: last.totalQuestions, resultId: last.id, detailedResults: last.detailedResults, sectionScores: last.sectionScores });
    setPhase("results");
    setShowAllQuestions(false);
    setExpandedQuestions(new Set());
  };

  if (phase === "loading" || eligLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 size={32} className="animate-spin text-primary" />
      </div>
    );
  }

  if (phase === "intro") {
    const isEligible = eligibility?.eligible;
    const missingSections = eligibility?.missingSections || [];
    const missingNames = missingSections.map(id => {
      const level = findLevelById(id);
      return level?.name || id;
    });

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950/30 dark:via-blue-950/30 dark:to-indigo-950/30">
        <div className="max-w-2xl mx-auto px-4 py-8">
          <Button variant="ghost" size="sm" onClick={() => setLocation("/")} className="mb-6" data-testid="button-mastery-back">
            <ArrowLeft size={16} className="mr-1" /> Back to Dashboard
          </Button>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary to-indigo-600 flex items-center justify-center mb-4 shadow-lg">
              <Crown size={40} className="text-white" />
            </div>
            <h1 className="text-3xl font-black mb-2 bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">Final Assessment</h1>
            <p className="text-muted-foreground text-lg">You've completed the training - now prove you're survey-ready</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.15 }} className="rounded-2xl bg-white/80 dark:bg-card border border-border p-6 mb-6 shadow-sm">
            <h2 className="font-bold text-lg mb-3 text-primary">What to expect</h2>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3"><Sparkles size={16} className="text-primary mt-0.5 flex-shrink-0" /><span>25 advanced questions - a focused sample from each compliance area</span></li>
              <li className="flex items-start gap-3"><Sparkles size={16} className="text-primary mt-0.5 flex-shrink-0" /><span>Answer all questions first - detailed results, correct answers, and explanations are revealed at the end</span></li>
              <li className="flex items-start gap-3"><Sparkles size={16} className="text-primary mt-0.5 flex-shrink-0" /><span>You can go back to change previous answers and save progress to finish later</span></li>
              <li className="flex items-start gap-3"><Sparkles size={16} className="text-primary mt-0.5 flex-shrink-0" /><span>Compare your score to your Diagnostic Quiz to see how far you've come</span></li>
            </ul>
          </motion.div>

          {!isEligible && !hasSession && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.15 }} className="rounded-2xl bg-primary/5 dark:bg-primary/10 border border-primary/30 p-5 mb-6">
              <div className="flex items-center gap-2 mb-3"><Lock size={18} className="text-primary" /><span className="font-bold text-sm text-primary">Not quite there yet</span></div>
              <p className="text-sm text-muted-foreground mb-3">
                Complete at least 5 levels to unlock the Final Assessment.
                You have completed {eligibility?.completedCount ?? 0} of 5 required levels.
              </p>
            </motion.div>
          )}

          {hasSession && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.15 }} className="rounded-2xl bg-primary/5 dark:bg-primary/10 border-2 border-primary/40 p-5 mb-6">
              <div className="flex items-center gap-2 mb-3"><Save size={18} className="text-primary" /><span className="font-bold text-sm text-primary">You have a saved assessment in progress</span></div>
              <p className="text-sm text-muted-foreground mb-4">Question {(savedSession?.currentQuestion || 0) + 1} of {savedSession?.questions?.length || 25} - {savedSession?.answers?.length || 0} answers saved</p>
              <div className="flex gap-3">
                <Button className="flex-1 h-11 font-bold bg-gradient-to-r from-primary to-indigo-600 hover:from-primary/90 hover:to-indigo-700 text-white rounded-xl" onClick={resumeSession} data-testid="button-resume-mastery">Resume Assessment</Button>
                <Button variant="outline" className="flex-1 h-11 font-bold border-primary/30 text-primary rounded-xl" onClick={async () => { await deleteSavedSession.mutateAsync(); startFresh(); }} data-testid="button-start-fresh-mastery">Start Fresh</Button>
              </div>
            </motion.div>
          )}

          {hasPastResults && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.15 }} className="rounded-2xl bg-primary/5 dark:bg-primary/10 border border-border p-4 mb-6">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2"><Trophy size={18} className="text-primary" /><span className="font-semibold text-sm text-primary">Best attempt</span></div>
                {pastResults[0].detailedResults && (
                  <button onClick={viewLastResults} className="text-xs font-semibold text-primary hover:text-primary/70 underline underline-offset-2 transition-colors" data-testid="button-view-last-mastery-results">
                    View full results
                  </button>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                You scored <span className="font-bold text-primary">{pastResults[0].score}/{pastResults[0].totalQuestions}</span> ({Math.round((pastResults[0].score / pastResults[0].totalQuestions) * 100)}%) on {new Date(pastResults[0].completedAt).toLocaleDateString()}
              </p>
            </motion.div>
          )}

          {!hasSession && (isEligible || hasSession) && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.15 }}>
              <Button className="w-full h-14 text-lg font-bold bg-gradient-to-r from-primary to-indigo-600 hover:from-primary/90 hover:to-indigo-700 text-white rounded-xl shadow-md disabled:opacity-50" onClick={startFresh} disabled={!isEligible} data-testid="button-start-mastery">
                {hasPastResults ? "Retake Final Assessment" : "Begin Final Assessment"}
                <ChevronRight size={20} className="ml-2" />
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    );
  }

  if (phase === "quiz") {
    if (!questions || !questions[currentQ]) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950/30 dark:via-blue-950/30 dark:to-indigo-950/30">
          <Loader2 size={32} className="animate-spin text-primary" />
        </div>
      );
    }

    const currentQuestion = questions[currentQ];
    const totalQuestions = questions.length;
    const answeredCount = answers.filter(a => a !== null).length;
    const progressPercent = (answeredCount / totalQuestions) * 100;
    const sectionName = SECTION_NAMES[currentQuestion.sectionId] || currentQuestion.sectionId;

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950/30 dark:via-blue-950/30 dark:to-indigo-950/30">
        {showExitDialog && (
          <div className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center p-4" onClick={() => setShowExitDialog(false)}>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white dark:bg-card rounded-2xl border border-border p-6 max-w-sm w-full shadow-xl" onClick={e => e.stopPropagation()}>
              <h3 className="font-bold text-lg mb-2">Save & Exit?</h3>
              <p className="text-sm text-muted-foreground mb-5">Your progress ({answeredCount} of {totalQuestions} answered) will be saved. You can resume anytime.</p>
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1 rounded-xl" onClick={() => setShowExitDialog(false)} data-testid="button-cancel-exit-mastery">Keep Going</Button>
                <Button className="flex-1 rounded-xl bg-gradient-to-r from-primary to-indigo-600 text-white font-bold" onClick={saveAndExit} data-testid="button-confirm-save-exit-mastery">
                  <Save size={16} className="mr-1" /> Save & Exit
                </Button>
              </div>
            </motion.div>
          </div>
        )}

        <div className="sticky top-[58px] z-40 border-b border-border bg-background/95 backdrop-blur-md">
          <div className="max-w-2xl mx-auto px-4 py-3">
            <div className="flex items-center justify-between mb-2">
              <Button variant="ghost" size="sm" onClick={() => setShowExitDialog(true)} className="gap-1.5 text-primary hover:text-primary/80 hover:bg-primary/5 -ml-2" data-testid="button-exit-mastery">
                <ArrowLeft size={16} /> Back
              </Button>
              <span className="text-sm font-bold text-muted-foreground">{currentQ + 1} / {totalQuestions}</span>
            </div>
            <Progress value={progressPercent} className="h-2 bg-primary/10 dark:bg-primary/20 [&>div]:bg-primary" />
            <p className="text-xs text-muted-foreground mt-1.5 font-medium">{sectionName}</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 py-6">
          <AnimatePresence mode="wait">
            <motion.div key={currentQuestion.id} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.2 }}>
              <div className="rounded-2xl bg-white dark:bg-card border border-border p-5 mb-4 shadow-sm">
                <p className="text-base font-semibold leading-relaxed" data-testid="text-mastery-question">{currentQuestion.question}</p>
              </div>

              <div className="flex flex-col gap-3">
                {currentQuestion.options.map((option, index) => {
                  const isSelected = selected === index;
                  const borderClass = isSelected ? "border-primary bg-primary/5 dark:bg-primary/10" : "border-gray-200 dark:border-gray-700 bg-white dark:bg-card";
                  return (
                    <motion.button key={index} className={`w-full text-left p-4 rounded-xl border-2 transition-all text-sm font-medium ${borderClass}`} onClick={() => handleSelect(index)} whileTap={{ scale: 0.98 }} data-testid={`button-mastery-option-${index}`}>
                      <span className="inline-flex items-center gap-3">
                        <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${isSelected ? "bg-primary text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-500"}`}>{String.fromCharCode(65 + index)}</span>
                        <span className="flex-1">{option}</span>
                      </span>
                    </motion.button>
                  );
                })}
              </div>

              <div className="flex gap-3 mt-5">
                {currentQ > 0 && (
                  <Button variant="outline" className="h-11 px-5 font-bold rounded-xl border-primary/30 text-primary" onClick={handleBack} data-testid="button-mastery-back-question">
                    <ArrowLeft size={16} className="mr-1" /> Back
                  </Button>
                )}
                {selected !== null && (
                  <Button className="flex-1 h-11 font-bold bg-gradient-to-r from-primary to-indigo-600 hover:from-primary/90 hover:to-indigo-700 text-white rounded-xl" onClick={handleNext} disabled={submitMutation.isPending} data-testid="button-mastery-next">
                    {submitMutation.isPending ? <Loader2 size={16} className="animate-spin mr-2" /> : null}
                    {currentQ + 1 >= totalQuestions ? "Finish & See Results" : "Next Question"}
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                )}
              </div>

              {submitError && (
                <div className="mt-4 p-3 rounded-xl bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800 text-sm text-red-600 flex items-center gap-2">
                  <AlertTriangle size={16} /> {submitError}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    );
  }

  if (phase === "results" && resultData) {
    const percentage = Math.round((resultData.score / resultData.totalQuestions) * 100);
    const grade = percentage >= 90 ? "Survey-Ready Expert" : percentage >= 80 ? "Advanced Professional" : percentage >= 70 ? "Proficient" : percentage >= 60 ? "Developing" : "Keep Practicing";
    const gradeColor = percentage >= 90 ? "text-primary" : percentage >= 80 ? "text-emerald-600" : percentage >= 70 ? "text-teal-600" : percentage >= 60 ? "text-blue-600" : "text-gray-600";

    const sortedSections = Object.entries(resultData.sectionScores).sort((a, b) => {
      const pctA = a[1].total > 0 ? a[1].correct / a[1].total : 0;
      const pctB = b[1].total > 0 ? b[1].correct / b[1].total : 0;
      return pctA - pctB;
    });
    const weakSections = sortedSections.filter(([, s]) => s.total > 0 && s.correct / s.total < 0.6);
    const strongSections = sortedSections.filter(([, s]) => s.total > 0 && s.correct / s.total >= 0.8);

    const wrongQuestions = resultData.detailedResults.filter(d => !d.correct);
    const displayQuestions = showAllQuestions ? resultData.detailedResults : wrongQuestions;

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950/30 dark:via-blue-950/30 dark:to-indigo-950/30">
        <div className="max-w-2xl mx-auto px-4 py-8">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center mb-8">
            {percentage >= 90 ? <Crown size={56} className="text-primary mx-auto mb-3" /> : <Trophy size={56} className="text-primary mx-auto mb-3" />}
            <h1 className="text-3xl font-black mb-1">Final Assessment Complete</h1>
            <p className="text-muted-foreground">Here's how you did after completing all sections</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.15 }} className="rounded-2xl bg-white dark:bg-card border border-border p-6 mb-6 shadow-sm text-center">
            <div className="text-5xl font-black mb-2"><span className={gradeColor}>{percentage}%</span></div>
            <p className="text-lg font-bold mb-1">{resultData.score} out of {resultData.totalQuestions} correct</p>
            <p className={`text-sm font-bold ${gradeColor}`}>{grade}</p>
          </motion.div>

          {percentage >= 90 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.15 }} className="rounded-2xl bg-gradient-to-r from-primary/10 to-indigo-100 dark:from-primary/20 dark:to-indigo-950/20 border border-primary/30 p-5 mb-6 text-center">
              <Crown size={32} className="text-primary mx-auto mb-2" />
              <h3 className="font-black text-primary mb-1">Outstanding Achievement</h3>
              <p className="text-sm text-muted-foreground">You've demonstrated expert-level compliance knowledge. You're ready to face any Joint Commission survey with confidence.</p>
            </motion.div>
          )}

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.15 }} className="rounded-2xl bg-white dark:bg-card border border-border p-5 mb-6 shadow-sm">
            <h3 className="font-bold text-sm mb-4 text-primary">Section Breakdown</h3>
            <div className="space-y-3">
              {sortedSections.map(([sectionId, scores]) => {
                const pct = scores.total > 0 ? Math.round((scores.correct / scores.total) * 100) : 0;
                const barColor = pct >= 80 ? "bg-emerald-500" : pct >= 60 ? "bg-orange-500" : "bg-red-500";
                const label = pct >= 80 ? "Strong" : pct >= 60 ? "Developing" : "Needs Focus";
                return (
                  <div key={sectionId}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold truncate mr-2">{SECTION_NAMES[sectionId] || sectionId}</span>
                      <span className="text-xs font-bold whitespace-nowrap">{scores.correct}/{scores.total} ({pct}%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
                        <div className={`h-full rounded-full ${barColor} transition-all`} style={{ width: `${pct}%` }} />
                      </div>
                      <span className={`text-[10px] font-bold uppercase ${pct >= 80 ? "text-emerald-600" : pct >= 60 ? "text-primary" : "text-red-500"}`}>{label}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {weakSections.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.15 }} className="rounded-2xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 p-5 mb-6">
              <div className="flex items-center gap-2 mb-3"><TrendingDown size={18} className="text-red-500" /><span className="font-bold text-sm text-red-700 dark:text-red-300">Areas to Focus On</span></div>
              <div className="flex flex-wrap gap-2">
                {weakSections.map(([sectionId]) => (
                  <span key={sectionId} className="px-2.5 py-1 rounded-full text-xs font-semibold bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-700">{SECTION_NAMES[sectionId] || sectionId}</span>
                ))}
              </div>
            </motion.div>
          )}

          {strongSections.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.15 }} className="rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 p-5 mb-6">
              <div className="flex items-center gap-2 mb-3"><TrendingUp size={18} className="text-emerald-500" /><span className="font-bold text-sm text-emerald-700 dark:text-emerald-300">Your Strengths</span></div>
              <div className="flex flex-wrap gap-2">
                {strongSections.map(([sectionId]) => (
                  <span key={sectionId} className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-700">{SECTION_NAMES[sectionId] || sectionId}</span>
                ))}
              </div>
            </motion.div>
          )}

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.15 }} className="rounded-2xl bg-white dark:bg-card border border-border p-5 mb-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-sm text-primary">
                {showAllQuestions ? "All Questions" : `Questions You Missed (${wrongQuestions.length})`}
              </h3>
              <button onClick={() => setShowAllQuestions(!showAllQuestions)} className="text-xs font-semibold text-primary hover:text-primary/70 transition-colors" data-testid="button-toggle-all-questions-mastery">
                {showAllQuestions ? "Show Missed Only" : "Show All Questions"}
              </button>
            </div>
            {displayQuestions.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-4">
                {showAllQuestions ? "No questions to display." : "You got every question right! Outstanding!"}
              </p>
            ) : (
              <div className="space-y-3">
                {displayQuestions.map((d, idx) => {
                  const isExpanded = expandedQuestions.has(idx);
                  return (
                    <div key={d.questionId} className={`rounded-xl border ${d.correct ? "border-emerald-200 dark:border-emerald-800" : "border-red-200 dark:border-red-800"} overflow-hidden`}>
                      <button className="w-full text-left p-3 flex items-start gap-2" onClick={() => {
                        const next = new Set(expandedQuestions);
                        isExpanded ? next.delete(idx) : next.add(idx);
                        setExpandedQuestions(next);
                      }}>
                        {d.correct ? <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" /> : <XCircle size={16} className="text-red-500 mt-0.5 flex-shrink-0" />}
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-muted-foreground mb-0.5">{SECTION_NAMES[d.sectionId] || d.sectionId}</p>
                          <p className="text-sm font-medium leading-snug line-clamp-2">{d.question}</p>
                        </div>
                        {isExpanded ? <ChevronUp size={16} className="text-muted-foreground flex-shrink-0 mt-0.5" /> : <ChevronDown size={16} className="text-muted-foreground flex-shrink-0 mt-0.5" />}
                      </button>
                      {isExpanded && (
                        <div className="px-3 pb-3 border-t border-gray-100 dark:border-gray-800 pt-3">
                          <div className="space-y-2">
                            {d.options.map((opt, oi) => {
                              const isCorrect = oi === d.correctIndex;
                              const isUserPick = oi === d.selectedIndex;
                              let optClass = "border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/30";
                              if (isCorrect) optClass = "border-emerald-300 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-950/30";
                              if (isUserPick && !isCorrect) optClass = "border-red-300 dark:border-red-700 bg-red-50 dark:bg-red-950/30";
                              return (
                                <div key={oi} className={`p-2.5 rounded-lg border text-xs ${optClass}`}>
                                  <div className="flex items-start gap-2">
                                    <span className="font-bold flex-shrink-0">{String.fromCharCode(65 + oi)}.</span>
                                    <span className="flex-1">{opt}</span>
                                    {isCorrect && <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0 mt-0.5" />}
                                    {isUserPick && !isCorrect && <XCircle size={14} className="text-red-500 flex-shrink-0 mt-0.5" />}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                          {d.explanation && (
                            <div className="mt-3 p-3 rounded-lg bg-primary/5 border border-primary/15">
                              <p className="text-xs font-semibold text-primary mb-1">Explanation</p>
                              <p className="text-xs text-muted-foreground leading-relaxed">{d.explanation}</p>
                            </div>
                          )}
                          {!d.correct && (
                            <p className="mt-2 text-xs text-muted-foreground">
                              <span className="font-semibold text-emerald-600">Correct answer:</span> {String.fromCharCode(65 + d.correctIndex)}. {d.options[d.correctIndex]}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </motion.div>

          <div className="flex gap-3">
            <Button className="flex-1 h-12 font-bold bg-gradient-to-r from-primary to-indigo-600 hover:from-primary/90 hover:to-indigo-700 text-white rounded-xl" onClick={() => setLocation("/")} data-testid="button-mastery-to-dashboard">
              <Home size={18} className="mr-2" /> Back to Dashboard
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
