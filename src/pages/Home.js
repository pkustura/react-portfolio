// pages/Home.js

import React from 'react';
import './Home.css';

import ParticleBackground from "../components/ParticleBackground";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

import { GPToptions } from '../components/ParticleOptions';

import { particlesSnow } from '../components/ParticleOptions';


function Home() {

  const particlesInit = useCallback(async engine => {
      console.log(engine);
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadFull(engine);
  }, []);
  
  const particlesLoaded = useCallback(async container => {
      await console.log(container);
  }, []);


  return (
    <div className="home">
         <Particles id="tsparticles" init={particlesInit} 
         loaded={particlesLoaded} 
         options={ particlesSnow }/>
         <div className="home-text">
            <h1>Welcome to my Portfolio Website</h1>
            <p>Here, you can learn more about me, view my past projects, and get in touch!</p>
        </div>
    </div>
  );
}

export default Home;