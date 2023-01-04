import { FC } from 'react'
import { Modal } from 'standard-ui'
import { ColorMark, Colors } from '@features/calendar/components/ColorMark/ColorMark'
import styles from './ColorHelper.module.css'
import cn from 'classnames'

interface ColorHelperProps {
  isShown: boolean
  onClose: () => void
}

export const ColorHelper: FC<ColorHelperProps> = ({ isShown, onClose }) => {
  const classNames = cn(!isShown && styles.Hidden)

  return (
    <div className={classNames}>
      <Modal 
        title='Color Palette' 
        onClose={onClose}
      >
        <>
          <div className={styles.Row}>
            <ColorMark color={Colors.Green} />
            <div className={styles.ColorMeaning}>Days when you were training</div>
          </div>
          <div className={styles.Row}>
            <ColorMark color={Colors.Blue} />
            <div className={styles.ColorMeaning}>Day which you selected to check trainings</div>
          </div>
          <div className={styles.Row}>
            <ColorMark color={Colors.Yellow} />
            <div className={styles.ColorMeaning}>Days when you did that exercise you selected to check</div>
          </div>
        </>
      </Modal>
    </div>
  )
}