import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import {
  ArrowLeft, Users, Flame, Zap, GraduationCap, Building2,
  Plus, Pencil, Trash2, ChevronDown, ChevronUp, Search, Check, X, UsersRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/lib/auth";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface TeamMember {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  department: string | null;
  totalXp: number;
  currentStreak: number;
  leadershipRole: string;
}

interface EducatorTeamResponse {
  team: TeamMember[];
  department: string | null;
}

interface TeamWithCount {
  id: number;
  name: string;
  facilityId: number | null;
  department: string | null;
  createdByUserId: number | null;
  createdAt: string;
  memberCount: number;
}

const LEADERSHIP_RANK: Record<string, number> = {
  learner: 0, educator: 1, director: 2, ceo: 3, admin: 4, super_admin: 5,
};

function getDisplayName(m: { firstName: string; lastName: string; username: string }) {
  if (m.firstName && m.lastName) return `${m.firstName} ${m.lastName}`;
  if (m.firstName) return m.firstName;
  return m.username;
}

export default function EducatorHubPage() {
  const { user } = useAuth();
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<"department" | "teams">(
    LEADERSHIP_RANK[(user as any)?.leadershipRole ?? "learner"] >= LEADERSHIP_RANK["ceo"] ||
    (user as any)?.isAdmin
      ? "teams"
      : "department"
  );

  const effectiveRole = (user as any)?.leadershipRole ?? "learner";
  const isAdmin = (user as any)?.isAdmin ?? false;
  const effectiveRank = isAdmin
    ? Math.max(LEADERSHIP_RANK[effectiveRole] ?? 0, LEADERSHIP_RANK["admin"])
    : LEADERSHIP_RANK[effectiveRole] ?? 0;
  const canManageTeams = effectiveRank >= LEADERSHIP_RANK["ceo"];

  const { data, isLoading: deptLoading } = useQuery<EducatorTeamResponse>({
    queryKey: ["/api/educator/team"],
  });

  const { data: teamsData, isLoading: teamsLoading } = useQuery<TeamWithCount[]>({
    queryKey: ["/api/teams"],
    enabled: activeTab === "teams",
  });

  const department = data?.department ?? (user as any)?.department ?? null;
  const team = data?.team ?? [];
  const teams = teamsData ?? [];

  return (
    <div className="min-h-screen pb-20">
      <div className="sticky top-[58px] z-40 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => setLocation("/")} data-testid="button-back-to-training">
            <ArrowLeft size={20} />
          </Button>
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="font-bold text-base text-foreground">Educator Console</h1>
              {department && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold bg-violet-500/15 text-violet-700 dark:text-violet-400 border border-violet-500/30">
                  <Building2 size={10} /> {department}
                </span>
              )}
            </div>
            <p className="text-sm font-medium text-foreground/70">
              {activeTab === "department"
                ? `My team - ${team.length} learner${team.length !== 1 ? "s" : ""}`
                : `${teams.length} team${teams.length !== 1 ? "s" : ""} in this facility`}
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 pb-0 flex gap-0">
          {(["department", "teams"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              data-testid={`tab-${tab}`}
              className={`px-5 py-2.5 text-sm font-semibold border-b-2 transition-colors ${
                activeTab === tab
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab === "department" ? "My Department" : "Teams"}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pt-6">
        <AnimatePresence mode="wait">
          {activeTab === "department" ? (
            <motion.div
              key="department"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
              className="flex flex-col gap-6"
            >
              <DepartmentTab team={team} isLoading={deptLoading} department={department} />
            </motion.div>
          ) : (
            <motion.div
              key="teams"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
              className="flex flex-col gap-6"
            >
              <TeamsTab
                teams={teams}
                isLoading={teamsLoading}
                canManageTeams={canManageTeams}
                facilityUsers={team}
                toast={toast}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function DepartmentTab({ team, isLoading, department }: { team: TeamMember[]; isLoading: boolean; department: string | null }) {
  return (
    <>
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Team Size", value: team.length, icon: Users, color: "text-primary" },
          { label: "Total XP", value: team.reduce((s, m) => s + m.totalXp, 0).toLocaleString(), icon: Zap, color: "text-chart-4" },
          { label: "Active Streaks", value: team.filter(m => m.currentStreak > 0).length, icon: Flame, color: "text-chart-2" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            className="rounded-2xl bg-card border border-card-border p-4 flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <stat.icon size={20} className={stat.color} />
            <span className="text-xl font-black">{isLoading ? "-" : stat.value}</span>
            <span className="text-xs text-muted-foreground font-medium text-center">{stat.label}</span>
          </motion.div>
        ))}
      </div>

      <div className="rounded-2xl bg-card border border-card-border overflow-hidden">
        <div className="p-5 border-b border-card-border flex items-center gap-2">
          <GraduationCap size={18} className="text-primary" />
          <h3 className="font-bold text-base">
            {department ? `${department} Team` : "My Team"}
          </h3>
        </div>

        {isLoading ? (
          <div className="p-4 flex flex-col gap-3">
            {[1, 2, 3].map(i => <Skeleton key={i} className="h-12 w-full rounded-xl" />)}
          </div>
        ) : team.length === 0 ? (
          <div className="p-8 text-center text-muted-foreground text-sm">
            {department
              ? `No learners found in the "${department}" department yet. Make sure learner accounts have this department assigned.`
              : "No department assigned to your account. Contact an administrator to set your department so you can view your team."}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-card-border bg-muted/30">
                  <th className="text-left p-3 font-bold text-muted-foreground">#</th>
                  <th className="text-left p-3 font-bold text-muted-foreground">Name</th>
                  <th className="text-left p-3 font-bold text-muted-foreground hidden sm:table-cell">Department</th>
                  <th className="text-right p-3 font-bold text-muted-foreground">XP</th>
                  <th className="text-right p-3 font-bold text-muted-foreground">Streak</th>
                </tr>
              </thead>
              <tbody>
                {team.map((m, i) => (
                  <tr key={m.id} className="border-b border-card-border/50 last:border-0" data-testid={`row-team-${m.id}`}>
                    <td className="p-3 font-bold text-foreground/60">{i + 1}</td>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary flex-shrink-0">
                          {(m.firstName || m.username).charAt(0).toUpperCase()}
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="font-semibold truncate" data-testid={`text-team-name-${m.id}`}>{getDisplayName(m)}</span>
                          <span className="text-xs text-muted-foreground sm:hidden">{m.username}</span>
                        </div>
                      </div>
                    </td>
                    <td className="p-3 text-muted-foreground hidden sm:table-cell text-sm">{m.department ?? "-"}</td>
                    <td className="p-3 text-right font-bold text-chart-4">{m.totalXp}</td>
                    <td className="p-3 text-right">
                      <span className={`font-bold ${m.currentStreak > 0 ? "text-chart-2" : "text-muted-foreground"}`}>
                        {m.currentStreak > 0 ? `🔥 ${m.currentStreak}` : "-"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <p className="text-sm text-center text-muted-foreground px-2">
        Showing learners in your assigned department only. Contact an administrator to adjust access.
      </p>
    </>
  );
}

function TeamsTab({
  teams,
  isLoading,
  canManageTeams,
  facilityUsers,
  toast,
}: {
  teams: TeamWithCount[];
  isLoading: boolean;
  canManageTeams: boolean;
  facilityUsers: TeamMember[];
  toast: ReturnType<typeof useToast>["toast"];
}) {
  const [expandedTeamId, setExpandedTeamId] = useState<number | null>(null);
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [manageTeam, setManageTeam] = useState<TeamWithCount | null>(null);
  const [deleteTargetId, setDeleteTargetId] = useState<number | null>(null);

  const createMutation = useMutation({
    mutationFn: async (name: string) => apiRequest("POST", "/api/teams", { name }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/teams"] });
      setShowCreateDialog(false);
      toast({ title: "Team created" });
    },
    onError: (e: any) => toast({ title: "Error", description: e.message, variant: "destructive" }),
  });

  const deleteMutation = useMutation({
    mutationFn: async (teamId: number) => apiRequest("DELETE", `/api/teams/${teamId}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/teams"] });
      setDeleteTargetId(null);
      if (expandedTeamId === deleteTargetId) setExpandedTeamId(null);
      toast({ title: "Team deleted" });
    },
    onError: (e: any) => toast({ title: "Error", description: e.message, variant: "destructive" }),
  });

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <UsersRound size={18} className="text-primary" />
          <h2 className="font-bold text-base">Teams</h2>
          {!isLoading && (
            <span className="text-xs font-semibold text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
              {teams.length}
            </span>
          )}
        </div>
        {canManageTeams && (
          <Button size="sm" onClick={() => setShowCreateDialog(true)} data-testid="button-create-team">
            <Plus size={15} className="mr-1" /> New Team
          </Button>
        )}
      </div>

      {isLoading ? (
        <div className="flex flex-col gap-3">
          {[1, 2].map(i => <Skeleton key={i} className="h-20 w-full rounded-2xl" />)}
        </div>
      ) : teams.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border p-12 text-center">
          <UsersRound size={32} className="text-muted-foreground mx-auto mb-3" />
          <p className="font-semibold text-foreground/70 mb-1">No teams yet</p>
          <p className="text-sm text-muted-foreground">
            {canManageTeams
              ? 'Create a team to group specific staff members together for targeted training.'
              : 'No teams have been created for your facility yet.'}
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {teams.map((team, i) => (
            <TeamCard
              key={team.id}
              team={team}
              index={i}
              isExpanded={expandedTeamId === team.id}
              onToggle={() => setExpandedTeamId(expandedTeamId === team.id ? null : team.id)}
              canManageTeams={canManageTeams}
              onManage={() => setManageTeam(team)}
              onDelete={() => setDeleteTargetId(team.id)}
            />
          ))}
        </div>
      )}

      <p className="text-sm text-center text-muted-foreground px-2">
        {canManageTeams
          ? "You can create teams to organize staff into specific groups for training."
          : "Teams are managed by your facility's leadership. Contact a CEO or admin to make changes."}
      </p>

      <CreateTeamDialog
        open={showCreateDialog}
        onClose={() => setShowCreateDialog(false)}
        onSubmit={(name) => createMutation.mutate(name)}
        isPending={createMutation.isPending}
      />

      {manageTeam && (
        <ManageTeamDialog
          team={manageTeam}
          facilityUsers={facilityUsers}
          open={!!manageTeam}
          onClose={() => setManageTeam(null)}
          toast={toast}
        />
      )}

      <Dialog open={!!deleteTargetId} onOpenChange={(o) => !o && setDeleteTargetId(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Team</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-muted-foreground">
            Are you sure you want to delete this team? This cannot be undone. Members will not be deleted - just removed from the team.
          </p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteTargetId(null)}>Cancel</Button>
            <Button
              variant="destructive"
              onClick={() => deleteTargetId && deleteMutation.mutate(deleteTargetId)}
              disabled={deleteMutation.isPending}
              data-testid="button-confirm-delete-team"
            >
              Delete Team
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

function TeamCard({
  team, index, isExpanded, onToggle, canManageTeams, onManage, onDelete,
}: {
  team: TeamWithCount;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
  canManageTeams: boolean;
  onManage: () => void;
  onDelete: () => void;
}) {
  const { data: members, isLoading: membersLoading } = useQuery<TeamMember[]>({
    queryKey: ["/api/teams", team.id, "members"],
    queryFn: async () => {
      const res = await fetch(`/api/teams/${team.id}/members`, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to load members");
      return res.json();
    },
    enabled: isExpanded,
  });

  return (
    <motion.div
      className="rounded-2xl bg-card border border-card-border overflow-hidden"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
    >
      <div className="p-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
          <UsersRound size={18} className="text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold truncate" data-testid={`text-team-name-${team.id}`}>{team.name}</p>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-xs text-muted-foreground">
              {team.memberCount} member{team.memberCount !== 1 ? "s" : ""}
            </span>
            {team.department && (
              <span className="inline-flex items-center gap-1 px-1.5 py-0 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-700 dark:text-violet-400 border border-violet-500/20">
                <Building2 size={9} /> {team.department}
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center gap-1 flex-shrink-0">
          {canManageTeams && (
            <>
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={onManage} data-testid={`button-manage-team-${team.id}`}>
                <Pencil size={14} />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive" onClick={onDelete} data-testid={`button-delete-team-${team.id}`}>
                <Trash2 size={14} />
              </Button>
            </>
          )}
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={onToggle} data-testid={`button-expand-team-${team.id}`}>
            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="border-t border-card-border">
              {membersLoading ? (
                <div className="p-4 flex flex-col gap-2">
                  {[1, 2].map(i => <Skeleton key={i} className="h-10 w-full rounded-lg" />)}
                </div>
              ) : !members || members.length === 0 ? (
                <div className="p-6 text-center text-sm text-muted-foreground">
                  No members in this team yet.
                  {canManageTeams && " Click the edit button to add members."}
                </div>
              ) : (
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/30">
                      <th className="text-left p-3 font-bold text-muted-foreground">Name</th>
                      <th className="text-left p-3 font-bold text-muted-foreground hidden sm:table-cell">Department</th>
                      <th className="text-right p-3 font-bold text-muted-foreground">XP</th>
                      <th className="text-right p-3 font-bold text-muted-foreground">Streak</th>
                    </tr>
                  </thead>
                  <tbody>
                    {members.map((m) => (
                      <tr key={m.id} className="border-t border-card-border/40" data-testid={`row-member-${m.id}`}>
                        <td className="p-3">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary flex-shrink-0">
                              {(m.firstName || m.username).charAt(0).toUpperCase()}
                            </div>
                            <span className="font-medium truncate">{getDisplayName(m)}</span>
                          </div>
                        </td>
                        <td className="p-3 text-muted-foreground hidden sm:table-cell">{m.department ?? "-"}</td>
                        <td className="p-3 text-right font-bold text-chart-4">{m.totalXp}</td>
                        <td className="p-3 text-right font-bold">
                          <span className={m.currentStreak > 0 ? "text-chart-2" : "text-muted-foreground"}>
                            {m.currentStreak > 0 ? `🔥 ${m.currentStreak}` : "-"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function CreateTeamDialog({
  open, onClose, onSubmit, isPending,
}: {
  open: boolean;
  onClose: () => void;
  onSubmit: (name: string) => void;
  isPending: boolean;
}) {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (!name.trim()) return;
    onSubmit(name.trim());
    setName("");
  };

  return (
    <Dialog open={open} onOpenChange={(o) => { if (!o) { onClose(); setName(""); } }}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Team</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="team-name">Team Name</Label>
            <Input
              id="team-name"
              placeholder="e.g. Night Shift, OR Team A, ICU Core..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              data-testid="input-team-name"
              autoFocus
            />
          </div>
          <p className="text-xs text-muted-foreground">
            After creating the team, use the edit button to add members from your facility's user list.
          </p>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit} disabled={!name.trim() || isPending} data-testid="button-submit-create-team">
            {isPending ? "Creating..." : "Create Team"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function ManageTeamDialog({
  team, facilityUsers, open, onClose, toast,
}: {
  team: TeamWithCount;
  facilityUsers: TeamMember[];
  open: boolean;
  onClose: () => void;
  toast: ReturnType<typeof useToast>["toast"];
}) {
  const [teamName, setTeamName] = useState(team.name);
  const [search, setSearch] = useState("");
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set());

  const { isLoading: loadingMembers, data: currentMembers } = useQuery<TeamMember[]>({
    queryKey: ["/api/teams", team.id, "members"],
    queryFn: async () => {
      const res = await fetch(`/api/teams/${team.id}/members`, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to load members");
      return res.json();
    },
    enabled: open,
    staleTime: 0,
  });

  useEffect(() => {
    if (currentMembers) {
      setSelectedIds(new Set(currentMembers.map(m => m.id)));
    }
  }, [currentMembers]);

  const renameMutation = useMutation({
    mutationFn: async () => apiRequest("PUT", `/api/teams/${team.id}`, { name: teamName }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/teams"] });
      toast({ title: "Team renamed" });
    },
    onError: (e: any) => toast({ title: "Error", description: e.message, variant: "destructive" }),
  });

  const setMembersMutation = useMutation({
    mutationFn: async () => apiRequest("POST", `/api/teams/${team.id}/members`, { userIds: Array.from(selectedIds) }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/teams"] });
      queryClient.invalidateQueries({ queryKey: ["/api/teams", team.id, "members"] });
      toast({ title: "Team members updated" });
      onClose();
    },
    onError: (e: any) => toast({ title: "Error", description: e.message, variant: "destructive" }),
  });

  const filteredUsers = facilityUsers.filter(u => {
    const q = search.toLowerCase();
    return (
      getDisplayName(u).toLowerCase().includes(q) ||
      u.username.toLowerCase().includes(q) ||
      (u.department ?? "").toLowerCase().includes(q)
    );
  });

  const toggleUser = (userId: number) => {
    setSelectedIds(prev => {
      const next = new Set(prev);
      if (next.has(userId)) next.delete(userId);
      else next.add(userId);
      return next;
    });
  };

  const handleSave = () => {
    const renamedPromise = teamName.trim() !== team.name ? renameMutation.mutateAsync() : Promise.resolve();
    renamedPromise.then(() => setMembersMutation.mutate());
  };

  return (
    <Dialog open={open} onOpenChange={(o) => { if (!o) onClose(); }}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Manage Team</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <Label htmlFor="manage-team-name">Team Name</Label>
            <Input
              id="manage-team-name"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              data-testid="input-manage-team-name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <Label>Members</Label>
              <span className="text-xs text-muted-foreground font-medium">
                {selectedIds.size} selected
              </span>
            </div>

            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search by name or department..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-8"
                data-testid="input-member-search"
              />
            </div>

            {loadingMembers && !membersLoaded ? (
              <div className="flex flex-col gap-2">
                {[1, 2, 3].map(i => <Skeleton key={i} className="h-11 w-full rounded-xl" />)}
              </div>
            ) : facilityUsers.length === 0 ? (
              <div className="p-4 text-center text-sm text-muted-foreground border border-dashed border-border rounded-xl">
                No facility users found. Make sure staff accounts are created in your facility.
              </div>
            ) : (
              <div className="border border-border rounded-xl overflow-hidden max-h-64 overflow-y-auto">
                {filteredUsers.length === 0 ? (
                  <div className="p-4 text-center text-sm text-muted-foreground">No users match your search.</div>
                ) : (
                  filteredUsers.map((u) => {
                    const checked = selectedIds.has(u.id);
                    return (
                      <button
                        key={u.id}
                        onClick={() => toggleUser(u.id)}
                        className={`w-full flex items-center gap-3 p-3 text-left transition-colors border-b border-border/50 last:border-0 hover:bg-muted/40 ${checked ? "bg-primary/5" : ""}`}
                        data-testid={`toggle-member-${u.id}`}
                      >
                        <div className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 border-2 transition-colors ${checked ? "bg-primary border-primary" : "border-border"}`}>
                          {checked && <Check size={12} className="text-primary-foreground" />}
                        </div>
                        <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary flex-shrink-0">
                          {(u.firstName || u.username).charAt(0).toUpperCase()}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold truncate">{getDisplayName(u)}</p>
                          <p className="text-xs text-muted-foreground truncate">{u.department ?? u.leadershipRole}</p>
                        </div>
                        <div className="text-xs text-muted-foreground flex-shrink-0">
                          <span className="font-semibold text-chart-4">{u.totalXp} XP</span>
                        </div>
                      </button>
                    );
                  })
                )}
              </div>
            )}
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            <X size={14} className="mr-1" /> Cancel
          </Button>
          <Button
            onClick={handleSave}
            disabled={setMembersMutation.isPending || renameMutation.isPending || !teamName.trim()}
            data-testid="button-save-team"
          >
            {setMembersMutation.isPending ? "Saving..." : "Save Changes"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
