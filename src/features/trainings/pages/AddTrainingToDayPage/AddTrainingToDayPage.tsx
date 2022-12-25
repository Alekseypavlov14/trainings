import { ChangeEvent, FC, useState } from 'react'
import { useTraining } from '@features/trainings/hooks/useTraining'
import { useNavigate } from 'react-router-dom'
import { Container } from '@components/Container/Container'
import { Title } from '@components/Title/Title'
import styles from './AddTrainingToDayPage.module.css'

interface AddTrainingToDayPageProps {}

export const AddTrainingToDayPage: FC<AddTrainingToDayPageProps> = () => {
  const [name, setName] = useState<string>('')
  const createTraining = useTraining()
  const navigate = useNavigate()

  const inputNameHandler = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)

  const addHandler = () => {
    if (name.length === 0) return
    createTraining(name)
    navigate('/')
  }

  return (
    <div className={styles.AddTrainingToDayPage}>
      <Container>
        <Title bold>Add Training</Title>

        <div className={styles.Form}>
          <label
            htmlFor='#name' 
            className={styles.Label}
          >
            Name:
          </label>
          <input 
            onChange={inputNameHandler}
            className={styles.Input} 
            value={name}
            id='#name' 
          />
        </div>

        <button 
          className={styles.Button}
          onClick={addHandler}
        >
          Add!
        </button>
      </Container>
    </div>
  )
}