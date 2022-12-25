import { trainingsSelector } from "@features/trainings/trainings.slice"
import { compareDates } from "@features/trainings/utils/compareDates"
import { useSelector } from "react-redux"

export function useTrainingsByDate(date: number) {
  const trainings = useSelector(trainingsSelector)
  const trainingsByDate = trainings.filter(training => compareDates(training.date, date))
  return trainingsByDate
}