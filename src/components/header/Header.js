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
    fontSize: '1.25rem',
    fontWeight: '700',
    color: '#fafafa',
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    '&:hover': {
      color: '#fce96b',
      transform: 'translateY(-1px)',
    },
    '@media (max-width: 768px)': {
      fontSize: '1.1rem',
    },
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '2.5rem',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    '@media (max-width: 768px)': {
      gap: '1.5rem',
    },
    '@media (max-width: 480px)': {
      gap: '1rem',
    },
  },
  navLink: {
    color: 'rgba(250, 250, 250, 0.8)',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '500',
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    position: 'relative',
    padding: '0.5rem 0',
    transition: 'all 0.3s ease',
    '&:hover': {
      color: '#fafafa',
      transform: 'translateY(-1px)',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '0%',
      height: '2px',
      background: 'linear-gradient(90deg, #fce96b, rgba(252, 233, 107, 0.6))',
      transition: 'width 0.3s ease',
    },
    '&:hover::after': {
      width: '100%',
    },
    '@media (max-width: 768px)': {
      fontSize: '0.9rem',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.85rem',
    },
  },
  mobileMenu: {
    display: 'none',
    flexDirection: 'column',
    cursor: 'pointer',
    padding: '0.5rem',
    '@media (max-width: 480px)': {
      display: 'flex',
    },
  },
  mobileMenuLine: {
    width: '24px',
    height: '2px',
    backgroundColor: '#fafafa',
    margin: '2px 0',
    transition: 'all 0.3s ease',
  },
  mobileNavLinks: {
    display: 'flex',
    '@media (max-width: 480px)': {
      display: 'none',
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      background: 'rgba(47, 47, 46, 0.98)',
      backdropFilter: 'blur(20px)',
      flexDirection: 'column',
      padding: '1rem 2rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      '&.open': {
        display: 'flex',
      },
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

  return (
    <header className={`${classes.header} ${isScrolled ? 'scrolled' : ''}`}>
      <nav className={classes.nav}>
        <a href="/" className={classes.logo}>
          EggOn Technology
        </a>
        
        <ul className={`${classes.navLinks} ${classes.mobileNavLinks} ${isMobileMenuOpen ? 'open' : ''}`}>
          <li>
            <a 
              href="/" 
              className={classes.navLink}
              onClick={handleLinkClick}
            >
              eggon
            </a>
          </li>
          <li>
            <a 
              href="/nog-lab" 
              className={classes.navLink}
              onClick={handleLinkClick}
            >
              N.O.G Lab
            </a>
          </li>
          <li>
            <a 
              href="/learn" 
              className={classes.navLink}
              onClick={handleLinkClick}
            >
              Learn
            </a>
          </li>
        </ul>

        <div className={classes.mobileMenu} onClick={toggleMobileMenu}>
          <div className={classes.mobileMenuLine}></div>
          <div className={classes.mobileMenuLine}></div>
          <div className={classes.mobileMenuLine}></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;