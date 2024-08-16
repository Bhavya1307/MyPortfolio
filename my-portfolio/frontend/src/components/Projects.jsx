/* Importing components */
import React, { useEffect, useState } from 'react';
import '../../public/css/Projects.css';

const Projects = () => {

  // Fetching projects from mongodb
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  return (
    <div className="projects-container">
      <h1>Creative Corner</h1>
      <ul>
        {projects.map((project, index) => (
          <li key={index} className={`project-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="container">
              <div className="img-container">
                <img src={project.project_thumbnail} alt={project.project_name} />
              </div>
              <div className="text-container">
                <h2>{project.project_name}</h2>
                <p>{project.project_description}</p>
                <a href={project.project_url} className="view-project">View Project</a>
                <p>Technology: {project.project_languages}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

/* Exporting Projects */
export default Projects;