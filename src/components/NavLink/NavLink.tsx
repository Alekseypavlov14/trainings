import { FC } from 'react'
import { NavLink as ReactNavLink } from 'react-router-dom'
import styles from './NavLink.module.css'
import cn from 'classnames'

interface NavLinkProps {
  to: string
  children: string
}

export const NavLink: FC<NavLinkProps> = ({ to, children }) => {
  return (
    <ReactNavLink 
      className={({ isActive }) => cn(styles.NavLink, isActive && styles.Active)} 
      to={to}
    >
      {children}
    </ReactNavLink>
  )
}