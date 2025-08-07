import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NOGProjectSection = () => {
  const [currentLineIndex, setCurrentLineIndex] = React.useState(0);
  
  const lines = [
    "Build AI agents",
    "Prompt engineering", 
    "Advise on AI security",
    "Connect AI to data",
    "Deliver AI training"
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLineIndex((prevIndex) => (prevIndex + 1) % lines.length);
    }, 3500); // Change every 3.5 seconds

    return () => clearInterval(interval);
  }, [lines.length]);

  return (
    <section
      style={{
        // Suppression de minHeight: '100vh' qui causait le problème
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        padding: '4rem 2rem', // Padding réduit pour rapprocher les sections
        position: 'relative',
        boxSizing: 'border-box',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          textAlign: 'center',
          width: '100%',
          maxWidth: '1200px',
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* Phrase complète qui défile avec bouton intégré */}
        <div
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.8rem)',
            color: '#fafafa',
            lineHeight: '1.6',
            fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
            fontWeight: '400',
            maxWidth: '1100px',
            margin: '0 auto',
            textAlign: 'center',
            padding: '2rem',
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '16px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            minHeight: '8rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'nowrap', gap: '0.3rem' }}>
            <span>Right now, clients are asking the eggon team to </span>
            <AnimatePresence mode="wait">
              <motion.span
                key={currentLineIndex}
                initial={{ 
                  opacity: 0, 
                  y: 20
                }}
                animate={{ 
                  opacity: 1, 
                  y: 0
                }}
                exit={{ 
                  opacity: 0, 
                  y: -20
                }}
                transition={{ 
                  duration: 0.5,
                  ease: "easeInOut"
                }}
                style={{
                  color: '#fce96b',
                  fontWeight: '700',
                  textShadow: '0 2px 8px rgba(252, 233, 107, 0.6)',
                  display: 'inline-block',
                  marginLeft: '0.3rem',
                  whiteSpace: 'nowrap'
                }}
              >
                {lines[currentLineIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Ligne avec Get Examples et les boutons */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              width: '100%'
            }}
          >
            <div
              style={{
                fontSize: 'clamp(0.9rem, 2vw, 1.2rem)',
                color: '#fce96b',
                fontWeight: '600',
                fontFamily: '"Inter", sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                textShadow: '0 2px 8px rgba(252, 233, 107, 0.6)'
              }}
            >
              Get Examples
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                style={{
                  padding: '0.5rem 1.5rem',
                  fontSize: 'clamp(0.8rem, 1.5vw, 1rem)',
                  fontWeight: '600',
                  color: '#fafafa',
                  backgroundColor: 'transparent',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontFamily: '"Inter", sans-serif',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  backdropFilter: 'blur(10px)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px) scale(1.05)';
                  e.target.style.borderColor = '#fce96b';
                  e.target.style.color = '#fce96b';
                  e.target.style.boxShadow = '0 8px 30px rgba(252, 233, 107, 0.2)';
                  e.target.style.backgroundColor = 'rgba(252, 233, 107, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  e.target.style.color = '#fafafa';
                  e.target.style.boxShadow = 'none';
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                Use Cases Agent
              </button>

              <button
                style={{
                  padding: '0.5rem 1.5rem',
                  fontSize: 'clamp(0.8rem, 1.5vw, 1rem)',
                  fontWeight: '600',
                  color: '#fafafa',
                  backgroundColor: 'transparent',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontFamily: '"Inter", sans-serif',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  backdropFilter: 'blur(10px)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px) scale(1.05)';
                  e.target.style.borderColor = '#fce96b';
                  e.target.style.color = '#fce96b';
                  e.target.style.boxShadow = '0 8px 30px rgba(252, 233, 107, 0.2)';
                  e.target.style.backgroundColor = 'rgba(252, 233, 107, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  e.target.style.color = '#fafafa';
                  e.target.style.boxShadow = 'none';
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                IA Academy Program
              </button>
            </div>
          </div>
        </div>

        {/* Indicateurs de progression */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            marginTop: '2rem'
          }}
        >
          {lines.map((_, index) => (
            <div
              key={index}
              style={{
                width: index === currentLineIndex ? '2rem' : '0.5rem',
                height: '0.5rem',
                backgroundColor: index === currentLineIndex ? '#fce96b' : 'rgba(255, 255, 255, 0.3)',
                borderRadius: '1rem',
                transition: 'all 0.5s ease',
                boxShadow: index === currentLineIndex ? '0 0 12px rgba(252, 233, 107, 0.6)' : 'none'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NOGProjectSection;
