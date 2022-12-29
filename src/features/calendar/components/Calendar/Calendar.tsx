import { FC, useState } from 'react'
import { focusDate, focusedDateSelector } from '@features/calendar/calendar.slice'
import { useDispatch, useSelector } from 'react-redux'
import { getDaysArrayFromMonth } from '@features/calendar/utils/getDaysArrayFromMonth'
import { shortedDaysOfWeek } from '@features/calendar/constants/daysOfWeek'
import { getMonthFromDate } from '@features/calendar/utils/getMonthFromDate'
import { getPrevDaysRange } from '@features/calendar/utils/getPrevDaysRange'
import { getNextDaysRange } from '@features/calendar/utils/getNextDaysRange'
import { areDatesEqual } from '@features/calendar/utils/areDatesEqual'
import { getPrevMonth } from '@features/calendar/utils/getPrevMonth'
import { getNextMonth } from '@features/calendar/utils/getNextMonth'
import { parseDate } from '@features/calendar/utils/parseDate'
import type { Date } from '@features/calendar/types/Date'
import { WeekDay } from '@features/calendar/components/WeekDay/WeekDay'
import { months } from '@features/calendar/constants/months'
import { Month } from '@features/calendar/types/Month'
import { Day } from '@features/calendar/components/Day/Day'
import styles from './Calendar.module.css'

interface CalendarProps {}

export const Calendar: FC<CalendarProps> = () => {
  const dispatch = useDispatch()
  const focusedDate = useSelector(focusedDateSelector)

  const month = getMonthFromDate(parseDate(Date.now()))
  const [currentMonth, setCurrentMonth] = useState<Month>(month)

  const setPrevMonth = () => setCurrentMonth(getPrevMonth(currentMonth))
  const setNextMonth = () => setCurrentMonth(getNextMonth(currentMonth))

  const focusDateHandler = (date: Date) => {
    return () => dispatch(focusDate({ date }))
  }

  const daysArray = getDaysArrayFromMonth(currentMonth)

  const prevDays = getPrevDaysRange(month)
  const nextDays = getNextDaysRange(month)

  return (
    <>
      <div className={styles.Calendar}>
        <div className={styles.CalendarState}>
          <button onClick={setPrevMonth}>&lt;</button>
          {months[currentMonth.number]} {currentMonth.year}
          <button onClick={setNextMonth}>&gt;</button>
        </div>
  
        <div className={styles.CalendarWeekDays}>
          {shortedDaysOfWeek.map(day => (
            <WeekDay key={day} day={day} />
          ))}
        </div>
  
        <div className={styles.CalendarBody}>
          {prevDays.map(day => <div key={day} />)}
  
          {daysArray.map((day, index) => (
            <Day 
              isFocused={areDatesEqual(focusedDate, day)}
              onClick={focusDateHandler(day)}
              key={`${day}-${index}`} 
              date={day} 
            />
          ))}
  
          {nextDays.map(day => <div key={day} />)}
        </div>
      </div>
    </>
  )
}