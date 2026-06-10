import { useState, useMemo } from "react";
import { useLocation } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, ClipboardList, Plus, RefreshCw, AlertCircle,
  CheckCircle2, Clock, Play, RotateCcw, Bot, User, Calendar,
  ChevronDown, ChevronRight, Search, ClipboardCheck, FileText, FolderOpen,
} from "lucide-react";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, queryClient } from "@/lib/queryClient";

interface ComplianceItem { id: number; itemName: string; standardCode: string; tier: number; category: string; frequency: string; }
interface Task {
  id: number; facilityId: number; itemId: number; assignedTo: string | null; dueDate: string | null;
  createdBy: string | null; createdByAgent: boolean; status: string;
  reminderSent: boolean; escalated: boolean;
  item: ComplianceItem | null;
}

type StatusFilter = "all" | "pending" | "in_progress" | "completed" | "overdue";

const STATUS_CONFIG: Record<string, { label: string; cls: string; icon: React.ElementType }> = {
  pending:     { label: "Pending",     cls: "bg-amber-100 text-amber-800 border-amber-200",   icon: Clock },
  in_progress: { label: "In Progress", cls: "bg-blue-100 text-blue-800 border-blue-200",      icon: Play },
  completed:   { label: "Completed",   cls: "bg-emerald-100 text-emerald-800 border-emerald-200", icon: CheckCircle2 },
};

const TIER_LABEL: Record<number, string> = { 1: "LOG", 2: "VAULT", 3: "3RD PARTY", 4: "VAULT" };

