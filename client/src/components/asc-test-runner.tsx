import { useState, useMemo } from "react";
import { useLocation } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, ArrowRight, Loader2, CheckCircle2, XCircle, Home,
  ChevronDown, ChevronUp, Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { apiRequest } from "@/lib/queryClient";

interface AscTestQ {
  id: string;
  chapterId: string;
  chapterName: string;
  question: string;
  options: string[];
}

interface DetailedResult {
  questionId: string;
  chapterId: string;
  chapterName: string;
  question: string;
  options: string[];
  selectedIndex: number;
  correctIndex: number;
  correct: boolean;
  explanation: string;
  cmsTag?: string;
  tutor?: {
    whyCorrect?: string;
    whyWrong?: Record<string, string>;
    operationalContext?: string;
  };
}

interface SubmitResponse {
  score: number;
  totalQuestions: number;
  resultId: number;
  detailedResults: DetailedResult[];
  chapterScores: Record<string, { name: string; correct: number; total: number }>;
}

interface Props {
  apiBase: string;
  title: string;
  introTitle: string;
  introBody: string;
  resultsHeadline: string;
  testIdPrefix: string;
}

export function AscTestRunner({
  apiBase, title, introTitle, introBody, resultsHeadline, testIdPrefix,
}: Props) {
  const [, setLocation] = useLocation();
  const [phase, setPhase] = useState<"intro" | "quiz" | "results">("intro");
  const [questions, setQuestions] = useState<AscTestQ[] | null>(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<({ questionId: string; selectedIndex: number } | null)[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [result, setResult] = useState<SubmitResponse | null>(null);
  const [expandedTutors, setExpandedTutors] = useState<Set<number>>(new Set());
  const [submitError, setSubmitError] = useState<string | null>(null);

  const { data: pastResults } = useQuery<{ id: number; score: number; totalQuestions: number; completedAt: string }[]>({
    queryKey: [`${apiBase}/results`],
  });

  const startMutation = useMutation({
    mutationFn: async () => {
      const res = await fetch(`${apiBase}/questions`, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to load questions");
      return (await res.json()) as AscTestQ[];
    },
    onSuccess: (qs) => {
      setQuestions(qs);
      setAnswers(new Array(qs.length).fill(null));
      setCurrentQ(0);
      setSelected(null);
      setPhase("quiz");
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (params: {
      answers: { questionId: string; selectedIndex: number }[];
    }) => {
      const res = await apiRequest("POST", `${apiBase}/submit`, params);
      return (await res.json()) as SubmitResponse;
    },
    onSuccess: (data) => {
      setResult(data);
      setPhase("results");
      setSubmitError(null);
    },
    onError: (err: Error) => {
      setSubmitError(err.message || "Failed to submit. Please try again.");
    },
  });

  const handleSelect = (idx: number) => setSelected(idx);

  const handleNext = () => {
    if (selected === null || !questions) return;
    const newAnswers = [...answers];
    newAnswers[currentQ] = { questionId: questions[currentQ].id, selectedIndex: selected };
    setAnswers(newAnswers);

    if (currentQ === questions.length - 1) {
      const finalAnswers = newAnswers.filter((a): a is { questionId: string; selectedIndex: number } => a !== null);
      submitMutation.mutate({ answers: finalAnswers });
    } else {
      setCurrentQ(currentQ + 1);
      const nextAns = newAnswers[currentQ + 1];
      setSelected(nextAns ? nextAns.selectedIndex : null);
    }
  };

  const handlePrev = () => {
    if (currentQ === 0) return;
    setCurrentQ(currentQ - 1);
    const prevAns = answers[currentQ - 1];
    setSelected(prevAns ? prevAns.selectedIndex : null);
  };

  const toggleTutor = (idx: number) => {
    const next = new Set(expandedTutors);
    if (next.has(idx)) next.delete(idx); else next.add(idx);
    setExpandedTutors(next);
  };

  const chapterEntries = useMemo(() => {
    if (!result) return [] as { id: string; name: string; correct: number; total: number; pct: number }[];
    return Object.entries(result.chapterScores).map(([id, c]) => ({
      id, name: c.name, correct: c.correct, total: c.total,
      pct: c.total === 0 ? 0 : Math.round((c.correct / c.total) * 100),
    }));
  }, [result]);

  if (phase === "intro") {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-2xl mx-auto px-4 py-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLocation("/")}
            className="mb-4"
            data-testid={`button-${testIdPrefix}-back`}
          >
            <ArrowLeft size={16} className="mr-2" /> Dashboard
          </Button>

          <div className="rounded-2xl border-2 bg-card p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
                <Sparkles className="text-white" size={24} />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold" data-testid={`text-${testIdPrefix}-title`}>
                {introTitle}
              </h1>
            </div>
            <p className="text-muted-foreground mb-6">{introBody}</p>

            {pastResults && pastResults.length > 0 && (
              <div className="mb-6 rounded-xl bg-muted/40 p-4">
                <p className="text-sm font-semibold mb-2">Your previous attempts</p>
                <div className="space-y-1">
                  {pastResults.slice(0, 3).map((r) => (
                    <div key={r.id} className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        {new Date(r.completedAt).toLocaleDateString()}
                      </span>
                      <span className="font-semibold" data-testid={`text-${testIdPrefix}-past-${r.id}`}>
                        {r.score} / {r.totalQuestions}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <Button
              size="lg"
              className="w-full"
              onClick={() => startMutation.mutate()}
              disabled={startMutation.isPending}
              data-testid={`button-${testIdPrefix}-start`}
            >
              {startMutation.isPending ? (
                <><Loader2 className="mr-2 animate-spin" size={18} /> Loading...</>
              ) : (
                <>Start {title} <ArrowRight className="ml-2" size={18} /></>
              )}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (phase === "quiz" && questions) {
    const q = questions[currentQ];
    const progress = ((currentQ + 1) / questions.length) * 100;
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-2xl mx-auto px-4 py-6">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm text-muted-foreground" data-testid={`text-${testIdPrefix}-progress`}>
              Question {currentQ + 1} of {questions.length}
            </span>
            <span className="text-xs text-muted-foreground uppercase tracking-wider">
              {q.chapterName}
            </span>
          </div>
          <Progress value={progress} className="h-2 mb-6" />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentQ}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl border-2 bg-card p-5 sm:p-6"
            >
              <h2 className="text-lg sm:text-xl font-semibold mb-5" data-testid={`text-${testIdPrefix}-question`}>
                {q.question}
              </h2>
              <div className="space-y-2">
                {q.options.map((opt, idx) => {
                  const letter = String.fromCharCode(65 + idx);
                  const isSelected = selected === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelect(idx)}
                      className={`w-full text-left p-3 sm:p-4 rounded-xl border-2 transition-colors flex items-start gap-3 ${
                        isSelected
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50 hover:bg-muted/50"
                      }`}
                      data-testid={`button-${testIdPrefix}-option-${letter}`}
                    >
                      <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold ${
                        isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                      }`}>
                        {letter}
                      </span>
                      <span className="flex-1 text-sm sm:text-base">{opt}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between mt-6">
            <Button
              variant="outline"
              onClick={handlePrev}
              disabled={currentQ === 0}
              data-testid={`button-${testIdPrefix}-prev`}
            >
              <ArrowLeft className="mr-2" size={16} /> Previous
            </Button>
            <Button
              onClick={handleNext}
              disabled={selected === null || submitMutation.isPending}
              data-testid={`button-${testIdPrefix}-next`}
            >
              {submitMutation.isPending ? (
                <><Loader2 className="mr-2 animate-spin" size={16} /> Scoring...</>
              ) : currentQ === questions.length - 1 ? (
                <>Submit <CheckCircle2 className="ml-2" size={16} /></>
              ) : (
                <>Next <ArrowRight className="ml-2" size={16} /></>
              )}
            </Button>
          </div>

          {submitError && (
            <div className="mt-4 p-3 rounded-xl bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800 text-sm text-red-600 flex items-center justify-between gap-2">
              <span>{submitError}</span>
              <button
                onClick={() => setLocation("/")}
                className="font-semibold underline underline-offset-2 flex-shrink-0"
                data-testid={`button-${testIdPrefix}-submit-error-home`}
              >
                Back to Dashboard
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (phase === "results" && result) {
    const pct = result.totalQuestions === 0 ? 0 : Math.round((result.score / result.totalQuestions) * 100);
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="rounded-2xl border-2 bg-card p-6 sm:p-8 mb-6 text-center">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2" data-testid={`text-${testIdPrefix}-results-title`}>
              {resultsHeadline}
            </h1>
            <div className="my-6">
              <div className="text-6xl font-black text-primary" data-testid={`text-${testIdPrefix}-score`}>
                {result.score}<span className="text-3xl text-muted-foreground">/{result.totalQuestions}</span>
              </div>
              <div className="text-lg text-muted-foreground mt-1">{pct}% correct</div>
            </div>

            <div className="space-y-3 text-left mb-6">
              <h2 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                Chapter breakdown
              </h2>
              {chapterEntries.map((c) => {
                const missed = c.total - c.correct;
                return (
                  <div key={c.id} className="rounded-xl bg-muted/40 p-3 sm:p-4" data-testid={`row-${testIdPrefix}-chapter-${c.id}`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-sm sm:text-base">{c.name}</span>
                      <span className="text-sm font-bold">
                        {c.correct} / {c.total}
                      </span>
                    </div>
                    <Progress value={c.pct} className="h-2 mb-2" />
                    {missed === 0 ? (
                      <p className="text-xs text-emerald-600 font-medium">Perfect - {c.total} of {c.total}.</p>
                    ) : (
                      <p className="text-xs text-muted-foreground">
                        You missed {missed} of {c.total} {c.name} questions.
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <Button variant="outline" className="flex-1" onClick={() => setLocation("/")} data-testid={`button-${testIdPrefix}-home`}>
                <Home className="mr-2" size={16} /> Dashboard
              </Button>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="font-semibold text-lg" data-testid={`text-${testIdPrefix}-review-title`}>Review answers</h2>
            {result.detailedResults.map((d, idx) => {
              const expanded = expandedTutors.has(idx);
              const userLetter = String.fromCharCode(65 + d.selectedIndex);
              const correctLetter = String.fromCharCode(65 + d.correctIndex);
              const wrongLetterEntries: [string, string][] = d.tutor?.whyWrong
                ? Object.entries(d.tutor.whyWrong)
                : [];
              return (
                <div key={d.questionId} className="rounded-xl border bg-card p-4" data-testid={`card-${testIdPrefix}-review-${idx}`}>
                  <div className="flex items-start gap-2 mb-2">
                    {d.correct ? (
                      <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-0.5" size={18} />
                    ) : (
                      <XCircle className="text-destructive flex-shrink-0 mt-0.5" size={18} />
                    )}
                    <div className="flex-1">
                      <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                        Q{idx + 1} · {d.chapterName}
                      </div>
                      <p className="text-sm font-medium mb-2">{d.question}</p>
                      <div className="text-xs space-y-1">
                        <div>
                          <span className="text-muted-foreground">Your answer:</span>{" "}
                          <span className={d.correct ? "text-emerald-700 dark:text-emerald-400 font-medium" : "text-destructive font-medium"}>
                            {userLetter}. {d.options[d.selectedIndex]}
                          </span>
                        </div>
                        {!d.correct && (
                          <div>
                            <span className="text-muted-foreground">Correct answer:</span>{" "}
                            <span className="text-emerald-700 dark:text-emerald-400 font-medium">
                              {correctLetter}. {d.options[d.correctIndex]}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleTutor(idx)}
                    className="w-full flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors py-2 border-t mt-3"
                    data-testid={`button-${testIdPrefix}-tutor-toggle-${idx}`}
                  >
                    <span>AI Tutor explanation</span>
                    {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </button>

                  {expanded && (
                    <div className="space-y-3 pt-2 text-sm">
                      {d.tutor?.whyCorrect && (
                        <div>
                          <div className="text-xs font-semibold uppercase text-emerald-700 dark:text-emerald-400 mb-1">Why the correct answer is correct</div>
                          <p className="text-muted-foreground">{d.tutor.whyCorrect}</p>
                        </div>
                      )}
                      {wrongLetterEntries.length > 0 && (
                        <div>
                          <div className="text-xs font-semibold uppercase text-destructive/80 mb-1">Why the others are wrong</div>
                          <ul className="space-y-1 text-muted-foreground">
                            {wrongLetterEntries.map(([letter, text]) => (
                              <li key={letter}>
                                <span className="font-semibold text-foreground">{letter}.</span> {text}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {d.tutor?.operationalContext && (
                        <div>
                          <div className="text-xs font-semibold uppercase text-primary/80 mb-1">Operational context</div>
                          <p className="text-muted-foreground">{d.tutor.operationalContext}</p>
                        </div>
                      )}
                      {d.cmsTag && (
                        <div className="text-xs">
                          <span className="font-semibold">Reference:</span>{" "}
                          <span className="text-muted-foreground">{d.cmsTag}</span>
                        </div>
                      )}
                      {!d.tutor && d.explanation && (
                        <p className="text-muted-foreground">{d.explanation}</p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Loader2 className="animate-spin text-primary" size={32} />
    </div>
  );
}
