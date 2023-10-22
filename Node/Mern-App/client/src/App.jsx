import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/home.jsx';
import Auth from './pages/auth.jsx';
import CreateRecipe from './pages/create-recipe.jsx';
import SavedRecipe from './pages/saved-recipe.jsx';
import Navbar from './components/navbar';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-recipes' element={<CreateRecipe />} />
          <Route path='/saved-recipes' element={<SavedRecipe />} />
          <Route path='/auth' element={<Auth />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
