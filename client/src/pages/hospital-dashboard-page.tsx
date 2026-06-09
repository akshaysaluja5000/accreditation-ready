import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/lib/auth";
import { useLocation } from "wouter";
import { format } from "date-fns";

interface DashData {
  facilityName: string;
  updatedAt: string;
  score: { overall: number; diagCompletionRate: number; finalPassRate: number; avgFinalScore: number };
  journey: { totalStaff: number; completedFullCycle: number; diagnosticTaken: number; inProgress: number; finalPassed: number; notStarted: number; avgDiagScore: number | null; avgFinalScore: number | null };
  snapshot: { name: string; role: string; diagScore: number; finalScore: number; delta: number }[];
  attention: { haventStarted: number; failedFinal: number; lowEngagement: number; diagnosticOnly: number };
  deptBreakdown: { department: string; deptIcon: string; roles: { title: string; staffCount: number; diagPct: number; avgFinalScore: number | null }[] }[];
  staffList: { id: number; name: string; role: string; diagDone: boolean; finalDone: boolean; finalScore: number | null; engagement: "green" | "amber" | "red" }[];
  bottomStats: { questionsCorrect: number; flashcardsReviewed: number; dailyActiveUsers: number; totalStaff: number; questionsSparkline: number[]; flashcardsSparkline: number[]; dauSparkline: number[]; topPerformers: { name: string; role: string; weekPoints: number; finalScore: number | null }[] };
}

function scoreStatus(n: number) {
  if (n >= 85) return "Excellent";
  if (n >= 75) return "Good Standing";
  if (n >= 65) return "Needs Attention";
  return "At Risk";
}

function journeyStateLabel(completedPct: number) {
  if (completedPct < 0.2) return "⏳ Pilot Underway · Early Stage";
  if (completedPct < 0.5) return "🚀 Gaining Momentum";
  if (completedPct < 0.8) return "📈 Nearing Completion";
  return "✅ Pilot Complete";
}

function diagPillCls(pct: number) {
  if (pct >= 85) return "dp-g";
  if (pct >= 60) return "dp-a";
  return "dp-r";
}

function scoreBarColor(n: number | null) {
  if (n === null) return "var(--border)";
  if (n >= 85) return "var(--green)";
  if (n >= 75) return "var(--amber)";
  return "var(--red)";
}

function scoreValColor(n: number | null) {
  if (n === null) return "var(--slate)";
  if (n >= 85) return "var(--green)";
  if (n >= 75) return "var(--amber)";
  return "var(--red)";
}

function normSparkline(data: number[]): number[] {
  const max = Math.max(...data, 1);
  return data.map(v => Math.max(3, Math.round((v / max) * 100)));
}

function fmtNum(n: number) { return n.toLocaleString(); }

function initials(user: any) {
  const f = user?.firstName?.[0] || "";
  const l = user?.lastName?.[0] || "";
  return (f + l).toUpperCase() || user?.username?.[0]?.toUpperCase() || "?";
}

