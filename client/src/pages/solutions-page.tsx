import { motion } from "framer-motion";
import {
  ArrowRight,
  Hospital,
  Activity,
  ClipboardCheck,
  Users,
  BarChart3,
  Wifi,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Building2,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";
import { useEffect } from "react";
import { PathwayMenu } from "@/components/pathway-menu";
import { AppLogoMark } from "@/components/app-logo-mark";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface SolutionConfig {
  slug: string;
  pageTitle: string;
  audience: string;
  heroIcon: LucideIcon;
  headline: string;
  subhead: string;
  features: Feature[];
  bottomLine: string;
}

const SOLUTIONS: Record<string, SolutionConfig> = {
  hospitals: {
    slug: "hospitals",
    pageTitle: "Hospitals - Accreditation Ready",
    audience: "For Hospital Compliance Directors",
    heroIcon: Hospital,
    headline: "Compliance Training Built for Hospitals.",
    subhead:
      "Get every nurse, tech, and unit leader Joint Commission ready - without adding hours to anyone's week. Short, gamified levels keep staff engaged between surveys, while leaderboards let you track readiness across every department.",
    features: [
      {
        icon: ShieldCheck,
        title: "Joint Commission readiness",
        description:
          "Real tracer scenarios across OR, SPD, EOC, infection control, patient care documentation, and more - mapped to current standards.",
      },
      {
        icon: Users,
        title: "Nurse & staff training that sticks",
        description:
          "10–15 minute daily sessions with streaks, XP, and AI-powered explanations turn standards review into something staff actually finish.",
      },
      {
        icon: BarChart3,
        title: "Department-wide leaderboards",
        description:
          "Track completion, accuracy, and knowledge gaps by unit. Spot at-risk departments before a surveyor does.",
      },
    ],
    bottomLine:
      "Built with the same standards your survey teams use. Deployed in hours, not quarters.",
  },
  asc: {
    slug: "asc",
    pageTitle: "ASCs - Accreditation Ready",
    audience: "For Ambulatory Surgery Centers",
    heroIcon: Building2,
    headline: "ASC Accreditation Training That Sticks.",
    subhead:
      "AAAHC, Joint Commission ASC pathway, and CMS Conditions for Coverage - covered. Built for the pace of an ASC, with fast onboarding for new hires, refreshers for veteran staff, and reporting designed for multi-site ASC operators.",
    features: [
      {
        icon: ShieldCheck,
        title: "AAAHC, JC ASC & CMS CfC content",
        description:
          "Modules aligned to AAAHC standards, the Joint Commission ASC accreditation pathway, and CMS Conditions for Coverage - the standards your surveyors actually cite.",
      },
      {
        icon: Zap,
        title: "Fast onboarding",
        description:
          "New techs and nurses can complete their first compliance modules in their first week. No 4-hour orientation videos.",
      },
      {
        icon: Building2,
        title: "Built for multi-site operators",
        description:
          "Roles, reporting scopes, and dashboards designed for multi-site ASC operators - corporate, regional, and center-level leaders all see what they need.",
      },
    ],
    bottomLine:
      "ASC-specific content tied to the standards your surveyors actually use. Built by people who know what a 7am first-case start looks like.",
  },
};

const SLUG_TO_MODULE: Record<string, string> = {
  hospitals: "hospital",
  asc: "asc",
};

export function SolutionsPage({ slug }: { slug: keyof typeof SOLUTIONS }) {
  const config = SOLUTIONS[slug];
  const [, setLocation] = useLocation();
  const HeroIcon = config.heroIcon;

  useEffect(() => {
    document.title = config.pageTitle;
    return () => {
      document.title = "Accreditation Ready";
    };
  }, [config.pageTitle]);

  const goToAuth = () => {
    const module = SLUG_TO_MODULE[slug];
    if (module) {
      try { sessionStorage.setItem("mosh_intended_facility", module); } catch {}
    }
    setLocation("/auth");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="relative">
        <header className="relative z-10 sticky top-0 border-b border-border bg-background/95 backdrop-blur-md">
          <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => setLocation("/")}
              className="flex items-center gap-2 rounded-lg px-2 py-1 -ml-2 hover:bg-accent transition-colors"
              data-testid="link-home-header"
            >
              <AppLogoMark variant="sm" />
              <span className="text-foreground text-sm tracking-tight">
                <span className="font-semibold">Accreditation</span><span className="font-bold italic"> Ready</span>
              </span>
            </button>
            <div className="flex items-center gap-2">
              <PathwayMenu />
              <Button
                variant="ghost"
                onClick={goToAuth}
                data-testid="button-header-signin"
              >
                Sign In
              </Button>
              <Button
                onClick={goToAuth}
                data-testid="button-header-create-account"
              >
                Create Account
              </Button>
            </div>
          </div>
        </header>

        <section className="relative z-10 max-w-5xl mx-auto px-4 py-20 md:py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center gap-6"
          >
            <span
              className="text-xs font-bold tracking-widest uppercase text-muted-foreground bg-muted border border-border px-3 py-1 rounded-full"
              data-testid="text-audience"
            >
              {config.audience}
            </span>
            <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <HeroIcon size={44} className="text-primary" />
            </div>
            <h1
              className="text-4xl md:text-5xl font-black tracking-tight leading-tight max-w-3xl text-foreground"
              data-testid="text-hero-headline"
            >
              {config.headline}
            </h1>
            <p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
              data-testid="text-hero-subhead"
            >
              {config.subhead}
            </p>
            <div className="flex items-center gap-3 mt-2 flex-wrap justify-center">
              <Button
                size="lg"
                onClick={goToAuth}
                data-testid="button-hero-create-account"
              >
                Create Account
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={goToAuth}
                data-testid="button-hero-signin"
              >
                Sign In
              </Button>
            </div>
          </motion.div>
        </section>
      </div>

      <main className="flex-1">
        <section className="bg-accent/30 border-y border-border py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-2">
                What you get
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                {config.bottomLine}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {config.features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Card
                    className="p-6 h-full flex flex-col gap-3"
                    data-testid={`card-feature-${index}`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <feature.icon size={24} className="text-primary" />
                    </div>
                    <h3 className="font-bold text-base" data-testid={`text-feature-title-${index}`}>
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-16 md:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center gap-4"
          >
            <h2 className="text-2xl md:text-3xl font-black tracking-tight">Ready to get started?</h2>
            <div className="flex items-center gap-3 flex-wrap justify-center mt-2">
              <Button
                size="lg"
                onClick={goToAuth}
                data-testid="button-bottom-create-account"
              >
                Create Account
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setLocation("/")}
                data-testid="button-bottom-back-home"
              >
                Back to Main Site
              </Button>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-border py-8 px-4">
        <div className="max-w-5xl mx-auto text-center flex flex-col gap-3">
          <div className="flex items-center justify-center gap-4 text-sm flex-wrap">
            <button
              type="button"
              onClick={() => setLocation("/")}
              className="font-medium hover:underline"
              data-testid="link-footer-home"
            >
              Main Site
            </button>
            <span className="text-muted-foreground">·</span>
            <button
              type="button"
              onClick={() => setLocation("/hospitals")}
              className="font-medium hover:underline"
              data-testid="link-footer-hospitals"
            >
              Hospitals
            </button>
            <span className="text-muted-foreground">·</span>
            <button
              type="button"
              onClick={() => setLocation("/asc")}
              className="font-medium hover:underline"
              data-testid="link-footer-asc"
            >
              ASC
            </button>
            <span className="text-muted-foreground">·</span>
            <a href="/terms" className="font-medium hover:underline" data-testid="link-footer-terms">
              Terms & Privacy
            </a>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Accreditation <em>Ready</em> is not affiliated with, endorsed by, or
            sponsored by The Joint Commission, DNV, AAAHC, or CMS. All content is for
            educational and training purposes only.
          </p>
        </div>
      </footer>
    </div>
  );
}

export function HospitalsPage() {
  return <SolutionsPage slug="hospitals" />;
}

export function AscPage() {
  return <SolutionsPage slug="asc" />;
}

