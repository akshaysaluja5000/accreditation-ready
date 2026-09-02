import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarCheck, BarChart3, ArrowRight, TrendingUp, Stethoscope, AlertTriangle, ShieldCheck, Moon, Sun } from "lucide-react";
import { AppLogoMark } from "@/components/app-logo-mark";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

const features = [
  {
    icon: Stethoscope,
    title: "Measure Readiness from Day One",
    description: "A diagnostic exam gives staff members a personalized baseline. You will know exactly where your gaps are before a surveyor ever asks.",
  },
  {
    icon: CalendarCheck,
    title: "Train Without Pulling Staff Off the Floor",
    description: "Role-based sessions take 10–15 minutes and fit into real workflows.",
  },
  {
    icon: BarChart3,
    title: "See Risk Before Surveyors Do",
    description: "Track completion, accuracy, and knowledge gaps by unit. Flag at-risk departments weeks before your survey window.",
  },
];

const howItWorksSteps = [
  "Take the diagnostic and know your gaps immediately",
  "Deploy targeted training by department",
  "Monitor readiness on your dashboard weekly",
  "Walk into survey week with documented proof of preparation",
];

export default function LandingPage() {
  const [, setLocation] = useLocation();
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("ar_night_mode") === "1");

  function toggleDark() {
    const next = !darkMode;
    setDarkMode(next);
    localStorage.setItem("ar_night_mode", next ? "1" : "0");
    document.documentElement.classList.toggle("dark", next);
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* ── Header ── */}
      <header className="relative z-50 sticky top-0 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <AppLogoMark variant="sm" />
            <span className="text-foreground text-sm tracking-tight" data-testid="text-app-name">
              <span className="font-semibold">Accreditation</span><span className="font-bold italic"> Ready</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDark}
              data-testid="button-toggle-dark-landing"
              className="text-muted-foreground hover:text-foreground"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </Button>
            <Button
              variant="ghost"
              onClick={() => setLocation("/auth")}
              data-testid="button-header-signin"
            >
              Sign In
            </Button>
            <Button
              onClick={() => setLocation("/auth")}
              data-testid="button-header-create-account"
            >
              Create Account
            </Button>
          </div>
        </div>
      </header>

      <main className="relative z-10 flex-1">

        {/* ── Hero ── */}
        <section className="max-w-5xl mx-auto px-4 py-20 md:py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col items-center gap-6"
          >
            <AppLogoMark variant="lg" />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight max-w-3xl text-foreground" data-testid="text-hero-title">
              Know your gaps. Close them before the surveyor does.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed font-normal" data-testid="text-hero-subtitle">
              Accreditation <em>Ready</em> turns CMS standards into focused daily training your staff can actually keep up with.
            </p>
            <div className="flex items-center gap-3 mt-2 flex-wrap justify-center">
              <Button
                size="lg"
                onClick={() => setLocation("/inquiry")}
                data-testid="button-hero-request-demo"
              >
                Request Demo
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-1" data-testid="text-hero-supporting">
              Built on real CMS standards · No in-service time required
            </p>
          </motion.div>
        </section>

        {/* ── Positioning Strip ── */}
        <section className="border-y border-border py-8 bg-muted/40">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-lg md:text-xl font-semibold text-foreground" data-testid="text-positioning-strip">
              Accreditation readiness is built into your team's daily routine.
            </p>
          </div>
        </section>

        {/* ── Problem Section ── */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-400/20 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle size={20} className="text-red-500" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black tracking-tight text-foreground" data-testid="text-problem-heading">
                  Most survey failures come down to undertrained staff.
                </h2>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-3xl" data-testid="text-problem-body">
                Surveyors ask your staff direct questions and expect clear answers. A policy binder on the shelf tells them nothing about whether your team actually understands it.
              </p>
              <ul className="space-y-3">
                {[
                  "In-services are too infrequent and too long to retain",
                  "Knowledge gaps stay invisible until survey day",
                  "Leaders cannot see where their real risk is by department",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3" data-testid={`text-problem-bullet-${i}`}>
                    <div className="w-5 h-5 rounded-full bg-red-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    </div>
                    <span className="text-base text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* ── Solution Section ── */}
        <section className="border-y border-border py-16 md:py-20 bg-muted/40">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck size={20} className="text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black tracking-tight text-foreground" data-testid="text-solution-heading">
                  Continuous readiness built into the workday.
                </h2>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed max-w-3xl" data-testid="text-solution-body">
                Accreditation <em>Ready</em> converts accreditation standards into short, role-based training sessions staff complete in 10–15 minutes. Leaders get a live readiness dashboard across every unit.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Features Grid ── */}
        <section className="max-w-5xl mx-auto px-4 pb-16 md:pb-24" id="features-section">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15 }}
              >
                <div
                  className="p-5 flex items-start gap-4 rounded-xl border border-border bg-card h-full"
                  data-testid={`card-feature-${index}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className="border-y border-border py-16 md:py-20 bg-muted/40">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <TrendingUp size={20} className="text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black tracking-tight text-foreground" data-testid="text-how-it-works-heading">
                  From baseline to audit-ready in 4 weeks.
                </h2>
              </div>
              <ol className="space-y-4 mb-6">
                {howItWorksSteps.map((step, i) => (
                  <li key={i} className="flex items-start gap-4" data-testid={`text-step-${i}`}>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-base text-muted-foreground leading-relaxed pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </motion.div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="max-w-5xl mx-auto px-4 py-16 md:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center gap-4"
          >
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-foreground" data-testid="text-final-cta-heading">
              Build readiness that holds up on survey day.
            </h2>
            <p className="text-base text-muted-foreground max-w-lg" data-testid="text-final-cta-subhead">
              Your team stays ready. Your documentation proves it.
            </p>
            <div className="flex items-center gap-3 flex-wrap justify-center mt-2">
              <Button
                size="lg"
                onClick={() => setLocation("/auth")}
                data-testid="button-bottom-create-account"
              >
                Create Account
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setLocation("/auth")}
                data-testid="button-bottom-signin"
              >
                Sign In
              </Button>
            </div>
          </motion.div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="relative z-10 border-t border-border py-6 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-disclaimer">
            All content is for training and educational purposes only.
          </p>
          <p className="text-sm text-muted-foreground mt-2 flex items-center justify-center gap-3 flex-wrap">
            <a href="/terms" className="underline hover:text-foreground" data-testid="link-terms-landing">Terms & Privacy</a>
          </p>
          <p className="text-sm font-medium text-muted-foreground mt-3" data-testid="text-company-landing">Division of Innovans LLC</p>
        </div>
      </footer>
    </div>
  );
}
