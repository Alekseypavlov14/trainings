import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HistoryActions } from '@features/history/history.actions'
import { LocalStorage } from '@utils/LocalStorage'
import { Training } from '@features/trainings/trainings.entity'
import { AppState } from '@store'

const TrainingsStorage = new LocalStorage<Training>('trainings')

interface InitialState {
  searchedDate: number | null
}

const initialState: InitialState = {
  searchedDate: null
}

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    search(state, action: PayloadAction<HistoryActions.Search>) {
      const date = action.payload.date
      const trainings = TrainingsStorage.getValue()
      const activeDates = trainings.map(training => training.date)
      state.searchedDate = activeDates.find(activeDate => activeDate === date) || null
    }
  }
})

export const historyReducer = historySlice.reducer
export const { search } = historySlice.actions
export const searchedDateSelector = (state: AppState) => state.history.searchedDate