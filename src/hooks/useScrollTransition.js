import { useState, useEffect, useRef } from 'react';

export const useScrollTransition = (threshold = 0.3, rootMargin = '0px') => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const elementRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // IntersectionObserver pour détecter l'entrée en vue
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        
        // Calculer le progrès de scroll quand l'élément est visible
        if (entry.isIntersecting) {
          const rect = entry.boundingClientRect;
          const windowHeight = window.innerHeight;
          
          // Calculer le progrès basé sur la position de l'élément
          const progress = Math.max(0, Math.min(1, 
            (windowHeight - rect.top) / (windowHeight + rect.height)
          ));
          
          setScrollProgress(progress);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observerRef.current.observe(element);

    // Listener pour mettre à jour le progrès en continu lors du scroll
    const handleScroll = () => {
      if (!element || !isVisible) return;
      
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const progress = Math.max(0, Math.min(1, 
        (windowHeight - rect.top) / (windowHeight + rect.height)
      ));
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold, rootMargin, isVisible]);

  return {
    elementRef,
    isVisible,
    scrollProgress
  };
};