import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/lib/auth";
import { useLocation } from "wouter";
import { useEffect } from "react";
import { format } from "date-fns";

interface AscDashData {
  facilityName: string;
  updatedAt: string;
  readiness: {
    overall: number;
    staffTraining: number;
    policiesScore: number | null;
    statusLabel: string;
  };
  survey: {
    daysUntilWindow: number;
    windowDesc: string;
    expiresDesc: string;
    body: string;
  };
  priorities: { text: string; detail: string }[];
  attention: {
    overdueCompliance: { count: number; items: { name: string; detail: string }[] };
    expiringCerts: { count: number; items: { name: string; detail: string }[] };
    incompleteTraining: { count: number; items: { dept: string; behind: number }[] };
  };
  roleTraining: {
    roleName: string;
    code: string;
    staffCount: number;
    completionPct: number;
    staffBehind: number;
  }[];
  policyStatus: {
    name: string;
    standard: string;
    detail: string;
    status: "overdue" | "due_soon" | "current";
  }[];
  recentActivity: {
    color: "green" | "amber" | "red";
    text: string;
    time: string;
  }[];
  allowedModuleIds: string[] | null;
}

function relTime(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const min = Math.floor(diff / 60000);
  if (min < 1) return "just now";
  if (min < 60) return `${min}m ago`;
  const h = Math.floor(min / 60);
  if (h < 24) return `${h}h ago`;
  return `${Math.floor(h / 24)}d ago`;
}

function barColor(pct: number): string {
  if (pct >= 80) return "var(--asc-green)";
  if (pct >= 60) return "var(--asc-amber)";
  return "var(--asc-red)";
}

function initials(u: any): string {
  const f = u?.firstName?.[0] || "";
  const l = u?.lastName?.[0] || "";
  return (f + l).toUpperCase() || u?.username?.[0]?.toUpperCase() || "?";
}

function SubBar({ label, value, color }: { label: string; value: number | null; color: string }) {
  return (
    <div className="asc-sub-row">
      <div className="asc-sub-label">
        {label} <span>{value !== null ? `${value}%` : "—"}</span>
      </div>
      <div className="asc-sub-bar">
        {value !== null && (
          <div className="asc-sub-fill" style={{ width: `${value}%`, background: color }} />
        )}
      </div>
    </div>
  );
}

