import { useState } from "react";
import { useLocation } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, Globe, RefreshCw, Play, CheckCircle2, AlertCircle,
  ExternalLink, CheckCheck, XCircle, Clock, Newspaper, ShieldAlert,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useAuth } from "@/lib/auth";

interface RegulatoryWatchFinding {
  id: number;
  facilityId: number;
  source: string;
  standardCode: string;
  title: string;
  summary: string;
  sourceUrl: string | null;
  affectedItemIds: string;
  affectedItemCount: number;
  affectedDocumentCount: number;
  status: string;
  taskId: number | null;
  scannedAt: string;
  reviewedAt: string | null;
  reviewedBy: string | null;
}

interface AgentRunResult {
  scannedAt: string;
  findingsCreated: number;
  webFetchSuccess: boolean;
  sources: string[];
  findings: RegulatoryWatchFinding[];
}

const SOURCE_CONFIG: Record<string, { label: string; className: string; dotClass: string }> = {
  aaahc: { label: "AAAHC", className: "bg-blue-100 text-blue-700 border-blue-200", dotClass: "bg-blue-500" },
  jcaho: { label: "Joint Commission", className: "bg-red-100 text-red-700 border-red-200", dotClass: "bg-red-500" },
  cms:   { label: "CMS", className: "bg-orange-100 text-orange-700 border-orange-200", dotClass: "bg-orange-500" },
};

const STATUS_CONFIG: Record<string, { label: string; icon: React.ElementType; className: string }> = {
  new:      { label: "New", icon: AlertCircle, className: "bg-amber-100 text-amber-700 border-amber-200" },
  reviewed: { label: "Reviewed", icon: CheckCircle2, className: "bg-emerald-100 text-emerald-700 border-emerald-200" },
  dismissed:{ label: "Dismissed", icon: XCircle, className: "bg-gray-100 text-gray-500 border-gray-200" },
};

