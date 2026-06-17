import { useMemo, useState } from "react";
import { useLocation } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, ChevronDown, ChevronRight, FileText, Search, X,
  CheckCircle2, Clock, AlertTriangle, HelpCircle, RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ASC_CHECKLIST, FREQ_COLOR, type ChecklistItem, type ChecklistVolume } from "@/data/asc-checklist-data";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/lib/auth";

// ── Frequency windows (days) ─────────────────────────────────────────────────
const FREQ_DAYS: Record<string, number> = {
  "Daily": 1, "Weekly": 7, "Monthly": 30, "Quarterly": 90,
  "Semiannually": 180, "Annually": 365, "Biennially": 730,
  "Triennially": 1095, "Quadrennially": 1460, "Quinquennially": 1825,
};

// ── Stable item ID map: "volNum-secIdx-itemIdx" → sequential integer ─────────
function buildItemIdMap(): Map<string, number> {
  const map = new Map<string, number>();
  let id = 1;
  for (const vol of ASC_CHECKLIST) {
    for (let si = 0; si < vol.sections.length; si++) {
      for (let ii = 0; ii < vol.sections[si].items.length; ii++) {
        map.set(`${vol.number}-${si}-${ii}`, id++);
      }
    }
  }
  return map;
}
const ITEM_ID_MAP = buildItemIdMap();

// ── Completion log type (matches API response) ────────────────────────────────
interface CompletionLog {
  id: number;
  itemId: number;
  itemCode: string | null;
  itemName: string | null;
  completedBy: string | null;
  completedAt: string | null;
  frequency: string | null;
  volume: number | null;
}

// ── Status logic ─────────────────────────────────────────────────────────────
type ItemStatus = "current" | "due_soon" | "overdue" | "missing";

function getItemStatus(log: CompletionLog | undefined, frequency: string): ItemStatus {
  if (!log?.completedAt) return "missing";
  const freqDays = FREQ_DAYS[frequency] ?? 365;
  const daysSince = (Date.now() - new Date(log.completedAt).getTime()) / 86400000;
  const daysLeft = freqDays - daysSince;
  if (daysLeft < 0) return "overdue";
  if (daysLeft <= 30) return "due_soon";
  return "current";
}

