import { Layout } from '@components/Layout/Layout'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AddTrainingToDayPage } from '@features/trainings/pages/AddTrainingToDayPage/AddTrainingToDayPage'
import { AddExercisePage } from '@features/exercises/components/AddExercisePage/AddExercisePage'
import { TrainingsInDayPage } from '@features/trainings/pages/TrainingsInDayPage/TrainingsInDayPage'
import { HistoryPage } from '@features/history/pages/HistoryPage/HistoryPage'
import { DatePage } from '@features/history/pages/DatePage/DatePage'
import { CalendarPage } from '@features/calendar/pages/CalendarPage/CalendarPage'
import './App.css'

export function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<TrainingsInDayPage />} />
        <Route path='/add-training' element={<AddTrainingToDayPage />} />
        <Route path='/add-exercise' element={<AddExercisePage />} /> 
        <Route path='/history' element={<HistoryPage />} />
        <Route path='/history/:date' element={<DatePage />} />
        <Route path='/calendar' element={<CalendarPage />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Route>
    </Routes>
  )
}