import React, { useRef, useEffect, useState } from 'react';
import { motion, useTransform, useMotionValue } from 'framer-motion';
import { Logo } from '../logo/Logo';
import { useInViewport } from '../../hooks/useInViewport';
import './StorySection.css';

const DialogueBubbles = [
  {
    id: 1,
    text: "You've tried building legal workflows with LLMs.\nThey seemed powerful — until the outputs started drifting.",
    animation: "fade-scale",
    direction: "left"
  },
  {
    id: 2,
    text: "Prompts quickly turned into fragile chains.\nOne change, and everything broke. You lost trust.",
    animation: "slide-left",
    direction: "right"
  },
  {
    id: 3,
    text: "You needed agents to specialize — in tax law, contracts, compliance.\nBut they couldn't talk to each other. Or worse, they did — without governance.",
    animation: "slide-right",
    direction: "left"
  },
  {
    id: 4,
    text: "Debugging was a black box.\nWhy did the agent cite that clause? Why did it skip that paragraph?\nNo trace. No audit. No accountability.",
    animation: "fade-up",
    direction: "right"
  },
  {
    id: 5,
    text: "Evaluating quality felt like guesswork.\nAnd when you involved humans, tracking feedback was a mess.",
    animation: "bounce",
    direction: "left"
  },
  {
    id: 6,
    text: "Even in production, things didn't get easier.\nErrors hid in logs, reviews were manual, and oversight slipped.",
    animation: "scale",
    direction: "right"
  },
  {
    id: 7,
    text: "That's why we built LegalHub:\nA traceable, modular, and governable platform for legal prompts and agents.\nFrom prompt engineering to evaluation and automation —\nfinally, a legal-grade AI stack you can trust.",
    animation: "glow",
    direction: "center"
  }
];

const StorySection = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const isVisible = useInViewport(sectionRef, false, { threshold: 0.2 });
  
  // Création des motion values pour le scroll
  const scrollProgress = useMotionValue(0);
  const [isScrolling, setIsScrolling] = useState(false);

  // Configuration du scroll parallaxe avec useEffect
  useEffect(() => {
    const updateScrollProgress = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;
      
      // Calcul du pourcentage de scroll dans la section
      const startOffset = rect.top + sectionHeight;
      const endOffset = rect.bottom;
      
      let progress = 0;
      if (startOffset > windowHeight) {
        progress = 0;
      } else if (endOffset < 0) {
        progress = 1;
      } else {
        progress = (windowHeight - rect.top) / (windowHeight + sectionHeight);
      }
      
      scrollProgress.set(Math.max(0, Math.min(1, progress)));
      
      setIsScrolling(true);
      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(() => setIsScrolling(false), 150);
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    window.addEventListener('resize', updateScrollProgress, { passive: true });
    
    // Initial call
    updateScrollProgress();
    
    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      window.removeEventListener('resize', updateScrollProgress);
      clearTimeout(window.scrollTimeout);
    };
  }, [scrollProgress]);

  // Parallaxe horizontal pour les bulles
  const x1 = useTransform(scrollProgress, [0, 1], [0, -200]);
  const x2 = useTransform(scrollProgress, [0, 1], [0, 200]);
  const x3 = useTransform(scrollProgress, [0, 1], [0, -150]);
  const x4 = useTransform(scrollProgress, [0, 1], [0, 180]);
  const x5 = useTransform(scrollProgress, [0, 1], [0, -180]);
  const x6 = useTransform(scrollProgress, [0, 1], [0, 150]);

  // Parallaxe pour le logo (mouvement vertical doux)
  const logoY = useTransform(scrollProgress, [0, 1], [0, -100]);
  const logoScale = useTransform(scrollProgress, [0, 0.5, 1], [1, 1.2, 1]);

  // Parallaxe pour l'arrière-plan
  const backgroundY = useTransform(scrollProgress, [0, 1], [0, -50]);

  const getMotionProps = (bubble) => {
    const baseProps = {
      initial: { opacity: 0, y: 50 },
      whileInView: { 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.8, 
          delay: bubble.id * 0.1,
          ease: "easeOut"
        }
      },
      viewport: { once: true, margin: "-100px" }
    };

    // Ajout du mouvement horizontal basé sur la direction
    switch (bubble.direction) {
      case "left":
        if (bubble.id === 1) return { ...baseProps, style: { x: x1 } };
        if (bubble.id === 3) return { ...baseProps, style: { x: x3 } };
        if (bubble.id === 5) return { ...baseProps, style: { x: x5 } };
        break;
      case "right":
        if (bubble.id === 2) return { ...baseProps, style: { x: x2 } };
        if (bubble.id === 4) return { ...baseProps, style: { x: x4 } };
        if (bubble.id === 6) return { ...baseProps, style: { x: x6 } };
        break;
      case "center":
        return { 
          ...baseProps, 
          whileInView: {
            ...baseProps.whileInView,
            scale: [0.9, 1.05, 1],
            transition: { 
              duration: 1.2, 
              delay: bubble.id * 0.1,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }
        };
      default:
        return baseProps;
    }
    return baseProps;
  };
  
  return (
    <section ref={sectionRef} className={`story-section ${isVisible ? 'visible' : ''}`}>
      {/* Arrière-plan parallaxe fixe */}
      <motion.div 
        className="parallax-background"
        style={{ y: backgroundY }}
      />
      
      <div className="story-content" ref={containerRef}>
        <motion.div 
          className="story-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="section-label">Story</h3>
          <div className="header-line"></div>
        </motion.div>

        <motion.h2 
          className="story-title"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          The Legal LLM Journey — And Why It Fails (Until Now)
        </motion.h2>

        <motion.p 
          className="story-intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          You've heard about legal AI. Maybe you've tried it. But do you really understand where it fits? 
          Can you explain what it does — or why it fails? Let's find out.
        </motion.p>

        <motion.div 
          className="sticky-logo"
          style={{ 
            y: logoY,
            scale: logoScale 
          }}
        >
          <Logo />
        </motion.div>

        <div className="dialogue-container">
          {DialogueBubbles.map((bubble) => (
            <motion.div 
              key={bubble.id}
              className={`dialogue-bubble ${bubble.animation}`}
              data-bubble-id={bubble.id}
              {...getMotionProps(bubble)}
            >
              {bubble.text.split('\n').map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Éléments décoratifs flottants */}
        <motion.div 
          className="floating-element floating-element-1"
          style={{ 
            x: useTransform(scrollProgress, [0, 1], [0, -300]),
            y: useTransform(scrollProgress, [0, 1], [0, -100])
          }}
        />
        <motion.div 
          className="floating-element floating-element-2"
          style={{ 
            x: useTransform(scrollProgress, [0, 1], [0, 250]),
            y: useTransform(scrollProgress, [0, 1], [0, -80])
          }}
        />
      </div>
    </section>
  );
};

export default StorySection;
