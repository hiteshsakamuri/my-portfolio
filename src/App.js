/*
File Name: App.js
Student Name: Hitesh Sakamuri
Student ID: 301427484
Date: January 27, 2025
*/

/* Importing necessary dependencies and components */
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './HomePage';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Services from './Services';
import ContactMe from './ContactMe';
import Navbar from './Navbar';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

/*
 * Main application component that handles routing between pages
 * Includes Navbar and routing setup for different pages
 */
function App() {
  return (
      <Router>
        <Navbar />
        <div className="main-container"></div>
        <TransitionGroup>
        <CSSTransition timeout={300} classNames="fade">
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/about" element={<AboutMe />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/Contact" element={<ContactMe />}/>
        </Routes>
        </CSSTransition>
        </TransitionGroup>
      </Router>
  );
}
   

export default App;
