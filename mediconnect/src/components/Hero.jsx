import React from 'react';
import './Hero.css';

export default function Hero({ onScrollTo }) {
  return (
    <section className="hero" id="hero">
      <span className="hero-badge">3-Click Telehealth Flow</span>
      <h1 className="hero-heading">Instant Doctor Consultations <span>Made Simple</span></h1>
      <p className="hero-subtext">Find trusted specialists, pick a convenient slot, and get care from anywhere.</p>
      <button className="hero-btn" onClick={() => onScrollTo('doctors')}>Find Specialists</button>
    </section>
  );
}