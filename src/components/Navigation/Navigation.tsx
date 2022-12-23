import { FC } from 'react'
import { NavLink } from '@components/NavLink/NavLink'
import styles from './Navigation.module.css'

interface NavigationProps {}

export const Navigation: FC<NavigationProps> = () => {
  return (
    <div className={styles.Navigation}>
      <NavLink to='/'>Today</NavLink>
      <NavLink to='/history'>History</NavLink>
    </div>
  )
}