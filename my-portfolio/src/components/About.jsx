import React from 'react'
import '../../public/css/About.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <div className="about-me">
        <h2>About Me</h2>
        <p>
          Hey there! My name is Bhavya Patel. I'm an enthusiastic and committed web developer with a strong background in front-end development and a passion for creating visually appealing and user-friendly websites. With a bachelor's degree in computer applications and hands-on experience, I’ve developed a broad skill set across various technologies and programming languages. I have a deep interest in web design and love working on projects that challenge my creativity.
        </p>
        <p>
          What drives me is the thrill of solving complex coding problems, continuously learning and adapting to new technologies, and collaborating with teams to bring innovative ideas to life. I’m eager to apply my skills in a challenging role where I can contribute to cutting-edge web solutions and continue to grow professionally.
        </p>
        <div className="buttons">
          <Link to="/projects" className="btn">My Projects</Link>
          <Link to="/contact" className="btn">Download My Resume</Link>
          <Link to="/contact" className="btn">Contact Me</Link>
        </div>
      </div>
    </div>
  )
}

export default About;
