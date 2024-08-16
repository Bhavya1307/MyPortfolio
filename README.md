You can check out my portfolio at https://bhavyas-portfolio.vercel.app/ (It is just for frontend. I am still working on deploying my backend.)

# My Portfolio

Welcome to my portfolio! This project showcases my work as a web developer, including various projects, experiences, and educational background.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Features

- Display of projects with details such as name, thumbnail, URL, description, and technologies used.
- Overview of professional experiences and educational background.
- Responsive design for optimal viewing on various devices.

## Technologies Used

- **Frontend**: React, Vite, CSS
- **Backend**: Node.js, Express, MongoDB
- **Deployment**: Vercel for frontend and backend

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Bhavya1307/MyPortfolio.git

2. Navigate to the project directory:
   ```bash
   cd MyPortfolio

3. Install the dependencies for the frontend:
   ```bash
   cd frontend
   npm install

4. Install the dependencies for the backend:
   ```bash
   cd backend
   npm install

## Usage

To start the frontend and backend servers, follow these commands in separate terminal windows:

1. Start the backend server:
   ```bash
   cd backend
   npm start

2. Start the frontend server:
   ```bash
   cd frontend
   npm run dev

Now, you can view the application in your browser at http://localhost:5173.

## API Endpoints

- **Projects:** GET /api/projects: Retrieve a list of projects.
- **Experiences:** GET /api/experiences: Retrieve a list of experiences.
- **Educations:** GET /api/educations: Retrieve a list of educational qualifications.