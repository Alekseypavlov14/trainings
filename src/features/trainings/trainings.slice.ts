import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TrainingsActions } from '@features/trainings/trainings.actions'
import { LocalStorage } from '@utils/LocalStorage'
import { AppState } from '@store'
import { Training } from '@features/trainings/trainings.entity'

const TrainingsStorage = new LocalStorage<Training>('trainings')

interface InitialState {
  trainings: Training[]
}

const initialState: InitialState = {
  trainings: TrainingsStorage.getValue()
}

const trainingsSlice = createSlice({
  initialState,
  name: 'trainings',
  reducers: {
    create(state, action: PayloadAction<TrainingsActions.Create>) {},
    update(state, action: PayloadAction<TrainingsActions.Update>) {},
    destroy(state, action: PayloadAction<TrainingsActions.Delete>) {}
  }
})

export const trainingsReducer = trainingsSlice.reducer
export const { create, update, destroy } = trainingsSlice.actions
export const trainingsSelector = (state: AppState) => state.trainings