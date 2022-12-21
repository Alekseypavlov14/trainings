import { FC } from 'react'
import { Logo } from '@components/Logo/Logo'
import { Title } from '@components/Title/Title'
import styles from './Header.module.css'

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <div className={styles.Header}>
      <Logo />
      
      <Title bold>Workout</Title>
    </div>
  )
}