import React from 'react';
import '../styles/contact.css';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      <svg className="contactback" preserveAspectRatio="xMidYMid slice" viewBox="1 50 55 80">
    <defs>

    </defs>
    <path fill="#8d0092" class="out-bottom" d="M105.9,48.6c-12.4-8.2-29.3-4.8-39.4.8-23.4,12.8-37.7,51.9-19.1,74.1s63.9,15.3,76-5.6c7.6-13.3,1.8-31.1-2.3-43.8C117.6,63.3,114.7,54.3,105.9,48.6Z"/>
    <path fill="#8d0092" class="in-bottom" d="M102,67.1c-9.6-6.1-22-3.1-29.5,2-15.4,10.7-19.6,37.5-7.6,47.8s35.9,3.9,44.5-12.5C115.5,92.6,113.9,74.6,102,67.1Z"/>
</svg>
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