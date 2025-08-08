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
    }, 3500);

    return () => clearInterval(interval);
  }, [lines.length]);

  // Fonction pour diviser le texte en caractères
  const splitIntoCharacters = (text) => {
    return Array.from(text);
  };

  // Fonction pour calculer le délai de stagger
  const getStaggerDelay = (index) => {
    return index * 0.05; // 50ms entre chaque caractère
  };

  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        padding: 'clamp(2rem, 5vh, 4rem) clamp(1rem, 3vw, 2rem)',
        position: 'relative',
        boxSizing: 'border-box',
        overflow: 'hidden',
        minHeight: '50vh'
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
        <div
          style={{
            fontSize: 'clamp(0.9rem, 2.2vw, 1.6rem)',
            color: '#fafafa',
            lineHeight: '1.6',
            fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
            fontWeight: '400',
            margin: '0 auto',
            textAlign: 'center',
            padding: 'clamp(1.5rem, 4vw, 2rem)',
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '16px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            minHeight: 'clamp(6rem, 15vh, 8rem)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'clamp(1rem, 3vw, 1.5rem)'
          }}
        >
          {/* Première ligne avec le texte animé */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            flexWrap: 'wrap',
            gap: 'clamp(0.2rem, 1vw, 0.5rem)',
            textAlign: 'center',
            width: '100%'
          }}>
            <span style={{ 
              display: 'inline-block',
              marginRight: 'clamp(0.3rem, 1vw, 0.5rem)'
            }}>
              Right now, clients are asking the eggon team to
            </span>
            <div style={{ 
              minWidth: 'clamp(200px, 40vw, 300px)',
              width: 'auto',
              height: 'clamp(1.8rem, 4vw, 2.2rem)',
              overflow: 'hidden',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              lineHeight: 'clamp(1.8rem, 4vw, 2.2rem)',
              backgroundColor: 'transparent',
              border: 'none'
            }}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={currentLineIndex}
                  style={{
                    display: 'inline-flex',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    whiteSpace: 'nowrap'
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {splitIntoCharacters(lines[currentLineIndex]).map((char, index) => (
                    <motion.span
                      key={`${currentLineIndex}-${index}`}
                      initial={{ 
                        y: '100%', 
                        opacity: 0 
                      }}
                      animate={{ 
                        y: 0, 
                        opacity: 1 
                      }}
                      exit={{ 
                        y: '-100%', 
                        opacity: 0 
                      }}
                      transition={{ 
                        duration: 0.5,
                        delay: getStaggerDelay(index),
                        ease: [0.4, 0.0, 0.2, 1],
                        type: "tween"
                      }}
                      style={{
                        color: '#fce96b',
                        fontWeight: '600',
                        display: 'inline-block',
                        lineHeight: 'clamp(1.8rem, 4vw, 2.2rem)',
                        backgroundColor: 'transparent'
                      }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Deuxième ligne - version desktop/tablet */}
          <div
            className="desktop-layout"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              flexWrap: 'wrap',
              gap: 'clamp(0.8rem, 2vw, 1.2rem)',
              width: '100%'
            }}
          >
            <div
              style={{
                fontSize: 'clamp(0.8rem, 1.8vw, 1.1rem)',
                color: '#fce96b',
                fontWeight: '600',
                fontFamily: '"Inter", sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              Get Examples
            </div>
            
            <button
              style={{
                padding: 'clamp(0.4rem, 1vw, 0.6rem) clamp(1rem, 2.5vw, 1.5rem)',
                fontSize: 'clamp(0.75rem, 1.5vw, 0.95rem)',
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
                overflow: 'hidden',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.borderColor = '#fce96b';
                e.target.style.color = '#fce96b';
                e.target.style.backgroundColor = 'rgba(252, 233, 107, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                e.target.style.color = '#fafafa';
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              Use Cases Agent
            </button>

            <button
              style={{
                padding: 'clamp(0.4rem, 1vw, 0.6rem) clamp(1rem, 2.5vw, 1.5rem)',
                fontSize: 'clamp(0.75rem, 1.5vw, 0.95rem)',
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
                overflow: 'hidden',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.borderColor = '#fce96b';
                e.target.style.color = '#fce96b';
                e.target.style.backgroundColor = 'rgba(252, 233, 107, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                e.target.style.color = '#fafafa';
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              IA Academy Program
            </button>
          </div>

          {/* Version mobile - affichage vertical */}
          <div
            className="mobile-layout"
            style={{
              display: 'none',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
              width: '100%'
            }}
          >
            <div
              style={{
                fontSize: '0.9rem',
                color: '#fce96b',
                fontWeight: '600',
                fontFamily: '"Inter", sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              Get Examples
            </div>
            
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column',
              gap: '0.8rem',
              width: '100%',
              maxWidth: '280px'
            }}>
              <button
                style={{
                  padding: '0.6rem 1.2rem',
                  fontSize: '0.85rem',
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
                  width: '100%'
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#fce96b';
                  e.target.style.color = '#fce96b';
                  e.target.style.backgroundColor = 'rgba(252, 233, 107, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  e.target.style.color = '#fafafa';
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                Use Cases Agent
              </button>

              <button
                style={{
                  padding: '0.6rem 1.2rem',
                  fontSize: '0.85rem',
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
                  width: '100%'
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#fce96b';
                  e.target.style.color = '#fce96b';
                  e.target.style.backgroundColor = 'rgba(252, 233, 107, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  e.target.style.color = '#fafafa';
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
            gap: 'clamp(0.3rem, 1vw, 0.5rem)',
            marginTop: 'clamp(1.5rem, 3vw, 2rem)'
          }}
        >
          {lines.map((_, index) => (
            <div
              key={index}
              style={{
                width: index === currentLineIndex ? 'clamp(1.5rem, 3vw, 2rem)' : 'clamp(0.4rem, 1vw, 0.5rem)',
                height: 'clamp(0.3rem, 1vw, 0.5rem)',
                backgroundColor: index === currentLineIndex ? '#fce96b' : 'rgba(255, 255, 255, 0.3)',
                borderRadius: '1rem',
                transition: 'all 0.5s ease'
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-layout {
            display: none !important;
          }
          
          .mobile-layout {
            display: flex !important;
          }
        }
        
        @media (max-width: 480px) {
          section {
            padding: clamp(1.5rem, 4vh, 2.5rem) 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default NOGProjectSection;
