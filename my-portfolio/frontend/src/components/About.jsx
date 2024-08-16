/* Importing components */
import React, { useEffect, useState } from 'react';
import '../../public/css/About.css';
import { Link } from 'react-router-dom';

const About = () => {

  // Fetching experiences from mongodb
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/experiences')
      .then(response => response.json())
      .then(data => setExperiences(data))
      .catch(error => console.error('Error fetching experiences:', error));
  }, []);

  // Fetching educations from mongodb
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/educations')
      .then(response => response.json())
      .then(data => setEducations(data))
      .catch(error => console.error('Error fetching experiences:', error));
  }, []);

  return (
    <div>
      <div className="about-me">
        <h2>My Story</h2>
        <p>
          Hey there! My name is Bhavya Patel. I'm an enthusiastic and committed web developer with a strong background in front-end development and a passion for creating visually appealing and user-friendly websites. With a bachelor's degree in computer applications and hands-on experience, I’ve developed a broad skill set across various technologies and programming languages. I have a deep interest in web design and love working on projects that challenge my creativity.
        </p>
        <p>
          What drives me is the thrill of solving complex coding problems, continuously learning and adapting to new technologies, and collaborating with teams to bring innovative ideas to life. I’m eager to apply my skills in a challenging role where I can contribute to cutting-edge web solutions and continue to grow professionally.
        </p>
        <div className="buttons">
          <Link to="/projects" className="btn">My Projects</Link>
          <a href="../../public/resume/Resume-BhavyaPatel.pdf" className="btn" download>Download My Resume</a>
          <Link to="/contact" className="btn">Contact Me</Link>
        </div>
      </div>

      <div className="work-experience">
        <h2>My Career Path</h2>
        <div className="timeline">
          {experiences.map((experience, index) => (
            <div key={index} className={`experience-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="content">
                <h3>{experience.job_title}</h3>
                <h4>{experience.job_location}</h4>
                <p>{experience.duration}</p>
                <ul>
                  {experience.job_description.split('. ').map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="education-section">
        <h2>Educational Path</h2>
        <div className="education-item">
          {educations.map((education, index) => (
            <div key={index} className={`education-info move${index % 2 === 0 ? '' : '2'}`}>
              <h3>{education.education_title}</h3>
              <p>{education.education_location}</p>
              <p>{education.duration}</p>
              <p>{education.score}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-section">
        <h2>Skills I Bring</h2>
        <div className="skills-list">
          <div className="skill">Front-end Development</div>
          <div className="skill skill2">Full Stack Development</div>
          <div className="skill">Responsive Web Designing</div>
          <div className="skill skill2">MERN Stack Projects</div>
          <div className="skill">Continuous Learning & Adaptability</div>
          <div className="skill skill2">Problem-Solving Abilities</div>
          <div className="skill">Team Collaboration</div>
          <div className="skill skill2">Cross-Browser Compatibility</div>
          <div className="skill">UI/UX Designing</div>
        </div>
      </div>
    </div>
  )
}

/* Exporting About */
export default About;
