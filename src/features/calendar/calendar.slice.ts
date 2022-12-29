import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CalendarActions } from "@features/calendar/calendar.actions"
import { parseDate } from "@features/calendar/utils/parseDate"
import { Date } from "@features/calendar/types/Date"
import { AppState } from "@store"

interface InitialState {
  focusedDate: Date
}

const initialState: InitialState = {
  focusedDate: parseDate(Date.now())
}

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    focusDate(state, action: PayloadAction<CalendarActions.FocusDate>) {
      state.focusedDate = action.payload.date
    }
  }
})

export const calendarReducer = calendarSlice.reducer
export const { focusDate } = calendarSlice.actions
export const focusDateSelector = (state: AppState) => state.calendar.focusedDate