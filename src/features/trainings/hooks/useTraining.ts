import { useDispatch } from 'react-redux'
import { create } from '@features/trainings/trainings.slice'

export function useTraining() {
  const dispatch = useDispatch()

  return (name: string) => {
    const now = new Date()
    const date = now.getDate()
    const month = now.getMonth()
    const year = now.getFullYear()
    const today = new Date(year, month, date)
  
    dispatch(create({
      name: name.trim(),
      date: today.getTime(),
      amount: 1
    }))
  }
}