/* Importing components */
import Bhavya from '../assets/Bhavya.jpg';
import React, { useEffect, useState } from 'react';
import '../../public/css/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {

  // Fetching projects from mongodb
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
      .then(response => response.json())
      .then(data => setProjects(data.slice(0, 2)))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  return (
    <div>
      <div className="main-div">
        <div className="my-image">
          <img src={Bhavya} alt="" />
        </div>
        <div className="intro">
          <p>HELLO! I'M</p>
          <h1>Bhavya Patel!</h1>
          <div className="dropping-texts">
            <div>Web Developer</div>
            <div>Frontend Developer</div>
            <div>Web Designer</div>
            <div>Full Stack Developer</div>
          </div>
        </div>
      </div>

      <div className="coding-about-section">
        <h2>&lt;!-- A Glimpse Into My Life --&gt;</h2>
        <pre className="code-block">
          <span className="code-line"><span className="html-tag">&lt;html&gt;</span></span>
          <span className="code-line"><span className="html-tag">&lt;body&gt;</span></span>
          <span className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span className="js-keyword">console.log</span>(<span className="string">'Hello, World!'</span>);</span>
          <span className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span className="html-tag">&lt;h1&gt;</span><span className="js-variable">Bhavya Patel</span><span className="html-tag">&lt;/h1&gt;</span></span>
          <span className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span className="html-tag">&lt;p&gt;</span>I build the web, one pixel at a time.<span className="html-tag">&lt;/p&gt;</span></span>
          <span className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span className="html-tag">&lt;div class="introduction"&gt;</span></span>
          <span className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="html-tag">&lt;h2&gt;</span>About Me<span className="html-tag">&lt;/h2&gt;</span></span>
          <span className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="html-tag">&lt;p&gt;</span>const journey = <span className="js-keyword">new</span> Developer(<span className="string">'from curiosity to code'</span>);<span className="html-tag">&lt;/p&gt;</span></span>
          <span className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="html-tag">&lt;p&gt;</span>journey.includes(<span className="string">'JavaScript'</span>, <span className="string">'React'</span>, <span className="string">'Node'</span>);<span className="html-tag">&lt;/p&gt;</span></span>
          <span className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="html-tag">&lt;p&gt;</span>Constantly learning & adapting<span className="html-tag">&lt;/p&gt;</span></span>
          <span className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span className="html-tag">&lt;/div&gt;</span></span>
          <span className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span className="html-tag">&lt;button&gt;</span><span className="string">'Click the button below to explore more!'</span><span className="html-tag">&lt;/button&gt;</span></span>
          <span className="code-line"><span className="html-tag">&lt;/body&gt;</span></span>
          <span className="code-line"><span className="html-tag">&lt;/html&gt;</span></span>
        </pre>
        <div className="buttons">
          <Link to="/about" className="btn">Explore more</Link>
        </div>
      </div>

      <div className="technology-section">
        <h2>Technologies I Work With</h2>
        <div className="tech-logos">
          <div className="tech-logo">
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png" alt="HTML" />
            <p>HTML</p>
          </div>
          <div className="tech-logo">
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png" alt="CSS" />
            <p>CSS</p>
          </div>
          <div className="tech-logo">
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="JavaScript" />
            <p>JavaScript</p>
          </div>
          <div className="tech-logo">
            <img src="https://cdn-icons-png.flaticon.com/512/919/919851.png" alt="React" />
            <p>React</p>
          </div>
          <div className="tech-logo">
            <img src="https://cdn-icons-png.flaticon.com/512/919/919825.png" alt="Node.js" />
            <p>Node.js</p>
          </div>
          <div className="tech-logo">
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png" alt="Bootstrap" />
            <p>Bootstrap</p>
          </div>
        </div>
      </div>
      <div className="projects-preview">
        <h2>My Digital Adventures</h2>
        <div className="project-cards">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.project_thumbnail} alt={project.project_name} />
              <div className="project-info">
                <h3>{project.project_name}</h3>
                <a href={project.project_url}>{project.project_url}</a>
                <p>{project.project_description}</p>
                <p><strong>Technology:</strong> {project.project_languages}</p>
              </div>
            </div>
          ))}
        </div>
        <Link to="/projects" className="view-all-btn">View All Projects</Link>
      </div>
      <div className="connect-section">
        <h2>Connect with Me</h2>
        <div className="social-icons">
          <a href="https://www.instagram.com/_.itz.bhavya" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram logo" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100051536110948" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook logo" />
          </a>
          <a href="https://twitter.com/_Bhavya1307" target="_blank" rel="noopener noreferrer">
            <img src="https://tse2.mm.bing.net/th?id=OIP.EMSkKbPUe-m9NWb96yIjJAHaHa&pid=Api&P=0&h=180" alt="X logo" />
          </a>
          <a href="https://www.linkedin.com/in/bhavyapatel1307" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn logo" />
          </a>
          <a href="https://github.com/bhavya1307" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

/* Exporting Home */
export default Home;
