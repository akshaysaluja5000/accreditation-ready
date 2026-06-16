import { useMemo, useState } from "react";
import { useLocation } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, FolderOpen, Search, ChevronDown, ChevronRight,
  Upload, CheckCircle2, AlertTriangle, XCircle, HelpCircle, RefreshCw,
  Calendar, User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/lib/auth";
import { apiRequest, queryClient } from "@/lib/queryClient";

// ── Types ─────────────────────────────────────────────────────────────────────
interface VaultItem {
  id: number;
  itemName: string;
  standardCode: string;
  tier: number;
  category: string;
  frequency: string;
  ownerRole: string;
}

interface VaultDoc {
  id: number;
  documentName: string;
  uploadedBy: string;
  uploadedAt: string;
  expirationDate: string | null;
  effectiveDate: string | null;
}

interface VaultEntry {
  item: VaultItem;
  doc: VaultDoc | null;
}

// ── Status logic ──────────────────────────────────────────────────────────────
type DocStatus = "missing" | "current" | "expiring" | "expired";

function getDocStatus(doc: VaultDoc | null, today: Date): DocStatus {
  if (!doc) return "missing";
  if (!doc.expirationDate) return "current";
  const exp = new Date(doc.expirationDate + "T00:00:00");
  if (exp < today) return "expired";
  if (exp <= new Date(today.getTime() + 30 * 86400000)) return "expiring";
  return "current";
}

const STATUS_CONFIG: Record<DocStatus, {
  label: string;
  icon: React.ElementType;
  badgeCls: string;
  dotCls: string;
}> = {
  current:  { label: "Current",  icon: CheckCircle2,  badgeCls: "bg-emerald-100 text-emerald-800 border-emerald-200", dotCls: "bg-emerald-500" },
  expiring: { label: "Expiring", icon: AlertTriangle, badgeCls: "bg-amber-100 text-amber-800 border-amber-200",    dotCls: "bg-amber-400" },
  expired:  { label: "Expired",  icon: XCircle,       badgeCls: "bg-red-100 text-red-800 border-red-200",          dotCls: "bg-red-500" },
  missing:  { label: "Missing",  icon: HelpCircle,    badgeCls: "bg-slate-100 text-slate-600 border-slate-200",    dotCls: "bg-slate-300" },
};

const TIER_BADGE: Record<number, { label: string; cls: string }> = {
  2: { label: "TIER 2", cls: "bg-blue-100 text-blue-800 border-blue-200" },
  4: { label: "TIER 4", cls: "bg-violet-100 text-violet-800 border-violet-200" },
};

const OWNER_BADGE: Record<string, { label: string; cls: string }> = {
  administrator: { label: "Administrator", cls: "bg-slate-100 text-slate-700 border-slate-200" },
  vendor:        { label: "Vendor",        cls: "bg-amber-100 text-amber-800 border-amber-200" },
};

