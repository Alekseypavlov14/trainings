import { Layout } from '@components/Layout/Layout'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AddTrainingToDayPage } from '@features/trainings/pages/AddTrainingToDayPage/AddTrainingToDayPage'
import { TrainingsInDayPage } from '@features/trainings/pages/TrainingsInDayPage/TrainingsInDayPage'
import { HistoryPage } from '@features/history/pages/HistoryPage/HistoryPage'
import './App.css'

export function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<TrainingsInDayPage />} />
        <Route path='/add-training' element={<AddTrainingToDayPage />} />
        <Route path='/history' element={<HistoryPage />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Route>
    </Routes>
  )
}