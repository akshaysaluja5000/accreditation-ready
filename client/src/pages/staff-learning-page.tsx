import { useState } from "react";
import { useLocation } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, GraduationCap, RefreshCw, Users, CheckCircle2,
  AlertTriangle, AlertCircle, Play, BellRing, ShieldAlert,
  Clock, ChevronDown, ChevronUp, CheckCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useAuth } from "@/lib/auth";

interface StaffMemberStatus {
  userId: number;
  username: string;
  firstName: string | null;
  lastName: string | null;
  role: string;
  trainedCategories: string[];
  notTrainedCategories: string[];
  totalLevelsCompleted: number;
  status: "compliant" | "attention" | "critical";
}

interface EnrichedAlert {
  id: number;
  userId: number;
  userName: string;
  fullName: string;
  alertType: "reminder" | "escalation";
  category: string;
  message: string;
  daysOverdue: number;
  isRead: boolean;
  createdAt: string;
}

interface DashboardData {
  staffStatus: StaffMemberStatus[];
  alerts: EnrichedAlert[];
  summary: {
    totalStaff: number;
    compliant: number;
    attention: number;
    critical: number;
    pendingAlerts: number;
    hasRunBefore: boolean;
  };
}

interface AgentRunResult {
  runAt: string;
  staffAnalyzed: number;
  alertsCreated: number;
  tasksCreated: number;
  escalationCount: number;
}

const STATUS_CONFIG = {
  compliant: { label: "Compliant", className: "bg-emerald-100 text-emerald-700 border-emerald-200" },
  attention: { label: "Needs Attention", className: "bg-amber-100 text-amber-700 border-amber-200" },
  critical:  { label: "Critical", className: "bg-red-100 text-red-700 border-red-200" },
};

const ROLE_LABEL: Record<string, string> = {
  learner: "Learner", educator: "Educator", director: "Director",
  ceo: "CEO", admin: "Admin",
};

