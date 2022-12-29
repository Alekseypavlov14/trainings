import { FC } from 'react'
import { parseDate } from '@features/calendar/utils/parseDate'
import { areDatesEqual } from '@features/calendar/utils/areDatesEqual'
import type { Date } from '@features/calendar/types/Date'
import styles from './Day.module.css'
import cn from 'classnames'

interface DayProps {
  date: Date
  onClick: () => void
  isFocused: boolean
}

export const Day: FC<DayProps> = ({ date, onClick, isFocused }) => {
  const classNames: string[] = []

  // add styles if it is today
  const today = parseDate(Date.now())
  if (areDatesEqual(date, today)) classNames.push(styles.Today)

  // add styles if it is focused
  if (isFocused) classNames.push(styles.Focused)

  const className = cn(
    styles.Day,
    ...classNames
  )

  return (
    <div 
      className={className}
      onClick={onClick}
    >
      {date.day}
    </div>
  )
}