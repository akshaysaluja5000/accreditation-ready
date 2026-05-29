import { useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Microscope, ChevronRight, BrainCircuit } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface DeepDiveLevelInfo {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  baseLevelId: string;
  questionCount: number;
}

export default function DeepDiveSelectPage() {
  const [, setLocation] = useLocation();

  const { data: levels, isLoading } = useQuery<DeepDiveLevelInfo[]>({
    queryKey: ["/api/game/deep-dive/levels"],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen p-4 max-w-2xl mx-auto">
        <div className="flex flex-col gap-6 pt-16">
          <Skeleton className="h-12 w-64" />
          <Skeleton className="h-40 rounded-2xl" />
          <Skeleton className="h-40 rounded-2xl" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20">
      <div className="sticky top-[58px] z-40 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            data-testid="button-deep-dive-select-back"
          >
            <ArrowLeft size={16} />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-secondary/10">
              <Microscope size={18} className="text-secondary" />
            </div>
            <h1 className="font-black text-lg">Deep Dive Tracer</h1>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 pt-6">
        <motion.div
          className="game-card p-5 mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-secondary/10 flex-shrink-0">
              <BrainCircuit size={22} className="text-secondary" />
            </div>
            <div>
              <h3 className="font-bold text-sm mb-1">How Deep Dive Works</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Answer a base compliance question. Get it right, and a deeper follow-up
                question unlocks, testing expert-level knowledge. Earn{" "}
                <span className="font-bold text-secondary">Expert XP</span> for
                mastering the follow-ups. Miss the base? You move to the next question
                without the follow-up opportunity.
              </p>
            </div>
          </div>
        </motion.div>

        <h2 className="text-base font-black mb-4 flex items-center gap-2">
          <Microscope size={18} className="text-secondary" />
          Select a Topic
        </h2>

        <div className="flex flex-col gap-4">
          {levels?.map((level, index) => (
            <motion.button
              key={level.id}
              className="game-card p-5 text-left w-full"
              onClick={() => setLocation(`/deep-dive/${level.id}`)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15 }}
              whileTap={{ scale: 0.98 }}
              data-testid={`button-deep-dive-topic-${level.id}`}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${level.color}15` }}
                >
                  <Microscope size={24} style={{ color: level.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-sm">{level.name}</h3>
                    <span
                      className="px-2 py-0.5 rounded-full text-[10px] font-bold text-white"
                      style={{ backgroundColor: level.color }}
                    >
                      {level.questionCount} Q
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {level.description}
                  </p>
                </div>
                <ChevronRight
                  size={18}
                  className="text-muted-foreground flex-shrink-0 mt-3"
                />
              </div>
            </motion.button>
          ))}

        </div>
      </div>
    </div>
  );
}
