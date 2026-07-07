import { motion } from "framer-motion";
import { Star, Truck, Building2, ArrowLeftRight, Package, Wrench, Thermometer, BookOpen, Play, FlaskConical, HeartPulse, ClipboardCheck, FileText, ShieldCheck, RotateCcw, PlayCircle, Trophy, AlertTriangle, ChevronDown, ChevronUp, Layers, Microscope, BarChart3, Stethoscope, Heart, UserCheck, Pill, Scissors, Shield, Building } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import { apiRequest, queryClient } from "@/lib/queryClient";
import type { Level, UserProgress, QuizSession } from "@shared/schema";

const iconMap: Record<string, any> = {
  Truck, Building2, ArrowLeftRight, Package, Wrench, Thermometer, FlaskConical, HeartPulse, ClipboardCheck, FileText, ShieldCheck,
  BarChart3, Stethoscope, Heart, UserCheck, Pill, Scissors, Shield, Building, Layers, Microscope,
};

interface LevelCardProps {
  level: Level;
  progress?: UserProgress;
  savedSession?: QuizSession;
  isUnlocked: boolean;
  index: number;
  onPlay: () => void;
  onStudy: () => void;
}

export function LevelCard({ level, progress, savedSession, index, onPlay, onStudy }: LevelCardProps) {
  const [, setLocation] = useLocation();
  const Icon = iconMap[level.icon] || Star;
  const bestScore = progress?.bestScore || 0;
  const totalQuestions = level.questions.filter((q) => !q.draft).length;
  const percentage = totalQuestions > 0 ? Math.round((bestScore / totalQuestions) * 100) : 0;
  const hasInProgress = !!savedSession;
  const inProgressQuestion = savedSession?.currentQuestion || 0;
  const hasPlayed = progress && progress.totalQuestions > 0;
  const [riskExpanded, setRiskExpanded] = useState(false);
  const riskPoints = level.chapterSummary?.commonRiskPoints;

  const handleStartOver = async () => {
    try {
      await apiRequest("DELETE", `/api/game/session/${level.id}`);
      queryClient.invalidateQueries({ queryKey: ["/api/game/sessions"] });
      queryClient.invalidateQueries({ queryKey: ["/api/game/session", level.id] });
    } catch (e) {}
    onPlay();
  };

  return (
    <motion.div
      className={`w-full rounded-2xl border-2 p-5 transition-all shadow-md hover:shadow-xl ${
        hasInProgress
          ? "border-primary bg-primary"
          : "border-primary/80 bg-primary"
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.15 }}
      whileHover={{ y: -2 }}
      data-testid={`card-level-${level.id}`}
    >
      <div className="flex items-start gap-4">
        <div
          className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center bg-white/10"
          style={{ color: "white" }}
        >
          <Icon size={28} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-black text-lg text-white" data-testid={`text-level-name-${level.id}`}>
              {level.name}
            </h3>
            {hasInProgress && (
              <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-sm font-bold" data-testid={`badge-in-progress-${level.id}`}>
                In Progress ({inProgressQuestion + 1}/{totalQuestions})
              </span>
            )}
            {hasPlayed && !hasInProgress && (
              <span className="px-2 py-0.5 rounded-full bg-white/15 text-white text-sm font-bold flex items-center gap-1" data-testid={`badge-best-${level.id}`}>
                <Trophy size={12} />
                Best: {percentage}%
              </span>
            )}
          </div>
          <p className="text-base text-white/90 mt-1.5 line-clamp-2 leading-relaxed">
            {level.description}
          </p>
          <div className="flex items-center gap-3 mt-2.5">
            <span className="text-sm text-white/90 font-semibold">
              {totalQuestions} questions
            </span>
            <span className="text-sm text-white/60">•</span>
            <span className="text-sm text-white/90 font-semibold">
              {level.studyMaterial.length} study concepts
            </span>
          </div>

          <div className="flex flex-col gap-2 mt-4">
            {/* Study tools */}
            <div className="flex gap-2 flex-wrap">
              <button
                disabled
                onClick={() => setLocation(`/study/${level.id}?view=summary`)}
                data-testid={`button-overview-${level.id}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold bg-white/10 text-white/50 border border-white/10 cursor-not-allowed select-none"
              >
                <BookOpen size={15} />
                Chapter Overview
              </button>
              <button
                disabled
                onClick={onStudy}
                data-testid={`button-study-${level.id}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold bg-white/10 text-white/50 border border-white/10 cursor-not-allowed select-none"
              >
                <Layers size={15} />
                Flashcards
              </button>
            </div>

            {/* Practice / test options - always visible as a pair */}
            <div className="flex items-center gap-2 pt-1 border-t border-white/10 flex-wrap">
              <span className="text-xs font-bold text-white/90">Practice:</span>
              {hasInProgress ? (
                <>
                  <button
                    disabled
                    onClick={onPlay}
                    data-testid={`button-continue-${level.id}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold bg-white/10 text-white/50 border border-white/10 cursor-not-allowed select-none"
                  >
                    <PlayCircle size={15} />
                    Continue Quiz
                  </button>
                  <button
                    disabled
                    onClick={handleStartOver}
                    data-testid={`button-restart-${level.id}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold bg-white/10 text-white/50 border border-white/10 cursor-not-allowed select-none"
                  >
                    <RotateCcw size={15} />
                    Restart Quiz
                  </button>
                </>
              ) : (
                <button
                  disabled
                  onClick={onPlay}
                  data-testid={`button-level-${level.id}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold bg-white/10 text-white/50 border border-white/10 cursor-not-allowed select-none"
                >
                  <Play size={15} />
                  {hasPlayed ? "Quiz Again" : "Practice Quiz"}
                </button>
              )}
              <button
                disabled
                onClick={() => setLocation(`/deep-dive/${level.id}?from=/`)}
                data-testid={`button-deep-dive-${level.id}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold bg-white/10 text-white/50 border border-white/10 cursor-not-allowed select-none"
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
                data-testid={`button-risk-toggle-${level.id}`}
              >
                <AlertTriangle size={13} />
                {riskPoints.length} Common Survey Risk Points
                {riskExpanded ? <ChevronUp size={13} className="ml-auto" /> : <ChevronDown size={13} className="ml-auto" />}
              </button>
              {riskExpanded && (
                <ul className="mt-2 flex flex-col gap-1.5" data-testid={`list-risk-points-${level.id}`}>
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
