import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { ArrowLeft, Users, TrendingUp, Target, BarChart3, Calendar, UserPlus, Shield, ScrollText, FlaskConical, Database, Building2, BookOpen, ShieldCheck, PowerOff, GitCommit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/lib/auth";
import { AiLeadershipCoach } from "@/components/ai-leadership-coach";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { LEADERSHIP_LABELS, LEADERSHIP_ROLES, type LeadershipRole } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

interface AdminUser {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  totalXp: number;
  currentStreak: number;
  longestStreak: number;
  questionsAnswered: number;
  questionsToday: number;
  correctTotal: number;
  correctToday: number;
  accuracy: number;
  lastActive: string | null;
  joinedAt: string | null;
  leadershipRole?: string;
}

interface AdminStats {
  totalUsers: number;
  activeToday: number;
  totalQuestionsAnswered: number;
  averageAccuracy: number;
  userList: AdminUser[];
}

const LEADERSHIP_RANK: Record<string, number> = {
  learner: 0, educator: 1, director: 2, ceo: 3, admin: 4, super_admin: 5,
};

const DEMO_USERS: AdminUser[] = [
  { id: 1001, username: "jessica.martinez", firstName: "Jessica", lastName: "Martinez", totalXp: 4820, currentStreak: 12, longestStreak: 18, questionsAnswered: 347, questionsToday: 14, correctTotal: 295, correctToday: 12, accuracy: 85, lastActive: new Date(Date.now() - 68 * 60000).toISOString(), joinedAt: "2026-01-15T00:00:00Z", leadershipRole: "learner" },
  { id: 1002, username: "david.chen", firstName: "David", lastName: "Chen", totalXp: 3940, currentStreak: 7, longestStreak: 14, questionsAnswered: 289, questionsToday: 8, correctTotal: 228, correctToday: 5, accuracy: 79, lastActive: new Date(Date.now() - 185 * 60000).toISOString(), joinedAt: "2026-01-20T00:00:00Z", leadershipRole: "learner" },
  { id: 1003, username: "sarah.nguyen", firstName: "Sarah", lastName: "Nguyen", totalXp: 5210, currentStreak: 21, longestStreak: 21, questionsAnswered: 412, questionsToday: 20, correctTotal: 366, correctToday: 18, accuracy: 89, lastActive: new Date(Date.now() - 22 * 60000).toISOString(), joinedAt: "2026-01-10T00:00:00Z", leadershipRole: "learner" },
  { id: 1004, username: "michael.okafor", firstName: "Michael", lastName: "Okafor", totalXp: 2100, currentStreak: 3, longestStreak: 9, questionsAnswered: 178, questionsToday: 4, correctTotal: 125, correctToday: 2, accuracy: 70, lastActive: new Date(Date.now() - 390 * 60000).toISOString(), joinedAt: "2026-02-01T00:00:00Z", leadershipRole: "learner" },
  { id: 1005, username: "lisa.patel", firstName: "Lisa", lastName: "Patel", totalXp: 1650, currentStreak: 0, longestStreak: 6, questionsAnswered: 134, questionsToday: 0, correctTotal: 80, correctToday: 0, accuracy: 60, lastActive: new Date(Date.now() - 2 * 24 * 60 * 60000).toISOString(), joinedAt: "2026-02-10T00:00:00Z", leadershipRole: "learner" },
  { id: 1006, username: "james.wilson", firstName: "James", lastName: "Wilson", totalXp: 3280, currentStreak: 5, longestStreak: 11, questionsAnswered: 251, questionsToday: 6, correctTotal: 201, correctToday: 5, accuracy: 80, lastActive: new Date(Date.now() - 135 * 60000).toISOString(), joinedAt: "2026-01-25T00:00:00Z", leadershipRole: "learner" },
  { id: 1007, username: "anna.rodriguez", firstName: "Anna", lastName: "Rodriguez", totalXp: 890, currentStreak: 2, longestStreak: 4, questionsAnswered: 76, questionsToday: 3, correctTotal: 41, correctToday: 1, accuracy: 54, lastActive: new Date(Date.now() - 23 * 60 * 60000).toISOString(), joinedAt: "2026-03-05T00:00:00Z", leadershipRole: "learner" },
  { id: 1008, username: "kevin.thomas", firstName: "Kevin", lastName: "Thomas", totalXp: 4100, currentStreak: 9, longestStreak: 15, questionsAnswered: 318, questionsToday: 11, correctTotal: 267, correctToday: 9, accuracy: 84, lastActive: new Date(Date.now() - 47 * 60000).toISOString(), joinedAt: "2026-01-18T00:00:00Z", leadershipRole: "learner" },
  { id: 1009, username: "priya.sharma", firstName: "Priya", lastName: "Sharma", totalXp: 2760, currentStreak: 6, longestStreak: 10, questionsAnswered: 221, questionsToday: 7, correctTotal: 172, correctToday: 5, accuracy: 78, lastActive: new Date(Date.now() - 330 * 60000).toISOString(), joinedAt: "2026-02-14T00:00:00Z", leadershipRole: "learner" },
  { id: 1010, username: "rachel.kim", firstName: "Rachel", lastName: "Kim", totalXp: 6050, currentStreak: 30, longestStreak: 30, questionsAnswered: 489, questionsToday: 22, correctTotal: 441, correctToday: 20, accuracy: 90, lastActive: new Date(Date.now() - 4 * 60000).toISOString(), joinedAt: "2026-01-05T00:00:00Z", leadershipRole: "educator" },
];

const DEMO_STATS: AdminStats = {
  totalUsers: 10,
  activeToday: 7,
  totalQuestionsAnswered: 2715,
  averageAccuracy: 77,
  userList: DEMO_USERS,
};

export default function AdminPage() {
  const { user } = useAuth();
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [dataMode, setDataMode] = useState<"live" | "demo">("live");

  const { data: liveStats, isLoading } = useQuery<AdminStats>({
    queryKey: ["/api/admin/stats"],
  });

  const stats = dataMode === "demo" ? DEMO_STATS : liveStats;

  const callerRank = LEADERSHIP_RANK[(user?.leadershipRole as string) || "learner"] ?? 0;
  const callerIsAdmin = user?.isAdmin || callerRank >= LEADERSHIP_RANK["admin"];

  const { data: auditLogEntries } = useQuery<Array<{
    id: number; username: string | null; leadershipRole: string;
    facilityName: string | null; action: string; createdAt: string;
  }>>({
    queryKey: ["/api/audit-log"],
    enabled: callerIsAdmin && dataMode === "live",
  });

  const { data: facilitySettings } = useQuery<{ complianceMode: string }>({
    queryKey: ["/api/facility/settings"],
    enabled: callerRank >= LEADERSHIP_RANK["director"],
  });

  const { data: contentChangelogEntries } = useQuery<Array<{
    id: number; contentType: string; scope: string | null; action: string;
    itemCount: number | null; version: string | null; description: string | null;
    changedBy: string; changedAt: string;
  }>>({
    queryKey: ["/api/admin/content-changelog"],
    enabled: callerRank >= LEADERSHIP_RANK["director"] && dataMode === "live",
  });

  const complianceModeMutation = useMutation({
    mutationFn: async (complianceMode: string) => {
      const res = await apiRequest("PATCH", "/api/admin/facility/compliance-mode", { complianceMode });
      if (!res.ok) throw new Error("Failed to update compliance mode");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/facility/settings"] });
      toast({ title: "Compliance mode updated" });
    },
    onError: (err: any) => {
      toast({ title: "Update failed", description: err.message, variant: "destructive" });
    },
  });

  const roleChangeMutation = useMutation({
    mutationFn: async ({ userId, role }: { userId: number; role: string }) => {
      const res = await apiRequest("PATCH", `/api/admin/users/${userId}/leadership-role`, { leadershipRole: role });
      if (!res.ok) throw new Error("Failed to update role");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/stats"] });
      toast({ title: "Role updated" });
    },
    onError: (err: any) => {
      toast({ title: "Failed to update role", description: err.message, variant: "destructive" });
    },
  });

  if (isLoading && dataMode === "live") {
    return (
      <div className="min-h-screen p-4 max-w-4xl mx-auto">
        <div className="flex flex-col gap-6 pt-16">
          <Skeleton className="h-12 w-48" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((i) => <Skeleton key={i} className="h-24 rounded-2xl" />)}
          </div>
          <Skeleton className="h-64 rounded-2xl" />
        </div>
      </div>
    );
  }

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return "Never";
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  const formatRelativeTime = (dateStr: string | null) => {
    if (!dateStr) return "Never";
    const now = new Date();
    const d = new Date(dateStr);
    const diffMs = now.getTime() - d.getTime();
    if (diffMs < 0) return "Just now";
    const diffMin = Math.floor(diffMs / 60000);
    const diffHr = Math.floor(diffMin / 60);
    const diffDays = Math.floor(diffHr / 24);
    if (diffMin < 1) return "Just now";
    if (diffMin < 60) return `${diffMin} min ago`;
    if (diffHr < 24) return `${diffHr} hr ago`;
    if (diffDays < 30) return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
    return formatDate(dateStr);
  };

  const getDisplayName = (u: AdminUser) => {
    if (u.firstName && u.lastName) return `${u.firstName} ${u.lastName}`;
    if (u.firstName) return u.firstName;
    return u.username;
  };

  return (
    <div className="min-h-screen pb-20">
      <div className="sticky top-[58px] z-40 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 py-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <Button variant="ghost" size="icon" onClick={() => setLocation("/leadership")} data-testid="button-back">
              <ArrowLeft size={20} />
            </Button>
            <div>
              <h1 className="font-bold text-base text-foreground">User Management</h1>
              <p className="text-xs font-medium text-foreground/70">Track engagement, accuracy, and assign roles</p>
            </div>
          </div>
          <div className="flex items-center rounded-lg border border-border bg-white/5 p-0.5 sm:ml-auto sm:flex-shrink-0" data-testid="container-mode-toggle">
            <button
              onClick={() => setDataMode("live")}
              className={`flex items-center gap-1 text-xs font-bold px-2.5 py-1.5 rounded-md transition-all ${
                dataMode === "live" ? "bg-primary text-white shadow-sm" : "text-muted-foreground hover:text-foreground"
              }`}
              data-testid="button-mode-live"
            >
              <Database size={11} /> Live
            </button>
            <button
              onClick={() => setDataMode("demo")}
              className={`flex items-center gap-1 text-xs font-bold px-2.5 py-1.5 rounded-md transition-all ${
                dataMode === "demo" ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
              data-testid="button-mode-demo"
            >
              <FlaskConical size={11} /> Demo
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pt-6 flex flex-col gap-6">

        {dataMode === "demo" && (
          <div className="flex items-start gap-3 rounded-xl border border-orange-500/40 bg-orange-500/8 px-4 py-3" data-testid="banner-demo-mode">
            <FlaskConical size={15} className="text-orange-500 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-foreground/80">
              <span className="font-bold text-orange-500">Demo Data - </span>
              Sample staff roster for demonstration. Switch to Live to see your facility's actual learners.
            </p>
          </div>
        )}

        {dataMode === "live" && !isLoading && (!liveStats?.userList || liveStats.userList.length === 0) && (
          <div className="flex flex-col items-center justify-center gap-4 py-16 text-center" data-testid="container-live-empty">
            <div className="w-14 h-14 rounded-full border-2 border-border flex items-center justify-center bg-muted/20">
              <Users size={24} className="text-muted-foreground" />
            </div>
            <div>
              <p className="font-bold text-base mb-1">No learners yet</p>
              <p className="text-sm text-muted-foreground max-w-xs">
                Share the facility code to get started. Switch to Demo to explore a sample staff roster.
              </p>
            </div>
            <Button variant="outline" size="sm" onClick={() => setDataMode("demo")} data-testid="button-view-demo">
              <FlaskConical size={14} className="mr-1.5" /> View Demo Roster
            </Button>
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "Registered Users", value: stats?.totalUsers || 0, icon: UserPlus, color: "text-primary" },
            { label: "Active Today", value: stats?.activeToday || 0, icon: Calendar, color: "text-chart-2" },
            { label: "Questions Answered", value: stats?.totalQuestionsAnswered || 0, icon: Target, color: "text-chart-4" },
            { label: "Avg Accuracy", value: `${stats?.averageAccuracy || 0}%`, icon: TrendingUp, color: "text-chart-1" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="rounded-2xl bg-card border border-card-border p-4 flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15, delay: i * 0.05 }}
            >
              <stat.icon size={22} className={stat.color} />
              <span className="text-2xl font-black" data-testid={`text-stat-${stat.label.toLowerCase().replace(/\s/g, '-')}`}>
                {stat.value}
              </span>
              <span className="text-xs text-muted-foreground font-medium text-center">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        <AiLeadershipCoach isDemo={dataMode === "demo"} />

        <div className="rounded-2xl bg-card border border-card-border overflow-hidden">
          <div className="p-5 border-b border-card-border flex items-center justify-between gap-2">
            <h3 className="font-bold text-base flex items-center gap-2">
              <Users size={18} className="text-primary" />
              {dataMode === "demo" ? "Sample Staff Roster" : `Registered Users (${stats?.totalUsers || 0})`}
            </h3>
            {callerIsAdmin && dataMode === "live" && (
              <div className="flex items-center gap-1.5 text-sm text-foreground/70 font-semibold">
                <Shield size={13} className="text-primary" />
                Role management enabled
              </div>
            )}
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-card-border bg-muted/30">
                  <th className="text-left p-3 font-bold text-muted-foreground">#</th>
                  <th className="text-left p-3 font-bold text-muted-foreground">Name</th>
                  <th className="text-left p-3 font-bold text-muted-foreground hidden sm:table-cell">Username</th>
                  <th className="text-right p-3 font-bold text-muted-foreground">XP</th>
                  <th className="text-right p-3 font-bold text-muted-foreground">Streak</th>
                  <th className="text-right p-3 font-bold text-muted-foreground hidden sm:table-cell">Total Q's</th>
                  <th className="text-right p-3 font-bold text-muted-foreground hidden sm:table-cell">Today</th>
                  <th className="text-right p-3 font-bold text-muted-foreground hidden sm:table-cell">Accuracy</th>
                  <th className="text-right p-3 font-bold text-muted-foreground hidden lg:table-cell">Last Active</th>
                  {callerIsAdmin && dataMode === "live" && (
                    <th className="text-left p-3 font-bold text-muted-foreground hidden lg:table-cell">Access Role</th>
                  )}
                </tr>
              </thead>
              <tbody>
                {stats?.userList?.map((u, i) => {
                  const userRank = LEADERSHIP_RANK[(u.leadershipRole as string) || "learner"] ?? 0;
                  return (
                    <tr key={u.id} className="border-b border-card-border/50 last:border-0" data-testid={`row-user-${u.id}`}>
                      <td className="p-3 font-bold">{i + 1}</td>
                      <td className="p-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                            {(u.firstName || u.username).charAt(0).toUpperCase()}
                          </div>
                          <div className="flex flex-col">
                            <span className="font-bold" data-testid={`text-name-${u.id}`}>{getDisplayName(u)}</span>
                            <span className="text-xs text-muted-foreground sm:hidden">{u.username}</span>
                          </div>
                        </div>
                      </td>
                      <td className="p-3 text-muted-foreground hidden sm:table-cell" data-testid={`text-username-${u.id}`}>{u.username}</td>
                      <td className="p-3 text-right font-bold text-chart-4">{u.totalXp.toLocaleString()}</td>
                      <td className="p-3 text-right font-bold">{u.currentStreak}</td>
                      <td className="p-3 text-right text-muted-foreground hidden sm:table-cell">{u.questionsAnswered}</td>
                      <td className="p-3 text-right text-muted-foreground hidden sm:table-cell">{u.questionsToday}</td>
                      <td className="p-3 text-right hidden sm:table-cell">
                        <span className={`font-bold ${u.accuracy >= 80 ? "text-chart-1" : u.accuracy >= 50 ? "text-chart-4" : "text-destructive"}`}>
                          {u.accuracy}%
                        </span>
                      </td>
                      <td className="p-3 text-right text-muted-foreground text-xs hidden lg:table-cell">
                        {formatRelativeTime(u.lastActive)}
                      </td>
                      {callerIsAdmin && dataMode === "live" && (
                        <td className="p-3 hidden lg:table-cell">
                          <select
                            className="text-xs border border-border rounded-lg px-2 py-1 bg-background font-semibold focus:outline-none focus:ring-1 focus:ring-primary"
                            value={u.leadershipRole || "learner"}
                            disabled={roleChangeMutation.isPending || userRank >= callerRank}
                            data-testid={`select-role-${u.id}`}
                            onChange={(e) => roleChangeMutation.mutate({ userId: u.id, role: e.target.value })}
                          >
                            {LEADERSHIP_ROLES.filter(r => LEADERSHIP_RANK[r] <= callerRank).map((r) => (
                              <option key={r} value={r}>{LEADERSHIP_LABELS[r as LeadershipRole]}</option>
                            ))}
                          </select>
                        </td>
                      )}
                    </tr>
                  );
                })}
                {(!stats?.userList || stats.userList.length === 0) && dataMode === "live" && (
                  <tr>
                    <td colSpan={12} className="p-8 text-center text-muted-foreground">
                      No users yet. Share the facility code to get started!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {callerRank >= LEADERSHIP_RANK["director"] && dataMode === "live" && (
        <div className="max-w-4xl mx-auto px-4 mt-6">
          <div className="rounded-2xl bg-card border border-card-border overflow-hidden" data-testid="container-facility-settings">
            <div className="p-5 border-b border-card-border flex items-center gap-2">
              <Building2 size={18} className="text-primary" />
              <h3 className="font-bold text-base">Facility Settings</h3>
              <span className="ml-auto text-xs text-muted-foreground font-medium">Platform Mode</span>
            </div>
            <div className="p-5 flex flex-col gap-4">
              <div>
                <p className="text-sm font-semibold text-foreground mb-1">Compliance Management Mode</p>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  Controls which features are visible to your leadership team. <strong>Education Only</strong> shows training tools only. <strong>Full Platform</strong> adds Survey Readiness, Compliance Tasks, Regulatory Watch, and all AI compliance agents.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { value: "education_only", label: "Education Only", desc: "Training tools only - quizzes, flashcards, reports.", Icon: BookOpen, color: "text-blue-600", bg: "bg-blue-500/10", border: "border-blue-500/40" },
                    { value: "full_platform", label: "Full Platform", desc: "Education + all compliance management tools.", Icon: ShieldCheck, color: "text-emerald-600", bg: "bg-emerald-500/10", border: "border-emerald-500/40" },
                    { value: "off", label: "Off", desc: "Compliance tools disabled and hidden for all users.", Icon: PowerOff, color: "text-muted-foreground", bg: "bg-muted/40", border: "border-border" },
                  ].map(({ value, label, desc, Icon, color, bg, border }) => {
                    const isActive = (facilitySettings?.complianceMode ?? "education_only") === value;
                    return (
                      <button
                        key={value}
                        data-testid={`button-compliance-mode-${value}`}
                        disabled={complianceModeMutation.isPending}
                        onClick={() => complianceModeMutation.mutate(value)}
                        className={`rounded-xl border-2 p-4 text-left flex flex-col gap-2 transition-all ${
                          isActive
                            ? `${border} ${bg}`
                            : "border-border bg-background hover:border-border/80 hover:bg-muted/20"
                        } ${complianceModeMutation.isPending ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
                      >
                        <div className="flex items-center gap-2">
                          <Icon size={16} className={isActive ? color : "text-muted-foreground"} />
                          <span className={`text-sm font-bold ${isActive ? "text-foreground" : "text-muted-foreground"}`}>{label}</span>
                          {isActive && (
                            <span className={`ml-auto text-[10px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded ${bg} ${color}`}>Active</span>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground leading-snug">{desc}</p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {callerRank >= LEADERSHIP_RANK["director"] && dataMode === "live" && (
        <div className="max-w-4xl mx-auto px-4 mt-6">
          <div className="rounded-2xl bg-card border border-card-border overflow-hidden" data-testid="container-content-changelog">
            <div className="p-5 border-b border-card-border flex items-center gap-2">
              <GitCommit size={18} className="text-primary" />
              <h3 className="font-bold text-base">Content Version History</h3>
              <span className="ml-auto text-sm text-foreground/60 font-medium">{contentChangelogEntries?.length ?? 0} entries</span>
            </div>
            <div className="overflow-x-auto max-h-64 overflow-y-auto">
              {!contentChangelogEntries || contentChangelogEntries.length === 0 ? (
                <div className="p-8 text-center text-muted-foreground text-sm">No content changes recorded yet.</div>
              ) : (
                <table className="w-full text-xs">
                  <thead className="sticky top-0 bg-muted/60 backdrop-blur">
                    <tr className="border-b border-card-border">
                      <th className="text-left p-2 font-bold text-muted-foreground">Date</th>
                      <th className="text-left p-2 font-bold text-muted-foreground">Type</th>
                      <th className="text-left p-2 font-bold text-muted-foreground">Scope</th>
                      <th className="text-left p-2 font-bold text-muted-foreground">Version</th>
                      <th className="text-left p-2 font-bold text-muted-foreground">Action</th>
                      <th className="text-right p-2 font-bold text-muted-foreground">Items</th>
                      <th className="text-left p-2 font-bold text-muted-foreground hidden md:table-cell">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contentChangelogEntries.map((entry) => (
                      <tr key={entry.id} className="border-b border-card-border/40 last:border-0 hover:bg-muted/20" data-testid={`row-changelog-${entry.id}`}>
                        <td className="p-2 text-muted-foreground whitespace-nowrap">
                          {new Date(entry.changedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                        </td>
                        <td className="p-2 font-mono font-bold text-chart-4">{entry.contentType}</td>
                        <td className="p-2">
                          {entry.scope && (
                            <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                              entry.scope === "ASC" ? "bg-violet-500/10 text-violet-600" :
                              entry.scope === "Hospital" ? "bg-blue-500/10 text-blue-600" :
                              "bg-muted text-muted-foreground"
                            }`}>{entry.scope}</span>
                          )}
                        </td>
                        <td className="p-2 font-semibold text-foreground">{entry.version ?? "-"}</td>
                        <td className="p-2 font-mono text-emerald-600">{entry.action}</td>
                        <td className="p-2 text-right font-bold">{entry.itemCount ?? "-"}</td>
                        <td className="p-2 text-muted-foreground hidden md:table-cell max-w-xs truncate">{entry.description ?? "-"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      )}

      {callerIsAdmin && dataMode === "live" && (
        <div className="max-w-4xl mx-auto px-4 pb-8 mt-6">
          <div className="rounded-2xl bg-card border border-card-border overflow-hidden">
            <div className="p-5 border-b border-card-border flex items-center gap-2">
              <ScrollText size={18} className="text-primary" />
              <h3 className="font-bold text-base">Access Audit Log</h3>
              <span className="ml-auto text-sm text-foreground/60 font-medium">Last {auditLogEntries?.length ?? 0} events</span>
            </div>
            <div className="overflow-x-auto max-h-80 overflow-y-auto">
              {!auditLogEntries || auditLogEntries.length === 0 ? (
                <div className="p-8 text-center text-muted-foreground text-sm">No audit events yet.</div>
              ) : (
                <table className="w-full text-xs">
                  <thead className="sticky top-0 bg-muted/60 backdrop-blur">
                    <tr className="border-b border-card-border">
                      <th className="text-left p-2 font-bold text-muted-foreground">Time</th>
                      <th className="text-left p-2 font-bold text-muted-foreground">User</th>
                      <th className="text-left p-2 font-bold text-muted-foreground">Role</th>
                      <th className="text-left p-2 font-bold text-muted-foreground">Action</th>
                      <th className="text-left p-2 font-bold text-muted-foreground hidden sm:table-cell">Facility</th>
                    </tr>
                  </thead>
                  <tbody>
                    {auditLogEntries.map((entry) => (
                      <tr key={entry.id} className="border-b border-card-border/40 last:border-0 hover:bg-muted/20" data-testid={`row-audit-${entry.id}`}>
                        <td className="p-2 text-muted-foreground whitespace-nowrap">
                          {new Date(entry.createdAt).toLocaleString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" })}
                        </td>
                        <td className="p-2 font-medium">{entry.username ?? "-"}</td>
                        <td className="p-2 text-muted-foreground">{entry.leadershipRole}</td>
                        <td className="p-2 font-mono text-xs text-chart-4">{entry.action}</td>
                        <td className="p-2 text-muted-foreground hidden sm:table-cell">{entry.facilityName ?? "-"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
