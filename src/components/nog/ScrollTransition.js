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

  // Calculer les valeurs d'animation pour une fusion progressive
  const animationValues = useMemo(() => {
    if (prefersReducedMotion) {
      return {
        homeOpacity: isVisible ? 0.5 : 1,
        nogOpacity: isVisible ? 1 : 0,
        blendOffset: 0
      };
    }

    // Progression très douce pour éviter l'effet "trait"
    const progress = Math.max(0, Math.min(1, scrollProgress * 0.8));
    const smoothProgress = progress * progress * (3 - 2 * progress); // Smoother ease
    
    return {
      // Transition très progressive de l'opacité
      homeOpacity: 1 - smoothProgress,
      nogOpacity: smoothProgress,
      // Décalage pour créer un effet de fusion
      blendOffset: smoothProgress * 100
    };
  }, [scrollProgress, isVisible, prefersReducedMotion]);

  return (
    <div 
      className="scroll-transition-container" 
      data-theme={theme}
    >
      {/* Les deux sections se superposent et se mélangent */}
      <div 
        className="content-layer home-layer"
        style={{
          '--layer-opacity': animationValues.homeOpacity,
          '--layer-filter': `saturate(${1 - animationValues.nogOpacity * 0.3})`
        }}
      >
        {homeContent}
      </div>

      <div 
        ref={elementRef}
        className="content-layer nog-layer"
        style={{
          '--layer-opacity': animationValues.nogOpacity,
          '--blend-offset': `${animationValues.blendOffset}%`
        }}
      >
        {noProjectContent}
      </div>
    </div>
  );
};

export default ScrollTransition;
