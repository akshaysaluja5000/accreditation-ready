import { useQuery, useMutation } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { useState, useMemo, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { useAuth } from "@/lib/auth";
import { useFacilityFeatures } from "@/lib/features";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import {
  Loader2,
  Check,
  ArrowRight,
  ArrowLeft,
  AlertCircle,
  Scissors,
  Stethoscope,
  HeartPulse,
  Sparkles,
  Wrench,
  ClipboardList,
  ShieldCheck,
  GraduationCap,
  Building2,
  Users,
  ChevronLeft,
  ClipboardCheck,
  CalendarClock,
  FileText,
  Briefcase,
  DoorOpen,
  Lock,
  Zap,
  type LucideIcon,
} from "lucide-react";

import {
  ROLE_CONFIGS,
  DEPARTMENT_ORDER_BY_FACILITY,
  SCOPE_CHIP_LABELS,
  SCOPE_CHIP_TOOLTIPS,
  rolesByDepartment,
  rolesForFacility,
  type RoleConfig,
  type FacilityType,
} from "@shared/roles";
import { MODULE_IDS, MODULE_LABELS, type ModuleId } from "@shared/schema";

const LEADERSHIP_RESTRICTED_ROLES = new Set(["compliance_officer", "nurse_educator"]);

const ROLE_ICONS: Record<string, LucideIcon> = {
  // Hospital
  scrub_tech: Scissors,
  spd_tech: Sparkles,
  or_circulating_nurse: Stethoscope,
  or_manager: ClipboardList,
  pacu_nurse: HeartPulse,
  preadmission_nurse: Stethoscope,
  evs: Sparkles,
  facilities_maint: Wrench,
  compliance_officer: ShieldCheck,
  nurse_educator: GraduationCap,
  surgical_ortho_assistant: Stethoscope,
  // ASC - Leadership & Compliance
  asc_administrator: Building2,
  asc_medical_director: ShieldCheck,
  asc_director_of_nursing: ClipboardCheck,
  asc_quality_ip_coordinator: ShieldCheck,
  asc_nurse_educator: GraduationCap,
  // ASC - Front Office & Patient Access
  asc_front_desk: DoorOpen,
  asc_scheduling_coordinator: CalendarClock,
  asc_medical_records: FileText,
  // ASC - Pre-Op & PACU
  asc_pre_op_pacu_nurse: HeartPulse,
  asc_pacu_charge_nurse: ClipboardList,
  // ASC - Operating Room
  asc_or_circulating_nurse: Stethoscope,
  asc_or_manager: ClipboardList,
  asc_scrub_tech: Scissors,
  asc_surgical_assistant: Stethoscope,
  // ASC - Sterile Processing
  asc_spd_tech: Sparkles,
  asc_spd_lead: ClipboardCheck,
  // ASC - Business Office & Credentialing
  asc_credentialing_coordinator: ClipboardCheck,
  asc_billing_business: Briefcase,
  asc_materials_supply: ClipboardList,
  // ASC - Environmental & Facilities
  asc_evs: Sparkles,
  asc_facilities: Wrench,
  // ASC job-based roles (new scoped module roles)
  front_desk: DoorOpen,
  surgical_tech: Scissors,
  spd: Sparkles,
  anesthesia: Stethoscope,
  nursing_pacu: HeartPulse,
  leadership: Building2,
  // DNV NIAHO
  dnv_qm_track: ClipboardCheck,
  dnv_gov_track: Building2,
  dnv_ms_track: Stethoscope,
  dnv_ns_track: HeartPulse,
  dnv_mm_track: ClipboardList,
  dnv_ss_track: Scissors,
  dnv_pc_track: HeartPulse,
  dnv_es_track: Zap,
  dnv_pr_track: ShieldCheck,
  dnv_ic_track: FileText,
  dnv_pe_track: Wrench,
};

const DEPT_ICONS: Record<string, LucideIcon> = {
  "Operating Room": Scissors,
  "Sterile Processing": Sparkles,
  "PACU & Floor": HeartPulse,
  "Pre-Op & PACU": HeartPulse,
  "PACU, Pre-Op & Floor": HeartPulse,
  "Environmental Services": Sparkles,
  "Facilities & Maintenance": Wrench,
  "Environmental & Facilities": Wrench,
  "Leadership & Compliance": Building2,
  "Front Office & Patient Access": DoorOpen,
  "Business Office & Credentialing": Briefcase,
  "DNV NIAHO Standards": ShieldCheck,
  "AAAHC Standards": HeartPulse,
};

const SCOPE_BADGE_CLASSES: Record<RoleConfig["scope"], string> = {
  DEPT: "bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20",
  DEPT_PLUS_ALL: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
  FULL: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20",
};

const SELECTION_KEY = "mosh_pending_role_ids";

export default function RoleSelectPage() {
  const { user } = useAuth();
  const [, navigate] = useLocation();
  const { toast } = useToast();
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [showMultiRoleModal, setShowMultiRoleModal] = useState(false);
  const [showError, setShowError] = useState(false);
  const [codeModalRole, setCodeModalRole] = useState<string | null>(null);
  const [codeInput, setCodeInput] = useState("");
  const [codeError, setCodeError] = useState("");
  const [codeLoading, setCodeLoading] = useState(false);

  const isSuperAdmin = user?.leadershipRole === "super_admin";
  const { data: facilityFlags } = useFacilityFeatures();

  const facilityType: FacilityType = (user?.organizationType as FacilityType) || "hospital";
  const visibleRoles = useMemo(() => {
    const all = rolesForFacility(facilityType);
    const rv = facilityFlags?.roleVisibility;
    return all.filter((r) => {
      if (r.id.endsWith("_track")) return false; // chapter-track roles not shown in picker
      if (r.id === "facilities_maint") return rv?.facilities_maintenance === true;
      if (r.id === "preadmission_nurse") return rv?.preadmission_testing_nurse === true;
      return true;
    });
  }, [facilityType, facilityFlags]);
  const visibleIds = useMemo(() => new Set(visibleRoles.map((r) => r.id)), [visibleRoles]);

  const [step, setStep] = useState<1 | 2>(() => {
    if (user?.roleId) return 2;
    if ((user?.organizationType as FacilityType) === "asc") return 2;
    return 1;
  });

  // Determine initial facility selection:
  // - Returning users (have a roleId): pre-select their current facility.
  // - ASC/DNV users (no roleId): pre-select their current module - they bypass role selection anyway.
  // - New users coming from a solutions page: use the intended facility stored in sessionStorage.
  // - New users with no context: no pre-selection (they must actively choose).
  const initialFacility = (() => {
    if (user?.roleId) return facilityType;
    if (facilityType === "asc") return facilityType;
    try {
      const v = sessionStorage.getItem("mosh_intended_facility");
      if (v === "hospital" || v === "asc") return v as FacilityType;
    } catch {}
    return null;
  })();

  const [pendingFacility, setPendingFacility] = useState<FacilityType | null>(initialFacility);

  useEffect(() => {
    // Only keep in sync if the user already made a selection - don't auto-select for new users.
    setPendingFacility((prev) => (prev !== null ? facilityType : prev));
  }, [facilityType]);

  const { data: dbRoles, isLoading } = useQuery<{ id: number; slug: string }[]>({
    queryKey: ["/api/roles"],
  });

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(SELECTION_KEY);
      if (saved) {
        const parsed: string[] = JSON.parse(saved);
        const valid = parsed.filter((id) => visibleIds.has(id));
        if (valid.length) {
          setSelectedIds(valid);
          return;
        }
      }
    } catch {}
    // No saved sessionStorage selection - prefill from the user's already-saved role(s)
    // so a returning hospital user re-going through the wizard sees their picks pre-selected.
    if (dbRoles && user?.roleId) {
      const idToSlug = new Map<number, string>();
      dbRoles.forEach((r) => idToSlug.set(r.id, r.slug));
      const ids = [user.roleId, ...((user as any).additionalRoleIds || [])]
        .map((id: number) => idToSlug.get(id))
        .filter((slug): slug is string => Boolean(slug) && visibleIds.has(slug as string));
      if (ids.length) setSelectedIds(ids);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, facilityType, dbRoles]);

  const slugToDbId = useMemo(() => {
    const map = new Map<string, number>();
    (dbRoles || []).forEach((r) => map.set(r.slug, r.id));
    return map;
  }, [dbRoles]);

  const switchFacilityMutation = useMutation({
    mutationFn: async (organizationType: ModuleId) => {
      const res = await apiRequest("PATCH", "/api/user/organization-type", { organizationType });
      return res.json();
    },
    onSuccess: async (updatedUser) => {
      try { sessionStorage.removeItem(SELECTION_KEY); } catch {}
      queryClient.setQueryData(["/api/auth/me"], updatedUser);
      setSelectedIds([]);
      await queryClient.invalidateQueries({ queryKey: ["/api/levels"] });
      toast({
        title: "Facility module switched",
        description: `You are now using the ${MODULE_LABELS[updatedUser.organizationType as ModuleId] || updatedUser.organizationType} module.`,
      });
    },
    onError: (err: any) => {
      toast({ title: "Error", description: err.message || "Failed to switch facility", variant: "destructive" });
    },
  });

  const setRoleMutation = useMutation({
    mutationFn: async (ids: string[]) => {
      const [primary, ...rest] = ids;
      const res = await apiRequest("POST", "/api/auth/role", {
        roleSlug: primary,
        additionalRoleSlugs: rest,
      });
      return res.json();
    },
    onSuccess: (updatedUser, ids) => {
      try { sessionStorage.removeItem(SELECTION_KEY); } catch {}
      try { sessionStorage.removeItem("mosh_force_role_select"); } catch {}
      try { sessionStorage.removeItem("mosh_intended_facility"); } catch {}
      queryClient.setQueryData(["/api/auth/me"], updatedUser);
      queryClient.invalidateQueries({ queryKey: ["/api/user/assigned-chapters"] });
      queryClient.invalidateQueries({ queryKey: ["/api/user/view-scope"] });
      const primary = ROLE_CONFIGS.find((r) => r.id === ids[0]);
      if (!primary) {
        toast({ title: "Error", description: "Role configuration is missing.", variant: "destructive" });
        navigate("/role-error");
        return;
      }
      const extra = ids.length - 1;
      toast({
        title: "Role saved",
        description: extra > 0
          ? `You are set up as ${primary.title} (+${extra} more role${extra > 1 ? "s" : ""}).`
          : `You are set up as ${primary.title}.`,
      });
      window.location.assign("/");
    },
    onError: (err: any) => {
      toast({ title: "Error", description: err.message || "Failed to save role", variant: "destructive" });
    },
  });

  const grouped = useMemo(() => rolesByDepartment(facilityType), [facilityType]);
  const selectedRole = useMemo(
    () => ROLE_CONFIGS.find((r) => r.id === selectedIds[0]) || null,
    [selectedIds]
  );
  const selectableRoles = useMemo(
    () => visibleRoles.filter(r => !r.restricted || isSuperAdmin),
    [visibleRoles, isSuperAdmin]
  );

  const persist = (ids: string[]) => {
    try { sessionStorage.setItem(SELECTION_KEY, JSON.stringify(ids)); } catch {}
  };

  const handleSelect = (id: string) => {
    setShowError(false);
    if (LEADERSHIP_RESTRICTED_ROLES.has(id) && !isSuperAdmin) {
      setCodeInput("");
      setCodeError("");
      setCodeModalRole(id);
      return;
    }
    setSelectedIds((prev) => {
      let next: string[];
      if (prev.includes(id)) {
        next = prev.filter((x) => x !== id);
      } else {
        // Deselect any restricted roles before adding a non-restricted role
        const withoutRestricted = prev.filter(x => !LEADERSHIP_RESTRICTED_ROLES.has(x));
        next = [...withoutRestricted, id];
      }
      persist(next);
      return next;
    });
  };

  const handleCodeSubmit = async () => {
    if (!codeModalRole || !codeInput.trim()) return;
    setCodeLoading(true);
    setCodeError("");
    try {
      const res = await fetch("/api/leadership-code/validate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ code: codeInput.trim() }),
      });
      const data = await res.json();
      if (res.ok && data.valid) {
        setSelectedIds([codeModalRole]);
        persist([codeModalRole]);
        setCodeModalRole(null);
        setCodeInput("");
      } else {
        setCodeError(data.message || "Invalid code. Please check with your facility administrator.");
      }
    } catch {
      setCodeError("Network error. Please try again.");
    } finally {
      setCodeLoading(false);
    }
  };

  const handleContinue = () => {
    if (selectedIds.length === 0) {
      setShowError(true);
      return;
    }
    for (const id of selectedIds) {
      if (!slugToDbId.has(id)) {
        toast({ title: "Error", description: "One of your selected roles is not available. Please review.", variant: "destructive" });
        return;
      }
    }
    setRoleMutation.mutate(selectedIds);
  };

  const handleFacilityContinue = async () => {
    setShowError(false);
    if (!pendingFacility) {
      setShowError(true);
      return;
    }
    if (pendingFacility !== facilityType) {
      try {
        await switchFacilityMutation.mutateAsync(pendingFacility);
      } catch {
        return;
      }
    }
    setStep(2);
  };

  const handleFacilitySelect = async (m: FacilityType) => {
    setPendingFacility(m);
    if (m !== facilityType) {
      try {
        await switchFacilityMutation.mutateAsync(m);
      } catch {
        return;
      }
    }
    setStep(2);
  };

  const FACILITY_ACCREDITOR: Record<FacilityType, string> = {
    hospital: "The Joint Commission",
    asc: "AAAHC",
    dnv: "DNV NIAHO",
  };
  const FACILITY_DESCRIPTIONS: Record<FacilityType, string> = {
    hospital: "Inpatient hospital training aligned with The Joint Commission standards. Choose a department role to focus your chapters.",
    asc: "Ambulatory Surgery Center training aligned with the AAAHC Accreditation Handbook. Pick the chapter tracks that match your responsibilities.",
    dnv: "Inpatient hospital training aligned with DNV NIAHO standards. Choose a track to focus your compliance preparation.",
  };
  const FACILITY_ICONS: Record<FacilityType, LucideIcon> = {
    hospital: Building2,
    asc: HeartPulse,
    dnv: ShieldCheck,
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin text-primary" size={32} />
      </div>
    );
  }

  const orderForFacility = DEPARTMENT_ORDER_BY_FACILITY[facilityType] || [];
  const departmentsInOrder = orderForFacility.filter((d) => grouped[d]?.length);

  return (
    <TooltipProvider delayDuration={200}>
      <div className="min-h-screen pb-36">
        {user?.roleId && (
          <div className="max-w-4xl mx-auto px-4 pt-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                try { sessionStorage.removeItem("mosh_force_role_select"); } catch {}
                navigate("/");
              }}
              data-testid="button-role-select-back"
              className="-ml-2"
            >
              <ChevronLeft size={16} />
              Back
            </Button>
          </div>
        )}
        <div className="max-w-4xl mx-auto px-4 pt-10 md:pt-14">
          <div className="text-center mb-2">
            <Badge
              variant="outline"
              className="mb-4 px-3 py-1 text-xs font-semibold tracking-wider uppercase border-primary/30 text-primary bg-primary/5"
              data-testid="badge-step"
            >
              {step === 1
                ? (pendingFacility === "asc"
                    ? "Step 1 of 1: Choose your facility"
                    : "Step 1 of 2: Choose your facility")
                : "Step 2 of 2: Choose your role"}
            </Badge>
          </div>

          {pendingFacility !== "asc" && step === 1 && (
            <div className="flex items-center justify-center gap-2 mb-6 text-xs text-muted-foreground" data-testid="text-step-indicator">
              <span className="font-semibold text-primary">1. Choose your facility</span>
              <span aria-hidden="true">›</span>
              <span>2. Choose your role</span>
            </div>
          )}
          {step === 2 && (
            <div className="flex items-center justify-center gap-2 mb-6 text-xs text-muted-foreground" data-testid="text-step-indicator">
              <span>1. Choose your facility</span>
              <span aria-hidden="true">›</span>
              <span className="font-semibold text-primary">2. Choose your role</span>
            </div>
          )}

          <div className="text-center mb-8 md:mb-10">
            <h1
              className="text-3xl md:text-4xl font-bold mb-3 tracking-tight"
              data-testid="text-role-select-title"
            >
              {step === 1
                ? (user?.firstName ? `Welcome, ${user.firstName}` : "Welcome to MOSH")
                : "What's your role?"}
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              {step === 1
                ? "Pick the facility you work in so we can show you the right accreditation standards. You can change this anytime."
                : `Select your role so we can focus your training on the ${FACILITY_ACCREDITOR[facilityType]} standards that matter most to your work.`}
            </p>
            {step === 2 && (
              <p className="text-sm text-muted-foreground/80 max-w-xl mx-auto mt-2">
                You will go straight to the training that matches this role. You can change your role later from your profile.
              </p>
            )}
          </div>

          {step === 1 && (
            <div className="grid sm:grid-cols-2 gap-4 mb-8" data-testid="grid-facility-cards">
              {MODULE_IDS.map((m) => {
                const isSelected = pendingFacility === m;
                const isCurrent = facilityType === m;
                const FacilityIcon = FACILITY_ICONS[m];
                const roleCount = rolesForFacility(m).length;
                return (
                  <button
                    key={m}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    aria-label={`${MODULE_LABELS[m]}. ${FACILITY_DESCRIPTIONS[m]}`}
                    data-testid={`card-facility-${m}`}
                    onClick={() => handleFacilitySelect(m)}
                    className={`group relative text-left rounded-xl border-2 bg-card p-5 transition-all hover-elevate active-elevate-2 ${
                      isSelected
                        ? "border-primary ring-2 ring-primary/20 shadow-sm bg-primary/5"
                        : "border-border"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`shrink-0 rounded-lg p-3 transition-colors ${
                          isSelected
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        <FacilityIcon size={24} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-semibold text-lg leading-tight">
                            {MODULE_LABELS[m]}
                          </h3>
                          {isSelected && (
                            <div
                              className="shrink-0 rounded-full bg-primary text-primary-foreground p-0.5"
                              data-testid={`indicator-facility-selected-${m}`}
                            >
                              <Check size={14} strokeWidth={3} />
                            </div>
                          )}
                        </div>
                        <p className="text-xs font-semibold tracking-wider text-primary uppercase mt-1">
                          {FACILITY_ACCREDITOR[m]}
                        </p>
                        <p className="text-sm text-muted-foreground mt-2 leading-snug">
                          {FACILITY_DESCRIPTIONS[m]}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {roleCount > 0 && (
                            <Badge
                              variant="outline"
                              className="text-[10px] font-semibold tracking-wider px-1.5 py-0 h-5"
                            >
                              {roleCount} {roleCount === 1 ? "ROLE" : "ROLES"}
                            </Badge>
                          )}
                          {isCurrent && (
                            <Badge
                              variant="outline"
                              className="text-[10px] font-semibold tracking-wider px-1.5 py-0 h-5 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20"
                            >
                              YOUR FACILITY
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {step === 2 && (
            <div className="flex items-center justify-center gap-2 mb-6 -mt-4">
              <span className="text-xs text-muted-foreground">
                Facility: <span className="font-semibold text-foreground">{MODULE_LABELS[facilityType]}</span>
              </span>
              <button
                type="button"
                onClick={() => setStep(1)}
                data-testid="button-change-facility"
                className="text-xs text-primary hover:underline font-medium"
              >
                Change facility
              </button>
            </div>
          )}

          {step === 2 && (
          <>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            <Button
              type="button"
              variant={selectableRoles.length > 0 && selectableRoles.every(r => selectedIds.includes(r.id)) ? "default" : "outline"}
              size="sm"
              data-testid="button-select-all-roles"
              disabled={selectableRoles.length === 0}
              onClick={() => {
                setShowError(false);
                const allSelectableIds = selectableRoles.map((r) => r.id);
                const allSelected = allSelectableIds.every(id => selectedIds.includes(id));
                if (allSelected) {
                  setSelectedIds([]);
                  persist([]);
                } else {
                  setSelectedIds(allSelectableIds);
                  persist(allSelectableIds);
                }
              }}
            >
              {selectableRoles.length > 0 && selectableRoles.every(r => selectedIds.includes(r.id))
                ? "Clear all roles"
                : "Select all roles (full access)"}
            </Button>
            {selectedIds.length > 0 && !selectableRoles.every(r => selectedIds.includes(r.id)) && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                data-testid="button-clear-roles"
                onClick={() => {
                  setSelectedIds([]);
                  persist([]);
                }}
              >
                Clear selection
              </Button>
            )}
          </div>
          <p className="text-xs text-muted-foreground text-center -mt-4 mb-4 max-w-xl mx-auto">
            "Select all roles" is intended for educators and managers who need visibility across departments.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-6 text-xs text-muted-foreground" data-testid="scope-legend">
            <span className="flex items-center gap-1.5">
              <span className="inline-block px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-orange-500/10 text-orange-700 dark:text-orange-400 border border-orange-500/20">DEPT. ACCESS</span>
              Training for your department only
            </span>
            <span className="text-border">·</span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/20">DEPT + ALL</span>
              Your dept plus org-wide view
            </span>
            <span className="text-border">·</span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-primary/10 text-primary border border-primary/20">FULL ACCESS</span>
              Full org training and reporting
            </span>
          </div>

          {visibleRoles.length === 0 && (
            <div
              className="rounded-xl border-2 border-dashed border-border bg-card p-8 text-center"
              data-testid="empty-no-roles-for-facility"
            >
              <Building2 size={28} className="mx-auto text-muted-foreground mb-3" />
              <h3 className="font-semibold text-base mb-2">
                Roles for {MODULE_LABELS[facilityType] || facilityType} are coming soon
              </h3>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                We are building out role-specific training for this facility type. Switch your
                facility module below to access available training right now.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
                {MODULE_IDS.filter((m) => m !== facilityType && rolesForFacility(m).length > 0).map((m) => (
                  <Button
                    key={m}
                    variant="default"
                    size="sm"
                    data-testid={`button-switch-facility-${m}`}
                    disabled={switchFacilityMutation.isPending}
                    onClick={() => switchFacilityMutation.mutate(m)}
                  >
                    {switchFacilityMutation.isPending ? (
                      <Loader2 className="animate-spin mr-2" size={14} />
                    ) : null}
                    Switch to {MODULE_LABELS[m]}
                  </Button>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-8">
            {departmentsInOrder.map((dept) => {
              const DeptIcon = DEPT_ICONS[dept] || Users;
              return (
                <section key={dept} data-testid={`section-dept-${dept.toLowerCase().replace(/\s+/g, "-")}`}>
                  <div className="flex items-center gap-2 mb-4 px-1">
                    <DeptIcon size={16} className="text-muted-foreground" />
                    <h2 className="text-xs font-bold tracking-widest text-muted-foreground uppercase">
                      {dept}
                    </h2>
                    <div className="flex-1 h-px bg-border ml-2" />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {grouped[dept].map((role) => {
                      const isSelected = selectedIds.includes(role.id);
                      const order = selectedIds.indexOf(role.id);
                      const isPrimary = order === 0;
                      const RoleIcon = ROLE_ICONS[role.id] || Users;
                      const isRestricted = !!role.restricted && !isSuperAdmin;
                      return (
                        <button
                          key={role.id}
                          type="button"
                          role="checkbox"
                          aria-checked={isSelected}
                          aria-label={`${role.title}. ${role.description}. ${SCOPE_CHIP_TOOLTIPS[role.scope]}`}
                          data-testid={`card-role-${role.id}`}
                          onClick={() => handleSelect(role.id)}
                          className={`group relative text-left rounded-xl border-2 bg-card p-4 transition-all hover-elevate active-elevate-2 ${
                            isSelected
                              ? "border-primary ring-2 ring-primary/20 shadow-sm bg-primary/5"
                              : isRestricted
                              ? "border-amber-300 dark:border-amber-700/60 bg-amber-50/60 dark:bg-amber-900/10"
                              : "border-border"
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div
                              className={`shrink-0 rounded-lg p-2.5 transition-colors ${
                                isSelected
                                  ? "bg-primary text-primary-foreground"
                                  : isRestricted
                                  ? "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400"
                                  : "bg-muted text-muted-foreground"
                              }`}
                            >
                              <RoleIcon size={20} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-2">
                                <h3 className="font-semibold text-base leading-tight">
                                  {role.title}
                                </h3>
                                {isSelected ? (
                                  <div className="shrink-0 flex items-center gap-1">
                                    {isPrimary && selectedIds.length > 1 && (
                                      <span
                                        className="text-[9px] font-bold tracking-wider uppercase rounded-full bg-primary/15 text-primary px-1.5 py-0.5"
                                        data-testid={`badge-primary-${role.id}`}
                                      >
                                        Primary
                                      </span>
                                    )}
                                    <div
                                      className="rounded-full bg-primary text-primary-foreground p-0.5"
                                      data-testid={`indicator-selected-${role.id}`}
                                    >
                                      <Check size={14} strokeWidth={3} />
                                    </div>
                                  </div>
                                ) : isRestricted ? (
                                  <div className="shrink-0 flex items-center gap-1" data-testid={`lock-${role.id}`}>
                                    <span className="text-[10px] font-semibold text-amber-600 dark:text-amber-400">Leadership role</span>
                                    <div className="rounded-full bg-amber-100 dark:bg-amber-900/40 p-1">
                                      <Lock size={12} className="text-amber-600 dark:text-amber-400" />
                                    </div>
                                  </div>
                                ) : null}
                              </div>
                              <p className="text-sm text-muted-foreground mt-1 leading-snug">
                                {role.description}
                              </p>
                              <div className="flex flex-wrap gap-1.5 mt-3">
                                <Badge
                                  variant="outline"
                                  className="text-[10px] font-semibold tracking-wider px-1.5 py-0 h-5"
                                >
                                  {role.department.toUpperCase()}
                                </Badge>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <span
                                      onClick={(e) => e.stopPropagation()}
                                      className="inline-block"
                                      data-testid={`chip-scope-${role.id}`}
                                    >
                                      <Badge
                                        variant="outline"
                                        className={`text-[10px] font-semibold tracking-wider px-1.5 py-0 h-5 cursor-help ${SCOPE_BADGE_CLASSES[role.scope]}`}
                                      >
                                        {SCOPE_CHIP_LABELS[role.scope]}
                                      </Badge>
                                    </span>
                                  </TooltipTrigger>
                                  <TooltipContent side="top" className="max-w-xs">
                                    <p className="text-xs">{SCOPE_CHIP_TOOLTIPS[role.scope]}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </div>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setShowMultiRoleModal(true)}
              data-testid="button-multi-role"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-primary/30 bg-primary/5 text-sm font-semibold text-primary hover:bg-primary/10 hover:border-primary/50 transition-colors"
            >
              <Users size={15} />
              I work in more than one role
            </button>
            <p className="text-xs text-muted-foreground mt-2">
              SPD techs who also cover OR duties, or staff who float across departments, should use this.
            </p>
          </div>

          {/* Inline continue — always visible regardless of viewport */}
          <div className="mt-10 mb-4 flex flex-col items-center gap-3">
            {showError && selectedIds.length === 0 && (
              <p className="text-sm text-destructive font-medium flex items-center gap-1.5">
                <AlertCircle size={15} />
                Select at least one role to continue.
              </p>
            )}
            <Button
              size="lg"
              className="w-full max-w-xs gap-2"
              data-testid="button-confirm-role-inline"
              disabled={setRoleMutation.isPending}
              onClick={handleContinue}
            >
              {setRoleMutation.isPending ? (
                <>
                  <Loader2 className="animate-spin" size={16} /> Saving...
                </>
              ) : (
                <>
                  Continue <ArrowRight size={16} />
                </>
              )}
            </Button>
          </div>
          </>
          )}
        </div>

        <div className="fixed bottom-0 left-0 right-0 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 z-10" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
          <div className="max-w-4xl mx-auto px-4 py-4">
            {step === 1 && showError && !pendingFacility && (
              <div
                role="alert"
                data-testid="alert-no-facility-selection"
                className="mb-3 flex items-center gap-2 text-sm text-destructive font-medium"
              >
                <AlertCircle size={16} />
                <span>Please select your facility type to continue.</span>
              </div>
            )}
            {step === 2 && showError && selectedIds.length === 0 && (
              <div
                role="alert"
                data-testid="alert-no-selection"
                className="mb-3 flex items-center gap-2 text-sm text-destructive font-medium"
              >
                <AlertCircle size={16} />
                <span>Select at least one role to continue.</span>
              </div>
            )}
            <div className="flex items-center justify-between gap-4">
              {step === 2 && (
                <Button
                  variant="outline"
                  size="lg"
                  className="shrink-0 gap-2"
                  data-testid="button-back-to-facility"
                  onClick={() => setStep(1)}
                >
                  <ArrowLeft size={16} /> Back
                </Button>
              )}
              <div className="min-w-0 flex-1">
                {step === 1 ? (
                  <div data-testid="text-facility-summary">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                      Selected facility
                    </p>
                    {pendingFacility ? (
                      <>
                        <p className="font-semibold truncate">
                          {MODULE_LABELS[pendingFacility]}
                          <span className="text-muted-foreground font-normal">
                            {" "}· {FACILITY_ACCREDITOR[pendingFacility]}
                          </span>
                        </p>
                      </>
                    ) : (
                      <p className="text-sm text-muted-foreground">
                        Choose Hospital or ASC above
                      </p>
                    )}
                  </div>
                ) : selectedRole ? (
                  <div data-testid="text-role-summary">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                      {selectedIds.length > 1
                        ? `Selected (${selectedIds.length} roles · primary first)`
                        : "Selected role"}
                    </p>
                    <p className="font-semibold truncate">
                      {selectedRole.title}
                      {selectedIds.length > 1 && (
                        <span className="text-muted-foreground font-normal">
                          {" "}+ {selectedIds.length - 1} more
                        </span>
                      )}
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                      No role selected
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Choose one or more roles above to continue
                    </p>
                  </div>
                )}
              </div>
              {step === 1 ? (
                <Button
                  size="lg"
                  className="shrink-0 gap-2"
                  data-testid="button-confirm-facility"
                  disabled={switchFacilityMutation.isPending || !pendingFacility}
                  onClick={handleFacilityContinue}
                >
                  {switchFacilityMutation.isPending ? (
                    <>
                      <Loader2 className="animate-spin" size={16} /> Saving...
                    </>
                  ) : (
                    <>
                      Continue to roles <ArrowRight size={16} />
                    </>
                  )}
                </Button>
              ) : (
                <Button
                  size="lg"
                  className="shrink-0 gap-2"
                  data-testid="button-confirm-role"
                  disabled={setRoleMutation.isPending}
                  onClick={handleContinue}
                >
                  {setRoleMutation.isPending ? (
                    <>
                      <Loader2 className="animate-spin" size={16} /> Saving...
                    </>
                  ) : (
                    <>
                      Continue <ArrowRight size={16} />
                    </>
                  )}
                </Button>
              )}
            </div>
          </div>
        </div>

        <Dialog open={showMultiRoleModal} onOpenChange={setShowMultiRoleModal}>
          <DialogContent data-testid="dialog-multi-role">
            <DialogHeader>
              <DialogTitle>Work in more than one role?</DialogTitle>
              <DialogDescription asChild>
                <div className="pt-2 text-sm leading-relaxed space-y-3">
                  <p>
                    Tap every role you fill. You can pick as many as you need. Tap a role again to remove it.
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <strong>Your first pick is your primary role.</strong> It is what we will use to label your training.
                    </li>
                    <li>
                      We will combine the chapters from every role you select so your training covers all of your work.
                    </li>
                    <li>
                      You can update your roles anytime from your profile.
                    </li>
                  </ul>
                </div>
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                onClick={() => setShowMultiRoleModal(false)}
                data-testid="button-multi-role-close"
              >
                Got it
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Leadership Role Code Modal */}
        {codeModalRole && (
          <div
            className="fixed inset-0 z-[200] bg-black/50 flex items-center justify-center p-4"
            onClick={() => setCodeModalRole(null)}
          >
            <div
              className="w-full max-w-sm bg-white dark:bg-card rounded-2xl border border-border shadow-2xl p-6 flex flex-col gap-4"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-start gap-3">
                <div className="w-11 h-11 rounded-full bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center shrink-0">
                  <Lock size={20} className="text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <h2 className="text-lg font-black leading-tight">Leadership Access Required</h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    {ROLE_CONFIGS.find(r => r.id === codeModalRole)?.title} requires an access code provided by your facility administrator.
                  </p>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Access Code</p>
                <input
                  type="text"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm font-mono tracking-widest uppercase focus:outline-none focus:ring-2 focus:ring-primary/40 placeholder:text-muted-foreground placeholder:normal-case placeholder:tracking-normal"
                  placeholder="e.g. ARLD-XXXX-XXXX"
                  value={codeInput}
                  onChange={e => { setCodeInput(e.target.value.toUpperCase()); setCodeError(""); }}
                  onKeyDown={e => { if (e.key === "Enter") handleCodeSubmit(); }}
                  autoFocus
                  data-testid="input-leadership-code"
                />
                {codeError && (
                  <p className="text-xs text-destructive mt-1.5 flex items-center gap-1" data-testid="text-code-error">
                    <AlertCircle size={12} /> {codeError}
                  </p>
                )}
              </div>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1 rounded-xl font-bold"
                  onClick={() => setCodeModalRole(null)}
                  data-testid="button-cancel-code"
                >
                  Cancel
                </Button>
                <Button
                  className="flex-1 rounded-xl font-bold"
                  disabled={!codeInput.trim() || codeLoading}
                  onClick={handleCodeSubmit}
                  data-testid="button-submit-code"
                >
                  {codeLoading ? <Loader2 className="animate-spin" size={14} /> : "Unlock Role"}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </TooltipProvider>
  );
}
