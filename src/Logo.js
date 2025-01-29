// File Name: Logo.js
// Student Name: Hitesh Sakamuri
// Student ID: 301427484
// Date: January 27, 2025

import React from 'react';
import './Logo.css'; // Import the CSS for logo styling

function Logo() {
    return (
        <div className="logo-container">
            {/* Your logo image */}
            <img src={require('./assets/logo.png')} alt="Portfolio Logo" className="logo-image" />
            <h1 className="logo-title">Hitesh's Portfolio</h1>
        </div>
    );
}

export default Logo;
