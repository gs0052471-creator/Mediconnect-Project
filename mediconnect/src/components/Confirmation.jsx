import React from 'react';
import './Confirmation.css';

export default function Confirmation({ bookingDetails, onReset }) {
  if (!bookingDetails) return null;

  return (
    <section className="confirmation-card" id="confirmation">
      <div className="check-icon">✓</div>
      <h2 className="confirmation-title">Booking Confirmed!</h2>
      <p className="confirmation-message">Your consultation has been successfully scheduled.</p>

      <div className="details-box">
        <div className="details-row">
          <span>Doctor:</span>
          <strong>{bookingDetails.doctor}</strong>
        </div>
        <div className="details-row">
          <span>Specialty:</span>
          <strong>{bookingDetails.specialty}</strong>
        </div>
        <div className="details-row">
          <span>Time Slot:</span>
          <strong>{bookingDetails.slot}</strong>
        </div>
      </div>

      <button className="reset-btn" onClick={onReset}>
        Book Another Appointment
      </button>
    </section>
  );
}