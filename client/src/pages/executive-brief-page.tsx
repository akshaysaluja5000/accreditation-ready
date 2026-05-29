import { useState } from "react";
import { useLocation } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, Briefcase, RefreshCw, Play, TrendingUp, TrendingDown,
  Minus, Mail, Printer, CheckCircle2, AlertCircle, Clock,
  ShieldAlert, BellRing, Globe, ChevronDown, ChevronUp, Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, queryClient } from "@/lib/queryClient";

interface TopRisk {
  category: string;
  reason: string;
  severity: "high" | "medium" | "low";
  count: number;
}

interface ExecutiveBrief {
  id: number;
  facilityId: number;
  weekOf: string;
  readinessScore: number;
  previousScore: number | null;
  trendDirection: string;
  topRisks: string;
  overdueTasksCount: number;
  expiringDocsCount: number;
  trainingAlertsCount: number;
  regulatoryFindingsCount: number;
  daysToNextEvent: number | null;
  narrativeSummary: string;
  emailSentAt: string | null;
  emailSentTo: string;
  createdAt: string;
}

const SEVERITY_STYLE: Record<string, string> = {
  high:   "border-l-red-500 bg-red-50",
  medium: "border-l-amber-500 bg-amber-50",
  low:    "border-l-blue-500 bg-blue-50",
};
const SEVERITY_DOT: Record<string, string> = {
  high: "bg-red-500", medium: "bg-amber-500", low: "bg-blue-400",
};

function TrendIndicator({ direction, score, previous }: { direction: string; score: number; previous: number | null }) {
  if (direction === "up") return (
    <span className="flex items-center gap-1 text-emerald-600 font-semibold text-sm">
      <TrendingUp className="w-4 h-4" />
      Improving {previous != null && `(+${score - previous}% from ${previous}%)`}
    </span>
  );
  if (direction === "down") return (
    <span className="flex items-center gap-1 text-red-600 font-semibold text-sm">
      <TrendingDown className="w-4 h-4" />
      Declining {previous != null && `(${score - previous}% from ${previous}%)`}
    </span>
  );
  return (
    <span className="flex items-center gap-1 text-muted-foreground text-sm">
      <Minus className="w-4 h-4" />
      Stable {previous != null && `(was ${previous}%)`}
    </span>
  );
}

function ScoreRing({ score }: { score: number }) {
  const color = score >= 90 ? "#16a34a" : score >= 75 ? "#d97706" : "#dc2626";
  const radius = 52; const circ = 2 * Math.PI * radius;
  const offset = circ - (score / 100) * circ;
  return (
    <div className="relative w-32 h-32 mx-auto">
      <svg width="128" height="128" className="-rotate-90">
        <circle cx="64" cy="64" r={radius} fill="none" stroke="#e2e8f0" strokeWidth="10" />
        <circle cx="64" cy="64" r={radius} fill="none" stroke={color} strokeWidth="10"
          strokeDasharray={circ} strokeDashoffset={offset}
          strokeLinecap="round" style={{ transition: "stroke-dashoffset .8s ease" }} />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-black" style={{ color }}>{score}%</span>
        <span className="text-xs text-muted-foreground">Readiness</span>
      </div>
    </div>
  );
}

