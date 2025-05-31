import React, { useRef, useEffect } from 'react';
import { motion, useTransform, useMotionValue } from 'framer-motion';
import { Logo } from '../logo/Logo';
import { useInViewport } from '../../hooks/useInViewport';
import './StorySection.css';

const DialogueBubbles = [
  {
    id: 1,
    text: "You've tried building legal workflows with LLMs.\nThey seemed powerful — until the outputs started drifting.",
    side: "left"
  },
  {
    id: 2,
    text: "Prompts quickly turned into fragile chains.\nOne change, and everything broke. You lost trust.",
    side: "right"
  },
  {
    id: 3,
    text: "You needed agents to specialize — in tax law, contracts, compliance.\nBut they couldn't talk to each other. Or worse, they did — without governance.",
    side: "left"
  },
  {
    id: 4,
    text: "Debugging was a black box.\nWhy did the agent cite that clause? Why did it skip that paragraph?\nNo trace. No audit. No accountability.",
    side: "right"
  },
  {
    id: 5,
    text: "Evaluating quality felt like guesswork.\nAnd when you involved humans, tracking feedback was a mess.",
    side: "left"
  },
  {
    id: 6,
    text: "Even in production, things didn't get easier.\nErrors hid in logs, reviews were manual, and oversight slipped.",
    side: "right"
  },
  {
    id: 7,
    text: "That's why we built LegalHub:\nA traceable, modular, and governable platform for legal prompts and agents.\nFrom prompt engineering to evaluation and automation —\nfinally, a legal-grade AI stack you can trust.",
    side: "center"
  }
];

const StorySection = () => {
  const sectionRef = useRef(null);
  const isVisible = useInViewport(sectionRef, false, { threshold: 0.2 });
  
  // Motion value pour le scroll
  const scrollProgress = useMotionValue(0);

  // Configuration du scroll
  useEffect(() => {
    const updateScrollProgress = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;
      
      // Calcul du pourcentage de scroll dans la section
      let progress = 0;
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        progress = (windowHeight - rect.top) / (windowHeight + sectionHeight);
        progress = Math.max(0, Math.min(1, progress));
      }
      
      scrollProgress.set(progress);
    };

    const handleScroll = () => {
      requestAnimationFrame(updateScrollProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateScrollProgress();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollProgress]);

  // Transformation pour le défilement vertical des bulles
  const bubblesY = useTransform(scrollProgress, [0, 1], [0, -1000]);
  
  return (
    <section ref={sectionRef} className={`story-section ${isVisible ? 'visible' : ''}`}>
      <div className="story-content">
        <div className="story-header">
          <h3 className="section-label">Story</h3>
          <div className="header-line"></div>
        </div>

        <h2 className="story-title">
          The Legal LLM Journey — And Why It Fails (Until Now)
        </h2>

        <p className="story-intro">
          You've heard about legal AI. Maybe you've tried it. But do you really understand where it fits? 
          Can you explain what it does — or why it fails? Let's find out.
        </p>

        {/* Logo fixe au centre */}
        <div className="fixed-logo">
          <Logo />
        </div>

        {/* Container des bulles qui défilent */}
        <div className="story-timeline">
          <motion.div 
            className="bubbles-container"
            style={{ y: bubblesY }}
          >
            {DialogueBubbles.map((bubble, index) => (
              <motion.div 
                key={bubble.id}
                className={`story-bubble story-bubble--${bubble.side}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1,
                  transition: { 
                    duration: 0.6, 
                    delay: 0.1,
                    ease: "easeOut"
                  }
                }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="bubble-content">
                  {bubble.text.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
                {bubble.side !== 'center' && (
                  <div className={`bubble-arrow bubble-arrow--${bubble.side}`}></div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
