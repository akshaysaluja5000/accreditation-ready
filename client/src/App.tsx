import { Switch, Route, useLocation, Redirect } from "wouter";
import { useEffect, Component, type ReactNode } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider, useQuery } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider, useAuth } from "@/lib/auth";
import { AppShell } from "@/components/app-shell";
import AuthPage from "@/pages/auth-page";
import LandingPage from "@/pages/landing-page";
import DashboardPage from "@/pages/dashboard-page";
import PlayPage from "@/pages/play-page";
import StudyPage from "@/pages/study-page";
import ProfilePage from "@/pages/profile-page";
import AdminPage from "@/pages/admin-page";
import LeaderboardPage from "@/pages/leaderboard-page";
import HandbookPage from "@/pages/handbook-page";
import DeepDiveSelectPage from "@/pages/deep-dive-select-page";
import DeepDivePage from "@/pages/deep-dive-page";
import DiagnosticQuizPage from "@/pages/diagnostic-quiz-page";
import MasteryExamPage from "@/pages/mastery-exam-page";
import AscPretestPage from "@/pages/asc-pretest-page";
import AscPosttestPage from "@/pages/asc-posttest-page";
import DnvPretestPage from "@/pages/dnv-pretest-page";
import DnvPosttestPage from "@/pages/dnv-posttest-page";
import RoleSelectPage from "@/pages/role-select-page";
import CorrectiveActionPage from "@/pages/corrective-action-page";
import ExecutiveReportPage from "@/pages/executive-report-page";
import FlashcardReviewPage from "@/pages/flashcard-review-page";
import LeadershipHubPage from "@/pages/leadership-hub-page";
import { HospitalsPage, AscPage } from "@/pages/solutions-page";
import { Button } from "@/components/ui/button";
import { AlertCircle, Lock } from "lucide-react";
import TermsPage from "@/pages/terms-page";
import NotFound from "@/pages/not-found";
import MfaSetupPage from "@/pages/mfa-setup-page";
import MfaVerifyPage from "@/pages/mfa-verify-page";
import EducatorHubPage from "@/pages/educator-hub-page";
import RiskAssessmentPage from "@/pages/risk-assessment-page";
import ExecutiveComplianceConsolePage from "@/pages/executive-compliance-console-page";
import SurveyReadinessPage from "@/pages/survey-readiness-page";
import StaffLearningPage from "@/pages/staff-learning-page";
import RegulatoryWatchPage from "@/pages/regulatory-watch-page";
import ExecutiveBriefPage from "@/pages/executive-brief-page";
import MyLogEntriesPage from "@/pages/my-log-entries-page";
import HospitalDashboardPage from "@/pages/hospital-dashboard-page";
import AscDashboardPage from "@/pages/asc-dashboard-page";
import ComplianceTasksPage from "@/pages/compliance-tasks-page";
import ContentIntelligencePage from "@/pages/content-intelligence-page";
import AscWallChartPage from "@/pages/asc-wall-chart-page";
import AscChecklistPage from "@/pages/asc-checklist-page";
import AscDocumentVaultPage from "@/pages/asc-document-vault-page";
import { Loader2 } from "lucide-react";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);
  return null;
}

const LEADERSHIP_RANK: Record<string, number> = {
  learner: 0, educator: 1, director: 2, ceo: 3, admin: 4, super_admin: 5,
};

function getEffectiveRole(user: { isAdmin: boolean; leadershipRole?: string | null; username?: string | null }): string {
  const lr = (user.leadershipRole as string) || "learner";
  if (user.isAdmin && (LEADERSHIP_RANK[lr] ?? 0) < LEADERSHIP_RANK["admin"]) return "admin";
  return lr;
}

function ProtectedRoute({ component: Component }: { component: () => JSX.Element }) {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <AppShell>
        <div className="flex flex-col items-center justify-center py-32 gap-4">
          <Loader2 size={32} className="animate-spin text-primary" />
          <p className="text-muted-foreground font-medium">Loading...</p>
        </div>
      </AppShell>
    );
  }

  if (!user) {
    return <Redirect to="/auth" />;
  }

  // ASC users do not have roles - chapters are universal by accreditor, not by role.
  const ascUser = user.organizationType === "asc";
  // Force the facility wizard right after login (flag set in auth-page) so the user
  // re-confirms hospital vs ASC every session, even when going directly to a deep-linked route.
  const forceRoleSelect = (() => {
    try { return sessionStorage.getItem("mosh_force_role_select") === "1"; } catch { return false; }
  })();
  const needsSetup = !ascUser && !user.roleId;
  if (!user.isAdmin && (needsSetup || forceRoleSelect)) {
    return <Redirect to="/role-select" />;
  }

  return <AppShell><Component /></AppShell>;
}

