import { FC, useState } from 'react'
import { Container } from '@components/Container/Container'
import { Calendar } from '@features/calendar/components/Calendar/Calendar'
import { parseDate } from '@features/calendar/utils/parseDate'
import { useSelector } from 'react-redux'
import { trainingsSelector } from '@features/trainings/trainings.slice'
import { areDatesEqual } from '@features/calendar/utils/areDatesEqual'
import styles from './CalendarPage.module.css'

interface CalendarPageProps {}

export const CalendarPage: FC<CalendarPageProps> = () => {
  const [focusedDate, setFocusedDate] = useState(parseDate(Date.now()))

  const trainings = useSelector(trainingsSelector)
  const trainingsByDate = trainings.filter(training => areDatesEqual(parseDate(training.date), focusedDate))

  return (
    <div className={styles.CalendarPage}>
      <Container>
        <Calendar 
          focusedDate={focusedDate} 
          setFocusedDate={setFocusedDate} 
        />

        {trainingsByDate.map(training => (
          <div key={training.id}>{training.name}</div>
        ))}
      </Container>
    </div>
  )
}