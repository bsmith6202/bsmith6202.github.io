import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Ensure you are importing 'Routes' and 'Route' correctly

import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Work from './components/Work.js';

class App extends Component {
  componentDidMount() {
    document.title = 'Becca Smith';
  }

  render() { return (
    <Router>
      <div>
        <div className="top">

        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};
}
export default App;
