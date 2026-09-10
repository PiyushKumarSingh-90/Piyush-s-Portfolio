import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h3>{portfolioData.personal.name}</h3>
          <p>{portfolioData.personal.role.replace('\n', ' · ')}</p>
        </div>
        
        <div className="footer-links">
          <button className="back-to-top interactive" onClick={scrollToTop} data-hover="TOP">
            BACK TO TOP
          </button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
