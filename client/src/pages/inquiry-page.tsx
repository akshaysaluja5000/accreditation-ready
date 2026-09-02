import { FormEvent, useState } from "react";
import { ArrowLeft, Mail, Send } from "lucide-react";
import { useLocation } from "wouter";
import { AppLogoMark } from "@/components/app-logo-mark";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const INQUIRY_EMAIL = "akshay@innovans.ai";

export default function InquiryPage() {
  const [, setLocation] = useLocation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [message, setMessage] = useState("");

  function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = `Accreditation Ready demo request from ${name}`;
    const body = [
      `Name: ${name}`,
      `Work email: ${email}`,
      `Organization: ${organization}`,
      "",
      message || "I would like to request a demo of Accreditation Ready.",
    ].join("\n");

    window.location.href = `mailto:${INQUIRY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="border-b border-border bg-background/95 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => setLocation("/")}
            className="flex items-center gap-2.5 text-foreground"
            aria-label="Back to Accreditation Ready home"
          >
            <AppLogoMark variant="sm" />
            <span className="text-sm tracking-tight">
              <span className="font-semibold">Accreditation</span>
              <span className="font-bold italic"> Ready</span>
            </span>
          </button>
          <Button variant="ghost" onClick={() => setLocation("/")}>
            <ArrowLeft size={16} />
            Back to home
          </Button>
        </div>
      </header>

      <main className="flex-1 px-4 py-12 md:py-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <div className="mx-auto mb-5 w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Mail size={26} className="text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight text-foreground">
              Request a demo
            </h1>
            <p className="mt-3 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Tell us a little about your organization and we&apos;ll follow up to arrange a walkthrough.
            </p>
          </div>

          <form
            onSubmit={submitInquiry}
            className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="inquiry-name" className="text-sm font-semibold text-foreground">
                  Your name
                </label>
                <Input
                  id="inquiry-name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Your name"
                  required
                  data-testid="input-inquiry-name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="inquiry-email" className="text-sm font-semibold text-foreground">
                  Work email
                </label>
                <Input
                  id="inquiry-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@organization.org"
                  required
                  data-testid="input-inquiry-email"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="inquiry-organization" className="text-sm font-semibold text-foreground">
                Organization
              </label>
              <Input
                id="inquiry-organization"
                value={organization}
                onChange={(event) => setOrganization(event.target.value)}
                placeholder="Organization name"
                required
                data-testid="input-inquiry-organization"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="inquiry-message" className="text-sm font-semibold text-foreground">
                How can we help?
              </label>
              <Textarea
                id="inquiry-message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Tell us what you would like to see in the demo."
                className="min-h-32 resize-y"
                data-testid="textarea-inquiry-message"
              />
            </div>

            <div className="flex flex-col items-center gap-3 pt-2">
              <Button type="submit" size="lg" className="w-full sm:w-auto" data-testid="button-submit-inquiry">
                Open email to request a demo
                <Send size={16} />
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                Your email app will open a message addressed to{" "}
                <a className="underline hover:text-foreground" href={`mailto:${INQUIRY_EMAIL}`}>
                  {INQUIRY_EMAIL}
                </a>
                .
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}