function LeadershipRoute({ component: Component, minRole = "director" }: { component: () => JSX.Element; minRole?: string }) {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <AppShell>
        <div className="flex flex-col items-center justify-center py-32 gap-4">
          <Loader2 size={32} className="animate-spin text-primary" />
          <p className="text-muted-foreground font-medium">Loading...</p>
        </div>
      </AppShell>
    );
  }

  if (!user) return <Redirect to="/auth" />;

  const effective = getEffectiveRole(user);
  if ((LEADERSHIP_RANK[effective] ?? 0) < (LEADERSHIP_RANK[minRole] ?? 0)) {
    return (
      <AppShell>
        <div className="min-h-screen flex items-center justify-center p-6">
          <div className="max-w-sm text-center flex flex-col items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-destructive/15 flex items-center justify-center">
              <AlertCircle size={28} className="text-destructive" />
            </div>
            <h2 className="text-xl font-bold">Access Restricted</h2>
            <p className="text-sm text-muted-foreground">This page requires a leadership role. Contact your administrator for access.</p>
            <Button variant="outline" onClick={() => window.history.back()}>Go Back</Button>
          </div>
        </div>
      </AppShell>
    );
  }

  return <AppShell><Component /></AppShell>;
}

function EducatorRoute({ component: Component }: { component: () => JSX.Element }) {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <AppShell>
        <div className="flex flex-col items-center justify-center py-32 gap-4">
          <Loader2 size={32} className="animate-spin text-primary" />
          <p className="text-muted-foreground font-medium">Loading...</p>
        </div>
      </AppShell>
    );
  }

  if (!user) return <Redirect to="/auth" />;

  const effective = getEffectiveRole(user);
  if ((LEADERSHIP_RANK[effective] ?? 0) < LEADERSHIP_RANK["educator"]) {
    return (
      <AppShell>
        <div className="min-h-screen flex items-center justify-center p-6">
          <div className="max-w-sm text-center flex flex-col items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-destructive/15 flex items-center justify-center">
              <AlertCircle size={28} className="text-destructive" />
            </div>
            <h2 className="text-xl font-bold">Access Restricted</h2>
            <p className="text-sm text-muted-foreground">This page requires an educator role or above.</p>
            <Button variant="outline" onClick={() => window.history.back()}>Go Back</Button>
          </div>
        </div>
      </AppShell>
    );
  }

  return <AppShell><Component /></AppShell>;
}

function ComplianceModeRoute({ component: Component, minRole = "director" }: { component: () => JSX.Element; minRole?: string }) {
  const { user, isLoading } = useAuth();
  const { data: facilitySettings, isLoading: settingsLoading } = useQuery<{ complianceMode: string }>({
    queryKey: ["/api/facility/settings"],
    enabled: !!user,
  });

  if (isLoading || settingsLoading) {
    return (
      <AppShell>
        <div className="flex flex-col items-center justify-center py-32 gap-4">
          <Loader2 size={32} className="animate-spin text-primary" />
          <p className="text-muted-foreground font-medium">Loading...</p>
        </div>
      </AppShell>
    );
  }

  if (!user) return <Redirect to="/auth" />;

  const effective = getEffectiveRole(user);
  if ((LEADERSHIP_RANK[effective] ?? 0) < (LEADERSHIP_RANK[minRole] ?? 0)) {
    return (
      <AppShell>
        <div className="min-h-screen flex items-center justify-center p-6">
          <div className="max-w-sm text-center flex flex-col items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-destructive/15 flex items-center justify-center">
              <AlertCircle size={28} className="text-destructive" />
            </div>
            <h2 className="text-xl font-bold">Access Restricted</h2>
            <p className="text-sm text-muted-foreground">This page requires a leadership role.</p>
            <Button variant="outline" onClick={() => window.history.back()}>Go Back</Button>
          </div>
        </div>
      </AppShell>
    );
  }

  if (facilitySettings?.complianceMode !== "full_platform") {
    return <Redirect to="/leadership" />;
  }

  return <AppShell><Component /></AppShell>;
}

function QuizDisabledRoute() {
  const { user, isLoading } = useAuth();
  const [, navigate] = useLocation();

  if (isLoading) {
    return (
      <AppShell>
        <div className="flex flex-col items-center justify-center py-32 gap-4">
          <Loader2 size={32} className="animate-spin text-primary" />
          <p className="text-muted-foreground font-medium">Loading...</p>
        </div>
      </AppShell>
    );
  }

  if (!user) return <Redirect to="/auth" />;

  return (
    <AppShell>
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-sm text-center flex flex-col items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center">
            <Lock size={28} className="text-muted-foreground" />
          </div>
          <h2 className="text-xl font-bold">Temporarily Unavailable</h2>
          <p className="text-sm text-muted-foreground">
            Practice quizzes, the diagnostic quiz, flashcards, chapter overviews, and the handbook are temporarily disabled.
          </p>
          <Button data-testid="button-quiz-disabled-back" onClick={() => navigate("/")}>Back to Dashboard</Button>
        </div>
      </div>
    </AppShell>
  );
}

