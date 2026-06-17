import { useState, useMemo } from "react";
import { useRoute, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, BookOpen, ChevronDown, ChevronRight, Search,
  AlertTriangle, Play, List, Brain, ClipboardList, X, ZoomIn
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AiHandbookSearch } from "@/components/ai-handbook-search";
import { handbook } from "@shared/handbook";
import { ascHandbook, ASC_HANDBOOK_CATEGORY_ORDER, type AscHandbookCategory, type AscHandbookChapter } from "@shared/asc-handbook";
import { dnvHandbook } from "@shared/dnv-niaho-handbook";
import { findLevelById } from "@shared/all-levels";
import { useAuth } from "@/lib/auth";
import type { HandbookChapter, HandbookSection } from "@shared/schema";
import wallchart1 from "@assets/IMG_5138_1778809817331.jpeg";
import wallchart2 from "@assets/IMG_5139_1778809821358.jpeg";
import wallchart3 from "@assets/IMG_5140_1778809824135.jpeg";

const WALLCHARTS = [
  {
    id: "eoc-utilities",
    label: "Environment of Care & Utilities",
    subtitle: "Vols. 1–3 · Building, Emergency Preparedness, Utility Systems",
    src: wallchart1,
  },
  {
    id: "fire-safety",
    label: "Fire Safety",
    subtitle: "Vols. 4–5 · Fire Risks, Drills, Fire Alarm & Suppression",
    src: wallchart2,
  },
  {
    id: "medical-infection",
    label: "Medical Equipment & Infection Control",
    subtitle: "Vol. 6 · Equipment Testing, Sterilization, IPC Program",
    src: wallchart3,
  },
];

