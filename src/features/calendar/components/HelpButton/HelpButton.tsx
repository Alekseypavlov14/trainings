import { FC } from 'react'
import styles from './HelpButton.module.css'

interface HelpButtonProps {
  onClick: () => void
}

export const HelpButton: FC<HelpButtonProps> = ({ onClick }) => {
  return (
    <button 
      className={styles.HelpButton}
      onClick={onClick}
    >
      ?
    </button>
  )
}