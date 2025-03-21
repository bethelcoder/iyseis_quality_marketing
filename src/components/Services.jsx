import React from 'react';
import Hero from './Hero';
import { MousePointerClick, Megaphone, Handshake, Facebook, BarChart, Globe, Layers, MessageCircle, PenTool, Search } from 'lucide-react';
import '../styles/Services.css';

const Services = () => {
  const services = [
    {
      icon: <Search size={48} />,
      title: 'Search Engine Optimization',
      description: 'Improve visibility online and drive more organic traffic with our data-driven SEO strategies.'
    },
    {
      icon: <MousePointerClick size={48}/>,
      title: 'Google Ads',
      description: 'Maximize your reach and ROI with Google Ads—targeted, data-driven, and designed to put your brand in front of the right audience at the right time!'
    },
    {
      icon: <MessageCircle size={48} />,
      title: 'Social Media Marketing',
      description: 'Build brand awareness and engagement through targeted social media campaigns that connect with your audience.'
    },
    {
      icon: <PenTool size={48} />,
      title: 'Content Creation',
      description: 'Craft compelling content that tells your story, engages your audience, and drives conversions.'
    },
    {
      icon: <Megaphone size={48} />,
      title: 'PR',
      description: 'Build trust, shape perceptions, and amplify your brand with powerful PR—strategic storytelling that keeps you in the spotlight!'
    },
    {
      icon: <Handshake size={48} />,
      title: 'Communication',
      description: "Boost your brand's voice with seamless, strategic communication—engaging, persuasive, and built to convert!"
    },
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="section-header">
          <h2 className="section-title service-h2">Our Services</h2>
          <div className="title-underline"></div>
          <p className="section-description">
            Comprehensive marketing solutions tailored to elevate your brand and drive exceptional<br/> results.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index} data-index={index}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
