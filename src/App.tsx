import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import ReclamationPage from './pages/reclamation'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/home' element={<HomePage />}/>
        <Route path='/reclamation' element={<ReclamationPage />}/>
        <Route path='/profile' element={<ProfilePage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
