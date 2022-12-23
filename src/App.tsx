import { Layout } from '@components/Layout/Layout'
import { AddTrainingToDayPage } from '@features/trainings/pages/AddTrainingToDayPage/AddTrainingToDayPage'
import { TrainingsInDayPage } from '@features/trainings/pages/TrainingsInDayPage/TrainingsInDayPage'
import { Route, Routes } from 'react-router-dom'
import './App.css'

export function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<TrainingsInDayPage />} />
        <Route path='/add-training' element={<AddTrainingToDayPage />} />
      </Route>
    </Routes>
  )
}