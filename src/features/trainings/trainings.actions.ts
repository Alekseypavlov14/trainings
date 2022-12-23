import { Training } from "@features/trainings/trainings.entity"

export namespace TrainingsActions {
  export interface Create extends Omit<Training, 'id'> {}

  export interface Increment {
    id: number
  }

  export interface Decrement {
    id: number
  }
  
  export interface Delete {
    id: number
  }
}