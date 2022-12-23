import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './AddTrainingToDay.module.css'

interface AddTrainingToDayProps {}

export const AddTrainingToDay: FC<AddTrainingToDayProps> = () => {
  const navigate = useNavigate()

  const onClick = () => navigate('/add-training')

  return (
    <button 
      className={styles.AddTrainingToDay}
      onClick={onClick}
    >
      +
    </button>
  )
}