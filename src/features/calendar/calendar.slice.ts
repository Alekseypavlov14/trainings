import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CalendarActions } from "@features/calendar/calendar.actions"
import { parseDate } from "@features/calendar/utils/parseDate"
import type { Date } from "@features/calendar/types/Date"
import { AppState } from "@store"

interface InitialState {
  focusedDate: Date
  selectedTrainingName: string | null
}

const initialState: InitialState = {
  focusedDate: parseDate(Date.now()),
  selectedTrainingName: null
}

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    focusDate(state, action: PayloadAction<CalendarActions.FocusDate>) {
      state.focusedDate = action.payload.date
    },
    selectTraining(state, action: PayloadAction<CalendarActions.SelectTraining>) {
      state.selectedTrainingName = action.payload
    }
  }
})

export const calendarReducer = calendarSlice.reducer
export const { focusDate, selectTraining } = calendarSlice.actions
export const focusedDateSelector = (state: AppState) => state.calendar.focusedDate
export const selectedTrainingNameSelector = (state: AppState) => state.calendar.selectedTrainingName