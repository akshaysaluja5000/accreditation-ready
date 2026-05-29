import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { ArrowLeft, Trophy, Zap, Flame, Target, TrendingUp, Medal, Crown, Calendar, CalendarDays, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/lib/auth";
import { getVisibleLevelsForModule } from "@shared/all-levels";
import type { ModuleId } from "@shared/schema";

interface LeaderboardEntry {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  totalXp: number;
  allTimeXp: number;
  currentStreak: number;
  longestStreak: number;
  questionsAnswered: number;
  accuracy: number;
  levelsCompleted: number;
  lastActive: string | null;
}

type Period = "all" | "monthly" | "weekly" | "daily";

const PERIODS: { value: Period; label: string; icon: React.ReactNode }[] = [
  { value: "all", label: "All Time", icon: <Trophy size={13} /> },
  { value: "monthly", label: "Month", icon: <Calendar size={13} /> },
  { value: "weekly", label: "Week", icon: <CalendarDays size={13} /> },
  { value: "daily", label: "Today", icon: <Sun size={13} /> },
];

function displayName(entry: LeaderboardEntry): string {
  if (entry.firstName && entry.lastName) {
    return `${entry.firstName} ${entry.lastName}`;
  }
  return entry.username;
}

function initials(entry: LeaderboardEntry): string {
  if (entry.firstName && entry.lastName) {
    return `${entry.firstName.charAt(0)}${entry.lastName.charAt(0)}`.toUpperCase();
  }
  return entry.username.charAt(0).toUpperCase();
}

export default function LeaderboardPage() {
  const { user } = useAuth();
  const [, setLocation] = useLocation();
  const [period, setPeriod] = useState<Period>("all");

  const { data: leaderboard, isLoading } = useQuery<LeaderboardEntry[]>({
    queryKey: ["/api/game/leaderboard", period],
    queryFn: () =>
      fetch(`/api/game/leaderboard?period=${period}`, { credentials: "include" }).then((r) => r.json()),
  });

  if (isLoading) {
    return (
      <div className="min-h-screen p-4 max-w-2xl mx-auto">
        <div className="flex flex-col gap-6 pt-16">
          <Skeleton className="h-12 w-48" />
          <Skeleton className="h-48 rounded-2xl" />
          <Skeleton className="h-64 rounded-2xl" />
        </div>
      </div>
    );
  }

  const userModule: ModuleId = (user?.organizationType as ModuleId) || "hospital";
  const totalLevels = getVisibleLevelsForModule(userModule).length;
  const topThree = leaderboard?.slice(0, 3) || [];
  const rest = leaderboard?.slice(3) || [];
  const myRank = leaderboard?.findIndex((e) => e.id === user?.id);
  const myEntry = myRank !== undefined && myRank >= 0 ? leaderboard?.[myRank] : null;

  const periodLabel = period === "all" ? "All Time" : period === "monthly" ? "This Month" : period === "weekly" ? "This Week" : "Today";

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
          <div className="flex-1 min-w-0">
            <h1 className="font-bold text-base">Leaderboard</h1>
            <p className="text-xs text-muted-foreground">See how you compare with your team</p>
          </div>
        </div>
        {/* Period tabs */}
        <div className="max-w-2xl mx-auto px-4 pb-3">
          <div className="flex gap-1.5 bg-muted/40 rounded-xl p-1">
            {PERIODS.map((p) => (
              <button
                key={p.value}
                onClick={() => setPeriod(p.value)}
                data-testid={`tab-period-${p.value}`}
                className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-bold transition-all ${
                  period === p.value
                    ? "bg-white dark:bg-card shadow text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {p.icon}
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 pt-6 flex flex-col gap-6">
        {myEntry && myRank !== undefined && (
          <motion.div
            className="rounded-2xl bg-primary/5 border border-primary/20 p-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            key={period}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-black text-sm">
                    #{myRank + 1}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-sm">Your Ranking - {periodLabel}</p>
                  <p className="text-xs text-muted-foreground">
                    {myEntry.totalXp} XP · {myEntry.levelsCompleted}/{totalLevels} levels · {myEntry.accuracy}% accuracy
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Flame size={16} className="text-chart-5" />
                <span className="font-bold text-sm">{myEntry.currentStreak}</span>
              </div>
            </div>
          </motion.div>
        )}

        {topThree.length > 0 && (
          <div className="flex items-end justify-center gap-3 pt-4 pb-2">
            {topThree.length > 1 && (
              <motion.div
                className="flex flex-col items-center gap-2 w-24"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                key={`2nd-${period}`}
              >
                <div className="w-16 h-16 rounded-full bg-gray-300/20 border-2 border-gray-400 flex items-center justify-center">
                  <span className="text-xl font-black">{initials(topThree[1])}</span>
                </div>
                <Medal size={20} className="text-gray-400" />
                <p className="text-xs font-bold truncate w-full text-center" data-testid="text-rank-2-name">{displayName(topThree[1])}</p>
                <p className="text-xs text-muted-foreground font-medium">{topThree[1].totalXp} XP</p>
              </motion.div>
            )}

            <motion.div
              className="flex flex-col items-center gap-2 w-28 -mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              key={`1st-${period}`}
            >
              <Crown size={24} className="text-orange-400" />
              <div className="w-20 h-20 rounded-full bg-orange-400/20 border-2 border-orange-400 flex items-center justify-center">
                <span className="text-2xl font-black">{initials(topThree[0])}</span>
              </div>
              <p className="text-sm font-black truncate w-full text-center" data-testid="text-rank-1-name">{displayName(topThree[0])}</p>
              <p className="text-xs text-primary font-bold">{topThree[0].totalXp} XP</p>
            </motion.div>

            {topThree.length > 2 && (
              <motion.div
                className="flex flex-col items-center gap-2 w-24"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                key={`3rd-${period}`}
              >
                <div className="w-16 h-16 rounded-full bg-orange-500/20 border-2 border-orange-500 flex items-center justify-center">
                  <span className="text-xl font-black">{initials(topThree[2])}</span>
                </div>
                <Medal size={20} className="text-orange-600" />
                <p className="text-xs font-bold truncate w-full text-center" data-testid="text-rank-3-name">{displayName(topThree[2])}</p>
                <p className="text-xs text-muted-foreground font-medium">{topThree[2].totalXp} XP</p>
              </motion.div>
            )}
          </div>
        )}

        <div className="rounded-2xl bg-card border border-card-border overflow-hidden">
          <div className="p-4 border-b border-card-border flex items-center justify-between">
            <h3 className="font-bold text-sm flex items-center gap-2">
              <Trophy size={16} className="text-primary" />
              All Players
            </h3>
            <span className="text-xs text-muted-foreground font-semibold">{periodLabel}</span>
          </div>
          <div className="divide-y divide-card-border/50">
            {leaderboard?.map((entry, i) => {
              const isMe = entry.id === user?.id;
              return (
                <motion.div
                  key={entry.id}
                  className={`flex items-center gap-3 px-4 py-3 ${isMe ? "bg-primary/5" : ""}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.15 }}
                  data-testid={`row-leaderboard-${entry.id}`}
                >
                  <div className="w-8 text-center flex-shrink-0">
                    {i === 0 ? (
                      <Crown size={18} className="text-orange-400 mx-auto" />
                    ) : i === 1 ? (
                      <Medal size={18} className="text-gray-400 mx-auto" />
                    ) : i === 2 ? (
                      <Medal size={18} className="text-orange-600 mx-auto" />
                    ) : (
                      <span className="font-black text-sm text-muted-foreground">{i + 1}</span>
                    )}
                  </div>

                  <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${isMe ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"}`}>
                    <span className="text-xs font-bold">{initials(entry)}</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className={`text-sm font-bold truncate ${isMe ? "text-primary" : ""}`}>
                        {displayName(entry)}
                        {isMe && <span className="text-xs font-normal text-muted-foreground ml-1">(you)</span>}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{entry.levelsCompleted}/{totalLevels} levels</span>
                      <span>·</span>
                      <span>{entry.questionsAnswered} Qs</span>
                      <span>·</span>
                      <span className={entry.accuracy >= 80 ? "text-chart-1 font-bold" : entry.accuracy >= 50 ? "text-chart-4 font-bold" : "text-destructive font-bold"}>
                        {entry.accuracy}%
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-0.5 flex-shrink-0">
                    <div className="flex items-center gap-1">
                      <Zap size={14} className="text-chart-4" fill="currentColor" />
                      <span className="text-sm font-black">{entry.totalXp}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Flame size={12} className="text-chart-5" />
                      <span className="text-xs text-muted-foreground">{entry.currentStreak}d</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {(!leaderboard || leaderboard.length === 0) && (
              <div className="p-8 text-center text-muted-foreground">
                <Trophy size={32} className="mx-auto mb-3 opacity-30" />
                <p className="font-medium">No activity yet for {periodLabel.toLowerCase()}</p>
                <p className="text-xs mt-1">Complete a quiz to appear on the leaderboard!</p>
              </div>
            )}
          </div>
        </div>

        {leaderboard && leaderboard.length > 0 && (
          <motion.div
            className="rounded-2xl bg-card border border-card-border p-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h3 className="font-bold text-sm mb-3 flex items-center gap-2">
              <TrendingUp size={16} className="text-primary" />
              Team Stats - {periodLabel}
            </h3>
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center">
                <p className="text-xl font-black" data-testid="text-team-total-players">{leaderboard.length}</p>
                <p className="text-xs text-muted-foreground">Players</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-black" data-testid="text-team-avg-accuracy">
                  {(() => {
                    const active = leaderboard.filter(e => e.questionsAnswered > 0);
                    return active.length > 0
                      ? Math.round(active.reduce((s, e) => s + e.accuracy, 0) / active.length)
                      : 0;
                  })()}%
                </p>
                <p className="text-xs text-muted-foreground">Avg Accuracy</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-black" data-testid="text-team-total-xp">
                  {leaderboard.reduce((s, e) => s + e.totalXp, 0)}
                </p>
                <p className="text-xs text-muted-foreground">Total XP</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
