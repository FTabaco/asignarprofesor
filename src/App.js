import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Tecnicos from './pages/Tecnicos';
import Secundaria from './pages/Secundaria';
import './index.css';

function App() {
  return (
    <Router>
      <Routes> {/* Cambiado de Switch a Routes no se si sera por la versión pero me da error con switch */}
        <Route path="/tecnicos" element={<Tecnicos />} />
        <Route path="/secundaria" element={<Secundaria />} />
        <Route path="/" exact element={<Tecnicos />} />
      </Routes>
    </Router>
  );
}

export default App;
