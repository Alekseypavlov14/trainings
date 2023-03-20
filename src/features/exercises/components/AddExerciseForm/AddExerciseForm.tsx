import { create } from '@features/exercises/exercise.slice'
import { ChangeEvent, FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Input } from 'standard-ui'
import { ExercisesList } from '../ExercisesList/ExercisesList'
import styles from './AddExerciseForm.module.css'

interface AddExerciseFormProps {}

export const AddExerciseForm: FC<AddExerciseFormProps> = () => {
  const [value, setValue] = useState<string>('')
  const dispatch = useDispatch()

  function changeHandler(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value.trim())
  }

  function createExercise() {
    dispatch(create({ name: value }))
    setValue('')
  }

  return (
    <div className={styles.AddExerciseForm}>
      <div className={styles.Form}>
        <Input 
          placeholder='New exercise name...'
          onChange={changeHandler}
          value={value} 
        />

        <Button onClick={createExercise}>
          Create
        </Button>
      </div>

      <ExercisesList />
    </div>
  )
}