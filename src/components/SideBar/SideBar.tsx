import { FC } from 'react'
import { Container } from '@components/Container/Container'
import { Navigation } from '@components/Navigation/Navigation'
import { Title } from '@components/Title/Title'
import styles from './SideBar.module.css'
import cn from 'classnames'

interface SideBarProps {
  isOpened: boolean
  toggleMenu: () => void
}

export const SideBar: FC<SideBarProps> = ({ isOpened, toggleMenu }) => {
  const SideBarClassNames = cn(styles.SideBar, isOpened && styles.Opened)
  const BackGroundClassNames = cn(styles.BackGround, isOpened && styles.Opened)

  return (
    <>
      <div 
        className={BackGroundClassNames}
        onClick={toggleMenu}
      >
      </div>
      <div 
        className={SideBarClassNames} 
        onClick={toggleMenu}
      >
        <Container>
          <Title bold>Navigation</Title>
          <Navigation />
        </Container>
      </div>
    </>
  )
}