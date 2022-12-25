import { trainingsSelector } from '@features/trainings/trainings.slice'
import { useSelector } from 'react-redux'

export function useActiveDays() {
  const trainings = useSelector(trainingsSelector)
  const days = trainings.map(training => training.date)
  const uniqueDays = Array.from(new Set(days))
  return uniqueDays
}