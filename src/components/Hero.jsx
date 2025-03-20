import React, { useEffect, useState } from 'react';
import '../styles/Hero.css';
import hero_image from '../assets/hero_pic.png'
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="hero">
      <section className="hero-content">
        <section className='left-sec'>
                <h1 className='headline'>Boost Your Brand’s Reach with<br/> 
                    <span className='highlight'>Expert</span> Digital Marketing.</h1>
                <p className='subheadline'>We help businesses grow with SEO, social media,<br/> 
                    and content marketing. 
                    Let’s take your<br/> brand to the next level.</p>
                <section className='CTA'>
                    <button className='btn btn-primary'>Get a Free Consultation</button>
                    <button className='btn btn-secondary'>See Our Work</button>
                </section>
            </section>
        <section className='right-sec'>
            <img src={hero_image} alt='Hero Image' className='hero-Img'/>
        </section>

        {/* <section className={`hero-text ${isVisible ? 'visible' : ''}`}>
          <span className="hero-tag">Premier Digital Marketing Agency</span>
          <h1 className="hero-title">
            Transform Your Brand With <span className="hero-highlight">Quality Marketing</span>
          </h1>
          <p className="hero-description">
            We blend creative strategy with data-driven insights to deliver exceptional 
            marketing solutions that elevate your brand and drive measurable results.
          </p>
          <section className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get Started</a>
            <a href="#services" className="btn btn-secondary">Our Services</a>
          </section>
        </section> */}
      </section>
      <section className="hero-background">
        <div className="blur-bubble bubble-1"></div>
        <div className="blur-bubble bubble-2"></div>
      </section>
    </section>
  );
};

export default Hero;
