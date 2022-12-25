import { FC } from 'react'
import { Date } from 'standard-ui'
import styles from './Day.module.css'

interface DayProps {
  time: number
}

export const Day: FC<DayProps> = ({ time }) => {
  return (
    <div className={styles.Day}>
      <Date time={time} />
    </div>
  )
}