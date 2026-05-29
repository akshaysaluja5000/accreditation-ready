import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarCheck, BarChart3, FileText, BookOpen, ArrowRight, BrainCircuit, CheckCircle2, Users, TrendingUp, Search, Stethoscope, Crown, Lock, Sparkles, AlertTriangle, Target, ShieldCheck, Moon, Sun, Radar, FileSearch2, Zap, GraduationCap, Telescope, BriefcaseBusiness } from "lucide-react";
import { AppLogoMark } from "@/components/app-logo-mark";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { PathwayMenu } from "@/components/pathway-menu";

const features = [
  {
    icon: Stethoscope,
    title: "Measure Readiness from Day One",
    description: "A 25-question diagnostic gives every staff member a personalized baseline. You will know exactly where your gaps are before a surveyor ever asks.",
  },
  {
    icon: CalendarCheck,
    title: "Train Without Pulling Staff Off the Floor",
    description: "Role-based sessions take 10–15 minutes. They fit into real workflows - not ideal schedules that never happen.",
  },
  {
    icon: BarChart3,
    title: "See Risk Before Surveyors Do",
    description: "Track completion, accuracy, and knowledge gaps by unit. Flag at-risk departments weeks before your survey window.",
  },
  {
    icon: Search,
    title: "Simulate Real Survey Scenarios",
    description: "Deep Dive Tracer Mode mirrors how surveyors actually probe - so staff are not caught off guard by unexpected questions.",
  },
  {
    icon: BrainCircuit,
    title: "Build Real Understanding",
    description: "AI-powered explanations break down missed questions in plain language, with real clinical context your team can actually apply.",
  },
];

const howItWorksSteps = [
  "Take the diagnostic - know your gaps immediately",
  "Deploy targeted training by department",
  "Monitor readiness on your dashboard weekly",
  "Walk into survey week with documented proof of preparation",
];

