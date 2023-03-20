import { FC } from 'react'
import { AddTrainingForm } from '@features/trainings/components/AddTrainingForm/AddTrainingForm'
import { Container } from '@components/Container/Container'
import { Title } from '@components/Title/Title'

interface AddTrainingToDayPageProps {}

export const AddTrainingToDayPage: FC<AddTrainingToDayPageProps> = () => {
  return (
    <Container>
      <Title bold>Add Training</Title>
      <AddTrainingForm />
    </Container>
  )
}