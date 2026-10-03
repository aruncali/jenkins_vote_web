import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Nav from './components/Nav'
import Contact from './components/Contact'
import Otp from './components/Otp'
import Vote from './components/Vote'
import VoteDone from './components/VoteDone'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HashRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/otp' element={<Otp />} />
          <Route path='/vote' element={<Vote />} />
          <Route path='/votedone' element={<VoteDone />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App