function AuthRoute() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 size={32} className="animate-spin text-primary" />
      </div>
    );
  }

  if (user) {
    return <Redirect to="/" />;
  }

  return <AuthPage />;
}

function HomeRoute() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <AppShell>
        <div className="flex flex-col items-center justify-center py-32 gap-4">
          <Loader2 size={32} className="animate-spin text-primary" />
          <p className="text-muted-foreground font-medium">Loading...</p>
        </div>
      </AppShell>
    );
  }

  if (user) {
    const forceRoleSelect = (() => {
      try { return sessionStorage.getItem("mosh_force_role_select") === "1"; } catch { return false; }
    })();
    // ASC users have no role - only require role-select if hospital user without role, OR if forced (just logged in).
    const ascUser = user.organizationType === "asc";
    const needsSetup = !ascUser && !user.roleId;
    if (!user.isAdmin && (needsSetup || forceRoleSelect)) {
      return <Redirect to="/role-select" />;
    }
    try { sessionStorage.removeItem("mosh_force_role_select"); } catch {}

    // Role-based landing: CEO/Director → Leadership Hub (which routes further based on compliance mode)
    // admin/super_admin (rank 4-5) land on the training dashboard - they use the hub manually
    const effective = getEffectiveRole(user);
    const rank = LEADERSHIP_RANK[effective] ?? 0;
    if (rank === LEADERSHIP_RANK["ceo"]) return <Redirect to="/leadership" />;
    if (rank === LEADERSHIP_RANK["director"]) return <Redirect to="/leadership" />;

    return <AppShell><DashboardPage /></AppShell>;
  }

  return <LandingPage />;
}

function RoleErrorRoute() {
  const [, navigate] = useLocation();
  return (
    <AppShell>
      <div className="flex items-center justify-center p-6 py-20">
        <div className="max-w-md text-center flex flex-col items-center gap-4">
          <div className="rounded-full bg-destructive/20 text-destructive p-3">
            <AlertCircle size={28} />
          </div>
          <h1 className="text-2xl font-bold text-foreground" data-testid="text-role-error-title">
            We could not start your training
          </h1>
          <p className="text-muted-foreground">
            The role you selected is not available. Please choose a different role to continue.
          </p>
          <Button data-testid="button-role-error-change" onClick={() => navigate("/role-select")}>
            Change role
          </Button>
        </div>
      </div>
    </AppShell>
  );
}

function RoleSelectRoute() {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return (
      <AppShell>
        <div className="flex flex-col items-center justify-center py-32 gap-4">
          <Loader2 size={32} className="animate-spin text-primary" />
          <p className="text-muted-foreground font-medium">Loading...</p>
        </div>
      </AppShell>
    );
  }
  if (!user) return <Redirect to="/auth" />;
  return <AppShell><RoleSelectPage /></AppShell>;
}

