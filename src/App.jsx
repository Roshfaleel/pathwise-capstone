import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import Dashboard from './pages/Dashboard/Dashboard';
import SkillsTrackerPage from './pages/SkillsTrackerPage/SkillsTrackerPage';
import AchievementsPage from './pages/AchievementsPage/AchievementsPage';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/signup' element={< SignupPage/>}/>
        <Route path='/dashboard' element={< Dashboard/>}/>
        <Route path='/skills' element={< SkillsTrackerPage/>}/>
        <Route path='/achievements' element={< AchievementsPage/>}/>
        <Route path='/myaccount' element={< Dashboard/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App