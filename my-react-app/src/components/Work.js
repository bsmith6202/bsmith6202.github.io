import React from 'react';
import '../styles/work.css';
import { Link } from 'react-router-dom';
import feminist from '../media/feminismfinalpaper.pdf'
import college from '../media/freetuition.pdf'
import contract from '../media/demiseofsocialcontracttheory.pdf'
import reps from '../media/libertarianforreparation.pdf'
import socialism from '../media/socialismessay.pdf'
import problem from '../media/unconceivedalternatives.pdf'
import rolling from '../media/rollingdicecollege.pdf'
import kant from '../media/kant.pdf'
import thesis from '../media/bsmith_thesis.pdf'
import ed from '../media/philofed.pdf'


const Work = () => {

  const works = [
    { title: `An Ethical Turing Test: Analyzing Structural Injustice in Algorithmic Fairness Measures (Spring 2024, Philosophy Honors Thesis)`, file: thesis},
    { title: "An Individualized Approach to University-Community Partnerships (Fall 2023)", file: ed},
    { title: "Free Will in Kant's 'Critique' (Spring 2023)", file: kant },
    { title: "A Luck Egalitarian View of Higher Education  (Fall 2022, winner of Flower Essay Prize)", file: rolling },
    { title: "A Defense of 'Why Not Socialism' (Spring 2022)", file: socialism },
    
    { title: "An Argument for Free College Tuition (Fall 2021)", file: college },
    { title: "The Demise of Social Contract Theory (Fall 2021)", file: contract },
    { title: "A Libertarian Argument for Slavery Reparations (Fall 2021)", file: reps },
    { title: "How Patriarchy is Bad for Men, But Why That Doesn't Matter (Spring 2021)", file: feminist },
  ];

  const handleDownload = (file) => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = file;
    link.download = true;
  
    // Dispatch click event on the link to initiate the download
    link.dispatchEvent(new MouseEvent('click'));
  };

  return (
    <div>
      <svg className="workback" preserveAspectRatio="xMidYMid slice" viewBox="10 10 50 100">
    <defs>

    </defs>
    <path fill="#0011ff" class="out-bottom" d="M105.9,48.6c-12.4-8.2-29.3-4.8-39.4.8-23.4,12.8-37.7,51.9-19.1,74.1s63.9,15.3,76-5.6c7.6-13.3,1.8-31.1-2.3-43.8C117.6,63.3,114.7,54.3,105.9,48.6Z"/>
    <path fill="#0011ff" class="in-bottom" d="M102,67.1c-9.6-6.1-22-3.1-29.5,2-15.4,10.7-19.6,37.5-7.6,47.8s35.9,3.9,44.5-12.5C115.5,92.6,113.9,74.6,102,67.1Z"/>
</svg>
         <div className="top">
         <Link className="link" to="/">Home</Link>
        <Link className="link" to="/about">Learn About Me</Link>
        <Link className="link" to="/work">View Some of My Work</Link>
        <Link className="link" to="/contact">Contact Me</Link>
      </div>
    <hr/>
    <div className="bottom">
        <h1 className='worktitle'>MY WORK</h1>
        <div className="phil">Papers</div>
        
        <div className="works">
        {works.map((work, index) => (
          <button
            key={index}
            className="work"
            onClick={() => handleDownload(work.file)}
          >
            {work.title}
          </button>
        ))}
      </div>
    </div>
</div>
  );
};

export default Work;