import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/lib/auth";
import type { FacilityFeatures, FacilityRoleVisibility } from "@shared/schema";

export type { FacilityFeatures, FacilityRoleVisibility };

export interface FacilityFlagsData {
  features: FacilityFeatures;
  roleVisibility: FacilityRoleVisibility;
  visibleRoles: string[];
}

export function useFacilityFeatures() {
  const { user } = useAuth();
  return useQuery<FacilityFlagsData>({
    queryKey: ["/api/features"],
    enabled: !!user,
    staleTime: 5 * 60 * 1000,
  });
}

export function isEnabled(
  features: FacilityFeatures | null | undefined,
  featureKey: keyof FacilityFeatures,
): boolean {
  return features?.[featureKey] === true;
}

export function isRoleVisible(
  roleVisibility: FacilityRoleVisibility | null | undefined,
  roleKey: keyof FacilityRoleVisibility,
): boolean {
  return roleVisibility?.[roleKey] === true;
}
