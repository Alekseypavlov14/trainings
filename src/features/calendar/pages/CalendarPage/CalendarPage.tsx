import { FC } from 'react'
import { focusedDateSelector } from '@features/calendar/calendar.slice'
import { Container } from '@components/Container/Container'
import { Calendar } from '@features/calendar/components/Calendar/Calendar'
import { parseDate } from '@features/calendar/utils/parseDate'
import { useSelector } from 'react-redux'
import { trainingsSelector } from '@features/trainings/trainings.slice'
import { areDatesEqual } from '@features/calendar/utils/areDatesEqual'
import { Title } from '@components/Title/Title'
import { Date } from 'standard-ui'
import styles from './CalendarPage.module.css'

interface CalendarPageProps {}

export const CalendarPage: FC<CalendarPageProps> = () => {
  const focusedDate = useSelector(focusedDateSelector)

  const trainings = useSelector(trainingsSelector)
  const trainingsByDate = trainings.filter(training => areDatesEqual(parseDate(training.date), focusedDate))

  return (
    <div className={styles.CalendarPage}>
      <Container>
        <Calendar />

        <div className={styles.TrainingsToday}>
          <Title bold>
            <Date time={window.Date.now()} />
          </Title>

          {trainingsByDate.map(training => (
            <div key={training.id}>{training.name}</div>
          ))}
        </div>
      </Container>
    </div>
  )
}