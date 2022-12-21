import { Training } from "@features/trainings/trainings.entity"

export namespace TrainingsActions {
  export interface Create extends Omit<Training, 'id'> {}

  export interface Update {
    id: number
    updatedValues: Omit<Training, 'id'>
  }
  
  export interface Delete {
    id: number
  }
}