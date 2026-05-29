import { useState, useEffect, useCallback } from "react";
import { useLocation } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ClipboardCheck, Home, Loader2, CheckCircle2, XCircle, Stethoscope, BarChart3, ChevronRight, ChevronDown, ChevronUp, Save, AlertTriangle, TrendingUp, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useAuth } from "@/lib/auth";
import type { DiagnosticResult } from "@shared/schema";

interface RichDiagnosticResult extends DiagnosticResult {
  detailedResults?: DetailedResult[];
  sectionScores?: Record<string, { correct: number; total: number }>;
}

interface DiagnosticQ {
  id: string;
  sectionId: string;
  question: string;
  options: string[];
  shuffleMap: number[];
}

interface SavedSession {
  questions: DiagnosticQ[];
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

export default function DiagnosticQuizPage() {
  const [, setLocation] = useLocation();
  const { user } = useAuth();
  const [phase, setPhase] = useState<"loading" | "generating" | "intro" | "quiz" | "results">("loading");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<({ questionId: string; selectedIndex: number } | null)[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [result, setResult] = useState<SubmitResponse | null>(null);
  const [questions, setQuestions] = useState<DiagnosticQ[] | null>(null);
  const [showExitDialog, setShowExitDialog] = useState(false);
  const [expandedQuestions, setExpandedQuestions] = useState<Set<number>>(new Set());
  const [showAllQuestions, setShowAllQuestions] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const { data: pastResults } = useQuery<RichDiagnosticResult[]>({
    queryKey: ["/api/diagnostic/results"],
  });

  const { data: savedSession, isLoading: sessionLoading } = useQuery<SavedSession | null>({
    queryKey: ["/api/diagnostic/session"],
    staleTime: 0,
    refetchOnMount: "always",
  });

  const hasSession = !!(savedSession && savedSession.questions && savedSession.questions.length > 0);

  useEffect(() => {
    if (sessionLoading) return;
    if (phase === "loading") setPhase("intro");
  }, [sessionLoading, phase]);

  const fetchQuestions = async () => {
    const res = await fetch("/api/diagnostic/questions", { credentials: "include" });
    const data = await res.json();
    return data as DiagnosticQ[];
  };

  const buildShuffleMaps = (qs: DiagnosticQ[]): Record<string, number[]> => {
    const maps: Record<string, number[]> = {};
    for (const q of qs) {
      if (q.shuffleMap) maps[q.id] = q.shuffleMap;
    }
    return maps;
  };

  const saveMutation = useMutation({
    mutationFn: async (params: { questionOrder: string[]; answers: { questionId: string; selectedIndex: number }[]; currentQuestion: number; shuffleMaps: Record<string, number[]> }) => {
      await apiRequest("POST", "/api/diagnostic/session", params);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/diagnostic/session"] });
    },
  });

  const deleteSavedSession = useMutation({
    mutationFn: async () => {
      await apiRequest("DELETE", "/api/diagnostic/session");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/diagnostic/session"] });
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (params: { answers: { questionId: string; selectedIndex: number }[]; shuffleMaps: Record<string, number[]> }) => {
      const res = await apiRequest("POST", "/api/diagnostic/submit", params);
      return res.json() as Promise<SubmitResponse>;
    },
    onSuccess: (data) => {
      setResult(data);
      setPhase("results");
      setSubmitError(null);
      queryClient.invalidateQueries({ queryKey: ["/api/diagnostic/results"] });
      queryClient.invalidateQueries({ queryKey: ["/api/diagnostic/session"] });
    },
    onError: (err: Error) => {
      setSubmitError(err.message || "Failed to submit. Please try again.");
    },
  });

  const startFresh = async () => {
    setPhase("generating");
    try {
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
    } catch {
      setPhase("intro");
    }
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

  const jumpToQuestion = (idx: number) => {
    if (!questions || idx === currentQ) return;
    const newAnswers = [...answers];
    if (selected !== null && questions[currentQ]) {
      newAnswers[currentQ] = { questionId: questions[currentQ].id, selectedIndex: selected };
      setAnswers(newAnswers);
    }
    setCurrentQ(idx);
    setSelected(newAnswers[idx]?.selectedIndex ?? null);
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
    setResult({ score: last.score, totalQuestions: last.totalQuestions, resultId: last.id, detailedResults: last.detailedResults, sectionScores: last.sectionScores });
    setPhase("results");
    setShowAllQuestions(false);
    setExpandedQuestions(new Set());
  };

  if (phase === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-cyan-50 to-sky-50 dark:from-teal-950/30 dark:via-cyan-950/30 dark:to-sky-950/30">
        <Loader2 size={32} className="animate-spin text-teal-500" />
      </div>
    );
  }

  if (phase === "generating") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-teal-50 via-cyan-50 to-sky-50 dark:from-teal-950/30 dark:via-cyan-950/30 dark:to-sky-950/30 px-4">
        <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center mb-6 shadow-lg">
          <Stethoscope size={40} className="text-white" />
        </div>
        <Loader2 size={32} className="animate-spin text-teal-500 mb-4" />
        <h2 className="text-xl font-bold text-teal-700 dark:text-teal-300 mb-2">Generating your quiz…</h2>
        <p className="text-sm text-muted-foreground text-center max-w-xs">
          AI is writing a fresh set of questions tailored to your compliance role. This takes about 10 seconds.
        </p>
      </div>
    );
  }

  if (phase === "intro") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-sky-50 dark:from-teal-950/30 dark:via-cyan-950/30 dark:to-sky-950/30">
        <div className="max-w-2xl mx-auto px-4 py-8">
          <Button variant="ghost" size="sm" onClick={() => setLocation("/")} className="mb-6" data-testid="button-back-home">
            <ArrowLeft size={16} className="mr-1" /> Back to Dashboard
          </Button>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-6">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center mb-4 shadow-lg">
              <Stethoscope size={40} className="text-white" />
            </div>
            <h1 className="text-3xl font-black mb-2 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Diagnostic Quiz</h1>
            <p className="text-muted-foreground text-lg">See where you stand before you begin</p>
          </motion.div>

          {hasSession && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.15 }} className="rounded-2xl bg-teal-50 dark:bg-teal-950/50 border-2 border-teal-400 dark:border-teal-600 p-5 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Save size={18} className="text-teal-600" />
                <span className="font-bold text-sm text-teal-700 dark:text-teal-300">You have a saved quiz in progress</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Question {(savedSession?.currentQuestion || 0) + 1} of {savedSession?.questions?.length || 15} - {savedSession?.answers?.length || 0} answers saved
              </p>
              <div className="flex gap-3">
                <Button className="flex-1 h-11 font-bold bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white rounded-xl" onClick={resumeSession} data-testid="button-resume-diagnostic">
                  Resume Quiz
                </Button>
                <Button variant="outline" className="flex-1 h-11 font-bold border-teal-300 text-teal-700 dark:text-teal-300 rounded-xl" onClick={async () => { await deleteSavedSession.mutateAsync(); startFresh(); }} data-testid="button-start-fresh-diagnostic">
                  Start Fresh
                </Button>
              </div>
            </motion.div>
          )}

          {!hasSession && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.15 }} className="mb-6">
              {hasPastResults && (
                <div className="rounded-2xl bg-teal-50 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-800 p-4 mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <BarChart3 size={18} className="text-teal-600" />
                      <span className="font-semibold text-sm text-teal-700 dark:text-teal-300">Previous attempt</span>
                    </div>
                    {pastResults[0].detailedResults && (
                      <button onClick={viewLastResults} className="text-xs font-semibold text-teal-600 hover:text-teal-800 dark:text-teal-400 dark:hover:text-teal-200 underline underline-offset-2 transition-colors" data-testid="button-view-last-diagnostic-results">
                        View full results
                      </button>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    You scored <span className="font-bold text-teal-600">{pastResults[0].score}/{pastResults[0].totalQuestions}</span> ({Math.round((pastResults[0].score / pastResults[0].totalQuestions) * 100)}%) on {new Date(pastResults[0].completedAt).toLocaleDateString()}
                  </p>
                </div>
              )}
              <Button className="w-full h-14 text-lg font-bold bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white rounded-xl shadow-md" onClick={startFresh} data-testid="button-start-diagnostic">
                {hasPastResults ? "Retake Diagnostic Quiz" : "Start Diagnostic Quiz"}
                <ChevronRight size={20} className="ml-2" />
              </Button>
            </motion.div>
          )}

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.15 }} className="rounded-2xl bg-white/80 dark:bg-card border border-teal-200 dark:border-teal-800 p-6 mb-6 shadow-sm">
            <h2 className="font-bold text-lg mb-3 text-teal-700 dark:text-teal-300">How it works</h2>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-300 flex items-center justify-center flex-shrink-0 text-xs font-bold">1</span>
                <span>15 fresh questions generated by AI for your role. A new set is generated every time.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-300 flex items-center justify-center flex-shrink-0 text-xs font-bold">2</span>
                <span>Answer each question straight through. Feedback and explanations appear at the end.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-300 flex items-center justify-center flex-shrink-0 text-xs font-bold">3</span>
                <span>You can go back to change previous answers and save your progress to finish later</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-300 flex items-center justify-center flex-shrink-0 text-xs font-bold">4</span>
                <span>At the end, see your score with a full section breakdown and question-by-question review</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    );
  }

  if (phase === "quiz") {
    if (!questions || !questions[currentQ]) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-cyan-50 to-sky-50 dark:from-teal-950/30 dark:via-cyan-950/30 dark:to-sky-950/30">
          <Loader2 size={32} className="animate-spin text-teal-500" />
        </div>
      );
    }

    const currentQuestion = questions[currentQ];
    const totalQuestions = questions.length;
    const answeredCount = answers.filter(a => a !== null).length;
    const progressPercent = (answeredCount / totalQuestions) * 100;
    const sectionName = SECTION_NAMES[currentQuestion.sectionId] || currentQuestion.sectionId;

    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-sky-50 dark:from-teal-950/30 dark:via-cyan-950/30 dark:to-sky-950/30">
        {showExitDialog && (
          <div className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center p-4" onClick={() => setShowExitDialog(false)}>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white dark:bg-card rounded-2xl border border-teal-200 dark:border-teal-800 p-6 max-w-sm w-full shadow-xl" onClick={e => e.stopPropagation()}>
              <h3 className="font-bold text-lg mb-2">Save & Exit?</h3>
              <p className="text-sm text-muted-foreground mb-5">Your progress ({answeredCount} of {totalQuestions} answered) will be saved. You can resume anytime.</p>
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1 rounded-xl" onClick={() => setShowExitDialog(false)} data-testid="button-cancel-exit">Keep Going</Button>
                <Button className="flex-1 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-bold" onClick={saveAndExit} data-testid="button-confirm-save-exit">
                  <Save size={16} className="mr-1" /> Save & Exit
                </Button>
              </div>
            </motion.div>
          </div>
        )}

        <div className="sticky top-[58px] z-40 border-b border-border bg-background/95 backdrop-blur-md">
          <div className="max-w-2xl mx-auto px-4 py-3">
            <div className="flex items-center justify-between mb-2">
              <Button variant="ghost" size="sm" onClick={() => setShowExitDialog(true)} className="gap-1.5 text-teal-700 dark:text-teal-300 hover:text-teal-900 hover:bg-teal-50 dark:hover:bg-teal-950/50 -ml-2" data-testid="button-exit-diagnostic">
                <ArrowLeft size={16} /> Back
              </Button>
              <span className="text-sm font-bold text-muted-foreground">{currentQ + 1} / {totalQuestions}</span>
            </div>
            <Progress value={progressPercent} className="h-2 bg-teal-100 dark:bg-teal-900 [&>div]:bg-gradient-to-r [&>div]:from-teal-500 [&>div]:to-cyan-500" />
            <div className="flex items-center justify-between mt-1.5">
              <p className="text-xs text-muted-foreground font-medium">{sectionName}</p>
              <div className="flex gap-1 flex-wrap justify-end">
                {questions.map((_, idx) => {
                  const isAnswered = answers[idx] !== null && answers[idx] !== undefined;
                  const isCurrent = idx === currentQ;
                  return (
                    <button
                      key={idx}
                      onClick={() => jumpToQuestion(idx)}
                      disabled={isCurrent}
                      data-testid={`dot-question-${idx}`}
                      title={`Question ${idx + 1}${isAnswered ? " (answered)" : ""}`}
                      className={`w-4 h-4 rounded-full transition-all flex-shrink-0 ${
                        isCurrent
                          ? "bg-teal-500 scale-125 cursor-default"
                          : isAnswered
                          ? "bg-teal-300 dark:bg-teal-600 hover:bg-teal-400 dark:hover:bg-teal-500 cursor-pointer"
                          : "bg-gray-200 dark:bg-gray-700 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600"
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 py-6">
          <AnimatePresence mode="wait">
            <motion.div key={currentQuestion.id} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.2 }}>
              <div className="rounded-2xl bg-white dark:bg-card border border-teal-200 dark:border-teal-800 p-5 mb-4 shadow-sm">
                <p className="text-base font-semibold leading-relaxed" data-testid="text-diagnostic-question">{currentQuestion.question}</p>
              </div>

              <div className="flex flex-col gap-3">
                {currentQuestion.options.map((option, index) => (
                  <motion.button key={index} className={`w-full text-left p-4 rounded-xl border-2 transition-all text-sm font-medium ${selected === index ? "border-teal-500 bg-teal-50 dark:bg-teal-950/50" : "border-gray-200 dark:border-gray-700 hover:border-teal-300 dark:hover:border-teal-600 bg-white dark:bg-card"}`} onClick={() => handleSelect(index)} whileTap={{ scale: 0.98 }} data-testid={`button-option-${index}`}>
                    <span className="inline-flex items-center gap-3">
                      <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${selected === index ? "bg-teal-500 text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-500"}`}>{String.fromCharCode(65 + index)}</span>
                      {option}
                    </span>
                  </motion.button>
                ))}
              </div>

              <div className="flex gap-3 mt-5">
                {currentQ > 0 && (
                  <Button variant="outline" className="h-11 px-5 font-bold rounded-xl border-teal-300 text-teal-700 dark:text-teal-300" onClick={handleBack} data-testid="button-diagnostic-back">
                    <ArrowLeft size={16} className="mr-1" /> Back
                  </Button>
                )}
                {selected !== null && (
                  <Button className="flex-1 h-11 font-bold bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white rounded-xl" onClick={handleNext} disabled={submitMutation.isPending} data-testid="button-diagnostic-next">
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

  if (phase === "results" && result) {
    const percentage = Math.round((result.score / result.totalQuestions) * 100);
    const grade = percentage >= 90 ? "Excellent" : percentage >= 75 ? "Strong" : percentage >= 60 ? "Developing" : "Needs Focus";
    const gradeColor = percentage >= 90 ? "text-emerald-600" : percentage >= 75 ? "text-teal-600" : percentage >= 60 ? "text-orange-500" : "text-red-500";

    const sortedSections = Object.entries(result.sectionScores).sort((a, b) => {
      const pctA = a[1].total > 0 ? a[1].correct / a[1].total : 0;
      const pctB = b[1].total > 0 ? b[1].correct / b[1].total : 0;
      return pctA - pctB;
    });
    const weakSections = sortedSections.filter(([, s]) => s.total > 0 && s.correct / s.total < 0.6);
    const strongSections = sortedSections.filter(([, s]) => s.total > 0 && s.correct / s.total >= 0.8);

    const wrongQuestions = result.detailedResults.filter(d => !d.correct);
    const displayQuestions = showAllQuestions ? result.detailedResults : wrongQuestions;

    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-sky-50 dark:from-teal-950/30 dark:via-cyan-950/30 dark:to-sky-950/30">
        <div className="max-w-2xl mx-auto px-4 py-8">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center mb-8">
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center mb-4 shadow-lg">
              <ClipboardCheck size={44} className="text-white" />
            </div>
            <h1 className="text-3xl font-black mb-1">Diagnostic Complete</h1>
            <p className="text-muted-foreground">Here's your baseline - now let's build on it</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.15 }} className="rounded-2xl bg-white dark:bg-card border border-teal-200 dark:border-teal-800 p-6 mb-6 shadow-sm text-center">
            <div className="text-5xl font-black mb-2"><span className={gradeColor}>{percentage}%</span></div>
            <p className="text-lg font-bold mb-1">{result.score} out of {result.totalQuestions} correct</p>
            <p className={`text-sm font-semibold ${gradeColor}`}>{grade}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.15 }} className="rounded-2xl bg-white dark:bg-card border border-teal-200 dark:border-teal-800 p-5 mb-6 shadow-sm">
            <h3 className="font-bold text-sm mb-4 text-teal-700 dark:text-teal-300">Section Breakdown</h3>
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
                      <span className={`text-[10px] font-bold uppercase ${pct >= 80 ? "text-emerald-600" : pct >= 60 ? "text-orange-500" : "text-red-500"}`}>{label}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {weakSections.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.15 }} className="rounded-2xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 p-5 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <TrendingDown size={18} className="text-red-500" />
                <span className="font-bold text-sm text-red-700 dark:text-red-300">Areas to Focus On</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {weakSections.map(([sectionId]) => (
                  <span key={sectionId} className="px-2.5 py-1 rounded-full text-xs font-semibold bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-700">
                    {SECTION_NAMES[sectionId] || sectionId}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {strongSections.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.15 }} className="rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 p-5 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp size={18} className="text-emerald-500" />
                <span className="font-bold text-sm text-emerald-700 dark:text-emerald-300">Your Strengths</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {strongSections.map(([sectionId]) => (
                  <span key={sectionId} className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-700">
                    {SECTION_NAMES[sectionId] || sectionId}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.15 }} className="rounded-2xl bg-white dark:bg-card border border-teal-200 dark:border-teal-800 p-5 mb-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-sm text-teal-700 dark:text-teal-300">
                {showAllQuestions ? "All Questions" : `Questions You Missed (${wrongQuestions.length})`}
              </h3>
              <button onClick={() => setShowAllQuestions(!showAllQuestions)} className="text-xs font-semibold text-teal-600 hover:text-teal-800 transition-colors" data-testid="button-toggle-all-questions">
                {showAllQuestions ? "Show Missed Only" : "Show All Questions"}
              </button>
            </div>
            {displayQuestions.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-4">
                {showAllQuestions ? "No questions to display." : "You got every question right! Great job!"}
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
            <Button className="flex-1 h-12 font-bold bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white rounded-xl" onClick={() => setLocation("/")} data-testid="button-diagnostic-to-dashboard">
              <Home size={18} className="mr-2" /> Start Training
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
