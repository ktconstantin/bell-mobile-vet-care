import React from 'react';

export default function Navbar() {
  return (
    <header>
      <nav className="nav" role="navigation">
        <a href="/" className="site-title">Bell Mobile Veterinary Care</a>
        <ul>
          <li><a href="#" id="nav--home">Home</a></li>
          <li><a href="#" id="nav--about">About</a></li>
          <li><a href="#" id="nav--schedule">Schedule</a></li>
          <li><a href="#" id="nav--contact">Contact</a></li>
        </ul>
      </nav>
    </header>
    
  )
}
