import { useState, useCallback, useMemo, useEffect, useRef } from "react";
import { useRoute, useLocation } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Trophy, Star, Zap, RotateCcw, Home, Loader2, X, Shuffle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { SwipeCard } from "@/components/swipe-card";
import { QuizCard } from "@/components/quiz-card";
import { AiDebriefBox } from "@/components/ai-debrief-box";
import { RemediationPlanBox } from "@/components/remediation-plan-box";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useAuth } from "@/lib/auth";
import { findLevelById } from "@shared/all-levels";
import { getRoleConfig } from "@shared/roles";
import type { GameState, QuizSession } from "@shared/schema";

function shuffleWithSeed(arr: any[], seed: string) {
  const result = [...arr];
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = ((hash << 5) - hash) + seed.charCodeAt(i);
    hash |= 0;
  }
  for (let i = result.length - 1; i > 0; i--) {
    hash = ((hash << 5) - hash) + i;
    hash |= 0;
    const j = Math.abs(hash) % (i + 1);
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function RoleContextLine() {
  const { user } = useAuth();
  const [, navigate] = useLocation();
  const { data: roles } = useQuery<{ id: number; slug: string; name: string }[]>({
    queryKey: ["/api/roles"],
    enabled: !!user?.roleId,
  });
  if (!user?.roleId || !roles) return null;
  const dbRole = roles.find((r) => r.id === user.roleId);
  if (!dbRole) return null;
  const cfg = getRoleConfig(dbRole.slug);
  const title = cfg?.title || dbRole.name;
  return (
    <div className="flex items-center justify-center gap-1.5 mb-0.5">
      <p
        className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold leading-none"
        data-testid="text-role-context"
      >
        Training - {title}
      </p>
      <span aria-hidden="true" className="text-muted-foreground text-[10px]">·</span>
      <button
        type="button"
        onClick={() => navigate("/role-select")}
        data-testid="link-change-role"
        className="text-[10px] uppercase tracking-wider font-semibold leading-none text-primary hover:underline"
      >
        Change role
      </button>
    </div>
  );
}

function invalidateDashboardData() {
  queryClient.invalidateQueries({ queryKey: ["/api/game/streak"] });
  queryClient.invalidateQueries({ queryKey: ["/api/game/progress"] });
  queryClient.invalidateQueries({ queryKey: ["/api/game/activities"] });
  queryClient.invalidateQueries({ queryKey: ["/api/game/today"] });
  queryClient.invalidateQueries({ queryKey: ["/api/game/sessions"] });
  queryClient.invalidateQueries({ queryKey: ["/api/game/leaderboard"] });
}

export default function PlayPage() {
  const [, params] = useRoute("/play/:levelId");
  const [, setLocation] = useLocation();
  const { user } = useAuth();
  const levelId = params?.levelId;
  const level = useMemo(() => findLevelById(levelId), [levelId]);
  const [sessionLoaded, setSessionLoaded] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [showQuitDialog, setShowQuitDialog] = useState(false);
  const saveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [questionOrder, setQuestionOrder] = useState<string[]>([]);
  const [gameState, setGameState] = useState<GameState>({
    currentQuestion: 0,
    score: 0,
    correctAnswers: 0,
    totalQuestions: 0,
    xpEarned: 0,
    answers: [],
  });

  const { data: savedSession, isFetching: sessionLoading, error: sessionError } = useQuery<QuizSession | null>({
    queryKey: ["/api/game/session", levelId],
    enabled: !!levelId,
    staleTime: 0,
    gcTime: 0,
    refetchOnMount: "always",
    retry: false,
  });

  useEffect(() => {
    if (sessionError && (sessionError as any).message?.includes("403")) {
      setLocation("/");
    }
  }, [sessionError, setLocation]);

  useEffect(() => {
    if (!level) return;
    if (sessionLoading) return;
    if (sessionLoaded) return;

    if (savedSession && savedSession.questionOrder && savedSession.questionOrder.length > 0) {
      const savedAnswers: GameState["answers"] = JSON.parse(savedSession.answers || "[]");
      setQuestionOrder(savedSession.questionOrder);
      setGameState({
        currentQuestion: savedSession.currentQuestion,
        score: 0,
        correctAnswers: savedSession.correctAnswers,
        totalQuestions: level.questions.length,
        xpEarned: savedSession.xpEarned,
        answers: savedAnswers,
      });
    } else {
      const shuffled = shuffleWithSeed(level.questions, `${user?.id}-${level.id}-${Date.now()}`);
      setQuestionOrder(shuffled.map((q) => q.id));
      setGameState({ currentQuestion: 0, score: 0, correctAnswers: 0, totalQuestions: level.questions.length, xpEarned: 0, answers: [] });
    }
    setSessionLoaded(true);
  }, [savedSession, sessionLoading, level, sessionLoaded, user?.id]);

  const questions = useMemo(() => {
    if (!level || questionOrder.length === 0) return [];
    return questionOrder.map((id) => level.questions.find((q) => q.id === id)).filter(Boolean) as typeof level.questions;
  }, [level, questionOrder]);

  const saveMutation = useMutation({
    mutationFn: async (data: { questionOrder: string[]; answers: any[]; currentQuestion: number; correctAnswers: number; xpEarned: number }) => {
      await apiRequest("POST", `/api/game/session/${levelId}`, data);
    },
    retry: 2,
  });

  const deleteSessionMutation = useMutation({
    mutationFn: async () => {
      await apiRequest("DELETE", `/api/game/session/${levelId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/game/session", levelId] });
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: { levelId: string; score: number; totalQuestions: number; xpEarned: number }) => {
      await apiRequest("POST", "/api/game/submit", data);
    },
    onSuccess: () => {
      deleteSessionMutation.mutate();
      invalidateDashboardData();
    },
    retry: 3,
    retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 5000),
  });

  const saveSession = useCallback((state: GameState, order: string[]) => {
    if (!levelId) return;
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    saveTimeoutRef.current = setTimeout(() => {
      saveMutation.mutate({
        questionOrder: order,
        answers: state.answers,
        currentQuestion: state.currentQuestion,
        correctAnswers: state.correctAnswers,
        xpEarned: state.xpEarned,
      });
    }, 300);
  }, [levelId, saveMutation]);

  const currentQuestionAnswered = gameState.answers.find(
    (a) => a.questionId === questions[gameState.currentQuestion]?.id
  );
  const hasAnswered = !!currentQuestionAnswered;

  const handleAnswer = useCallback((selectedIndex: number) => {
    if (hasAnswered || !level) return;

    const currentQ = questions[gameState.currentQuestion];
    const isCorrect = selectedIndex === currentQ.correctIndex;
    const xpGained = isCorrect ? currentQ.xpReward : 0;

    const newState: GameState = {
      ...gameState,
      correctAnswers: gameState.correctAnswers + (isCorrect ? 1 : 0),
      xpEarned: gameState.xpEarned + xpGained,
      answers: [...gameState.answers, { questionId: currentQ.id, correct: isCorrect, selectedIndex }],
    };

    setGameState(newState);
    saveSession(newState, questionOrder);
  }, [hasAnswered, gameState, questions, level, saveSession, questionOrder]);

  const handleNext = useCallback(() => {
    if (!level) return;
    const isLastQuestion = gameState.currentQuestion >= questions.length - 1;

    if (isLastQuestion) {
      if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
      setIsComplete(true);
      submitMutation.mutate({
        levelId: level.id,
        score: gameState.correctAnswers,
        totalQuestions: questions.length,
        xpEarned: gameState.xpEarned,
      });
    } else {
      const newState = { ...gameState, currentQuestion: gameState.currentQuestion + 1 };
      setGameState(newState);
      saveSession(newState, questionOrder);
    }
  }, [gameState, questions, level, submitMutation, saveSession, questionOrder]);

  const handlePrevious = useCallback(() => {
    if (gameState.currentQuestion > 0) {
      const newState = { ...gameState, currentQuestion: gameState.currentQuestion - 1 };
      setGameState(newState);
      saveSession(newState, questionOrder);
    }
  }, [gameState, saveSession, questionOrder]);

  const handleQuit = useCallback(() => {
    setShowQuitDialog(true);
  }, []);

  const handleQuitConfirm = useCallback(async (saveProgress: boolean) => {
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    if (saveProgress && levelId) {
      try {
        await apiRequest("POST", `/api/game/session/${levelId}`, {
          questionOrder,
          answers: gameState.answers,
          currentQuestion: gameState.currentQuestion,
          correctAnswers: gameState.correctAnswers,
          xpEarned: gameState.xpEarned,
        });
      } catch (e) {}
    }
    if (!saveProgress && levelId) {
      deleteSessionMutation.mutate();
    }
    invalidateDashboardData();
    setShowQuitDialog(false);
    setLocation("/");
  }, [levelId, deleteSessionMutation, setLocation, questionOrder, gameState]);

  const handleStartOverInGame = useCallback(() => {
    if (!level) return;
    deleteSessionMutation.mutate();
    const shuffled = shuffleWithSeed(level.questions, `${user?.id}-${level.id}-${Date.now()}`);
    const newOrder = shuffled.map((q: any) => q.id);
    setQuestionOrder(newOrder);
    setGameState({
      currentQuestion: 0, score: 0, correctAnswers: 0,
      totalQuestions: level.questions.length, xpEarned: 0, answers: [],
    });
    setShowQuitDialog(false);
  }, [level, user?.id, deleteSessionMutation]);

  if (!level) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Level not found</p>
      </div>
    );
  }

  if (!sessionLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 size={32} className="animate-spin text-primary" />
          <p className="text-muted-foreground font-medium">Loading your progress...</p>
        </div>
      </div>
    );
  }

  const progressPercent = (gameState.answers.length / questions.length) * 100;
  const currentQuestion = questions[gameState.currentQuestion];

  if (isComplete) {
    const percentage = Math.round((gameState.correctAnswers / questions.length) * 100);

    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <motion.div
          className="w-full max-w-md text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", damping: 15 }}
        >
          <div className="rounded-2xl bg-card border border-card-border p-8 flex flex-col items-center gap-6">
            <motion.div
              className={`w-24 h-24 rounded-full flex items-center justify-center ${
                percentage >= 80 ? "bg-chart-1/15" : percentage >= 50 ? "bg-chart-4/15" : "bg-destructive/15"
              }`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              {percentage >= 80 ? (
                <Trophy size={48} className="text-chart-1" />
              ) : percentage >= 50 ? (
                <Star size={48} className="text-chart-4" />
              ) : (
                <Star size={48} className="text-destructive" />
              )}
            </motion.div>

            <div>
              <h2 className="text-2xl font-black" data-testid="text-result-title">
                {percentage >= 80 ? "Excellent!" : percentage >= 50 ? "Good Effort!" : "Keep Studying!"}
              </h2>
              <p className="text-muted-foreground mt-1">
                {percentage >= 80
                  ? "Great job! You really know this material."
                  : percentage >= 50
                  ? "Keep going. Review the study material and try again!"
                  : "Try studying this section first, then give it another shot!"}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 w-full">
              <div className="rounded-xl bg-muted p-3">
                <p className="text-2xl font-black" data-testid="text-result-score">{percentage}%</p>
                <p className="text-xs text-muted-foreground">Score</p>
              </div>
              <div className="rounded-xl bg-muted p-3">
                <p className="text-2xl font-black text-chart-1" data-testid="text-result-correct">
                  {gameState.correctAnswers}
                </p>
                <p className="text-xs text-muted-foreground">Correct</p>
              </div>
              <div className="rounded-xl bg-muted p-3">
                <div className="flex items-center justify-center gap-1">
                  <Zap size={16} className="text-chart-4" fill="currentColor" />
                  <p className="text-2xl font-black text-chart-4" data-testid="text-result-xp">
                    {gameState.xpEarned}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground">XP Earned</p>
              </div>
            </div>

            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-primary/5 border border-primary/10" data-testid="text-replay-shuffle-note">
              <Shuffle size={14} className="text-primary flex-shrink-0" />
              <p className="text-xs text-muted-foreground">
                Play again for <span className="font-semibold text-foreground">fresh questions</span> each time, drawn from a larger pool every session.
              </p>
            </div>

            <RemediationPlanBox levelId={level.id} percentage={percentage} />

            <AiDebriefBox
              levelId={level.id}
              levelTitle={level.name}
              totalQuestions={questions.length}
              correctAnswers={gameState.correctAnswers}
              missedQuestions={
                gameState.answers
                  .filter(a => !a.correct)
                  .map(a => {
                    const q = questions.find(q => q.id === a.questionId);
                    return q ? { question: q.question, correctAnswer: q.options[q.correctIndex] } : null;
                  })
                  .filter(Boolean) as { question: string; correctAnswer: string }[]
              }
            />

            {submitMutation.isPending && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Loader2 size={16} className="animate-spin" />
                <span>Saving your results...</span>
              </div>
            )}

            {submitMutation.isError && (
              <div className="w-full rounded-xl bg-destructive/10 border border-destructive/20 p-3 text-center">
                <p className="text-sm text-destructive font-medium">Failed to save results. Please try again.</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-2"
                  onClick={() => submitMutation.mutate({
                    levelId: level.id,
                    score: gameState.correctAnswers,
                    totalQuestions: questions.length,
                    xpEarned: gameState.xpEarned,
                  })}
                  data-testid="button-retry-submit"
                >
                  Retry Save
                </Button>
              </div>
            )}

            <div className="flex gap-3 w-full">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => {
                  const shuffled = shuffleWithSeed(level.questions, `${user?.id}-${level.id}-${Date.now()}`);
                  const newOrder = shuffled.map((q) => q.id);
                  setQuestionOrder(newOrder);
                  setGameState({
                    currentQuestion: 0, score: 0, correctAnswers: 0,
                    totalQuestions: questions.length, xpEarned: 0, answers: [],
                  });
                  setIsComplete(false);
                }}
                data-testid="button-retry"
              >
                <RotateCcw size={16} className="mr-2" />
                Play Again
              </Button>
              <Button
                className="flex-1"
                onClick={() => {
                  invalidateDashboardData();
                  setLocation("/");
                }}
                data-testid="button-home"
              >
                <Home size={16} className="mr-2" />
                Home
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 size={32} className="animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {showQuitDialog && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
          <motion.div
            className="w-full max-w-sm rounded-2xl bg-card border border-card-border p-6 flex flex-col gap-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h3 className="font-bold text-lg text-center" data-testid="text-quit-title">Leave this quiz?</h3>
            <p className="text-sm text-muted-foreground text-center">
              Question {gameState.currentQuestion + 1} of {questions.length}. What would you like to do?
            </p>
            <div className="flex flex-col gap-2">
              <Button
                onClick={() => handleQuitConfirm(true)}
                data-testid="button-quit-save"
              >
                <Home size={16} className="mr-2" />
                Save & Exit
              </Button>
              <Button
                variant="outline"
                onClick={handleStartOverInGame}
                data-testid="button-quit-restart"
              >
                <RotateCcw size={16} className="mr-2" />
                Start Over (New Question Order)
              </Button>
              <Button
                variant="outline"
                onClick={() => handleQuitConfirm(false)}
                className="text-destructive hover:text-destructive"
                data-testid="button-quit-discard"
              >
                <X size={16} className="mr-2" />
                Quit Without Saving
              </Button>
              <Button
                variant="ghost"
                onClick={() => setShowQuitDialog(false)}
                data-testid="button-quit-cancel"
              >
                Continue Playing
              </Button>
            </div>
          </motion.div>
        </div>
      )}

      <div className="sticky top-[58px] z-40 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="max-w-lg mx-auto px-4 py-3 flex flex-col gap-3">
          <div className="flex items-center justify-between gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleQuit}
              data-testid="button-quit"
            >
              <X size={20} />
            </Button>
            <div className="flex-1 text-center">
              <RoleContextLine />
              <h2 className="font-bold text-sm" data-testid="text-level-title" style={{ color: level.color }}>
                {level.name}
              </h2>
            </div>
            <div className="flex items-center gap-1">
              <Zap size={14} className="text-chart-4" fill="currentColor" />
              <span className="text-sm font-bold text-chart-4">{gameState.xpEarned}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Progress value={progressPercent} className="flex-1 h-2.5" />
            <span className="text-xs text-muted-foreground font-bold whitespace-nowrap">
              {gameState.currentQuestion + 1}/{questions.length}
            </span>
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentQuestion.id}-${gameState.currentQuestion}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {currentQuestion.isSwipe ? (
              <SwipeCard
                question={currentQuestion}
                onAnswer={handleAnswer}
                disabled={hasAnswered}
                previousAnswer={currentQuestionAnswered ? { selectedIndex: currentQuestionAnswered.selectedIndex, correct: currentQuestionAnswered.correct } : null}
                module={(user?.organizationType === "asc" || user?.organizationType === "dnv") ? user.organizationType : "hospital"}
              />
            ) : (
              <QuizCard
                question={currentQuestion}
                onAnswer={handleAnswer}
                disabled={hasAnswered}
                previousAnswer={currentQuestionAnswered ? { selectedIndex: currentQuestionAnswered.selectedIndex, correct: currentQuestionAnswered.correct } : null}
                module={(user?.organizationType === "asc" || user?.organizationType === "dnv") ? user.organizationType : "hospital"}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="bg-card border-t border-card-border sticky bottom-0 z-50">
        <div className="max-w-lg mx-auto px-4 py-3 flex items-center gap-3">
          <Button
            variant="outline"
            className="flex-1"
            onClick={handlePrevious}
            disabled={gameState.currentQuestion === 0}
            data-testid="button-previous"
          >
            <ArrowLeft size={16} className="mr-2" />
            Previous
          </Button>
          <Button
            className="flex-1"
            onClick={handleNext}
            disabled={!hasAnswered}
            data-testid="button-next"
          >
            {gameState.currentQuestion >= questions.length - 1 ? "Finish" : "Next"}
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
