import React from 'react';
import Accueil from './components/Accueil.js';
import GamePage from './components/GamePage.js';
import Rules from './components/Rules.js';
import Classment from './components/Classment.js';
import './styles/style.css';

import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';




function App() {


  return (
  <>
   <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/GamePage" element={<GamePage />} />
        <Route path="/Rules" element={<Rules />} />
        <Route path="/Classment" element={<Classment />} />
      </Routes>
    </Router>
  
  </>
  );
}

export default App;
