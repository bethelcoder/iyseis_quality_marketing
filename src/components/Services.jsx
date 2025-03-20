import React from 'react';
import { Facebook, BarChart, Globe, Layers, MessageCircle, PenTool, Search } from 'lucide-react';
import '../styles/Services.css';

const Services = () => {
  const services = [
    {
      icon: <Search size={48} />,
      title: 'Search Engine Optimization',
      description: 'Improve visibility online and drive more organic traffic with our data-driven SEO strategies.'
    },
    {
      icon: <BarChart size={48}/>,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights that drive strategic decisions and marketing optimization.'
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
      icon: <Layers size={48} />,
      title: 'Brand Strategy',
      description: 'Develop a cohesive brand identity and strategy that resonates with your target market and sets you apart.'
    },
    {
      icon: <Globe size={48} />,
      title: 'Web Development',
      description: 'Create stunning, responsive websites that deliver exceptional user experiences and drive business growth.'
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
