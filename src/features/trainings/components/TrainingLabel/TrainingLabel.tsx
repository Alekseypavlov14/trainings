import { FC } from 'react'
import styles from './TrainingLabel.module.css'

interface TrainingLabelProps {
  name: string
  amount: number
}

export const TrainingLabel: FC<TrainingLabelProps> = ({ name, amount }) => {
  return (
    <div className={styles.TrainingLabel}>
      <div className={styles.Name}>{name}</div>
      <div className={styles.Amount}>{amount}</div>
    </div>
  )
}