import React from 'react';
import './DoctorCard.css';

export default function DoctorCard({ doctor, onSelectDoctor, isSelected, onEditDoctor }) {
  return (
    <div className={`doctor-card ${isSelected ? 'selected' : ''}`}>
      <div className="card-header">
        <div className="avatar">DR</div>
        <div className="doctor-info">
          <h3>{doctor.name}</h3>
          <p className="specialty-text">{doctor.specialty}</p>
          <p className="details-text">
            {doctor.experience || doctor.exp || '5+ Yrs'} Exp • ₹{doctor.fee || '500'} Fee
          </p>
          <span className="status-badge">Available Today</span>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <button onClick={() => onSelectDoctor(doctor)} className="select-btn">
          {isSelected ? 'Selected ✓' : 'Select Doctor & Pick Slot ↓'}
        </button>

        {onEditDoctor && (
          <button
            onClick={() => onEditDoctor(doctor)}
            style={{
              width: '100%',
              backgroundColor: '#e2e8f0',
              color: '#0f172a',
              fontSize: '0.75rem',
              fontWeight: '600',
              padding: '0.5rem',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            ✏️ Edit Details
          </button>
        )}
      </div>
    </div>
  );
}