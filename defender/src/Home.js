// src/components/Home.js
import React from 'react';
import Logo from './Logo';

const Home = () => {
    return (
        <div>
            <Logo />
            <div className="link-container">
                <h3>This application has been migrated from a development domain to the official one.
                </h3>
                <a href="https://www.defenderpolicesupply.com" target="_blank" rel="noopener noreferrer">
                    Visit the Defender Police Supply Website
                </a>
            </div>
        </div>
    );
};

export default Home;
