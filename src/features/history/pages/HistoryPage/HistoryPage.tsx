import { FC } from 'react'
import { searchedDateSelector } from '@features/history/history.slice'
import { useActiveDays } from '@features/history/hooks/useActiveDays'
import { useSelector } from 'react-redux'
import { Container } from '@components/Container/Container'
import { Search } from '@features/history/components/Search/Search'
import { Day } from '@features/history/components/Day/Day'
import styles from './HistoryPage.module.css'

interface HistoryPageProps {}

export const HistoryPage: FC<HistoryPageProps> = () => {
  const activeDays = useActiveDays()
  const searchedDate = useSelector(searchedDateSelector)

  return (
    <div className={styles.HistoryPage}>
      <Container>
        <div className={styles.SearchBox}>
          <label className={styles.SearchLabel}>Enter date to search:</label>
          <Search />
        </div>
        
        <div className={styles.ActiveDays}>
          {searchedDate ? (
            <div className={styles.Day}>
              <Day time={searchedDate} />
            </div>
          ) : activeDays.map((day, index) => (
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