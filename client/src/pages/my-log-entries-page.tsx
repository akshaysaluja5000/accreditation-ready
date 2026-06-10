import { useState } from "react";
import { useLocation } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, CheckCircle2, AlertTriangle, Clock, ClipboardList,
  ChevronDown, ChevronUp, Flame, CalendarClock, RefreshCw, PartyPopper,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, queryClient } from "@/lib/queryClient";

interface LogItem {
  id: number;
  itemName: string;
  standardCode: string;
  frequency: string;
  category: string;
  status: "overdue" | "due_today" | "upcoming" | "current";
  nextDue: string | null;
  lastCompleted: string | null;
  daysOverdue: number;
  daysUntilDue: number;
}

const FREQ_COLOR: Record<string, string> = {
  Daily: "bg-rose-100 text-rose-700",
  Weekly: "bg-orange-100 text-orange-700",
  Monthly: "bg-amber-100 text-amber-700",
  Quarterly: "bg-blue-100 text-blue-700",
  Annually: "bg-violet-100 text-violet-700",
};

const STATUS_CONFIG = {
  overdue:   { label: (d: number) => `${d} day${d !== 1 ? "s" : ""} overdue`, cls: "text-red-600 bg-red-50 border-red-200",   icon: AlertTriangle },
  due_today: { label: () => "Due today",                                        cls: "text-amber-600 bg-amber-50 border-amber-200", icon: Flame },
  upcoming:  { label: (d: number) => `Due in ${d} day${d !== 1 ? "s" : ""}`,   cls: "text-blue-600 bg-blue-50 border-blue-200",   icon: CalendarClock },
  current:   { label: () => "Up to date",                                       cls: "text-emerald-600 bg-emerald-50 border-emerald-200", icon: CheckCircle2 },
};

