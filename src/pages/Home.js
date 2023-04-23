// pages/Home.js

import React from 'react';
import './Home.css';
import ParticleBackground from "../components/ParticleBackground";


function Home() {
  return (
    <div className="home">
         <ParticleBackground />
         <div className="home-text">
            <h1>Welcome to my Portfolio Website</h1>
            <p>Here, you can learn more about me, view my past projects, and get in touch!</p>
        </div>
    </div>
  );
}

export default Home;