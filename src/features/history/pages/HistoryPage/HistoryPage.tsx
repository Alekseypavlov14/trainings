import { FC } from 'react'
import { useActiveDays } from '@features/history/hooks/useActiveDays'
import { Container } from '@components/Container/Container'
import { Day } from '@features/history/components/Day/Day'
import styles from './HistoryPage.module.css'

interface HistoryPageProps {}

export const HistoryPage: FC<HistoryPageProps> = () => {
  const activeDays = useActiveDays()

  return (
    <div className={styles.HistoryPage}>
      <Container>
        <div className={styles.ActiveDays}>
          {activeDays.reverse().map((day, index) => (
            <div 
              className={styles.Day} 
              key={index}
            >
              <Day time={day} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}