import { useState } from 'react'
import Login from './pages/Login'
import NavBar from './components/NavBar'
import { AuthProvider } from './AuthContext'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Register from './pages/Register'
function App() {

  return (
    <div className='w-full  bg-gray-400 h-screen flex flex-col'>
    
    <AuthProvider>
      <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
      </BrowserRouter>
    </AuthProvider>
    </div>
  )
}

export default App
