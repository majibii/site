import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const NOGProjectSection = () => {
  const { t } = useTranslation();
  const [currentLineIndex, setCurrentLineIndex] = React.useState(0);
  const [displayedText, setDisplayedText] = React.useState('');
  const [isTyping, setIsTyping] = React.useState(true);
  const lines = t('nog.actions', { returnObjects: true });

  // Rotation automatique des lignes
  React.useEffect(() => {
    if (!Array.isArray(lines) || lines.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentLineIndex((prevIndex) => (prevIndex + 1) % lines.length);
    }, 4000); // Changé à 4 secondes pour laisser plus de temps à la lecture

    return () => clearInterval(interval);
  }, [lines]);

  // Animation machine à écrire
  React.useEffect(() => {
    if (!Array.isArray(lines) || lines.length === 0) return;
    
    const currentText = lines[currentLineIndex] || '';
    setIsTyping(true);
    setDisplayedText('');
    
    // Délai avant de commencer à taper
    setTimeout(() => {
      let charIndex = 0;
      const typeInterval = setInterval(() => {
        if (charIndex < currentText.length) {
          setDisplayedText(currentText.slice(0, charIndex + 1));
          charIndex++;
        } else {
          setIsTyping(false);
          clearInterval(typeInterval);
        }
      }, 60); // Vitesse de frappe plus rapide

      return () => clearInterval(typeInterval);
    }, 300); // Petite pause avant de commencer
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
    flexWrap: 'wrap', // Changé pour permettre le retour à la ligne
    gap: 'clamp(0.3rem, 0.8vw, 0.5rem)', // Augmenté l'espacement
    textAlign: 'center',
    width: '100%',
    background: 'transparent',
    backgroundColor: 'transparent',
    backgroundImage: 'none',
    margin: '0',
    padding: '0',
    minHeight: 'clamp(2rem, 4vw, 2.5rem)' // Hauteur minimale pour éviter les sauts
  };

  const staticTextStyle = {
    display: 'inline-block',
    background: 'transparent',
    backgroundColor: 'transparent',
    backgroundImage: 'none',
    color: '#fafafa',
    fontSize: 'clamp(0.9rem, 2.2vw, 1.6rem)',
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    fontWeight: '400',
    whiteSpace: 'nowrap'
  };

  const dynamicTextContainerStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    minWidth: '250px', // Augmenté pour plus d'espace
    width: 'auto',
    height: 'clamp(2rem, 4vw, 2.5rem)',
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
    lineHeight: '1.2',
    backgroundColor: 'transparent',
    background: 'transparent',
    backgroundImage: 'none',
    display: 'inline-block',
    margin: '0',
    padding: '0',
    minHeight: '1.2em' // Assure une hauteur constante
  };

  const cursorStyle = {
    color: '#fce96b',
    fontSize: 'clamp(0.9rem, 2.2vw, 1.6rem)',
    fontWeight: '400',
    marginLeft: '2px',
    display: 'inline-block',
    animation: 'blink 1s infinite',
    lineHeight: '1.2'
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

  // Debug : vérifier si les données sont correctes
  console.log('Lines:', lines);
  console.log('Current index:', currentLineIndex);
  console.log('Displayed text:', displayedText);
  console.log('Is typing:', isTyping);

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
          
          @media (min-width: 769px) {
            .mobile-layout {
              display: none !important;
            }
            
            .desktop-layout {
              display: flex !important;
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
                </span>
                <span style={cursorStyle}>|</span>
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
            <div className="mobile-layout">
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
            {Array.isArray(lines) && lines.map((_, index) => (
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
