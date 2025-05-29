// src/components/nog/ScrollTransition.js
import React, { useMemo } from 'react';
import { useScrollTransition } from '../../hooks/useScrollTransition';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import './ScrollTransition.css';

const ScrollTransition = ({ 
  homeContent, 
  noProjectContent, 
  theme = 'dark',
  transitionThreshold = 0.1 
}) => {
  const { elementRef, isVisible, scrollProgress } = useScrollTransition(transitionThreshold);
  const prefersReducedMotion = usePrefersReducedMotion();

  // Calculer les valeurs d'animation basées sur le progrès du scroll
  const animationValues = useMemo(() => {
    if (prefersReducedMotion) {
      return {
        homeOpacity: isVisible ? 0.8 : 1,
        homeBlur: isVisible ? 2 : 0,
        overlayOpacity: isVisible ? 0.3 : 0,
        nogOpacity: isVisible ? 1 : 0,
        nogY: isVisible ? 0 : 30,
        nogScale: isVisible ? 1 : 0.95
      };
    }

    // Transition très douce et progressive
    const smoothProgress = easeInOutQuart(scrollProgress);
    const earlyProgress = Math.min(1, scrollProgress * 1.5); // Commence plus tôt
    const lateProgress = Math.max(0, (scrollProgress - 0.3) * 1.43); // Finit plus tard
    
    return {
      // Page d'accueil : légère atténuation sans arrêter l'animation
      homeOpacity: Math.max(0.3, 1 - smoothProgress * 0.7),
      homeBlur: smoothProgress * 8,
      homeScale: Math.max(0.98, 1 - smoothProgress * 0.02),
      
      // Overlay de transition graduelle
      overlayOpacity: earlyProgress * 0.4,
      
      // Section NOG : apparition progressive
      nogOpacity: lateProgress,
      nogY: (1 - lateProgress) * 60,
      nogScale: 0.9 + (lateProgress * 0.1),
      nogBlur: (1 - lateProgress) * 10
    };
  }, [scrollProgress, isVisible, prefersReducedMotion]);

  return (
    <div 
      className="scroll-transition-container" 
      data-theme={theme}
    >
      {/* Section d'accueil qui continue son animation */}
      <div 
        className={`home-section ${isVisible ? 'transitioning' : ''}`}
        style={{
          '--home-opacity': animationValues.homeOpacity,
          '--home-blur': `${animationValues.homeBlur}px`,
          '--home-scale': animationValues.homeScale
        }}
      >
        {homeContent}
      </div>

      {/* Overlay de transition pour un effet plus doux */}
      <div 
        className="transition-overlay"
        style={{
          '--overlay-opacity': animationValues.overlayOpacity
        }}
      />

      {/* Section "No project" qui apparaît progressivement */}
      <div 
        ref={elementRef}
        className={`no-project-section ${isVisible ? 'visible' : ''}`}
        style={{
          '--nog-opacity': animationValues.nogOpacity,
          '--nog-y': `${animationValues.nogY}px`,
          '--nog-scale': animationValues.nogScale,
          '--nog-blur': `${animationValues.nogBlur}px`
        }}
      >
        {noProjectContent}
      </div>
    </div>
  );
};

// Fonction d'easing plus douce pour une transition naturelle
const easeInOutQuart = (t) => {
  return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
};

export default ScrollTransition;
