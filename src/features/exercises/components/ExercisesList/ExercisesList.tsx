import { FC } from 'react'
import { destroy, exercisesSelector } from '@features/exercises/exercise.slice'
import { useDispatch, useSelector } from 'react-redux'
import styles from './ExercisesList.module.css'

interface ExercisesListProps {}

export const ExercisesList: FC<ExercisesListProps> = () => {
  const exercises = useSelector(exercisesSelector)
  const dispatch = useDispatch()

  function deleteExercise(id: number) {
    return () => dispatch(destroy({ id }))
  }

  return (
    <div className={styles.ExercisesList}>
      <div className={styles.Title}>Exercises:</div>

      {exercises.map(exercise => (
        <div 
          className={styles.Exercise}
          key={exercise.id}
        >
          <div className={styles.Text}>
            {exercise.name}
          </div>

          <button 
            onClick={deleteExercise(exercise.id)}
            className={styles.Button} 
          >
            X
          </button>
        </div>
      ))}
    </div>
  )
}