function BriefCard({ brief, isPrint = false }: { brief: ExecutiveBrief; isPrint?: boolean }) {
  let topRisks: TopRisk[] = [];
  try { topRisks = JSON.parse(brief.topRisks); } catch { topRisks = []; }
  const weekLabel = new Date(brief.weekOf + "T00:00:00").toLocaleDateString("en-US", {
    month: "long", day: "numeric", year: "numeric",
  });

  return (
    <div id="brief-print-content" className={`bg-card rounded-2xl border ${isPrint ? "shadow-none print:block" : "shadow-sm"} overflow-hidden`}>
      {/* Brief header */}
      <div className="bg-[#1a2744] px-6 py-5 flex items-center justify-between">
        <div>
          <p className="text-blue-300 text-xs font-semibold uppercase tracking-widest mb-1">Accreditation Ready</p>
          <h2 className="text-white text-lg font-bold">Compliance Brief</h2>
          <p className="text-slate-400 text-sm mt-0.5">Week of {weekLabel}</p>
        </div>
        <Briefcase className="w-8 h-8 text-blue-400 print:hidden" />
      </div>

      <div className="p-6 space-y-6">
        {/* Score + Trend */}
        <div className="flex flex-col sm:flex-row items-center gap-6 py-2">
          <ScoreRing score={brief.readinessScore} />
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-xl font-bold text-foreground">AAAHC Readiness Score</h3>
            <TrendIndicator direction={brief.trendDirection} score={brief.readinessScore} previous={brief.previousScore} />
            <p className="text-xs text-muted-foreground">
              Generated {new Date(brief.createdAt).toLocaleDateString()} at {new Date(brief.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </p>
          </div>
        </div>

        {/* Key metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Overdue Tasks",          value: brief.overdueTasksCount,        icon: AlertCircle,   cls: "text-red-600" },
            { label: "Expiring Docs (30d)",     value: brief.expiringDocsCount,        icon: Clock,         cls: "text-amber-600" },
            { label: "Training Alerts",         value: brief.trainingAlertsCount,      icon: BellRing,      cls: "text-violet-600" },
            { label: "Regulatory Findings",     value: brief.regulatoryFindingsCount,  icon: Globe,         cls: "text-blue-600" },
          ].map(({ label, value, icon: Icon, cls }) => (
            <div key={label} className="bg-muted/30 rounded-xl p-3 text-center border">
              <Icon className={`w-4 h-4 mx-auto mb-1 ${cls}`} />
              <div className={`text-2xl font-black ${cls}`}>{value}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{label}</div>
            </div>
          ))}
        </div>

        {/* Days to next event */}
        {brief.daysToNextEvent != null && (
          <div className="bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 flex items-center gap-3">
            <Clock className="w-4 h-4 text-blue-600 shrink-0" />
            <p className="text-sm text-blue-800">
              <strong>Next compliance event:</strong> {brief.daysToNextEvent} day{brief.daysToNextEvent !== 1 ? "s" : ""} away
            </p>
          </div>
        )}

        {/* Top 3 risk areas */}
        {topRisks.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Top Risk Areas
            </h3>
            <div className="space-y-2">
              {topRisks.map((risk, i) => (
                <div key={risk.category} className={`border-l-4 rounded-r-xl px-4 py-3 ${SEVERITY_STYLE[risk.severity] ?? SEVERITY_STYLE.medium}`}>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className={`w-2 h-2 rounded-full shrink-0 ${SEVERITY_DOT[risk.severity] ?? SEVERITY_DOT.medium}`} />
                    <span className="text-sm font-semibold text-foreground">
                      {i + 1}. {risk.category}
                    </span>
                    <Badge variant="outline" className="text-xs ml-auto">
                      {risk.count} item{risk.count !== 1 ? "s" : ""}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground ml-4">{risk.reason}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Narrative summary */}
        {brief.narrativeSummary && (
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Executive Summary
            </h3>
            <p className="text-sm text-foreground leading-relaxed bg-muted/20 rounded-xl px-5 py-4 border italic">
              {brief.narrativeSummary}
            </p>
          </div>
        )}

        {/* Email sent status */}
        {brief.emailSentAt && (
          <div className="flex items-center gap-2 text-xs text-muted-foreground pt-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            Brief sent {new Date(brief.emailSentAt).toLocaleDateString()} to{" "}
            {JSON.parse(brief.emailSentTo ?? "[]").join(", ")}
          </div>
        )}
      </div>
    </div>
  );
}

function PastBriefRow({ brief, onClick, isOpen }: { brief: ExecutiveBrief; onClick: () => void; isOpen: boolean }) {
  const trend = brief.trendDirection;
  const Icon = trend === "up" ? TrendingUp : trend === "down" ? TrendingDown : Minus;
  const trendCls = trend === "up" ? "text-emerald-600" : trend === "down" ? "text-red-600" : "text-muted-foreground";
  const weekLabel = new Date(brief.weekOf + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

  return (
    <div>
      <button onClick={onClick}
        className="w-full flex items-center justify-between px-4 py-3 hover:bg-muted/20 transition-colors text-left">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-foreground">{weekLabel}</span>
          <Badge variant="outline" className="text-xs">{brief.readinessScore}%</Badge>
          <Icon className={`w-3.5 h-3.5 ${trendCls}`} />
        </div>
        <div className="flex items-center gap-2">
          {brief.emailSentAt && <Mail className="w-3.5 h-3.5 text-muted-foreground" />}
          {isOpen ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <div className="px-4 pb-4">
              <BriefCard brief={brief} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ExecutiveBriefPage() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const { data: briefs = [], isLoading } = useQuery<ExecutiveBrief[]>({
    queryKey: ["/api/compliance/executive-briefs"],
  });

  const latestBrief = briefs[0] ?? null;
  const pastBriefs  = briefs.slice(1);

  const runMutation = useMutation({
    mutationFn: (): Promise<{ brief: ExecutiveBrief }> =>
      apiRequest("POST", "/api/compliance/executive-readiness-agent/run"),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/compliance/executive-briefs"] });
      toast({ title: "Brief Generated", description: "Your weekly compliance brief is ready." });
    },
    onError: () => toast({ title: "Generation Failed", variant: "destructive" }),
  });

  const emailMutation = useMutation({
    mutationFn: ({ id, recipients }: { id: number; recipients: string[] }) =>
      apiRequest("POST", `/api/compliance/executive-briefs/${id}/send-email`, { recipients }),
    onSuccess: (_, { recipients }) => {
      queryClient.invalidateQueries({ queryKey: ["/api/compliance/executive-briefs"] });
      setShowEmailForm(false);
      setEmailInput("");
      toast({ title: "Brief Sent", description: `Email delivered to ${recipients.join(", ")}` });
    },
    onError: (err: any) => toast({
      title: "Email Failed",
      description: err?.message ?? "Check your Resend domain configuration.",
      variant: "destructive",
    }),
  });

  const handleSendEmail = () => {
    if (!latestBrief) return;
    const recipients = emailInput.split(",").map(e => e.trim()).filter(Boolean);
    if (recipients.length === 0) { toast({ title: "Enter at least one email address.", variant: "destructive" }); return; }
    emailMutation.mutate({ id: latestBrief.id, recipients });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8 print:px-0 print:py-0 print:max-w-none">

        {/* Header - hidden when printing */}
        <div className="flex items-center justify-between gap-3 flex-wrap print:hidden">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => setLocation("/leadership")}
              data-testid="btn-back-hub" className="gap-1.5">
              <ArrowLeft className="w-4 h-4" />Hub
            </Button>
            <div className="w-px h-5 bg-border" />
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-emerald-600" />
              <h1 className="text-xl font-bold text-foreground">Executive Readiness Agent</h1>
              <Badge variant="outline" className="text-xs border-emerald-300 text-emerald-700 bg-emerald-50">
                CEO · CNO
              </Badge>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {latestBrief && (
              <>
                <Button variant="outline" size="sm" onClick={() => window.print()}
                  data-testid="btn-export-pdf" className="gap-1.5 text-xs">
                  <Printer className="w-3.5 h-3.5" />Export PDF
                </Button>
                <Button variant="outline" size="sm" onClick={() => setShowEmailForm(v => !v)}
                  data-testid="btn-send-email" className="gap-1.5 text-xs">
                  <Mail className="w-3.5 h-3.5" />Send Brief
                </Button>
              </>
            )}
            <Button onClick={() => runMutation.mutate()} disabled={runMutation.isPending}
              data-testid="btn-generate-brief"
              className="gap-2 bg-emerald-600 hover:bg-emerald-700 text-white">
              {runMutation.isPending
                ? <><RefreshCw className="w-3.5 h-3.5 animate-spin" />Generating…</>
                : <><Play className="w-3.5 h-3.5" />Generate Brief</>}
            </Button>
          </div>
        </div>

        {/* Email form */}
        <AnimatePresence>
          {showEmailForm && latestBrief && (
            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="bg-card border rounded-2xl p-5 space-y-3 print:hidden">
              <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-600" />
                Send Brief via Email
              </p>
              <div className="flex gap-2">
                <input type="text" value={emailInput} onChange={e => setEmailInput(e.target.value)}
                  placeholder="ceo@hospital.org, cno@hospital.org"
                  data-testid="input-email-recipients"
                  className="flex-1 text-sm border rounded-lg px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                <Button onClick={handleSendEmail} disabled={emailMutation.isPending}
                  data-testid="btn-confirm-send-email"
                  className="gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white">
                  {emailMutation.isPending ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
                  Send
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">Comma-separated email addresses. Requires RESEND_FROM_EMAIL domain verification.</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main content */}
        {isLoading ? (
          <div className="flex items-center justify-center h-64">
            <RefreshCw className="w-8 h-8 animate-spin text-muted-foreground" />
          </div>
        ) : !latestBrief ? (
          <div className="bg-card rounded-2xl border p-12 flex flex-col items-center gap-4 text-center">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center">
              <Briefcase className="w-7 h-7 text-emerald-600" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-lg">No brief generated yet</p>
              <p className="text-sm text-muted-foreground mt-1 max-w-sm">
                Generate your first weekly brief to get a plain-English summary of your facility's compliance readiness, trends, and top risks.
              </p>
            </div>
            <Button onClick={() => runMutation.mutate()} disabled={runMutation.isPending}
              className="gap-2 bg-emerald-600 hover:bg-emerald-700 text-white">
              {runMutation.isPending ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5" />}
              Generate First Brief
            </Button>
          </div>
        ) : (
          <>
            <BriefCard brief={latestBrief} />

            {/* Past briefs */}
            {pastBriefs.length > 0 && (
              <div className="print:hidden">
                <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  Previous Briefs ({pastBriefs.length})
                </h2>
                <div className="bg-card rounded-xl border divide-y overflow-hidden">
                  {pastBriefs.map(brief => (
                    <PastBriefRow key={brief.id} brief={brief}
                      isOpen={expandedId === brief.id}
                      onClick={() => setExpandedId(expandedId === brief.id ? null : brief.id)} />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Print-only styles */}
      <style>{`
        @media print {
          .print\\:hidden { display: none !important; }
          body { background: white !important; }
          #brief-print-content { box-shadow: none !important; border: none !important; }
        }
      `}</style>
    </div>
  );
}