const CSS = `
.asc-db *, .asc-db *::before, .asc-db *::after { box-sizing: border-box; margin: 0; padding: 0; }
.asc-db {
  --asc-navy: #1B2A4A; --asc-gold: #C9A84C;
  --asc-green: #2D7A4F; --asc-green-bg: #EBF5EF;
  --asc-amber: #B86E00; --asc-amber-bg: #FEF3E2;
  --asc-red: #B93333; --asc-red-bg: #FDEEEC;
  --asc-blue: #1B5FAA; --asc-blue-bg: #EBF1FA;
  --asc-slate: #6B7C96; --asc-border: #E4E9F0; --asc-bg: #F2F5F9; --asc-white: #FFFFFF;
  font-family: 'DM Sans', sans-serif; background: var(--asc-bg); color: var(--asc-navy); font-size: 14px; min-height: 100vh;
}
.asc-db header {
  background: var(--asc-navy); padding: 0 28px; display: flex; align-items: center;
  justify-content: space-between; height: 60px; position: sticky; top: 0; z-index: 100;
  box-shadow: 0 2px 12px rgba(0,0,0,0.15);
}
.asc-db .asc-logo { display: flex; align-items: center; gap: 10px; cursor: pointer; }
.asc-db .asc-logo-mark {
  width: 34px; height: 34px; border: 1.5px solid var(--asc-gold); border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-family: 'Playfair Display', serif; font-size: 12px; font-weight: 600; color: var(--asc-gold);
}
.asc-db .asc-logo-text { font-size: 14px; font-weight: 400; color: #fff; }
.asc-db .asc-logo-text strong { font-weight: 600; }
.asc-db .asc-header-center {
  position: absolute; left: 50%; transform: translateX(-50%);
  font-size: 12px; color: rgba(255,255,255,0.5); letter-spacing: 0.3px; pointer-events: none;
}
.asc-db .asc-header-right { display: flex; align-items: center; gap: 14px; }
.asc-db .asc-facility-pill {
  background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.18);
  border-radius: 20px; padding: 4px 12px; font-size: 11px; color: rgba(255,255,255,0.75); font-weight: 500;
}
.asc-db .asc-avatar {
  width: 32px; height: 32px; background: var(--asc-gold); border-radius: 50%;
  display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 600; color: var(--asc-navy);
}
.asc-db main {
  max-width: 1040px; margin: 0 auto; padding: 32px 24px 60px;
  display: flex; flex-direction: column; gap: 24px;
}
.asc-db .asc-page-header {
  display: flex; justify-content: space-between; align-items: flex-end;
  animation: asc-fadeUp 0.4s ease both;
}
.asc-db .asc-page-greeting { font-size: 11px; color: var(--asc-slate); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; }
.asc-db .asc-page-title { font-family: 'Playfair Display', serif; font-size: 26px; font-weight: 600; }
.asc-db .asc-page-sub { font-size: 12px; color: var(--asc-slate); margin-top: 3px; }
.asc-db .asc-last-updated {
  font-size: 11px; color: var(--asc-slate);
  background: var(--asc-white); border: 1px solid var(--asc-border);
  border-radius: 20px; padding: 5px 12px; white-space: nowrap;
}
.asc-db .asc-top-row {
  display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;
  animation: asc-fadeUp 0.4s ease 0.05s both;
}
.asc-db .asc-score-card {
  background: var(--asc-navy); border-radius: 16px; padding: 28px 28px 24px;
  position: relative; overflow: hidden;
}
.asc-db .asc-score-card::after {
  content: ''; position: absolute; bottom: -40px; right: -40px;
  width: 140px; height: 140px; border-radius: 50%;
  background: radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%);
  pointer-events: none;
}
.asc-db .asc-eyebrow {
  font-size: 10px; font-weight: 600; letter-spacing: 1.2px; text-transform: uppercase;
  color: var(--asc-gold); margin-bottom: 10px;
}
.asc-db .asc-big-num {
  font-family: 'Playfair Display', serif; font-size: 64px; font-weight: 600;
  color: #fff; line-height: 1; margin-bottom: 4px;
}
.asc-db .asc-big-num sup {
  font-size: 28px; font-family: 'DM Sans', sans-serif; font-weight: 300;
  color: rgba(255,255,255,0.45); vertical-align: super;
}
.asc-db .asc-score-status {
  display: inline-flex; align-items: center; gap: 6px;
  background: rgba(45,122,79,0.22); border: 1px solid rgba(111,207,151,0.3);
  border-radius: 20px; padding: 3px 10px; font-size: 11px; font-weight: 500;
  color: #6FCF97; margin-bottom: 14px;
}
.asc-db .asc-score-status.warn {
  background: rgba(184,110,0,0.22); border-color: rgba(184,110,0,0.35); color: #F2994A;
}
.asc-db .asc-score-status.risk {
  background: rgba(185,51,51,0.22); border-color: rgba(185,51,51,0.35); color: #EB5757;
}
.asc-db .asc-pulse { width: 5px; height: 5px; border-radius: 50%; background: currentColor; animation: asc-pulse 2s ease infinite; }
.asc-db .asc-score-desc { font-size: 12px; color: rgba(255,255,255,0.45); line-height: 1.5; }
.asc-db .asc-sub-scores { display: flex; flex-direction: column; gap: 9px; margin-top: 18px; }
.asc-db .asc-sub-row { display: flex; flex-direction: column; gap: 3px; }
.asc-db .asc-sub-label { display: flex; justify-content: space-between; font-size: 10px; color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 0.7px; }
.asc-db .asc-sub-label span { color: rgba(255,255,255,0.7); font-weight: 500; }
.asc-db .asc-sub-bar { height: 3px; background: rgba(255,255,255,0.1); border-radius: 2px; }
.asc-db .asc-sub-fill { height: 100%; border-radius: 2px; }
.asc-db .asc-survey-card {
  background: var(--asc-white); border-radius: 16px; padding: 24px;
  border: 1px solid var(--asc-border); display: flex; flex-direction: column; justify-content: space-between;
}
.asc-db .asc-survey-card .asc-eyebrow { color: var(--asc-navy); }
.asc-db .asc-countdown-big {
  font-family: 'Playfair Display', serif; font-size: 52px; font-weight: 600;
  color: var(--asc-navy); line-height: 1; margin: 10px 0 4px;
}
.asc-db .asc-countdown-unit { font-size: 14px; color: var(--asc-slate); font-weight: 300; }
.asc-db .asc-survey-detail {
  margin-top: 16px; padding-top: 16px; border-top: 1px solid var(--asc-border);
  font-size: 11px; color: var(--asc-slate); line-height: 1.6;
}
.asc-db .asc-survey-detail strong { color: var(--asc-navy); font-weight: 500; }
.asc-db .asc-quick-card {
  background: var(--asc-white); border-radius: 16px; padding: 24px;
  border: 1px solid var(--asc-border);
}
.asc-db .asc-quick-card .asc-eyebrow { color: var(--asc-navy); margin-bottom: 12px; }
.asc-db .asc-quick-item {
  display: flex; align-items: flex-start; gap: 10px;
  padding: 8px 0; border-bottom: 1px solid var(--asc-border);
}
.asc-db .asc-quick-item:last-child { border-bottom: none; padding-bottom: 0; }
.asc-db .asc-quick-check {
  width: 18px; height: 18px; min-width: 18px;
  border: 1.5px solid var(--asc-border); border-radius: 4px; margin-top: 1px;
}
.asc-db .asc-quick-text { font-size: 12px; color: var(--asc-navy); line-height: 1.5; }
.asc-db .asc-quick-text em {
  font-style: normal; color: var(--asc-slate); font-size: 11px; display: block; margin-top: 1px;
}
.asc-db .asc-section-label {
  font-size: 10px; font-weight: 600; letter-spacing: 1.2px;
  text-transform: uppercase; color: var(--asc-slate);
  animation: asc-fadeUp 0.4s ease 0.08s both;
}
.asc-db .asc-attention-row {
  display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;
  animation: asc-fadeUp 0.4s ease 0.1s both;
}
.asc-db .asc-alert-card {
  background: var(--asc-white); border-radius: 16px; padding: 20px 20px 18px;
  border: 1px solid var(--asc-border); border-top: 3px solid transparent;
}
.asc-db .asc-alert-card.red { border-top-color: var(--asc-red); }
.asc-db .asc-alert-card.amber { border-top-color: var(--asc-amber); }
.asc-db .asc-alert-card.blue { border-top-color: var(--asc-blue); }
.asc-db .asc-alert-icon-row { display: flex; align-items: center; gap: 8px; margin-bottom: 12px; }
.asc-db .asc-alert-icon { width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 14px; }
.asc-db .asc-alert-card.red .asc-alert-icon { background: var(--asc-red-bg); }
.asc-db .asc-alert-card.amber .asc-alert-icon { background: var(--asc-amber-bg); }
.asc-db .asc-alert-card.blue .asc-alert-icon { background: var(--asc-blue-bg); }
.asc-db .asc-alert-tag {
  font-size: 10px; font-weight: 600; letter-spacing: 0.8px;
  text-transform: uppercase; padding: 2px 8px; border-radius: 10px;
}
.asc-db .asc-alert-card.red .asc-alert-tag { background: var(--asc-red-bg); color: var(--asc-red); }
.asc-db .asc-alert-card.amber .asc-alert-tag { background: var(--asc-amber-bg); color: var(--asc-amber); }
.asc-db .asc-alert-card.blue .asc-alert-tag { background: var(--asc-blue-bg); color: var(--asc-blue); }
.asc-db .asc-alert-num {
  font-family: 'Playfair Display', serif; font-size: 36px; font-weight: 600; line-height: 1; margin-bottom: 2px;
}
.asc-db .asc-alert-card.red .asc-alert-num { color: var(--asc-red); }
.asc-db .asc-alert-card.amber .asc-alert-num { color: var(--asc-slate); }
.asc-db .asc-alert-card.blue .asc-alert-num { color: var(--asc-blue); }
.asc-db .asc-alert-title { font-size: 13px; font-weight: 500; color: var(--asc-navy); margin-bottom: 6px; }
.asc-db .asc-alert-detail { font-size: 11px; color: var(--asc-slate); line-height: 1.5; }
.asc-db .asc-alert-items { margin-top: 10px; display: flex; flex-direction: column; gap: 5px; }
.asc-db .asc-alert-item {
  font-size: 11px; color: var(--asc-slate); background: var(--asc-bg);
  border-radius: 6px; padding: 5px 9px; border-left: 2px solid transparent; line-height: 1.4;
}
.asc-db .asc-alert-card.red .asc-alert-item { border-left-color: var(--asc-red); }
.asc-db .asc-alert-card.amber .asc-alert-item { border-left-color: var(--asc-amber); }
.asc-db .asc-alert-card.blue .asc-alert-item { border-left-color: var(--asc-blue); }
.asc-db .asc-alert-item strong { color: var(--asc-navy); font-weight: 500; }
.asc-db .asc-mid-row {
  display: grid; grid-template-columns: 1.3fr 1fr; gap: 16px;
  animation: asc-fadeUp 0.4s ease 0.15s both;
}
.asc-db .asc-panel {
  background: var(--asc-white); border-radius: 16px; border: 1px solid var(--asc-border); overflow: hidden;
}
.asc-db .asc-panel-header {
  padding: 16px 20px; border-bottom: 1px solid var(--asc-border);
  display: flex; justify-content: space-between; align-items: center;
}
.asc-db .asc-panel-title { font-size: 13px; font-weight: 600; color: var(--asc-navy); }
.asc-db .asc-panel-sub { font-size: 11px; color: var(--asc-slate); }
.asc-db .asc-dept-row {
  padding: 12px 20px; display: grid; grid-template-columns: 1fr 100px 44px;
  align-items: center; gap: 14px; border-bottom: 1px solid var(--asc-border); transition: background 0.12s;
}
.asc-db .asc-dept-row:last-child { border-bottom: none; }
.asc-db .asc-dept-row:hover { background: #FAFBFC; }
.asc-db .asc-dept-name { font-size: 13px; font-weight: 500; }
.asc-db .asc-dept-sub { font-size: 10px; color: var(--asc-slate); margin-top: 1px; }
.asc-db .asc-bar-wrap { height: 5px; background: var(--asc-border); border-radius: 3px; overflow: hidden; }
.asc-db .asc-bar-fill { height: 100%; border-radius: 3px; }
.asc-db .asc-dept-pct { font-size: 13px; font-weight: 600; text-align: right; }
.asc-db .asc-policy-row {
  padding: 11px 20px; border-bottom: 1px solid var(--asc-border);
  display: flex; justify-content: space-between; align-items: center; gap: 10px; transition: background 0.12s;
}
.asc-db .asc-policy-row:last-child { border-bottom: none; }
.asc-db .asc-policy-row:hover { background: #FAFBFC; }
.asc-db .asc-policy-name { font-size: 12px; font-weight: 500; color: var(--asc-navy); }
.asc-db .asc-policy-due { font-size: 10px; color: var(--asc-slate); margin-top: 1px; }
.asc-db .asc-pill {
  font-size: 10px; font-weight: 600; letter-spacing: 0.4px;
  text-transform: uppercase; padding: 3px 9px; border-radius: 20px; white-space: nowrap;
}
.asc-db .asc-pill-red { background: var(--asc-red-bg); color: var(--asc-red); }
.asc-db .asc-pill-amber { background: var(--asc-amber-bg); color: var(--asc-amber); }
.asc-db .asc-pill-green { background: var(--asc-green-bg); color: var(--asc-green); }
.asc-db .asc-activity-panel { animation: asc-fadeUp 0.4s ease 0.2s both; }
.asc-db .asc-activity-list { display: flex; flex-direction: column; }
.asc-db .asc-activity-item {
  padding: 13px 20px; display: flex; align-items: flex-start; gap: 14px;
  border-bottom: 1px solid var(--asc-border);
}
.asc-db .asc-activity-item:last-child { border-bottom: none; }
.asc-db .asc-activity-dot-wrap { display: flex; flex-direction: column; align-items: center; padding-top: 4px; }
.asc-db .asc-activity-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
.asc-db .asc-activity-content { flex: 1; }
.asc-db .asc-activity-text { font-size: 12px; color: var(--asc-navy); line-height: 1.5; }
.asc-db .asc-activity-time { font-size: 10px; color: var(--asc-slate); margin-top: 2px; }
.asc-db .asc-empty { padding: 20px; font-size: 12px; color: var(--asc-slate); text-align: center; }
.asc-db .asc-skel { background: #E4E9F0; border-radius: 8px; animation: asc-shimmer 1.5s ease infinite; }
@keyframes asc-shimmer { 0%,100%{opacity:1} 50%{opacity:0.5} }
@keyframes asc-fadeUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
@keyframes asc-pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(0.7)} }
@media (max-width: 768px) {
  .asc-db .asc-top-row, .asc-db .asc-attention-row, .asc-db .asc-mid-row { grid-template-columns: 1fr; }
  .asc-db .asc-page-header { flex-direction: column; align-items: flex-start; gap: 10px; }
  .asc-db .asc-header-center { display: none; }
}
`;

