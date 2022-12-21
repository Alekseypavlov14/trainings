import { Title } from '@components/Title/Title'
import { FC } from 'react'
import styles from './Header.module.css'

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <div className={styles.Header}>
      <Title bold>Workout</Title>
    </div>
  )
}