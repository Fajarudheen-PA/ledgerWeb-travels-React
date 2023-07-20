import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Forms from './pages/Forms';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/services' element={<Services />}/>
          <Route path='/services/form' element={<Forms />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
