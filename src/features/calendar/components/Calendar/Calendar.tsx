import { FC, useState } from 'react'
import { getDaysArrayFromMonth } from '@features/calendar/utils/getDaysArrayFromMonth'
import { shortedDaysOfWeek } from '@features/calendar/constants/daysOfWeek'
import { getMonthFromDate } from '@features/calendar/utils/getMonthFromDate'
import { getPrevDaysRange } from '@features/calendar/utils/getPrevDaysRange'
import { getNextDaysRange } from '@features/calendar/utils/getNextDaysRange'
import { getPrevMonth } from '@features/calendar/utils/getPrevMonth'
import { getNextMonth } from '@features/calendar/utils/getNextMonth'
import { parseDate } from '@features/calendar/utils/parseDate'
import { WeekDay } from '@features/calendar/components/WeekDay/WeekDay'
import { months } from '@features/calendar/constants/months'
import { Month } from '@features/calendar/types/Month'
import { Day } from '@features/calendar/components/Day/Day'
import styles from './Calendar.module.css'

interface CalendarProps {}

export const Calendar: FC<CalendarProps> = () => {
  const month = getMonthFromDate(parseDate(Date.now()))
  const [currentMonth, setCurrentMonth] = useState<Month>(month)

  const setPrevMonth = () => setCurrentMonth(getPrevMonth(currentMonth))
  const setNextMonth = () => setCurrentMonth(getNextMonth(currentMonth))

  const daysArray = getDaysArrayFromMonth(currentMonth)

  const prevDays = getPrevDaysRange(currentMonth)
  const nextDays = getNextDaysRange(currentMonth)

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