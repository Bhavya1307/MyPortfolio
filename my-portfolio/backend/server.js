// Declaring thnigs to use
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()

const app = express();
app.use(cors());
app.use(express.json());

// Connecting to MongoDB
async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err);
    }
}

connectToDatabase();

// Defining a Project model
const Project = mongoose.model('Project', new mongoose.Schema({
    project_name: String,
    project_thumbnail: String,
    project_url: String,
    project_description: String,
    project_languages: String,
}));

// Defining an Experience model
const Experience = mongoose.model('Experience', new mongoose.Schema({
    job_title: String,
    job_location: String,
    duration: String,
    job_description: String
}));

// Defining an Education model
const Education = mongoose.model('Education', new mongoose.Schema({
    education_title: String,
    education_location: String,
    duration: String,
    score: String
}));

// API endpoint to get projects
app.get('/api/projects', async (req, res) => {
    const projects = await Project.find();
    res.json(projects);
});

// API endpoint to get experiences
app.get('/api/experiences', async (req, res) => {
    const experiences = await Experience.find();
    res.json(experiences);
});

// API endpoint to get experiences
app.get('/api/educations', async (req, res) => {
    const educations = await Education.find();
    res.json(educations);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});