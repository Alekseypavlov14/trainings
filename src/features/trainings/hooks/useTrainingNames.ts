import { trainingsSelector } from '@features/trainings/trainings.slice'
import { useSelector } from 'react-redux'

export function useTrainingNames() {
  const trainings = useSelector(trainingsSelector)
  const trainingNames = trainings.map(training => training.name)
  const uniqueTrainingNames = Array.from(new Set(trainingNames))
  return uniqueTrainingNames
}