import { createSlice } from '@reduxjs/toolkit'
import { AppState } from '@store'
import { Training } from '@features/trainings/trainings.entity'
import { LocalStorage } from '@utils/LocalStorage'

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
    create() {},
    update() {},
    delete() {}
  }
})

export const trainingsReducer = trainingsSlice.reducer
export const {} = trainingsSlice.actions
export const trainingsSelector = (state: AppState) => state.trainings