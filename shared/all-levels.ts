import type { Level, ModuleId } from "./schema";
import { hospitalLevels } from "./questions";
import { ascLevels } from "./asc-questions";
import { dnvLevels } from "./dnv-niaho-questions";
import { ASC_ROLE_MODULE_MAP } from "./roles";

export const levelsByModule: Record<ModuleId, Level[]> = {
  hospital: hospitalLevels,
  asc: ascLevels,
  dnv: dnvLevels,
};

export function getLevelsForModule(module: ModuleId): Level[] {
  return levelsByModule[module] ?? [];
}

export function getVisibleLevelsForModule(
  module: ModuleId,
  opts: { includeDraft?: boolean } = {},
  allowedModuleIds?: string[],
): Level[] {
  const levels = getLevelsForModule(module);
  const visible = opts.includeDraft
    ? levels
    : levels
        .filter((l) => !l.draft)
        .map((l) => ({
          ...l,
          questions: l.questions.filter((q) => !q.draft),
        }));

  if (module === "asc" && allowedModuleIds && allowedModuleIds.length > 0) {
    const allowedSet = new Set(allowedModuleIds);
    return visible.filter((l) => allowedSet.has(l.id));
  }

  return visible;
}

export function getVisibleLevelsForAscRole(
  roleSlug: string,
  opts: { includeDraft?: boolean } = {},
): Level[] {
  const all = getVisibleLevelsForModule("asc", opts);
  const allowed = ASC_ROLE_MODULE_MAP[roleSlug as keyof typeof ASC_ROLE_MODULE_MAP];
  if (!allowed || allowed.length === 0) return all;
  const allowedSet = new Set(allowed);
  return all.filter((l) => allowedSet.has(l.id));
}

export function getAllLevels(): Level[] {
  return [...hospitalLevels, ...ascLevels, ...dnvLevels];
}

export function findLevelById(levelId: string): Level | undefined {
  return getAllLevels().find((l) => l.id === levelId);
}
