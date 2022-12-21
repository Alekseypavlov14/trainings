import { configureStore } from "@reduxjs/toolkit"
import { trainingsReducer } from '@features/trainings/trainings.slice'

export const store = configureStore({
  reducer: {
    trainings: trainingsReducer
  }
})

export type AppState = ReturnType<typeof store.getState>