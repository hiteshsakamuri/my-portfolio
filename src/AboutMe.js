/*
File Name: AboutMe.js
Student Name: Hitesh Sakamuri
Student ID: 301427484
Date: January 27, 2025
*/

import React from 'react';
import myImage from './assets/aboutme.jpg';
import './AboutMe.css'; // Adding CSS file for special effects

// === AboutMe Component ===
function AboutMe() {
     // === Function to Get Current Greeting Based on Time of Day ===
    const getCurrentGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return 'Good Morning!';
        if (hour < 18) return "Good Afternoon!";
        return 'Good Evening!';
    };

    // === JSX Structure of About Me Section ===
    return (
        <div className="about-container">
            <div className="about-content">
                <h1 className="about-heading"><u>About Me</u></h1>
                <p className="about-greeting">{getCurrentGreeting()} Welcome to my portfolio.</p>
                <img src={myImage} alt="Hitesh Sakamuri" className="about-image" />
                <p>Hi, I am Hitesh Sakamuri. I am a web developer specializing in React and front-end development.</p>
                <a href="https://drive.google.com/file/d/1k2uXpEMieLfRWZj2nGQF79kIvyc5b5h6/view?usp=sharing" download className="custom-button">Download my Resume</a>
            </div>
        </div>
    );
}

// Exporting the AboutMe Component
export default AboutMe;
