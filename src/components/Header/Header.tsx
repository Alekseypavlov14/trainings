import { FC, useState } from 'react'
import { BurgerButton } from 'standard-ui'
import { Logo } from '@components/Logo/Logo'
import { Title } from '@components/Title/Title'
import { SideBar } from '@components/SideBar/SideBar'
import styles from './Header.module.css'

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  const [isMenuOpened, setMenuOpened] = useState(false)
  const toggleMenu = () => setMenuOpened(isOpened => !isOpened)

  return (
    <div className={styles.Header}>
      <div className={styles.TitleAndLogo}>
        <Logo />
        <Title bold>Workout</Title>
      </div>

      <BurgerButton 
        className={styles.BurgerButton}
        isOpened={isMenuOpened}
        onClick={toggleMenu}
      />

      <SideBar 
        isOpened={isMenuOpened} 
        toggleMenu={toggleMenu}
      />
    </div>
  )
}