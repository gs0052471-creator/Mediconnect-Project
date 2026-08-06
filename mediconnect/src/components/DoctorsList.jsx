import React, { useState, useEffect } from 'react';
import DoctorCard from './DoctorCard';
import './DoctorsList.css';

export default function DoctorsList({ onSelectDoctor, selectedDoctorId, onEditDoctor }) {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDoctors = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/doctors');
      if (response.ok) {
        const data = await response.json();
        setDoctors(data);
      }
    } catch (err) {
      console.error('Error fetching doctors:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  if (loading) {
    return <div className="loading-text">Loading doctors...</div>;
  }

  return (
    <div className="doctors-list-container">
      <h2>Available Doctors</h2>
      <div className="doctors-grid">
        {doctors.length === 0 ? (
          <p>No doctors available.</p>
        ) : (
          doctors.map((doctor) => (
            <DoctorCard
              key={doctor._id || doctor.id}
              doctor={doctor}
              onSelectDoctor={onSelectDoctor}
              isSelected={selectedDoctorId === doctor._id}
              onEditDoctor={onEditDoctor}
            />
          ))
        )}
      </div>
    </div>
  );
}