import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const NOGProjectSection = () => {
  const { t } = useTranslation();
  const [currentLineIndex, setCurrentLineIndex] = React.useState(0);
  const [displayedText, setDisplayedText] = React.useState('');
  const [isTyping, setIsTyping] = React.useState(false);
  const lines = t('nog.actions', { returnObjects: true });

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLineIndex((prevIndex) => (prevIndex + 1) % lines.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [lines.length]);

  // Effet pour l'animation machine à écrire
  React.useEffect(() => {
    const currentText = lines[currentLineIndex] || '';
    setIsTyping(true);
    setDisplayedText('');
    
    let charIndex = 0;
    const typeInterval = setInterval(() => {
      if (charIndex <= currentText.length) {
        setDisplayedText(currentText.slice(0, charIndex));
        charIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);
      }
    }, 80);

    return () => clearInterval(typeInterval);
  }, [currentLineIndex, lines]);

  // Fonctions de hover pour les boutons
  const handleButtonMouseEnter = (e) => {
    const button = e.currentTarget;
    button.style.setProperty('transform', 'translateY(-2px)', 'important');
    button.style.setProperty('border-color', '#fce96b', 'important');
    button.style.setProperty('color', '#fce96b', 'important');
    button.style.setProperty('background', 'rgba(252, 233, 107, 0.1)', 'important');
  };

  const handleButtonMouseLeave = (e) => {
    const button = e.currentTarget;
    button.style.setProperty('transform', 'translateY(0)', 'important');
    button.style.setProperty('border-color', 'rgba(255, 255, 255, 0.3)', 'important');
    button.style.setProperty('color', '#fafafa', 'important');
    button.style.setProperty('background', 'transparent', 'important');
  };

  const sectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    background: 'transparent',
    backgroundImage: 'none',
    padding: 'clamp(2rem, 5vh, 4rem) clamp(1rem, 3vw, 2rem)',
    position: 'relative',
    boxSizing: 'border-box',
    overflow: 'hidden',
    minHeight: '50vh',
    margin: '0',
    border: 'none',
    outline: 'none'
  };

  const containerStyle = {
    textAlign: 'center',
    width: '100%',
    maxWidth: '1200px',
    position: 'relative',
    zIndex: 1,
    background: 'transparent',
    backgroundColor: 'transparent',
    backgroundImage: 'none',
    margin: '0',
    padding: '0'
  };

  const cardStyle = {
    fontSize: 'clamp(0.9rem, 2.2vw, 1.6rem)',
    color: '#fafafa',
    lineHeight: '1.6',
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    fontWeight: '400',
    margin: '0 auto',
    textAlign: 'center',
    padding: 'clamp(1.5rem, 4vw, 2rem)',
    background: 'transparent',
    backgroundColor: 'transparent',
    backgroundImage: 'none',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    borderRadius: '16px',
    boxShadow: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'clamp(0.5rem, 1.5vw, 0.8rem)',
    width: 'auto',
    minWidth: 'fit-content',
    maxWidth: '95%'
  };

  const textLineStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    gap: 'clamp(0.1rem, 0.5vw, 0.3rem)',
    textAlign: 'center',
    width: '100%',
    background: 'transparent',
    backgroundColor: 'transparent',
    backgroundImage: 'none',
    margin: '0',
    padding: '0'
  };

  const staticTextStyle = {
    display: 'inline-block',
    marginRight: 'clamp(0.2rem, 0.5vw, 0.3rem)',
    background: 'transparent',
    backgroundColor: 'transparent',
    backgroundImage: 'none',
    whiteSpace: 'nowrap',
    color: '#fafafa',
    fontSize: 'clamp(0.9rem, 2.2vw, 1.6rem)',
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    fontWeight: '400'
  };

  const dynamicTextContainerStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    minWidth: '200px',
    width: 'auto',
    height: 'clamp(1.8rem, 4vw, 2.2rem)',
    position: 'relative',
    background: 'transparent',
    backgroundColor: 'transparent',
    backgroundImage: 'none',
    border: 'none',
    outline: 'none',
    overflow: 'visible'
  };

  const dynamicTextStyle = {
    color: '#fce96b',
    fontWeight: '600',
    fontSize: 'clamp(0.9rem, 2.2vw, 1.6rem)',
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    lineHeight: 'clamp(1.8rem, 4vw, 2.2rem)',
    backgroundColor: 'transparent',
    background: 'transparent',
    backgroundImage: 'none',
    whiteSpace: 'nowrap',
    display: 'inline-block',
    margin: '0',
    padding: '0'
  };

  const cursorStyle = {
    color: '#fce96b',
    fontSize: 'clamp(0.9rem, 2.2vw, 1.6rem)',
    marginLeft: '2px',
    animation: 'blink 1s infinite',
    display: 'inline-block'
  };

  const buttonContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 'clamp(0.8rem, 2vw, 1.2rem)',
    width: '100%',
    background: 'transparent',
    backgroundColor: 'transparent',
    backgroundImage: 'none'
  };

  const labelStyle = {
    fontSize: 'clamp(0.8rem, 1.8vw, 1.1rem)',
    color: '#fce96b',
    fontWeight: '600',
    fontFamily: '"Inter", sans-serif',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    background: 'transparent',
    backgroundColor: 'transparent',
    backgroundImage: 'none',
    whiteSpace: 'nowrap'
  };

  const buttonStyle = {
    padding: 'clamp(0.4rem, 1vw, 0.6rem) clamp(1rem, 2.5vw, 1.5rem)',
    fontSize: 'clamp(0.75rem, 1.5vw, 0.95rem)',
    fontWeight: '600',
    color: '#fafafa',
    backgroundColor: 'transparent',
    background: 'transparent',
    backgroundImage: 'none',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontFamily: '"Inter", sans-serif',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    position: 'relative',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    boxShadow: 'none',
    outline: 'none'
  };

  return (
    <>
      {/* Styles CSS pour l'animation du curseur */}
      <style>
        {`
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
          
          /* Force la suppression de tous les backgrounds indésirables */
          .nog-project-section * {
            background: transparent !important;
            background-color: transparent !important;
            background-image: none !important;
          }
          
          @media (max-width: 768px) {
            .desktop-layout {
              display: none !important;
            }
            
            .mobile-layout {
              display: flex !important;
              flex-direction: column;
              align-items: center;
              gap: 1rem;
              width: 100%;
              background: transparent !important;
            }
          }
        `}
      </style>
      
      <section className="nog-project-section" style={sectionStyle}>
        <div style={containerStyle}>
          <motion.div 
            style={cardStyle}
            animate={{ width: 'auto' }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Première ligne avec le texte animé */}
            <div style={textLineStyle}>
              <span style={staticTextStyle}>
                {t('nog.intro')}
              </span>
              <div style={dynamicTextContainerStyle}>
                <span style={dynamicTextStyle}>
                  {displayedText}
                  {isTyping && <span style={cursorStyle}>|</span>}
                </span>
              </div>
            </div>

            {/* Deuxième ligne - version desktop/tablet */}
            <div className="desktop-layout" style={buttonContainerStyle}>
              <div style={labelStyle}>
                {t('nog.getExamples')}
              </div>
              
              <button
                style={buttonStyle}
                onMouseEnter={handleButtonMouseEnter}
                onMouseLeave={handleButtonMouseLeave}
              >
                {t('nog.useCasesAgent')}
              </button>

              <button
                style={buttonStyle}
                onMouseEnter={handleButtonMouseEnter}
                onMouseLeave={handleButtonMouseLeave}
              >
                {t('nog.academyProgram')}
              </button>
            </div>

            {/* Version mobile - affichage vertical */}
            <div className="mobile-layout" style={{ display: 'none' }}>
              <div style={labelStyle}>
                {t('nog.getExamples')}
              </div>
              
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column',
                gap: '0.8rem',
                width: '100%',
                maxWidth: '280px',
                background: 'transparent'
              }}>
                <button
                  style={{
                    ...buttonStyle,
                    padding: '0.6rem 1.2rem',
                    fontSize: '0.85rem',
                    width: '100%'
                  }}
                  onMouseEnter={handleButtonMouseEnter}
                  onMouseLeave={handleButtonMouseLeave}
                >
                  {t('nog.useCasesAgent')}
                </button>

                <button
                  style={{
                    ...buttonStyle,
                    padding: '0.6rem 1.2rem',
                    fontSize: '0.85rem',
                    width: '100%'
                  }}
                  onMouseEnter={handleButtonMouseEnter}
                  onMouseLeave={handleButtonMouseLeave}
                >
                  {t('nog.academyProgram')}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Indicateurs de progression */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'clamp(0.3rem, 1vw, 0.5rem)',
            marginTop: 'clamp(1.5rem, 3vw, 2rem)',
            background: 'transparent',
            backgroundColor: 'transparent',
            backgroundImage: 'none'
          }}>
            {lines.map((_, index) => (
              <div
                key={index}
                style={{
                  width: index === currentLineIndex ? 'clamp(1.5rem, 3vw, 2rem)' : 'clamp(0.4rem, 1vw, 0.5rem)',
                  height: 'clamp(0.3rem, 1vw, 0.5rem)',
                  backgroundColor: index === currentLineIndex ? '#fce96b' : 'rgba(255, 255, 255, 0.3)',
                  background: index === currentLineIndex ? '#fce96b' : 'rgba(255, 255, 255, 0.3)',
                  backgroundImage: 'none',
                  borderRadius: '1rem',
                  transition: 'all 0.5s ease'
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NOGProjectSection;
