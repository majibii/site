import React from 'react';
import './Footer.css';

const Footer = () => {
  const handleNavigation = (path) => {
    window.location.href = path;
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Colonne de gauche - Logo et copyright */}
        <div className="footer-brand">
          <div className="footer-logo-section">
            <img 
              src="/jo.svg" 
              alt="EggOn Technology Logo" 
              className="footer-logo"
            />
            <h3 className="footer-brand-name">EggOn Technology</h3>
          </div>
          <p className="footer-copyright">
            © EggOn Technology 2025
          </p>
        </div>

        {/* Colonne du centre - Pourquoi EggOn */}
        <div className="footer-column">
          <h4 className="footer-column-title">Pourquoi EggOn</h4>
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
                Pourquoi EggOn
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
                Qui sommes-nous
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
                href="#contact" 
                className="footer-link"
                onClick={(e) => {
                  e.preventDefault();
                  // TODO: Ajouter la navigation vers la page contact quand elle sera créée
                  console.log('Contact page - à implémenter');
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Colonne de droite - Légal */}
        <div className="footer-column">
          <h4 className="footer-column-title">Légal</h4>
          <ul className="footer-links">
            <li>
              <a 
                href="#terms" 
                className="footer-link"
                onClick={(e) => {
                  e.preventDefault();
                  // TODO: Ajouter les liens légaux
                  console.log('Conditions d\'utilisation - à implémenter');
                }}
              >
                Conditions d'utilisation
              </a>
            </li>
            <li>
              <a 
                href="#privacy" 
                className="footer-link"
                onClick={(e) => {
                  e.preventDefault();
                  console.log('Politique de confidentialité - à implémenter');
                }}
              >
                Politique de confidentialité
              </a>
            </li>
            <li>
              <a 
                href="#cookies" 
                className="footer-link"
                onClick={(e) => {
                  e.preventDefault();
                  console.log('Choix des cookies - à implémenter');
                }}
              >
                Choix des cookies
              </a>
            </li>
            <li>
              <a 
                href="#data-processing" 
                className="footer-link"
                onClick={(e) => {
                  e.preventDefault();
                  console.log('Contrat de traitement des données - à implémenter');
                }}
              >
                Contrat de traitement des données
              </a>
            </li>
            <li>
              <a 
                href="#legal-notice" 
                className="footer-link"
                onClick={(e) => {
                  e.preventDefault();
                  console.log('Mentions légales - à implémenter');
                }}
              >
                Mentions légales
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;