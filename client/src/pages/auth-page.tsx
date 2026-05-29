import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Flame, Trophy, Eye, EyeOff, Loader2, ArrowLeft, KeyRound, Building2, Moon, Sun } from "lucide-react";
import { AppLogoMark } from "@/components/app-logo-mark";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/lib/auth";
import { loginSchema, registerSchema, resetPasswordSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useLocation } from "wouter";
import { z } from "zod";

type AuthView = "login" | "register" | "forgot";

export default function AuthPage() {
  const [view, setView] = useState<AuthView>("login");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login, register } = useAuth();
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("ar_night_mode") === "1");

  function toggleDark() {
    const next = !darkMode;
    setDarkMode(next);
    localStorage.setItem("ar_night_mode", next ? "1" : "0");
    document.documentElement.classList.toggle("dark", next);
  }

  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: { username: "", password: "" },
  });

  const intendedFacility = (() => {
    try {
      const v = sessionStorage.getItem("mosh_intended_facility");
      return v === "hospital" || v === "asc" || v === "dnv" ? v : "hospital";
    } catch { return "hospital"; }
  })();

  const registerForm = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: { username: "", firstName: "", lastName: "", facilityCode: "", organizationType: intendedFacility as "hospital" | "asc" | "dnv", password: "", confirmPassword: "" },
  });

  const resetForm = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: { username: "", newPassword: "", confirmNewPassword: "" },
  });

  function extractErrorMessage(error: any, fallback: string): string {
    const raw = error?.message || fallback;
    try {
      const jsonPart = raw.replace(/^\d+:\s*/, "");
      const parsed = JSON.parse(jsonPart);
      return parsed.message || fallback;
    } catch {
      return raw;
    }
  }

  const onLogin = async (data: z.infer<typeof loginSchema>) => {
    setIsSubmitting(true);
    try {
      try { sessionStorage.setItem("mosh_force_role_select", "1"); } catch {}
      await login(data.username, data.password);
    } catch (error: any) {
      try { sessionStorage.removeItem("mosh_force_role_select"); } catch {}
      toast({
        title: "Login failed",
        description: extractErrorMessage(error, "Invalid credentials"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const onRegister = async (data: z.infer<typeof registerSchema>) => {
    setIsSubmitting(true);
    try {
      try { sessionStorage.setItem("mosh_force_role_select", "1"); } catch {}
      await register(data.username, data.firstName, data.lastName, data.password, data.facilityCode, data.organizationType);
      toast({
        title: "Account created!",
        description: "Welcome to Accreditation Ready!",
      });
    } catch (error: any) {
      try { sessionStorage.removeItem("mosh_force_role_select"); } catch {}
      toast({
        title: "Registration failed",
        description: extractErrorMessage(error, "Something went wrong"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const onResetPassword = async (data: z.infer<typeof resetPasswordSchema>) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/auth/reset-password", {
        username: data.username,
        newPassword: data.newPassword,
      });
      toast({
        title: "Password updated!",
        description: "You can now sign in with your new password.",
      });
      setView("login");
      resetForm.reset();
    } catch (error: any) {
      toast({
        title: "Reset failed",
        description: extractErrorMessage(error, "Username not found"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-background">
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md bg-card rounded-2xl shadow-2xl p-8 lg:p-10">
          <div className="flex items-center justify-between mb-6 -mt-2">
            <button
              type="button"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setLocation("/")}
              data-testid="button-back-to-home"
            >
              <ArrowLeft size={15} />
              Back to home
            </button>
            <button
              type="button"
              onClick={toggleDark}
              data-testid="button-toggle-dark-auth"
              className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="mb-4 flex justify-center">
              <AppLogoMark variant="lg" />
            </div>
            <h1 className="text-3xl font-black tracking-tight">
              <span className="font-semibold">Accreditation</span><span className="font-bold italic"> Ready</span>
            </h1>
            <p className="text-muted-foreground mt-1">Know your gaps. Close them before the surveyor does.</p>
          </motion.div>

          {view !== "forgot" && (
            <div className="flex rounded-xl bg-muted p-1 mb-6">
              <button
                className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-bold transition-all ${
                  view === "login" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"
                }`}
                onClick={() => setView("login")}
                data-testid="button-login-tab"
              >
                Sign In
              </button>
              <button
                className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-bold transition-all ${
                  view === "register" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"
                }`}
                onClick={() => setView("register")}
                data-testid="button-register-tab"
              >
                Create Account
              </button>
            </div>
          )}

          <AnimatePresence mode="wait">
            {view === "login" && (
              <motion.div
                key="login"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2 }}
              >
                <Form {...loginForm}>
                  <form onSubmit={loginForm.handleSubmit(onLogin)} className="flex flex-col gap-4">
                    <FormField
                      control={loginForm.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Username</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Enter your username"
                              data-testid="input-login-username"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={loginForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input
                                {...field}
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                data-testid="input-login-password"
                              />
                              <button
                                type="button"
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                                onClick={() => setShowPassword(!showPassword)}
                                data-testid="button-toggle-password"
                              >
                                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                              </button>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="w-full mt-2"
                      size="lg"
                      disabled={isSubmitting}
                      data-testid="button-login-submit"
                    >
                      {isSubmitting ? <Loader2 className="animate-spin mr-2" size={18} /> : null}
                      Sign In
                    </Button>
                    <button
                      type="button"
                      className="text-sm text-primary font-medium text-center mt-1"
                      onClick={() => setView("forgot")}
                      data-testid="button-forgot-password"
                    >
                      Forgot your password?
                    </button>
                  </form>
                </Form>
              </motion.div>
            )}

            {view === "register" && (
              <motion.div
                key="register"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                <Form {...registerForm}>
                  <form onSubmit={registerForm.handleSubmit(onRegister)} className="flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-3">
                      <FormField
                        control={registerForm.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="First name"
                                data-testid="input-register-first-name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={registerForm.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Last name"
                                data-testid="input-register-last-name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={registerForm.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Username</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Choose a username"
                              data-testid="input-register-username"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={registerForm.control}
                      name="facilityCode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Institution Code</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Building2 size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                              <Input
                                {...field}
                                placeholder="e.g. STMARYS-OR or your team's shared code"
                                className="pl-9"
                                autoCapitalize="characters"
                                data-testid="input-register-facility-code"
                              />
                            </div>
                          </FormControl>
                          <p className="text-xs text-muted-foreground mt-1">
                            This keeps your team's progress private. Use the code your administrator shared, or pick a new one if you're the first from your facility - everyone who joins with the same code becomes part of the same group.
                          </p>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={registerForm.control}
                      name="organizationType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Organization Type</FormLabel>
                          <FormControl>
                            <Select
                              value={field.value ?? "hospital"}
                              onValueChange={field.onChange}
                            >
                              <SelectTrigger data-testid="select-register-organization-type">
                                <SelectValue placeholder="Choose your organization type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="hospital" data-testid="option-org-hospital">Hospital (Joint Commission)</SelectItem>
                                <SelectItem value="asc" data-testid="option-org-asc">Ambulatory Surgery Center (AAAHC)</SelectItem>
                                <SelectItem value="dnv" data-testid="option-org-dnv">Hospital (DNV NIAHO)</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={registerForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input
                                {...field}
                                type={showPassword ? "text" : "password"}
                                placeholder="At least 6 characters"
                                data-testid="input-register-password"
                              />
                              <button
                                type="button"
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                                onClick={() => setShowPassword(!showPassword)}
                              >
                                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                              </button>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={registerForm.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Confirm Password</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="password"
                              placeholder="Confirm your password"
                              data-testid="input-register-confirm-password"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="w-full mt-2"
                      size="lg"
                      disabled={isSubmitting}
                      data-testid="button-register-submit"
                    >
                      {isSubmitting ? <Loader2 className="animate-spin mr-2" size={18} /> : null}
                      Create Account
                    </Button>
                  </form>
                </Form>
              </motion.div>
            )}

            {view === "forgot" && (
              <motion.div
                key="forgot"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-2 mb-6">
                  <button
                    type="button"
                    className="text-muted-foreground"
                    onClick={() => setView("login")}
                    data-testid="button-back-to-login"
                  >
                    <ArrowLeft size={20} />
                  </button>
                  <div className="flex items-center gap-2">
                    <KeyRound size={20} className="text-primary" />
                    <h2 className="font-bold text-lg">Reset Password</h2>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-5">
                  Enter your username and create a new password.
                </p>
                <Form {...resetForm}>
                  <form onSubmit={resetForm.handleSubmit(onResetPassword)} className="flex flex-col gap-4">
                    <FormField
                      control={resetForm.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Username</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Enter your username"
                              data-testid="input-reset-username"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={resetForm.control}
                      name="newPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>New Password</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input
                                {...field}
                                type={showPassword ? "text" : "password"}
                                placeholder="At least 6 characters"
                                data-testid="input-reset-new-password"
                              />
                              <button
                                type="button"
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                                onClick={() => setShowPassword(!showPassword)}
                              >
                                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                              </button>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={resetForm.control}
                      name="confirmNewPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Confirm New Password</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="password"
                              placeholder="Confirm your new password"
                              data-testid="input-reset-confirm-password"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="w-full mt-2"
                      size="lg"
                      disabled={isSubmitting}
                      data-testid="button-reset-submit"
                    >
                      {isSubmitting ? <Loader2 className="animate-spin mr-2" size={18} /> : null}
                      Reset Password
                    </Button>
                  </form>
                </Form>
              </motion.div>
            )}
          </AnimatePresence>

          <p className="text-xs text-muted-foreground text-center mt-6">
            <a href="/terms" className="underline" data-testid="link-terms">Terms & Privacy</a>
          </p>
        </div>
      </div>

      <div className="hidden lg:flex flex-1 items-center justify-center p-12 relative overflow-hidden bg-primary/5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-10" style={{ background: "radial-gradient(circle, hsl(218 68% 32%) 0%, transparent 70%)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full opacity-10" style={{ background: "radial-gradient(circle, hsl(262 60% 50%) 0%, transparent 70%)" }} />

        <div className="relative z-10 max-w-md text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <h2 className="text-4xl font-black mb-6 leading-tight text-foreground">
              Master hospital standards through a{" "}
              <span className="text-primary">game you'll love</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Answer, challenge yourself, and level up your Joint Commission knowledge. Build streaks, earn XP, and become the compliance expert your team needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-3 gap-6">
            {[
              { icon: Flame, label: "Daily Streaks", color: "text-orange-500" },
              { icon: Zap, label: "Earn XP", color: "text-orange-500" },
              { icon: Trophy, label: "Level Up", color: "text-violet-500" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-card border border-border flex items-center justify-center shadow-sm">
                  <item.icon size={24} className={item.color} />
                </div>
                <span className="text-sm font-bold text-foreground">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
