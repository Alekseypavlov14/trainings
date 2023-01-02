import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TrainingsActions } from '@features/trainings/trainings.actions'
import { LocalStorage } from '@utils/LocalStorage'
import { generateId } from '@utils/generateId'
import { AppState } from '@store'
import { Training } from '@features/trainings/trainings.entity'

const TrainingsStorage = new LocalStorage<Training>('trainings')

interface InitialState {
  trainings: Training[]
}

const initialState: InitialState = {
  trainings: TrainingsStorage.getValue().map(training => ({ ...training, name: training.name.trim() }))
}

const trainingsSlice = createSlice({
  initialState,
  name: 'trainings',
  reducers: {
    create(state, action: PayloadAction<TrainingsActions.Create>) {
      const trainings = state.trainings
      const ids = trainings.map(training => training.id)

      const newId = generateId(ids)
      const newTraining: Training = {
        id: newId,
        ...action.payload
      }

      state.trainings.push(newTraining)
      TrainingsStorage.setValue(state.trainings)
    },
    increment(state, action: PayloadAction<TrainingsActions.Increment>) {
      const trainings = state.trainings
      const training = trainings.find(training => training.id === action.payload.id)

      if (!training) return state

      training.amount += 1

      TrainingsStorage.setValue(state.trainings)
    },
    decrement(state, action: PayloadAction<TrainingsActions.Decrement>) {
      const trainings = state.trainings
      const training = trainings.find(training => training.id === action.payload.id)

      if (!training) return state

      training.amount -= 1

      TrainingsStorage.setValue(state.trainings)
    },
    destroy(state, action: PayloadAction<TrainingsActions.Delete>) {
      const trainings = state.trainings
      const id = action.payload.id

      state.trainings = trainings.filter(training => training.id !== id)

      TrainingsStorage.setValue(state.trainings)
    }
  }
})

export const trainingsReducer = trainingsSlice.reducer
export const { create, increment, decrement, destroy } = trainingsSlice.actions
export const trainingsSelector = (state: AppState) => state.trainings.trainings