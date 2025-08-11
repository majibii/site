import React from 'react';
import './Footer.css';

const Footer = () => {
  const handleNavigation = (path) => {
    window.location.href = path;
  };

  // Social media data
  const socialProfiles = [
    {
      network: 'GitHub',
      url: 'https://github.com/MarinaEgg',
      icon: 'fab fa-github'
    },
    {
      network: 'LinkedIn', 
      url: 'https://linkedin.com/in/votre-profil',
      icon: 'fab fa-linkedin'
    },
    {
      network: 'Twitter',
      url: 'https://twitter.com/votre-compte',
      icon: 'fab fa-twitter'
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left column - Logo, brand, social, copyright */}
        <div className="footer-left">
          <div className="footer-brand-section">
            <div className="footer-logo-section">
              <img 
                src="/jo.svg" 
                alt="EggOn Technology Logo" 
                className="footer-logo"
              />
              <h3 className="footer-brand-name">EggOn Technology</h3>
            </div>
            
            {/* Social Icons */}
            <div className="footer-social-icons">
              {socialProfiles.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icon"
                  title={social.network}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
          
          {/* Copyright */}
          <p className="footer-copyright">
            © EggOn Technology 2025
          </p>
        </div>

        {/* Right side - Navigation links */}
        <div className="footer-right">
          {/* First column - Why EggOn */}
          <div className="footer-column">
            <h4 className="footer-column-title">Why EggOn</h4>
            <ul className="footer-links">
              <li>
                <a 
                  href="/" 
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation('/');
                  }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="/nog-lab" 
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation('/nog-lab');
                  }}
                >
                  Future AI
                </a>
              </li>
              <li>
                <a 
                  href="/learn" 
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation('/learn');
                  }}
                >
                  Learn
                </a>
              </li>
              <li>
                <a 
                  href="/contact" 
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation('/contact');
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Second column - Legal */}
          <div className="footer-column">
            <h4 className="footer-column-title">Legal</h4>
            <ul className="footer-links">
              <li>
                <a 
                  href="#terms" 
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log('Terms of Use - to be implemented');
                  }}
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a 
                  href="#privacy" 
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log('Privacy Policy - to be implemented');
                  }}
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="#cookies" 
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log('Cookie Choices - to be implemented');
                  }}
                >
                  Cookie Choices
                </a>
              </li>
              <li>
                <a 
                  href="#data-processing" 
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log('Data Processing Agreement - to be implemented');
                  }}
                >
                  Data Processing Agreement
                </a>
              </li>
              <li>
                <a 
                  href="#legal-notice" 
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log('Legal Notice - to be implemented');
                  }}
                >
                  Legal Notice
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;