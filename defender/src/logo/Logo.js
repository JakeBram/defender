// src/components/Logo.js
import React from 'react';
import './Logo.css';
import logo from "./logo.png"

const Logo = () => {
    return (
        <div className="logo-container">
            <img src={logo} alt="Company Logo" className="logo" />
        </div>
    );
};

export default Logo;
