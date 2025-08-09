import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css'; // CHANGEMENT : Utilisation d'un fichier CSS séparé au lieu de makeStyles

// Composant CircularText avec Framer Motion
const CircularText = ({ text, spinDuration = 20, onHover, className = '', onClick }) => {
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
      className={`header-circular-text ${className}`}
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
            className="header-char-span"
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
    <header className={`eggon-header ${isScrolled ? 'eggon-header-scrolled' : ''}`}>
      <nav className="eggon-nav">
        {/* Logo desktop */}
        <motion.a 
          href="/" 
          className="eggon-logo"
          whileHover={{ scale: 1.05, color: '#fafafa' }}
          transition={{ duration: 0.2 }}
        >
          EggOn Technology
        </motion.a>
        
        {/* Logo circulaire mobile */}
        <div className="eggon-circular-logo">
          <CircularText
            text="EGGON * TECHNOLOGY * "
            spinDuration={15}
            onHover="speedUp"
            onClick={() => window.location.href = '/'}
          />
        </div>
        
        {/* Navigation desktop */}
        <div className="eggon-nav-links">
          {navigationLinks.map((link, index) => (
            <motion.a 
              key={index}
              href={link.href} 
              className="eggon-nav-link" 
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
        <motion.div 
          className="eggon-mobile-menu-toggle" 
          onClick={toggleMobileMenu}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div 
            className="eggon-hamburger-line"
            variants={hamburgerVariants}
            animate={isMobileMenuOpen ? "open" : "closed"}
          />
          <motion.div 
            className="eggon-hamburger-line"
            variants={hamburgerMiddleVariants}
            animate={isMobileMenuOpen ? "open" : "closed"}
          />
          <motion.div 
            className="eggon-hamburger-line"
            variants={hamburgerBottomVariants}
            animate={isMobileMenuOpen ? "open" : "closed"}
          />
        </motion.div>

        {/* Navigation mobile */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="eggon-mobile-nav"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {navigationLinks.map((link, index) => (
                <motion.div key={index} variants={linkVariants}>
                  <motion.a 
                    href={link.href} 
                    className="eggon-mobile-nav-link"
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
