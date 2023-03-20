import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ExerciseActions } from './exercise.actions'
import { LocalStorage } from "@utils/LocalStorage"
import { generateId } from '@utils/generateId'
import { Exercise } from "./exercise.entity"
import { AppState } from '@store'

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
  reducers: {
    create(state, action: PayloadAction<ExerciseActions.Create>) {
      const newExerciseName = action.payload.name
      const exercises = state.exercises
      const ids = exercises.map(exercise => exercise.id)

      const exercise: Exercise = {
        id: generateId(ids),
        name: newExerciseName
      }

      state.exercises.push(exercise)
      ExercisesStore.setValue(state.exercises)
    },
    destroy(state, action: PayloadAction<ExerciseActions.Destroy>) {
      const id = action.payload.id
      const updatedExercises = state.exercises.filter(exercise => exercise.id !== id)
      
      state.exercises = updatedExercises
      ExercisesStore.setValue(state.exercises)
    }
  }
})

export const exercisesReducer = exercisesSlice.reducer
export const { create, destroy } = exercisesSlice.actions
export const exercisesSelector = (store: AppState) => store.exercises.exercises