function fmtDate(iso: string | null | undefined): string {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

const MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
const FREQ_MONTH_DOTS: Record<string, number[]> = {
  Monthly: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  Quarterly: [0, 3, 6, 9],
  Semiannually: [0, 6],
  Annually: [0],
  Weekly: [], Daily: [], Biennially: [], Triennially: [],
  Quadrennially: [], Quinquennially: [],
};

function freqDotColor(freq: string): string {
  if (freq === "Monthly") return "bg-amber-400";
  if (freq === "Quarterly") return "bg-blue-400";
  if (freq === "Semiannually") return "bg-violet-400";
  if (freq === "Annually") return "bg-emerald-400";
  if (freq === "Weekly" || freq === "Daily") return "bg-red-400";
  return "bg-slate-300";
}

const ANNUAL_FREQUENCIES = new Set(["Annually", "Biennially", "Triennially", "Quadrennially", "Quinquennially"]);

function MonthGrid({ frequency }: { frequency: string }) {
  // Annual+ frequencies don't subdivide by month — show a single "once per year" dot
  if (ANNUAL_FREQUENCIES.has(frequency)) {
    const dotColor = freqDotColor(frequency);
    return (
      <div className="flex items-center gap-2 mt-1.5">
        <div className={`w-3 h-3 rounded-full ${dotColor}`} />
        <span className="text-[10px] text-muted-foreground">Once per year</span>
      </div>
    );
  }
  const dots = FREQ_MONTH_DOTS[frequency] ?? [];
  const dotColor = freqDotColor(frequency);
  if (dots.length === 0) {
    return (
      <div className="flex items-center gap-1 mt-1.5">
        <span className="text-[10px] text-muted-foreground italic">See frequency</span>
      </div>
    );
  }
  return (
    <div className="flex gap-0.5 mt-1.5 flex-wrap">
      {MONTHS.map((m, i) => (
        <div key={m} className="flex flex-col items-center gap-0.5">
          <span className="text-[8px] text-muted-foreground font-medium">{m}</span>
          <div className={`w-3 h-3 rounded-full border ${dots.includes(i) ? `${dotColor} border-transparent` : "bg-muted border-border"}`} />
        </div>
      ))}
    </div>
  );
}

// ── Status indicator dot ──────────────────────────────────────────────────────
const STATUS_DOT: Record<ItemStatus, string> = {
  current:  "bg-emerald-500",
  due_soon: "bg-amber-400",
  overdue:  "bg-red-500",
  missing:  "bg-slate-300",
};

// ── Log Completion button ─────────────────────────────────────────────────────
interface LogBtnProps {
  item: ChecklistItem;
  itemId: number;
  volNumber: number;
  log: CompletionLog | undefined;
  status: ItemStatus;
  pendingId: number | null;
  onLog: (payload: { itemId: number; itemCode: string; itemName: string; volume: number; frequency: string }) => void;
}

function LogCompletionBtn({ item, itemId, volNumber, log, status, pendingId, onLog }: LogBtnProps) {
  const isPending = pendingId === itemId;
  const btnVariant = status === "current" ? "outline" : "default";
  const btnCls =
    status === "overdue" ? "bg-red-600 hover:bg-red-700 text-white border-red-600" :
    status === "due_soon" ? "bg-amber-500 hover:bg-amber-600 text-white border-amber-500" :
    status === "current" ? "" : "";

  return (
    <div className="mt-2 flex items-center justify-between gap-2 flex-wrap">
      {log?.completedAt ? (
        <span className={`text-[10px] flex items-center gap-1 ${
          status === "overdue" ? "text-red-600 font-semibold" :
          status === "due_soon" ? "text-amber-600 font-semibold" :
          "text-emerald-600"
        }`}>
          {status === "current" ? <CheckCircle2 size={10} /> :
           status === "due_soon" ? <Clock size={10} /> :
           status === "overdue" ? <AlertTriangle size={10} /> :
           <HelpCircle size={10} />}
          Last logged: {fmtDate(log.completedAt)}
          {log.completedBy ? ` · ${log.completedBy}` : ""}
        </span>
      ) : (
        <span className="text-[10px] text-muted-foreground flex items-center gap-1">
          <HelpCircle size={10} />Never logged
        </span>
      )}
      <Button
        size="sm"
        variant={btnVariant}
        className={`text-[11px] h-7 px-2.5 gap-1 shrink-0 ${btnCls}`}
        disabled={isPending}
        onClick={() => onLog({ itemId, itemCode: item.code, itemName: item.name, volume: volNumber, frequency: item.frequency })}
        data-testid={`btn-log-${itemId}`}
      >
        {isPending
          ? <><RefreshCw size={10} className="animate-spin" />Saving...</>
          : status === "current"
            ? <><CheckCircle2 size={10} />Re-log</>
            : <><CheckCircle2 size={10} />Log Completion</>}
      </Button>
    </div>
  );
}

// ── Volume accordion ──────────────────────────────────────────────────────────
interface AccordionProps {
  volume: ChecklistVolume;
  query: string;
  completionMap: Map<number, CompletionLog>;
  pendingId: number | null;
  onLog: LogBtnProps["onLog"];
}

function VolumeAccordion({ volume, query, completionMap, pendingId, onLog }: AccordionProps) {
  const [open, setOpen] = useState(false);
  const q = query.toLowerCase();

  const matchingSections = volume.sections.map((sec, si) => ({
    ...sec,
    items: sec.items
      .map((item, ii) => ({ item, ii }))
      .filter(({ item }) =>
        !q || item.name.toLowerCase().includes(q) ||
        item.code.toLowerCase().includes(q) ||
        item.frequency.toLowerCase().includes(q)
      ),
    si,
  })).filter(sec => sec.items.length > 0);

  const totalItems = matchingSections.reduce((n, s) => n + s.items.length, 0);
  const hasResults = matchingSections.length > 0;
  if (q && !hasResults) return null;

  // Count logged items in this volume
  const loggedCount = useMemo(() => {
    let count = 0;
    for (let si = 0; si < volume.sections.length; si++) {
      for (let ii = 0; ii < volume.sections[si].items.length; ii++) {
        const id = ITEM_ID_MAP.get(`${volume.number}-${si}-${ii}`);
        if (id && completionMap.has(id)) count++;
      }
    }
    return count;
  }, [volume, completionMap]);

  const totalVolItems = volume.sections.reduce((n, s) => n + s.items.length, 0);
  const forceOpen = !!q && hasResults;

  return (
    <div className="rounded-2xl border bg-card overflow-hidden" data-testid={`accordion-vol-${volume.number}`}>
      <button
        onClick={() => { if (!forceOpen) setOpen(v => !v); }}
        className="w-full flex items-center gap-3 p-4 text-left hover:bg-muted/40 transition-colors"
        data-testid={`btn-vol-${volume.number}`}
      >
        <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
          <span className="text-xs font-black text-primary">{volume.number}</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-sm leading-snug">Vol. {volume.number} — {volume.title}</p>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-[11px] text-muted-foreground">{totalItems} item{totalItems !== 1 ? "s" : ""}</span>
            {loggedCount > 0 && (
              <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded-full">
                {loggedCount}/{totalVolItems} logged
              </span>
            )}
          </div>
        </div>
        {forceOpen
          ? <ChevronDown size={16} className="text-muted-foreground shrink-0" />
          : open
            ? <ChevronDown size={16} className="text-muted-foreground shrink-0" />
            : <ChevronRight size={16} className="text-muted-foreground shrink-0" />}
      </button>

      <AnimatePresence initial={false}>
        {(open || forceOpen) && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="border-t border-border divide-y divide-border">
              {matchingSections.map(({ title, items, si }) => (
                <div key={title}>
                  <div className="px-4 py-2 bg-muted/30">
                    <span className="text-[10px] font-black uppercase tracking-wider text-primary">{title}</span>
                  </div>
                  {items.map(({ item, ii }) => {
                    const itemId = ITEM_ID_MAP.get(`${volume.number}-${si}-${ii}`) ?? 0;
                    const log = completionMap.get(itemId);
                    const status = getItemStatus(log, item.frequency);
                    const freqCls = FREQ_COLOR[item.frequency] ?? "bg-slate-100 text-slate-600 border-slate-200";
                    return (
                      <div
                        key={`${si}-${ii}`}
                        className="px-4 py-3 flex items-start gap-2.5"
                        data-testid={`row-checklist-${volume.number}-${si}-${ii}`}
                      >
                        <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${STATUS_DOT[status]}`} />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-foreground leading-snug">{item.name}</p>
                          <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                            <span className="text-[10px] font-mono text-muted-foreground bg-muted px-1.5 py-0.5 rounded border border-border">{item.code}</span>
                            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${freqCls}`}>{item.frequency}</span>
                          </div>
                          <MonthGrid frequency={item.frequency} />
                          <LogCompletionBtn
                            item={item}
                            itemId={itemId}
                            volNumber={volume.number}
                            log={log}
                            status={status}
                            pendingId={pendingId}
                            onLog={onLog}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function AscChecklistPage() {
  const [, setLocation] = useLocation();
  const [query, setQuery] = useState("");
  const [pendingId, setPendingId] = useState<number | null>(null);
  const { toast } = useToast();
  const { user } = useAuth();

  const totalItems = ASC_CHECKLIST.reduce(
    (n, v) => n + v.sections.reduce((m, s) => m + s.items.length, 0), 0
  );

  const { data: logsData = [] } = useQuery<CompletionLog[]>({
    queryKey: ["/api/compliance-checklist/logs"],
  });

  const completionMap = useMemo(() => {
    const map = new Map<number, CompletionLog>();
    for (const log of logsData) map.set(log.itemId, log);
    return map;
  }, [logsData]);

  const loggedCount = completionMap.size;

  const logMutation = useMutation({
    mutationFn: (payload: { itemId: number; itemCode: string; itemName: string; volume: number; frequency: string }) => {
      setPendingId(payload.itemId);
      return apiRequest("POST", `/api/compliance-checklist/${payload.itemId}/log-completion`, {
        completedBy: user?.username ?? "Compliance Officer",
        itemCode: payload.itemCode,
        itemName: payload.itemName,
        volume: payload.volume,
        frequency: payload.frequency,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/compliance-checklist/logs"] });
      setPendingId(null);
      toast({ title: "Completion logged", description: "Entry saved with timestamp." });
    },
    onError: () => {
      setPendingId(null);
      toast({ title: "Failed to save", variant: "destructive" });
    },
  });

  return (
    <div className="min-h-screen bg-background pb-28">
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-4">

        {/* Header */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => window.history.back()}
            data-testid="btn-back-checklist" className="gap-1.5">
            <ArrowLeft className="w-4 h-4" />Back
          </Button>
          <div className="w-px h-5 bg-border" />
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            <div>
              <h1 className="text-xl font-bold leading-tight">2026 ASC Compliance Checklist</h1>
              <p className="text-xs text-muted-foreground">
                {totalItems} items · {loggedCount} logged · 6 volumes · AAAHC standards
              </p>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        {loggedCount > 0 && (
          <div className="space-y-1">
            <div className="flex justify-between text-[10px] text-muted-foreground">
              <span>Completion progress</span>
              <span className="font-semibold text-foreground">{Math.round((loggedCount / totalItems) * 100)}%</span>
            </div>
            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-emerald-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(loggedCount / totalItems) * 100}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>
        )}

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search items, codes, or frequency..."
            className="pl-9 pr-9"
            data-testid="input-checklist-search"
          />
          {query && (
            <button onClick={() => setQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-2 text-[11px]">
          {[
            { label: "Monthly",        cls: "bg-amber-100 text-amber-700 border-amber-200" },
            { label: "Quarterly",      cls: "bg-blue-100 text-blue-700 border-blue-200" },
            { label: "Semiannually",   cls: "bg-violet-100 text-violet-700 border-violet-200" },
            { label: "Annually",       cls: "bg-emerald-100 text-emerald-700 border-emerald-200" },
            { label: "Weekly / Daily", cls: "bg-red-100 text-red-700 border-red-200" },
            { label: "Multi-year",     cls: "bg-slate-100 text-slate-600 border-slate-200" },
          ].map(({ label, cls }) => (
            <span key={label} className={`px-2 py-0.5 rounded-full border font-semibold ${cls}`}>{label}</span>
          ))}
        </div>

        {/* Status legend */}
        <div className="flex flex-wrap gap-3 text-[10px] text-muted-foreground">
          {[
            { dot: "bg-emerald-500", label: "Logged and current" },
            { dot: "bg-amber-400",   label: "Due soon (≤ 30 days)" },
            { dot: "bg-red-500",     label: "Overdue" },
            { dot: "bg-slate-300",   label: "Never logged" },
          ].map(({ dot, label }) => (
            <span key={label} className="flex items-center gap-1">
              <span className={`w-2 h-2 rounded-full ${dot}`} />
              {label}
            </span>
          ))}
        </div>

        {/* Volume accordions */}
        <div className="space-y-2">
          {ASC_CHECKLIST.map(volume => (
            <VolumeAccordion
              key={volume.number}
              volume={volume}
              query={query}
              completionMap={completionMap}
              pendingId={pendingId}
              onLog={payload => logMutation.mutate(payload)}
            />
          ))}
          {query && ASC_CHECKLIST.every(v =>
            v.sections.every(s =>
              s.items.every(i =>
                !i.name.toLowerCase().includes(query.toLowerCase()) &&
                !i.code.toLowerCase().includes(query.toLowerCase()) &&
                !i.frequency.toLowerCase().includes(query.toLowerCase())
              )
            )
          ) && (
            <div className="rounded-2xl border bg-card p-10 text-center">
              <p className="text-sm text-muted-foreground">No items match <span className="font-semibold">"{query}"</span></p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
