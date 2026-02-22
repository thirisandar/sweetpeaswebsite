import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Program from './pages/Program'; 
import Faq from './pages/Faq'; 

function App() {
  return (
    <Router>
      <Routes>
        {/* path="/" means the default Home page */}
        <Route path="/" element={<Home />} />
        
        {/* path="/about" means the About page */}
        <Route path="/about" element={<About />} />
        <Route path="/program" element={<Program />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </Router>
  );
}

export default App;