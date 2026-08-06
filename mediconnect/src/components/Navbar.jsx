import React from 'react';
import './Navbar.css';

export default function Navbar({ onScrollTo }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => onScrollTo('hero')}>
        🩺 MediConnect
      </div>
      <div className="navbar-menu">
        <button className="nav-link" onClick={() => onScrollTo('doctors')}>
          Find Doctors
        </button>
        <button className="nav-link" onClick={() => onScrollTo('booking')}>
          Book Slot
        </button>
      </div>
    </nav>
  );
}