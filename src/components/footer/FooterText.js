import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../header/LanguageSelector';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();
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
    <div className="footer-with-banner">
      {/* Bannière en arrière-plan */}
      <div className="footer-banner">
        <img 
          src="/eggon banner transp black (1).webp" 
          alt="EggOn Technology Banner Desktop"
          className="desktop-banner"
        />
        <img 
          src="/eggon banner transp black (2).webp" 
          alt="EggOn Technology Banner Mobile"
          className="mobile-banner"
        />
      </div>
      
      {/* Footer avec contenu transparent */}
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
            
            {/* Language Selector + Copyright */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginTop: 'auto',
              gap: '1rem',
              flexWrap: 'wrap'
            }}>
              <p className="footer-copyright" style={{ margin: 0, flex: 1 }}>
                {t('footer.copyright')}
              </p>
              
              {/* Language Selector */}
              <div style={{ flexShrink: 0 }}>
                <LanguageSelector variant="footer" />
              </div>
            </div>
          </div>

          {/* Right side - Navigation links */}
          <div className="footer-right">
            {/* First column - Why EggOn */}
            <div className="footer-column">
              <h4 className="footer-column-title">{t('footer.whyEggon')}</h4>
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
                    {t('footer.aboutUs')}
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
                    {t('footer.futureAI')}
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
                    {t('navigation.learn')}
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
                    {t('navigation.contact')}
                  </a>
                </li>
              </ul>
            </div>

            {/* Second column - Legal */}
            <div className="footer-column">
              <h4 className="footer-column-title">{t('footer.legal')}</h4>
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
                    {t('footer.termsOfUse')}
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
                    {t('footer.privacyPolicy')}
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
                    {t('footer.cookieChoices')}
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
                    {t('footer.dataProcessing')}
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
                    {t('footer.legalNotice')}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
