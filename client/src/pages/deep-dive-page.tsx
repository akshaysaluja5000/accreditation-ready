import { useState, useCallback, useMemo, useEffect, useRef } from "react";
import { useRoute, useLocation } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Zap,
  Trophy,
  Home,
  Loader2,
  Microscope,
  ChevronDown,
  CheckCircle2,
  XCircle,
  BrainCircuit,
  RotateCcw,
  X,
  Shuffle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useAuth } from "@/lib/auth";
import type { DeepDiveLevel, DeepDiveGameState } from "@shared/schema";
import type { QuizSession } from "@shared/schema";
import { AiTutorBox } from "@/components/ai-tutor-box";

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

function invalidateDashboardData() {
  queryClient.invalidateQueries({ queryKey: ["/api/game/streak"] });
  queryClient.invalidateQueries({ queryKey: ["/api/game/progress"] });
  queryClient.invalidateQueries({ queryKey: ["/api/game/activities"] });
  queryClient.invalidateQueries({ queryKey: ["/api/game/today"] });
  queryClient.invalidateQueries({ queryKey: ["/api/game/leaderboard"] });
  queryClient.invalidateQueries({ queryKey: ["/api/game/deep-dive/session"] });
}

interface SavedDeepDiveState {
  questionOrder: string[];
  gameState: DeepDiveGameState;
  selectedIndex: number | null;
  showExplanation: boolean;
}

function freshGameState(totalQuestions: number): DeepDiveGameState {
  return {
    currentQuestion: 0,
    totalQuestions,
    phase: "base",
    currentFollowUpIndex: 0,
    baseCorrect: 0,
    followUpCorrect: 0,
    followUpAttempted: 0,
    baseXpEarned: 0,
    expertXpEarned: 0,
    answers: [],
  };
}

