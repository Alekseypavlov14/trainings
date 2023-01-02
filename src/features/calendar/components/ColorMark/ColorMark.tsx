import { FC } from 'react'
import styles from './ColorMark.module.css'

export enum Colors {
  Green = 'rgb(26, 158, 0)',
  Blue = 'rgb(6, 92, 252)',
  Yellow = 'rgb(245, 245, 89)'
}

interface ColorMarkProps {
  color: Colors
}

export const ColorMark: FC<ColorMarkProps> = ({ color }) => {
  return (
    <div 
      className={styles.ColorMark} 
      style={{ backgroundColor: color }} 
    />
  )
}