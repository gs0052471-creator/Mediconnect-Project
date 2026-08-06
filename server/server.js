const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const Doctor = require('./models/Doctor');
const Booking = require('./models/Booking');

const app = express();

app.use(cors());
app.use(express.json());

// --- ROUTES ---

// 1. Get All Doctors
app.get('/api/doctors', async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 2. Add New Doctor (Frontend Form Se Data Store Karne Ke Liye)
app.post('/api/doctors', async (req, res) => {
  try {
    const { name, specialty, rating, experience, fee, availableSlots } = req.body;

    // Slots agar string comma-separated aaye to array me convert karein
    const slotsArray = Array.isArray(availableSlots)
      ? availableSlots
      : availableSlots.split(',').map(s => s.trim());

    const newDoctor = new Doctor({
      name,
      specialty,
      rating: Number(rating) || 4.5,
      experience: experience || '5 Years',
      fee: Number(fee) || 500,
      availableSlots: slotsArray
    });

    await newDoctor.save();
    res.status(201).json(newDoctor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 3. Update Doctor Details (Edit functionality ke liye)
app.put('/api/doctors/:id', async (req, res) => {
  try {
    const { name, specialty, rating, experience, fee, availableSlots } = req.body;

    const slotsArray = Array.isArray(availableSlots)
      ? availableSlots
      : availableSlots.split(',').map(s => s.trim());

    const updatedDoctor = await Doctor.findByIdAndUpdate(
      req.params.id,
      {
        name,
        specialty,
        rating: Number(rating) || 4.5,
        experience,
        fee: Number(fee),
        availableSlots: slotsArray
      },
      { new: true }
    );

    if (!updatedDoctor) {
      return res.status(404).json({ error: 'Doctor not found' });
    }

    res.json(updatedDoctor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 4. Create Appointment Booking
app.post('/api/bookings', async (req, res) => {
  try {
    const { doctorId, doctorName, specialty, slot } = req.body;
    const newBooking = new Booking({ doctorId, doctorName, specialty, slot });
    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
});