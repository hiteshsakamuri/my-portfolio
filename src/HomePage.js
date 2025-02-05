/*
File Name: App.test.js
Student Name: Hitesh Sakamuri
Student ID: 301427484
Date: January 27, 2025
*/

import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Add a separate CSS file for cleaner code

function HomePage() {
    return (
        <div className="home-container">
            <div className="home-content">
                <h1 className="home-heading"><u>Welcome to My Portfolio</u></h1>
                <p className="home-description">This is a showcase of my work and skills.</p>
                <Link to="/about" className="custom-button"> 
                    Learn more about me
                </Link>
            </div>
        </div>
    );
}

export default HomePage;
