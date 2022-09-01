import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import logo from '../img/logo.png';

export default function Navbar({ isScheduleDisplayed, handleScheduleClick }) {
  

  return (
    
      <nav className="nav" role="navigation">
        <img 
          src={logo} 
          alt="company logo"
          className="logo"
        />
        <ul>
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/about">About</CustomLink>
          <CustomLink to="/schedule">Schedule</CustomLink>
          <CustomLink to="/contact">Contact Us</CustomLink>
        </ul>
      </nav>
    
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ 
    path: resolvedPath.pathname, 
    end: true 
  });

  return (
    <li className={isActive ? "active" : ""}>
      <Link 
        to={to} 
        {...props}
      >
        {children}
      </Link>
    </li>
  )
}
