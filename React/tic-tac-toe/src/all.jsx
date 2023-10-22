

import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import App from './App'
import Home from './home'

export default function All() {
  return (
    
    <Router>
      <Routes>
        <Route path = "/" element={<App />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </Router>
  )
}
