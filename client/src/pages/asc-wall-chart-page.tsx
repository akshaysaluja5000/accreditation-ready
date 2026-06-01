import { useState } from "react";
import { useLocation } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  ArrowLeft, CheckCircle2, AlertTriangle, XCircle, HelpCircle,
  Calendar, User, RefreshCw, ClipboardCheck, Pin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, queryClient } from "@/lib/queryClient";

type PostingStatus = "current" | "expiring" | "expired" | "missing";

interface PostingItem {
  id: number;
  itemName: string;
  standardCode: string;
  frequency: string;
}

interface PostingTask {
  id: number;
  status: string;
  dueDate: string | null;
  assignedTo: string | null;
}

interface WallChartEntry {
  item: PostingItem;
  task: PostingTask | null;
}

const STATUS_CONFIG: Record<PostingStatus, {
  label: string;
  icon: React.ElementType;
  badgeCls: string;
  iconCls: string;
  bgCls: string;
}> = {
  current:  { label: "Posted and Current",   icon: CheckCircle2,  badgeCls: "bg-emerald-100 text-emerald-800 border-emerald-200", iconCls: "text-emerald-500", bgCls: "bg-emerald-50" },
  expiring: { label: "Posted but Expiring",  icon: AlertTriangle, badgeCls: "bg-amber-100 text-amber-800 border-amber-200",    iconCls: "text-amber-500",   bgCls: "bg-amber-50" },
  expired:  { label: "Expired",              icon: XCircle,       badgeCls: "bg-red-100 text-red-800 border-red-200",          iconCls: "text-red-500",     bgCls: "bg-red-50" },
  missing:  { label: "Missing",              icon: HelpCircle,    badgeCls: "bg-slate-100 text-slate-600 border-slate-200",    iconCls: "text-slate-400",   bgCls: "bg-slate-50" },
};

function getStatus(task: PostingTask | null, today: Date): PostingStatus {
  if (!task || task.status !== "completed") return "missing";
  if (!task.dueDate) return "current";
  const due = new Date(task.dueDate + "T00:00:00");
  if (due < today) return "expired";
  if (due <= new Date(today.getTime() + 30 * 86400000)) return "expiring";
  return "current";
}

