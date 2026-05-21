import { ChevronDown, Hospital, Activity, Check, Loader2, Shield } from "lucide-react";
import { useLocation } from "wouter";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/lib/auth";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { ModuleId } from "@shared/schema";

type PathwayMenuProps = {
  triggerLabel?: string;
  triggerVariant?: "ghost" | "outline";
  triggerSize?: "default" | "sm";
  align?: "start" | "end" | "center";
};

type Pathway = {
  href: string;
  module: ModuleId;
  icon: typeof Hospital;
  title: string;
  description: string;
  testId: string;
};

const PATHWAYS: Pathway[] = [
  {
    href: "/hospitals",
    module: "hospital",
    icon: Hospital,
    title: "Hospitals",
    description: "Joint Commission readiness",
    testId: "link-pathway-hospitals",
  },
  {
    href: "/asc",
    module: "asc",
    icon: Activity,
    title: "Ambulatory Surgery Centers",
    description: "AAAHC, Joint Commission & CMS pathways",
    testId: "link-pathway-asc",
  },
  {
    href: "/hospitals",
    module: "dnv",
    icon: Shield,
    title: "Hospital (DNV NIAHO)",
    description: "NIAHO 25-1 standards",
    testId: "link-pathway-dnv",
  },
];

export function PathwayMenu({
  triggerLabel = "Your Facility",
  triggerVariant = "ghost",
  triggerSize = "default",
  align = "end",
}: PathwayMenuProps) {
  const [, setLocation] = useLocation();
  const { user } = useAuth();
  const { toast } = useToast();

  const switchModule = useMutation({
    mutationFn: async (organizationType: ModuleId) => {
      const res = await apiRequest("PATCH", "/api/user/organization-type", { organizationType });
      return await res.json();
    },
    onSuccess: (updatedUser) => {
      queryClient.setQueryData(["/api/auth/me"], updatedUser);
      queryClient.invalidateQueries({ queryKey: ["/api/levels"] });
      queryClient.invalidateQueries({ queryKey: ["/api/asc-pretest/results"] });
      queryClient.invalidateQueries({ queryKey: ["/api/asc-posttest/results"] });
      queryClient.invalidateQueries({ queryKey: ["/api/dnv-pretest/results"] });
      queryClient.invalidateQueries({ queryKey: ["/api/dnv-posttest/results"] });
      setLocation("/");
      const label = PATHWAYS.find(p => p.module === updatedUser?.organizationType)?.title ?? "your facility";
      toast({ title: "Switched facility", description: `Now viewing ${label}.` });
    },
    onError: (err: any) => {
      toast({
        title: "Couldn't switch facility",
        description: err?.message ?? "Please try again.",
        variant: "destructive",
      });
    },
  });

  const currentModule = (user?.organizationType as ModuleId | undefined) ?? null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={triggerVariant}
          size={triggerSize}
          className="gap-1"
          data-testid="button-pathway-menu"
        >
          {triggerLabel}
          <ChevronDown size={14} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={align} className="w-72">
        {PATHWAYS.map(({ href, module, icon: Icon, title, description, testId }) => {
          const isActive = user && currentModule === module;
          const isPending = switchModule.isPending && switchModule.variables === module;
          return (
            <DropdownMenuItem
              key={href}
              onClick={(e) => {
                if (user) {
                  e.preventDefault();
                  if (isActive || switchModule.isPending) return;
                  switchModule.mutate(module);
                } else {
                  setLocation(href);
                }
              }}
              data-testid={testId}
              className="py-2"
              disabled={switchModule.isPending}
            >
              <Icon size={16} className="mr-2 mt-0.5 text-primary flex-shrink-0" />
              <div className="flex flex-col flex-1">
                <span className="font-semibold flex items-center gap-2">
                  {title}
                  {isActive && (
                    <Check size={14} className="text-primary" data-testid={`icon-pathway-active-${module}`} />
                  )}
                  {isPending && (
                    <Loader2 size={14} className="animate-spin text-muted-foreground" />
                  )}
                </span>
                <span className="text-xs text-muted-foreground">
                  {description}
                </span>
              </div>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