function StaffRow({ member }: { member: StaffMemberStatus }) {
  const [expanded, setExpanded] = useState(false);
  const fullName = [member.firstName, member.lastName].filter(Boolean).join(" ") || member.username;
  const statusCfg = STATUS_CONFIG[member.status];

  return (
    <div className="border-b last:border-b-0">
      <div
        className="flex items-center gap-3 px-4 py-3 hover:bg-muted/20 transition-colors cursor-pointer"
        onClick={() => setExpanded(e => !e)}
      >
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
          <span className="text-xs font-bold text-primary">
            {(member.firstName?.[0] ?? member.username[0]).toUpperCase()}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-semibold text-foreground">{fullName}</span>
            <Badge variant="outline" className="text-xs px-1.5 py-0">
              {ROLE_LABEL[member.role] ?? member.role}
            </Badge>
          </div>
          <p className="text-xs text-muted-foreground mt-0.5">
            {member.totalLevelsCompleted} level{member.totalLevelsCompleted !== 1 ? "s" : ""} completed
            · {member.trainedCategories.length}/{member.trainedCategories.length + member.notTrainedCategories.length} categories trained
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <Badge variant="outline" className={`text-xs border ${statusCfg.className}`}>
            {statusCfg.label}
          </Badge>
          {expanded ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
        </div>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <div className="px-4 pb-4 space-y-3 bg-muted/10">
              {member.trainedCategories.length > 0 && (
                <div>
                  <p className="text-xs font-semibold text-emerald-700 mb-1.5 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Trained ({member.trainedCategories.length})
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {member.trainedCategories.map(cat => (
                      <Badge key={cat} variant="outline" className="text-xs bg-emerald-50 text-emerald-700 border-emerald-200">
                        {cat}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              {member.notTrainedCategories.length > 0 && (
                <div>
                  <p className="text-xs font-semibold text-red-600 mb-1.5 flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3" /> Needs Training ({member.notTrainedCategories.length})
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {member.notTrainedCategories.map(cat => (
                      <Badge key={cat} variant="outline" className="text-xs bg-red-50 text-red-600 border-red-200">
                        {cat}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function AlertCard({ alert }: { alert: EnrichedAlert }) {
  const isEscalation = alert.alertType === "escalation";
  return (
    <div className={`rounded-xl border p-4 space-y-2 ${isEscalation
      ? "bg-red-50 border-red-200"
      : "bg-amber-50 border-amber-200"}`}>
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          {isEscalation
            ? <ShieldAlert className="w-4 h-4 text-red-600 shrink-0" />
            : <BellRing className="w-4 h-4 text-amber-600 shrink-0" />}
          <span className={`text-xs font-bold uppercase tracking-wide ${isEscalation ? "text-red-700" : "text-amber-700"}`}>
            {isEscalation ? "High Priority" : "Training Gap"}
          </span>
        </div>
        {alert.daysOverdue > 0 && (
          <Badge variant="outline" className={`text-xs shrink-0 ${isEscalation
            ? "bg-red-100 text-red-700 border-red-200"
            : "bg-amber-100 text-amber-700 border-amber-200"}`}>
            {alert.daysOverdue}d overdue
          </Badge>
        )}
      </div>
      <p className={`text-sm leading-relaxed ${isEscalation ? "text-red-800" : "text-amber-800"}`}>
        {alert.message}
      </p>
      <div className="flex items-center gap-2 pt-1">
        <Badge variant="outline" className="text-xs bg-white/60">
          {alert.category}
        </Badge>
        <span className="text-xs text-muted-foreground ml-auto">
          {new Date(alert.createdAt).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
}

export default function StaffLearningPage() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const { user } = useAuth();
  const activeStandardsBody = user?.organizationType === "asc" ? "AAAHC" : user?.organizationType === "dnv" ? "DNV NIAHO" : "Joint Commission";
  const moduleTag = user?.organizationType === "asc" ? "ASC" : user?.organizationType === "dnv" ? "DNV" : "Hospital";
  const [agentResult, setAgentResult] = useState<AgentRunResult | null>(null);
  const [lastRunAt, setLastRunAt] = useState<string | null>(null);
  const [alertTab, setAlertTab] = useState<"high-priority" | "reminders">("high-priority");

  const { data: dashboard, isLoading, refetch: refetchDashboard } = useQuery<DashboardData>({
    queryKey: ["/api/compliance/staff-learning-dashboard"],
  });

  const runMutation = useMutation({
    mutationFn: (): Promise<AgentRunResult & { staffStatus: StaffMemberStatus[] }> =>
      apiRequest("POST", "/api/compliance/staff-learning-agent/run"),
    onSuccess: (data) => {
      setAgentResult(data);
      setLastRunAt(data.runAt);
      queryClient.invalidateQueries({ queryKey: ["/api/compliance/staff-learning-dashboard"] });
      toast({
        title: "Agent Run Complete",
        description: `${data.staffAnalyzed} staff analyzed · ${data.alertsCreated} alert${data.alertsCreated !== 1 ? "s" : ""} created · ${data.tasksCreated} task${data.tasksCreated !== 1 ? "s" : ""} assigned`,
      });
    },
    onError: () => toast({ title: "Agent Failed", description: "Could not run the agent.", variant: "destructive" }),
  });

  const markReadMutation = useMutation({
    mutationFn: () => apiRequest("POST", "/api/compliance/staff-training-alerts/read-all"),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/compliance/staff-learning-dashboard"] });
      toast({ title: "Alerts Marked Read" });
    },
  });

  const summary = dashboard?.summary;
  const highPriority = (dashboard?.alerts ?? []).filter(a => a.alertType === "escalation");
  const reminders = (dashboard?.alerts ?? []).filter(a => a.alertType === "reminder");
  const shownAlerts = alertTab === "high-priority" ? highPriority : reminders;

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">

        {/* Header */}
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => setLocation("/leadership")}
              data-testid="btn-back-hub" className="gap-1.5">
              <ArrowLeft className="w-4 h-4" />Hub
            </Button>
            <div className="w-px h-5 bg-border" />
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h1 className="text-xl font-bold text-foreground">Staff Learning Agent</h1>
              <Badge variant="outline" className="text-xs font-medium border-primary/30 text-primary bg-primary/5">
                {activeStandardsBody} · {moduleTag}
              </Badge>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {lastRunAt && (
              <span className="text-xs text-muted-foreground hidden sm:block">
                Last run {new Date(lastRunAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </span>
            )}
            <Button onClick={() => runMutation.mutate()} disabled={runMutation.isPending}
              data-testid="btn-run-agent"
              className="gap-2 bg-primary">
              {runMutation.isPending
                ? <><RefreshCw className="w-3.5 h-3.5 animate-spin" />Analyzing…</>
                : <><Play className="w-3.5 h-3.5" />Run Agent</>}
            </Button>
          </div>
        </div>

        {/* Agent result banner */}
        <AnimatePresence>
          {agentResult && (
            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="bg-primary/5 border border-primary/20 rounded-xl p-4 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                Agent Run Complete
              </div>
              <div className="flex gap-4 text-sm text-muted-foreground flex-wrap">
                <span><b className="text-foreground">{agentResult.staffAnalyzed}</b> staff analyzed</span>
                <span><b className="text-foreground">{agentResult.alertsCreated}</b> alerts created</span>
                <span><b className="text-foreground">{agentResult.tasksCreated}</b> tasks assigned</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {isLoading ? (
          <div className="flex items-center justify-center h-64">
            <RefreshCw className="w-8 h-8 animate-spin text-muted-foreground" />
          </div>
        ) : !dashboard || !summary ? (
          <div className="bg-card rounded-2xl border p-12 flex flex-col items-center gap-4 text-center">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
              <GraduationCap className="w-7 h-7 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-lg">No data yet</p>
              <p className="text-sm text-muted-foreground mt-1">
                Run the agent to analyze your staff's training completion against AAAHC compliance requirements.
              </p>
            </div>
            <Button onClick={() => runMutation.mutate()} disabled={runMutation.isPending} className="gap-2">
              {runMutation.isPending ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5" />}
              Run Agent Now
            </Button>
          </div>
        ) : (
          <>
            {/* Summary Tiles */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <SummaryTile label="Total Staff" value={summary.totalStaff} icon={Users}
                className="border-border" iconClass="text-muted-foreground" />
              <SummaryTile label="Fully Trained" value={summary.compliant} icon={CheckCircle2}
                className="border-emerald-200 bg-emerald-50" iconClass="text-emerald-600"
                valueClass="text-emerald-700" />
              <SummaryTile label="Needs Attention" value={summary.attention} icon={AlertCircle}
                className="border-amber-200 bg-amber-50" iconClass="text-amber-600"
                valueClass="text-amber-700" />
              <SummaryTile label="Critical" value={summary.critical} icon={ShieldAlert}
                className="border-red-200 bg-red-50" iconClass="text-red-600"
                valueClass="text-red-600" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              {/* Staff Table */}
              <div className="lg:col-span-3">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Staff Training Status
                    <span className="ml-2 text-xs bg-muted px-1.5 py-0.5 rounded-full font-normal">
                      {dashboard.staffStatus.length}
                    </span>
                  </h2>
                  <Button variant="ghost" size="sm" onClick={() => refetchDashboard()}
                    className="gap-1 text-xs text-muted-foreground h-7">
                    <RefreshCw className="w-3 h-3" />Refresh
                  </Button>
                </div>
                {dashboard.staffStatus.length === 0 ? (
                  <div className="bg-card rounded-xl border p-8 text-center text-muted-foreground text-sm">
                    No staff members found. Run the agent after staff have registered.
                  </div>
                ) : (
                  <div className="bg-card rounded-xl border overflow-hidden">
                    {dashboard.staffStatus.map(member => (
                      <StaffRow key={member.userId} member={member} />
                    ))}
                  </div>
                )}
              </div>

              {/* Alert Panel */}
              <div className="lg:col-span-2 space-y-3">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Alerts
                    {summary.pendingAlerts > 0 && (
                      <Badge className="ml-2 text-xs bg-red-500 text-white border-0">
                        {summary.pendingAlerts}
                      </Badge>
                    )}
                  </h2>
                  {dashboard.alerts.some(a => !a.isRead) && (
                    <Button variant="ghost" size="sm" onClick={() => markReadMutation.mutate()}
                      disabled={markReadMutation.isPending}
                      className="gap-1 text-xs text-muted-foreground h-7">
                      <CheckCheck className="w-3 h-3" />Mark All Read
                    </Button>
                  )}
                </div>

                {/* Tab bar */}
                <div className="flex rounded-lg border bg-muted/30 p-0.5">
                  {(["high-priority", "reminders"] as const).map(tab => (
                    <button key={tab} onClick={() => setAlertTab(tab)}
                      data-testid={`tab-${tab}`}
                      className={`flex-1 text-xs font-medium py-1.5 rounded-md transition-colors flex items-center justify-center gap-1.5 ${
                        alertTab === tab
                          ? "bg-background shadow-sm text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}>
                      {tab === "high-priority"
                        ? <><ShieldAlert className="w-3 h-3 text-red-500" />High Priority ({highPriority.length})</>
                        : <><BellRing className="w-3 h-3 text-amber-500" />Training Gaps ({reminders.length})</>}
                    </button>
                  ))}
                </div>

                {!summary.hasRunBefore ? (
                  <div className="bg-card rounded-xl border p-6 text-center space-y-2">
                    <Clock className="w-8 h-8 text-muted-foreground mx-auto" />
                    <p className="text-xs text-muted-foreground">Run the agent to generate alerts.</p>
                  </div>
                ) : shownAlerts.length === 0 ? (
                  <div className="bg-card rounded-xl border p-6 text-center space-y-2">
                    <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto" />
                    <p className="text-xs text-muted-foreground">
                      No {alertTab === "high-priority" ? "high priority items" : "training gaps"} at this time.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2.5 max-h-[600px] overflow-y-auto pr-0.5">
                    {shownAlerts.map(alert => (
                      <AlertCard key={alert.id} alert={alert} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function SummaryTile({
  label, value, icon: Icon, className = "", iconClass = "", valueClass = "",
}: {
  label: string; value: number; icon: React.ElementType;
  className?: string; iconClass?: string; valueClass?: string;
}) {
  return (
    <div className={`rounded-xl border p-4 bg-background ${className}`}>
      <div className="flex items-center gap-2 mb-2">
        <Icon className={`w-4 h-4 ${iconClass}`} />
        <span className="text-xs text-muted-foreground font-medium">{label}</span>
      </div>
      <div className={`text-3xl font-black ${valueClass || "text-foreground"}`}>{value}</div>
    </div>
  );
}
