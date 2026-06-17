import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/lib/auth";
import { useLocation } from "wouter";
import { useEffect } from "react";
import { format } from "date-fns";
import {
  ChevronLeft, Users, BookOpen, CheckCircle2, XCircle,
  AlertTriangle, Activity, TrendingUp, Clock, BarChart2,
  Layers, Award, Brain
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

interface DashData {
  facilityName: string;
  updatedAt: string;
  score: { overall: number; diagCompletionRate: number; finalPassRate: number; avgFinalScore: number };
  journey: { totalStaff: number; completedFullCycle: number; diagnosticTaken: number; inProgress: number; finalPassed: number; notStarted: number; avgDiagScore: number | null; avgFinalScore: number | null };
  snapshot: { name: string; role: string; diagScore: number; finalScore: number; delta: number }[];
  attention: { haventStarted: number; failedFinal: number; lowEngagement: number; diagnosticOnly: number };
  deptBreakdown: { department: string; deptIcon: string; roles: { title: string; staffCount: number; diagPct: number; avgFinalScore: number | null }[] }[];
  staffList: { id: number; name: string; role: string; diagDone: boolean; finalDone: boolean; finalScore: number | null; engagement: "green" | "amber" | "red"; quizCount: number; fcCount: number; quizAccuracy: number | null }[];
  bottomStats: { questionsCorrect: number; flashcardsReviewed: number; dailyActiveUsers: number; totalStaff: number; questionsSparkline: number[]; flashcardsSparkline: number[]; dauSparkline: number[]; topPerformers: { name: string; role: string; weekPoints: number; finalScore: number | null }[] };
}

function scoreColor(n: number) {
  if (n >= 85) return "text-emerald-600";
  if (n >= 75) return "text-amber-600";
  return "text-red-600";
}

function scoreBg(n: number) {
  if (n >= 85) return "bg-emerald-50 border-emerald-200 text-emerald-700";
  if (n >= 75) return "bg-amber-50 border-amber-200 text-amber-700";
  return "bg-red-50 border-red-200 text-red-700";
}

function scoreLabel(n: number) {
  if (n >= 85) return "Excellent";
  if (n >= 75) return "Good Standing";
  if (n >= 65) return "Needs Attention";
  return "At Risk";
}

function journeyLabel(pct: number) {
  if (pct < 20) return "Early Stage";
  if (pct < 50) return "Gaining Momentum";
  if (pct < 80) return "Nearing Completion";
  return "Pilot Complete";
}

function fmtNum(n: number) { return n.toLocaleString(); }

function normSparkline(data: number[]): number[] {
  const max = Math.max(...data, 1);
  return data.map(v => Math.max(4, Math.round((v / max) * 100)));
}

function Sparkline({ data, color = "bg-primary" }: { data: number[]; color?: string }) {
  const norm = normSparkline(data);
  return (
    <div className="flex items-end gap-0.5 h-8 mt-3">
      {norm.map((h, i) => (
        <div
          key={i}
          className={`flex-1 rounded-sm ${i >= 4 ? color : "bg-muted"}`}
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}

function initials(user: any) {
  const f = user?.firstName?.[0] || "";
  const l = user?.lastName?.[0] || "";
  return (f + l).toUpperCase() || user?.username?.[0]?.toUpperCase() || "?";
}

export default function HospitalDashboardPage() {
  const { user } = useAuth();
  const [, setLocation] = useLocation();
  const { data: D, isLoading, error } = useQuery<DashData>({ queryKey: ["/api/admin/hospital-dashboard"], retry: 1 });

  useEffect(() => {
    if (error) setLocation("/leadership");
  }, [error]);

  const now = new Date();
  const hour = now.getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";
  const dateStr = format(now, "EEEE, MMMM d, yyyy");
  const firstName = (user as any)?.firstName || (user as any)?.username || "there";

  const totalStaff = D?.journey.totalStaff || 0;
  const journeyPct = totalStaff > 0 ? Math.round(((D?.journey.completedFullCycle || 0) / totalStaff) * 100) : 0;
  const qSpark = D?.bottomStats.questionsSparkline || Array(7).fill(0);
  const fcSpark = D?.bottomStats.flashcardsSparkline || Array(7).fill(0);
  const dauSpark = D?.bottomStats.dauSparkline || Array(7).fill(0);

  if (error) return null;

  return (
    <div className="min-h-screen bg-background" data-testid="hospital-dashboard">

      {/* HEADER */}
      <div className="sticky top-0 z-10 border-b border-border bg-card/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="gap-1" onClick={() => setLocation("/leadership")} data-testid="btn-back-console">
              <ChevronLeft className="h-4 w-4" /> Back to Console
            </Button>
            <div className="h-4 w-px bg-border" />
            <span className="text-sm font-semibold">Hospital Learning Dashboard</span>
          </div>
          <div className="flex items-center gap-3">
            {D?.facilityName && <span className="text-xs text-muted-foreground hidden sm:block">{D.facilityName}</span>}
            <Badge variant="secondary" className="text-xs">Education View</Badge>
            <div className="h-7 w-7 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
              {initials(user)}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6 space-y-6">

        {/* GREETING */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{dateStr}</p>
            <h1 className="text-2xl font-semibold tracking-tight">{greeting}, {firstName}.</h1>
            <p className="text-sm text-muted-foreground mt-1">Here's how your staff are learning today.</p>
          </div>
          <p className="text-xs text-muted-foreground hidden sm:block">
            {isLoading ? "Loading…" : "↻ Updated just now"}
          </p>
        </div>

        {/* TOP CARDS: Knowledge Score + Journey + Snapshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Knowledge Score */}
          <Card data-testid="score-card" className="border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                <Brain className="h-3.5 w-3.5" /> Staff Knowledge Score
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {isLoading ? (
                <div className="space-y-2"><Skeleton className="h-10 w-24" /><Skeleton className="h-4 w-32" /></div>
              ) : (
                <>
                  <div className="flex items-baseline gap-2">
                    <span className={`text-5xl font-bold tabular-nums ${scoreColor(D!.score.overall)}`}>
                      {D!.score.overall}
                    </span>
                    <span className="text-lg text-muted-foreground">%</span>
                    <Badge variant="outline" className={`ml-auto text-xs border ${scoreBg(D!.score.overall)}`}>
                      {scoreLabel(D!.score.overall)}
                    </Badge>
                  </div>
                  <div className="space-y-2.5">
                    {[
                      { label: "Diagnostic Completion", value: D!.score.diagCompletionRate, color: "bg-blue-500" },
                      { label: "Final Exam Pass Rate", value: D!.score.finalPassRate, color: "bg-amber-500" },
                      { label: "Avg Final Exam Score", value: D!.score.avgFinalScore, color: "bg-emerald-500" },
                    ].map(({ label, value, color }) => (
                      <div key={label} className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-muted-foreground">{label}</span>
                          <span className="font-medium">{value}%</span>
                        </div>
                        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                          <div className={`h-full rounded-full ${color}`} style={{ width: `${value}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Combines diagnostic completion and final exam performance. Above 85% reflects strong facility-wide knowledge.
                  </p>
                </>
              )}
            </CardContent>
          </Card>

          {/* Learning Journey */}
          <Card data-testid="journey-card" className="border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                <TrendingUp className="h-3.5 w-3.5" /> Learning Journey Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {isLoading ? (
                <div className="space-y-2"><Skeleton className="h-8 w-full" /><Skeleton className="h-4 w-full" /></div>
              ) : (
                <>
                  <Badge variant="outline" className="bg-amber-50 border-amber-200 text-amber-700 text-xs">
                    {journeyLabel(journeyPct)}
                  </Badge>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl font-bold">{D!.journey.completedFullCycle}</span>
                    <span className="text-sm text-muted-foreground">of {totalStaff} staff completed full cycle</span>
                  </div>
                  <div className="space-y-1">
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-amber-400 rounded-full transition-all" style={{ width: `${journeyPct}%` }} />
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>0%</span>
                      <span className="font-medium text-amber-600">{journeyPct}% complete</span>
                      <span>Full at 60%+</span>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    {[
                      { icon: "🔵", label: "Diagnostic taken", value: D!.journey.diagnosticTaken },
                      { icon: "🟡", label: "Modules in progress", value: D!.journey.inProgress },
                      { icon: "✅", label: "Final exam passed", value: D!.journey.finalPassed },
                      { icon: "⭕", label: "Not yet started", value: D!.journey.notStarted },
                    ].map(({ icon, label, value }) => (
                      <div key={label} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{icon} {label}</span>
                        <span className="font-medium">{value} / {totalStaff}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Improvement Snapshot */}
          <Card data-testid="snapshot-card" className="border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                <Award className="h-3.5 w-3.5" /> Improvement Snapshot
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {isLoading ? (
                <div className="space-y-2"><Skeleton className="h-6 w-full" /><Skeleton className="h-6 w-full" /></div>
              ) : D!.snapshot.length === 0 ? (
                <div className="text-sm text-muted-foreground italic py-4">
                  No staff have completed the full cycle yet.
                </div>
              ) : (
                <>
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">{D!.journey.completedFullCycle} staff</span> completed full learning cycle
                  </p>
                  <div className="space-y-3">
                    {D!.snapshot.map((s, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex justify-between items-baseline text-xs">
                          <span className="font-medium">{s.name} <span className="text-muted-foreground font-normal">· {s.role}</span></span>
                          <span className="text-emerald-600 font-semibold">+{s.delta} pts</span>
                        </div>
                        <div className="space-y-0.5">
                          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-amber-400 rounded-full" style={{ width: `${s.diagScore}%` }} />
                          </div>
                          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${s.finalScore}%` }} />
                          </div>
                          <div className="flex justify-between text-[10px] text-muted-foreground">
                            <span>Diag {s.diagScore}%</span><span>Final {s.finalScore}%</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {D!.journey.avgFinalScore !== null && D!.journey.avgDiagScore !== null && (
                    <div className="pt-2 border-t border-border grid grid-cols-3 gap-2 text-center">
                      <div className="bg-muted/50 rounded-lg p-2">
                        <p className="text-[10px] text-muted-foreground uppercase">Avg Diag</p>
                        <p className="text-base font-semibold text-amber-600">{D!.journey.avgDiagScore}%</p>
                      </div>
                      <div className="flex items-center justify-center text-muted-foreground text-sm">→</div>
                      <div className="bg-muted/50 rounded-lg p-2">
                        <p className="text-[10px] text-muted-foreground uppercase">Avg Final</p>
                        <p className="text-base font-semibold text-emerald-600">{D!.journey.avgFinalScore}%</p>
                      </div>
                    </div>
                  )}
                </>
              )}
            </CardContent>
          </Card>

        </div>

        {/* ATTENTION FLAGS */}
        <div>
          <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">What Needs Your Attention</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { key: "haventStarted", label: "Haven't Started Yet", sub: "No diagnostic · not in learning journey", color: "border-t-red-500", numColor: "text-red-600", icon: <XCircle className="h-4 w-4 text-red-500" />, testId: "alert-havent-started" },
              { key: "failedFinal", label: "Failed Final Exam", sub: "Scored below 75% · Education Plan assigned", color: "border-t-red-400", numColor: "text-red-500", icon: <AlertTriangle className="h-4 w-4 text-red-400" />, testId: "alert-failed-final" },
              { key: "lowEngagement", label: "Low Engagement", sub: "Took diagnostic · no activity in 7+ days", color: "border-t-amber-500", numColor: "text-amber-600", icon: <Clock className="h-4 w-4 text-amber-500" />, testId: "alert-low-engagement" },
              { key: "diagnosticOnly", label: "Diagnostic Only", sub: "Completed diagnostic · final not attempted", color: "border-t-slate-400", numColor: "text-muted-foreground", icon: <BarChart2 className="h-4 w-4 text-muted-foreground" />, testId: "alert-diagnostic-only" },
            ].map(({ key, label, sub, color, numColor, icon, testId }) => (
              <Card key={key} className={`border-border border-t-4 ${color}`} data-testid={testId}>
                <CardContent className="pt-4">
                  <div className="h-8 w-8 rounded-lg bg-muted/60 flex items-center justify-center mb-3">{icon}</div>
                  <div className={`text-3xl font-bold mb-1 ${numColor}`}>
                    {isLoading ? "—" : (D!.attention as any)[key]}
                  </div>
                  <p className="text-sm font-medium mb-1">{label}</p>
                  <p className="text-xs text-muted-foreground leading-snug">{sub}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* DEPARTMENT BREAKDOWN + STAFF LIST */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          {/* Department Breakdown */}
          <Card data-testid="dept-panel" className="border-border overflow-hidden">
            <CardHeader className="pb-0 border-b border-border">
              <div className="flex items-center justify-between pb-3">
                <CardTitle className="text-sm font-semibold flex items-center gap-2">
                  <Layers className="h-4 w-4 text-muted-foreground" /> Learning Progress by Department
                </CardTitle>
                <span className="text-xs text-muted-foreground">diag taken · avg final score</span>
              </div>
              <div className="grid grid-cols-[1fr_56px_90px_44px] gap-2 pb-2 text-[10px] font-semibold text-muted-foreground uppercase tracking-wide">
                <span>Role / Dept</span>
                <span className="text-center">Diag</span>
                <span>Avg Final</span>
                <span className="text-right">Score</span>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              {isLoading ? (
                <div className="p-4 space-y-2"><Skeleton className="h-5 w-full" /><Skeleton className="h-5 w-full" /><Skeleton className="h-5 w-full" /></div>
              ) : D!.deptBreakdown.length === 0 ? (
                <p className="p-4 text-sm text-muted-foreground italic">No department data yet. Staff need role assignments.</p>
              ) : (
                D!.deptBreakdown.map(dept => (
                  <div key={dept.department}>
                    <div className="px-4 py-1.5 bg-muted/40 border-b border-border text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      {dept.deptIcon} {dept.department}
                    </div>
                    {dept.roles.map(role => (
                      <div key={role.title} className="grid grid-cols-[1fr_56px_90px_44px] gap-2 items-center px-4 py-2.5 border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                        <div>
                          <p className="text-xs font-medium">{role.title}</p>
                          <p className="text-[10px] text-muted-foreground">{role.staffCount} staff</p>
                        </div>
                        <div className="flex justify-center">
                          <Badge variant="outline" className={`text-[10px] px-1.5 py-0 ${
                            role.diagPct >= 85 ? "bg-emerald-50 border-emerald-200 text-emerald-700" :
                            role.diagPct >= 60 ? "bg-amber-50 border-amber-200 text-amber-700" :
                            "bg-red-50 border-red-200 text-red-700"
                          }`}>
                            {role.diagPct}%
                          </Badge>
                        </div>
                        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                          <div className="h-full rounded-full" style={{
                            width: `${role.avgFinalScore ?? 0}%`,
                            background: role.avgFinalScore === null ? "transparent" : role.avgFinalScore >= 85 ? "rgb(16 185 129)" : role.avgFinalScore >= 75 ? "rgb(245 158 11)" : "rgb(239 68 68)"
                          }} />
                        </div>
                        <div className={`text-xs font-semibold text-right ${role.avgFinalScore === null ? "text-muted-foreground" : role.avgFinalScore >= 85 ? "text-emerald-600" : role.avgFinalScore >= 75 ? "text-amber-600" : "text-red-600"}`}>
                          {role.avgFinalScore !== null ? `${role.avgFinalScore}%` : "—"}
                        </div>
                      </div>
                    ))}
                  </div>
                ))
              )}
            </CardContent>
          </Card>

          {/* Individual Staff Status */}
          <Card data-testid="staff-panel" className="border-border overflow-hidden">
            <CardHeader className="pb-0 border-b border-border">
              <div className="flex items-center justify-between pb-3">
                <CardTitle className="text-sm font-semibold flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" /> Individual Staff Status
                </CardTitle>
                <span className="text-xs text-muted-foreground">sorted by priority</span>
              </div>
              <div className="grid grid-cols-[1fr_28px_28px_44px_36px_36px] gap-1.5 pb-2 text-[10px] font-semibold text-muted-foreground uppercase tracking-wide">
                <span>Staff</span>
                <span className="text-center">Dx</span>
                <span className="text-center">Fin</span>
                <span className="text-right">Score</span>
                <span className="text-center">Quiz</span>
                <span className="text-center">Cards</span>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              {isLoading ? (
                <div className="p-4 space-y-2"><Skeleton className="h-10 w-full" /><Skeleton className="h-10 w-full" /><Skeleton className="h-10 w-full" /></div>
              ) : D!.staffList.length === 0 ? (
                <p className="p-4 text-sm text-muted-foreground italic">No staff found.</p>
              ) : (
                <div className="max-h-[420px] overflow-y-auto">
                  {D!.staffList.map(s => (
                    <div key={s.id} className="grid grid-cols-[1fr_28px_28px_44px_36px_36px] gap-1.5 items-center px-4 py-2.5 border-b border-border last:border-0 hover:bg-muted/30 transition-colors" data-testid={`staff-row-${s.id}`}>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <div className={`h-1.5 w-1.5 rounded-full flex-shrink-0 ${s.engagement === "green" ? "bg-emerald-500" : s.engagement === "amber" ? "bg-amber-500" : "bg-red-500"}`} />
                          <p className="text-xs font-medium truncate">{s.name}</p>
                        </div>
                        <p className="text-[10px] text-muted-foreground truncate pl-3">{s.role}</p>
                      </div>
                      <div className="text-center text-sm">{s.diagDone ? "✅" : "⭕"}</div>
                      <div className="text-center text-sm">{s.finalDone ? "✅" : "—"}</div>
                      <div className={`text-xs font-semibold text-right ${s.finalScore === null ? "text-muted-foreground" : s.finalScore >= 85 ? "text-emerald-600" : s.finalScore >= 75 ? "text-amber-600" : "text-red-600"}`}>
                        {s.finalScore !== null ? `${s.finalScore}%` : "—"}
                      </div>
                      <div className="text-center text-[10px] text-muted-foreground font-medium">
                        {s.quizCount > 0 ? s.quizCount : "—"}
                      </div>
                      <div className="text-center text-[10px] text-muted-foreground font-medium">
                        {s.fcCount > 0 ? s.fcCount : "—"}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

        </div>

        {/* BOTTOM STATS */}
        <div>
          <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Learning Activity — Pilot to Date</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            <Card data-testid="stat-questions" className="border-border">
              <CardContent className="pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Questions Correct</p>
                </div>
                {isLoading ? <Skeleton className="h-9 w-24" /> : (
                  <p className="text-3xl font-bold tabular-nums">{fmtNum(D!.bottomStats.questionsCorrect)}</p>
                )}
                <p className="text-xs text-muted-foreground mt-0.5">across all staff · all modules</p>
                <Sparkline data={qSpark} color="bg-blue-500" />
              </CardContent>
            </Card>

            <Card data-testid="stat-flashcards" className="border-border">
              <CardContent className="pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <Layers className="h-4 w-4 text-muted-foreground" />
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Flashcards Reviewed</p>
                </div>
                {isLoading ? <Skeleton className="h-9 w-24" /> : (
                  <p className="text-3xl font-bold tabular-nums">{fmtNum(D!.bottomStats.flashcardsReviewed)}</p>
                )}
                <p className="text-xs text-muted-foreground mt-0.5">spaced repetition sessions</p>
                <Sparkline data={fcSpark} color="bg-violet-500" />
              </CardContent>
            </Card>

            <Card data-testid="stat-dau" className="border-border">
              <CardContent className="pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="h-4 w-4 text-muted-foreground" />
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Daily Active Users</p>
                </div>
                {isLoading ? <Skeleton className="h-9 w-16" /> : (
                  <p className="text-3xl font-bold tabular-nums">{D!.bottomStats.dailyActiveUsers}</p>
                )}
                <p className="text-xs text-muted-foreground mt-0.5">active today · of {totalStaff} total staff</p>
                <Sparkline data={dauSpark} color="bg-emerald-500" />
              </CardContent>
            </Card>

            <Card data-testid="stat-top-performers" className="border-border">
              <CardContent className="pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="h-4 w-4 text-muted-foreground" />
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Top Performers</p>
                </div>
                {isLoading ? (
                  <div className="space-y-2"><Skeleton className="h-10 w-full" /><Skeleton className="h-10 w-full" /></div>
                ) : D!.bottomStats.topPerformers.length === 0 ? (
                  <p className="text-sm text-muted-foreground italic mt-1">No activity this week yet.</p>
                ) : (
                  <div className="space-y-2 mt-1">
                    {D!.bottomStats.topPerformers.map((p, i) => (
                      <div key={i} className="flex items-center gap-2 bg-muted/40 rounded-lg px-2 py-1.5">
                        <span className={`text-sm font-bold min-w-[18px] ${i === 0 ? "text-amber-500" : "text-muted-foreground"}`}>#{i + 1}</span>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-medium truncate">{p.name}</p>
                          <p className="text-[10px] text-muted-foreground truncate">{fmtNum(p.weekPoints)} pts · {p.role}{p.finalScore !== null ? ` · ${p.finalScore}%` : ""}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

          </div>
        </div>

      </div>
    </div>
  );
}
