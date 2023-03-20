import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './AddExerciseButton.module.css'

interface AddExerciseButtonProps {}

export const AddExerciseButton: FC<AddExerciseButtonProps> = () => {
  const navigate = useNavigate()

  function clickHandler() {
    navigate('/add-exercise')
  }

  return (
    <button 
      className={styles.AddExerciseButton}
      onClick={clickHandler}
    >
      Add new exercise
    </button>
  )
}