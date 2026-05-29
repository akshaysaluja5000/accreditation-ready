import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ChevronDown, ChevronUp, ClipboardList, AlertCircle, CheckCircle2 } from "lucide-react";
import { getRemediationPlan } from "@/data/remediationLibrary";

interface RemediationPlanBoxProps {
  levelId: string;
  percentage: number;
}

export function RemediationPlanBox({ levelId, percentage }: RemediationPlanBoxProps) {
  const [expanded, setExpanded] = useState(true);
  const plan = getRemediationPlan(levelId, percentage);

  if (!plan) return null;

  const stepCount = plan.steps.length;
  const hasReassessment = plan.reassessmentRequired;

  const thresholdLabel =
    percentage >= 60
      ? "1 learning step recommended"
      : percentage >= 50
      ? "2 learning steps recommended"
      : "2 learning steps + supervisor check-in recommended";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
      className="w-full rounded-2xl border border-primary/25 bg-primary/5 overflow-hidden"
      data-testid="container-remediation-plan"
    >
      {/* Header row */}
      <button
        className="w-full flex items-center gap-3 px-5 py-4 text-left hover:bg-primary/5 transition-colors"
        onClick={() => setExpanded((v) => !v)}
        data-testid="button-toggle-remediation"
      >
        <div className="w-9 h-9 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
          <BookOpen size={17} className="text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold leading-tight">Learning Plan: {plan.category}</p>
          <p className="text-xs text-muted-foreground mt-0.5">{thresholdLabel}</p>
        </div>
        {expanded ? (
          <ChevronUp size={16} className="text-muted-foreground flex-shrink-0" />
        ) : (
          <ChevronDown size={16} className="text-muted-foreground flex-shrink-0" />
        )}
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 flex flex-col gap-3 border-t border-primary/15 pt-4">

              {/* Intro line */}
              <p className="text-xs text-muted-foreground leading-relaxed">
                Based on your score, we suggest the following steps to strengthen your understanding of this topic before retrying.
              </p>

              {/* Steps */}
              {plan.steps.map((step, i) => (
                <div
                  key={i}
                  className="flex gap-3 rounded-xl border border-border/60 bg-card/60 p-3.5"
                  data-testid={`remediation-step-${i + 1}`}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center mt-0.5">
                    <span className="text-[11px] font-black text-primary">{i + 1}</span>
                  </div>
                  <div className="flex flex-col gap-1 min-w-0">
                    <div className="flex items-start gap-2">
                      <ClipboardList size={13} className="text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-xs font-bold leading-snug" data-testid={`text-step-title-${i + 1}`}>
                        {step.title}
                      </p>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed pl-5" data-testid={`text-step-desc-${i + 1}`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}

              {/* Reassessment notice */}
              {hasReassessment ? (
                <div
                  className="flex gap-3 rounded-xl border border-orange-500/30 bg-orange-500/8 p-3.5 items-start"
                  data-testid="container-reassessment-notice"
                >
                  <AlertCircle size={15} className="text-orange-500 flex-shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5">
                    <p className="text-xs font-bold text-orange-500">Supervisor check-in recommended</p>
                    <p className="text-xs text-orange-500/80 leading-relaxed">
                      Because your score was below 50%, we recommend completing these steps and then confirming your readiness with your supervisor or educator before your next attempt.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex gap-2 items-start rounded-xl border border-green-500/20 bg-green-500/5 p-3">
                  <CheckCircle2 size={13} className="text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Complete {stepCount === 1 ? "this step" : "these steps"}, then try the quiz again. Retakes are unlimited. Each attempt uses a fresh set of questions.
                  </p>
                </div>
              )}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
