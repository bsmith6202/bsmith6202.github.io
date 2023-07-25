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

const Work = () => {

  const works = [
    { title: "Free Will in Kant's 'Critique' (Spring 2023)", file: kant },
    { title: "A Luck Egalitarian View of Higher Education (Fall 2022)", file: rolling },
    { title: "A Defense of 'Why Not Socialism' (Spring 2022)", file: socialism },
    
    { title: "An Argument for Free College Tuition (Fall 2021)", file: college },
    { title: "The Demise of Social Contract Theory (Fall 2021)", file: contract },
    { title: "A Libertarian Argument for Slavery Reparations (Fall 2021)", file: reps },
    { title: "An Analysis of the Problem of Unconceived Alternatives (Fall 2021)", file: problem },
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