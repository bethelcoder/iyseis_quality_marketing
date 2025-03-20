import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <div className="logo">
              <span className="logo-text">Iyseis</span>
              <span className="logo-subtext">Quality Marketing</span>
            </div>
            <p className="footer-description">
              Elevating brands through innovative digital marketing strategies and measurable results.
            </p>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">SEO</a></li>
                <li><a href="#services">Google Ads</a></li>
                <li><a href="#services">Social Media</a></li>
                <li><a href="#services">Content Creation</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Connect</h4>
              <div className="social-icons">
                <a href="#" className="social-icon">
                  <Facebook size={20} />
                </a>
                <a href="#" className="social-icon">
                  <Twitter size={20} />
                </a>
                <a href="#" className="social-icon">
                  <Instagram size={20} />
                </a>
                <a href="#" className="social-icon">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Iyseis Quality Marketing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
