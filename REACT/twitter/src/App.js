import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'

const App = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/a' element={<Home />}/>
                <Route path='/b' element={<Home />}/>
                <Route path='/c' element={<Home />}/>
                <Route path='/profile' element={<Profile />}/>
                <Route path='/d' element={<Home />}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App