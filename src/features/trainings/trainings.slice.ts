import { createSlice } from '@reduxjs/toolkit'
import { AppState } from '@store'

interface InitialState {
  trainings: []
}

const initialState: InitialState = {
  trainings: []
}

const trainingsSlice = createSlice({
  initialState,
  name: 'trainings',
  reducers: {}
})

export const trainingsReducer = trainingsSlice.reducer
export const {} = trainingsSlice.actions
export const trainingsSelector = (state: AppState) => state.trainings