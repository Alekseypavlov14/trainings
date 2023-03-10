import { FC, useState } from 'react'
import { focusedDateSelector } from '@features/calendar/calendar.slice'
import { trainingsSelector } from '@features/trainings/trainings.slice'
import { areDatesEqual } from '@features/calendar/utils/areDatesEqual'
import { TrainingLabel } from '@features/trainings/components/TrainingLabel/TrainingLabel'
import { useSelector } from 'react-redux'
import { ColorHelper } from '@features/calendar/components/ColorHelper/ColorHelper'
import { HelpButton } from '@features/calendar/components/HelpButton/HelpButton'
import { SelectForm } from '@features/calendar/components/SelectForm/SelectForm'
import { DateTitle } from '@features/calendar/components/DateTitle/DateTitle'
import { Container } from '@components/Container/Container'
import { parseDate } from '@features/calendar/utils/parseDate'
import { Calendar } from '@features/calendar/components/Calendar/Calendar'
import { Title } from '@components/Title/Title'
import styles from './CalendarPage.module.css'

interface CalendarPageProps {}

export const CalendarPage: FC<CalendarPageProps> = () => {
  const [isShown, setShown] = useState<boolean>(false)

  const openModal = () => setShown(true)
  const closeModal = () => setShown(false)

  const focusedDate = useSelector(focusedDateSelector)

  const trainings = useSelector(trainingsSelector)
  const trainingsByDate = trainings.filter(training => areDatesEqual(parseDate(training.date), focusedDate))

  return (
    <div className={styles.CalendarPage}>
      <Container>
        <div className={styles.CalendarContainer}>
          <Calendar />
        </div>

        <SelectForm />

        {trainingsByDate.length > 0 ? (
          <Title bold>
            <DateTitle date={focusedDate} />
          </Title>
        ) : (
          <div className={styles.Placeholder}>
            There were no training at this day
          </div>
        )}

        <div className={styles.TrainingsToday}>
          {trainingsByDate.map(training => (
            <TrainingLabel 
              key={training.id} 
              name={training.name}
              amount={training.amount}
            />
          ))}
        </div>

        <HelpButton onClick={openModal} />

        <ColorHelper 
          isShown={isShown} 
          onClose={closeModal} 
        />
      </Container>
    </div>
  )
}