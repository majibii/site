import React, { useRef } from 'react';
import { Logo } from '../logo/Logo';
import { useInViewport } from '../../hooks/useInViewport';
import './StorySection.css';

const DialogueBubbles = [
  {
    id: 1,
    text: "You've tried building legal workflows with LLMs.\nThey seemed powerful — until the outputs started drifting.",
    animation: "fade-scale"
  },
  {
    id: 2,
    text: "Prompts quickly turned into fragile chains.\nOne change, and everything broke. You lost trust.",
    animation: "slide-left"
  },
  {
    id: 3,
    text: "You needed agents to specialize — in tax law, contracts, compliance.\nBut they couldn't talk to each other. Or worse, they did — without governance.",
    animation: "slide-right"
  },
  {
    id: 4,
    text: "Debugging was a black box.\nWhy did the agent cite that clause? Why did it skip that paragraph?\nNo trace. No audit. No accountability.",
    animation: "fade-up"
  },
  {
    id: 5,
    text: "Evaluating quality felt like guesswork.\nAnd when you involved humans, tracking feedback was a mess.",
    animation: "bounce"
  },
  {
    id: 6,
    text: "Even in production, things didn't get easier.\nErrors hid in logs, reviews were manual, and oversight slipped.",
    animation: "scale"
  },
  {
    id: 7,
    text: "That's why we built LegalHub:\nA traceable, modular, and governable platform for legal prompts and agents.\nFrom prompt engineering to evaluation and automation —\nfinally, a legal-grade AI stack you can trust.",
    animation: "glow"
  }
];

const StorySection = () => {
  const sectionRef = useRef(null);
  const isVisible = useInViewport(sectionRef, false, { threshold: 0.2 });
  
  return (
    <section 
      ref={sectionRef} 
      className={`story-section ${isVisible ? 'visible' : ''}`}
      style={{
        minHeight: '100vh',
        width: '100%',
        padding: 'clamp(2rem, 5vh, 4rem) clamp(1rem, 3vw, 2rem)',
        backgroundColor: 'transparent',
        color: '#fafafa',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        // Assure la visibilité immédiate
        opacity: 1,
        visibility: 'visible'
      }}
    >
      <div 
        className="story-content"
        style={{
          width: '100%',
          maxWidth: '1400px',
          textAlign: 'center',
          // Assure la visibilité du contenu
          opacity: 1,
          visibility: 'visible'
        }}
      >
        <div className="story-header" style={{ marginBottom: 'clamp(2rem, 4vh, 3rem)' }}>
          <h3 
            className="section-label"
            style={{
              fontSize: 'clamp(0.9rem, 1.5vw, 1.2rem)',
              fontWeight: '600',
              color: 'rgba(250, 250, 250, 0.8)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '1rem'
            }}
          >
            Story
          </h3>
          <div 
            className="header-line"
            style={{
              width: '100px',
              height: '2px',
              backgroundColor: 'rgba(250, 250, 250, 0.3)',
              margin: '0 auto'
            }}
          ></div>
        </div>

        <h2 
          className="story-title"
          style={{
            fontSize: 'clamp(2rem, 6vw, 4rem)',
            fontWeight: '900',
            color: '#fafafa',
            lineHeight: '1.1',
            marginBottom: 'clamp(1.5rem, 3vh, 2rem)',
            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.6)'
          }}
        >
          The Legal LLM Journey — And Why It Fails (Until Now)
        </h2>

        <p 
          className="story-intro"
          style={{
            fontSize: 'clamp(1rem, 2.2vw, 1.3rem)',
            color: 'rgba(250, 250, 250, 0.9)',
            lineHeight: '1.6',
            marginBottom: 'clamp(3rem, 6vh, 4rem)',
            maxWidth: '80ch',
            margin: '0 auto clamp(3rem, 6vh, 4rem) auto'
          }}
        >
          You've heard about legal AI. Maybe you've tried it. But do you really understand where it fits? 
          Can you explain what it does — or why it fails? Let's find out.
        </p>

        <div 
          className="sticky-logo"
          style={{
            marginBottom: 'clamp(2rem, 4vh, 3rem)',
            opacity: 0.7
          }}
        >
          <Logo />
        </div>

        <div 
          className="dialogue-container"
          style={{
            display: 'grid',
            gap: 'clamp(1.5rem, 3vh, 2.5rem)',
            maxWidth: '90ch',
            margin: '0 auto'
          }}
        >
          {DialogueBubbles.map((bubble, index) => (
            <div 
              key={bubble.id}
              className={`dialogue-bubble ${bubble.animation}`}
              data-bubble-id={bubble.id}
              style={{
                padding: 'clamp(1.2rem, 2.5vw, 2rem)',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '16px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                // Assure la visibilité immédiate sans animation complexe
                opacity: 1,
                transform: 'none',
                // Animation simple au hover
                transition: 'all 0.3s ease',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-5px)';
                e.target.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
              }}
            >
              {bubble.text.split('\n').map((line, i) => (
                <p 
                  key={i}
                  style={{
                    margin: i === 0 ? '0' : '0.8em 0 0 0',
                    fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
                    lineHeight: '1.5',
                    color: '#fafafa'
                  }}
                >
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorySection;
