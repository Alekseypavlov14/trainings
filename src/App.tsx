import { Layout } from '@components/Layout/Layout'
import { Route, Routes } from 'react-router-dom'
import './App.css'

export function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<></>}></Route>
      </Route>
    </Routes>
  )
}