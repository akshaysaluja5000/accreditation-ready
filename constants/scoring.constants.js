const POINT_VALUES = {
  question_correct:            20,
  flashcard_reviewed:          10,
  flashcard_good:              10,
  flashcard_hard:              10,
  flashcard_again:              5,
  final_complete:             100,
  final_passed_first_attempt:  50,
};

const PASSING_THRESHOLD = 75;

module.exports = { POINT_VALUES, PASSING_THRESHOLD };