function FindingCard({
  finding, onReview, onDismiss, isPending,
}: {
  finding: RegulatoryWatchFinding;
  onReview: (id: number) => void;
  onDismiss: (id: number) => void;
  isPending: boolean;
}) {
  const srcCfg = SOURCE_CONFIG[finding.source] ?? SOURCE_CONFIG.aaahc;
  const stsCfg = STATUS_CONFIG[finding.status] ?? STATUS_CONFIG.new;
  const StatusIcon = stsCfg.icon;
  const isNew = finding.status === "new";

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
      className={`bg-card rounded-2xl border overflow-hidden transition-all ${
        finding.status === "dismissed" ? "opacity-60" : ""
      }`}>
      <div className={`h-1 w-full ${srcCfg.dotClass}`} />
      <div className="p-5 space-y-3">
        <div className="flex items-start justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="outline" className={`text-xs border ${srcCfg.className}`}>
              {srcCfg.label}
            </Badge>
            <Badge variant="outline" className="text-xs font-mono font-semibold">
              {finding.standardCode}
            </Badge>
            {finding.taskId && (
              <Badge variant="outline" className="text-xs bg-primary/5 text-primary border-primary/20">
                Task Created
              </Badge>
            )}
          </div>
          <Badge variant="outline" className={`text-xs border flex items-center gap-1 ${stsCfg.className}`}>
            <StatusIcon className="w-3 h-3" />
            {stsCfg.label}
          </Badge>
        </div>

        <h3 className="font-semibold text-foreground leading-snug">{finding.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{finding.summary}</p>

        <div className="flex items-center gap-4 text-xs text-muted-foreground pt-1">
          {finding.affectedItemCount > 0 && (
            <span className="flex items-center gap-1">
              <ShieldAlert className="w-3 h-3 text-amber-500" />
              {finding.affectedItemCount} compliance item{finding.affectedItemCount !== 1 ? "s" : ""} affected
            </span>
          )}
          {finding.affectedDocumentCount > 0 && (
            <span className="flex items-center gap-1">
              <Newspaper className="w-3 h-3 text-blue-500" />
              {finding.affectedDocumentCount} polic{finding.affectedDocumentCount !== 1 ? "ies" : "y"} to review
            </span>
          )}
          <span className="ml-auto flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {new Date(finding.scannedAt).toLocaleDateString()}
          </span>
        </div>

        {(finding.sourceUrl || isNew) && (
          <div className="flex items-center justify-between pt-1 border-t">
            {finding.sourceUrl ? (
              <a href={finding.sourceUrl} target="_blank" rel="noopener noreferrer"
                className="text-xs text-primary hover:underline flex items-center gap-1">
                View source <ExternalLink className="w-3 h-3" />
              </a>
            ) : <div />}
            {isNew && (
              <div className="flex items-center gap-2" data-testid={`actions-finding-${finding.id}`}>
                <Button variant="outline" size="sm" onClick={() => onDismiss(finding.id)}
                  disabled={isPending}
                  data-testid={`btn-dismiss-finding-${finding.id}`}
                  className="h-7 text-xs gap-1.5 text-muted-foreground">
                  <XCircle className="w-3 h-3" />Dismiss
                </Button>
                <Button size="sm" onClick={() => onReview(finding.id)}
                  disabled={isPending}
                  data-testid={`btn-review-finding-${finding.id}`}
                  className="h-7 text-xs gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white">
                  <CheckCheck className="w-3 h-3" />Mark Reviewed
                </Button>
              </div>
            )}
            {finding.status !== "new" && finding.reviewedBy && (
              <span className="text-xs text-muted-foreground">
                {finding.status === "reviewed" ? "Reviewed" : "Dismissed"} by {finding.reviewedBy}
                {finding.reviewedAt && ` · ${new Date(finding.reviewedAt).toLocaleDateString()}`}
              </span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

type FilterStatus = "all" | "new" | "reviewed" | "dismissed";
type FilterSource = "all" | "aaahc" | "jcaho";

export default function RegulatoryWatchPage() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const { user } = useAuth();

  const isAsc = user?.organizationType === "asc";
  const isDnv = user?.organizationType === "dnv";
  const defaultSource: FilterSource = isAsc ? "aaahc" : "jcaho";
  const moduleLabel = isAsc ? "ASC" : isDnv ? "DNV" : "Hospital";
  const primarySourceLabel = isAsc ? "AAAHC" : isDnv ? "DNV NIAHO" : "Joint Commission";

  const [agentResult, setAgentResult] = useState<AgentRunResult | null>(null);
  const [statusFilter, setStatusFilter] = useState<FilterStatus>("all");
  const [sourceFilter, setSourceFilter] = useState<FilterSource>(defaultSource);

  const { data: findings = [], isLoading, refetch } = useQuery<RegulatoryWatchFinding[]>({
    queryKey: ["/api/compliance/regulatory-watch-findings"],
  });

  const runMutation = useMutation({
    mutationFn: (): Promise<AgentRunResult> =>
      apiRequest("POST", "/api/compliance/regulatory-watch-agent/run"),
    onSuccess: (data) => {
      setAgentResult(data);
      queryClient.invalidateQueries({ queryKey: ["/api/compliance/regulatory-watch-findings"] });
      toast({
        title: "Scan Complete",
        description: `${data.findingsCreated} finding${data.findingsCreated !== 1 ? "s" : ""} created from ${primarySourceLabel} scan.`,
      });
    },
    onError: () => toast({ title: "Scan Failed", description: "Could not run the regulatory scan.", variant: "destructive" }),
  });

  const statusMutation = useMutation({
    mutationFn: ({ id, status }: { id: number; status: string }) =>
      apiRequest("PATCH", `/api/compliance/regulatory-watch-findings/${id}/status`, { status }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["/api/compliance/regulatory-watch-findings"] }),
    onError: () => toast({ title: "Error", description: "Could not update finding.", variant: "destructive" }),
  });

  const filtered = findings.filter(f => {
    if (statusFilter !== "all" && f.status !== statusFilter) return false;
    if (sourceFilter !== "all" && f.source !== sourceFilter) return false;
    return true;
  });

  const newCount       = findings.filter(f => f.status === "new").length;
  const reviewedCount  = findings.filter(f => f.status === "reviewed").length;
  const dismissedCount = findings.filter(f => f.status === "dismissed").length;

  const sourceFilterTabs: { value: FilterSource; label: string }[] = [
    { value: defaultSource, label: primarySourceLabel },
    { value: "all",         label: "All Sources" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">

        {/* Header */}
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => setLocation("/leadership")}
              data-testid="btn-back-hub" className="gap-1.5">
              <ArrowLeft className="w-4 h-4" />Hub
            </Button>
            <div className="w-px h-5 bg-border" />
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-violet-600" />
              <h1 className="text-xl font-bold text-foreground">Regulatory Watch Agent</h1>
              <Badge variant="outline" className="text-xs border-violet-300 text-violet-700 bg-violet-50">
                {moduleLabel} · {primarySourceLabel}
              </Badge>
            </div>
          </div>
          <Button onClick={() => runMutation.mutate()} disabled={runMutation.isPending}
            data-testid="btn-run-scan"
            className="gap-2 bg-violet-600 hover:bg-violet-700 text-white">
            {runMutation.isPending
              ? <><RefreshCw className="w-3.5 h-3.5 animate-spin" />Scanning…</>
              : <><Play className="w-3.5 h-3.5" />Run Scan</>}
          </Button>
        </div>

        {/* Module context notice */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/40 border rounded-lg px-4 py-2.5">
          <Globe className="w-3.5 h-3.5 shrink-0 text-violet-500" />
          <span>
            Showing <strong className="text-foreground">{primarySourceLabel}</strong> alerts for your{" "}
            <strong className="text-foreground">{moduleLabel}</strong> module.
            Tap <span className="font-semibold text-foreground">All Sources</span> in the filter bar to see all regulatory bodies.
          </span>
        </div>

        {/* Agent result banner */}
        <AnimatePresence>
          {agentResult && (
            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="bg-violet-50 border border-violet-200 rounded-xl p-4 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-violet-700 font-semibold text-sm">
                <CheckCircle2 className="w-4 h-4" />Scan Complete
              </div>
              <div className="flex gap-4 text-sm text-muted-foreground flex-wrap">
                <span><b className="text-foreground">{agentResult.findingsCreated}</b> findings created</span>
                <span>Source: <b className="text-foreground">{primarySourceLabel}</b></span>
                <span>
                  Web fetch: <b className={agentResult.webFetchSuccess ? "text-emerald-600" : "text-amber-600"}>
                    {agentResult.webFetchSuccess ? "Success" : "Offline (AI knowledge used)"}
                  </b>
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {isLoading ? (
          <div className="flex items-center justify-center h-64">
            <RefreshCw className="w-8 h-8 animate-spin text-muted-foreground" />
          </div>
        ) : findings.length === 0 ? (
          <div className="bg-card rounded-2xl border p-12 flex flex-col items-center gap-4 text-center">
            <div className="w-14 h-14 rounded-2xl bg-violet-100 flex items-center justify-center">
              <Globe className="w-7 h-7 text-violet-600" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-lg">No regulatory findings yet</p>
              <p className="text-sm text-muted-foreground mt-1 max-w-sm">
                Run a scan to check {primarySourceLabel} standards pages for updates that could affect your {moduleLabel} compliance items.
              </p>
            </div>
            <Button onClick={() => runMutation.mutate()} disabled={runMutation.isPending}
              className="gap-2 bg-violet-600 hover:bg-violet-700 text-white">
              {runMutation.isPending ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5" />}
              Run First Scan
            </Button>
          </div>
        ) : (
          <>
            {/* Summary tiles */}
            <div className="grid grid-cols-3 gap-3">
              <button onClick={() => setStatusFilter("new")}
                className={`rounded-xl border p-4 text-left transition-all hover:shadow-sm ${statusFilter === "new" ? "ring-2 ring-amber-400 bg-amber-50" : "bg-card"}`}>
                <div className="flex items-center gap-2 mb-1.5">
                  <AlertCircle className="w-4 h-4 text-amber-500" />
                  <span className="text-xs text-muted-foreground font-medium">New</span>
                </div>
                <div className="text-3xl font-black text-amber-600">{newCount}</div>
              </button>
              <button onClick={() => setStatusFilter("reviewed")}
                className={`rounded-xl border p-4 text-left transition-all hover:shadow-sm ${statusFilter === "reviewed" ? "ring-2 ring-emerald-400 bg-emerald-50" : "bg-card"}`}>
                <div className="flex items-center gap-2 mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span className="text-xs text-muted-foreground font-medium">Reviewed</span>
                </div>
                <div className="text-3xl font-black text-emerald-600">{reviewedCount}</div>
              </button>
              <button onClick={() => setStatusFilter("dismissed")}
                className={`rounded-xl border p-4 text-left transition-all hover:shadow-sm ${statusFilter === "dismissed" ? "ring-2 ring-gray-400 bg-gray-50" : "bg-card"}`}>
                <div className="flex items-center gap-2 mb-1.5">
                  <XCircle className="w-4 h-4 text-gray-400" />
                  <span className="text-xs text-muted-foreground font-medium">Dismissed</span>
                </div>
                <div className="text-3xl font-black text-gray-500">{dismissedCount}</div>
              </button>
            </div>

            {/* Filter row */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs text-muted-foreground font-medium">Status:</span>
              {(["all", "new", "reviewed", "dismissed"] as FilterStatus[]).map(s => (
                <button key={s} onClick={() => setStatusFilter(s)}
                  data-testid={`filter-status-${s}`}
                  className={`text-xs px-3 py-1.5 rounded-full border transition-colors capitalize ${
                    statusFilter === s
                      ? "bg-foreground text-background border-foreground"
                      : "bg-card text-muted-foreground border-border hover:text-foreground"
                  }`}>
                  {s}
                </button>
              ))}
              <div className="w-px h-4 bg-border mx-1" />
              <span className="text-xs text-muted-foreground font-medium">Source:</span>
              {sourceFilterTabs.map(({ value, label }) => (
                <button key={value} onClick={() => setSourceFilter(value)}
                  data-testid={`filter-source-${value}`}
                  className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                    sourceFilter === value
                      ? "bg-foreground text-background border-foreground"
                      : value === "all"
                        ? "bg-card text-muted-foreground border-dashed border-border hover:text-foreground"
                        : "bg-card text-muted-foreground border-border hover:text-foreground"
                  }`}>
                  {label}
                </button>
              ))}
              <Button variant="ghost" size="sm" onClick={() => refetch()}
                className="ml-auto gap-1 text-xs text-muted-foreground h-7">
                <RefreshCw className="w-3 h-3" />Refresh
              </Button>
            </div>

            {/* Findings list */}
            {filtered.length === 0 ? (
              <div className="bg-card rounded-xl border p-8 text-center text-muted-foreground text-sm">
                No findings match the current filter.
              </div>
            ) : (
              <div className="space-y-4">
                {filtered.map(finding => (
                  <FindingCard key={finding.id} finding={finding}
                    onReview={(id) => statusMutation.mutate({ id, status: "reviewed" })}
                    onDismiss={(id) => statusMutation.mutate({ id, status: "dismissed" })}
                    isPending={statusMutation.isPending} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
