import React from 'react';
import '../styles/contact.css';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
              <div className="top">
              <Link className="link" to="/">Home</Link>
        <Link className="link" to="/about">Learn About Me</Link>
        <Link className="link" to="/work">View Some of My Work</Link>
        <Link className="link" to="/contact">Contact Me</Link>
      </div>
        <hr/>
        <h1 className="contacttitle">CONTACT ME</h1>
        <div className="contacts">
            <a className="contact" href="mailto:bsmith6202@gmail.com">bsmith6202@gmail.com</a>
            <a className="contact" href="mailto:beccas@sas.upenn.edu">beccas@sas.upenn.edu</a>
            <a className="contact" href="https://www.linkedin.com/in/becca-smith-/">LinkedIn</a>
            <a className="contact" href="https://github.com/bsmith6202">GitHub</a>
        </div>
        <br/>
        <br/>
    </div>
  );
};

export default Contact;