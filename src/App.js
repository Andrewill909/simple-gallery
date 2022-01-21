import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//? Components
import Navbar from './components/Navbar';
//? Pages
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