function LogEntryCard({ item }: { item: LogItem }) {
  const { toast } = useToast();
  const [expanded, setExpanded] = useState(false);
  const [notes, setNotes] = useState("");
  const [done, setDone] = useState(false);

  const logMutation = useMutation({
    mutationFn: () => apiRequest("POST", "/api/compliance/log", { itemId: item.id, notes: notes.trim() || undefined }),
    onSuccess: () => {
      setDone(true);
      setExpanded(false);
      setNotes("");
      queryClient.invalidateQueries({ queryKey: ["/api/compliance/my-log-items"] });
      queryClient.invalidateQueries({ queryKey: ["/api/compliance/my-training-alerts"] });
    },
    onError: () => toast({ title: "Error", description: "Failed to save log entry.", variant: "destructive" }),
  });

  const cfg = STATUS_CONFIG[item.status];
  const StatusIcon = cfg.icon;
  const statusLabel = item.status === "overdue" ? cfg.label(item.daysOverdue)
    : item.status === "upcoming" ? cfg.label(item.daysUntilDue) : cfg.label(0);

  if (done) {
    return (
      <motion.div initial={{ scale: 0.97 }} animate={{ scale: 1 }}
        className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center shrink-0">
          <CheckCircle2 className="w-5 h-5 text-white" />
        </div>
        <div>
          <p className="font-semibold text-emerald-800 text-sm">{item.itemName}</p>
          <p className="text-xs text-emerald-600">Logged successfully</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div layout className="rounded-2xl border bg-card overflow-hidden shadow-sm"
      data-testid={`card-log-item-${item.id}`}>
      <div className="p-4">
        <div className="flex items-start gap-3">
          <div className={`mt-0.5 w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${item.status === "overdue" ? "bg-red-100" : item.status === "due_today" ? "bg-amber-100" : "bg-muted"}`}>
            <StatusIcon className={`w-4 h-4 ${item.status === "overdue" ? "text-red-600" : item.status === "due_today" ? "text-amber-600" : "text-muted-foreground"}`} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-sm text-foreground leading-snug">{item.itemName}</p>
            <div className="flex items-center gap-1.5 mt-1 flex-wrap">
              <Badge variant="outline" className="text-[10px] px-1.5 py-0">{item.standardCode}</Badge>
              <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${FREQ_COLOR[item.frequency] ?? "bg-muted text-muted-foreground"}`}>
                {item.frequency}
              </span>
              <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full border ${cfg.cls}`}>
                {statusLabel}
              </span>
            </div>
            {item.lastCompleted && (
              <p className="text-xs text-muted-foreground mt-1">
                Last logged: {new Date(item.lastCompleted).toLocaleDateString()}
              </p>
            )}
          </div>
          {item.status !== "current" && (
            <button onClick={() => setExpanded(v => !v)}
              data-testid={`btn-expand-log-${item.id}`}
              className="shrink-0 text-muted-foreground hover:text-foreground transition-colors">
              {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          )}
        </div>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <div className="px-4 pb-4 pt-0 space-y-3 border-t">
              <Textarea
                value={notes}
                onChange={e => setNotes(e.target.value)}
                placeholder="Add an optional note (observation, initials, etc.)…"
                data-testid={`input-log-notes-${item.id}`}
                className="resize-none text-sm mt-3"
                rows={2}
              />
              <Button onClick={() => logMutation.mutate()} disabled={logMutation.isPending}
                data-testid={`btn-submit-log-${item.id}`}
                className="w-full gap-2 bg-emerald-600 hover:bg-emerald-700 text-white">
                {logMutation.isPending
                  ? <><RefreshCw className="w-3.5 h-3.5 animate-spin" />Saving…</>
                  : <><CheckCircle2 className="w-3.5 h-3.5" />Mark Complete</>}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

type FilterType = "all" | "overdue" | "due_today" | "upcoming" | "current";

export default function MyLogEntriesPage() {
  const [, setLocation] = useLocation();
  const [filter, setFilter] = useState<FilterType>("all");

  const { data: items = [], isLoading } = useQuery<LogItem[]>({
    queryKey: ["/api/compliance/my-log-items"],
  });

  const pending = items.filter(i => i.status !== "current");
  const overdue = items.filter(i => i.status === "overdue");
  const dueToday = items.filter(i => i.status === "due_today");
  const upcoming = items.filter(i => i.status === "upcoming");

  const visible = filter === "all" ? items : items.filter(i => i.status === filter);

  const FILTERS: { key: FilterType; label: string; count?: number; cls: string }[] = [
    { key: "all",      label: "All",        count: items.length,    cls: "border-border text-foreground" },
    { key: "overdue",  label: "Overdue",    count: overdue.length,  cls: "border-red-300 text-red-700 data-[active=true]:bg-red-50" },
    { key: "due_today",label: "Due Today",  count: dueToday.length, cls: "border-amber-300 text-amber-700 data-[active=true]:bg-amber-50" },
    { key: "upcoming", label: "Upcoming",   count: upcoming.length, cls: "border-blue-300 text-blue-700 data-[active=true]:bg-blue-50" },
    { key: "current",  label: "Up to Date", count: items.length - pending.length, cls: "border-emerald-300 text-emerald-700 data-[active=true]:bg-emerald-50" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">

        {/* Header */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => setLocation("/")}
            data-testid="btn-back-dashboard" className="gap-1.5">
            <ArrowLeft className="w-4 h-4" />Home
          </Button>
          <div className="w-px h-5 bg-border" />
          <div className="flex items-center gap-2">
            <ClipboardList className="w-5 h-5 text-primary" />
            <h1 className="text-xl font-bold text-foreground">My Log Entries</h1>
          </div>
        </div>

        {/* Summary row */}
        {!isLoading && (
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Overdue",    value: overdue.length,  cls: "text-red-600",   bg: "bg-red-50 border-red-200" },
              { label: "Due Today",  value: dueToday.length, cls: "text-amber-600", bg: "bg-amber-50 border-amber-200" },
              { label: "Upcoming",   value: upcoming.length, cls: "text-blue-600",  bg: "bg-blue-50 border-blue-200" },
            ].map(({ label, value, cls, bg }) => (
              <div key={label} className={`rounded-xl border p-3 text-center ${bg}`}>
                <div className={`text-2xl font-black ${cls}`}>{value}</div>
                <div className="text-xs text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Filter tabs */}
        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
          {FILTERS.map(f => (
            <button key={f.key} onClick={() => setFilter(f.key)}
              data-active={filter === f.key}
              className={`shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${f.cls} ${filter === f.key ? "bg-muted" : "bg-background hover:bg-muted/40"}`}>
              {f.label} {f.count !== undefined && <span className="ml-1 opacity-60">{f.count}</span>}
            </button>
          ))}
        </div>

        {/* Content */}
        {isLoading ? (
          <div className="flex items-center justify-center h-48">
            <RefreshCw className="w-7 h-7 animate-spin text-muted-foreground" />
          </div>
        ) : visible.length === 0 && filter === "all" ? (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            className="bg-emerald-50 border border-emerald-200 rounded-2xl p-10 flex flex-col items-center gap-3 text-center">
            <PartyPopper className="w-10 h-10 text-emerald-500" />
            <p className="font-bold text-emerald-800 text-lg">All caught up!</p>
            <p className="text-sm text-emerald-600 max-w-xs">No compliance log entries are due. Check back when your next scheduled item comes up.</p>
          </motion.div>
        ) : visible.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground text-sm">No items in this category.</div>
        ) : (
          <div className="space-y-3">
            <AnimatePresence>
              {visible.map(item => (
                <motion.div key={item.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} layout>
                  <LogEntryCard item={item} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}
