import { FC } from 'react'
import { Date } from '@features/calendar/types/Date'

interface DateTitleProps {
  date: Date
}

export const DateTitle: FC<DateTitleProps> = ({ date }) => {
  const dayView = date.day >= 10 ? date.day : `0${date.day}`
  const monthView = (date.month + 1) >= 10 ? (date.month + 1) : `0${date.month + 1}`

  return (
    <>{dayView}.{monthView}.{date.year}</>
  )
}