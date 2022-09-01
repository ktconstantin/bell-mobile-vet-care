import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Schedule from './Schedule';
import Contact from './Contact';
import '../css/app.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route 
            path="/" 
            element={<Home />} 
          />
          <Route 
            path="/about" 
            element={<About />} 
          />
          <Route 
            path="/schedule" 
            element={<Schedule />} 
          />
          <Route 
            path="/contact" 
            element={<Contact />} 
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