function TaskCard({ task, onStatusChange }: { task: Task; onStatusChange: (id: number, s: string) => void }) {
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const isOverdue = task.status !== "completed" && task.dueDate && new Date(task.dueDate + "T00:00:00") < today;
  const daysOverdue = isOverdue
    ? Math.ceil((today.getTime() - new Date(task.dueDate! + "T00:00:00").getTime()) / 86400000) : 0;
  const dueLabel = task.dueDate
    ? new Date(task.dueDate + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    : "No due date";

  const cfg = STATUS_CONFIG[task.status] ?? STATUS_CONFIG.pending;
  const StatusIcon = cfg.icon;

  return (
    <motion.div layout initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
      className={`rounded-2xl border bg-card p-4 space-y-3 ${isOverdue ? "border-red-200" : ""}`}
      data-testid={`card-task-${task.id}`}>
      <div className="flex items-start gap-3">
        <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${isOverdue ? "bg-red-100" : "bg-muted"}`}>
          <StatusIcon className={`w-4 h-4 ${isOverdue ? "text-red-600" : "text-muted-foreground"}`} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm text-foreground leading-snug">
            {task.item?.itemName ?? `Item #${task.itemId}`}
          </p>
          <div className="flex items-center gap-1.5 mt-1 flex-wrap">
            {task.item && (
              <>
                <Badge variant="outline" className="text-[10px] px-1.5 py-0">{task.item.standardCode}</Badge>
                <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                  {TIER_LABEL[task.item.tier] ?? "DOC"}
                </span>
              </>
            )}
            <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full border ${cfg.cls}`}>
              {cfg.label}
            </span>
            {isOverdue && (
              <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-red-100 text-red-700">
                {daysOverdue}d overdue
              </span>
            )}
            {task.escalated && (
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-red-600 text-white">Escalated</span>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 text-xs text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <User className="w-3 h-3" />
          <span className="truncate">{task.assignedTo ?? "Unassigned"}</span>
        </div>
        <div className={`flex items-center gap-1.5 ${isOverdue ? "text-red-600 font-semibold" : ""}`}>
          <Calendar className="w-3 h-3" />
          <span>{dueLabel}</span>
        </div>
        {task.createdByAgent && (
          <div className="flex items-center gap-1.5 col-span-2">
            <Bot className="w-3 h-3" />
            <span>Created by agent · {task.createdBy}</span>
          </div>
        )}
      </div>

      {task.status !== "completed" && (
        <div className="flex gap-2 pt-1">
          {task.status === "pending" && (
            <Button size="sm" variant="outline" onClick={() => onStatusChange(task.id, "in_progress")}
              data-testid={`btn-start-task-${task.id}`} className="flex-1 text-xs gap-1">
              <Play className="w-3 h-3" />Start
            </Button>
          )}
          {task.status === "in_progress" && (
            <Button size="sm" variant="outline" onClick={() => onStatusChange(task.id, "pending")}
              data-testid={`btn-reopen-task-${task.id}`} className="flex-1 text-xs gap-1">
              <RotateCcw className="w-3 h-3" />Reopen
            </Button>
          )}
          <Button size="sm" onClick={() => onStatusChange(task.id, "completed")}
            data-testid={`btn-complete-task-${task.id}`}
            className="flex-1 text-xs gap-1 bg-emerald-600 hover:bg-emerald-700 text-white">
            <CheckCircle2 className="w-3 h-3" />Complete
          </Button>
        </div>
      )}
      {task.status === "completed" && (
        <Button size="sm" variant="ghost" onClick={() => onStatusChange(task.id, "pending")}
          data-testid={`btn-reopen-completed-task-${task.id}`} className="w-full text-xs gap-1 text-muted-foreground">
          <RotateCcw className="w-3 h-3" />Reopen
        </Button>
      )}
    </motion.div>
  );
}

export default function ComplianceTasksPage() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const { user } = useAuth();
  const isAsc = user?.organizationType === "asc";
  const [filter, setFilter] = useState<StatusFilter>("all");
  const [showCreate, setShowCreate] = useState(false);
  const [itemSearch, setItemSearch] = useState("");
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [assignedTo, setAssignedTo] = useState("");
  const [dueDate, setDueDate] = useState(() => {
    const d = new Date(); d.setDate(d.getDate() + 7);
    return d.toISOString().slice(0, 10);
  });
  const [showItemPicker, setShowItemPicker] = useState(false);

  const { data: tasks = [], isLoading } = useQuery<Task[]>({ queryKey: ["/api/compliance/tasks"] });
  const itemsQueryKey = isAsc ? "/api/compliance/facility-logs" : "/api/compliance/items";
  const { data: complianceItems = [] } = useQuery<ComplianceItem[]>({
    queryKey: [itemsQueryKey],
    enabled: showCreate,
  });

  const today = new Date(); today.setHours(0, 0, 0, 0);
  const overdueIds = new Set(tasks.filter(t => t.status !== "completed" && t.dueDate && new Date(t.dueDate + "T00:00:00") < today).map(t => t.id));

  const counts = {
    all: tasks.length,
    pending: tasks.filter(t => t.status === "pending").length,
    in_progress: tasks.filter(t => t.status === "in_progress").length,
    completed: tasks.filter(t => t.status === "completed").length,
    overdue: overdueIds.size,
  };

  const visible = useMemo(() => {
    if (filter === "overdue") return tasks.filter(t => overdueIds.has(t.id));
    if (filter === "all") return tasks;
    return tasks.filter(t => t.status === filter);
  }, [tasks, filter, overdueIds]);

  const statusMutation = useMutation({
    mutationFn: ({ id, status }: { id: number; status: string }) =>
      apiRequest("PATCH", `/api/compliance/tasks/${id}/status`, { status }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/compliance/tasks"] });
    },
    onError: () => toast({ title: "Update failed", variant: "destructive" }),
  });

  const createMutation = useMutation({
    mutationFn: () => apiRequest("POST", "/api/compliance/tasks", {
      itemId: selectedItemId, assignedTo: assignedTo.trim() || undefined, dueDate,
    }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/compliance/tasks"] });
      setShowCreate(false);
      setSelectedItemId(null);
      setAssignedTo("");
      setItemSearch("");
      toast({ title: "Task Created" });
    },
    onError: () => toast({ title: "Create failed", variant: "destructive" }),
  });

  const filteredItems = complianceItems.filter(i =>
    itemSearch.length < 2 || i.itemName.toLowerCase().includes(itemSearch.toLowerCase()) || i.standardCode.toLowerCase().includes(itemSearch.toLowerCase())
  ).slice(0, 30);

  const selectedItem = complianceItems.find(i => i.id === selectedItemId);

  const TABS: { key: StatusFilter; label: string }[] = [
    { key: "all",        label: `All (${counts.all})` },
    { key: "overdue",    label: `Overdue (${counts.overdue})` },
    { key: "pending",    label: `Pending (${counts.pending})` },
    { key: "in_progress",label: `In Progress (${counts.in_progress})` },
    { key: "completed",  label: `Done (${counts.completed})` },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">

        {/* Header */}
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => setLocation("/leadership")}
              data-testid="btn-back-hub" className="gap-1.5">
              <ArrowLeft className="w-4 h-4" />Hub
            </Button>
            <div className="w-px h-5 bg-border" />
            <div className="flex items-center gap-2">
              <ClipboardList className="w-5 h-5 text-primary" />
              <h1 className="text-xl font-bold text-foreground">
                {isAsc ? "Facility Logs" : "Compliance Tasks"}
              </h1>
            </div>
          </div>
          <Button onClick={() => setShowCreate(true)} data-testid="btn-create-task"
            className="gap-2">
            <Plus className="w-4 h-4" />New Task
          </Button>
        </div>

        {/* ASC Reference Tools */}
        {isAsc && (
          <div className="space-y-2">
            <p className="text-[11px] font-black uppercase tracking-wider text-muted-foreground px-1">ASC Reference Tools</p>
            <div className="grid grid-cols-3 gap-2">
              <motion.button
                className="rounded-2xl border p-3 flex flex-col items-start gap-2 text-left bg-card hover:bg-muted/40 transition-colors"
                onClick={() => setLocation("/asc-wall-chart")}
                whileTap={{ scale: 0.98 }}
                data-testid="btn-asc-wall-chart-shortcut"
              >
                <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 bg-primary/10">
                  <ClipboardCheck size={16} className="text-primary" />
                </div>
                <div>
                  <p className="font-bold text-xs leading-snug">Wall Chart</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">10 postings</p>
                </div>
              </motion.button>
              <motion.button
                className="rounded-2xl border p-3 flex flex-col items-start gap-2 text-left bg-card hover:bg-muted/40 transition-colors"
                onClick={() => setLocation("/asc-document-vault")}
                whileTap={{ scale: 0.98 }}
                data-testid="btn-asc-document-vault-shortcut"
              >
                <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 bg-violet-100">
                  <FolderOpen size={16} className="text-violet-600" />
                </div>
                <div>
                  <p className="font-bold text-xs leading-snug">Document Vault</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">68 policies</p>
                </div>
              </motion.button>
              <motion.button
                className="rounded-2xl border p-3 flex flex-col items-start gap-2 text-left bg-card hover:bg-muted/40 transition-colors"
                onClick={() => setLocation("/asc-checklist")}
                whileTap={{ scale: 0.98 }}
                data-testid="btn-asc-checklist-shortcut"
              >
                <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 bg-muted">
                  <FileText size={16} className="text-muted-foreground" />
                </div>
                <div>
                  <p className="font-bold text-xs leading-snug">2026 Checklist</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">6 volumes</p>
                </div>
              </motion.button>
            </div>
          </div>
        )}

        {/* Summary tiles */}
        {!isLoading && (
          <div className="grid grid-cols-4 gap-3">
            {[
              { label: "Overdue",     val: counts.overdue,     num: "text-red-600",    lbl: "text-red-500",     bg: "bg-red-50 border-red-200" },
              { label: "Pending",     val: counts.pending,     num: "text-amber-600",  lbl: "text-amber-600",   bg: "bg-amber-50 border-amber-200" },
              { label: "In Progress", val: counts.in_progress, num: "text-blue-600",   lbl: "text-blue-500",    bg: "bg-blue-50 border-blue-200" },
              { label: "Completed",   val: counts.completed,   num: "text-emerald-600",lbl: "text-emerald-600", bg: "bg-emerald-50 border-emerald-200" },
            ].map(({ label, val, num, lbl, bg }) => (
              <div key={label} className={`rounded-xl border p-3 text-center ${bg}`}>
                <div className={`text-2xl font-black ${num}`}>{val}</div>
                <div className={`text-xs font-medium ${lbl}`}>{label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Filter tabs */}
        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar border-b">
          {TABS.map(t => (
            <button key={t.key} onClick={() => setFilter(t.key)}
              data-testid={`tab-${t.key}`}
              className={`shrink-0 pb-2.5 text-xs font-semibold border-b-2 transition-colors px-1 ${filter === t.key ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`}>
              {t.label}
            </button>
          ))}
        </div>

        {/* Task list */}
        {isLoading ? (
          <div className="flex items-center justify-center h-48">
            <RefreshCw className="w-7 h-7 animate-spin text-muted-foreground" />
          </div>
        ) : visible.length === 0 ? (
          <div className="rounded-2xl border bg-card p-12 flex flex-col items-center gap-3 text-center">
            <CheckCircle2 className="w-10 h-10 text-muted-foreground/40" />
            <p className="text-sm font-medium text-muted-foreground">No tasks in this category</p>
          </div>
        ) : (
          <div className="space-y-3">
            <AnimatePresence>
              {visible.map(task => (
                <TaskCard key={task.id} task={task}
                  onStatusChange={(id, s) => statusMutation.mutate({ id, status: s })} />
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Create Task Dialog */}
      <Dialog open={showCreate} onOpenChange={setShowCreate}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Plus className="w-4 h-4" />New Compliance Task
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4 py-2">
            {/* Item picker */}
            <div className="space-y-2">
              <Label>Compliance Item <span className="text-destructive">*</span></Label>
              <div className="relative">
                <button type="button" onClick={() => setShowItemPicker(v => !v)}
                  data-testid="btn-pick-item"
                  className="w-full flex items-center justify-between px-3 py-2.5 border rounded-lg text-sm bg-background hover:bg-muted/30 transition-colors text-left">
                  <span className={selectedItem ? "text-foreground" : "text-muted-foreground"}>
                    {selectedItem ? `${selectedItem.standardCode}: ${selectedItem.itemName.slice(0, 45)}…` : "Search and select an item…"}
                  </span>
                  <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
                </button>
                <AnimatePresence>
                  {showItemPicker && (
                    <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                      className="absolute z-50 top-full mt-1 left-0 right-0 bg-card border rounded-xl shadow-lg overflow-hidden">
                      <div className="p-2 border-b">
                        <div className="relative">
                          <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                          <input value={itemSearch} onChange={e => setItemSearch(e.target.value)}
                            autoFocus placeholder="Search items or standard codes…"
                            data-testid="input-item-search"
                            className="w-full pl-8 pr-3 py-1.5 text-sm bg-background border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary" />
                        </div>
                      </div>
                      <div className="max-h-52 overflow-y-auto">
                        {filteredItems.map(item => (
                          <button key={item.id} type="button"
                            onClick={() => { setSelectedItemId(item.id); setShowItemPicker(false); setItemSearch(""); }}
                            data-testid={`item-option-${item.id}`}
                            className="w-full text-left px-3 py-2.5 hover:bg-muted/30 transition-colors border-b last:border-b-0">
                            <p className="text-xs font-semibold text-foreground">{item.itemName}</p>
                            <p className="text-[10px] text-muted-foreground mt-0.5">{item.standardCode} · {item.frequency} · {item.category}</p>
                          </button>
                        ))}
                        {filteredItems.length === 0 && (
                          <p className="text-xs text-muted-foreground text-center py-4">No items match your search.</p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Assign to */}
            <div className="space-y-2">
              <Label>Assign To</Label>
              <Input value={assignedTo} onChange={e => setAssignedTo(e.target.value)}
                placeholder="e.g. compliance-officer, Jane Smith…"
                data-testid="input-assigned-to" />
            </div>

            {/* Due date */}
            <div className="space-y-2">
              <Label>Due Date</Label>
              <Input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)}
                data-testid="input-due-date" />
            </div>

            {/* Reminder note */}
            <p className="text-xs text-muted-foreground flex items-center gap-1.5">
              <AlertCircle className="w-3 h-3" />
              A reminder will be sent automatically 3 days before the due date.
            </p>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowCreate(false)}>Cancel</Button>
            <Button onClick={() => createMutation.mutate()}
              disabled={!selectedItemId || createMutation.isPending}
              data-testid="btn-confirm-create-task"
              className="gap-1.5">
              {createMutation.isPending ? <><RefreshCw className="w-3.5 h-3.5 animate-spin" />Creating…</> : "Create Task"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
