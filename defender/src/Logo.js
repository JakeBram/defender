// src/components/Logo.js
import React from 'react';
import './Logo.css';

const Logo = () => {
    return (
        <div className="logo-container">
            <img src="/logo.png" alt="Company Logo" className="logo" />
        </div>
    );
};

export default Logo;
