import { FC } from 'react'
import styles from './WeekDay.module.css'

interface WeekDayProps {
  day: string
}

export const WeekDay: FC<WeekDayProps> = ({ day }) => {
  return (
    <div className={styles.WeekDay}>
      {day}
    </div>
  )
}