// server/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/scheduler").then( () =>{
    console.log("Database connection established")
})
.catch( (err) => {
    console.log("Error connecting"+err);
})



// Paths to JSON files
const mentorsFilePath = path.join(__dirname, "data", "mentors.json");
const studentsFilePath = path.join(__dirname, "data", "students.json");
const sessionsFilePath = path.join(__dirname, "data", "sessions.json");

// Utility function to read JSON files
const readJsonFile = (filePath) => {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
};

// Load dummy data
const mentors = readJsonFile(mentorsFilePath);
const students = readJsonFile(studentsFilePath);
let sessions = readJsonFile(sessionsFilePath);

// Get all mentors
app.get("/api/mentors", (req, res) => {
  res.json(mentors);
});

// Get all students
app.get("/api/students", (req, res) => {
  res.json(students);
});

// Get all sessions
app.get("/api/sessions", (req, res) => {
  res.json(sessions);
});

// Schedule a new session
app.post("/api/schedule", (req, res) => {
  const { mentorId, studentId, duration, time } = req.body;

  if (!mentorId || !studentId || !duration || !time) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const newSession = {
    id: String(sessions.length + 1),
    mentorId,
    studentId,
    duration,
    time,
  };

  sessions.push(newSession);

  // Optionally, write to the sessions.json file
  fs.writeFileSync(sessionsFilePath, JSON.stringify(sessions, null, 2));

  res.json(newSession);
});


// Handle payments
app.post("/api/payment", (req, res) => {
  const { amount } = req.body;
  // Implement payment processing logic here
  console.log("Payment received for amount:", amount);
  res.json({ success: true });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