function fmtDate(val: string | null | undefined): string {
  if (!val) return "";
  return new Date(val + (val.includes("T") ? "" : "T00:00:00"))
    .toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

type OwnerFilter = "all" | "administrator" | "vendor";

// ── Page ──────────────────────────────────────────────────────────────────────
export default function AscDocumentVaultPage() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const { user } = useAuth();
  const [search, setSearch] = useState("");
  const [ownerFilter, setOwnerFilter] = useState<OwnerFilter>("all");
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set());
  const [uploadItem, setUploadItem] = useState<VaultEntry | null>(null);
  const [docName, setDocName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [effectiveDate, setEffectiveDate] = useState("");

  const { data: entries = [], isLoading } = useQuery<VaultEntry[]>({
    queryKey: ["/api/document-vault"],
  });

  const today = useMemo(() => { const d = new Date(); d.setHours(0, 0, 0, 0); return d; }, []);

  // Summary counts
  const counts = useMemo(() => {
    let missing = 0, current = 0, expiring = 0, expired = 0;
    for (const { doc } of entries) {
      const s = getDocStatus(doc, today);
      if (s === "missing") missing++;
      else if (s === "current") current++;
      else if (s === "expiring") expiring++;
      else expired++;
    }
    return { missing, current, expiring, expired, total: entries.length };
  }, [entries, today]);

  // Filtered + grouped
  const grouped = useMemo(() => {
    const q = search.trim().toLowerCase();
    const filtered = entries.filter(({ item }) => {
      if (ownerFilter !== "all" && item.ownerRole !== ownerFilter) return false;
      if (q.length >= 2) return (
        item.itemName.toLowerCase().includes(q) ||
        item.standardCode.toLowerCase().includes(q)
      );
      return true;
    });
    const map = new Map<string, VaultEntry[]>();
    for (const entry of filtered) {
      if (!map.has(entry.item.category)) map.set(entry.item.category, []);
      map.get(entry.item.category)!.push(entry);
    }
    return Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));
  }, [entries, search, ownerFilter]);

  function toggleSection(cat: string) {
    setCollapsed(prev => {
      const next = new Set(prev);
      next.has(cat) ? next.delete(cat) : next.add(cat);
      return next;
    });
  }

  function openUpload(entry: VaultEntry) {
    setUploadItem(entry);
    setDocName(entry.doc?.documentName ?? entry.item.itemName);
    setExpiryDate(entry.doc?.expirationDate ?? "");
    setEffectiveDate(entry.doc?.effectiveDate ?? "");
  }

  const uploadMutation = useMutation({
    mutationFn: () =>
      apiRequest("POST", `/api/document-vault/${uploadItem!.item.id}/upload`, {
        documentName: docName.trim(),
        expirationDate: expiryDate || undefined,
        effectiveDate: effectiveDate || undefined,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/document-vault"] });
      setUploadItem(null);
      toast({ title: "Document saved", description: "Record updated successfully." });
    },
    onError: () => toast({ title: "Save failed", variant: "destructive" }),
  });

  const tabCounts = {
    all:           entries.length,
    administrator: entries.filter(e => e.item.ownerRole === "administrator").length,
    vendor:        entries.filter(e => e.item.ownerRole === "vendor").length,
  };

  return (
    <div className="min-h-screen bg-background pb-28">
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-5">

        {/* Header */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => window.history.back()}
            data-testid="btn-back-vault" className="gap-1.5">
            <ArrowLeft className="w-4 h-4" />Back
          </Button>
          <div className="w-px h-5 bg-border" />
          <div className="flex items-center gap-2">
            <FolderOpen className="w-5 h-5 text-primary" />
            <div>
              <h1 className="text-xl font-bold leading-tight">Document Vault</h1>
              <p className="text-xs text-muted-foreground">
                Policies, plans, and certifications — AAAHC ASC
              </p>
            </div>
          </div>
        </div>

        {/* Summary tiles */}
        {!isLoading && (
          <div className="grid grid-cols-4 gap-2" data-testid="section-vault-summary">
            {[
              { label: "Current",  val: counts.current,  bg: "bg-emerald-50 border-emerald-200", num: "text-emerald-700" },
              { label: "Expiring", val: counts.expiring, bg: "bg-amber-50 border-amber-200",     num: "text-amber-700" },
              { label: "Expired",  val: counts.expired,  bg: "bg-red-50 border-red-200",         num: "text-red-700" },
              { label: "Missing",  val: counts.missing,  bg: "bg-slate-50 border-slate-200",     num: "text-slate-600" },
            ].map(({ label, val, bg, num }) => (
              <div key={label} className={`rounded-xl border p-3 text-center ${bg}`}>
                <div className={`text-2xl font-black ${num}`} data-testid={`count-vault-${label.toLowerCase()}`}>{val}</div>
                <div className={`text-[10px] font-semibold ${num} opacity-80`}>{label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Progress bar */}
        {!isLoading && counts.total > 0 && (
          <div className="space-y-1">
            <div className="flex justify-between text-[10px] text-muted-foreground">
              <span>Documents on file</span>
              <span className="font-semibold text-foreground">
                {counts.current + counts.expiring + counts.expired} / {counts.total}
              </span>
            </div>
            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-emerald-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((counts.current + counts.expiring + counts.expired) / counts.total) * 100}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>
        )}

        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search documents or codes..."
            className="pl-9"
            data-testid="input-vault-search"
          />
        </div>

        {/* Owner tabs */}
        <div className="flex gap-4 border-b pb-px">
          {(["all", "administrator", "vendor"] as OwnerFilter[]).map(key => (
            <button key={key} onClick={() => setOwnerFilter(key)}
              data-testid={`tab-vault-${key}`}
              className={`pb-2.5 text-xs font-semibold border-b-2 transition-colors capitalize ${ownerFilter === key ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`}>
              {key === "all" ? `All (${tabCounts.all})` : key === "administrator" ? `Admin (${tabCounts.administrator})` : `Vendor (${tabCounts.vendor})`}
            </button>
          ))}
        </div>

        {/* Content */}
        {isLoading ? (
          <div className="flex items-center justify-center h-48">
            <RefreshCw className="w-7 h-7 animate-spin text-muted-foreground" />
          </div>
        ) : grouped.length === 0 ? (
          <div className="rounded-2xl border bg-card p-12 text-center">
            <p className="text-sm text-muted-foreground">No documents match your search.</p>
          </div>
        ) : (
          <div className="space-y-2" data-testid="list-vault-categories">
            {grouped.map(([category, catEntries]) => {
              const isOpen = !collapsed.has(category);
              const catMissing = catEntries.filter(e => getDocStatus(e.doc, today) === "missing").length;
              return (
                <div key={category} className="rounded-2xl border bg-card overflow-hidden">
                  <button
                    onClick={() => toggleSection(category)}
                    data-testid={`section-vault-${category.replace(/\s+/g, "-").toLowerCase()}`}
                    className="w-full flex items-center justify-between px-4 py-3.5 hover:bg-muted/30 transition-colors">
                    <div className="flex items-center gap-2.5">
                      <span className="font-bold text-sm">{category}</span>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-muted text-muted-foreground">
                        {catEntries.length}
                      </span>
                      {catMissing > 0 && (
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-red-100 text-red-700 border border-red-200">
                          {catMissing} missing
                        </span>
                      )}
                    </div>
                    {isOpen
                      ? <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
                      : <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />}
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.18 }}
                        className="overflow-hidden">
                        <div className="divide-y border-t">
                          {catEntries.map(({ item, doc }) => {
                            const status = getDocStatus(doc, today);
                            const scfg = STATUS_CONFIG[status];
                            const StatusIcon = scfg.icon;
                            const tier = TIER_BADGE[item.tier];
                            const owner = OWNER_BADGE[item.ownerRole];
                            return (
                              <div key={item.id} className="px-4 py-3" data-testid={`vault-item-${item.id}`}>
                                <div className="flex items-start gap-2.5">
                                  <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${scfg.dotCls}`} />
                                  <div className="flex-1 min-w-0 space-y-1.5">
                                    <p className="text-sm font-semibold leading-snug">{item.itemName}</p>
                                    <div className="flex flex-wrap gap-1.5">
                                      <Badge variant="outline" className="text-[10px] px-1.5 py-0 font-mono">{item.standardCode}</Badge>
                                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full border ${scfg.badgeCls}`}>
                                        <span className="flex items-center gap-0.5"><StatusIcon size={9} />{scfg.label}</span>
                                      </span>
                                      {tier && <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full border ${tier.cls}`}>{tier.label}</span>}
                                      {owner && <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full border ${owner.cls}`}>{owner.label}</span>}
                                    </div>
                                    {doc ? (
                                      <div className="text-[11px] text-muted-foreground space-y-0.5">
                                        <div className="flex items-center gap-1.5 flex-wrap">
                                          <span className="flex items-center gap-1"><User size={10} />{doc.uploadedBy}</span>
                                          <span className="flex items-center gap-1"><Calendar size={10} />Uploaded {fmtDate(doc.uploadedAt)}</span>
                                          {doc.expirationDate && (
                                            <span className={`flex items-center gap-1 ${status === "expired" ? "text-red-600 font-semibold" : status === "expiring" ? "text-amber-600 font-semibold" : ""}`}>
                                              <Calendar size={10} />Expires {fmtDate(doc.expirationDate)}
                                            </span>
                                          )}
                                        </div>
                                        <p className="text-[10px] font-medium text-foreground truncate">{doc.documentName}</p>
                                      </div>
                                    ) : (
                                      <p className="text-[11px] text-muted-foreground italic">No document on file</p>
                                    )}
                                    <div className="flex justify-end pt-0.5">
                                      <Button size="sm" variant={status === "missing" ? "default" : "outline"}
                                        className="text-[11px] h-7 px-2.5 gap-1"
                                        onClick={() => openUpload({ item, doc })}
                                        data-testid={`btn-upload-${item.id}`}>
                                        <Upload size={11} />
                                        {doc ? "Update" : "Upload"}
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Upload dialog */}
      <Dialog open={!!uploadItem} onOpenChange={open => { if (!open) setUploadItem(null); }}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-base">
              <Upload className="w-4 h-4" />
              {uploadItem?.doc ? "Update Document" : "Upload Document"}
            </DialogTitle>
          </DialogHeader>
          {uploadItem && (
            <div className="space-y-4 py-1">
              <p className="text-sm font-medium leading-snug text-foreground">{uploadItem.item.itemName}</p>
              <div className="space-y-2">
                <Label>Document reference name <span className="text-red-500">*</span></Label>
                <Input
                  value={docName}
                  onChange={e => setDocName(e.target.value)}
                  placeholder="e.g. IPC Policy v2.3, 2026 Fire Safety Plan..."
                  data-testid="input-vault-doc-name"
                />
              </div>
              <div className="space-y-2">
                <Label>Expiration date <span className="text-muted-foreground text-[11px]">(leave blank if permanent)</span></Label>
                <Input type="date" value={expiryDate} onChange={e => setExpiryDate(e.target.value)}
                  data-testid="input-vault-expiry" />
              </div>
              <div className="space-y-2">
                <Label>Effective date <span className="text-muted-foreground text-[11px]">(optional)</span></Label>
                <Input type="date" value={effectiveDate} onChange={e => setEffectiveDate(e.target.value)}
                  data-testid="input-vault-effective" />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setUploadItem(null)}>Cancel</Button>
            <Button
              onClick={() => uploadMutation.mutate()}
              disabled={uploadMutation.isPending || !docName.trim()}
              data-testid="btn-confirm-upload"
              className="gap-1.5"
            >
              {uploadMutation.isPending
                ? <><RefreshCw className="w-3.5 h-3.5 animate-spin" />Saving...</>
                : <><CheckCircle2 className="w-3.5 h-3.5" />Save</>}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
