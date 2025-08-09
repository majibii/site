import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    width: '100vw', // AJOUT : Force la largeur complète
    zIndex: 1000,
    padding: '1rem 2rem',
    background: 'rgba(0, 0, 0, 0.3)',
    backdropFilter: 'blur(2px)',
    WebkitBackdropFilter: 'blur(2px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all 0.3s ease',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    // AJOUT : Assure que le header ne soit pas affecté par d'autres conteneurs
    margin: 0,
    boxSizing: 'border-box',
    '&.scrolled': {
      background: 'rgba(0, 0, 0, 0.5)',
      backdropFilter: 'blur(3px)',
      WebkitBackdropFilter: 'blur(3px)',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
    },
    '@media (max-width: 768px)': {
      padding: '0.75rem 1rem',
      height: '70px',
    },
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '1400px',
    margin: '0 auto',
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    // CORRECTION : Force un arrière-plan transparent pour éviter le rectangle noir
    backgroundColor: 'transparent !important',
    background: 'none !important',
  },
  logo: {
    fontSize: '1rem',
    fontWeight: 500,
    color: 'rgba(250, 250, 250, 0.9)',
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    marginLeft: '0',
    '&:hover': {
      opacity: 1,
      color: '#fafafa',
    },
    '@media (max-width: 768px)': {
      display: 'none',
    },
  },
  circularLogo: {
    display: 'none',
    '@media (max-width: 768px)': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      width: '50px',
      height: '50px',
      cursor: 'pointer',
      flexShrink: 0,
    },
  },
  circularText: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    fontSize: '10px',
    fontWeight: 600,
    color: 'rgba(250, 250, 250, 0.9)',
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  charSpan: {
    position: 'absolute',
    left: '50%',
    transformOrigin: '0 25px',
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
    color: 'rgba(250, 250, 250, 0.9)',
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
    background: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    flexShrink: 0,
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.2)',
      borderColor: 'rgba(255, 255, 255, 0.3)',
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
  },
  mobileNav: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    width: '100%', // AJOUT : Force la largeur complète
    background: 'rgba(0, 0, 0, 0.6)',
    backdropFilter: 'blur(2px)',
    WebkitBackdropFilter: 'blur(2px)',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '1.5rem 2rem',
    boxSizing: 'border-box', // AJOUT : Include le padding dans la largeur
  },
  mobileNavLink: {
    display: 'block',
    padding: '1rem 1.5rem',
    color: 'rgba(250, 250, 250, 0.9)',
    textDecoration: 'none',
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    fontSize: '1rem',
    fontWeight: 500,
    borderRadius: '8px',
    position: 'relative',
    marginBottom: '1rem',
    '&:last-child': {
      marginBottom: 0,
    },
  },
}));

// Composant CircularText avec Framer Motion
const CircularText = ({ text, spinDuration = 20, onHover, className = '', onClick }) => {
  const classes = useStyles();
  const [isHovered, setIsHovered] = useState(false);

  const getAnimationConfig = () => {
    const baseConfig = {
      rotate: 360,
      transition: {
        duration: spinDuration,
        ease: "linear",
        repeat: Infinity,
      }
    };

    if (!isHovered) return baseConfig;

    switch (onHover) {
      case 'slowDown':
        return {
          ...baseConfig,
          transition: {
            ...baseConfig.transition,
            duration: spinDuration * 3,
          }
        };
      case 'speedUp':
        return {
          ...baseConfig,
          transition: {
            ...baseConfig.transition,
            duration: spinDuration / 3,
          }
        };
      case 'pause':
        return {
          rotate: 0,
          transition: { duration: 0.5 }
        };
      case 'goBonkers':
        return {
          rotate: [0, 360, -180, 720, 0],
          scale: [1, 1.2, 0.8, 1.1, 1],
          transition: {
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }
        };
      default:
        return baseConfig;
    }
  };

  const chars = text.split('');
  const angleStep = 360 / chars.length;

  return (
    <motion.div
      className={`${classes.circularText} ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      animate={getAnimationConfig()}
    >
      {chars.map((char, index) => {
        const angle = index * angleStep;
        return (
          <span
            key={index}
            className={classes.charSpan}
            style={{
              transform: `rotate(${angle}deg)`,
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        );
      })}
    </motion.div>
  );
};

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

  const navigationLinks = [
    { href: '/', label: 'eggon' },
    { href: '/nog-lab', label: 'Lab' },
    { href: '/learn', label: 'Learn' }
  ];

  // Variants pour les animations Framer Motion
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
      }
    }
  };

  const linkVariants = {
    closed: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  const underlineVariants = {
    closed: { width: "0%" },
    open: { 
      width: "60%",
      transition: { 
        delay: 0.2,
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const hamburgerVariants = {
    closed: {
      rotate: 0,
      y: 0
    },
    open: {
      rotate: 45,
      y: 6
    }
  };

  const hamburgerMiddleVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 }
  };

  const hamburgerBottomVariants = {
    closed: {
      rotate: 0,
      y: 0
    },
    open: {
      rotate: -45,
      y: -6
    }
  };

  return (
    <header className={`${classes.header} ${isScrolled ? 'scrolled' : ''}`}>
      <nav className={classes.nav}>
        {/* Logo desktop */}
        <motion.a 
          href="/" 
          className={classes.logo}
          whileHover={{ scale: 1.05, color: '#fafafa' }}
          transition={{ duration: 0.2 }}
        >
          EggOn Technology
        </motion.a>
        
        {/* Logo circulaire mobile */}
        <div className={classes.circularLogo}>
          <CircularText
            text="EGGON * TECHNOLOGY * "
            spinDuration={15}
            onHover="speedUp"
            onClick={() => window.location.href = '/'}
          />
        </div>
        
        {/* Navigation desktop */}
        <div className={classes.navLinks}>
          {navigationLinks.map((link, index) => (
            <motion.a 
              key={index}
              href={link.href} 
              className={classes.navLink} 
              onClick={handleLinkClick}
              whileHover={{ 
                scale: 1.05, 
                color: '#fafafa',
                y: -2
              }}
              transition={{ duration: 0.2 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Bouton hamburger mobile */}
        <motion.button 
          className={classes.mobileMenuToggle} 
          onClick={toggleMobileMenu}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span 
            className={classes.hamburgerLine}
            variants={hamburgerVariants}
            animate={isMobileMenuOpen ? "open" : "closed"}
          />
          <motion.span 
            className={classes.hamburgerLine}
            variants={hamburgerMiddleVariants}
            animate={isMobileMenuOpen ? "open" : "closed"}
          />
          <motion.span 
            className={classes.hamburgerLine}
            variants={hamburgerBottomVariants}
            animate={isMobileMenuOpen ? "open" : "closed"}
          />
        </motion.button>

        {/* Navigation mobile */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className={classes.mobileNav}
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {navigationLinks.map((link, index) => (
                <motion.div key={index} variants={linkVariants}>
                  <motion.a 
                    href={link.href} 
                    className={classes.mobileNavLink}
                    onClick={handleLinkClick}
                    whileHover={{ 
                      x: 10,
                      color: '#fafafa',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)'
                    }}
                    style={{ position: 'relative' }}
                  >
                    {link.label}
                    <motion.div
                      style={{
                        position: 'absolute',
                        bottom: '0.5rem',
                        left: '50%',
                        height: '2px',
                        background: 'linear-gradient(90deg, #fafafa, rgba(250, 250, 250, 0.6))',
                        transform: 'translateX(-50%)',
                        borderRadius: '1px',
                      }}
                      variants={underlineVariants}
                      initial="closed"
                      animate="open"
                    />
                  </motion.a>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
