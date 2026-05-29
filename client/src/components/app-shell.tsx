import { ReactNode } from "react";
import { AppLogoMark } from "./app-logo-mark";
import { useAuth } from "@/lib/auth";
import { useLocation } from "wouter";
import { LayoutDashboard, Search, Trophy, Settings } from "lucide-react";

interface AppShellProps {
  children: ReactNode;
}

const HIDE_TABBAR_PREFIXES = [
  "/play/", "/study/", "/diagnostic", "/mastery",
  "/asc-pretest", "/asc-posttest", "/dnv-pretest", "/dnv-posttest",
  "/deep-dive", "/mfa-setup", "/mfa-verify", "/flashcard-review",
];

export function AppShell({ children }: AppShellProps) {
  const { user } = useAuth();
  const [location, setLocation] = useLocation();

  const showTabBar = !!user && !HIDE_TABBAR_PREFIXES.some(p => location.startsWith(p));

  const activeTab = (() => {
    if (location.startsWith("/leaderboard")) return "progress";
    if (location.startsWith("/profile")) return "profile";
    return "home";
  })();

  const handleSearchTab = () => {
    if (location === "/" || location === "/dashboard") {
      document.querySelector<HTMLInputElement>('[data-testid="input-search"]')?.focus();
    } else {
      setLocation("/");
    }
  };

  const tabs = [
    { id: "home", icon: LayoutDashboard, label: "Home", onClick: () => setLocation("/") },
    { id: "search", icon: Search, label: "Search", onClick: handleSearchTab },
    { id: "progress", icon: Trophy, label: "Progress", onClick: () => setLocation("/leaderboard") },
    { id: "profile", icon: Settings, label: "Profile", onClick: () => setLocation("/profile") },
  ];

  return (
    <div className="min-h-screen flex flex-col relative bg-background">
      <header className="sticky top-0 z-50 border-b border-border flex-shrink-0 bg-background/95 backdrop-blur-md">
        <div className="px-4 h-[58px] flex items-center justify-center gap-2.5">
          <AppLogoMark variant="sm" />
          <span className="text-foreground text-sm tracking-tight">
            <span className="font-semibold">Accreditation</span><span className="font-bold italic"> Ready</span>
          </span>
        </div>
      </header>

      <div className="flex-1 relative z-10">{children}</div>

      {showTabBar && (
        <nav
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/97 backdrop-blur-md"
          data-testid="nav-bottom-tab-bar"
        >
          <div className="flex items-stretch h-14 max-w-lg mx-auto">
            {tabs.map(({ id, icon: Icon, label, onClick }) => {
              const isActive = activeTab === id;
              return (
                <button
                  key={id}
                  onClick={onClick}
                  data-testid={`tab-nav-${id}`}
                  className={`flex-1 flex flex-col items-center justify-center gap-0.5 transition-colors ${
                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                  <span className={`text-[10px] ${isActive ? "font-bold" : "font-medium"}`}>{label}</span>
                </button>
              );
            })}
          </div>
        </nav>
      )}
    </div>
  );
}
