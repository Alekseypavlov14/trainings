import { FC, useEffect } from 'react'
import { useTrainingsByDate } from '@features/trainings/hooks/useTrainingsByDate'
import { TrainingBadge } from '@features/trainings/components/TrainingBadge/TrainingBadge'
import { useNavigate } from 'react-router-dom'
import { Container } from '@components/Container/Container'
import { useParams } from 'react-router'
import { Title } from '@components/Title/Title'
import { Date } from 'standard-ui'
import styles from './DatePage.module.css'

interface DatePageProps {}

export const DatePage: FC<DatePageProps> = () => {
  const navigate = useNavigate()
  const date = Number(useParams().date)
  const trainings = useTrainingsByDate(date)

  useEffect(() => {
    if (!date) navigate('/')
  }, [date])

  return (
    <div className={styles.DatePage}>
      <Container>
        <Title bold>
          <Date time={date} />
        </Title>

        <div className={styles.Trainings}>
          {trainings.map(training => (
            <div className={styles.Training} key={training.id}>
              <div className={styles.TrainingName}>
                {training.name}
              </div>
              <div className={styles.TrainingAmount}>
                {training.amount}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}