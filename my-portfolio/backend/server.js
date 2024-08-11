// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err);
    }
}

connectToDatabase();

// Define a Project model
const Project = mongoose.model('Project', new mongoose.Schema({
    project_name: String,
    project_thumbnail: String,
    project_url: String,
    project_description: String,
    project_languages: String,
}));

// API endpoint to get projects
app.get('/api/projects', async (req, res) => {
    const projects = await Project.find();
    res.json(projects);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});