export default function DeepDivePage() {
  const [, params] = useRoute("/deep-dive/:levelId");
  const [, setLocation] = useLocation();
  const { user } = useAuth();
  const levelId = params?.levelId;

  const { data: level, isLoading: levelLoading, isError: levelError } = useQuery<DeepDiveLevel>({
    queryKey: ["/api/game/deep-dive", levelId],
    enabled: !!levelId,
    retry: false,
  });

  const { data: savedSession, isFetching: sessionLoading } = useQuery<QuizSession | null>({
    queryKey: ["/api/game/deep-dive/session", levelId],
    enabled: !!levelId,
    staleTime: 0,
    gcTime: 0,
    refetchOnMount: "always",
  });

  const [sessionLoaded, setSessionLoaded] = useState(false);
  const [questionOrder, setQuestionOrder] = useState<string[]>([]);
  const [gameState, setGameState] = useState<DeepDiveGameState>(freshGameState(0));

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [showQuitDialog, setShowQuitDialog] = useState(false);
  const saveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const prevLevelIdRef = useRef(levelId);
  useEffect(() => {
    if (levelId !== prevLevelIdRef.current) {
      prevLevelIdRef.current = levelId;
      setSessionLoaded(false);
      setQuestionOrder([]);
      setGameState(freshGameState(0));
      setSelectedIndex(null);
      setShowExplanation(false);
      setIsComplete(false);
      setShowQuitDialog(false);
    }
  }, [levelId]);

  useEffect(() => {
    if (!level) return;
    if (sessionLoading) return;
    if (sessionLoaded) return;

    const initFresh = () => {
      const shuffled = shuffleWithSeed(level.questions, `${user?.id}-${levelId}-${Date.now()}`);
      setQuestionOrder(shuffled.map((q: any) => q.id));
      setGameState(freshGameState(level.questions.length));
    };

    if (savedSession && savedSession.questionOrder && savedSession.questionOrder.length > 0) {
      try {
        const parsed: SavedDeepDiveState = JSON.parse(savedSession.answers || "{}");
        if (parsed.gameState && parsed.questionOrder && Array.isArray(parsed.questionOrder)) {
          setQuestionOrder(parsed.questionOrder);
          const migratedAnswers = (parsed.gameState.answers ?? []).map((a: any) => ({
            ...a,
            followUpResults: Array.isArray(a.followUpResults)
              ? a.followUpResults
              : a.followUpSelectedIndex !== undefined
                ? [{ correct: !!a.followUpCorrect, selectedIndex: a.followUpSelectedIndex }]
                : [],
          }));
          setGameState({
            ...parsed.gameState,
            answers: migratedAnswers,
            totalQuestions: level.questions.length,
            currentFollowUpIndex: parsed.gameState.currentFollowUpIndex ?? 0,
            followUpAttempted: parsed.gameState.followUpAttempted ?? 0,
          });
          setSelectedIndex(parsed.selectedIndex ?? null);
          setShowExplanation(parsed.showExplanation ?? false);
        } else {
          initFresh();
        }
      } catch {
        initFresh();
      }
    } else {
      initFresh();
    }
    setSessionLoaded(true);
  }, [savedSession, sessionLoading, level, sessionLoaded, user?.id, levelId]);

  const questions = useMemo(() => {
    if (!level || questionOrder.length === 0) return [];
    return questionOrder
      .map((id) => level.questions.find((q) => q.id === id))
      .filter(Boolean) as typeof level.questions;
  }, [level, questionOrder]);

  const currentQ = questions[gameState.currentQuestion];

  const saveMutation = useMutation({
    mutationFn: async (data: any) => {
      await apiRequest("POST", `/api/game/deep-dive/session/${levelId}`, data);
    },
    retry: 2,
  });

  const deleteSessionMutation = useMutation({
    mutationFn: async () => {
      await apiRequest("DELETE", `/api/game/deep-dive/session/${levelId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/game/deep-dive/session", levelId] });
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: any) => {
      const res = await apiRequest("POST", "/api/game/deep-dive/submit", data);
      return res.json();
    },
    onSuccess: () => {
      deleteSessionMutation.mutate();
      invalidateDashboardData();
    },
    retry: 3,
    retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 5000),
  });

  const saveSession = useCallback(
    (gs: DeepDiveGameState, order: string[], selIdx: number | null, showExp: boolean) => {
      if (!levelId) return;
      if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
      saveTimeoutRef.current = setTimeout(() => {
        const payload: SavedDeepDiveState = {
          questionOrder: order,
          gameState: gs,
          selectedIndex: selIdx,
          showExplanation: showExp,
        };
        saveMutation.mutate({
          questionOrder: order,
          answers: JSON.stringify(payload),
          currentQuestion: gs.currentQuestion,
          correctAnswers: gs.baseCorrect + gs.followUpCorrect,
          xpEarned: gs.baseXpEarned + gs.expertXpEarned,
        });
      }, 300);
    },
    [levelId, saveMutation]
  );

  const currentAnswer = useMemo(() => {
    if (!currentQ) return null;
    return gameState.answers.find((a) => a.questionId === currentQ.id) || null;
  }, [currentQ, gameState.answers]);

  const isReviewingAnswered = useMemo(() => {
    if (!currentAnswer) return false;
    if (gameState.phase === "base") return currentAnswer.baseSelectedIndex !== undefined && currentAnswer.baseSelectedIndex !== null;
    if (gameState.phase === "followUp") {
      const fuResult = (currentAnswer.followUpResults ?? [])[gameState.currentFollowUpIndex];
      return fuResult !== undefined;
    }
    return false;
  }, [currentAnswer, gameState.phase, gameState.currentFollowUpIndex]);

  const handleSelect = useCallback(
    (index: number) => {
      if (selectedIndex !== null || !currentQ || isReviewingAnswered) return;
      setSelectedIndex(index);
      setShowExplanation(true);

      if (gameState.phase === "base") {
        const isCorrect = index === currentQ.baseCorrectIndex;
        const newState: DeepDiveGameState = {
          ...gameState,
          baseCorrect: gameState.baseCorrect + (isCorrect ? 1 : 0),
          baseXpEarned: gameState.baseXpEarned + (isCorrect ? currentQ.baseXp : 0),
          answers: [
            ...gameState.answers,
            {
              questionId: currentQ.id,
              baseCorrect: isCorrect,
              baseSelectedIndex: index,
              followUpResults: [],
            },
          ],
        };
        setGameState(newState);
        saveSession(newState, questionOrder, index, true);
      } else if (gameState.phase === "followUp") {
        const followUp = currentQ.followUps[gameState.currentFollowUpIndex];
        if (!followUp) return;
        const isCorrect = index === followUp.correctIndex;
        const updatedAnswers = gameState.answers.map((a) => {
          if (a.questionId === currentQ.id) {
            return {
              ...a,
              followUpResults: [...(a.followUpResults ?? []), { correct: isCorrect, selectedIndex: index }],
            };
          }
          return a;
        });
        const newState: DeepDiveGameState = {
          ...gameState,
          followUpCorrect: gameState.followUpCorrect + (isCorrect ? 1 : 0),
          followUpAttempted: gameState.followUpAttempted + 1,
          expertXpEarned: gameState.expertXpEarned + (isCorrect ? followUp.expertXp : 0),
          answers: updatedAnswers,
        };
        setGameState(newState);
        saveSession(newState, questionOrder, index, true);
      }
    },
    [selectedIndex, currentQ, gameState, isReviewingAnswered, saveSession, questionOrder]
  );

  const handleNext = useCallback(() => {
    if (!currentQ || !level) return;

    if (gameState.phase === "base") {
      const answer = gameState.answers.find((a) => a.questionId === currentQ.id);
      if (answer && (answer.followUpResults ?? []).length > 0) {
        const nextFuIdx = (answer.followUpResults ?? []).length;
        if (nextFuIdx < currentQ.followUps.length) {
          const newState: DeepDiveGameState = { ...gameState, phase: "followUp" as const, currentFollowUpIndex: nextFuIdx };
          setGameState(newState);
          setSelectedIndex(null);
          setShowExplanation(false);
          saveSession(newState, questionOrder, null, false);
        } else {
          moveToNextQuestion();
        }
      } else {
        const newState: DeepDiveGameState = { ...gameState, phase: "followUp" as const, currentFollowUpIndex: 0 };
        setGameState(newState);
        setSelectedIndex(null);
        setShowExplanation(false);
        saveSession(newState, questionOrder, null, false);
      }
    } else if (gameState.phase === "followUp") {
      const nextFuIdx = gameState.currentFollowUpIndex + 1;
      if (nextFuIdx < currentQ.followUps.length) {
        const newState: DeepDiveGameState = { ...gameState, currentFollowUpIndex: nextFuIdx };
        setGameState(newState);
        setSelectedIndex(null);
        setShowExplanation(false);
        saveSession(newState, questionOrder, null, false);
      } else {
        moveToNextQuestion();
      }
    }
  }, [currentQ, level, gameState, questions, saveSession, questionOrder]);

  const moveToNextQuestion = useCallback(() => {
    const nextQ = gameState.currentQuestion + 1;
    if (nextQ >= questions.length) {
      finishGame();
    } else {
      const newState: DeepDiveGameState = { ...gameState, currentQuestion: nextQ, phase: "base" as const, currentFollowUpIndex: 0 };
      setGameState(newState);
      const nextAnswer = gameState.answers.find((a) => a.questionId === questions[nextQ]?.id);
      if (nextAnswer) {
        setSelectedIndex(nextAnswer.baseSelectedIndex);
        setShowExplanation(true);
      } else {
        setSelectedIndex(null);
        setShowExplanation(false);
      }
      saveSession(newState, questionOrder, null, false);
    }
  }, [gameState, questions, saveSession, questionOrder]);

  const handlePrevious = useCallback(() => {
    if (gameState.phase === "followUp") {
      if (gameState.currentFollowUpIndex > 0) {
        const prevFuIdx = gameState.currentFollowUpIndex - 1;
        const newState: DeepDiveGameState = { ...gameState, currentFollowUpIndex: prevFuIdx };
        setGameState(newState);
        const answer = gameState.answers.find((a) => a.questionId === currentQ?.id);
        const fuResult = (answer?.followUpResults ?? [])[prevFuIdx];
        if (fuResult) {
          setSelectedIndex(fuResult.selectedIndex);
          setShowExplanation(true);
        }
        saveSession(newState, questionOrder, fuResult?.selectedIndex ?? null, !!fuResult);
      } else {
        const newState: DeepDiveGameState = { ...gameState, phase: "base" as const, currentFollowUpIndex: 0 };
        setGameState(newState);
        const answer = gameState.answers.find((a) => a.questionId === currentQ?.id);
        if (answer) {
          setSelectedIndex(answer.baseSelectedIndex);
          setShowExplanation(true);
        }
        saveSession(newState, questionOrder, answer?.baseSelectedIndex ?? null, true);
      }
    } else if (gameState.currentQuestion > 0) {
      const prevIdx = gameState.currentQuestion - 1;
      const prevQ = questions[prevIdx];
      const prevAnswer = gameState.answers.find((a) => a.questionId === prevQ?.id);

      if (prevAnswer && (prevAnswer.followUpResults ?? []).length > 0) {
        const lastFuIdx = (prevAnswer.followUpResults ?? []).length - 1;
        const newState: DeepDiveGameState = { ...gameState, currentQuestion: prevIdx, phase: "followUp" as const, currentFollowUpIndex: lastFuIdx };
        setGameState(newState);
        const fuResult = (prevAnswer.followUpResults ?? [])[lastFuIdx];
        setSelectedIndex(fuResult.selectedIndex);
        setShowExplanation(true);
        saveSession(newState, questionOrder, fuResult.selectedIndex, true);
      } else if (prevAnswer) {
        const newState: DeepDiveGameState = { ...gameState, currentQuestion: prevIdx, phase: "base" as const, currentFollowUpIndex: 0 };
        setGameState(newState);
        setSelectedIndex(prevAnswer.baseSelectedIndex);
        setShowExplanation(true);
        saveSession(newState, questionOrder, prevAnswer.baseSelectedIndex, true);
      } else {
        const newState: DeepDiveGameState = { ...gameState, currentQuestion: prevIdx, phase: "base" as const, currentFollowUpIndex: 0 };
        setGameState(newState);
        setSelectedIndex(null);
        setShowExplanation(false);
        saveSession(newState, questionOrder, null, false);
      }
    }
  }, [gameState, currentQ, questions, saveSession, questionOrder]);

  const finishGame = useCallback(() => {
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    setIsComplete(true);
    if (level) {
      submitMutation.mutate({
        levelId: level.id,
        baseCorrect: gameState.baseCorrect,
        followUpCorrect: gameState.followUpCorrect,
        totalQuestions: questions.length,
        followUpAttempted: gameState.followUpAttempted,
        baseXpEarned: gameState.baseXpEarned,
        expertXpEarned: gameState.expertXpEarned,
      });
    }
  }, [level, gameState, questions, submitMutation]);

  const handleQuitConfirm = useCallback(async (saveProgress: boolean) => {
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    if (saveProgress && levelId) {
      try {
        const payload: SavedDeepDiveState = {
          questionOrder,
          gameState,
          selectedIndex,
          showExplanation,
        };
        await apiRequest("POST", `/api/game/deep-dive/session/${levelId}`, {
          questionOrder,
          answers: JSON.stringify(payload),
          currentQuestion: gameState.currentQuestion,
          correctAnswers: gameState.baseCorrect + gameState.followUpCorrect,
          xpEarned: gameState.baseXpEarned + gameState.expertXpEarned,
        });
      } catch (e) {}
    }
    if (!saveProgress && levelId) {
      deleteSessionMutation.mutate();
    }
    invalidateDashboardData();
    setShowQuitDialog(false);
    setLocation("/deep-dive");
  }, [levelId, deleteSessionMutation, setLocation, questionOrder, gameState, selectedIndex, showExplanation]);

  const handleStartOver = useCallback(() => {
    if (!level) return;
    deleteSessionMutation.mutate();
    const shuffled = shuffleWithSeed(level.questions, `${user?.id}-${levelId}-${Date.now()}`);
    const newOrder = shuffled.map((q: any) => q.id);
    setQuestionOrder(newOrder);
    setGameState(freshGameState(level.questions.length));
    setSelectedIndex(null);
    setShowExplanation(false);
    setShowQuitDialog(false);
    setIsComplete(false);
  }, [level, user?.id, levelId, deleteSessionMutation]);

  useEffect(() => {
    if (levelError) {
      setLocation("/deep-dive");
    }
  }, [levelError, setLocation]);

  if (levelError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 size={32} className="animate-spin text-secondary" />
      </div>
    );
  }

  if (!level || levelLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 size={32} className="animate-spin text-secondary" />
      </div>
    );
  }

  if (!sessionLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 size={32} className="animate-spin text-secondary" />
          <p className="text-muted-foreground font-medium">Loading your progress...</p>
        </div>
      </div>
    );
  }

  if (isComplete) {
    const totalXp = gameState.baseXpEarned + gameState.expertXpEarned;
    const totalQuestions2 = questions.length;
    const basePercent = Math.round((gameState.baseCorrect / totalQuestions2) * 100);
    const followUpPercent = gameState.followUpAttempted > 0
      ? Math.round((gameState.followUpCorrect / gameState.followUpAttempted) * 100)
      : 0;

    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <motion.div
          className="game-card max-w-md w-full p-8 text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", damping: 15 }}
        >
          <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6 deep-dive-glow">
            <Trophy size={40} className="text-secondary" />
          </div>
          <h2 className="text-2xl font-black mb-2" data-testid="text-deep-dive-complete">
            Deep Dive Complete!
          </h2>
          <p className="text-muted-foreground mb-6">{level.name}</p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="rounded-xl bg-primary/5 p-4">
              <div className="text-2xl font-black text-primary">{basePercent}%</div>
              <div className="text-xs text-muted-foreground font-medium mt-1">Base Accuracy</div>
            </div>
            <div className="rounded-xl bg-secondary/5 p-4">
              <div className="text-2xl font-black text-secondary">{followUpPercent}%</div>
              <div className="text-xs text-muted-foreground font-medium mt-1">Expert Accuracy</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <Zap size={20} className="text-chart-4" fill="currentColor" />
              <span className="font-black text-lg">{gameState.baseXpEarned}</span>
              <span className="text-xs text-muted-foreground">Base XP</span>
            </div>
            <div className="flex items-center gap-2">
              <BrainCircuit size={20} className="text-secondary" />
              <span className="font-black text-lg text-secondary">{gameState.expertXpEarned}</span>
              <span className="text-xs text-muted-foreground">Expert XP</span>
            </div>
          </div>

          <div className="rounded-xl bg-muted/50 p-3 mb-4">
            <div className="text-sm font-bold">
              Total XP Earned: <span className="text-primary">{totalXp}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-secondary/5 border border-secondary/10 mb-6" data-testid="text-dd-shuffle-note">
            <Shuffle size={14} className="text-secondary flex-shrink-0" />
            <p className="text-xs text-muted-foreground">
              Play again for <span className="font-semibold text-foreground">fresh questions</span> each time, drawn from a larger pool every session.
            </p>
          </div>

          {submitMutation.isPending && (
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
              <Loader2 size={16} className="animate-spin" />
              <span>Saving your results...</span>
            </div>
          )}

          {submitMutation.isError && (
            <div className="w-full rounded-xl bg-destructive/10 border border-destructive/20 p-3 text-center mb-4">
              <p className="text-sm text-destructive font-medium">Failed to save results.</p>
              <Button variant="outline" size="sm" className="mt-2" onClick={() => submitMutation.mutate({
                levelId: level.id, baseCorrect: gameState.baseCorrect, followUpCorrect: gameState.followUpCorrect,
                totalQuestions: questions.length, followUpAttempted: gameState.followUpAttempted,
                baseXpEarned: gameState.baseXpEarned, expertXpEarned: gameState.expertXpEarned,
              })} data-testid="button-dd-retry-submit">Retry Save</Button>
            </div>
          )}

          <div className="flex gap-3">
            <Button className="flex-1" variant="outline" onClick={() => setLocation("/")} data-testid="button-deep-dive-home">
              <Home size={16} className="mr-2" />Dashboard
            </Button>
            <Button className="flex-1" variant="outline" onClick={handleStartOver} data-testid="button-deep-dive-replay">
              <RotateCcw size={16} className="mr-2" />Play Again
            </Button>
            <Button className="flex-1" onClick={() => setLocation("/deep-dive")} data-testid="button-deep-dive-more">
              <Microscope size={16} className="mr-2" />More Topics
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  if (!currentQ) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 size={32} className="animate-spin text-secondary" />
      </div>
    );
  }

  const isBasePhase = gameState.phase === "base";
  const currentFollowUp = !isBasePhase ? currentQ.followUps[gameState.currentFollowUpIndex] : null;
  const displayQuestion = isBasePhase ? currentQ.baseQuestion : (currentFollowUp?.question || "");
  const displayOptions = isBasePhase ? currentQ.baseOptions : (currentFollowUp?.options || []);
  const displayCorrectIdx = isBasePhase ? currentQ.baseCorrectIndex : (currentFollowUp?.correctIndex ?? 0);
  const displayExplanation = isBasePhase ? currentQ.baseExplanation : (currentFollowUp?.explanation || "");

  const reviewSelected = isReviewingAnswered
    ? (isBasePhase
      ? currentAnswer?.baseSelectedIndex
      : (currentAnswer?.followUpResults ?? [])[gameState.currentFollowUpIndex]?.selectedIndex) ?? null
    : null;
  const activeSelected = isReviewingAnswered ? reviewSelected : selectedIndex;
  const activeShowExplanation = isReviewingAnswered ? true : showExplanation;

  const hasAnsweredCurrent = isReviewingAnswered || selectedIndex !== null;

  const totalFollowUps = currentQ.followUps.length;
  const stepsPerQuestion = 1 + totalFollowUps;
  const currentStep = isBasePhase ? 0 : (gameState.currentFollowUpIndex + 1);
  const progressPercent =
    ((gameState.currentQuestion * stepsPerQuestion + currentStep) / (questions.length * stepsPerQuestion)) * 100;

  const canGoNext = hasAnsweredCurrent;
  const isAtEnd = gameState.phase === "followUp"
    && gameState.currentFollowUpIndex + 1 >= currentQ.followUps.length
    && gameState.currentQuestion + 1 >= questions.length;

  const canGoPrev = gameState.currentQuestion > 0 || gameState.phase === "followUp";

  let nextButtonLabel = "Next Question \u2192";
  if (isBasePhase) {
    nextButtonLabel = "Expert Follow-Up \u2192";
  } else if (gameState.currentFollowUpIndex + 1 < currentQ.followUps.length) {
    nextButtonLabel = `Follow-Up ${gameState.currentFollowUpIndex + 2} \u2192`;
  } else if (gameState.currentQuestion + 1 >= questions.length) {
    nextButtonLabel = "Finish Deep Dive \u2192";
  }

  const followUpLabel = !isBasePhase
    ? `Expert Follow-Up ${gameState.currentFollowUpIndex + 1} of ${totalFollowUps}`
    : null;

  return (
    <div className="min-h-screen flex flex-col">
      <div className="sticky top-[58px] z-40 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="max-w-lg mx-auto px-4 py-3 flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowQuitDialog(true)}
            data-testid="button-deep-dive-back"
          >
            <ArrowLeft size={20} />
          </Button>
          <div className="flex-1">
            <div className="flex items-center gap-2 text-sm font-bold">
              <Microscope size={16} className="text-secondary" />
              <span className="truncate">{level.name}</span>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <Progress value={progressPercent} className="flex-1 h-2" data-testid="progress-deep-dive" />
              <span className="text-xs font-bold text-muted-foreground whitespace-nowrap">
                {gameState.currentQuestion + 1} / {questions.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-start justify-center pt-6 pb-32 px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentQ.id}-${gameState.phase}-${gameState.currentFollowUpIndex}`}
            className="game-card max-w-lg w-full p-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-4">
              {isBasePhase ? (
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary" data-testid="badge-base-question">
                  Base Question
                </span>
              ) : (
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-secondary/10 text-secondary" data-testid="badge-follow-up">
                  {followUpLabel}
                </span>
              )}
              <span className="text-xs text-muted-foreground ml-auto">
                Q{gameState.currentQuestion + 1} of {questions.length}
              </span>
            </div>

            <h3 className="text-base font-bold mb-5 leading-relaxed" data-testid="text-deep-dive-question">
              {displayQuestion}
            </h3>

            <div className="flex flex-col gap-3" data-testid="options-container">
              {displayOptions.map((option: string, idx: number) => {
                const isSelected = activeSelected === idx;
                const isCorrect = idx === displayCorrectIdx;
                const showResult = activeShowExplanation && activeSelected !== null;

                let className =
                  "w-full text-left p-4 rounded-xl border-2 transition-all text-sm font-medium leading-relaxed ";
                if (showResult) {
                  if (isCorrect) {
                    className +=
                      "border-chart-1 bg-chart-1/10 text-chart-1";
                  } else if (isSelected && !isCorrect) {
                    className +=
                      "border-destructive bg-destructive/10 text-destructive";
                  } else {
                    className +=
                      "border-card-border bg-card text-muted-foreground opacity-60";
                  }
                } else if (isSelected) {
                  className += "border-secondary bg-secondary/5 text-foreground";
                } else {
                  className +=
                    "border-card-border bg-card text-foreground hover:border-secondary/30 hover:bg-secondary/5";
                }

                return (
                  <button
                    key={idx}
                    className={className}
                    onClick={() => handleSelect(idx)}
                    disabled={activeSelected !== null || isReviewingAnswered}
                    data-testid={`button-option-${idx}`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold mt-0.5 border-current">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="flex-1">{option}</span>
                      {showResult && isCorrect && (
                        <CheckCircle2
                          size={20}
                          className="flex-shrink-0 text-chart-1 mt-0.5"
                        />
                      )}
                      {showResult && isSelected && !isCorrect && (
                        <XCircle
                          size={20}
                          className="flex-shrink-0 text-destructive mt-0.5"
                        />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            <AnimatePresence>
              {activeShowExplanation && activeSelected !== null && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="mt-5 p-4 rounded-xl bg-muted/50 border border-card-border" data-testid="text-deep-dive-explanation">
                    <div className="flex items-start gap-2">
                      {activeSelected === displayCorrectIdx ? (
                        <CheckCircle2
                          size={18}
                          className="text-chart-1 flex-shrink-0 mt-0.5"
                        />
                      ) : (
                        <XCircle
                          size={18}
                          className="text-destructive flex-shrink-0 mt-0.5"
                        />
                      )}
                      <div>
                        <p className="text-sm font-bold mb-1">
                          {activeSelected === displayCorrectIdx
                            ? "Correct!"
                            : "Not quite."}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {displayExplanation}
                        </p>
                        {!isBasePhase && activeSelected === displayCorrectIdx && (
                          <div className="flex items-center gap-1.5 mt-2">
                            <BrainCircuit
                              size={14}
                              className="text-secondary"
                            />
                            <span className="text-xs font-bold text-secondary">
                              +{currentFollowUp?.expertXp} Expert XP
                            </span>
                          </div>
                        )}
                        {isBasePhase && activeSelected === displayCorrectIdx && (
                          <div className="flex items-center gap-1.5 mt-2">
                            <Zap
                              size={14}
                              className="text-chart-4"
                              fill="currentColor"
                            />
                            <span className="text-xs font-bold text-chart-4">
                              +{currentQ.baseXp} XP
                            </span>
                          </div>
                        )}
                        <AiTutorBox
                          questionText={displayQuestion}
                          userAnswer={displayOptions[activeSelected!] || ""}
                          correctAnswer={displayOptions[displayCorrectIdx] || ""}
                          explanation={displayExplanation}
                          allOptions={displayOptions}
                          module={(user?.organizationType === "asc" || user?.organizationType === "dnv") ? user.organizationType : "hospital"}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-card-border p-4">
        <div className="max-w-lg mx-auto flex items-center gap-3">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={!canGoPrev}
            className="gap-2"
            data-testid="button-deep-dive-prev"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">Previous</span>
          </Button>

          <div className="flex-1 text-center">
            <div className="flex items-center justify-center gap-3">
              <div className="flex items-center gap-1.5">
                <Zap size={14} className="text-chart-4" fill="currentColor" />
                <span className="text-sm font-bold">{gameState.baseXpEarned}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <BrainCircuit size={14} className="text-secondary" />
                <span className="text-sm font-bold text-secondary">
                  {gameState.expertXpEarned}
                </span>
              </div>
            </div>
          </div>

          {isAtEnd && canGoNext ? (
            <Button
              onClick={() => finishGame()}
              className="gap-2 bg-secondary hover:bg-secondary/90"
              data-testid="button-deep-dive-finish"
            >
              Finish Deep Dive
              <Trophy size={16} />
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              disabled={!canGoNext}
              className="gap-2"
              data-testid="button-deep-dive-next"
            >
              <span className="hidden sm:inline">{nextButtonLabel}</span>
              <span className="sm:hidden">Next</span>
              <ArrowRight size={16} />
            </Button>
          )}
        </div>
      </div>

      <AnimatePresence>
        {showQuitDialog && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="game-card max-w-sm w-full p-6"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-black">Leave Deep Dive?</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowQuitDialog(false)}
                  data-testid="button-dd-quit-close"
                >
                  <X size={18} />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                You have answered {gameState.answers.length} of {questions.length} questions.
                What would you like to do?
              </p>
              <div className="flex flex-col gap-2">
                <Button onClick={() => handleQuitConfirm(true)} className="w-full" data-testid="button-dd-save-exit">
                  Save & Exit
                </Button>
                <Button onClick={handleStartOver} variant="outline" className="w-full" data-testid="button-dd-start-over">
                  <RotateCcw size={16} className="mr-2" />Start Over
                </Button>
                <Button
                  onClick={() => handleQuitConfirm(false)}
                  variant="ghost"
                  className="w-full text-destructive hover:text-destructive"
                  data-testid="button-dd-quit-no-save"
                >
                  Quit Without Saving
                </Button>
                <Button
                  onClick={() => setShowQuitDialog(false)}
                  variant="ghost"
                  className="w-full"
                  data-testid="button-dd-continue"
                >
                  Continue Playing
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
