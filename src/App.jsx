import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Login from './components/Login'
import Accountup from './components/Accountup'
import Summarize from './components/Summarize'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Accountup />} />
        <Route path="/summarize" element={<Summarize />} />
      </Routes>
    </Router>
  )
}

export default App;
