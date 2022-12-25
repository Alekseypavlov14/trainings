import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { destroy } from '@features/trainings/trainings.slice'
import styles from './DeleteButton.module.css'

interface DeleteButtonProps {
  id: number
}

export const DeleteButton: FC<DeleteButtonProps> = ({ id }) => {
  const dispatch = useDispatch()

  const deleteTraining = () => {
    dispatch(destroy({ id }))
  }

  return (
    <button 
      className={styles.DeleteButton}
      onClick={deleteTraining}
    >
      x
    </button>
  )
}