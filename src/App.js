import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Tecnicos from './pages/Tecnicos';
import Secundaria from './pages/Secundaria';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/tecnicos" element={<Tecnicos />} />
        <Route path="/secundaria" element={<Secundaria />} />
        <Route path="/" element={<Tecnicos />} />
      </Routes>
    </Router>
  );
}

export default App;
