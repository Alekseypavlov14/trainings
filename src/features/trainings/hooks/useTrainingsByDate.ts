import { trainingsSelector } from "@features/trainings/trainings.slice"
import { areDatesEqual } from '@features/calendar/utils/areDatesEqual'
import { useSelector } from "react-redux"
import { parseDate } from '@features/calendar/utils/parseDate'
import { Date } from "@features/calendar/types/Date"

export function useTrainingsByDate(date: Date) {
  const trainings = useSelector(trainingsSelector)

  const trainingsByDate = trainings.filter(training => 
    areDatesEqual(parseDate(training.date), date)
  )
  
  return trainingsByDate
}