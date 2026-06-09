import { useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { ShieldCheck, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useAuth } from "@/lib/auth";

export default function MfaVerifyPage() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const { user } = useAuth();
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);

  async function verify() {
    if (token.length !== 6) {
      toast({ title: "Enter the 6-digit code from your authenticator app", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      await apiRequest("POST", "/api/mfa/verify", { token });
      queryClient.invalidateQueries({ queryKey: ["/api/mfa/status"] });
      const returnTo = sessionStorage.getItem("ar_mfa_return_to") || "/leadership";
      sessionStorage.removeItem("ar_mfa_return_to");
      setLocation(returnTo);
    } catch (err: any) {
      toast({ title: "Verification failed", description: err.message, variant: "destructive" });
      setToken("");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-sm flex flex-col gap-6"
      >
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
            <Lock size={26} className="text-primary" />
          </div>
          <div>
            <h1 className="font-bold text-xl">Two-Factor Authentication</h1>
            <p className="text-sm text-muted-foreground mt-1">
              {user?.username
                ? `Signed in as ${user.username}. `
                : ""}
              Enter your authenticator code to access reporting tools.
            </p>
          </div>
        </div>

        <div className="rounded-2xl bg-card border border-card-border p-6 flex flex-col gap-4">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <ShieldCheck size={16} className="text-primary" />
            Enter 6-digit verification code
          </div>
          <Input
            value={token}
            onChange={(e) => setToken(e.target.value.replace(/\D/g, "").slice(0, 6))}
            placeholder="000000"
            className="text-center text-2xl font-mono tracking-[0.5em] h-14"
            maxLength={6}
            inputMode="numeric"
            autoFocus
            data-testid="input-mfa-verify-token"
            onKeyDown={(e) => e.key === "Enter" && verify()}
          />
          <Button
            onClick={verify}
            disabled={loading || token.length !== 6}
            className="w-full"
            data-testid="button-mfa-verify"
          >
            {loading ? "Verifying…" : "Verify & Continue"}
          </Button>
        </div>

        <p className="text-xs text-center text-muted-foreground">
          Open your authenticator app (Google Authenticator, Authy, etc.) to get your current code.
          {" "}Codes refresh every 30 seconds.
        </p>

        <button
          onClick={() => setLocation("/")}
          className="text-xs text-muted-foreground hover:text-foreground text-center underline-offset-2 hover:underline"
          data-testid="button-mfa-back-to-home"
        >
          Back to training dashboard
        </button>
      </motion.div>
    </div>
  );
}
