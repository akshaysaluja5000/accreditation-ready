import { useMemo, useState } from "react";
import { useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Search, FolderOpen, ChevronDown, ChevronRight, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface VaultItem {
  id: number;
  itemName: string;
  standardCode: string;
  tier: number;
  category: string;
  frequency: string;
  ownerRole: string;
}

const TIER_CONFIG: Record<number, { label: string; cls: string }> = {
  2: { label: "TIER 2",  cls: "bg-blue-100 text-blue-800 border-blue-200" },
  4: { label: "TIER 4",  cls: "bg-violet-100 text-violet-800 border-violet-200" },
};

const OWNER_CONFIG: Record<string, { label: string; cls: string }> = {
  administrator: { label: "Administrator", cls: "bg-slate-100 text-slate-700 border-slate-200" },
  vendor:        { label: "Vendor",        cls: "bg-amber-100 text-amber-800 border-amber-200" },
};

const FREQ_COLOR: Record<string, string> = {
  "Annually":     "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Monthly":      "bg-blue-50 text-blue-700 border-blue-200",
  "Quarterly":    "bg-violet-50 text-violet-700 border-violet-200",
  "Biennially":   "bg-orange-50 text-orange-700 border-orange-200",
  "Semiannually": "bg-cyan-50 text-cyan-700 border-cyan-200",
  "Triennially":  "bg-rose-50 text-rose-700 border-rose-200",
  "As Needed":    "bg-slate-50 text-slate-600 border-slate-200",
  "Every 5 Years":"bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200",
};

function freqCls(freq: string): string {
  return FREQ_COLOR[freq] ?? "bg-slate-50 text-slate-600 border-slate-200";
}

type OwnerFilter = "all" | "administrator" | "vendor";

export default function AscDocumentVaultPage() {
  const [, setLocation] = useLocation();
  const [search, setSearch] = useState("");
  const [ownerFilter, setOwnerFilter] = useState<OwnerFilter>("all");
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set());

  const { data: items = [], isLoading } = useQuery<VaultItem[]>({
    queryKey: ["/api/compliance/document-vault"],
  });

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return items.filter(i => {
      if (ownerFilter !== "all" && i.ownerRole !== ownerFilter) return false;
      if (q.length >= 2) {
        return i.itemName.toLowerCase().includes(q) || i.standardCode.toLowerCase().includes(q);
      }
      return true;
    });
  }, [items, search, ownerFilter]);

  const grouped = useMemo(() => {
    const map = new Map<string, VaultItem[]>();
    for (const item of filtered) {
      const key = item.category;
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(item);
    }
    return Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));
  }, [filtered]);

  const counts = {
    all:           items.length,
    administrator: items.filter(i => i.ownerRole === "administrator").length,
    vendor:        items.filter(i => i.ownerRole === "vendor").length,
  };

  function toggleSection(key: string) {
    setCollapsed(prev => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  }

  const TABS: { key: OwnerFilter; label: string }[] = [
    { key: "all",           label: `All (${counts.all})` },
    { key: "administrator", label: `Administrator (${counts.administrator})` },
    { key: "vendor",        label: `Vendor (${counts.vendor})` },
  ];

  return (
    <div className="min-h-screen bg-background pb-28">
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-5">

        {/* Header */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => setLocation("/compliance-tasks")}
            data-testid="btn-back-vault" className="gap-1.5">
            <ArrowLeft className="w-4 h-4" />Back
          </Button>
          <div className="w-px h-5 bg-border" />
          <div className="flex items-center gap-2">
            <FolderOpen className="w-5 h-5 text-primary" />
            <div>
              <h1 className="text-xl font-bold leading-tight">Document Vault</h1>
              <p className="text-xs text-muted-foreground">Policies, plans, and certifications — AAAHC ASC</p>
            </div>
          </div>
        </div>

        {/* Summary tiles */}
        {!isLoading && (
          <div className="grid grid-cols-3 gap-3" data-testid="section-vault-summary">
            {[
              { label: "Total",         val: counts.all,           bg: "bg-card border",               num: "text-foreground" },
              { label: "Administrator", val: counts.administrator, bg: "bg-blue-50 border-blue-200",   num: "text-blue-700" },
              { label: "Vendor",        val: counts.vendor,        bg: "bg-amber-50 border-amber-200", num: "text-amber-700" },
            ].map(({ label, val, bg, num }) => (
              <div key={label} className={`rounded-xl border p-3 text-center ${bg}`}>
                <div className={`text-2xl font-black ${num}`}>{val}</div>
                <div className={`text-[10px] font-semibold ${num} opacity-80`}>{label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search documents or standard codes…"
            className="pl-9"
            data-testid="input-vault-search"
          />
        </div>

        {/* Owner filter tabs */}
        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar border-b">
          {TABS.map(t => (
            <button key={t.key} onClick={() => setOwnerFilter(t.key)}
              data-testid={`tab-vault-${t.key}`}
              className={`shrink-0 pb-2.5 text-xs font-semibold border-b-2 transition-colors px-1 ${ownerFilter === t.key ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`}>
              {t.label}
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
          <div className="space-y-3" data-testid="list-vault-categories">
            {grouped.map(([category, categoryItems]) => {
              const isOpen = !collapsed.has(category);
              return (
                <div key={category} className="rounded-2xl border bg-card overflow-hidden">
                  <button
                    onClick={() => toggleSection(category)}
                    data-testid={`section-vault-${category.replace(/\s+/g, "-").toLowerCase()}`}
                    className="w-full flex items-center justify-between px-4 py-3.5 hover:bg-muted/30 transition-colors">
                    <div className="flex items-center gap-2.5">
                      <span className="font-bold text-sm text-foreground">{category}</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                        {categoryItems.length}
                      </span>
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
                          {categoryItems.map(item => {
                            const tierCfg = TIER_CONFIG[item.tier] ?? TIER_CONFIG[2];
                            const ownerCfg = OWNER_CONFIG[item.ownerRole] ?? OWNER_CONFIG.administrator;
                            return (
                              <div key={item.id}
                                className="px-4 py-3 flex items-start gap-3"
                                data-testid={`vault-item-${item.id}`}>
                                <div className="flex-1 min-w-0 space-y-1.5">
                                  <p className="text-sm font-semibold text-foreground leading-snug">
                                    {item.itemName}
                                  </p>
                                  <div className="flex flex-wrap gap-1.5 items-center">
                                    <Badge variant="outline" className="text-[10px] px-1.5 py-0 font-mono">
                                      {item.standardCode}
                                    </Badge>
                                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full border ${freqCls(item.frequency)}`}>
                                      {item.frequency}
                                    </span>
                                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full border ${tierCfg.cls}`}>
                                      {tierCfg.label}
                                    </span>
                                    <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full border ${ownerCfg.cls}`}>
                                      {ownerCfg.label}
                                    </span>
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
    </div>
  );
}
