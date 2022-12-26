import { configureStore } from "@reduxjs/toolkit"
import { trainingsReducer } from '@features/trainings/trainings.slice'
import { historyReducer } from "@features/history/history.slice"

export const store = configureStore({
  reducer: {
    trainings: trainingsReducer,
    history: historyReducer
  }
})

export type AppState = ReturnType<typeof store.getState>