import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import CategoriesFilterPage from './pages/CategoriesFilterPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ErrorPage from './pages/ErrorPage'
import CategoriesPage from './pages/CategoriesPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/home' element={<HomePage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/register' element={<RegisterPage />}/>
        <Route path='/profile' element={<ProfilePage />}/>
        <Route path='/categories' element={<CategoriesFilterPage />}/>
        <Route path='/categoriesfilter' element={<CategoriesPage />}/>
        <Route path="*" element={<ErrorPage />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