function SectionCard({ section, levelColor, index }: { section: HandbookSection; levelColor: string; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.15 }}
      className="rounded-xl border-2 border-card-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <button
        className="w-full text-left p-4 flex items-center gap-3 hover:bg-accent/30 transition-colors"
        onClick={() => setExpanded(!expanded)}
        data-testid={`button-section-${index}`}
      >
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-base font-bold flex-shrink-0"
          style={{ backgroundColor: levelColor }}
        >
          {index + 1}
        </div>
        <h3 className="font-bold text-base flex-1">{section.heading}</h3>
        <ChevronDown
          size={20}
          className={`text-muted-foreground transition-transform ${expanded ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 flex flex-col gap-4">
              <p className="text-base text-foreground/75 leading-relaxed" data-testid={`text-section-content-${index}`}>
                {section.content}
              </p>

              {section.criticalValues && section.criticalValues.length > 0 && (
                <div className="rounded-xl border-2 overflow-hidden shadow-sm" style={{ borderColor: `${levelColor}30` }}>
                  <div className="px-4 py-3 flex items-center gap-2" style={{ backgroundColor: `${levelColor}10` }}>
                    <AlertTriangle size={16} style={{ color: levelColor }} />
                    <span className="text-sm font-bold uppercase tracking-wide" style={{ color: levelColor }}>
                      Critical Values
                    </span>
                  </div>
                  <div className="divide-y divide-border bg-card">
                    {section.criticalValues.map((cv, i) => (
                      <div key={i} className="px-4 py-3 flex gap-4 text-base">
                        <span className="font-bold text-foreground whitespace-nowrap min-w-[120px]">{cv.label}</span>
                        <span className="text-foreground/70">{cv.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {section.thinkAboutIt && (
                <div className="rounded-xl p-4 flex gap-3 items-start border" style={{ backgroundColor: `${levelColor}08`, borderColor: `${levelColor}20` }}>
                  <Brain size={18} className="flex-shrink-0 mt-0.5" style={{ color: levelColor }} />
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wide mb-1.5" style={{ color: levelColor }}>
                      Think About It
                    </p>
                    <p className="text-base text-foreground/70 italic leading-relaxed">
                      {section.thinkAboutIt}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function ChapterView({ chapter, onBack }: { chapter: HandbookChapter; onBack: () => void }) {
  const [, setLocation] = useLocation();
  const quizLevelId = chapter.levelId.replace("_hb_", "_");
  const level = findLevelById(quizLevelId);
  const color = level?.color || "hsl(152, 82%, 39%)";
  const [showQuickRef, setShowQuickRef] = useState(false);

  return (
    <div className="min-h-screen flex flex-col pb-20">
      <div className="sticky top-[58px] z-40 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={onBack} data-testid="button-back-handbook">
            <ArrowLeft size={20} />
          </Button>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <BookOpen size={18} style={{ color }} />
              <h2 className="font-bold text-base" style={{ color }} data-testid="text-chapter-title">
                {chapter.title}
              </h2>
            </div>
          </div>
          <Button
            variant="default"
            size="sm"
            onClick={() => setLocation(`/play/${quizLevelId}`)}
            data-testid="button-chapter-quiz"
          >
            <Play size={14} className="mr-1" />
            Quiz
          </Button>
        </div>
      </div>

      <div className="flex-1 max-w-2xl mx-auto w-full px-4 py-6 flex flex-col gap-5">
        <div className="rounded-xl p-5 border-2 shadow-sm" style={{ borderColor: `${color}30`, backgroundColor: `${color}08` }}>
          <p className="text-base leading-relaxed font-bold text-foreground" data-testid="text-chapter-overview">
            {chapter.overview}
          </p>
        </div>

        <AiHandbookSearch />

        <div className="flex gap-2">
          <Button
            variant={showQuickRef ? "outline" : "default"}
            size="sm"
            className="flex-1"
            onClick={() => setShowQuickRef(false)}
            data-testid="button-show-sections"
          >
            <BookOpen size={14} className="mr-1" />
            Full Guide
          </Button>
          <Button
            variant={showQuickRef ? "default" : "outline"}
            size="sm"
            className="flex-1"
            onClick={() => setShowQuickRef(true)}
            data-testid="button-show-quickref"
          >
            <List size={14} className="mr-1" />
            Quick Reference
          </Button>
        </div>

        {showQuickRef ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-xl border border-card-border bg-card overflow-hidden"
          >
            <div className="px-4 py-3 flex items-center gap-2" style={{ backgroundColor: `${color}10` }}>
              <List size={18} style={{ color }} />
              <h3 className="font-bold text-base">Quick Reference - {chapter.title}</h3>
            </div>
            <div className="divide-y divide-border">
              {(chapter.quickReference ?? []).map((item, i) => (
                <div key={i} className="px-4 py-3.5 flex gap-4 text-base" data-testid={`quickref-item-${i}`}>
                  <span className="font-bold text-foreground min-w-[140px] flex-shrink-0">{item.fact}</span>
                  <span className="text-foreground/70 whitespace-pre-line leading-relaxed">{item.detail}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ) : (
          <div className="flex flex-col gap-3">
            {(chapter.sections ?? []).map((section, i) => (
              <SectionCard key={i} section={section} levelColor={color} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function chapterMatchesQuery(ch: HandbookChapter, q: string) {
  if (ch.title.toLowerCase().includes(q)) return true;
  if (ch.overview?.toLowerCase().includes(q)) return true;
  return (ch.sections ?? []).some(
    (s) =>
      s.heading?.toLowerCase().includes(q) ||
      s.content?.toLowerCase().includes(q) ||
      s.criticalValues?.some((cv) => cv.value?.toLowerCase().includes(q) || cv.label?.toLowerCase().includes(q)) ||
      s.thinkAboutIt?.toLowerCase().includes(q)
  ) || (ch.quickReference ?? []).some(
    (qr) => qr.fact?.toLowerCase().includes(q) || qr.detail?.toLowerCase().includes(q)
  );
}

export default function HandbookPage() {
  const [, params] = useRoute("/handbook/:levelId");
  const [, setLocation] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxLabel, setLightboxLabel] = useState<string>("");
  const { user } = useAuth();

  const isAsc = user?.organizationType === "asc";
  const isDnv = user?.organizationType === "dnv";
  const allChapters: HandbookChapter[] = isAsc ? ascHandbook : isDnv ? dnvHandbook : handbook;

  const selectedLevelId = params?.levelId;
  const selectedChapter = selectedLevelId
    ? allChapters.find((ch) => ch.levelId === selectedLevelId)
    : null;

  const q = searchQuery.trim().toLowerCase();
  const filteredChapters = useMemo(() => {
    if (!q) return allChapters;
    return allChapters.filter((ch) => chapterMatchesQuery(ch, q));
  }, [q, allChapters]);

  // Group ASC chapters by category (Universal Standards first, then Selective)
  const ascGroups = useMemo(() => {
    if (!isAsc) return null;
    const groups: Record<AscHandbookCategory, AscHandbookChapter[]> = {
      "Universal Standards": [],
      "Selective Standards": [],
    };
    for (const ch of filteredChapters as AscHandbookChapter[]) {
      groups[ch.category].push(ch);
    }
    for (const cat of ASC_HANDBOOK_CATEGORY_ORDER) {
      groups[cat].sort((a, b) => a.chapterNumber - b.chapterNumber);
    }
    return groups;
  }, [isAsc, filteredChapters]);

  if (selectedChapter) {
    return <ChapterView chapter={selectedChapter} onBack={() => window.history.back()} />;
  }

  const introCopy = isAsc
    ? "The full AAAHC Accreditation Handbook for Medicare Deemed Status (v44), organized by chapter exactly as published. Universal Standards apply to every accredited ASC; Selective Standards apply when the listed service is provided."
    : isDnv
    ? "Comprehensive coverage of DNV NIAHO 25-1 standards, organized by chapter with detailed explanations, critical values, and real-world scenarios. Use this alongside the quizzes to build deep understanding of NIAHO requirements."
    : "Everything you need to know for Joint Commission compliance, organized by topic with detailed explanations, critical values, and real-world scenarios. Use this alongside the quizzes to build deep understanding.";

  const renderChapterCard = (chapter: HandbookChapter) => {
    const level = findLevelById(chapter.levelId);
    const color = level?.color || "hsl(152, 82%, 39%)";
    return (
      <motion.button
        key={chapter.levelId}
        className="w-full text-left rounded-xl border-2 border-card-border bg-card p-4 flex items-center gap-4 hover:bg-accent/30 transition-all shadow-sm hover:shadow-md"
        onClick={() => setLocation(`/handbook/${chapter.levelId}`)}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        data-testid={`button-chapter-${chapter.levelId}`}
      >
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: `${color}20` }}
        >
          <BookOpen size={22} style={{ color }} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-base" style={{ color }}>
            {chapter.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-0.5">
            {(chapter.sections ?? []).length} standards · {(chapter.quickReference ?? []).length} quick reference items
          </p>
          {(chapter as AscHandbookChapter).surveyRiskCount != null && (
            <p className="text-xs text-red-500 dark:text-red-400 font-semibold mt-0.5">
              ⚠ {(chapter as AscHandbookChapter).surveyRiskCount} common survey failures
            </p>
          )}
        </div>
        <ChevronRight size={18} className="text-muted-foreground flex-shrink-0" />
      </motion.button>
    );
  };

  return (
    <div className="min-h-screen flex flex-col pb-20">
      {/* Lightbox overlay */}
      <AnimatePresence>
        {lightboxSrc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex flex-col"
            onClick={() => setLightboxSrc(null)}
          >
            <div className="flex items-center justify-between px-4 py-3 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
              <span className="text-white font-bold text-sm">{lightboxLabel}</span>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
                onClick={() => setLightboxSrc(null)}
                data-testid="button-close-lightbox"
              >
                <X size={22} />
              </Button>
            </div>
            <div className="flex-1 overflow-auto p-2 flex items-start justify-center" onClick={(e) => e.stopPropagation()}>
              <img
                src={lightboxSrc}
                alt={lightboxLabel}
                className="max-w-full rounded-lg shadow-2xl"
                data-testid="img-wallchart-lightbox"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="sticky top-[58px] z-40 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => setLocation("/")} data-testid="button-back-home">
            <ArrowLeft size={20} />
          </Button>
          <div className="flex items-center gap-2 flex-1">
            <BookOpen size={20} className="text-primary" />
            <h1 className="font-black text-lg text-foreground" data-testid="text-handbook-title">
              {isAsc ? "AAAHC Accreditation Handbook" : isDnv ? "DNV NIAHO Handbook" : "Compliance Handbook"}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto w-full px-4 py-6 flex flex-col gap-5">
        <div className="rounded-xl bg-primary/5 border border-primary/20 p-5">
          <h2 className="font-bold text-base mb-1.5" data-testid="text-handbook-subtitle">
            {isAsc ? "AAAHC Medicare Deemed Status, v44" : isDnv ? "NIAHO 25-1 Standards" : "Your Complete Reference Guide"}
          </h2>
          <p className="text-sm text-foreground/70 leading-relaxed">
            {introCopy}
          </p>
        </div>

        <AiHandbookSearch />

        <div className="relative">
          <Search size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-primary pointer-events-none z-10" />
          <Input
            placeholder="Search topics, rules, values..."
            className="pl-10 border-2 border-primary/40 bg-background font-semibold placeholder:text-foreground/75 placeholder:font-bold focus:border-primary focus-visible:ring-primary/40 shadow-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            data-testid="input-handbook-search"
          />
        </div>

        {isAsc && (
          <div className="flex flex-col gap-3" data-testid="section-wallcharts">
            <div className="flex items-center gap-2 px-1">
              <ClipboardList size={16} className="text-primary" />
              <h3 className="font-black text-sm uppercase tracking-wide text-primary">
                2026 Compliance Checklists
              </h3>
            </div>
            <div className="flex flex-col gap-2">
              {WALLCHARTS.map((wc) => (
                <motion.button
                  key={wc.id}
                  className="w-full text-left rounded-xl border-2 border-card-border bg-card p-4 flex items-center gap-4 hover:bg-accent/30 transition-all shadow-sm hover:shadow-md"
                  onClick={() => { setLightboxSrc(wc.src); setLightboxLabel(wc.label); }}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  data-testid={`button-wallchart-${wc.id}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <ClipboardList size={22} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm text-foreground">{wc.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-snug">{wc.subtitle}</p>
                  </div>
                  <ZoomIn size={18} className="text-muted-foreground flex-shrink-0" />
                </motion.button>
              ))}
            </div>
          </div>
        )}

        {isAsc && ascGroups ? (
          <div className="flex flex-col gap-6">
            {ASC_HANDBOOK_CATEGORY_ORDER.map((cat) => {
              const items = ascGroups[cat];
              if (items.length === 0) return null;
              return (
                <div key={cat} className="flex flex-col gap-3" data-testid={`group-${cat.toLowerCase().replace(/\s+/g, "-")}`}>
                  <div className="flex items-baseline justify-between px-1">
                    <h3 className="font-black text-sm uppercase tracking-wide text-primary" data-testid={`heading-${cat.toLowerCase().replace(/\s+/g, "-")}`}>
                      {cat}
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      {cat === "Universal Standards"
                        ? "Apply to every accredited ASC"
                        : "Apply when the service is provided"}
                    </span>
                  </div>
                  {cat === "Selective Standards" && (
                    <p
                      className="px-1 text-xs text-muted-foreground/80"
                      data-testid="text-handbook-numbering-note"
                    >
                      All ASC-required chapters included. Apply when the listed service is provided at your facility.
                    </p>
                  )}
                  <div className="flex flex-col gap-3">
                    {items.map(renderChapterCard)}
                  </div>
                </div>
              );
            })}
            {filteredChapters.length === 0 && (
              <div className="text-center py-12">
                <Search size={32} className="mx-auto text-muted-foreground/30 mb-3" />
                <p className="text-sm text-muted-foreground">No chapters match your search</p>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {filteredChapters.map(renderChapterCard)}
            {filteredChapters.length === 0 && (
              <div className="text-center py-12">
                <Search size={32} className="mx-auto text-muted-foreground/30 mb-3" />
                <p className="text-sm text-muted-foreground">No chapters match your search</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
