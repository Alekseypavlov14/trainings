import { AppState } from '@store'
import { createSlice } from "@reduxjs/toolkit"
import { LocalStorage } from "@utils/LocalStorage"
import { Exercise } from "./exercise.entity"

const ExercisesStore = new LocalStorage<Exercise>('exercises')

interface InitialState {
  exercises: Exercise[]
}

const initialState: InitialState = {
  exercises: ExercisesStore.getValue()
}

export const exercisesSlice = createSlice({
  name: 'exercise',
  initialState,
  reducers: {}
})

export const exercisesReducer = exercisesSlice.reducer
export const exercisesSelector = (store: AppState) => store.exercises.exercises