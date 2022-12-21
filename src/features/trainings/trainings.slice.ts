import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TrainingsActions } from '@features/trainings/trainings.actions'
import { LocalStorage } from '@utils/LocalStorage'
import { AppState } from '@store'
import { Training } from '@features/trainings/trainings.entity'
import { generateId } from '@utils/generateId'

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
    update(state, action: PayloadAction<TrainingsActions.Update>) {
      const trainings = state.trainings
      const { id, updatedValues } = action.payload
      const training = trainings.find(training => training.id === id)

      if (!training) return state
      Object.assign(training, updatedValues)

      TrainingsStorage.setValue(state.trainings)

    },
    destroy(state, action: PayloadAction<TrainingsActions.Delete>) {
      const trainings = state.trainings
      const id = action.payload.id

      state.trainings = trainings.filter(training => training.id === id)

      TrainingsStorage.setValue(state.trainings)
    }
  }
})

export const trainingsReducer = trainingsSlice.reducer
export const { create, update, destroy } = trainingsSlice.actions
export const trainingsSelector = (state: AppState) => state.trainings