const proofPoints = [
  "Baseline vs. final scores show exactly how far you have come",
  "Department-level dashboards show where risk still lives",
  "Staff walk in knowing what surveyors will ask - and how to answer",
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

  const scrollToFeatures = () => {
    document.getElementById("features-section")?.scrollIntoView({ behavior: "smooth" });
  };

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
            <PathwayMenu />
            <a
              href="/tutorial-employee.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center text-sm font-medium text-foreground hover:text-foreground transition-colors px-2 py-1"
              data-testid="link-nav-tutorials"
            >
              Tutorials
            </a>
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
              Accreditation <em>Ready</em> turns Joint Commission, DNV, AAAHC, and CMS standards into focused daily training your staff can actually keep up with.
            </p>
            <div className="flex items-center gap-3 mt-2 flex-wrap justify-center">
              <Button
                size="lg"
                onClick={() => setLocation("/auth")}
                data-testid="button-hero-diagnostic"
              >
                Start Free Diagnostic
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToFeatures}
                data-testid="button-hero-how-it-works"
              >
                See How It Works
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-1" data-testid="text-hero-supporting">
              Built on real JC, DNV, AAAHC, and CMS standards · No in-service time required
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
                  Continuous readiness, built into the workday.
                </h2>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed max-w-3xl" data-testid="text-solution-body">
                Accreditation <em>Ready</em> converts accreditation standards into short, role-based training sessions staff complete in 10–15 minutes - and gives quality leaders a live readiness dashboard across every unit.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Agent-Driven Model ── */}
        <section className="py-16 md:py-24" id="features-section">
          <div className="max-w-5xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-400/20 flex items-center justify-center flex-shrink-0">
                  <Zap size={20} className="text-violet-500" />
                </div>
                <p className="text-xs font-bold tracking-widest uppercase text-violet-500" data-testid="text-agent-eyebrow">
                  The Agent-Driven Model
                </p>
              </div>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight text-foreground mb-3" data-testid="text-agent-heading">
                What's different.
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-10" data-testid="text-agent-subhead">
                Instead of staff completing forms and managers chasing compliance, you deploy a network of specialized agents that run the platform continuously.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Survey Readiness Agent */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.18, delay: 0.05 }}
                  data-testid="card-agent-survey-readiness"
                >
                  <div className="rounded-2xl border border-border bg-card p-6 h-full flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                        <Radar size={22} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">Agent 1</p>
                        <h3 className="font-bold text-base text-foreground leading-tight" data-testid="text-agent-1-title">Survey Readiness Agent</h3>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Continuously monitors every standard across all facilities - which ones have evidence attached, which staff have not completed training, which policies are expiring. Surfaces a live readiness score that is always current.
                    </p>
                    <div className="mt-auto pt-2 border-t border-border">
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        <span className="font-semibold text-foreground">Replaces:</span> the manual binder audit facilities run in the weeks before a survey.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Content Intelligence Agent */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.18, delay: 0.1 }}
                  data-testid="card-agent-content-intelligence"
                >
                  <div className="rounded-2xl border border-border bg-card p-6 h-full flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-violet-500/10 border border-violet-400/20 flex items-center justify-center flex-shrink-0">
                        <FileSearch2 size={22} className="text-violet-500" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">Agent 2</p>
                        <h3 className="font-bold text-base text-foreground leading-tight" data-testid="text-agent-2-title">Content Intelligence Agent</h3>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      When a new policy or procedure is uploaded, this agent reads it, auto-tags it to the relevant JC/AAAHC standards, generates quiz questions from it, and flags if the policy contradicts a standard.
                    </p>
                    <div className="mt-auto pt-2 border-t border-border">
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        <span className="font-semibold text-foreground">Your clearest differentiator</span> - no other compliance platform does this automatically.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Staff Learning Agent */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.18, delay: 0.15 }}
                  data-testid="card-agent-staff-learning"
                >
                  <div className="rounded-2xl border border-border bg-card p-6 h-full flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center flex-shrink-0">
                        <GraduationCap size={22} className="text-emerald-600" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">Agent 3</p>
                        <h3 className="font-bold text-base text-foreground leading-tight" data-testid="text-agent-3-title">Staff Learning Agent</h3>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Instead of static assigned modules, this agent tracks each staff member's diagnostic scores, completion gaps, and quiz performance - then dynamically re-routes their learning plan. It knows who is weakest on sterile field standards and pushes those questions. It sends escalating nudges without a manager having to chase anyone.
                    </p>
                    <div className="mt-auto pt-2 border-t border-border">
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        <span className="font-semibold text-foreground">Replaces:</span> manually assigned training plans and manager follow-up emails.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Regulatory Watch Agent */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.18, delay: 0.25 }}
                  data-testid="card-agent-regulatory-watch"
                >
                  <div className="rounded-2xl border border-border bg-card p-6 h-full flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-400/20 flex items-center justify-center flex-shrink-0">
                        <Telescope size={22} className="text-amber-600" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">Agent 4</p>
                        <h3 className="font-bold text-base text-foreground leading-tight" data-testid="text-agent-4-title">Regulatory Watch Agent</h3>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Monitors Joint Commission, DNV, AAAHC, and CMS public channels for standard updates, new chapters, and survey focus shifts. When the NPG chapter launched January 2026, this agent would have flagged it automatically and initiated a content build task - rather than discovering the gap months later.
                    </p>
                    <div className="mt-auto pt-2 border-t border-border">
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        <span className="font-semibold text-foreground">Replaces:</span> manual monitoring of accreditation body bulletins, field communications, and update emails.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Executive Readiness Agent */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.18, delay: 0.3 }}
                  data-testid="card-agent-executive-readiness"
                >
                  <div className="rounded-2xl border border-border bg-card p-6 h-full flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center flex-shrink-0">
                        <BriefcaseBusiness size={22} className="text-sky-600" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">Agent 5</p>
                        <h3 className="font-bold text-base text-foreground leading-tight" data-testid="text-agent-5-title">Executive Readiness Agent</h3>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      For the CEO/CNO level, this agent drafts a weekly readiness briefing: where the facility stands, what is at risk, and what actions are due. Structured for board reporting and pre-survey prep.
                    </p>
                    <div className="mt-auto pt-2 border-t border-border">
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        <span className="font-semibold text-foreground">Replaces:</span> manually assembled board reports and pre-survey executive prep sessions.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Features Grid ── */}
        <section className="max-w-5xl mx-auto px-4 pb-16 md:pb-24">
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

        {/* ── Proof Section ── */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center flex-shrink-0">
                  <Target size={20} className="text-emerald-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black tracking-tight text-foreground" data-testid="text-proof-heading">
                  Stop guessing. Start measuring.
                </h2>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-3xl" data-testid="text-proof-body">
                Before Accreditation <em>Ready</em>, most quality leaders go into survey week with instinct and hope. After:
              </p>
              <ul className="space-y-3">
                {proofPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3" data-testid={`text-proof-point-${i}`}>
                    <CheckCircle2 size={20} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-base text-muted-foreground leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* ── Diagnostic CTA ── */}
        <section className="py-16 md:py-20 border-y border-border bg-primary/5">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center shadow-lg shadow-teal-500/20">
                    <Stethoscope size={48} className="text-white" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-black tracking-tight text-foreground mb-2" data-testid="text-diagnostic-promo-heading">
                    How ready is your team right now?
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-4 max-w-xl" data-testid="text-diagnostic-promo-body">
                    Take a free 25-question diagnostic across every compliance domain - no studying, no prep, just honest answers that show you where to focus.
                  </p>
                  <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white shadow-md shadow-teal-500/20 font-bold"
                      onClick={() => setLocation("/auth")}
                      data-testid="button-diagnostic-promo-signup"
                    >
                      Start Free Diagnostic
                      <ArrowRight size={18} className="ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
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
              Give your team a consistent, measurable way to stay accreditation-ready all year.
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
            Accreditation <em>Ready</em> is not affiliated with, endorsed by, or sponsored by The Joint Commission, DNV, AAAHC, or CMS. All content is for training and educational purposes only.
          </p>
          <p className="text-sm text-muted-foreground mt-2 flex items-center justify-center gap-3 flex-wrap">
            <a href="/terms" className="underline hover:text-foreground" data-testid="link-terms-landing">Terms & Privacy</a>
            <span className="opacity-30">·</span>
            <a href="/tutorial-employee.html" target="_blank" className="underline hover:text-foreground" data-testid="link-tutorial-employee">Staff Training Guide</a>
            <span className="opacity-30">·</span>
            <a href="/tutorial-leadership.html" target="_blank" className="underline hover:text-foreground" data-testid="link-tutorial-leadership">Leadership Guide</a>
          </p>
          <p className="text-sm font-medium text-muted-foreground mt-3" data-testid="text-company-landing">Division of Innovans LLC</p>
        </div>
      </footer>
    </div>
  );
}
