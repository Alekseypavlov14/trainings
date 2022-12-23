import { ChangeEvent, FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Container } from '@components/Container/Container'
import { Title } from '@components/Title/Title'
import { create } from '@features/trainings/trainings.slice'
import styles from './AddTrainingToDayPage.module.css'

interface AddTrainingToDayPageProps {}

export const AddTrainingToDayPage: FC<AddTrainingToDayPageProps> = () => {
  const [name, setName] = useState<string>('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const inputNameHandler = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)

  const addHandler = () => {
    if (name.length === 0) return

    dispatch(create({
      name: name,
      date: Date.now(), // today
      amount: 1 // first today
    }))
  
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