import { FC } from 'react'
import styles from './Title.module.css'
import cn from 'classnames'

interface TitleProps {
  children: string
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