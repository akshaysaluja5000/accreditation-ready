import { useState, useRef } from "react";
import { useLocation } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, FileSearch2, Upload, Bot, CheckCircle, XCircle, Clock,
  AlertTriangle, Users, RefreshCw, ChevronDown, Search, Sparkles, FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useAuth } from "@/lib/auth";

interface ComplianceItem { id: number; itemName: string; standardCode: string; tier: number; category: string; frequency: string; }
interface TrainingModule {
  id: number; facilityId: number; documentId: number; itemId: number;
  title: string; taggedStandards: string; questions: string; conflictFlags: string;
  assignedRoles: string; assignedMemberCount: number; status: string;
  createdAt: string; approvedAt: string | null; approvedBy: string | null;
}
interface UploadResult {
  document: { id: number; documentName: string };
  module: TrainingModule | null;
  summary: { standardsTagged: number; questionsGenerated: number; conflictFlagsCount: number; assignedRoles: string[]; assignedMemberCount: number; } | null;
}

function ModuleCard({ mod, onApprove, onReject, isActing }: {
  mod: TrainingModule;
  onApprove: (id: number) => void;
  onReject: (id: number) => void;
  isActing: boolean;
}) {
  const standards: string[] = JSON.parse(mod.taggedStandards || "[]");
  const questions: { question: string }[] = JSON.parse(mod.questions || "[]");
  const conflicts: string[] = JSON.parse(mod.conflictFlags || "[]");
  const roles: string[] = JSON.parse(mod.assignedRoles || "[]");
  const isPending = mod.status === "pending";
  const isApproved = mod.status === "approved";

  return (
    <motion.div layout initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border bg-card p-5 space-y-4" data-testid={`card-module-${mod.id}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 min-w-0">
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${isApproved ? "bg-emerald-100" : isPending ? "bg-amber-100" : "bg-red-100"}`}>
            <Bot className={`w-4 h-4 ${isApproved ? "text-emerald-600" : isPending ? "text-amber-600" : "text-red-600"}`} />
          </div>
          <div className="min-w-0">
            <h3 className="font-bold text-foreground leading-snug">{mod.title}</h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              Content Intelligence Agent · {new Date(mod.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
        {isApproved ? (
          <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 shrink-0 text-xs whitespace-nowrap">
            <CheckCircle className="w-3 h-3 mr-1" />Live
          </Badge>
        ) : isPending ? (
          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200 shrink-0 text-xs whitespace-nowrap">
            <Clock className="w-3 h-3 mr-1" />Pending
          </Badge>
        ) : (
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200 shrink-0 text-xs whitespace-nowrap">
            <XCircle className="w-3 h-3 mr-1" />Rejected
          </Badge>
        )}
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div className="text-center p-3 bg-blue-50 rounded-xl border border-blue-100">
          <div className="text-2xl font-black text-blue-700">{standards.length}</div>
          <div className="text-[10px] text-blue-600 font-medium">Standards Tagged</div>
        </div>
        <div className="text-center p-3 bg-violet-50 rounded-xl border border-violet-100">
          <div className="text-2xl font-black text-violet-700">{questions.length}</div>
          <div className="text-[10px] text-violet-600 font-medium">Quiz Questions</div>
        </div>
        <div className="text-center p-3 bg-emerald-50 rounded-xl border border-emerald-100">
          <div className="text-2xl font-black text-emerald-700">{mod.assignedMemberCount}</div>
          <div className="text-[10px] text-emerald-600 font-medium">Staff Assigned</div>
        </div>
      </div>

      {standards.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {standards.map((s, i) => (
            <Badge key={i} variant="outline" className="text-xs bg-blue-50 border-blue-200 text-blue-700 font-mono">{s}</Badge>
          ))}
        </div>
      )}

      {roles.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap">
          <Users className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
          <span className="text-xs text-muted-foreground">{roles.join(", ")}</span>
        </div>
      )}

      {conflicts.length > 0 && (
        <div className="space-y-1 p-3 bg-amber-50 rounded-lg border border-amber-100">
          <p className="text-xs font-semibold text-amber-700 flex items-center gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5" />
            {conflicts.length} Potential Conflict{conflicts.length !== 1 ? "s" : ""} Flagged
          </p>
          {conflicts.map((c, i) => (
            <p key={i} className="text-xs text-amber-800 pl-5 leading-relaxed">{c}</p>
          ))}
        </div>
      )}

      {isPending && (
        <div className="flex justify-end gap-2 pt-1 border-t">
          <Button variant="outline" size="sm" disabled={isActing}
            onClick={() => onReject(mod.id)} data-testid={`btn-reject-module-${mod.id}`}
            className="text-red-600 border-red-200 hover:bg-red-50 text-xs gap-1">
            <XCircle className="w-3.5 h-3.5" />Reject
          </Button>
          <Button size="sm" disabled={isActing}
            onClick={() => onApprove(mod.id)} data-testid={`btn-approve-module-${mod.id}`}
            className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs gap-1">
            <CheckCircle className="w-3.5 h-3.5" />Approve & Go Live
          </Button>
        </div>
      )}
      {isApproved && mod.approvedBy && (
        <p className="text-xs text-muted-foreground text-right pt-1 border-t">
          Approved by {mod.approvedBy} · {mod.approvedAt ? new Date(mod.approvedAt).toLocaleDateString() : ""}
        </p>
      )}
    </motion.div>
  );
}

type ModFilter = "all" | "pending" | "approved" | "rejected";

export default function ContentIntelligencePage() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const { user } = useAuth();
  const activeStandardsBody = user?.organizationType === "asc" ? "AAAHC" : user?.organizationType === "dnv" ? "DNV NIAHO" : "Joint Commission";

  const [docName, setDocName] = useState("");
  const [docExpiry, setDocExpiry] = useState("");
  const [docFile, setDocFile] = useState<File | null>(null);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [itemSearch, setItemSearch] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [uploadResult, setUploadResult] = useState<UploadResult | null>(null);
  const [modFilter, setModFilter] = useState<ModFilter>("all");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { data: trainingModules = [], isLoading: modulesLoading } = useQuery<TrainingModule[]>({
    queryKey: ["/api/compliance/training-modules"],
  });

  const { data: allItems = [] } = useQuery<ComplianceItem[]>({
    queryKey: ["/api/compliance/items"],
  });

  const approveMutation = useMutation({
    mutationFn: (id: number) => apiRequest("POST", `/api/compliance/training-modules/${id}/approve`),
    onSuccess: () => { queryClient.invalidateQueries({ queryKey: ["/api/compliance/training-modules"] }); toast({ title: "Module approved and live." }); },
    onError: () => toast({ title: "Approval failed", variant: "destructive" }),
  });

  const rejectMutation = useMutation({
    mutationFn: (id: number) => apiRequest("POST", `/api/compliance/training-modules/${id}/reject`),
    onSuccess: () => { queryClient.invalidateQueries({ queryKey: ["/api/compliance/training-modules"] }); toast({ title: "Module rejected." }); },
    onError: () => toast({ title: "Rejection failed", variant: "destructive" }),
  });

  const uploadMutation = useMutation({
    mutationFn: async (): Promise<UploadResult> => {
      const fd = new FormData();
      fd.append("itemId", String(selectedItemId));
      fd.append("documentName", docName.trim());
      if (docExpiry) fd.append("expirationDate", docExpiry);
      if (docFile) fd.append("file", docFile);
      const res = await fetch("/api/compliance/document/upload", { method: "POST", body: fd, credentials: "include" });
      if (!res.ok) { const e = await res.json().catch(() => ({ error: "Upload failed." })); throw new Error(e.error ?? "Upload failed."); }
      return res.json();
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["/api/compliance/training-modules"] });
      setUploadResult(data);
      if (data.module) {
        toast({ title: "Document analyzed", description: `${data.summary?.questionsGenerated ?? 0} questions generated. Review below.` });
      } else {
        toast({ title: "Document saved", description: "File could not be read for AI analysis." });
        resetForm();
      }
    },
    onError: (err: Error) => toast({ title: "Upload failed", description: err.message, variant: "destructive" }),
  });

  function resetForm() {
    setDocName(""); setDocExpiry(""); setDocFile(null); setSelectedItemId(null);
    setItemSearch(""); setUploadResult(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  const selectedItem = allItems.find(i => i.id === selectedItemId);
  const filteredItems = allItems.filter(i =>
    itemSearch.length < 2 || i.itemName.toLowerCase().includes(itemSearch.toLowerCase()) || i.standardCode.toLowerCase().includes(itemSearch.toLowerCase())
  ).slice(0, 40);

  const pending = trainingModules.filter(m => m.status === "pending");
  const approved = trainingModules.filter(m => m.status === "approved");
  const rejected = trainingModules.filter(m => m.status === "rejected");
  const visibleModules = modFilter === "all" ? trainingModules : trainingModules.filter(m => m.status === modFilter);

  const isActing = approveMutation.isPending || rejectMutation.isPending;
  const canUpload = !!selectedItemId && docName.trim().length > 0;

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">

        {/* Header */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => setLocation("/leadership")}
            data-testid="btn-back-hub" className="gap-1.5">
            <ArrowLeft className="w-4 h-4" />Hub
          </Button>
          <div className="w-px h-5 bg-border" />
          <div className="flex items-center gap-2">
            <FileSearch2 className="w-5 h-5 text-violet-500" />
            <h1 className="text-xl font-bold text-foreground">Content Intelligence Agent</h1>
            <Badge className="bg-violet-100 text-violet-700 border-violet-200 text-[10px]">AI</Badge>
          </div>
        </div>

        <p className="text-sm text-muted-foreground -mt-4">
          Upload a policy or procedure document. The agent reads it, tags relevant {activeStandardsBody} standards, generates quiz questions, and flags any conflicts. All output is ready for one-click approval.
        </p>

        {/* Upload card */}
        <div className="rounded-2xl border bg-card p-6 space-y-5">
          <div className="flex items-center gap-2">
            <Upload className="w-4 h-4 text-violet-500" />
            <h2 className="font-semibold text-foreground">Upload Document</h2>
          </div>

          {uploadResult?.module ? (
            /* Post-upload success state */
            <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
              className="rounded-xl bg-emerald-50 border border-emerald-200 p-5 space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <p className="font-semibold text-emerald-800">Analysis complete</p>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-white rounded-lg border border-emerald-100 p-2">
                  <div className="text-xl font-black text-blue-700">{uploadResult.summary?.standardsTagged ?? 0}</div>
                  <div className="text-[10px] text-muted-foreground">Standards Tagged</div>
                </div>
                <div className="bg-white rounded-lg border border-emerald-100 p-2">
                  <div className="text-xl font-black text-violet-700">{uploadResult.summary?.questionsGenerated ?? 0}</div>
                  <div className="text-[10px] text-muted-foreground">Questions Created</div>
                </div>
                <div className="bg-white rounded-lg border border-emerald-100 p-2">
                  <div className="text-xl font-black text-orange-600">{uploadResult.summary?.conflictFlagsCount ?? 0}</div>
                  <div className="text-[10px] text-muted-foreground">Conflicts Flagged</div>
                </div>
              </div>
              <p className="text-xs text-emerald-700">Module is pending your approval below. Review it before it goes live to staff.</p>
              <Button variant="outline" size="sm" onClick={resetForm} className="w-full gap-1.5">
                <Upload className="w-3.5 h-3.5" />Upload Another Document
              </Button>
            </motion.div>
          ) : (
            <div className="space-y-4">
              {/* Item picker */}
              <div className="space-y-1.5">
                <Label>Compliance Standard <span className="text-destructive">*</span></Label>
                <div className="relative">
                  <button type="button" onClick={() => setShowPicker(v => !v)}
                    data-testid="btn-pick-item"
                    className="w-full flex items-center justify-between px-3 py-2.5 border rounded-lg text-sm bg-background hover:bg-muted/30 transition-colors text-left">
                    <span className={selectedItem ? "text-foreground" : "text-muted-foreground"}>
                      {selectedItem ? `${selectedItem.standardCode}: ${selectedItem.itemName}` : "Search standards…"}
                    </span>
                    <ChevronDown className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                  </button>
                  <AnimatePresence>
                    {showPicker && (
                      <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                        className="absolute z-50 top-full mt-1 left-0 right-0 bg-card border rounded-xl shadow-lg overflow-hidden">
                        <div className="p-2 border-b">
                          <div className="relative">
                            <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                            <input value={itemSearch} onChange={e => setItemSearch(e.target.value)} autoFocus
                              placeholder="Search by name or standard code…"
                              data-testid="input-item-search"
                              className="w-full pl-8 pr-3 py-1.5 text-sm bg-background border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary" />
                          </div>
                        </div>
                        <div className="max-h-56 overflow-y-auto">
                          {filteredItems.map(item => (
                            <button key={item.id} type="button"
                              onClick={() => { setSelectedItemId(item.id); setShowPicker(false); setItemSearch(""); }}
                              data-testid={`item-option-${item.id}`}
                              className="w-full text-left px-3 py-2.5 hover:bg-muted/30 transition-colors border-b last:border-b-0">
                              <p className="text-xs font-semibold text-foreground">{item.itemName}</p>
                              <p className="text-[10px] text-muted-foreground mt-0.5">{item.standardCode} · {item.frequency} · {item.category}</p>
                            </button>
                          ))}
                          {filteredItems.length === 0 && (
                            <p className="text-xs text-muted-foreground text-center py-4">No matching standards.</p>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Document name */}
              <div className="space-y-1.5">
                <Label>Document Name <span className="text-destructive">*</span></Label>
                <Input value={docName} onChange={e => setDocName(e.target.value)}
                  placeholder="e.g. Sterile Field Policy v4.2"
                  data-testid="input-doc-name" />
              </div>

              {/* File upload */}
              <div className="space-y-1.5">
                <Label className="flex items-center gap-1.5">
                  Attach File
                  <span className="text-xs text-muted-foreground font-normal">(PDF, DOCX, TXT - enables AI analysis)</span>
                </Label>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition-colors ${docFile ? "border-violet-400 bg-violet-50" : "border-border hover:border-violet-300 hover:bg-muted/20"}`}
                  data-testid="upload-drop-zone">
                  <input ref={fileInputRef} type="file" accept=".pdf,.doc,.docx,.txt" className="hidden"
                    onChange={e => setDocFile(e.target.files?.[0] ?? null)} />
                  {docFile ? (
                    <div className="flex items-center justify-center gap-2">
                      <FileText className="w-4 h-4 text-violet-500" />
                      <span className="text-sm font-medium text-violet-700">{docFile.name}</span>
                      <button type="button" onClick={e => { e.stopPropagation(); setDocFile(null); if (fileInputRef.current) fileInputRef.current.value = ""; }}
                        className="ml-1 text-muted-foreground hover:text-destructive text-xs">✕</button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-1.5">
                      <Upload className="w-5 h-5 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Click to select a file</p>
                      <p className="text-xs text-muted-foreground/60">The agent will read it, tag standards, and generate training questions automatically.</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Expiry */}
              <div className="space-y-1.5">
                <Label>Expiration Date <span className="text-xs text-muted-foreground font-normal">(optional)</span></Label>
                <Input type="date" value={docExpiry} onChange={e => setDocExpiry(e.target.value)}
                  data-testid="input-doc-expiry" />
              </div>

              <Button onClick={() => uploadMutation.mutate()} disabled={!canUpload || uploadMutation.isPending}
                data-testid="btn-upload-analyze" className="w-full gap-2">
                {uploadMutation.isPending
                  ? <><RefreshCw className="w-3.5 h-3.5 animate-spin" />{docFile ? "Analyzing with AI…" : "Saving…"}</>
                  : <><Sparkles className="w-3.5 h-3.5" />{docFile ? "Upload & Analyze" : "Save Document"}</>}
              </Button>
            </div>
          )}
        </div>

        {/* Training modules section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <h2 className="font-semibold text-foreground flex items-center gap-2">
              <Bot className="w-4 h-4 text-violet-500" />
              Generated Training Modules
              {pending.length > 0 && (
                <Badge className="bg-amber-100 text-amber-700 border-amber-200 text-[10px]">{pending.length} pending</Badge>
              )}
            </h2>
          </div>

          {/* Module filter tabs */}
          <div className="flex gap-2 border-b pb-0">
            {([
              { key: "all",      label: `All (${trainingModules.length})` },
              { key: "pending",  label: `Pending (${pending.length})` },
              { key: "approved", label: `Live (${approved.length})` },
              { key: "rejected", label: `Rejected (${rejected.length})` },
            ] as { key: ModFilter; label: string }[]).map(t => (
              <button key={t.key} onClick={() => setModFilter(t.key)}
                data-testid={`tab-modules-${t.key}`}
                className={`pb-2.5 text-xs font-semibold border-b-2 transition-colors px-1 ${modFilter === t.key ? "border-violet-500 text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`}>
                {t.label}
              </button>
            ))}
          </div>

          {modulesLoading ? (
            <div className="flex items-center justify-center h-32">
              <RefreshCw className="w-6 h-6 animate-spin text-muted-foreground" />
            </div>
          ) : visibleModules.length === 0 ? (
            <div className="rounded-2xl border bg-card p-10 flex flex-col items-center gap-3 text-center">
              <FileSearch2 className="w-9 h-9 text-muted-foreground/30" />
              <p className="text-sm font-medium text-muted-foreground">
                {trainingModules.length === 0 ? "No modules yet. Upload a document above to get started." : "No modules in this category."}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <AnimatePresence>
                {visibleModules.map(mod => (
                  <ModuleCard key={mod.id} mod={mod}
                    onApprove={id => approveMutation.mutate(id)}
                    onReject={id => rejectMutation.mutate(id)}
                    isActing={isActing} />
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
