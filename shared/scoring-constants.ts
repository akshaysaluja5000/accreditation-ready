export const POINT_VALUES = {
  question_correct:            20,
  flashcard_again:              5,
  flashcard_hard:               5,
  flashcard_good:               5,
  daily_login:                 15,
  diagnostic_complete:          0,
  final_complete:             100,
  final_passed_first_attempt:  50,
} as const;

export type PointEventType = keyof typeof POINT_VALUES;

export const PASSING_THRESHOLD = 75;

/**
 * Calculate whether a final exam score passes the threshold.
 * Pure function — safe to call on both client and server.
 * Returns { passed, score } where score is a rounded percentage (0-100).
 */
export function calculateFinalExamResult(
  correctAnswers: number,
  totalQuestions: number,
): { passed: boolean; score: number } {
  const score = Math.round((correctAnswers / totalQuestions) * 100);
  return { passed: score >= PASSING_THRESHOLD, score };
}
