/* Importing components */
import React from 'react';
import '../../public/css/Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="contact-header">
                <h1>Get in Touch</h1>
                <p>If you have any questions, want to collaborate, or just want to say hello, feel free to reach out!</p>
            </div>

            <div className="contact-form-section">
                <form className="contact-form" action='/contact'>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" name="subject" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>

                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
            </div>

            <div className="social-connect-section">
                <h2>Connect with Me</h2>
                <div className="social-icons">
                    <a href="https://www.instagram.com/_.itz.bhavya" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100051536110948" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
                    </a>
                    <a href="https://twitter.com/_Bhavya1307" target="_blank" rel="noopener noreferrer">
                        <img src="https://tse2.mm.bing.net/th?id=OIP.EMSkKbPUe-m9NWb96yIjJAHaHa&pid=Api&P=0&h=180" alt="X" />
                    </a>
                    <a href="https://www.linkedin.com/in/bhavyapatel1307" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/bhavya1307" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" />
                    </a>
                </div>
            </div>
        </div>
    );
};

/* Exporting Contact */
export default Contact;
