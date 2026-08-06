import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DoctorsList from './components/DoctorsList';
import BookingSection from './components/BookingSection';
import Confirmation from './components/Confirmation';
import AddDoctorForm from './components/AddDoctorForm';

export default function App() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [editingDoctor, setEditingDoctor] = useState(null);
  const [bookingDetails, setBookingDetails] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDoctorSelect = (doc) => {
    setSelectedDoctor(doc);
    handleScrollTo('booking');
  };

  const handleBookingComplete = (details) => {
    setBookingDetails(details);
    setTimeout(() => {
      handleScrollTo('confirmation');
    }, 100);
  };

  const handleReset = () => {
    setSelectedDoctor(null);
    setBookingDetails(null);
    handleScrollTo('hero');
  };

  const handleDoctorAdded = () => {
    setRefreshKey((prev) => prev + 1);
    setEditingDoctor(null);
  };

  const handleEditDoctor = (doc) => {
    setEditingDoctor(doc);
    handleScrollTo('doctor-form');
  };

  const handleCancelEdit = () => {
    setEditingDoctor(null);
  };

  return (
    <div>
      <Navbar onScrollTo={handleScrollTo} />
      <Hero onScrollTo={handleScrollTo} />
      <AddDoctorForm 
        onDoctorAdded={handleDoctorAdded} 
        editingDoctor={editingDoctor}
        onCancelEdit={handleCancelEdit}
      />
      <DoctorsList 
        key={refreshKey} 
        onSelectDoctor={handleDoctorSelect} 
        onEditDoctor={handleEditDoctor}
      />
      <BookingSection 
        selectedDoctor={selectedDoctor} 
        onBookingComplete={handleBookingComplete} 
      />
      {bookingDetails && (
        <Confirmation 
          bookingDetails={bookingDetails} 
          onReset={handleReset} 
        />
      )}
    </div>
  );
}