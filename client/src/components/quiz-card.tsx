import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, Lightbulb, ChevronDown, ChevronUp } from "lucide-react";
import { playCorrectSound, playWrongSound } from "@/lib/sounds";
import { AiTutorBox } from "@/components/ai-tutor-box";
import type { Question } from "@shared/schema";

interface QuizCardProps {
  question: Question;
  onAnswer: (selectedIndex: number) => void;
  disabled?: boolean;
  previousAnswer?: { selectedIndex: number; correct: boolean } | null;
  module?: "hospital" | "asc" | "dnv";
}

export function QuizCard({ question, onAnswer, disabled, previousAnswer, module }: QuizCardProps) {
  const [selected, setSelected] = useState<number | null>(previousAnswer?.selectedIndex ?? null);
  const [showResult, setShowResult] = useState(!!previousAnswer);
  const [tutorOpen, setTutorOpen] = useState(false);

  useEffect(() => {
    setSelected(previousAnswer?.selectedIndex ?? null);
    setShowResult(!!previousAnswer);
    setTutorOpen(false);
  }, [question.id, previousAnswer]);

  const handleSelect = (index: number) => {
    if (disabled || showResult) return;
    setSelected(index);
    setShowResult(true);
    if (index === question.correctIndex) {
      playCorrectSound();
    } else {
      playWrongSound();
    }
    onAnswer(index);
  };

  const isCorrect = selected === question.correctIndex;

  const isYesNoFormat = question.options.every(opt => /^(yes|no)\s*[—\-]/i.test(opt.trim()));

  function parseYesNoOption(opt: string): { label: string; explanation: string } {
    const match = opt.match(/^(yes|no)\s*[—\-]\s*([\s\S]*)/i);
    if (!match) return { label: "", explanation: opt };
    return { label: match[1].toUpperCase(), explanation: match[2] };
  }

  return (
    <motion.div
      className="w-full max-w-lg mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="rounded-2xl bg-card border-2 border-card-border p-6 flex flex-col gap-5 shadow-lg">
        {question.scenario && (
          <div className="bg-accent/50 rounded-xl p-4 border border-accent">
            <p className="text-base text-foreground/70 italic leading-relaxed" data-testid="text-scenario">
              {question.scenario}
            </p>
          </div>
        )}

        <h3 className="text-xl font-black leading-snug" data-testid="text-question">
          {question.question}
        </h3>

        <div className="flex flex-col gap-3">
          {question.options.map((option, index) => {
            let optionStyle = "border-border bg-background";
            if (showResult) {
              if (index === question.correctIndex) {
                optionStyle = "border-chart-1 bg-chart-1/10 text-chart-1";
              } else if (index === selected && !isCorrect) {
                optionStyle = "border-destructive bg-destructive/10 text-destructive";
              }
            } else if (index === selected) {
              optionStyle = "border-primary bg-primary/10";
            }

            if (isYesNoFormat) {
              const { label, explanation } = parseYesNoOption(option);
              const isYes = label === "YES";
              let badgeColor = isYes
                ? "bg-chart-1/15 text-chart-1 border-chart-1/30"
                : "bg-destructive/15 text-destructive border-destructive/30";
              if (showResult) {
                if (index === question.correctIndex) badgeColor = "bg-chart-1/20 text-chart-1 border-chart-1/50";
                else if (index === selected && !isCorrect) badgeColor = "bg-destructive/20 text-destructive border-destructive/50";
                else badgeColor = "bg-muted/40 text-muted-foreground border-border";
              }

              return (
                <motion.button
                  key={index}
                  className={`w-full text-left p-4 rounded-xl border-2 font-medium transition-colors ${optionStyle} ${
                    !showResult && !disabled ? "cursor-pointer" : "cursor-default"
                  }`}
                  onClick={() => handleSelect(index)}
                  whileTap={!showResult && !disabled ? { scale: 0.98 } : {}}
                  data-testid={`button-option-${index}`}
                >
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-current/20 flex items-center justify-center text-sm font-bold mt-0.5">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <div className="flex-1 min-w-0">
                      <span className={`inline-block px-2.5 py-0.5 rounded-md border text-xs font-black tracking-widest uppercase mb-1.5 ${badgeColor}`}>
                        {label}
                      </span>
                      <p className="text-sm leading-relaxed text-foreground/80">{explanation}</p>
                    </div>
                    {showResult && index === question.correctIndex && (
                      <CheckCircle2 size={20} className="flex-shrink-0 text-chart-1 mt-0.5" />
                    )}
                    {showResult && index === selected && !isCorrect && (
                      <XCircle size={20} className="flex-shrink-0 text-destructive mt-0.5" />
                    )}
                  </div>
                </motion.button>
              );
            }

            return (
              <motion.button
                key={index}
                className={`w-full text-left p-4 rounded-xl border-2 font-medium transition-colors ${optionStyle} ${
                  !showResult && !disabled ? "cursor-pointer" : "cursor-default"
                }`}
                onClick={() => handleSelect(index)}
                whileTap={!showResult && !disabled ? { scale: 0.98 } : {}}
                data-testid={`button-option-${index}`}
              >
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-current/20 flex items-center justify-center text-sm font-bold mt-0.5">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="text-base leading-relaxed">{option}</span>
                  {showResult && index === question.correctIndex && (
                    <CheckCircle2 size={20} className="ml-auto flex-shrink-0 text-chart-1 mt-0.5" />
                  )}
                  {showResult && index === selected && !isCorrect && (
                    <XCircle size={20} className="ml-auto flex-shrink-0 text-destructive mt-0.5" />
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence>
          {showResult && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div
                className={`rounded-xl p-4 flex gap-3 ${
                  isCorrect
                    ? "bg-chart-1/10 border border-chart-1/20"
                    : "bg-destructive/10 border border-destructive/20"
                }`}
              >
                <Lightbulb
                  size={20}
                  className={`flex-shrink-0 mt-0.5 ${isCorrect ? "text-chart-1" : "text-destructive"}`}
                />
                <div>
                  <p className={`text-base font-bold mb-1 ${isCorrect ? "text-chart-1" : "text-destructive"}`}>
                    {isCorrect ? `Correct! +${question.xpReward} XP` : "Not quite!"}
                  </p>
                  {!isCorrect && (
                    <p className="text-base font-semibold mb-1" data-testid="text-correct-answer">
                      Correct answer: {question.options[question.correctIndex]}
                    </p>
                  )}
                  <p className="text-base text-foreground/70 leading-relaxed" data-testid="text-explanation">
                    {question.explanation}
                  </p>
                  {question.tutor && (
                    <div className="mt-3">
                      <button
                        type="button"
                        onClick={() => setTutorOpen((v) => !v)}
                        className="flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors"
                        data-testid="button-toggle-tutor"
                      >
                        {tutorOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                        {tutorOpen ? "Hide explanation" : "Show explanation"}
                      </button>
                      <AnimatePresence initial={false}>
                        {tutorOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="space-y-2 pt-2">
                              {!isCorrect && selected !== null && question.tutor.whyWrong?.[String.fromCharCode(65 + selected)] && (
                                <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-3" data-testid="text-tutor-why-wrong">
                                  <p className="text-xs font-bold uppercase tracking-wide text-destructive mb-1">
                                    Why your answer was off
                                  </p>
                                  <p className="text-sm text-foreground/80 leading-relaxed">
                                    {question.tutor.whyWrong[String.fromCharCode(65 + selected)]}
                                  </p>
                                </div>
                              )}
                              <div className="rounded-lg border border-chart-1/20 bg-chart-1/5 p-3" data-testid="text-tutor-why-correct">
                                <p className="text-xs font-bold uppercase tracking-wide text-chart-1 mb-1">
                                  Why the correct answer is right
                                </p>
                                <p className="text-sm text-foreground/80 leading-relaxed">
                                  {question.tutor.whyCorrect}
                                </p>
                              </div>
                              <div className="rounded-lg border border-border bg-muted/40 p-3" data-testid="text-tutor-operational">
                                <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1">
                                  On the floor
                                </p>
                                <p className="text-sm text-foreground/80 leading-relaxed">
                                  {question.tutor.operationalContext}
                                </p>
                              </div>
                              {question.cmsTag && (
                                <p className="text-xs text-muted-foreground italic" data-testid="text-cms-tag">
                                  Reference: {question.cmsTag}
                                </p>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                  {selected !== null && (
                    <AiTutorBox
                      questionText={question.question}
                      userAnswer={question.options[selected]}
                      correctAnswer={question.options[question.correctIndex]}
                      explanation={question.explanation}
                      allOptions={question.options}
                      module={module}
                    />
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
