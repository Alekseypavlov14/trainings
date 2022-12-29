import { configureStore } from "@reduxjs/toolkit"
import { trainingsReducer } from '@features/trainings/trainings.slice'
import { historyReducer } from "@features/history/history.slice"
import { calendarReducer } from "@features/calendar/calendar.slice"

export const store = configureStore({
  reducer: {
    trainings: trainingsReducer,
    history: historyReducer,
    calendar: calendarReducer
  }
})

export type AppState = ReturnType<typeof store.getState>