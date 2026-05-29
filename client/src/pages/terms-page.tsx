import { motion } from "framer-motion";
import { ArrowLeft, Shield, FileText, Lock, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";

export default function TermsPage() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen pb-16">
      <div className="bg-card border-b border-card-border sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => window.history.length > 1 ? window.history.back() : setLocation("/")}
            data-testid="button-back"
          >
            <ArrowLeft size={20} />
          </Button>
          <div className="flex items-center gap-2">
            <Shield size={20} className="text-primary" />
            <h1 className="font-bold text-base" data-testid="text-page-title">Terms & Privacy</h1>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 pt-6 flex flex-col gap-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <FileText size={20} className="text-primary" />
              </div>
              <h2 className="text-xl font-black" data-testid="text-terms-heading">Terms of Use</h2>
            </div>
            <div className="flex flex-col gap-4 text-sm text-muted-foreground leading-relaxed">
              <div>
                <h3 className="font-bold text-foreground mb-1" data-testid="text-terms-educational">Educational Purpose</h3>
                <p>Accreditation <em>Ready</em> is designed exclusively for educational and training purposes. Content covers two pathways: hospital compliance aligned with The Joint Commission standards, and ambulatory surgery center (ASC) accreditation aligned with AAAHC, The Joint Commission ASC pathway, and CMS Conditions for Coverage. All content is intended to help healthcare professionals prepare for survey readiness and is not a substitute for official training, certification, or accreditation programs.</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1" data-testid="text-terms-license">Per-Facility License</h3>
                <p>Access to Accreditation <em>Ready</em> is provided on a per-facility basis. Each facility receives its own isolated environment for tracking staff compliance training progress. Facility codes are provided by your organization's administrator.</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1" data-testid="text-terms-content">Content Restrictions</h3>
                <p>All content within Accreditation <em>Ready</em>, including questions, explanations, handbook materials, and training resources, is proprietary. Content cannot be resold, reproduced, or distributed without prior written authorization.</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1" data-testid="text-terms-stats">Aggregated Statistics</h3>
                <p>Aggregated and anonymized performance statistics may be used for quality improvement purposes, including identifying common knowledge gaps and improving training content effectiveness.</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1" data-testid="text-terms-no-patient">No Patient Data</h3>
                <p>Accreditation <em>Ready</em> does not store, collect, or process any patient data or protected health information (PHI). The platform is strictly limited to staff training and compliance readiness.</p>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-chart-2/10 flex items-center justify-center flex-shrink-0">
                <Lock size={20} className="text-chart-2" />
              </div>
              <h2 className="text-xl font-black" data-testid="text-privacy-heading">Privacy Policy</h2>
            </div>
            <div className="flex flex-col gap-4 text-sm text-muted-foreground leading-relaxed">
              <div>
                <h3 className="font-bold text-foreground mb-1" data-testid="text-privacy-collected">What We Collect</h3>
                <p>We collect limited information necessary for the platform to function:</p>
                <ul className="list-disc list-inside mt-1 flex flex-col gap-1">
                  <li>Username and display name</li>
                  <li>Quiz performance and scores</li>
                  <li>Activity data (streaks, XP, daily progress)</li>
                  <li>Facility association</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1" data-testid="text-privacy-usage">How It's Used</h3>
                <p>Your data is used for:</p>
                <ul className="list-disc list-inside mt-1 flex flex-col gap-1">
                  <li>Tracking your individual compliance training progress</li>
                  <li>Generating facility-level compliance readiness reports</li>
                  <li>Quality improvement and content effectiveness analysis</li>
                  <li>Gamification features (leaderboards, streaks, levels)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1" data-testid="text-privacy-not-collected">What We Do NOT Collect</h3>
                <p>Accreditation <em>Ready</em> explicitly does not collect:</p>
                <ul className="list-disc list-inside mt-1 flex flex-col gap-1">
                  <li>Patient data of any kind</li>
                  <li>Protected Health Information (PHI)</li>
                  <li>Personal contact information (email, phone)</li>
                  <li>Location or device tracking data</li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-chart-4/10 flex items-center justify-center flex-shrink-0">
                <AlertTriangle size={20} className="text-chart-4" />
              </div>
              <h2 className="text-xl font-black" data-testid="text-disclaimer-heading">Disclaimer</h2>
            </div>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                Accreditation <em>Ready</em> is <span className="font-bold text-foreground">not affiliated with, endorsed by, or sponsored by The Joint Commission, DNV, AAAHC, or CMS</span>. "The Joint Commission" is a registered trademark of The Joint Commission. "AAAHC" refers to the Accreditation Association for Ambulatory Health Care. CMS refers to the Centers for Medicare &amp; Medicaid Services.
              </p>
              <p>
                All content provided through Accreditation <em>Ready</em> is for educational and training purposes only. It is designed to supplement, not replace, official accreditation standards, guidelines, or processes - including those published by The Joint Commission, DNV, AAAHC, and CMS.
              </p>
              <p>
                Facility administrators and healthcare professionals should always refer to official publications from the relevant accrediting or regulatory body for authoritative guidance on compliance requirements. Hospital pathway content references The Joint Commission standards. ASC pathway content references AAAHC Accreditation Handbook standards and CMS Conditions for Coverage.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}