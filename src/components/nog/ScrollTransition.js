import React, { useMemo } from 'react';
import { useScrollTransition } from '../../hooks/useScrollTransition';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import './ScrollTransition.css';

const ScrollTransition = ({ 
  homeContent, 
  noProjectContent,
  transitionThreshold = 0.15 
}) => {
  const { elementRef, isVisible, scrollProgress } = useScrollTransition(transitionThreshold);
  const prefersReducedMotion = usePrefersReducedMotion();

  const animationValues = useMemo(() => {
    if (prefersReducedMotion) {
      return {
        homeOpacity: isVisible ? 0 : 1,
        nogOpacity: isVisible ? 1 : 0
      };
    }

    const progress = Math.min(1, Math.max(0, scrollProgress));
    const easeOutProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    
    return {
      homeScale: 1 + (easeOutProgress * 0.15),
      homeOpacity: Math.max(0, 1 - easeOutProgress * 2),
      homeBlur: `blur(${easeOutProgress * 10}px)`,
      nogScale: 0.85 + (easeOutProgress * 0.15),
      nogOpacity: easeOutProgress,
      nogBlur: `blur(${(1 - easeOutProgress) * 10}px)`
    };
  }, [scrollProgress, isVisible, prefersReducedMotion]);

  return (
    <div className="scroll-transition-container" ref={elementRef}>
      <div 
        className={`content-layer home-layer ${scrollProgress > 0.5 ? 'fade-out' : ''}`}
        style={{
          '--home-scale': animationValues.homeScale,
          '--home-opacity': animationValues.homeOpacity,
          '--home-blur': animationValues.homeBlur
        }}
      >
        {homeContent}
      </div>

      <div 
        className={`content-layer nog-layer ${scrollProgress > 0.5 ? 'active' : ''}`}
        style={{
          '--nog-scale': animationValues.nogScale,
          '--nog-opacity': animationValues.nogOpacity,
          '--nog-blur': animationValues.nogBlur
        }}
      >
        {noProjectContent}
      </div>
    </div>
  );
};

export default ScrollTransition;