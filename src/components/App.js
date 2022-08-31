import React from 'react';
import Navbar from './Navbar';
import Schedule from './Schedule';
import '../css/app.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Schedule />
    </div>
  );
}

export default App;