export default function HospitalDashboardPage() {
  const { user } = useAuth();
  const [, setLocation] = useLocation();
  const { data: D, isLoading, error } = useQuery<DashData>({ queryKey: ["/api/admin/hospital-dashboard"] });

  const now = new Date();
  const hour = now.getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";
  const dateStr = format(now, "EEEE, MMMM d, yyyy");
  const firstName = (user as any)?.firstName || (user as any)?.username || "there";

  const totalStaff = D?.journey.totalStaff || 0;
  const completedPct = totalStaff > 0 ? (D?.journey.completedFullCycle || 0) / totalStaff : 0;
  const journeyPct = Math.round(completedPct * 100);

  const qSpark = normSparkline(D?.bottomStats.questionsSparkline || Array(7).fill(0));
  const fcSpark = normSparkline(D?.bottomStats.flashcardsSparkline || Array(7).fill(0));
  const dauSpark = normSparkline(D?.bottomStats.dauSparkline || Array(7).fill(0));

  if (error) {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", background: "#F2F5F9", fontFamily: "'DM Sans', sans-serif" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>⚠️</div>
          <div style={{ fontSize: 16, fontWeight: 600, color: "#B93333" }}>Unable to load dashboard</div>
          <div style={{ fontSize: 13, color: "#6B7C96", marginTop: 6 }}>Check your connection or MFA status</div>
          <button onClick={() => setLocation("/leadership")} style={{ marginTop: 16, padding: "8px 20px", background: "#1B2A4A", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer", fontSize: 13 }}>Back to Console</button>
        </div>
      </div>
    );
  }

  return (
    <div className="mosh-db" data-testid="hospital-dashboard">
      <style>{`
        .mosh-db *, .mosh-db *::before, .mosh-db *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .mosh-db {
          --navy: #1B2A4A; --gold: #C9A84C; --gold-lt: #F0D98A;
          --green: #2D7A4F; --green-bg: #EBF5EF;
          --amber: #B86E00; --amber-bg: #FEF3E2;
          --red: #B93333; --red-bg: #FDEEEC;
          --blue: #1B5FAA; --blue-bg: #EBF1FA;
          --slate: #6B7C96; --border: #E4E9F0; --bg: #F2F5F9; --white: #FFFFFF;
          font-family: 'DM Sans', sans-serif; background: var(--bg); color: var(--navy); font-size: 14px; min-height: 100vh;
        }
        .mosh-db header { background: var(--navy); height: 60px; display: flex; align-items: center; justify-content: space-between; padding: 0 28px; position: sticky; top: 0; z-index: 100; box-shadow: 0 2px 12px rgba(0,0,0,0.15); }
        .mosh-db .logo { display: flex; align-items: center; gap: 10px; cursor: pointer; }
        .mosh-db .logo-mark { width: 34px; height: 34px; border: 1.5px solid var(--gold); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-family: 'Playfair Display', serif; font-size: 12px; color: var(--gold); font-weight: 600; flex-shrink: 0; }
        .mosh-db .logo-text { font-size: 14px; color: #fff; }
        .mosh-db .logo-text strong { font-weight: 600; }
        .mosh-db .header-center { position: absolute; left: 50%; transform: translateX(-50%); font-size: 12px; color: rgba(255,255,255,0.45); pointer-events: none; }
        .mosh-db .header-right { display: flex; align-items: center; gap: 12px; }
        .mosh-db .edu-badge { background: rgba(201,168,76,0.18); border: 1px solid rgba(201,168,76,0.35); border-radius: 20px; padding: 4px 12px; font-size: 10px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; color: var(--gold-lt); }
        .mosh-db .avatar { width: 32px; height: 32px; background: var(--gold); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; color: var(--navy); flex-shrink: 0; }
        .mosh-db main { max-width: 1100px; margin: 0 auto; padding: 32px 24px 80px; display: flex; flex-direction: column; gap: 22px; }
        .mosh-db .page-header { display: flex; justify-content: space-between; align-items: flex-end; }
        .mosh-db .greeting-date { font-size: 11px; color: var(--slate); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; }
        .mosh-db .greeting-name { font-family: 'Playfair Display', serif; font-size: 26px; font-weight: 600; }
        .mosh-db .greeting-sub { font-size: 12px; color: var(--slate); margin-top: 3px; }
        .mosh-db .updated-pill { font-size: 11px; color: var(--slate); background: var(--white); border: 1px solid var(--border); border-radius: 20px; padding: 5px 12px; white-space: nowrap; }
        .mosh-db .section-label { font-size: 10px; font-weight: 600; letter-spacing: 1.4px; text-transform: uppercase; color: var(--slate); }
        .mosh-db .top-row { display: grid; grid-template-columns: 1.15fr 1fr 1fr; gap: 16px; }
        .mosh-db .score-card { background: var(--navy); border-radius: 18px; padding: 28px 28px 24px; position: relative; overflow: hidden; }
        .mosh-db .score-card::after { content: ''; position: absolute; bottom: -50px; right: -50px; width: 180px; height: 180px; border-radius: 50%; background: radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%); pointer-events: none; }
        .mosh-db .card-eyebrow { font-size: 10px; font-weight: 600; letter-spacing: 1.3px; text-transform: uppercase; color: var(--gold); margin-bottom: 10px; }
        .mosh-db .score-number { font-family: 'Playfair Display', serif; font-size: 62px; font-weight: 700; color: #fff; line-height: 1; }
        .mosh-db .score-number sup { font-size: 24px; font-family: 'DM Sans', sans-serif; font-weight: 300; color: rgba(255,255,255,0.4); }
        .mosh-db .score-status { display: inline-flex; align-items: center; gap: 6px; background: rgba(45,122,79,0.22); border: 1px solid rgba(111,207,151,0.3); border-radius: 20px; padding: 3px 10px; font-size: 11px; font-weight: 500; color: #6FCF97; margin: 8px 0 16px; }
        .mosh-db .pulse { width: 5px; height: 5px; border-radius: 50%; background: #6FCF97; animation: mosh-pulse 2s ease infinite; flex-shrink: 0; }
        @keyframes mosh-pulse { 0%,100%{opacity:1}50%{opacity:0.3} }
        .mosh-db .range-track { height: 6px; border-radius: 3px; position: relative; margin-bottom: 6px; display: flex; }
        .mosh-db .seg-r { background: #C0392B; flex: 75; border-radius: 3px 0 0 3px; }
        .mosh-db .seg-a { background: #E67E22; flex: 15; }
        .mosh-db .seg-g { background: #27AE60; flex: 10; border-radius: 0 3px 3px 0; }
        .mosh-db .range-marker { position: absolute; top: -3px; width: 12px; height: 12px; background: #fff; border-radius: 50%; border: 2px solid var(--navy); box-shadow: 0 0 0 2px #fff; transform: translateX(-50%); }
        .mosh-db .range-labels { display: flex; justify-content: space-between; font-size: 9px; color: rgba(255,255,255,0.3); margin-bottom: 14px; }
        .mosh-db .sub-scores { display: flex; flex-direction: column; gap: 8px; }
        .mosh-db .sub-row { display: flex; flex-direction: column; gap: 3px; }
        .mosh-db .sub-lbl { display: flex; justify-content: space-between; font-size: 10px; color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 0.6px; }
        .mosh-db .sub-lbl span { color: rgba(255,255,255,0.75); font-weight: 500; }
        .mosh-db .sub-bar { height: 3px; background: rgba(255,255,255,0.1); border-radius: 2px; overflow: hidden; }
        .mosh-db .sub-fill { height: 100%; border-radius: 2px; }
        .mosh-db .score-desc { font-size: 11px; color: rgba(255,255,255,0.4); line-height: 1.5; margin-top: 12px; }
        .mosh-db .wcard { background: var(--white); border: 1px solid var(--border); border-radius: 18px; padding: 24px; }
        .mosh-db .prog-state-label { display: inline-flex; align-items: center; gap: 6px; background: var(--amber-bg); border: 1px solid rgba(184,110,0,0.2); border-radius: 20px; padding: 3px 10px; font-size: 10px; font-weight: 600; color: var(--amber); letter-spacing: 0.5px; text-transform: uppercase; margin-bottom: 14px; width: fit-content; }
        .mosh-db .prog-completion-row { display: flex; align-items: baseline; gap: 6px; margin-bottom: 4px; }
        .mosh-db .prog-fraction { font-family: 'Playfair Display', serif; font-size: 32px; font-weight: 600; color: var(--navy); }
        .mosh-db .prog-fraction-label { font-size: 12px; color: var(--slate); }
        .mosh-db .prog-bar-wrap { height: 8px; background: var(--border); border-radius: 4px; overflow: hidden; margin: 8px 0 4px; }
        .mosh-db .prog-bar-fill { height: 100%; border-radius: 4px; }
        .mosh-db .prog-bar-label { display: flex; justify-content: space-between; font-size: 10px; color: var(--slate); margin-bottom: 14px; }
        .mosh-db .milestone-list { display: flex; flex-direction: column; gap: 6px; margin-bottom: 14px; }
        .mosh-db .milestone-row { display: flex; justify-content: space-between; align-items: center; font-size: 11px; }
        .mosh-db .milestone-row span:first-child { color: var(--slate); }
        .mosh-db .milestone-row span:last-child { font-weight: 600; color: var(--navy); }
        .mosh-db .prog-delta-preview { background: var(--bg); border-radius: 12px; padding: 12px 14px; border: 1px dashed var(--border); }
        .mosh-db .prog-delta-title { font-size: 10px; font-weight: 600; letter-spacing: 0.8px; text-transform: uppercase; color: var(--slate); margin-bottom: 8px; }
        .mosh-db .prog-ba-row { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; }
        .mosh-db .prog-ba-box { flex: 1; background: var(--white); border: 1px solid var(--border); border-radius: 8px; padding: 6px 10px; text-align: center; }
        .mosh-db .prog-ba-lbl { font-size: 9px; color: var(--slate); text-transform: uppercase; letter-spacing: 0.6px; }
        .mosh-db .prog-ba-val { font-family: 'Playfair Display', serif; font-size: 22px; font-weight: 600; }
        .mosh-db .prog-arrow { font-size: 16px; color: var(--slate); }
        .mosh-db .prog-caveat { font-size: 10px; color: var(--slate); line-height: 1.5; font-style: italic; margin-top: 6px; }
        .mosh-db .interim-badge { display: inline-flex; align-items: center; gap: 5px; background: var(--blue-bg); border-radius: 20px; padding: 3px 10px; font-size: 10px; font-weight: 600; color: var(--blue); letter-spacing: 0.5px; text-transform: uppercase; margin-bottom: 4px; width: fit-content; }
        .mosh-db .interim-header-row { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 14px; }
        .mosh-db .interim-sample { font-size: 11px; color: var(--slate); text-align: right; line-height: 1.4; }
        .mosh-db .interim-sample strong { color: var(--navy); }
        .mosh-db .interim-staff-list { display: flex; flex-direction: column; gap: 10px; }
        .mosh-db .interim-staff-row { }
        .mosh-db .interim-staff-meta { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 3px; }
        .mosh-db .interim-staff-name { font-size: 12px; font-weight: 500; }
        .mosh-db .interim-staff-role { font-size: 10px; color: var(--slate); margin-left: 6px; }
        .mosh-db .interim-staff-delta { font-size: 11px; font-weight: 600; color: var(--green); }
        .mosh-db .interim-bar-group { display: flex; flex-direction: column; gap: 2px; }
        .mosh-db .interim-bar-track { height: 4px; background: var(--border); border-radius: 2px; overflow: hidden; }
        .mosh-db .interim-bar-fill { height: 100%; border-radius: 2px; }
        .mosh-db .interim-bar-labels { display: flex; justify-content: space-between; font-size: 9px; color: var(--slate); }
        .mosh-db .interim-caveat { margin-top: 12px; padding-top: 10px; border-top: 1px solid var(--border); font-size: 10px; color: var(--slate); font-style: italic; line-height: 1.5; }
        .mosh-db .attention-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
        .mosh-db .alert-card { background: var(--white); border: 1px solid var(--border); border-radius: 14px; padding: 18px; border-top: 3px solid transparent; }
        .mosh-db .alert-card.red { border-top-color: var(--red); }
        .mosh-db .alert-card.amber { border-top-color: var(--amber); }
        .mosh-db .alert-card.slate { border-top-color: var(--slate); }
        .mosh-db .alert-icon { width: 30px; height: 30px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 13px; margin-bottom: 10px; }
        .mosh-db .alert-card.red .alert-icon { background: var(--red-bg); }
        .mosh-db .alert-card.amber .alert-icon { background: var(--amber-bg); }
        .mosh-db .alert-card.slate .alert-icon { background: var(--bg); }
        .mosh-db .alert-n { font-family: 'Playfair Display', serif; font-size: 34px; font-weight: 600; line-height: 1; margin-bottom: 2px; }
        .mosh-db .alert-card.red .alert-n { color: var(--red); }
        .mosh-db .alert-card.amber .alert-n { color: var(--amber); }
        .mosh-db .alert-card.slate .alert-n { color: var(--slate); }
        .mosh-db .alert-title { font-size: 12px; font-weight: 500; margin-bottom: 4px; }
        .mosh-db .alert-sub { font-size: 11px; color: var(--slate); line-height: 1.4; }
        .mosh-db .mid-row { display: grid; grid-template-columns: 1.3fr 1fr; gap: 16px; }
        .mosh-db .panel { background: var(--white); border: 1px solid var(--border); border-radius: 16px; overflow: hidden; }
        .mosh-db .panel-header { padding: 15px 20px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; }
        .mosh-db .panel-title { font-size: 13px; font-weight: 600; }
        .mosh-db .panel-sub { font-size: 11px; color: var(--slate); }
        .mosh-db .col-heads { display: grid; padding: 8px 20px; background: #FAFBFC; border-bottom: 1px solid var(--border); gap: 12px; }
        .mosh-db .dept-col-grid { grid-template-columns: 1fr 62px 100px 50px; }
        .mosh-db .staff-col-grid { grid-template-columns: 1fr 28px 28px 48px 40px; }
        .mosh-db .col-h { font-size: 9px; font-weight: 600; color: var(--slate); text-transform: uppercase; letter-spacing: 0.7px; }
        .mosh-db .col-h.r { text-align: right; }
        .mosh-db .col-h.c { text-align: center; }
        .mosh-db .dept-section-head { padding: 7px 20px; background: var(--bg); border-bottom: 1px solid var(--border); font-size: 9px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: var(--slate); }
        .mosh-db .dept-row { display: grid; grid-template-columns: 1fr 62px 100px 50px; align-items: center; gap: 12px; padding: 10px 20px; border-bottom: 1px solid var(--border); transition: background 0.12s; }
        .mosh-db .dept-row:last-child { border-bottom: none; }
        .mosh-db .dept-row:hover { background: #FAFBFC; }
        .mosh-db .dept-name { font-size: 12px; font-weight: 500; }
        .mosh-db .dept-sub { font-size: 10px; color: var(--slate); margin-top: 1px; }
        .mosh-db .diag-pill { font-size: 10px; font-weight: 600; text-align: center; padding: 2px 7px; border-radius: 20px; width: fit-content; margin: 0 auto; }
        .mosh-db .dp-g { background: var(--green-bg); color: var(--green); }
        .mosh-db .dp-a { background: var(--amber-bg); color: var(--amber); }
        .mosh-db .dp-r { background: var(--red-bg); color: var(--red); }
        .mosh-db .score-bar-wrap { height: 5px; background: var(--border); border-radius: 3px; overflow: hidden; }
        .mosh-db .score-bar-fill { height: 100%; border-radius: 3px; }
        .mosh-db .dept-score-val { font-size: 12px; font-weight: 600; text-align: right; }
        .mosh-db .staff-row { display: grid; grid-template-columns: 1fr 28px 28px 48px 40px; align-items: center; gap: 10px; padding: 10px 20px; border-bottom: 1px solid var(--border); transition: background 0.12s; }
        .mosh-db .staff-row:last-child { border-bottom: none; }
        .mosh-db .staff-row:hover { background: #FAFBFC; }
        .mosh-db .staff-name { font-size: 12px; font-weight: 500; }
        .mosh-db .staff-role-lbl { font-size: 10px; color: var(--slate); margin-top: 1px; }
        .mosh-db .chk { font-size: 13px; text-align: center; }
        .mosh-db .staff-score-val { font-size: 12px; font-weight: 600; text-align: right; }
        .mosh-db .eng-dot { width: 8px; height: 8px; border-radius: 50%; display: block; margin: 0 auto; }
        .mosh-db .bottom-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        .mosh-db .stat-card { background: var(--white); border: 1px solid var(--border); border-radius: 14px; padding: 20px; }
        .mosh-db .stat-eyebrow { font-size: 10px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; color: var(--slate); margin-bottom: 10px; }
        .mosh-db .stat-num { font-family: 'Playfair Display', serif; font-size: 36px; font-weight: 600; color: var(--navy); line-height: 1; margin-bottom: 3px; }
        .mosh-db .stat-sub { font-size: 11px; color: var(--slate); }
        .mosh-db .sparkline { height: 32px; margin-top: 12px; display: flex; align-items: flex-end; gap: 3px; }
        .mosh-db .sp { flex: 1; border-radius: 2px 2px 0 0; min-height: 3px; background: var(--blue-bg); }
        .mosh-db .sp.on { background: var(--blue); }
        .mosh-db .tp-row { display: flex; align-items: center; gap: 10px; background: var(--bg); border-radius: 10px; padding: 8px 10px; margin-top: 8px; }
        .mosh-db .tp-rank { font-family: 'Playfair Display', serif; font-size: 20px; font-weight: 700; color: var(--gold); min-width: 28px; }
        .mosh-db .tp-rank.s { color: var(--slate); font-size: 16px; }
        .mosh-db .tp-name { font-size: 12px; font-weight: 500; }
        .mosh-db .tp-pts { font-size: 11px; color: var(--slate); }
        .mosh-db .fade { animation: mosh-fadeUp 0.45s ease both; }
        .mosh-db .d1 { animation-delay: 0.05s; }
        .mosh-db .d2 { animation-delay: 0.10s; }
        .mosh-db .d3 { animation-delay: 0.15s; }
        .mosh-db .d4 { animation-delay: 0.20s; }
        .mosh-db .d5 { animation-delay: 0.25s; }
        @keyframes mosh-fadeUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 820px) {
          .mosh-db .top-row, .mosh-db .attention-row, .mosh-db .mid-row, .mosh-db .bottom-row { grid-template-columns: 1fr; }
          .mosh-db .header-center { display: none; }
        }
      `}</style>

      {/* HEADER */}
      <header>
        <div className="logo" onClick={() => setLocation("/leadership")} title="Back to Console">
          <div className="logo-mark">AR</div>
          <div className="logo-text">Accreditation <strong>Ready</strong></div>
        </div>
        <div className="header-center">{D?.facilityName || ""} &nbsp;·&nbsp; Hospital</div>
        <div className="header-right">
          <div className="edu-badge">Education Only</div>
          <div className="avatar">{initials(user)}</div>
        </div>
      </header>

      <main>

        {/* PAGE HEADER */}
        <div className="page-header fade">
          <div>
            <div className="greeting-date">{dateStr}</div>
            <div className="greeting-name">{greeting}, {firstName}.</div>
            <div className="greeting-sub">Here's how your staff are learning today.</div>
          </div>
          <div className="updated-pill">
            {isLoading ? "Loading..." : "↻ \u00a0Updated just now"}
          </div>
        </div>

        {/* TOP ROW */}
        <div className="top-row">

          {/* STAFF KNOWLEDGE SCORE */}
          <div className="score-card fade d1" data-testid="score-card">
            <div className="card-eyebrow">Staff Knowledge Score</div>
            <div className="score-number">{isLoading ? "—" : D!.score.overall}<sup>%</sup></div>
            <div className="score-status">
              <div className="pulse"></div>
              {isLoading ? "Loading" : scoreStatus(D!.score.overall)}
            </div>
            <div className="range-track">
              <div className="seg-r"></div>
              <div className="seg-a"></div>
              <div className="seg-g"></div>
              {!isLoading && D && (
                <div className="range-marker" style={{ left: `${Math.min(99, D.score.overall)}%` }}></div>
              )}
            </div>
            <div className="range-labels">
              <span>Needs Work &lt;75%</span>
              <span>On Track 75–85%</span>
              <span>Excellent 85%+</span>
            </div>
            <div className="sub-scores">
              <div className="sub-row">
                <div className="sub-lbl">Diagnostic Completion <span>{isLoading ? "—" : `${D!.score.diagCompletionRate}%`}</span></div>
                <div className="sub-bar"><div className="sub-fill" style={{ width: isLoading ? "0%" : `${D!.score.diagCompletionRate}%`, background: "#6FCF97" }}></div></div>
              </div>
              <div className="sub-row">
                <div className="sub-lbl">Final Exam Pass Rate <span>{isLoading ? "—" : `${D!.score.finalPassRate}%`}</span></div>
                <div className="sub-bar"><div className="sub-fill" style={{ width: isLoading ? "0%" : `${D!.score.finalPassRate}%`, background: "var(--gold)" }}></div></div>
              </div>
              <div className="sub-row">
                <div className="sub-lbl">Avg Final Exam Score <span>{isLoading ? "—" : `${D!.score.avgFinalScore}%`}</span></div>
                <div className="sub-bar"><div className="sub-fill" style={{ width: isLoading ? "0%" : `${D!.score.avgFinalScore}%`, background: "#F2994A" }}></div></div>
              </div>
            </div>
            <div className="score-desc">Combines diagnostic completion rate and final exam performance. Above 85% reflects strong facility-wide knowledge.</div>
          </div>

          {/* LEARNING JOURNEY PROGRESS */}
          <div className="wcard fade d2" data-testid="journey-card">
            <div className="card-eyebrow" style={{ color: "var(--navy)" }}>Learning Journey Progress</div>
            <div className="prog-state-label">
              {isLoading ? "⏳ Loading..." : journeyStateLabel(completedPct)}
            </div>
            <div className="prog-completion-row">
              <div className="prog-fraction">{isLoading ? "—" : D!.journey.completedFullCycle}</div>
              <div className="prog-fraction-label">of {isLoading ? "—" : totalStaff} staff completed full cycle</div>
            </div>
            <div className="prog-bar-wrap">
              <div className="prog-bar-fill" style={{ width: `${journeyPct}%`, background: "var(--gold)" }}></div>
            </div>
            <div className="prog-bar-label">
              <span>0%</span>
              <span style={{ color: "var(--amber)", fontWeight: 600 }}>{journeyPct}% complete</span>
              <span>Full picture at 60%+</span>
            </div>
            <div className="milestone-list">
              <div className="milestone-row"><span>🔵 Diagnostic taken</span><span>{isLoading ? "—" : `${D!.journey.diagnosticTaken} of ${totalStaff}`}</span></div>
              <div className="milestone-row"><span>🟡 Modules in progress</span><span>{isLoading ? "—" : `${D!.journey.inProgress} of ${totalStaff}`}</span></div>
              <div className="milestone-row"><span>✅ Final exam passed</span><span style={{ color: "var(--green)" }}>{isLoading ? "—" : `${D!.journey.finalPassed} of ${totalStaff}`}</span></div>
              <div className="milestone-row"><span>❌ Not yet started</span><span style={{ color: "var(--red)" }}>{isLoading ? "—" : `${D!.journey.notStarted} of ${totalStaff}`}</span></div>
            </div>
            <div className="prog-delta-preview">
              <div className="prog-delta-title">
                {isLoading || D!.journey.avgFinalScore === null ? "Improvement data — building" : "Improvement data — available"}
              </div>
              <div className="prog-ba-row">
                <div className="prog-ba-box">
                  <div className="prog-ba-lbl">Avg Diagnostic</div>
                  <div className="prog-ba-val" style={{ color: "var(--slate)" }}>
                    {isLoading || D!.journey.avgDiagScore === null ? "—" : `${D!.journey.avgDiagScore}%`}
                  </div>
                </div>
                <div className="prog-arrow">→</div>
                <div className="prog-ba-box">
                  <div className="prog-ba-lbl">Avg Final ({isLoading ? "—" : D!.journey.finalPassed} staff)</div>
                  <div className="prog-ba-val" style={{ color: "var(--green)" }}>
                    {isLoading || D!.journey.avgFinalScore === null ? "—" : `${D!.journey.avgFinalScore}%`}
                  </div>
                </div>
              </div>
              <div className="prog-caveat">
                {!isLoading && `Based on ${D!.journey.completedFullCycle} of ${totalStaff} staff who completed the full cycle. Full picture available at pilot completion.`}
              </div>
            </div>
          </div>

          {/* INTERIM IMPROVEMENT SNAPSHOT */}
          <div className="wcard fade d3" data-testid="snapshot-card">
            <div className="card-eyebrow" style={{ color: "var(--navy)" }}>Interim Improvement Snapshot</div>
            <div className="interim-header-row">
              <div className="interim-badge">📈 Early Results</div>
              <div className="interim-sample">
                <strong>{isLoading ? "—" : D!.journey.completedFullCycle} staff</strong> completed<br />full learning cycle
              </div>
            </div>
            {isLoading ? (
              <div style={{ color: "var(--slate)", fontSize: 12, padding: "20px 0" }}>Loading staff data...</div>
            ) : D!.snapshot.length === 0 ? (
              <div style={{ color: "var(--slate)", fontSize: 12, padding: "20px 0", fontStyle: "italic" }}>No staff have completed the full cycle yet.</div>
            ) : (
              <div className="interim-staff-list">
                {D!.snapshot.map((s, i) => (
                  <div key={i} className="interim-staff-row">
                    <div className="interim-staff-meta">
                      <div>
                        <span className="interim-staff-name">{s.name}</span>
                        <span className="interim-staff-role">{s.role}</span>
                      </div>
                      <div className="interim-staff-delta">+{s.delta} pts</div>
                    </div>
                    <div className="interim-bar-group">
                      <div className="interim-bar-track"><div className="interim-bar-fill" style={{ width: `${s.diagScore}%`, background: "var(--amber)" }}></div></div>
                      <div className="interim-bar-track"><div className="interim-bar-fill" style={{ width: `${s.finalScore}%`, background: "var(--green)" }}></div></div>
                      <div className="interim-bar-labels"><span>Diag {s.diagScore}%</span><span>Final {s.finalScore}%</span></div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {!isLoading && D!.snapshot.length > 0 && (
              <div className="interim-caveat">
                Showing {D!.snapshot.length} of {D!.journey.completedFullCycle} staff who completed the full cycle. Full facility picture available at pilot end.
              </div>
            )}
          </div>

        </div>

        {/* ATTENTION ROW */}
        <div className="section-label fade d2">What Needs Your Attention</div>
        <div className="attention-row fade d3">
          <div className="alert-card red" data-testid="alert-havent-started">
            <div className="alert-icon">🔴</div>
            <div className="alert-n">{isLoading ? "—" : D!.attention.haventStarted}</div>
            <div className="alert-title">Haven't Started Yet</div>
            <div className="alert-sub">No diagnostic taken · not yet in the learning journey</div>
          </div>
          <div className="alert-card red" data-testid="alert-failed-final">
            <div className="alert-icon">❌</div>
            <div className="alert-n">{isLoading ? "—" : D!.attention.failedFinal}</div>
            <div className="alert-title">Failed Final Exam</div>
            <div className="alert-sub">Scored below 75% · Guided Education Plan assigned</div>
          </div>
          <div className="alert-card amber" data-testid="alert-low-engagement">
            <div className="alert-icon">⚠️</div>
            <div className="alert-n">{isLoading ? "—" : D!.attention.lowEngagement}</div>
            <div className="alert-title">Low Engagement</div>
            <div className="alert-sub">Took diagnostic · no activity in 7+ days</div>
          </div>
          <div className="alert-card slate" data-testid="alert-diagnostic-only">
            <div className="alert-icon">📊</div>
            <div className="alert-n">{isLoading ? "—" : D!.attention.diagnosticOnly}</div>
            <div className="alert-title">Diagnostic Only</div>
            <div className="alert-sub">Completed diagnostic · final exam not yet attempted</div>
          </div>
        </div>

        {/* MIDDLE ROW */}
        <div className="mid-row fade d4">

          {/* DEPARTMENT BREAKDOWN */}
          <div className="panel" data-testid="dept-panel">
            <div className="panel-header">
              <div className="panel-title">Learning Progress by Department</div>
              <div className="panel-sub">diagnostic taken · avg final score</div>
            </div>
            <div className="col-heads dept-col-grid">
              <div className="col-h">Role / Department</div>
              <div className="col-h c">Diagnostic</div>
              <div className="col-h">Avg Final Score</div>
              <div className="col-h r">Score</div>
            </div>
            {isLoading ? (
              <div style={{ padding: "20px", color: "var(--slate)", fontSize: 12 }}>Loading...</div>
            ) : D!.deptBreakdown.length === 0 ? (
              <div style={{ padding: "20px", color: "var(--slate)", fontSize: 12, fontStyle: "italic" }}>No department data yet. Staff need to be assigned roles.</div>
            ) : (
              D!.deptBreakdown.map(dept => (
                <div key={dept.department}>
                  <div className="dept-section-head">{dept.deptIcon} {dept.department}</div>
                  {dept.roles.map(role => (
                    <div key={role.title} className="dept-row">
                      <div>
                        <div className="dept-name">{role.title}</div>
                        <div className="dept-sub">{role.staffCount} staff</div>
                      </div>
                      <div className={`diag-pill ${diagPillCls(role.diagPct)}`}>{role.diagPct}%</div>
                      <div className="score-bar-wrap">
                        <div className="score-bar-fill" style={{ width: `${role.avgFinalScore ?? 0}%`, background: scoreBarColor(role.avgFinalScore) }}></div>
                      </div>
                      <div className="dept-score-val" style={{ color: scoreValColor(role.avgFinalScore) }}>
                        {role.avgFinalScore !== null ? `${role.avgFinalScore}%` : "—"}
                      </div>
                    </div>
                  ))}
                </div>
              ))
            )}
          </div>

          {/* INDIVIDUAL STAFF STATUS */}
          <div className="panel" data-testid="staff-panel">
            <div className="panel-header">
              <div className="panel-title">Individual Staff Status</div>
              <div className="panel-sub">sorted by priority</div>
            </div>
            <div className="col-heads staff-col-grid">
              <div className="col-h">Staff Member</div>
              <div className="col-h c">Diag</div>
              <div className="col-h c">Final</div>
              <div className="col-h r">Score</div>
              <div className="col-h c">Eng</div>
            </div>
            {isLoading ? (
              <div style={{ padding: "20px", color: "var(--slate)", fontSize: 12 }}>Loading...</div>
            ) : D!.staffList.length === 0 ? (
              <div style={{ padding: "20px", color: "var(--slate)", fontSize: 12, fontStyle: "italic" }}>No staff found.</div>
            ) : (
              D!.staffList.map(s => (
                <div key={s.id} className="staff-row" data-testid={`staff-row-${s.id}`}>
                  <div>
                    <div className="staff-name">{s.name}</div>
                    <div className="staff-role-lbl">{s.role}</div>
                  </div>
                  <div className="chk">{s.diagDone ? "✅" : "❌"}</div>
                  <div className="chk">{s.finalDone ? "✅" : "—"}</div>
                  <div className="staff-score-val" style={{ color: scoreValColor(s.finalScore) }}>
                    {s.finalScore !== null ? `${s.finalScore}%` : "—"}
                  </div>
                  <div>
                    <div className="eng-dot" style={{ background: s.engagement === "green" ? "var(--green)" : s.engagement === "amber" ? "var(--amber)" : "var(--red)" }}></div>
                  </div>
                </div>
              ))
            )}
          </div>

        </div>

        {/* BOTTOM ROW */}
        <div className="section-label fade d4">Learning Activity — Pilot to Date</div>
        <div className="bottom-row fade d5">

          <div className="stat-card" data-testid="stat-questions">
            <div className="stat-eyebrow">Questions Answered Correctly</div>
            <div className="stat-num">{isLoading ? "—" : fmtNum(D!.bottomStats.questionsCorrect)}</div>
            <div className="stat-sub">across all staff · all modules</div>
            <div className="sparkline">
              {qSpark.map((h, i) => (
                <div key={i} className={`sp${i >= 4 ? " on" : ""}`} style={{ height: `${h}%` }}></div>
              ))}
            </div>
          </div>

          <div className="stat-card" data-testid="stat-flashcards">
            <div className="stat-eyebrow">Flashcards Reviewed</div>
            <div className="stat-num">{isLoading ? "—" : fmtNum(D!.bottomStats.flashcardsReviewed)}</div>
            <div className="stat-sub">spaced repetition sessions</div>
            <div className="sparkline">
              {fcSpark.map((h, i) => (
                <div key={i} className={`sp${i >= 4 ? " on" : ""}`} style={{ height: `${h}%` }}></div>
              ))}
            </div>
          </div>

          <div className="stat-card" data-testid="stat-dau">
            <div className="stat-eyebrow">Daily Active Users</div>
            <div className="stat-num">{isLoading ? "—" : D!.bottomStats.dailyActiveUsers}</div>
            <div className="stat-sub">active today · of {isLoading ? "—" : totalStaff} total staff</div>
            <div className="sparkline">
              {dauSpark.map((h, i) => (
                <div key={i} className={`sp${i >= 4 ? " on" : ""}`} style={{ height: `${h}%` }}></div>
              ))}
            </div>
          </div>

          <div className="stat-card" data-testid="stat-top-performers">
            <div className="stat-eyebrow">Top Performers This Week</div>
            {isLoading ? (
              <div style={{ color: "var(--slate)", fontSize: 12, marginTop: 8 }}>Loading...</div>
            ) : D!.bottomStats.topPerformers.length === 0 ? (
              <div style={{ color: "var(--slate)", fontSize: 12, marginTop: 8, fontStyle: "italic" }}>No activity this week yet.</div>
            ) : (
              D!.bottomStats.topPerformers.map((p, i) => (
                <div key={i} className="tp-row">
                  <div className={`tp-rank${i > 0 ? " s" : ""}`}>#{i + 1}</div>
                  <div>
                    <div className="tp-name">{p.name}</div>
                    <div className="tp-pts">{fmtNum(p.weekPoints)} pts · {p.role}{p.finalScore !== null ? ` · ${p.finalScore}%` : ""}</div>
                  </div>
                </div>
              ))
            )}
          </div>

        </div>
      </main>
    </div>
  );
}
