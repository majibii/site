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
        fadeOpacity: isVisible ? 0.3 : 1,
        fadeScale: 1,
        slideY: 0,
        slideOpacity: isVisible ? 1 : 0
      };
    }

    // Transition douce basée sur le progrès
    const easedProgress = easeInOutCubic(scrollProgress);
    
    return {
      fadeOpacity: Math.max(0.1, 1 - easedProgress * 0.9),
      fadeScale: Math.max(0.95, 1 - easedProgress * 0.05),
      slideY: Math.max(0, 100 - (easedProgress * 100)),
      slideOpacity: Math.min(1, Math.max(0, easedProgress * 1.2 - 0.2))
    };
  }, [scrollProgress, isVisible, prefersReducedMotion]);

  return (
    <div 
      className="scroll-transition-container" 
      data-theme={theme}
    >
      {/* Section d'accueil qui s'estompe */}
      <div 
        className={`home-section ${isVisible ? 'fading' : ''}`}
        style={{
          '--fade-opacity': animationValues.fadeOpacity,
          '--fade-scale': animationValues.fadeScale
        }}
      >
        {homeContent}
      </div>

      {/* Section "No project" qui slide depuis le bas */}
      <div 
        ref={elementRef}
        className={`no-project-section ${isVisible ? 'visible' : ''}`}
        style={{
          '--slide-y': `${animationValues.slideY}px`,
          '--slide-opacity': animationValues.slideOpacity
        }}
      >
        {noProjectContent}
      </div>
    </div>
  );
};

// Fonction d'easing pour une transition plus naturelle
const easeInOutCubic = (t) => {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

export default ScrollTransition;
