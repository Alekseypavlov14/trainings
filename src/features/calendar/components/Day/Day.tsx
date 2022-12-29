import { FC } from 'react'
import { focusDate, focusedDateSelector } from '@features/calendar/calendar.slice'
import { useDispatch, useSelector } from 'react-redux'
import { areDatesEqual } from '@features/calendar/utils/areDatesEqual'
import { useActiveDays } from '@features/history/hooks/useActiveDays'
import { parseDate } from '@features/calendar/utils/parseDate'
import type { Date } from '@features/calendar/types/Date'
import styles from './Day.module.css'
import cn from 'classnames'

interface DayProps {
  date: Date
}

export const Day: FC<DayProps> = ({ date }) => {
  const dispatch = useDispatch()
  const focusedDate = useSelector(focusedDateSelector)
  const activeDates = useActiveDays().map(day => parseDate(day))

  const isToday = areDatesEqual(date, parseDate(Date.now()))
  const isFocused = areDatesEqual(date, focusedDate)
  const isActiveDate = activeDates.some(activeDate => areDatesEqual(activeDate, date))

  const classNames = cn(
    styles.Day, 
    isToday && styles.Today, 
    isFocused && styles.Focused, 
    isActiveDate && styles.ActiveDate
  )

  const focusDateHandler = () => dispatch(focusDate({ date }))

  return (
    <div 
      className={classNames}
      onClick={focusDateHandler}
    >
      {date.day}
    </div>
  )
}