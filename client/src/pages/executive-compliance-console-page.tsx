import { useLocation } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowLeft, Radar, FileSearch2, GraduationCap, ClipboardList,
  Telescope, BriefcaseBusiness, Zap, CheckCircle2, Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth";

interface Agent {
  number: number;
  title: string;
  description: string;
  replaces: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  status: "active" | "coming-soon";
}

const AGENTS: Agent[] = [
  {
    number: 1,
    title: "Survey Readiness Agent",
    description:
      "Continuously monitors every standard across all facilities — which ones have evidence attached, which staff haven't completed training, which policies are expiring. Surfaces a live readiness score that is always current. Not a report you run — a score that never stops updating.",
    replaces: "The manual binder audit facilities run in the weeks before a survey.",
    icon: Radar,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    status: "active",
  },
  {
    number: 2,
    title: "Content Intelligence Agent",
    description:
      "When a new policy or procedure is uploaded, this agent reads it, auto-tags it to the relevant JC/AAAHC standards, generates quiz questions from it, and flags if the policy contradicts a standard. Your clearest differentiator — no other compliance platform does this automatically.",
    replaces: "Manual policy reviews and the months of lag before new content reaches staff training.",
    icon: FileSearch2,
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-500",
    status: "coming-soon",
  },
  {
    number: 3,
    title: "Staff Learning Agent",
    description:
      "Tracks each staff member's diagnostic scores, completion gaps, and quiz performance — then dynamically re-routes their learning plan. It knows who is weakest on sterile field standards and pushes those questions. Sends escalating nudges without a manager having to chase anyone.",
    replaces: "Manually assigned training plans and manager follow-up emails.",
    icon: GraduationCap,
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-600",
    status: "active",
  },
  {
    number: 4,
    title: "Regulatory Watch Agent",
    description:
      "Monitors Joint Commission, DNV, AAAHC, and CMS public channels for standard updates, new chapters, and survey focus shifts. When the NPG chapter launched January 2026, this agent would have flagged it automatically and initiated a content build task — rather than discovering the gap months later.",
    replaces: "Manual monitoring of accreditation body bulletins, field communications, and update emails.",
    icon: Telescope,
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-600",
    status: "coming-soon",
  },
  {
    number: 5,
    title: "Executive Readiness Agent",
    description:
      "Prepares the facility's readiness narrative for the CEO/CNO level — not just a dashboard, but a drafted summary of where you stand, what's at risk, and what actions are due this week. The difference between data and a briefing.",
    replaces: "Manually assembled board reports and pre-survey executive prep sessions.",
    icon: BriefcaseBusiness,
    iconBg: "bg-sky-500/10",
    iconColor: "text-sky-600",
    status: "coming-soon",
  },
];

export default function ExecutiveComplianceConsolePage() {
  const [, setLocation] = useLocation();
  const { user } = useAuth();

  const activeCount = AGENTS.filter(a => a.status === "active").length;
  const comingSoonCount = AGENTS.filter(a => a.status === "coming-soon").length;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/60">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setLocation("/leadership")}
              className="w-9 h-9 rounded-xl border border-border bg-background flex items-center justify-center hover:bg-accent transition-colors"
              data-testid="button-back-to-hub"
            >
              <ArrowLeft size={16} />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-violet-500/15 border border-violet-400/20 flex items-center justify-center">
                  <Zap size={14} className="text-violet-500" />
                </div>
                <h1 className="text-lg font-black tracking-tight text-foreground" data-testid="text-console-title">
                  Executive Compliance Console
                </h1>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5" data-testid="text-console-subtitle">
                Agent network status · {user?.username}
              </p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-emerald-500" />
              <span>{activeCount} Active</span>
            </div>
            <span className="opacity-30">·</span>
            <div className="flex items-center gap-1.5">
              <Clock size={13} className="text-muted-foreground" />
              <span>{comingSoonCount} Coming Soon</span>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col gap-8">

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl" data-testid="text-console-intro">
            Instead of staff completing forms and managers chasing compliance, the Executive Compliance Console deploys a network of specialized agents that run the platform continuously — monitoring, learning, reporting, and responding without requiring manual oversight at every step.
          </p>
        </motion.div>

        {/* Agent grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {AGENTS.map((agent, i) => {
            const Icon = agent.icon;
            const isActive = agent.status === "active";
            return (
              <motion.div
                key={agent.number}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.18, delay: i * 0.07 }}
                data-testid={`card-agent-${agent.number}`}
              >
                <div className={`rounded-2xl border bg-card p-6 h-full flex flex-col gap-4 ${!isActive ? "opacity-75" : ""}`}>
                  {/* Agent header */}
                  <div className="flex items-start gap-3">
                    <div className={`w-11 h-11 rounded-xl ${agent.iconBg} border border-border/50 flex items-center justify-center flex-shrink-0`}>
                      <Icon size={22} className={agent.iconColor} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">
                          Agent {agent.number}
                        </p>
                        {isActive ? (
                          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
                            <CheckCircle2 size={9} />
                            Active
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-muted text-muted-foreground border border-border">
                            <Clock size={9} />
                            Coming Soon
                          </span>
                        )}
                      </div>
                      <h3
                        className="font-bold text-sm text-foreground leading-tight mt-0.5"
                        data-testid={`text-agent-title-${agent.number}`}
                      >
                        {agent.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {agent.description}
                  </p>

                  {/* Footer */}
                  <div className="pt-3 border-t border-border/60">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">Replaces:</span> {agent.replaces}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Back */}
        <div className="flex justify-center pt-2">
          <Button
            variant="outline"
            onClick={() => setLocation("/leadership")}
            data-testid="button-back-to-hub-bottom"
            className="gap-2"
          >
            <ArrowLeft size={15} />
            Back to Leadership Hub
          </Button>
        </div>
      </div>
    </div>
  );
}