function formatDate(dateStr: string | null | undefined): string {
  if (!dateStr) return "Not scheduled";
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function getLastVerified(task: PostingTask | null): string {
  if (!task || task.status !== "completed" || !task.dueDate) return "Not on file";
  const due = new Date(task.dueDate + "T00:00:00");
  due.setFullYear(due.getFullYear() - 1);
  return due.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function AscWallChartPage() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [verifyItem, setVerifyItem] = useState<WallChartEntry | null>(null);
  const [dueDate, setDueDate] = useState(() => {
    const d = new Date();
    d.setFullYear(d.getFullYear() + 1);
    return d.toISOString().slice(0, 10);
  });
  const [assignedTo, setAssignedTo] = useState("");

  const { data = [], isLoading } = useQuery<WallChartEntry[]>({
    queryKey: ["/api/compliance/wall-chart"],
  });

  const today = new Date(); today.setHours(0, 0, 0, 0);

  const verifyMutation = useMutation({
    mutationFn: (itemId: number) =>
      apiRequest("POST", "/api/compliance/wall-chart/mark", {
        itemId,
        assignedTo: assignedTo.trim() || "Compliance Officer",
        dueDate,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/compliance/wall-chart"] });
      setVerifyItem(null);
      toast({ title: "Posting verified" });
    },
    onError: () => toast({ title: "Update failed", variant: "destructive" }),
  });

  const counts = {
    current:  data.filter(e => getStatus(e.task, today) === "current").length,
    expiring: data.filter(e => getStatus(e.task, today) === "expiring").length,
    expired:  data.filter(e => getStatus(e.task, today) === "expired").length,
    missing:  data.filter(e => getStatus(e.task, today) === "missing").length,
  };

  return (
    <div className="min-h-screen bg-background pb-28">
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-5">

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => setLocation("/")}
            data-testid="btn-back-wall-chart" className="gap-1.5">
            <ArrowLeft className="w-4 h-4" />Back
          </Button>
          <div className="w-px h-5 bg-border" />
          <div className="flex items-center gap-2">
            <Pin className="w-5 h-5 text-primary" />
            <div>
              <h1 className="text-xl font-bold leading-tight">Wall Chart Tracker</h1>
              <p className="text-xs text-muted-foreground">AAAHC required postings for ASC accreditation</p>
            </div>
          </div>
        </div>

        {!isLoading && (
          <div className="grid grid-cols-4 gap-2" data-testid="section-wall-chart-summary">
            {[
              { label: "Current",  val: counts.current,  bg: "bg-emerald-50 border-emerald-200", num: "text-emerald-700" },
              { label: "Expiring", val: counts.expiring, bg: "bg-amber-50 border-amber-200",    num: "text-amber-700"   },
              { label: "Expired",  val: counts.expired,  bg: "bg-red-50 border-red-200",        num: "text-red-700"     },
              { label: "Missing",  val: counts.missing,  bg: "bg-slate-50 border-slate-200",    num: "text-slate-600"   },
            ].map(({ label, val, bg, num }) => (
              <div key={label} className={`rounded-xl border p-3 text-center ${bg}`}>
                <div className={`text-2xl font-black ${num}`}>{val}</div>
                <div className={`text-[10px] font-semibold ${num} opacity-80`}>{label}</div>
              </div>
            ))}
          </div>
        )}

        {isLoading ? (
          <div className="flex items-center justify-center h-48">
            <RefreshCw className="w-7 h-7 animate-spin text-muted-foreground" />
          </div>
        ) : data.length === 0 ? (
          <div className="rounded-2xl border bg-card p-12 text-center">
            <p className="text-sm text-muted-foreground">No posting requirements found. Contact your administrator.</p>
          </div>
        ) : (
          <div className="space-y-2" data-testid="list-wall-chart-postings">
            {data.map(({ item, task }) => {
              const status = getStatus(task, today);
              const cfg = STATUS_CONFIG[status];
              const StatusIcon = cfg.icon;
              const isActionable = status !== "current";
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl border bg-card p-4"
                  data-testid={`card-posting-${item.id}`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${cfg.bgCls}`}>
                      <StatusIcon className={cfg.iconCls} size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 flex-wrap">
                        <p className="font-semibold text-sm text-foreground leading-snug">{item.itemName}</p>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border shrink-0 ${cfg.badgeCls}`}>
                          {cfg.label}
                        </span>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar size={11} />
                          Last verified: <span className="font-medium text-foreground ml-0.5">{getLastVerified(task)}</span>
                        </span>
                        <span className={`flex items-center gap-1 ${status === "expired" ? "text-red-600 font-semibold" : ""}`}>
                          <Calendar size={11} />
                          Next due: <span className="font-medium ml-0.5">{formatDate(task?.dueDate)}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <User size={11} />
                          Owner: <span className="font-medium text-foreground ml-0.5">{task?.assignedTo ?? "Unassigned"}</span>
                        </span>
                      </div>
                      <p className="text-[10px] text-muted-foreground mt-1.5 font-mono">{item.standardCode}</p>
                    </div>
                  </div>

                  <div className="mt-3 flex justify-end">
                    <Button
                      size="sm"
                      variant={isActionable ? "default" : "outline"}
                      onClick={() => {
                        setVerifyItem({ item, task });
                        setAssignedTo(task?.assignedTo ?? "");
                        const d = new Date();
                        d.setFullYear(d.getFullYear() + 1);
                        setDueDate(d.toISOString().slice(0, 10));
                      }}
                      data-testid={`btn-verify-${item.id}`}
                      className="text-xs gap-1.5"
                    >
                      <ClipboardCheck size={13} />
                      {isActionable ? "Mark as Posted" : "Update"}
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      <Dialog open={!!verifyItem} onOpenChange={open => { if (!open) setVerifyItem(null); }}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-base">
              <ClipboardCheck className="w-4 h-4" />
              {verifyItem?.task?.status === "completed" ? "Update Posting" : "Mark as Posted"}
            </DialogTitle>
          </DialogHeader>
          {verifyItem && (
            <div className="space-y-4 py-1">
              <p className="text-sm font-medium leading-snug">{verifyItem.item.itemName}</p>
              <div className="space-y-2">
                <Label>Next review due</Label>
                <Input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)}
                  data-testid="input-wall-chart-due-date" />
              </div>
              <div className="space-y-2">
                <Label>Responsible owner</Label>
                <Input
                  value={assignedTo}
                  onChange={e => setAssignedTo(e.target.value)}
                  placeholder="e.g. Compliance Officer, Jane Smith..."
                  data-testid="input-wall-chart-owner"
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setVerifyItem(null)}>Cancel</Button>
            <Button
              onClick={() => verifyItem && verifyMutation.mutate(verifyItem.item.id)}
              disabled={verifyMutation.isPending}
              data-testid="btn-confirm-verify"
              className="gap-1.5"
            >
              {verifyMutation.isPending
                ? <><RefreshCw className="w-3.5 h-3.5 animate-spin" />Saving...</>
                : <><CheckCircle2 className="w-3.5 h-3.5" />Confirm</>}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
