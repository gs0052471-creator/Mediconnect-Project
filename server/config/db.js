const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Local MongoDB URI (ya MongoDB Atlas link)
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/mediconnect');
    console.log('MongoDB Connected Successfully');
  } catch (error) {
    console.error('MongoDB Connection Error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;