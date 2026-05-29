import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { ArrowLeft, Flame, Zap, Trophy, Target, User as UserIcon, Pencil, Lock, Eye, EyeOff, Check, X, Loader2, Briefcase, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { StreakFlame } from "@/components/streak-flame";
import { XpBar } from "@/components/xp-bar";
import { DailyCalendar } from "@/components/daily-calendar";
import { useAuth } from "@/lib/auth";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, queryClient } from "@/lib/queryClient";
import type { UserStreak, DailyActivity, QuizSession } from "@shared/schema";
import { getVisibleLevelsForModule } from "@shared/all-levels";
import type { ModuleId } from "@shared/schema";

export default function ProfilePage() {
  const { user } = useAuth();
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const [showChangeRoleDialog, setShowChangeRoleDialog] = useState(false);
  const [nightMode, setNightMode] = useState(() => localStorage.getItem("ar_night_mode") === "1");

  function toggleNightMode(enabled: boolean) {
    setNightMode(enabled);
    if (enabled) {
      localStorage.setItem("ar_night_mode", "1");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.removeItem("ar_night_mode");
      document.documentElement.classList.remove("dark");
    }
  }
  const [editingUsername, setEditingUsername] = useState(false);
  const [newUsername, setNewUsername] = useState("");
  const [changingPassword, setChangingPassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const { data: streak } = useQuery<UserStreak>({
    queryKey: ["/api/game/streak"],
  });

  const { data: activities } = useQuery<DailyActivity[]>({
    queryKey: ["/api/game/activities"],
  });

  const { data: savedSessions } = useQuery<QuizSession[]>({
    queryKey: ["/api/game/sessions"],
  });

  // Module-scoped XP - match the dashboard / leaderboard so the user sees consistent numbers per module.
  const userModule: ModuleId = (user?.organizationType as ModuleId) || "hospital";
  const moduleLevelIdSet = new Set(getVisibleLevelsForModule(userModule, { includeDraft: true }).map((l) => l.id));
  const moduleXp = savedSessions
    ?.filter((s) => moduleLevelIdSet.has(s.levelId))
    .reduce((sum, s) => sum + (s.xpEarned || 0), 0) || 0;

  const updateSettingsMutation = useMutation({
    mutationFn: async (data: { dailyGoal?: number; reminderEnabled?: boolean }) => {
      await apiRequest("PATCH", "/api/auth/settings", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/auth/me"] });
    },
  });

  const updateUsernameMutation = useMutation({
    mutationFn: async (username: string) => {
      const res = await apiRequest("PATCH", "/api/auth/username", { username });
      return await res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/auth/me"] });
      setEditingUsername(false);
      setNewUsername("");
      toast({ title: "Username updated", description: "Your username has been changed." });
    },
    onError: (error: any) => {
      let msg = "Something went wrong";
      try {
        const raw = error?.message || "";
        const jsonPart = raw.replace(/^\d+:\s*/, "");
        const parsed = JSON.parse(jsonPart);
        msg = parsed.message || msg;
      } catch {}
      toast({ title: "Update failed", description: msg, variant: "destructive" });
    },
  });

  const updatePasswordMutation = useMutation({
    mutationFn: async (data: { currentPassword: string; newPassword: string }) => {
      const res = await apiRequest("PATCH", "/api/auth/password", data);
      return await res.json();
    },
    onSuccess: () => {
      setChangingPassword(false);
      setCurrentPassword("");
      setNewPassword("");
      setConfirmNewPassword("");
      toast({ title: "Password updated", description: "Your password has been changed." });
    },
    onError: (error: any) => {
      let msg = "Something went wrong";
      try {
        const raw = error?.message || "";
        const jsonPart = raw.replace(/^\d+:\s*/, "");
        const parsed = JSON.parse(jsonPart);
        msg = parsed.message || msg;
      } catch {}
      toast({ title: "Update failed", description: msg, variant: "destructive" });
    },
  });

  const totalCorrect = activities?.reduce((sum, a) => sum + a.correctAnswers, 0) || 0;
  const totalAnswered = activities?.reduce((sum, a) => sum + a.questionsAnswered, 0) || 0;
  const accuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
  const daysActive = activities?.filter((a) => a.questionsAnswered > 0).length || 0;

  return (
    <div className="min-h-screen pb-20">
      <div className="sticky top-[58px] z-40 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLocation("/")}
            data-testid="button-back"
          >
            <ArrowLeft size={20} />
          </Button>
          <h1 className="font-bold text-base text-foreground">Profile & Settings</h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 pt-6 flex flex-col gap-6">
        <motion.div
          className="rounded-2xl bg-card border border-card-border p-6 flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
            <UserIcon size={36} className="text-primary" />
          </div>
          <div className="text-center">
            <h2 className="text-xl font-black" data-testid="text-profile-username">{user?.username}</h2>
          </div>
          <StreakFlame streak={streak?.currentStreak || 0} size="lg" />
        </motion.div>

        <XpBar currentXp={moduleXp} />

        <div className="rounded-2xl bg-card border border-card-border p-5">
          <h3 className="font-bold text-base mb-4">Account</h3>
          <div className="flex flex-col gap-5">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Pencil size={18} className="text-muted-foreground" />
                  <div>
                    <p className="text-sm font-bold">Username</p>
                    <p className="text-xs text-muted-foreground">{user?.username}</p>
                  </div>
                </div>
                {!editingUsername && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => { setEditingUsername(true); setNewUsername(user?.username || ""); }}
                    data-testid="button-edit-username"
                  >
                    Change
                  </Button>
                )}
              </div>
              {editingUsername && (
                <motion.div
                  className="mt-3 flex flex-col gap-2"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                >
                  <Input
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                    placeholder="New username (min 3 characters)"
                    data-testid="input-new-username"
                  />
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      disabled={newUsername.length < 3 || newUsername === user?.username || updateUsernameMutation.isPending}
                      onClick={() => updateUsernameMutation.mutate(newUsername)}
                      data-testid="button-save-username"
                    >
                      {updateUsernameMutation.isPending ? <Loader2 size={14} className="animate-spin mr-1" /> : <Check size={14} className="mr-1" />}
                      Save
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => { setEditingUsername(false); setNewUsername(""); }}
                      data-testid="button-cancel-username"
                    >
                      <X size={14} className="mr-1" />
                      Cancel
                    </Button>
                  </div>
                </motion.div>
              )}
            </div>

            <div className="border-t border-card-border/50 pt-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Lock size={18} className="text-muted-foreground" />
                  <div>
                    <p className="text-sm font-bold">Password</p>
                    <p className="text-xs text-muted-foreground">Change your password</p>
                  </div>
                </div>
                {!changingPassword && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setChangingPassword(true)}
                    data-testid="button-change-password"
                  >
                    Change
                  </Button>
                )}
              </div>
              {changingPassword && (
                <motion.div
                  className="mt-3 flex flex-col gap-3"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                >
                  <div className="relative">
                    <Input
                      type={showCurrentPassword ? "text" : "password"}
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      placeholder="Current password"
                      data-testid="input-current-password"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                      onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    >
                      {showCurrentPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                  <div className="relative">
                    <Input
                      type={showNewPassword ? "text" : "password"}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="New password (min 6 characters)"
                      data-testid="input-new-password"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                    >
                      {showNewPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                  <Input
                    type="password"
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                    placeholder="Confirm new password"
                    data-testid="input-confirm-new-password"
                  />
                  {newPassword && confirmNewPassword && newPassword !== confirmNewPassword && (
                    <p className="text-xs text-destructive font-medium">Passwords don't match</p>
                  )}
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      disabled={
                        !currentPassword ||
                        newPassword.length < 6 ||
                        newPassword !== confirmNewPassword ||
                        updatePasswordMutation.isPending
                      }
                      onClick={() => updatePasswordMutation.mutate({ currentPassword, newPassword })}
                      data-testid="button-save-password"
                    >
                      {updatePasswordMutation.isPending ? <Loader2 size={14} className="animate-spin mr-1" /> : <Check size={14} className="mr-1" />}
                      Update Password
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setChangingPassword(false);
                        setCurrentPassword("");
                        setNewPassword("");
                        setConfirmNewPassword("");
                      }}
                      data-testid="button-cancel-password"
                    >
                      <X size={14} className="mr-1" />
                      Cancel
                    </Button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Days Active", value: daysActive, icon: Target, color: "text-primary" },
            { label: "Accuracy", value: `${accuracy}%`, icon: Trophy, color: "text-chart-4" },
            { label: "Total Questions", value: totalAnswered, icon: Zap, color: "text-chart-2" },
            { label: "Best Streak", value: streak?.longestStreak || 0, icon: Flame, color: "text-chart-3" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="rounded-2xl bg-card border border-card-border p-4 flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15 }}
            >
              <stat.icon size={20} className={stat.color} />
              <span className="text-xl font-black">{stat.value}</span>
              <span className="text-xs text-muted-foreground font-medium">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        <div className="rounded-2xl bg-card border border-card-border p-5">
          <h3 className="font-bold text-base mb-4">Settings</h3>
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Briefcase size={18} className="text-muted-foreground" />
                <div>
                  <p className="text-sm font-bold">Role</p>
                  <p className="text-xs text-muted-foreground">Tailors your training to your work</p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                data-testid="button-change-role"
                onClick={() => setShowChangeRoleDialog(true)}
              >
                Change role
              </Button>
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Target size={18} className="text-muted-foreground" />
                <div>
                  <p className="text-sm font-bold">Daily Goal</p>
                  <p className="text-xs text-muted-foreground">Questions per day</p>
                </div>
              </div>
              <Select
                value={String(user?.dailyGoal || 5)}
                onValueChange={(val) =>
                  updateSettingsMutation.mutate({ dailyGoal: parseInt(val) })
                }
              >
                <SelectTrigger className="w-20" data-testid="select-daily-goal">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="15">15</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Moon size={18} className="text-muted-foreground" />
                <div>
                  <p className="text-sm font-bold">Night Mode</p>
                  <p className="text-xs text-muted-foreground">Dark background, easier on the eyes</p>
                </div>
              </div>
              <Switch
                checked={nightMode}
                onCheckedChange={toggleNightMode}
                data-testid="switch-night-mode"
              />
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-card border border-card-border p-5">
          <h3 className="font-bold text-base mb-4">Activity History</h3>
          <DailyCalendar
            activities={activities || []}
            dailyGoal={user?.dailyGoal || 5}
          />
        </div>
      </div>

      <AlertDialog open={showChangeRoleDialog} onOpenChange={setShowChangeRoleDialog}>
        <AlertDialogContent data-testid="dialog-change-role">
          <AlertDialogHeader>
            <AlertDialogTitle>Switch roles?</AlertDialogTitle>
            <AlertDialogDescription className="pt-2 leading-relaxed">
              Your current progress will be saved under your existing role. You will be taken back to the role selection screen.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel data-testid="button-change-role-cancel">Cancel</AlertDialogCancel>
            <AlertDialogAction
              data-testid="button-change-role-confirm"
              onClick={() => {
                setShowChangeRoleDialog(false);
                setLocation("/role-select");
              }}
            >
              Switch role
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
