import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    padding: '1rem 2rem',
    background: 'rgba(47, 47, 46, 0.85)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all 0.3s ease',
    '&.scrolled': {
      background: 'rgba(47, 47, 46, 0.95)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
    },
    '@media (max-width: 768px)': {
      padding: '0.75rem 1rem',
    },
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '1400px',
    margin: '0 auto',
    width: '100%',
  },
  logo: {
    fontSize: '1rem',
    fontWeight: 500,
    color: 'rgba(250, 250, 250, 0.8)',
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    '&:hover': {
      opacity: 1,
      color: '#fafafa',
    },
    '@media (max-width: 768px)': {
      display: 'none',
    },
  },
  // Logo circulaire pour mobile
  circularLogo: {
    display: 'none',
    '@media (max-width: 768px)': {
      display: 'block',
      position: 'relative',
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      cursor: 'pointer',
      transformOrigin: '50% 50%',
      WebkitTransformOrigin: '50% 50%',
      // Animation de rotation au hover pour plus d'interactivité
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'rotate(10deg) scale(1.05)',
        '& $circularText': {
          color: '#fafafa',
        },
      },
    },
  },
  circularText: {
    position: 'absolute',
    display: 'inline-block',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    fontSize: '12px',
    fontWeight: 600,
    color: 'rgba(250, 250, 250, 0.8)',
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    transition: 'all 0.5s cubic-bezier(0, 0, 0, 1)',
    pointerEvents: 'none', // Empêche les interférences avec l'interaction hover
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '2.5rem',
    '@media (max-width: 768px)': {
      display: 'none',
    },
  },
  navLink: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.75rem 1.5rem',
    color: 'rgba(250, 250, 250, 0.8)',
    textDecoration: 'none',
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    fontSize: '1rem',
    fontWeight: 500,
    transition: 'all 0.3s ease',
    '&:hover': {
      color: '#fafafa',
      opacity: 1,
    },
  },
  mobileMenuToggle: {
    display: 'none',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '2.5rem',
    height: '2.5rem',
    background: 'rgba(255, 255, 255, 0.08)',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.15)',
      borderColor: 'rgba(255, 255, 255, 0.2)',
    },
    '@media (max-width: 768px)': {
      display: 'flex',
    },
  },
  hamburgerLine: {
    width: '18px',
    height: '2px',
    backgroundColor: '#fafafa',
    margin: '2px 0',
    transition: 'all 0.3s ease',
    '&.active:nth-child(1)': {
      transform: 'rotate(45deg) translate(5px, 5px)',
    },
    '&.active:nth-child(2)': {
      opacity: 0,
    },
    '&.active:nth-child(3)': {
      transform: 'rotate(-45deg) translate(7px, -6px)',
    },
  },
  mobileNav: {
    display: 'none',
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    background: 'rgba(47, 47, 46, 0.98)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '1.5rem 2rem',
    flexDirection: 'column',
    gap: '1rem',
    opacity: 0,
    transform: 'translateY(-10px)',
    transition: 'all 0.3s ease',
    '&.open': {
      display: 'flex',
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
  mobileNavLink: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem 1.5rem',
    color: 'rgba(250, 250, 250, 0.8)',
    textDecoration: 'none',
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    fontSize: '1rem',
    fontWeight: 500,
    transition: 'all 0.3s ease',
    borderRadius: '8px',
    position: 'relative',
    overflow: 'hidden',
    // Effet de soulignement animé
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '0.5rem',
      left: '50%',
      width: '0%',
      height: '2px',
      background: 'linear-gradient(90deg, #fafafa, rgba(250, 250, 250, 0.6))',
      transform: 'translateX(-50%)',
      transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      borderRadius: '1px',
    },
    '&:hover': {
      color: '#fafafa',
      opacity: 1,
      background: 'rgba(255, 255, 255, 0.05)',
      transform: 'translateY(-2px)',
      '&::after': {
        width: '80%',
      },
    },
    // Animation d'apparition du soulignement lors de l'ouverture du menu
    '&.menu-open': {
      '&::after': {
        animation: '$slideInUnderline 0.6s ease-out forwards',
        animationDelay: 'calc(var(--delay) + 0.2s)',
      },
    },
  },
  // Animation keyframes pour l'effet d'apparition
  '@keyframes slideInUnderline': {
    '0%': {
      width: '0%',
      opacity: 0,
    },
    '50%': {
      width: '0%',
      opacity: 1,
    },
    '100%': {
      width: '60%',
      opacity: 1,
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Fonction pour créer le texte circulaire
  const createCircularText = (text) => {
    const chars = text.split('');
    const angleStep = 360 / chars.length;
    
    return chars.map((char, index) => {
      const angle = index * angleStep;
      const rotation = angle - 90; // Commence en haut
      
      return (
        <span
          key={index}
          className={classes.circularText}
          style={{
            transform: `rotate(${rotation}deg) translateY(-20px) rotate(-${rotation}deg)`,
            transformOrigin: '50% 50%',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      );
    });
  };

  // Données des liens de navigation
  const navigationLinks = [
    { href: '/', label: 'eggon' },
    { href: '/nog-lab', label: 'N.O.G Lab' },
    { href: '/learn', label: 'Learn' }
  ];

  return (
    <header className={`${classes.header} ${isScrolled ? 'scrolled' : ''}`}>
      <nav className={classes.nav}>
        {/* Logo desktop */}
        <a href="/" className={classes.logo}>
          EggOn Technology
        </a>
        
        {/* Logo circulaire mobile */}
        <a href="/" className={classes.circularLogo}>
          {createCircularText('EggOn Tech')}
        </a>
        
        {/* Navigation desktop */}
        <div className={classes.navLinks}>
          {navigationLinks.map((link, index) => (
            <a 
              key={index}
              href={link.href} 
              className={classes.navLink} 
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Bouton hamburger mobile */}
        <button className={classes.mobileMenuToggle} onClick={toggleMobileMenu}>
          <span className={`${classes.hamburgerLine} ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`${classes.hamburgerLine} ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`${classes.hamburgerLine} ${isMobileMenuOpen ? 'active' : ''}`}></span>
        </button>

        {/* Navigation mobile avec animations améliorées */}
        <div className={`${classes.mobileNav} ${isMobileMenuOpen ? 'open' : ''}`}>
          {navigationLinks.map((link, index) => (
            <a 
              key={index}
              href={link.href} 
              className={`${classes.mobileNavLink} ${isMobileMenuOpen ? 'menu-open' : ''}`}
              onClick={handleLinkClick}
              style={{
                '--delay': `${index * 0.1}s`,
                animationDelay: `${index * 0.1}s`
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
