import { FC, useState } from 'react'
import { useTraining } from '@features/trainings/hooks/useTraining'
import { Select } from '../Select/Select'
import styles from './AddTrainingForm.module.css'

interface AddTrainingFormProps {}

export const AddTrainingForm: FC<AddTrainingFormProps> = () => {
  const [name, setName] = useState<string>('')
  const createTraining = useTraining()
  
  function addTraining() {
    createTraining(name)
  }

  return (
    <div className={styles.AddTrainingForm}>
      <Select 
        updateValue={setName} 
        value={name} 
      />

      <button 
        className={styles.Button}
        onClick={addTraining}
      >
        Add!
      </button>
    </div>
  )
}