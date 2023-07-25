import React from 'react';
import '../styles/about.css';
import { Link } from 'react-router-dom';
import pic1 from "../media/Screen Shot 2022-07-27 at 11.54.51 PM.png";
import pic2 from "../media/Screen Shot 2022-07-27 at 11.54.42 PM.png";
import pic3 from "../media/Screen Shot 2022-07-27 at 11.55.00 PM.png";

const About = () => {
  return (
    <div>
              <div className="top">
              <Link className="link" to="/">Home</Link>
        <Link className="link" to="/about">Learn About Me</Link>
        <Link className="link" to="/work">View Some of My Work</Link>
        <Link className="link" to="/contact">Contact Me</Link>
      </div>
        <hr />
            <h1 className="abouttitle"> ABOUT ME</h1>
            <div className="abt">
                <br />I am a junior at the University of Pennsylvania studying Philosophy and Computer Science. I am passionate about political philosophy and especially interested in the intersection of ethics and technology. I am fascinated by artificial intelligence and hope to work in AI research some day.
                <br /><br/>I am a head teaching assistant for <a className="inlink" href="https://www.seas.upenn.edu/~cis110/current/">CIS1100</a>, the introductory CIS course in Java at Penn. This is the course that first got me excited about computer science so I love being able to share my excitement with first-time coders!
                <br /><br/>This past summer I was a software engineer intern with <a className="inlink" href="https://www.publicissapient.com">Publicis Sapient</a>, a digital transformation consulting company where I worked on a full-stack development intern project. We implemented 
                an AI chat-bot utilizing React, Python, and SQL on the backend. 
                <br/><br/>Summer 2022 I worked as a research assistant for the <a className="inlink" href="https://css.seas.upenn.edu"> CSS Lab at Penn</a>, where I am a part of a research team studying political deliberation and how it impacts affective polarization. 
                <br/><br/>Outside of class I enjoy running, skiing, exploring Philly with friends, watching stand-up comedy, and playing board games. 
                <br/><br/>My favorite
                    <br/><b>shows:</b> Friends, New Girl, Grey’s Anatomy, Schitt’s Creek, Parks and Recreation
                    <br/><b>comedians:</b> Trevor Noah, John Mulaney, Wanda Sykes, Nate Bargatze, Amy Schumer, Bo Burnam
                    <br/><b>games:</b> Chess, Bananagrams, Resistance, <a className="inlink" href="https://www.kenkenpuzzle.com">KenKen</a>
            </div>
        <div className="pics">
            <img className="pic" src={pic1} alt="pic" />
            <img className="pic" src={pic2} alt="pic" />
            <img className="pic" src={pic3} alt="pic" />
        </div>

    </div>
  );
};

export default About;