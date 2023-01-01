import { Date } from "@features/calendar/types/Date"

export namespace CalendarActions {
  export interface FocusDate {
    date: Date
  }

  export type SelectTraining = string | null
}