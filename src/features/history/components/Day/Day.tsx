import { FC } from 'react'
import { useNavigate } from 'react-router'
import { Date } from 'standard-ui'
import styles from './Day.module.css'

interface DayProps {
  time: number
}

export const Day: FC<DayProps> = ({ time }) => {
  const navigate = useNavigate()

  const navigateHandler = () => navigate(`/history/${time}`)

  return (
    <div 
      className={styles.Day}
      onClick={navigateHandler}
    >
      <Date time={time} />
    </div>
  )
}