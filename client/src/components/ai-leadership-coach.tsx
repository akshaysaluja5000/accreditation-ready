import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrainCircuit, Loader2, TrendingUp, Volume2, VolumeX, FlaskConical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { apiRequest } from "@/lib/queryClient";

interface LevelStat {
  levelId: string;
  levelName: string;
  attempts: number;
  avgScore: number;
}

interface AiLeadershipCoachProps {
  isDemo?: boolean;
}

const DEMO_LEVEL_STATS: LevelStat[] = [
  { levelId: "h1", levelName: "Patient Rights & Responsibilities", attempts: 34, avgScore: 82 },
  { levelId: "h3", levelName: "Medication Management", attempts: 31, avgScore: 68 },
  { levelId: "h2", levelName: "Infection Control", attempts: 29, avgScore: 74 },
  { levelId: "h5", levelName: "Emergency Management", attempts: 18, avgScore: 71 },
  { levelId: "h4", levelName: "Environment of Care", attempts: 22, avgScore: 88 },
];

const DEMO_INSIGHTS = `UNIT READINESS SUMMARY - MIDWEST ORTHOPEDIC SPECIALTY HOSPITAL

Overall unit readiness stands at 77% average accuracy across 10 active learners, placing the team in a Moderate Risk preparedness band. Seven staff members were active today, indicating strong daily engagement momentum.

PRIORITY FOCUS AREAS
▸ Medication Management (68%). Performance is below the 70% threshold. Recommend targeted review of high-alert medication protocols and two-patient ID verification workflows before the next practice survey.
▸ Infection Control (74%). Hand hygiene compliance questions are the most frequently missed. Focus review on WHO 5 Moments and contact precaution entry/exit procedures.
▸ Emergency Management (71%). Fire response (RACE/PASS) and code procedures show the highest miss rates. Consider a tabletop drill exercise this quarter.

STRENGTHS
▸ Environment of Care (88%) and Patient Rights (82%) show strong unit-wide mastery.
▸ Rachel Kim (90% accuracy, 30-day streak) is performing at mastery level and may be suited for a peer-coaching role.
▸ 7 of 10 staff completed training today, above the 60% daily engagement benchmark.

RECOMMENDED NEXT STEPS
1. Schedule a focused 20-minute Medication Management review session this week.
2. Assign the Infection Control refresher module to the 3 learners below 70% accuracy.
3. Recognize top performers at next huddle to reinforce engagement momentum.

Survey readiness window: 6–8 weeks with current trajectory.`;

export function AiLeadershipCoach({ isDemo = false }: AiLeadershipCoachProps) {
  const [insights, setInsights] = useState<string | null>(isDemo ? DEMO_INSIGHTS : null);
  const [levelStats, setLevelStats] = useState<LevelStat[]>(isDemo ? DEMO_LEVEL_STATS : []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const synthRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (isDemo) {
      setInsights(DEMO_INSIGHTS);
      setLevelStats(DEMO_LEVEL_STATS);
    } else {
      setInsights(null);
      setLevelStats([]);
    }
    setError(null);
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
  }, [isDemo]);

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleSpeak = useCallback((text: string) => {
    if (!window.speechSynthesis) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.95;
    utterance.pitch = 1;

    const voices = window.speechSynthesis.getVoices();
    const preferred = voices.find(v => v.lang.startsWith("en") && v.name.includes("Google"))
      || voices.find(v => v.lang.startsWith("en-US"))
      || voices.find(v => v.lang.startsWith("en"));
    if (preferred) utterance.voice = preferred;

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    synthRef.current = utterance;
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  }, [isSpeaking]);

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await apiRequest("POST", "/api/admin/ai-insights", {});
      const data = await res.json();
      if (data.error) {
        setError(data.error);
      } else {
        setInsights(data.insights);
        setLevelStats(data.levelStats || []);
      }
    } catch (e: any) {
      setError("Unable to generate insights right now. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-2xl bg-card border border-card-border overflow-hidden">
      <div className="p-5 border-b border-card-border flex items-center justify-between gap-2">
        <div>
          <h3 className="font-bold text-base flex items-center gap-2">
            <BrainCircuit size={18} className="text-primary" />
            AI Leadership Coach
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            Get AI-generated insights on unit readiness, priority focus areas, and actionable next steps for survey prep.
          </p>
        </div>
        {isDemo && (
          <span className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full border border-orange-500/50 bg-orange-500/15 text-orange-500 flex-shrink-0" data-testid="badge-demo-coach">
            <FlaskConical size={10} /> Demo
          </span>
        )}
      </div>

      <div className="p-5">
        {!isDemo && !insights && !loading && (
          <Button
            onClick={handleGenerate}
            className="gap-2 w-full"
            data-testid="button-ai-insights"
          >
            <TrendingUp size={16} />
            Generate Unit Readiness Report
          </Button>
        )}

        {loading && (
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground py-6" data-testid="ai-insights-loading">
            <Loader2 size={18} className="animate-spin" />
            Analyzing unit-wide performance data...
          </div>
        )}

        <AnimatePresence>
          {insights && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col gap-4"
            >
              {levelStats.length > 0 && (
                <div className="rounded-xl bg-muted/50 p-4">
                  <h4 className="text-xs font-bold text-foreground/60 uppercase tracking-wider mb-3">Topic Performance</h4>
                  <div className="flex flex-col gap-2">
                    {levelStats.map((l) => (
                      <div key={l.levelId} className="flex items-center gap-3 text-sm">
                        <span className="flex-1 font-medium truncate">{l.levelName}</span>
                        <span className="text-xs text-muted-foreground">{l.attempts} attempt{l.attempts !== 1 ? "s" : ""}</span>
                        <span className={`font-bold min-w-[3rem] text-right ${
                          l.avgScore >= 80 ? "text-chart-1" : l.avgScore >= 50 ? "text-chart-4" : "text-destructive"
                        }`}>
                          {l.avgScore}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="rounded-xl border border-primary/40 bg-primary/8 p-4" data-testid="ai-insights-response">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <BrainCircuit size={16} className="text-primary" />
                    <span className="text-sm font-bold text-primary">AI Leadership Insights</span>
                    {isDemo && (
                      <span className="text-[10px] font-bold text-orange-500 uppercase tracking-wide">· Sample</span>
                    )}
                  </div>
                  {typeof window !== "undefined" && window.speechSynthesis && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleSpeak(insights)}
                      className={`h-8 w-8 p-0 ${isSpeaking ? "text-primary" : "text-muted-foreground"}`}
                      data-testid="button-speak-insights"
                    >
                      {isSpeaking ? <VolumeX size={16} /> : <Volume2 size={16} />}
                    </Button>
                  )}
                </div>
                <div className="text-sm text-foreground leading-relaxed whitespace-pre-line">
                  {insights}
                </div>
                <p className="text-sm text-muted-foreground mt-4 italic" data-testid="text-insights-disclaimer">
                  {isDemo
                    ? "This is sample data for demonstration purposes. Switch to Live for real facility insights."
                    : "Check your organization's policies; this is a learning aid, not clinical guidance."}
                </p>
              </div>

              {!isDemo && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleGenerate}
                  disabled={loading}
                  className="gap-2 self-start"
                  data-testid="button-refresh-insights"
                >
                  <TrendingUp size={14} />
                  Refresh Report
                </Button>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {error && (
          <p className="text-sm text-destructive mt-2 text-center" data-testid="ai-insights-error">{error}</p>
        )}
      </div>
    </div>
  );
}