export default function AscDashboardPage() {
  const { user } = useAuth();
  const [, setLocation] = useLocation();
  const { data: D, isLoading, error } = useQuery<AscDashData>({ queryKey: ["/api/admin/asc-dashboard"], retry: 1 });

  useEffect(() => {
    if (error) setLocation("/leadership");
  }, [error]);

  const now = new Date();
  const hour = now.getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";
  const dateStr = format(now, "EEEE, MMMM d, yyyy");
  const firstName = (user as any)?.firstName || (user as any)?.username || "there";
  const updatedStr = D?.updatedAt ? relTime(D.updatedAt) : "just now";

  const statusCls = D?.readiness.statusLabel === "On Track" ? "" : D?.readiness.statusLabel === "Needs Attention" ? "warn" : "risk";
  const readinessDesc =
    !D || D.readiness.overall === 0
      ? "No staff data yet. Have your team sign in to begin tracking readiness."
      : D.readiness.overall >= 85
      ? "Your facility is in good standing. A few items may need attention before your survey window opens."
      : D.readiness.overall >= 70
      ? "Several items need attention. Review the sections below to improve your readiness score."
      : "Your facility has compliance gaps that require immediate action before the survey window opens.";

  if (error) return null;

  return (
    <div className="asc-db" data-testid="asc-dashboard">
      <style>{CSS}</style>

      {/* HEADER */}
      <header>
        <div className="asc-logo" onClick={() => setLocation("/leadership")} data-testid="asc-logo-back">
          <div className="asc-logo-mark">AR</div>
          <div className="asc-logo-text">Accreditation <strong>Ready</strong></div>
        </div>
        <div className="asc-header-center">
          {isLoading ? "Surgery Center" : (D?.facilityName || "Surgery Center")} &nbsp;·&nbsp; AAAHC
        </div>
        <div className="asc-header-right">
          <div className="asc-facility-pill">Leadership View</div>
          <div className="asc-avatar" data-testid="asc-avatar">{initials(user)}</div>
        </div>
      </header>

      <main>
        {/* PAGE HEADER */}
        <div className="asc-page-header">
          <div>
            <div className="asc-page-greeting">{dateStr}</div>
            <div className="asc-page-title">{greeting}, {firstName}.</div>
            <div className="asc-page-sub">Here's where your facility stands today.</div>
          </div>
          <div className="asc-last-updated">↻ &nbsp;Updated {updatedStr}</div>
        </div>

        {/* TOP ROW */}
        <div className="asc-top-row">

          {/* SURVEY READINESS SCORE */}
          <div className="asc-score-card" data-testid="asc-score-card">
            <div className="asc-eyebrow">Survey Readiness Score</div>
            {isLoading ? (
              <div className="asc-skel" style={{ height: 80, width: 160, marginBottom: 12 }} />
            ) : (
              <div className="asc-big-num">{D?.readiness.overall ?? 0}<sup>%</sup></div>
            )}
            <div className={`asc-score-status ${statusCls}`}>
              <div className="asc-pulse" />
              {D?.readiness.statusLabel ?? "Loading"} · AAAHC
            </div>
            <div className="asc-score-desc">{readinessDesc}</div>
            <div className="asc-sub-scores">
              <SubBar label="Staff Training" value={D?.readiness.staffTraining ?? null} color="#6FCF97" />
              <SubBar label="Policies & Documents" value={D?.readiness.policiesScore ?? null} color="var(--asc-gold)" />
              <SubBar label="Facility Logs & Records" value={null} color="#F2994A" />
            </div>
          </div>

          {/* SURVEY COUNTDOWN */}
          <div className="asc-survey-card" data-testid="asc-survey-card">
            <div>
              <div className="asc-eyebrow">Next Survey Window</div>
              {isLoading ? (
                <div className="asc-skel" style={{ height: 64, width: 100, margin: "10px 0 4px" }} />
              ) : (
                <div className="asc-countdown-big">{D?.survey.daysUntilWindow ?? "—"}</div>
              )}
              <div className="asc-countdown-unit">days until window opens</div>
            </div>
            <div className="asc-survey-detail">
              <strong>{D?.survey.windowDesc ?? "Oct–Dec 2026"}</strong> · AAAHC unannounced survey<br />
              Current accreditation expires <strong>{D?.survey.expiresDesc ?? "Feb 2027"}</strong><br />
              Accrediting body: <strong>{D?.survey.body ?? "AAAHC"}</strong>
            </div>
          </div>

          {/* PRIORITIES THIS WEEK */}
          <div className="asc-quick-card" data-testid="asc-priorities-card">
            <div className="asc-eyebrow">Your Priorities This Week</div>
            {isLoading ? (
              Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="asc-quick-item">
                  <div className="asc-skel" style={{ width: 18, height: 18, minWidth: 18, borderRadius: 4, marginTop: 1 }} />
                  <div style={{ flex: 1 }}>
                    <div className="asc-skel" style={{ height: 12, width: "80%", marginBottom: 4 }} />
                    <div className="asc-skel" style={{ height: 10, width: "60%" }} />
                  </div>
                </div>
              ))
            ) : (
              (D?.priorities || []).map((p, i) => (
                <div key={i} className="asc-quick-item" data-testid={`asc-priority-${i}`}>
                  <div className="asc-quick-check" />
                  <div className="asc-quick-text">
                    {p.text}
                    <em>{p.detail}</em>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* NEEDS ATTENTION LABEL */}
        <div className="asc-section-label">What Needs Attention</div>

        {/* ATTENTION ROW */}
        <div className="asc-attention-row">

          {/* POLICIES OVERDUE */}
          <div className="asc-alert-card red" data-testid="asc-alert-policies">
            <div className="asc-alert-icon-row">
              <div className="asc-alert-icon">📋</div>
              <div className="asc-alert-tag">Act Now</div>
            </div>
            {isLoading ? (
              <div className="asc-skel" style={{ height: 42, width: 60, marginBottom: 8 }} />
            ) : (
              <div className="asc-alert-num">{D?.attention.overdueCompliance.count ?? 0}</div>
            )}
            <div className="asc-alert-title">Policies Past Their Review Date</div>
            <div className="asc-alert-detail">These must be reviewed and signed off annually. A surveyor will look for this.</div>
            <div className="asc-alert-items">
              {!isLoading && D?.attention.overdueCompliance.count === 0 ? (
                <div className="asc-alert-item">No overdue policies · good standing</div>
              ) : (
                (D?.attention.overdueCompliance.items || []).map((item, i) => (
                  <div key={i} className="asc-alert-item"><strong>{item.name}</strong> · {item.detail}</div>
                ))
              )}
            </div>
          </div>

          {/* BLS CERTIFICATIONS */}
          <div className="asc-alert-card amber" data-testid="asc-alert-bls">
            <div className="asc-alert-icon-row">
              <div className="asc-alert-icon">🏥</div>
              <div className="asc-alert-tag">This Month</div>
            </div>
            <div className="asc-alert-num" style={{ color: "var(--asc-slate)" }}>—</div>
            <div className="asc-alert-title">Staff BLS Certifications Expiring</div>
            <div className="asc-alert-detail">At least one BLS-certified person must be present whenever patients are in the building.</div>
            <div className="asc-alert-items">
              <div className="asc-alert-item"><strong>Certification tracking</strong> · available with Full Platform</div>
            </div>
          </div>

          {/* TRAINING INCOMPLETE */}
          <div className="asc-alert-card blue" data-testid="asc-alert-training">
            <div className="asc-alert-icon-row">
              <div className="asc-alert-icon">📚</div>
              <div className="asc-alert-tag">In Progress</div>
            </div>
            {isLoading ? (
              <div className="asc-skel" style={{ height: 42, width: 60, marginBottom: 8 }} />
            ) : (
              <div className="asc-alert-num">{D?.attention.incompleteTraining.count ?? 0}</div>
            )}
            <div className="asc-alert-title">Training Modules Not Yet Completed</div>
            <div className="asc-alert-detail">No immediate risk, but completion is required before your survey window opens.</div>
            <div className="asc-alert-items">
              {!isLoading && D?.attention.incompleteTraining.count === 0 ? (
                <div className="asc-alert-item">All staff have completed training · excellent</div>
              ) : (
                <>
                  {(D?.attention.incompleteTraining.items || []).map((item, i) => (
                    <div key={i} className="asc-alert-item">
                      <strong>{item.dept}</strong> · {item.behind} staff behind
                    </div>
                  ))}
                  {D && D.attention.incompleteTraining.count > 0 && (
                    <div className="asc-alert-item">
                      <strong>{D.attention.incompleteTraining.count} staff</strong> remaining total
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        {/* MID ROW */}
        <div className="asc-mid-row">

          {/* STAFF TRAINING BY TRACK */}
          <div className="asc-panel" data-testid="asc-dept-panel">
            <div className="asc-panel-header">
              <div className="asc-panel-title">Staff Training Completion</div>
              <div className="asc-panel-sub">by training track</div>
            </div>
            {isLoading ? (
              Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="asc-dept-row">
                  <div><div className="asc-skel" style={{ height: 13, width: 140, marginBottom: 5 }} /><div className="asc-skel" style={{ height: 10, width: 90 }} /></div>
                  <div className="asc-skel" style={{ height: 5, width: "100%" }} />
                  <div className="asc-skel" style={{ height: 13, width: 36 }} />
                </div>
              ))
            ) : (D?.roleTraining || []).length === 0 ? (
              <div className="asc-empty">No staff data yet</div>
            ) : (
              (D?.roleTraining || []).map((r, i) => {
                const col = barColor(r.completionPct);
                return (
                  <div key={i} className="asc-dept-row" data-testid={`asc-dept-row-${i}`}>
                    <div>
                      <div className="asc-dept-name">
                        {r.roleName}
                        {r.code && <span style={{ fontSize: 10, color: "var(--asc-slate)", marginLeft: 4 }}>({r.code})</span>}
                      </div>
                      <div className="asc-dept-sub">
                        {r.staffCount} staff{r.staffBehind > 0 ? ` · ${r.staffBehind} behind` : " · all current"}
                      </div>
                    </div>
                    <div className="asc-bar-wrap">
                      <div className="asc-bar-fill" style={{ width: `${r.completionPct}%`, background: col }} />
                    </div>
                    <div className="asc-dept-pct" style={{ color: col }}>{r.completionPct}%</div>
                  </div>
                );
              })
            )}
          </div>

          {/* POLICY REVIEW STATUS */}
          <div className="asc-panel" data-testid="asc-policy-panel">
            <div className="asc-panel-header">
              <div className="asc-panel-title">Policy Review Status</div>
              <div className="asc-panel-sub">annual requirement</div>
            </div>
            {isLoading ? (
              Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="asc-policy-row">
                  <div><div className="asc-skel" style={{ height: 12, width: 160, marginBottom: 5 }} /><div className="asc-skel" style={{ height: 10, width: 100 }} /></div>
                  <div className="asc-skel" style={{ height: 20, width: 56, borderRadius: 20 }} />
                </div>
              ))
            ) : (D?.policyStatus || []).length === 0 ? (
              <div className="asc-empty">Policy tracking available with Full Platform</div>
            ) : (
              (D?.policyStatus || []).map((p, i) => (
                <div key={i} className="asc-policy-row" data-testid={`asc-policy-row-${i}`}>
                  <div>
                    <div className="asc-policy-name">{p.name}</div>
                    <div className="asc-policy-due">{p.detail}</div>
                  </div>
                  <div className={`asc-pill ${p.status === "overdue" ? "asc-pill-red" : p.status === "due_soon" ? "asc-pill-amber" : "asc-pill-green"}`}>
                    {p.status === "overdue" ? "Overdue" : p.status === "due_soon" ? "Due Soon" : "Current"}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* RECENT ACTIVITY */}
        <div className="asc-panel asc-activity-panel" data-testid="asc-activity-panel">
          <div className="asc-panel-header">
            <div className="asc-panel-title">Recent Activity</div>
            <div className="asc-panel-sub">last 7 days</div>
          </div>
          <div className="asc-activity-list">
            {isLoading ? (
              Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="asc-activity-item">
                  <div className="asc-activity-dot-wrap">
                    <div className="asc-skel" style={{ width: 8, height: 8, borderRadius: "50%" }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div className="asc-skel" style={{ height: 12, width: "70%", marginBottom: 5 }} />
                    <div className="asc-skel" style={{ height: 10, width: 80 }} />
                  </div>
                </div>
              ))
            ) : (D?.recentActivity || []).length === 0 ? (
              <div className="asc-empty">No activity recorded in the last 7 days</div>
            ) : (
              (D?.recentActivity || []).map((a, i) => {
                const dotColor = a.color === "green" ? "var(--asc-green)" : a.color === "amber" ? "var(--asc-amber)" : "var(--asc-red)";
                return (
                  <div key={i} className="asc-activity-item" data-testid={`asc-activity-${i}`}>
                    <div className="asc-activity-dot-wrap">
                      <div className="asc-activity-dot" style={{ background: dotColor }} />
                    </div>
                    <div className="asc-activity-content">
                      <div className="asc-activity-text">{a.text}</div>
                      <div className="asc-activity-time">{a.time}</div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
