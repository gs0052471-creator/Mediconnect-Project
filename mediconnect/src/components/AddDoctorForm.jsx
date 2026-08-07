import React, { useState, useEffect } from 'react';
import './AddDoctorForm.css';

export default function AddDoctorForm({ onDoctorAdded, editingDoctor, onCancelEdit }) {
  const [formData, setFormData] = useState({
    name: '',
    specialty: '',
    experience: '5 Years',
    fee: '500',
    availableSlots: '10:00 AM, 02:00 PM, 04:30 PM'
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (editingDoctor) {
      setFormData({
        name: editingDoctor.name || '',
        specialty: editingDoctor.specialty || '',
        experience: editingDoctor.experience || '5 Years',
        fee: editingDoctor.fee || '500',
        availableSlots: Array.isArray(editingDoctor.availableSlots)
          ? editingDoctor.availableSlots.join(', ')
          : editingDoctor.availableSlots || ''
      });
    } else {
      setFormData({
        name: '',
        specialty: '',
        experience: '5 Years',
        fee: '500',
        availableSlots: '10:00 AM, 02:00 PM, 04:30 PM'
      });
    }
  }, [editingDoctor]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const isEdit = Boolean(editingDoctor);
    const url = isEdit
      ? `https://mediconnect-project.onrender.com/api/doctors/${editingDoctor._id}`
      : 'https://mediconnect-project.onrender.com/api/doctors';
    const method = isEdit ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert(isEdit ? 'Doctor updated successfully!' : 'Doctor added successfully!');
        setFormData({
          name: '',
          specialty: '',
          experience: '5 Years',
          fee: '500',
          availableSlots: ''
        });
        if (onDoctorAdded) onDoctorAdded();
        if (isEdit && onCancelEdit) onCancelEdit();
      } else {
        alert('Failed to save doctor details');
      }
    } catch (err) {
      console.error(err);
      alert('Server connection error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-doctor-container" id="doctor-form">
      <h2>{editingDoctor ? 'Edit Doctor Profile' : 'Add New Doctor'}</h2>
      <form onSubmit={handleSubmit} className="add-doctor-form">
        <div className="form-group">
          <label>Doctor Name</label>
          <input
            type="text"
            name="name"
            placeholder="Dr. John Doe"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Specialty</label>
          <input
            type="text"
            name="specialty"
            placeholder="Cardiologist, Neurologist..."
            value={formData.specialty}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Experience</label>
            <input
              type="text"
              name="experience"
              placeholder="e.g. 5 Years"
              value={formData.experience}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Fee (₹)</label>
            <input
              type="number"
              name="fee"
              placeholder="500"
              value={formData.fee}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Available Slots (Comma-separated)</label>
          <input
            type="text"
            name="availableSlots"
            placeholder="10:00 AM, 02:00 PM, 05:00 PM"
            value={formData.availableSlots}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Saving...' : editingDoctor ? 'Update Doctor' : 'Save Doctor'}
          </button>

          {editingDoctor && (
            <button
              type="button"
              onClick={onCancelEdit}
              style={{
                marginTop: '0.5rem',
                padding: '0.75rem',
                backgroundColor: '#64748b',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 600
              }}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}