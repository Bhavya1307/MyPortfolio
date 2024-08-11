import React, { useEffect, useState } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/projects') // Adjust the URL to your API endpoint
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  return (
    <div>
      <h1>My Projects</h1>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h2>{project.project_name}</h2>
            <img src={project.project_thumbnail} alt={project.project_name} />
            <p>{project.project_description}</p>
            <a href='#'>
              View Project
            </a>
            <p>Languages: {project.project_languages}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;