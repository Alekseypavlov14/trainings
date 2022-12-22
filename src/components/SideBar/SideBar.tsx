import { FC } from 'react'
import { Container } from '@components/Container/Container'
import styles from './SideBar.module.css'
import cn from 'classnames'

interface SideBarProps {
  isOpened: boolean
}

export const SideBar: FC<SideBarProps> = ({ isOpened }) => {
  const classNames = cn(styles.SideBar, isOpened && styles.Opened)

  return (
    <div className={classNames}>
      <Container>

      </Container>
    </div>
  )
}