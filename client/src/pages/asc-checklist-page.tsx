import { useState } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronDown, ChevronRight, FileText, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ASC_CHECKLIST, FREQ_COLOR, type ChecklistVolume } from "@/data/asc-checklist-data";

const MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

const FREQ_MONTH_DOTS: Record<string, number[]> = {
  Monthly:       [0,1,2,3,4,5,6,7,8,9,10,11],
  Quarterly:     [0,3,6,9],
  Semiannually:  [0,6],
  Annually:      [0],
  Weekly:        [],
  Daily:         [],
  Biennially:    [],
  Triennially:   [],
  Quadrennially: [],
  Quinquennially:[],
};

function freqDotColor(freq: string): string {
  if (freq === "Monthly")      return "bg-amber-400";
  if (freq === "Quarterly")    return "bg-blue-400";
  if (freq === "Semiannually") return "bg-violet-400";
  if (freq === "Annually")     return "bg-emerald-400";
  if (freq === "Weekly" || freq === "Daily") return "bg-red-400";
  return "bg-slate-300";
}

function MonthGrid({ frequency }: { frequency: string }) {
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

function VolumeAccordion({ volume, query }: { volume: ChecklistVolume; query: string }) {
  const [open, setOpen] = useState(false);
  const q = query.toLowerCase();

  const matchingSections = volume.sections.map(sec => ({
    ...sec,
    items: sec.items.filter(
      item => !q || item.name.toLowerCase().includes(q) || item.code.toLowerCase().includes(q) || item.frequency.toLowerCase().includes(q)
    ),
  })).filter(sec => sec.items.length > 0);

  const totalItems = matchingSections.reduce((n, s) => n + s.items.length, 0);
  const hasResults = matchingSections.length > 0;
  if (q && !hasResults) return null;

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
          <p className="text-[11px] text-muted-foreground mt-0.5">{totalItems} item{totalItems !== 1 ? "s" : ""}</p>
        </div>
        {forceOpen
          ? <ChevronDown size={16} className="text-muted-foreground shrink-0" />
          : (open
            ? <ChevronDown size={16} className="text-muted-foreground shrink-0" />
            : <ChevronRight size={16} className="text-muted-foreground shrink-0" />)
        }
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
              {matchingSections.map(section => (
                <div key={section.title}>
                  <div className="px-4 py-2 bg-muted/30">
                    <span className="text-[10px] font-black uppercase tracking-wider text-primary">{section.title}</span>
                  </div>
                  {section.items.map((item, idx) => {
                    const freqCls = FREQ_COLOR[item.frequency] ?? "bg-slate-100 text-slate-600 border-slate-200";
                    return (
                      <div key={idx} className="px-4 py-3 flex items-start gap-3" data-testid={`row-checklist-${volume.number}-${idx}`}>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-foreground leading-snug">{item.name}</p>
                          <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                            <span className="text-[10px] font-mono text-muted-foreground bg-muted px-1.5 py-0.5 rounded border border-border">{item.code}</span>
                            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${freqCls}`}>{item.frequency}</span>
                          </div>
                          <MonthGrid frequency={item.frequency} />
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

export default function AscChecklistPage() {
  const [, setLocation] = useLocation();
  const [query, setQuery] = useState("");

  const totalItems = ASC_CHECKLIST.reduce(
    (n, v) => n + v.sections.reduce((m, s) => m + s.items.length, 0), 0
  );

  return (
    <div className="min-h-screen bg-background pb-28">
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-4">

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => setLocation("/")}
            data-testid="btn-back-checklist" className="gap-1.5">
            <ArrowLeft className="w-4 h-4" />Back
          </Button>
          <div className="w-px h-5 bg-border" />
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            <div>
              <h1 className="text-xl font-bold leading-tight">2026 ASC Compliance Checklist</h1>
              <p className="text-xs text-muted-foreground">{totalItems} items across 6 volumes · AAAHC standards</p>
            </div>
          </div>
        </div>

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

        <div className="flex flex-wrap gap-2 text-[11px]">
          {[
            { label: "Monthly",       cls: "bg-amber-100 text-amber-700 border-amber-200" },
            { label: "Quarterly",     cls: "bg-blue-100 text-blue-700 border-blue-200" },
            { label: "Semiannually",  cls: "bg-violet-100 text-violet-700 border-violet-200" },
            { label: "Annually",      cls: "bg-emerald-100 text-emerald-700 border-emerald-200" },
            { label: "Weekly / Daily",cls: "bg-red-100 text-red-700 border-red-200" },
            { label: "Multi-year",    cls: "bg-slate-100 text-slate-600 border-slate-200" },
          ].map(({ label, cls }) => (
            <span key={label} className={`px-2 py-0.5 rounded-full border font-semibold ${cls}`}>{label}</span>
          ))}
        </div>

        <div className="space-y-2">
          {ASC_CHECKLIST.map(volume => (
            <VolumeAccordion key={volume.number} volume={volume} query={query} />
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
