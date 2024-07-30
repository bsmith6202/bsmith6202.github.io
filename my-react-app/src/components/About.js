import React from 'react';
import '../styles/about.css';
import { Link } from 'react-router-dom';
import pic2 from "../media/Screenshot 2024-07-15 at 1.50.12 PM.png";
import pic1 from "../media/Screenshot 2024-07-15 at 1.51.04 PM.png";
import pic3 from "../media/Screenshot 2024-07-15 at 1.51.57 PM.png";

const About = () => {
  return (
    <div>

<svg className="abtback" preserveAspectRatio="xMidYMid slice" viewBox="20 15 130 40">
    <defs>

    </defs>
    <path fill="#ff0062" class="out-bottom" d="M105.9,48.6c-12.4-8.2-29.3-4.8-39.4.8-23.4,12.8-37.7,51.9-19.1,74.1s63.9,15.3,76-5.6c7.6-13.3,1.8-31.1-2.3-43.8C117.6,63.3,114.7,54.3,105.9,48.6Z"/>
    <path fill="#ff0062" class="in-bottom" d="M102,67.1c-9.6-6.1-22-3.1-29.5,2-15.4,10.7-19.6,37.5-7.6,47.8s35.9,3.9,44.5-12.5C115.5,92.6,113.9,74.6,102,67.1Z"/>
</svg>

              <div className="top">
              <Link className="link" to="/">Home</Link>
        <Link className="link" to="/about">Learn About Me</Link>
        <Link className="link" to="/work">View Some of My Work</Link>
        <Link className="link" to="/contact">Contact Me</Link>
      </div>
        <hr />
            <h1 className="abouttitle"> ABOUT ME</h1>
            <div className="abt">

                <br />
                Hi, I'm Becca! I will be receiving my <a className="inlink" href="https://www.lcfi.ac.uk/education/mphil">MPhil in Ethics of AI, Data, and Algorithms</a> from the University 
                of Cambridge in June 2025.
                I graduated University of Pennsylvania summa cum laude in May 2024 with a double major in <a className="inlink" href="https://cis.upenn.edu">Computer and Information Science </a> 
                 and <a className="inlink" href="https://philosophy.sas.upenn.edu/research/philosophy-science">Philosophy of Science.</a>  
                < br/>
                < br/>
                 I am passionate about moral philosophy and especially interested in the intersection of ethics and technology as it relates to algorithmic fairness and machine learning bias. I also am fascinated by computer science theory. 
                <br /><br/>Throughout college I was a head teaching assistant for 
                <a className="inlink" href="https://www.seas.upenn.edu/~cis110/current/"> CIS1100</a>, 
                the introductory CIS course in Java at Penn. This is the course that first got me excited about computer science so I loved being able to share my excitement with first-time coders!
                <br /><br/>This summer (2024) I work as a software engineer intern for  
                <a className="inlink" href="https://dsdrenewables.com/"> DSD Renewables</a> at their NYC office
                 where I work on data visualizations.  
                
                <br /><br/>Summer 2023 I was a software engineer intern with 
                <a className="inlink" href="https://www.publicissapient.com"> Publicis Sapient</a>,
                 a digital transformation consulting company where I worked on a full-stack development intern project.
                  We implemented 
                an AI chat-bot utilizing React, Python, and SQL on the backend. 
                <br/><br/>Summer 2022 I worked as a research assistant for the <a className="inlink" href="https://css.seas.upenn.edu"> CSS Lab at Penn</a>, where I was a part of a research team studying political deliberation and how it impacts affective polarization. 
                <br/><br/>In free time I enjoy running, skiing, exploring the city with friends, watching stand-up comedy, and playing board games. 
                <br/><br/>My favorite
                    <br/><b>shows:</b> Friends, New Girl, Grey’s Anatomy, Schitt’s Creek, Parks and Recreation
                    <br/><b>books:</b> A Brief History of Time, Nickel and Dimed, Jurassic Park, Harry Potter series
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