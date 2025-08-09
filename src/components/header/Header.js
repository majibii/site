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
