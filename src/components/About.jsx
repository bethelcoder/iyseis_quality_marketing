import React from 'react';
import { Check } from 'lucide-react';
import '../styles/About.css';

const About = () => {
  const advantages = [
    "Data-driven strategies for measurable results",
    "Creative solutions tailored to your brand",
    "Transparent communication and reporting",
    "Cross-platform marketing expertise",
    "Dedicated team of marketing specialists",
    "Continuous optimization and improvement"
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">
              Why Choose <span className="highlight">Iyseis Quality Marketing</span>
            </h2>
            <p className="about-description">
              At Iyseis Quality Marketing, we're more than just a digital marketing agency. We're your strategic 
              partner dedicated to elevating your brand through thoughtful strategy, innovative execution, and 
              measurable results.
            </p>
            <p className="about-description">
              Our approach combines cutting-edge technology with creative excellence to deliver marketing solutions 
              that not only reach your target audience but truly resonate with them.
            </p>
            
            <div className="advantages-grid">
              {advantages.map((advantage, index) => (
                <div className="advantage-item" key={index}>
                  <Check size={20} className="check-icon" />
                  <p>{advantage}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-box box-1"></div>
            <div className="image-box box-2"></div>
            <div className="image-outline"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
