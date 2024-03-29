import { ChangeEvent, FC, useEffect, useState } from 'react'
import { useTrainingNames } from '@features/trainings/hooks/useTrainingNames'
import { selectTraining } from '@features/calendar/calendar.slice'
import { useDispatch } from 'react-redux'
import styles from './SelectForm.module.css'

interface SelectFormProps {}

export const SelectForm: FC<SelectFormProps> = () => {
  const trainingNames = useTrainingNames()
  const [selectedValue, setSelectedValue] = useState<string | undefined>(undefined)

  const dispatch = useDispatch()

  const defaultOptionValue = 'All'

  const selectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value !== defaultOptionValue ? e.target.value : undefined
    setSelectedValue(value)
  }

  useEffect(() => {
    dispatch(selectTraining(selectedValue || null))
  }, [selectedValue])
  
  return (
    <div className={styles.SelectForm}>
      <select 
        className={styles.Select} 
        onChange={selectHandler}
        value={selectedValue}
      >
        <option value={defaultOptionValue}>
          {defaultOptionValue}
        </option>
        
        {trainingNames.map((trainingName, index) => (
          <option
            value={trainingName}
            key={index}
          >
            {trainingName}
          </option>
        ))}
      </select>
    </div>
  )
}