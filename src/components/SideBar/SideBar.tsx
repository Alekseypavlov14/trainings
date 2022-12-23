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
  const classNames = cn(styles.SideBar, isOpened && styles.Opened)

  return (
    <div 
      className={classNames} 
      onClick={toggleMenu}
    >
      <Container>
        <Title bold>Navigation</Title>
        <Navigation />
      </Container>
    </div>
  )
}