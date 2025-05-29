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
        homeOpacity: isVisible ? 0 : 1,
        homeTextOpacity: isVisible ? 0 : 1,
        nogOpacity: isVisible ? 1 : 0,
        blendOffset: 0,
        animationIntensity: isVisible ? 0 : 1
      };
    }

    // Progression en phases pour un contrôle fin
    const progress = Math.max(0, Math.min(1, scrollProgress));
    const smoothProgress = progress * progress * (3 - 2 * progress);
    
    // Phase 1: Estompage des textes (commence tôt)
    const textFadeProgress = Math.max(0, Math.min(1, progress * 1.5));
    
    // Phase 2: Estompage général de la page d'accueil
    const homeFadeProgress = Math.max(0, Math.min(1, (progress - 0.2) * 1.25));
    
    // Phase 3: Apparition complète de NOG (finit tard et atteint 100%)
    const nogRevealProgress = Math.max(0, Math.min(1, (progress - 0.1) * 1.25));
    
    return {
      // Textes disparaissent en premier
      homeTextOpacity: 1 - (textFadeProgress * textFadeProgress),
      // Page d'accueil s'estompe progressivement
      homeOpacity: 1 - homeFadeProgress,
      // Animations perdent en intensité
      animationIntensity: 1 - smoothProgress,
      // NOG apparaît complètement opaque à la fin
      nogOpacity: nogRevealProgress,
      // TEXTE NOG à 100% dès 70% du scroll
      nogTextOpacity: progress > 0.7 ? 1 : nogRevealProgress * 1.5,
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
          '--text-opacity': animationValues.homeTextOpacity,
          '--animation-intensity': animationValues.animationIntensity,
          '--layer-filter': `saturate(${1 - animationValues.nogOpacity * 0.3}) blur(${animationValues.nogOpacity * 2}px)`
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
        <div 
          className="nog-content-wrapper"
          style={{
            '--nog-text-opacity': animationValues.nogTextOpacity
          }}
        >
          {noProjectContent}
        </div>
      </div>
    </div>
  );
};

export default ScrollTransition;
