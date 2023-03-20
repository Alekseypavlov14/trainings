import { Exercise } from "@features/exercises/exercise.entity"

export function parseExerciseToOption(exercise: Exercise) {
  return ({
    label: exercise.name,
    value: exercise.name
  })
}