function Router() {
  return (
    <>
    <ScrollToTop />
    <Switch>
      <Route path="/auth" component={AuthRoute} />
      <Route path="/terms" component={TermsPage} />
      <Route path="/hospitals" component={HospitalsPage} />
      <Route path="/asc" component={AscPage} />
      <Route path="/role-select" component={RoleSelectRoute} />
      <Route path="/role-error" component={RoleErrorRoute} />
      <Route path="/" component={HomeRoute} />
      <Route path="/dashboard">
        {() => <ProtectedRoute component={DashboardPage} />}
      </Route>
      <Route path="/play/:levelId">
        {() => <QuizDisabledRoute />}
      </Route>
      <Route path="/study/:levelId">
        {() => <QuizDisabledRoute />}
      </Route>
      <Route path="/handbook/:levelId">
        {() => <QuizDisabledRoute />}
      </Route>
      <Route path="/handbook">
        {() => <QuizDisabledRoute />}
      </Route>
      <Route path="/deep-dive">
        {() => <QuizDisabledRoute />}
      </Route>
      <Route path="/deep-dive/:levelId">
        {() => <QuizDisabledRoute />}
      </Route>
      <Route path="/diagnostic">
        {() => <QuizDisabledRoute />}
      </Route>
      <Route path="/mastery">
        {() => <ProtectedRoute component={MasteryExamPage} />}
      </Route>
      <Route path="/asc-pretest">
        {() => <QuizDisabledRoute />}
      </Route>
      <Route path="/asc-posttest">
        {() => <ProtectedRoute component={AscPosttestPage} />}
      </Route>
      <Route path="/dnv-pretest">
        {() => <QuizDisabledRoute />}
      </Route>
      <Route path="/dnv-posttest">
        {() => <ProtectedRoute component={DnvPosttestPage} />}
      </Route>
      <Route path="/leaderboard">
        {() => <ProtectedRoute component={LeaderboardPage} />}
      </Route>
      <Route path="/profile">
        {() => <ProtectedRoute component={ProfilePage} />}
      </Route>
      <Route path="/leadership">
        {() => <LeadershipRoute component={LeadershipHubPage} minRole="director" />}
      </Route>
      <Route path="/hospital-dashboard">
        {() => <LeadershipRoute component={HospitalDashboardPage} minRole="director" />}
      </Route>
      <Route path="/asc-dashboard">
        {() => <LeadershipRoute component={AscDashboardPage} minRole="director" />}
      </Route>
      <Route path="/admin">
        {() => <LeadershipRoute component={AdminPage} minRole="director" />}
      </Route>
      <Route path="/corrective-actions">
        {() => <LeadershipRoute component={CorrectiveActionPage} minRole="director" />}
      </Route>
      <Route path="/executive-report">
        {() => <LeadershipRoute component={ExecutiveReportPage} minRole="director" />}
      </Route>
      <Route path="/flashcard-review">
        {() => <QuizDisabledRoute />}
      </Route>
      <Route path="/asc-wall-chart">
        {() => <ProtectedRoute component={AscWallChartPage} />}
      </Route>
      <Route path="/asc-checklist">
        {() => <ProtectedRoute component={AscChecklistPage} />}
      </Route>
      <Route path="/asc-document-vault">
        {() => <ProtectedRoute component={AscDocumentVaultPage} />}
      </Route>
      <Route path="/mfa-setup" component={MfaSetupPage} />
      <Route path="/mfa-verify" component={MfaVerifyPage} />
      <Route path="/educator">
        {() => <EducatorRoute component={EducatorHubPage} />}
      </Route>
      <Route path="/risk-assessment">
        {() => <ProtectedRoute component={RiskAssessmentPage} />}
      </Route>
      <Route path="/executive-console">
        {() => <LeadershipRoute component={ExecutiveComplianceConsolePage} minRole="ceo" />}
      </Route>
      <Route path="/staff-learning">
        {() => <ComplianceModeRoute component={StaffLearningPage} minRole="director" />}
      </Route>
      <Route path="/regulatory-watch">
        {() => <ComplianceModeRoute component={RegulatoryWatchPage} minRole="director" />}
      </Route>
      <Route path="/executive-brief">
        {() => <ComplianceModeRoute component={ExecutiveBriefPage} minRole="ceo" />}
      </Route>
      <Route path="/my-log-entries">
        {() => <ProtectedRoute component={MyLogEntriesPage} />}
      </Route>
      <Route path="/compliance-tasks">
        {() => <ComplianceModeRoute component={ComplianceTasksPage} minRole="director" />}
      </Route>
      <Route path="/content-intelligence">
        {() => <ComplianceModeRoute component={ContentIntelligencePage} minRole="director" />}
      </Route>
      <Route path="/survey-readiness">
        {() => <ComplianceModeRoute component={SurveyReadinessPage} minRole="director" />}
      </Route>
      <Route component={NotFound} />
    </Switch>
    </>
  );
}

class AppErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  componentDidCatch(error: Error, info: { componentStack: string }) {
    console.error("[ErrorBoundary] Caught error:", error.message);
    console.error("[ErrorBoundary] Stack:", error.stack);
    console.error("[ErrorBoundary] Component stack:", info.componentStack);
  }
  render() {
    if (this.state.error) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-background">
          <div className="max-w-sm w-full text-center flex flex-col items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-destructive/15 flex items-center justify-center">
              <AlertCircle size={28} className="text-destructive" />
            </div>
            <h2 className="text-xl font-bold">Something went wrong</h2>
            <p className="text-sm text-muted-foreground">
              The app encountered an unexpected error. Try refreshing the page.
            </p>
            <Button onClick={() => { this.setState({ error: null }); window.location.reload(); }}>
              Refresh page
            </Button>
            {import.meta.env.DEV && (
              <pre className="text-left text-xs text-destructive bg-destructive/5 rounded-lg p-3 w-full overflow-auto max-h-40">
                {this.state.error.message}
              </pre>
            )}
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function RouterErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return (
    <AppErrorBoundary key={location}>
      {children}
    </AppErrorBoundary>
  );
}

function App() {
  useEffect(() => {
    if (localStorage.getItem("ar_night_mode") === "1") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <AppErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <AuthProvider>
            <Toaster />
            <RouterErrorBoundary>
              <Router />
            </RouterErrorBoundary>
          </AuthProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </AppErrorBoundary>
  );
}

export default App;
