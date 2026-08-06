MediConnect - Doctor Management & Appointment Booking Platform
MediConnect is a full-stack MERN application designed to streamline healthcare workflows by allowing administrators to manage doctor profiles while providing patients with a seamless appointment slot booking experience. Built with a modern, mobile-first responsive layout using CSS Grid and Flexbox.

# Key Features
Complete Doctor CRUD Operations: Create, read, update, and delete doctor profiles.

Unified Dynamic Form: Reusable AddDoctorForm component handling both additions (POST) and updates (PUT) conditionally based on edit state.

Responsive UI Design: Grid-based card layouts with dynamic centering, auto-fitting (repeat(auto-fit, minmax)), and cross-device mobile responsiveness.

Slot Booking System: Interactive view for listing available appointment time slots based on doctor availability.

Real-time UI Sync: Instant layout re-renders upon database mutations using centralized state refresh triggers.



# Tech Stack
Frontend
React (Vite-powered)

CSS3 (Custom Grid, Flexbox, Media Queries)

Lucide React / Icons

Backend
Node.js & Express.js

MongoDB & Mongoose



# Project Structure
Plaintext
mediconnect/
├── client/                      # Frontend React Application
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddDoctorForm.jsx
│   │   │   ├── AddDoctorForm.css
│   │   │   ├── DoctorCard.jsx
│   │   │   ├── DoctorCard.css
│   │   │   ├── DoctorsList.jsx
│   │   │   └── DoctorsList.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   └── package.json
│
└── server/                      # Backend Express Application
    ├── controllers/
    ├── models/
    ├── routes/
    ├── server.js
    └── package.json

    

# Getting Started
Prerequisites
Node.js (v16+)

MongoDB (Local instance or MongoDB Atlas cluster)

Installation
Clone the repository:

Bash
git clone https://github.com/your-username/mediconnect.git
cd mediconnect
Set up the Backend Server:

Bash
cd server
npm install
Create a .env file in the server directory:

Code snippet
PORT=5000
MONGO_URI=your_mongodb_connection_string
Start the backend server:

Bash
npm run dev
Set up the Frontend Application:

Bash
cd ../client
npm install
npm run dev
Access the application:
Open your browser and navigate to http://localhost:5173.


# Responsive Breakpoints
Desktop (> 1024px): Dynamic multi-column grid layout with balanced spacing.

Tablet (640px – 1024px): Auto-adjusting cards with responsive wrapping.

Mobile (< 640px): Single-column stack layout ensuring zero horizontal overflow (overflow-x: hidden).
