import { FC } from 'react'
import logo from '@assets/logo.png'
import styles from './Logo.module.css'

interface LogoProps {}

export const Logo: FC<LogoProps> = () => {
  return (
    <div className={styles.Wrapper}>
      <img 
        className={styles.Image}
        src={logo}
        alt=''
      />
    </div>
  )
}