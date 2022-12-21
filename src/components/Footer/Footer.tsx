import { FC } from 'react'
import styles from './Footer.module.css'

interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
  return (
    <div className={styles.Footer}>
      &copy; Aleksey Pavlov 2022
    </div>
  )
}