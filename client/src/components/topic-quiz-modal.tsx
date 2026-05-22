import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { apiRequest } from "@/lib/queryClient";
import {
  BrainCircuit, CheckCircle2, XCircle, ChevronRight,
  Trophy, Loader2, AlertTriangle, RotateCcw,
} from "lucide-react";

export type SearchEntry = {
  id: string;
  title: string;
  subtitle: string;
  module: "hospital" | "asc" | "dnv";
  levelId: string;
  aiContext: string;
};

type QuizQuestion = {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

type Phase = "loading" | "quiz" | "done" | "error";

const LETTER = ["A", "B", "C", "D"];

export function TopicQuizModal({
  entry,
  open,
  onClose,
}: {
  entry: SearchEntry | null;
  open: boolean;
  onClose: () => void;
}) {
  const [phase, setPhase] = useState<Phase>("loading");
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [qIndex, setQIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");

  const loadingRef = useRef(false);

  function resetState() {
    setPhase("loading");
    setQuestions([]);
    setQIndex(0);
    setSelected(null);
    setRevealed(false);
    setScore(0);
    setErrorMsg("");
    loadingRef.current = false;
  }

  async function loadQuiz(e: SearchEntry) {
    if (loadingRef.current) return;
    loadingRef.current = true;
    setPhase("loading");
    setQuestions([]);
    setQIndex(0);
    setSelected(null);
    setRevealed(false);
    setScore(0);
    setErrorMsg("");
    try {
      const data = await apiRequest("POST", "/api/ai/topic-quiz", {
        topic: e.title,
        context: e.aiContext?.slice(0, 3500),
        module: e.module,
      });
      const json = await data.json();
      if (json.error) throw new Error(json.error);
      setQuestions(json.questions);
      setPhase("quiz");
    } catch (err: any) {
      setErrorMsg(err.message || "Could not generate quiz. Please try again.");
      setPhase("error");
    } finally {
      loadingRef.current = false;
    }
  }

  useEffect(() => {
    if (open && entry) {
      loadQuiz(entry);
    }
    if (!open) {
      loadingRef.current = false;
    }
  }, [open, entry?.id]);

  function handleOpen(isOpen: boolean) {
    if (!isOpen) onClose();
  }

  function pick(idx: number) {
    if (revealed) return;
    setSelected(idx);
    setRevealed(true);
    if (idx === questions[qIndex].correctIndex) setScore((s) => s + 1);
  }

  function next() {
    if (qIndex + 1 >= questions.length) {
      setPhase("done");
    } else {
      setQIndex((i) => i + 1);
      setSelected(null);
      setRevealed(false);
    }
  }

  const q = questions[qIndex];
  const pct = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;

  return (
    <Dialog open={open} onOpenChange={handleOpen}>
      <DialogContent className="max-w-lg w-full gap-0 p-0 flex flex-col max-h-[90dvh]">
        {/* Header — always visible, never scrolls away */}
        <DialogHeader className="px-6 pt-5 pb-4 border-b border-border flex-shrink-0">
          <div className="flex items-center gap-2">
            <BrainCircuit size={18} className="text-primary flex-shrink-0" />
            <DialogTitle className="text-base font-black leading-tight">
              {entry?.title ?? "Topic Quiz"}
            </DialogTitle>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            AI-generated · {entry?.module === "asc" ? "AAAHC" : "Joint Commission"} compliance focus
          </p>
        </DialogHeader>

        <div className="px-6 py-5 overflow-y-auto flex-1">
          <AnimatePresence mode="wait">

            {/* Loading */}
            {phase === "loading" && (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center gap-4 py-10"
              >
                <Loader2 size={32} className="animate-spin text-primary" />
                <p className="text-sm text-muted-foreground font-semibold text-center">
                  Generating 5 questions on<br />
                  <span className="text-foreground font-black">{entry?.title}</span>…
                </p>
              </motion.div>
            )}

            {/* Error */}
            {phase === "error" && (
              <motion.div
                key="error"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center gap-4 py-8"
              >
                <AlertTriangle size={28} className="text-destructive" />
                <p className="text-sm text-center text-muted-foreground">{errorMsg}</p>
                <Button size="sm" variant="outline" onClick={() => entry && loadQuiz(entry)}>
                  <RotateCcw size={14} className="mr-1.5" /> Try Again
                </Button>
              </motion.div>
            )}

            {/* Quiz */}
            {phase === "quiz" && q && (
              <motion.div
                key={`q-${qIndex}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
                className="flex flex-col gap-4"
              >
                {/* Progress */}
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-black uppercase tracking-wider text-muted-foreground">
                    {qIndex + 1} / {questions.length}
                  </span>
                  <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full rounded-full bg-primary transition-all duration-300"
                      style={{ width: `${((qIndex) / questions.length) * 100}%` }}
                    />
                  </div>
                  <span className="text-[11px] font-bold text-emerald-500">{score} correct</span>
                </div>

                {/* Question */}
                <p className="text-sm font-bold leading-snug" data-testid="text-topic-question">
                  {q.question}
                </p>

                {/* Options */}
                <div className="flex flex-col gap-2">
                  {q.options.map((opt, i) => {
                    const isCorrect = i === q.correctIndex;
                    const isSelected = selected === i;

                    let classes =
                      "w-full text-left px-4 py-3 rounded-xl border text-sm font-semibold transition-all";

                    if (!revealed) {
                      classes += " border-border hover:border-primary/50 hover:bg-primary/5 active:scale-[0.99]";
                    } else if (isCorrect) {
                      classes += " border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400";
                    } else if (isSelected) {
                      classes += " border-destructive bg-destructive/10 text-destructive";
                    } else {
                      classes += " border-border opacity-50";
                    }

                    return (
                      <button
                        key={i}
                        onClick={() => pick(i)}
                        disabled={revealed}
                        className={classes}
                        data-testid={`button-option-${i}`}
                      >
                        <span className="font-black text-xs mr-2 opacity-60">{LETTER[i]}</span>
                        {opt}
                        {revealed && isCorrect && (
                          <CheckCircle2 size={14} className="inline ml-2 text-emerald-500" />
                        )}
                        {revealed && isSelected && !isCorrect && (
                          <XCircle size={14} className="inline ml-2 text-destructive" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation */}
                {revealed && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="rounded-xl border border-primary/20 bg-primary/5 px-4 py-3"
                  >
                    <p className="text-[10px] font-black uppercase tracking-wider text-primary mb-1">Why</p>
                    <p className="text-xs text-foreground/80 leading-relaxed">{q.explanation}</p>
                  </motion.div>
                )}

                {/* Next */}
                {revealed && (
                  <Button
                    onClick={next}
                    className="w-full"
                    data-testid="button-next-question"
                  >
                    {qIndex + 1 >= questions.length ? "See Results" : "Next Question"}
                    <ChevronRight size={16} className="ml-1" />
                  </Button>
                )}
              </motion.div>
            )}

            {/* Done */}
            {phase === "done" && (
              <motion.div
                key="done"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-5 py-4"
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${
                  pct >= 80 ? "bg-emerald-500" : pct >= 60 ? "bg-orange-500" : "bg-red-500"
                }`}>
                  <Trophy size={28} className="text-white" />
                </div>

                <div className="text-center">
                  <p className="text-3xl font-black">{score}/{questions.length}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {pct >= 80
                      ? "Strong grasp of this topic."
                      : pct >= 60
                      ? "Good start — review the explanations to reinforce."
                      : "Keep practicing — this is a high-risk area."}
                  </p>
                </div>

                {pct < 100 && (
                  <div className="w-full rounded-xl bg-orange-500/10 border border-orange-500/20 px-4 py-3">
                    <p className="text-xs font-bold text-orange-500">
                      Survey tip: This topic is frequently cited. Review the full chapter in the Compliance Handbook for documentation requirements surveyors look for.
                    </p>
                  </div>
                )}

                <div className="flex gap-2 w-full">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => entry && loadQuiz(entry)}
                    data-testid="button-retake-topic-quiz"
                  >
                    <RotateCcw size={14} className="mr-1.5" /> Retake
                  </Button>
                  <Button className="flex-1" onClick={onClose} data-testid="button-done-topic-quiz">
                    Done
                  </Button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
}
