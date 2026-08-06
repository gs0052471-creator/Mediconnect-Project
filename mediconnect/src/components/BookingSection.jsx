import React, { useState } from 'react';
import './BookingSection.css';

const availableSlots = [
  '10:00 AM',
  '11:30 AM',
  '02:00 PM',
  '03:30 PM',
  '05:00 PM'
];

// Ensure here: "export default function"
export default function BookingSection({ selectedDoctor, onBookingComplete }) {
  const [selectedSlot, setSelectedSlot] = useState('');

  const handleConfirm = async () => {
    if (selectedDoctor && selectedSlot) {
      const bookingPayload = {
        doctorId: selectedDoctor._id,
        doctorName: selectedDoctor.name,
        specialty: selectedDoctor.specialty,
        slot: selectedSlot
      };

      try {
        const response = await fetch('http://localhost:5000/api/bookings', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(bookingPayload)
        });
        const data = await response.json();
        onBookingComplete(data);
      } catch (error) {
        console.error('Booking failed:', error);
      }
    }
  };

  return (
    <section className="booking-container" id="booking">
      <h2 className="booking-title">Select Appointment Slot</h2>
      
      {selectedDoctor ? (
        <div className="selected-doctor-info">
          Booking for: <strong>{selectedDoctor.name}</strong> ({selectedDoctor.specialty})
        </div>
      ) : (
        <div className="selected-doctor-info" style={{ backgroundColor: '#fef3c7', borderColor: '#fde68a', color: '#92400e' }}>
          Please select a doctor from the list above first.
        </div>
      )}

      <span className="slot-label">Available Time Slots:</span>
      <div className="slots-grid">
        {availableSlots.map((slot) => (
          <button
            key={slot}
            className={`slot-btn ${selectedSlot === slot ? 'selected' : ''}`}
            onClick={() => setSelectedSlot(slot)}
          >
            {slot}
          </button>
        ))}
      </div>

      <button 
        className="confirm-btn" 
        disabled={!selectedDoctor || !selectedSlot}
        onClick={handleConfirm}
      >
        Confirm Appointment
      </button>
    </section>
  );
}
