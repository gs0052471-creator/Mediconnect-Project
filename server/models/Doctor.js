const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialty: { type: String, required: true },
  rating: { type: Number, default: 4.5 },
  experience: { type: String, default: '5 Years' },
  fee: { type: Number, default: 500 },
  availableSlots: [String]
});

module.exports = mongoose.model('Doctor', doctorSchema);