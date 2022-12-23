import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { decrement, increment } from '@features/trainings/trainings.slice'
import styles from './TrainingBadge.module.css'
import cn from 'classnames'

interface TrainingBadgeProps {
  id: number
  name: string
  amount: number
}

export const TrainingBadge: FC<TrainingBadgeProps> = ({ id, name, amount }) => {
  const dispatch = useDispatch()

  const incrementHandler = () => {
    dispatch(increment({ id }))
  }

  const decrementHandler = () => {
    dispatch(decrement({ id }))
  }

  // if amount is 1 (or less) it is disallowed to decrement
  const isDecrementDisabled = amount <= 1

  return (
    <div className={styles.TrainingBadge}>
      <div className={styles.Name}>{name}</div>
      <div className={styles.Panel}>
        <button 
          className={cn(styles.Button, styles.ButtonMinus)}
          disabled={isDecrementDisabled}
          onClick={decrementHandler}
        >
          -
        </button>

        <div className={styles.Amount}>{amount}</div>

        <button 
          className={cn(styles.Button, styles.ButtonPlus)}
          onClick={incrementHandler}
        >
          +
        </button>
      </div>
    </div>
  )
}