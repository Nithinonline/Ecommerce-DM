import HomePage from './pages/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignupPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'



function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignupPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
