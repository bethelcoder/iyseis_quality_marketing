import React, { useEffect, useState } from 'react';
import { Link } from "react-scroll";
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
                  <Link to="contact" smooth={true} duration={200}>
                    <button className='btn btn-primary'>Get a Free Consultation</button>
                  </Link>
                  <Link to="services" smooth={true} duration={200}>
                    <button className='btn btn-secondary'>See Our Work</button>
                  </Link>
                </section>
            </section>
        <section className='right-sec'>
            <img src={hero_image} alt='Hero Image' className='hero-Img'/>
        </section>
      </section>
      <section className="hero-background">
        <div className="blur-bubble bubble-1"></div>
        <div className="blur-bubble bubble-2"></div>
      </section>
    </section>
  );
};

export default Hero;
