import { FC, ReactNode } from 'react'
import styles from './Title.module.css'
import cn from 'classnames'

interface TitleProps {
  children: ReactNode
  bold?: boolean
}

export const Title: FC<TitleProps> = ({ children, bold }) => {
  const classNames = cn(styles.Title, bold && styles.Bold)

  return (
    <div className={classNames}>
      {children}
    </div>
  )
}