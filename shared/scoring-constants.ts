export const POINT_VALUES = {
  question_correct:            20,  // correct answers only — incorrect earn zero
  flashcard_reviewed:          10,  // ALL ratings (Again/Hard/Good) earn same points
  final_complete:             100,  // flat bonus when final exam submitted
  final_passed_first_attempt:  50,  // bonus for passing on first attempt
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
