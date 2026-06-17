import { useMemo, useState, useRef } from "react";
import { useLocation } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, ChevronDown, ChevronRight, FileText, Search, X,
  CheckCircle2, Clock, AlertTriangle, HelpCircle, RefreshCw, Printer,
  Paperclip, Upload, Trash2, Download,
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

// ── Attachment types ──────────────────────────────────────────────────────────
type AttachmentMeta = {
  id: number;
  itemId: number;
  fileName: string;
  fileType: string;
  fileSize: number;
  uploadedAt: string | null;
  uploadedBy: string | null;
};

// ── Attachment panel ──────────────────────────────────────────────────────────
function AttachmentPanel({ itemId, onClose }: { itemId: number; onClose: () => void }) {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  const { data: attachments = [], isLoading } = useQuery<AttachmentMeta[]>({
    queryKey: ["/api/compliance-checklist", itemId, "attachments"],
    queryFn: () => fetch(`/api/compliance-checklist/${itemId}/attachments`, { credentials: "include" }).then(r => r.json()),
  });

  const deleteMut = useMutation({
    mutationFn: (id: number) => apiRequest("DELETE", `/api/compliance-checklist/attachments/${id}`),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["/api/compliance-checklist", itemId, "attachments"] }),
    onError: () => toast({ title: "Failed to delete", variant: "destructive" }),
  });

  const downloadAttachment = async (id: number, fileName: string, fileType: string) => {
    const resp = await fetch(`/api/compliance-checklist/attachments/${id}`, { credentials: "include" });
    if (!resp.ok) { toast({ title: "Download failed", variant: "destructive" }); return; }
    const data = await resp.json() as { fileData: string };
    const byteChars = atob(data.fileData);
    const byteArr = new Uint8Array(byteChars.length);
    for (let i = 0; i < byteChars.length; i++) byteArr[i] = byteChars.charCodeAt(i);
    const blob = new Blob([byteArr], { type: fileType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = fileName; a.click();
    URL.revokeObjectURL(url);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) {
      toast({ title: "File too large", description: "Maximum file size is 10 MB.", variant: "destructive" });
      return;
    }
    setUploading(true);
    const reader = new FileReader();
    reader.onload = async (ev) => {
      const raw = ev.target?.result as string;
      const base64 = raw.includes(",") ? raw.split(",")[1] : raw;
      try {
        await apiRequest("POST", `/api/compliance-checklist/${itemId}/attachments`, {
          fileName: file.name,
          fileType: file.type || "application/octet-stream",
          fileSize: file.size,
          fileData: base64,
        });
        queryClient.invalidateQueries({ queryKey: ["/api/compliance-checklist", itemId, "attachments"] });
        toast({ title: "Attached", description: file.name });
      } catch {
        toast({ title: "Upload failed", variant: "destructive" });
      } finally {
        setUploading(false);
        if (fileInputRef.current) fileInputRef.current.value = "";
      }
    };
    reader.readAsDataURL(file);
  };

  const fmtSize = (bytes: number) =>
    bytes < 1024 * 1024 ? `${(bytes / 1024).toFixed(0)} KB` : `${(bytes / (1024 * 1024)).toFixed(1)} MB`;

  return (
    <div className="mt-2 rounded-xl border border-dashed border-primary/40 bg-primary/5 p-3 space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-black uppercase tracking-wider text-primary flex items-center gap-1">
          <Paperclip size={10} />Evidence Attachments
        </span>
        <button onClick={onClose} className="text-muted-foreground hover:text-foreground p-0.5">
          <X size={12} />
        </button>
      </div>

      {isLoading ? (
        <p className="text-[10px] text-muted-foreground">Loading…</p>
      ) : attachments.length === 0 ? (
        <p className="text-[10px] text-muted-foreground italic">No attachments yet — upload evidence below</p>
      ) : (
        <div className="space-y-1">
          {attachments.map(a => (
            <div key={a.id} className="flex items-center gap-2 text-[10px] bg-background rounded-lg border px-2 py-1.5" data-testid={`attachment-row-${a.id}`}>
              <FileText size={10} className="text-primary shrink-0" />
              <span className="flex-1 min-w-0 truncate font-medium" title={a.fileName}>{a.fileName}</span>
              <span className="text-muted-foreground shrink-0">{fmtSize(a.fileSize)}</span>
              {a.uploadedBy && <span className="text-muted-foreground shrink-0 hidden sm:inline">· {a.uploadedBy}</span>}
              <button
                onClick={() => downloadAttachment(a.id, a.fileName, a.fileType)}
                className="text-primary hover:text-primary/80 p-0.5"
                title="Download"
                data-testid={`btn-download-attachment-${a.id}`}
              >
                <Download size={11} />
              </button>
              <button
                onClick={() => deleteMut.mutate(a.id)}
                disabled={deleteMut.isPending}
                className="text-red-400 hover:text-red-600 p-0.5"
                title="Delete"
                data-testid={`btn-delete-attachment-${a.id}`}
              >
                <Trash2 size={11} />
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="flex items-center gap-2 flex-wrap">
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          accept=".jpg,.jpeg,.png,.heic,.heif,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.csv"
          onChange={handleFileChange}
          data-testid={`file-input-${itemId}`}
        />
        <Button
          size="sm"
          variant="outline"
          className="h-6 text-[10px] px-2 gap-1 border-primary/40 text-primary hover:bg-primary/10"
          disabled={uploading}
          onClick={() => fileInputRef.current?.click()}
          data-testid={`btn-attach-${itemId}`}
        >
          {uploading
            ? <><RefreshCw size={10} className="animate-spin" />Uploading…</>
            : <><Upload size={10} />Attach file</>}
        </Button>
        <span className="text-[9px] text-muted-foreground">PDF · JPEG · HEIC · DOC · DOCX · XLS · PPT · max 10 MB</span>
      </div>
    </div>
  );
}

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
  const [attachOpenId, setAttachOpenId] = useState<number | null>(null);
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
                    const attachOpen = attachOpenId === itemId;
                    return (
                      <div
                        key={`${si}-${ii}`}
                        className="px-4 py-3 flex items-start gap-2.5"
                        data-testid={`row-checklist-${volume.number}-${si}-${ii}`}
                      >
                        <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${STATUS_DOT[status]}`} />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <p className="text-sm text-foreground leading-snug flex-1 min-w-0">{item.name}</p>
                            <button
                              onClick={() => setAttachOpenId(attachOpen ? null : itemId)}
                              className={`shrink-0 mt-0.5 p-1 rounded-lg transition-colors ${attachOpen ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-primary hover:bg-primary/10"}`}
                              title="Evidence attachments"
                              data-testid={`btn-attach-toggle-${itemId}`}
                            >
                              <Paperclip size={12} />
                            </button>
                          </div>
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
                          {attachOpen && (
                            <AttachmentPanel
                              itemId={itemId}
                              onClose={() => setAttachOpenId(null)}
                            />
                          )}
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

// ── Print / PDF export ────────────────────────────────────────────────────────
function generatePrintHtml(completionMap: Map<number, CompletionLog>, loggedCount: number, totalItems: number): string {
  const now = new Date();
  const dateStr = now.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  const pct = totalItems > 0 ? Math.round((loggedCount / totalItems) * 100) : 0;

  const statusLabel: Record<ItemStatus, string> = {
    current: "✓ Current",
    due_soon: "⚠ Due Soon",
    overdue: "✗ Overdue",
    missing: "— Never Logged",
  };
  const statusColor: Record<ItemStatus, string> = {
    current: "#16a34a",
    due_soon: "#d97706",
    overdue: "#dc2626",
    missing: "#9ca3af",
  };

  let rows = "";
  for (const vol of ASC_CHECKLIST) {
    rows += `<tr class="vol-header"><td colspan="6">Vol. ${vol.number} — ${vol.title}</td></tr>`;
    for (let si = 0; si < vol.sections.length; si++) {
      const sec = vol.sections[si];
      rows += `<tr class="sec-header"><td colspan="6">${sec.title}</td></tr>`;
      for (let ii = 0; ii < sec.items.length; ii++) {
        const item = sec.items[ii];
        const itemId = ITEM_ID_MAP.get(`${vol.number}-${si}-${ii}`) ?? 0;
        const log = completionMap.get(itemId);
        const status = getItemStatus(log, item.frequency);
        const lastLogged = log?.completedAt ? fmtDate(log.completedAt) : "Never";
        const loggedBy = log?.completedBy ?? "—";
        rows += `
          <tr>
            <td style="color:${statusColor[status]};white-space:nowrap;font-weight:600">${statusLabel[status]}</td>
            <td>${item.name}</td>
            <td style="white-space:nowrap;font-family:monospace;font-size:10px">${item.code}</td>
            <td style="white-space:nowrap">${item.frequency}</td>
            <td style="white-space:nowrap">${lastLogged}</td>
            <td style="white-space:nowrap">${loggedBy}</td>
          </tr>`;
      }
    }
  }

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>ASC Compliance Checklist — ${dateStr}</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: Arial, sans-serif; font-size: 11px; color: #111; padding: 20px; }
    h1 { font-size: 16px; font-weight: 700; margin-bottom: 2px; }
    .meta { font-size: 10px; color: #555; margin-bottom: 14px; }
    table { width: 100%; border-collapse: collapse; margin-top: 4px; }
    th { background: #1e3a5f; color: #fff; padding: 5px 7px; text-align: left; font-size: 10px; text-transform: uppercase; letter-spacing: 0.04em; }
    td { padding: 4px 7px; border-bottom: 1px solid #e5e7eb; vertical-align: top; font-size: 10px; }
    tr:nth-child(even) td { background: #f9fafb; }
    tr.vol-header td { background: #1e3a5f; color: #fff; font-weight: 700; font-size: 11px; padding: 6px 7px; border: none; }
    tr.sec-header td { background: #e8edf4; color: #1e3a5f; font-weight: 700; font-size: 9px; text-transform: uppercase; letter-spacing: 0.06em; padding: 3px 7px; border: none; }
    .summary { display: flex; gap: 20px; margin-bottom: 12px; }
    .stat { background: #f3f4f6; border-radius: 6px; padding: 6px 12px; }
    .stat-num { font-size: 18px; font-weight: 700; line-height: 1; }
    .stat-label { font-size: 9px; color: #6b7280; margin-top: 1px; }
    @media print { body { padding: 10px; } button { display: none; } }
  </style>
</head>
<body>
  <h1>2026 ASC Compliance Checklist</h1>
  <p class="meta">Generated: ${dateStr} · AAAHC Standards · ${totalItems} total items</p>
  <div class="summary">
    <div class="stat"><div class="stat-num">${loggedCount}</div><div class="stat-label">Logged</div></div>
    <div class="stat"><div class="stat-num">${totalItems - loggedCount}</div><div class="stat-label">Pending</div></div>
    <div class="stat"><div class="stat-num">${pct}%</div><div class="stat-label">Complete</div></div>
  </div>
  <table>
    <thead>
      <tr>
        <th>Status</th><th>Item Name</th><th>Code</th><th>Frequency</th><th>Last Logged</th><th>Logged By</th>
      </tr>
    </thead>
    <tbody>${rows}</tbody>
  </table>
  <script>window.onload = () => window.print();</script>
</body>
</html>`;
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

  const handlePrint = () => {
    const html = generatePrintHtml(completionMap, loggedCount, totalItems);
    const w = window.open("", "_blank");
    if (!w) return;
    w.document.write(html);
    w.document.close();
  };

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
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <FileText className="w-5 h-5 text-primary shrink-0" />
            <div className="flex-1 min-w-0">
              <h1 className="text-xl font-bold leading-tight">2026 ASC Compliance Checklist</h1>
              <p className="text-xs text-muted-foreground">
                {totalItems} items · {loggedCount} logged · 6 volumes · AAAHC standards
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handlePrint}
            className="gap-1.5 shrink-0"
            data-testid="btn-print-checklist"
          >
            <Printer className="w-4 h-4" />
            <span className="hidden sm:inline">Print / PDF</span>
          </Button>
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
