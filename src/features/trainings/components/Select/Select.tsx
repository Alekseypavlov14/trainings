import { FC } from 'react'
import { useOptions } from '@features/trainings/hooks/useOptions'
import { Option } from '@features/trainings/types/Option'
import ReactSelect, { SingleValue } from 'react-select'
import styles from './Select.module.css'

interface SelectProps {
  value: string
  updateValue: (name: string) => void
}

export const Select: FC<SelectProps> = ({ updateValue }) => {
  const options = useOptions()

  function changeHandler(value: SingleValue<Option>) {
    if (!value) return updateValue('')
    updateValue(value.value)
  } 

  return (
    <ReactSelect 
      options={options}
      className={styles.Select}
      onChange={changeHandler}
      isSearchable={false}
    />
  )
}