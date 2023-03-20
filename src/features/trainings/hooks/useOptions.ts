import { parseExerciseToOption } from "../utils/parseExerciseToOption"
import { exercisesSelector } from "@features/exercises/exercise.slice"
import { useSelector } from "react-redux"
import { Option } from "../types/Option"

export function useOptions(): Option[] {
  const exercises = useSelector(exercisesSelector)
  const options = exercises.map(exercise => parseExerciseToOption(exercise))
  return options
}