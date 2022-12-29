import { ChangeEvent, FC, useEffect, useState } from 'react'
import { getMillisecondsFromDate } from '@features/history/utils/getMillisecondsFromDate'
import { useDispatch, useSelector } from 'react-redux'
import { search, searchedDateSelector } from '@features/history/history.slice'
import styles from './Search.module.css'

interface SearchProps {}

export const Search: FC<SearchProps> = () => {
  const [value, setValue] = useState('')
  const searchedDate = useSelector(searchedDateSelector)
  const dispatch = useDispatch()

  const searchingHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)

  useEffect(() => {
    const milliseconds = getMillisecondsFromDate(value)
    dispatch(search({ date: milliseconds }))
  }, [value])

  return (
    <>
      <input 
        onChange={searchingHandler}
        className={styles.Search}
        value={value}
        type='date'
      />

      {!searchedDate && value.length > 0 && (
        <div className={styles.SearchResult}>
          There were no trainings at this day
        </div>
      )}
    </>
  )
}