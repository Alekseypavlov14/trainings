import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Container } from '@components/Container/Container'
import { AddTrainingToDay } from '@features/trainings/components/AddTrainingToDay/AddTrainingToDay'
import { TrainingBadge } from '@features/trainings/components/TrainingBadge/TrainingBadge'
import { trainingsSelector } from '@features/trainings/trainings.slice'
import styles from './TrainingsInDayPage.module.css'

interface TrainingsInDayPageProps {}

export const TrainingsInDayPage: FC<TrainingsInDayPageProps> = () => {
  const trainings = useSelector(trainingsSelector)

  return (
    <div className={styles.TrainingsInDayPage}>
      <Container>
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

        <AddTrainingToDay />
      </Container>
    </div>
  )
}