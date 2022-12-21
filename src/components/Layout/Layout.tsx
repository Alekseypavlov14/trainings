import { FC } from 'react'
import { Footer } from '@components/Footer/Footer'
import { Header } from '@components/Header/Header'
import { Outlet } from 'react-router-dom'
import styles from './Layout.module.css'

interface LayoutProps {}

export const Layout: FC<LayoutProps> = () => {
  return (
    <div className={styles.Layout}>
      <div className={styles.Header}>
        <Header />
      </div>

      <div className={styles.Main}>
        <Outlet />
      </div>

      <div className={styles.Footer}>
        <Footer />
      </div>
    </div>
  )
}