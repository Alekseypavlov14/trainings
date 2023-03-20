import { Container } from '@components/Container/Container'
import { FC } from 'react'
import { AddExerciseForm } from '../AddExerciseForm/AddExerciseForm'
import styles from './AddExercisePage.module.css'

interface AddExercisePageProps {}

export const AddExercisePage: FC<AddExercisePageProps> = () => {
  return (
    <Container>
      <AddExerciseForm />
    </Container>
  )
}