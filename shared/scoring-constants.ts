export const POINT_VALUES = {
  question_correct:            20,
  flashcard_again:              5,
  flashcard_hard:               8,
  flashcard_good:              10,
  daily_login:                 15,
  diagnostic_complete:          0,
  final_complete:             100,
  final_passed_first_attempt:  50,
} as const;

export type PointEventType = keyof typeof POINT_VALUES;

export const PASSING_THRESHOLD = 75;
