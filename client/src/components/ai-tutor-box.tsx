import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrainCircuit, Loader2, ChevronDown, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { apiRequest } from "@/lib/queryClient";

interface AiTutorBoxProps {
  questionText: string;
  userAnswer: string;
  correctAnswer: string;
  explanation: string;
  allOptions?: string[];
  module?: "hospital" | "asc" | "dnv";
}

export function AiTutorBox({ questionText, userAnswer, correctAnswer, explanation, allOptions, module }: AiTutorBoxProps) {
  const [explanations, setExplanations] = useState<string[]>([]);
  const [currentDepth, setCurrentDepth] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [speakingIndex, setSpeakingIndex] = useState<number | null>(null);
  const synthRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const maxDepth = 3;
  const depthLabels = ["Ask AI Tutor", "Go Deeper", "Go Even Deeper"];
  const depthIcons = ["🧠", "🔍", "🎓"];

  const handleAskTutor = useCallback(async (depth: number) => {
    setLoading(true);
    setError(null);
    try {
      const res = await apiRequest("POST", "/api/ai-tutor", {
        question: questionText,
        userAnswer,
        correctAnswer,
        explanation,
        depth,
        previousExplanations: explanations,
        allOptions: allOptions || [],
        module: module || "hospital",
      });
      const data = await res.json();
      setExplanations(prev => [...prev, data.aiExplanation]);
      setCurrentDepth(depth);
    } catch (e: any) {
      const msg = e?.message || "";
      if (msg.includes("429")) {
        setError("You've reached the AI Tutor limit. Please try again later.");
      } else {
        try {
          const parsed = JSON.parse(msg.substring(msg.indexOf("{")));
          setError(parsed.error || "AI Tutor is temporarily unavailable. Please try again.");
        } catch {
          setError("AI Tutor is temporarily unavailable. Please try again.");
        }
      }
    } finally {
      setLoading(false);
    }
  }, [questionText, userAnswer, correctAnswer, explanation, explanations, allOptions]);

  const handleSpeak = useCallback((text: string, index: number) => {
    if (!window.speechSynthesis) return;

    if (speakingIndex === index) {
      window.speechSynthesis.cancel();
      setSpeakingIndex(null);
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

    utterance.onend = () => setSpeakingIndex(null);
    utterance.onerror = () => setSpeakingIndex(null);

    synthRef.current = utterance;
    setSpeakingIndex(index);
    window.speechSynthesis.speak(utterance);
  }, [speakingIndex]);

  const headerLabels = ["AI Tutor", "Deep Dive", "Expert Analysis"];

  return (
    <div className="mt-3">
      {currentDepth === 0 && !loading && !error && (
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleAskTutor(1)}
          className="gap-2 text-sm font-semibold"
          data-testid="button-ask-ai-tutor"
        >
          <BrainCircuit size={16} />
          {depthLabels[0]}
        </Button>
      )}

      <AnimatePresence>
        {explanations.map((text, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div
              className={`rounded-xl border p-4 ${idx === 0 ? "mt-0" : "mt-3"} ${
                idx === 0
                  ? "border-primary/20 bg-primary/5"
                  : idx === 1
                  ? "border-violet-500/20 bg-violet-500/5"
                  : "border-orange-500/20 bg-orange-500/5"
              }`}
              data-testid={`ai-tutor-response-${idx + 1}`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-base">{depthIcons[idx]}</span>
                  <span className={`text-sm font-bold ${
                    idx === 0 ? "text-primary" : idx === 1 ? "text-violet-500" : "text-orange-500"
                  }`}>
                    {headerLabels[idx]}
                  </span>
                </div>
                {typeof window !== "undefined" && window.speechSynthesis && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSpeak(text, idx)}
                    className={`h-8 w-8 p-0 ${speakingIndex === idx ? "text-primary" : "text-muted-foreground"}`}
                    data-testid={`button-speak-${idx + 1}`}
                  >
                    {speakingIndex === idx ? <VolumeX size={16} /> : <Volume2 size={16} />}
                  </Button>
                )}
              </div>
              <div className="text-sm text-foreground/80 leading-relaxed whitespace-pre-line">
                {text}
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {loading && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground py-2 mt-3" data-testid="ai-tutor-loading">
          <Loader2 size={16} className="animate-spin" />
          AI Tutor is thinking...
        </div>
      )}

      {currentDepth > 0 && currentDepth < maxDepth && !loading && (
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleAskTutor(currentDepth + 1)}
          className="gap-2 text-sm font-semibold mt-3"
          data-testid={`button-go-deeper-${currentDepth + 1}`}
        >
          <ChevronDown size={16} />
          {depthLabels[currentDepth]}
        </Button>
      )}

      {currentDepth === maxDepth && !loading && (
        <p className="text-xs text-muted-foreground mt-3 italic" data-testid="text-ai-disclaimer">
          Check your organization's policies; this is a learning aid, not clinical guidance.
        </p>
      )}

      {error && (
        <div className="mt-2" data-testid="ai-tutor-error">
          <p className="text-sm text-destructive mb-2">{error}</p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setError(null);
              handleAskTutor(currentDepth === 0 ? 1 : currentDepth + 1);
            }}
            className="gap-2 text-sm"
            data-testid="button-retry-ai-tutor"
          >
            <BrainCircuit size={16} />
            Try Again
          </Button>
        </div>
      )}
    </div>
  );
}
