import { FC } from 'react'
import { useTrainingsByDate } from '@features/trainings/hooks/useTrainingsByDate'
import { AddTrainingToDay } from '@features/trainings/components/AddTrainingToDay/AddTrainingToDay'
import { TrainingBadge } from '@features/trainings/components/TrainingBadge/TrainingBadge'
import { Container } from '@components/Container/Container'
import { parseDate } from '@features/calendar/utils/parseDate'
import { Title } from '@components/Title/Title'
import { Date } from 'standard-ui'
import styles from './TrainingsInDayPage.module.css'

interface TrainingsInDayPageProps {}

export const TrainingsInDayPage: FC<TrainingsInDayPageProps> = () => {
  const trainings = useTrainingsByDate(parseDate(window.Date.now()))

  return (
    <div className={styles.TrainingsInDayPage}>
      <Container>
        <div className={styles.TitleContainer}>
          <Title bold>
            <Date time={window.Date.now()} />
          </Title>
        </div>
        
        <div className={styles.TrainingBadges}>
          {trainings.map(training => (
            <TrainingBadge
              key={training.id}
              id={training.id}
              name={training.name}
              amount={training.amount}
            />
          ))}
        </div>
        
        {trainings.length === 0 && (
          <div className={styles.Placeholder}>
            Let's work out!
          </div>
        )}

        <AddTrainingToDay />
      </Container>
    </div>
  )
}