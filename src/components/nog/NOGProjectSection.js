import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const NOGProjectSection = () => {
  const { t } = useTranslation();
  const [currentLineIndex, setCurrentLineIndex] = React.useState(0);
  const [displayedText, setDisplayedText] = React.useState('');
  const [isVisible, setIsVisible] = React.useState(false);
  
  // Récupération des données de traduction avec vérification
  const actions = React.useMemo(() => {
    const translatedActions = t('nog.actions', { returnObjects: true });
    return Array.isArray(translatedActions) ? translatedActions : [];
  }, [t]);

  console.log('Actions from translation:', actions);

  // Rotation automatique des lignes
  React.useEffect(() => {
    if (actions.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentLineIndex((prevIndex) => (prevIndex + 1) % actions.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [actions.length]);

  // Effet moderne de révélation
  React.useEffect(() => {
    if (actions.length === 0) return;
    
    const currentText = actions[currentLineIndex] || '';
    setIsVisible(false);
    setDisplayedText('');
    
    // Animation fluide
    setTimeout(() => {
      setDisplayedText(currentText);
      setIsVisible(true);
    }, 150);
  }, [currentLineIndex, actions]);

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

  if (actions.length === 0) {
    return (
      <section style={{
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fafafa'
      }}>
        <div>Chargement...</div>
      </section>
    );
  }

  return (
    <>
      <style>
        {`
          /* Styles haute spécificité pour éviter les interférences Material-UI */
          .nog-main-section {
            background: transparent !important;
            background-color: transparent !important;
            background-image: none !important;
          }

          .nog-main-section *,
          .nog-main-section *::before,
          .nog-main-section *::after {
            background: transparent !important;
            background-color: transparent !important;
            background-image: none !important;
            box-shadow: none !important;
          }

          /* Animation premium pour le texte dynamique */
          .premium-text-reveal {
            opacity: 0;
            transform: translateY(10px) scale(0.98);
            transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
            background: linear-gradient(135deg, #fce96b 0%, #f59e0b 50%, #fce96b 100%);
            background-size: 200% 200%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: premium-shimmer 2s ease-in-out;
            display: inline;
            white-space: nowrap;
          }

          .premium-text-reveal.visible {
            opacity: 1;
            transform: translateY(0) scale(1);
          }

          /* Animation shimmer premium */
          @keyframes premium-shimmer {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }

          /* Animation pour la ligne de soulignement */
          .premium-underline {
            position: absolute;
            bottom: -2px;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, #fce96b, #f59e0b, #fce96b);
            border-radius: 1px;
            transform-origin: left;
            transform: scaleX(0);
            transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
          }

          .premium-underline.visible {
            transform: scaleX(1);
          }

          /* Animation pour les indicateurs */
          .premium-indicator {
            transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
            box-shadow: 0 0 20px rgba(252, 233, 107, 0.3);
          }

          .premium-indicator.active {
            background: linear-gradient(45deg, #fce96b, #f59e0b) !important;
            box-shadow: 0 0 30px rgba(252, 233, 107, 0.6) !important;
          }

          /* Animation pour la carte */
          .premium-card {
            background: rgba(255, 255, 255, 0.02) !important;
            backdrop-filter: blur(20px) !important;
            border: 1px solid rgba(252, 233, 107, 0.1) !important;
            box-shadow: 
              0 8px 32px rgba(0, 0, 0, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;
            transition: all 0.3s ease !important;
          }

          .premium-card:hover {
            border-color: rgba(252, 233, 107, 0.3) !important;
            box-shadow: 
              0 12px 48px rgba(0, 0, 0, 0.15),
              0 0 0 1px rgba(252, 233, 107, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.2) !important;
          }

          /* Style pour le conteneur de texte flexible */
          .dynamic-text-container {
            display: flex;
            align-items: baseline;
            justify-content: center;
            flex-wrap: wrap;
            gap: 0.3em;
            line-height: 1.4;
            width: 100%;
            min-height: 1.5em;
          }

          .fixed-text {
            color: #fafafa;
            font-weight: 400;
          }

          .dynamic-text-wrapper {
            position: relative;
            display: inline-block;
            min-width: 8ch;
            text-align: left;
          }

          /* Responsive */
          @media (max-width: 768px) {
            .desktop-layout { display: none !important; }
            .mobile-layout { 
              display: flex !important;
              flex-direction: column;
              align-items: center;
              gap: 1rem;
              width: 100%;
            }
            
            .dynamic-text-container {
              flex-direction: column;
              text-align: center;
              gap: 0.5em;
            }
            
            .dynamic-text-wrapper {
              text-align: center;
              min-width: auto;
            }
          }
          
          @media (min-width: 769px) {
            .mobile-layout { display: none !important; }
            .desktop-layout { display: flex !important; }
          }

          /* Amélioration responsive pour très petits écrans */
          @media (max-width: 480px) {
            .dynamic-text-container {
              gap: 0.3em;
            }
          }
        `}
      </style>
      
      <section 
        className="nog-main-section"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '50vh',
          padding: 'clamp(2rem, 5vh, 4rem) clamp(1rem, 3vw, 2rem)',
          position: 'relative',
          zIndex: 10
        }}
      >
        <div style={{
          textAlign: 'center',
          width: '100%',
          maxWidth: '1200px',
          position: 'relative'
        }}>
          <motion.div 
            className="premium-card"
            style={{
              fontSize: 'clamp(0.9rem, 2.2vw, 1.6rem)',
              color: '#fafafa',
              lineHeight: '1.6',
              fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
              fontWeight: '400',
              margin: '0 auto',
              textAlign: 'center',
              padding: 'clamp(1.5rem, 4vw, 2rem)',
              borderRadius: '16px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'clamp(1rem, 2.5vw, 1.5rem)',
              maxWidth: '95%',
              minWidth: 'fit-content'
            }}
            animate={{ scale: [0.95, 1] }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Phrase complète avec texte fixe + dynamique */}
            <div className="dynamic-text-container" style={{
              fontSize: 'clamp(0.9rem, 2.2vw, 1.6rem)',
              fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
              fontWeight: '400'
            }}>
              <span className="fixed-text">
                {t('nog.intro')}
              </span>
              
              <div className="dynamic-text-wrapper">
                <span 
                  className={`premium-text-reveal ${isVisible ? 'visible' : ''}`}
                  style={{
                    fontWeight: '600',
                    fontSize: 'inherit',
                    fontFamily: 'inherit',
                    display: 'inline-block',
                    position: 'relative',
                    minHeight: '1em'
                  }}
                >
                  {displayedText}
                  <div className={`premium-underline ${isVisible ? 'visible' : ''}`} />
                </span>
              </div>
            </div>

            {/* Version desktop */}
            <div className="desktop-layout" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: 'clamp(0.8rem, 2vw, 1.2rem)',
              width: '100%'
            }}>
              <div style={{
                fontSize: 'clamp(0.8rem, 1.8vw, 1.1rem)',
                color: '#fce96b',
                fontWeight: '600',
                fontFamily: '"Inter", sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {t('nog.getExamples')}
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
                  letterSpacing: '0.05em'
                }}
                onMouseEnter={handleButtonMouseEnter}
                onMouseLeave={handleButtonMouseLeave}
              >
                {t('nog.useCasesAgent')}
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
                  letterSpacing: '0.05em'
                }}
                onMouseEnter={handleButtonMouseEnter}
                onMouseLeave={handleButtonMouseLeave}
              >
                {t('nog.academyProgram')}
              </button>
            </div>

            {/* Version mobile */}
            <div className="mobile-layout">
              <div style={{
                fontSize: 'clamp(0.8rem, 1.8vw, 1.1rem)',
                color: '#fce96b',
                fontWeight: '600',
                fontFamily: '"Inter", sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {t('nog.getExamples')}
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
                    width: '100%'
                  }}
                  onMouseEnter={handleButtonMouseEnter}
                  onMouseLeave={handleButtonMouseLeave}
                >
                  {t('nog.useCasesAgent')}
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

          {/* Indicateurs de progression premium */}
          <motion.div 
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 'clamp(0.4rem, 1.2vw, 0.6rem)',
              marginTop: 'clamp(1.5rem, 3vw, 2rem)'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {actions.map((_, index) => (
              <div
                key={index}
                className={`premium-indicator ${index === currentLineIndex ? 'active' : ''}`}
                style={{
                  width: index === currentLineIndex ? 'clamp(2rem, 4vw, 2.5rem)' : 'clamp(0.5rem, 1.2vw, 0.6rem)',
                  height: 'clamp(0.4rem, 1vw, 0.6rem)',
                  backgroundColor: index === currentLineIndex ? '#fce96b' : 'rgba(255, 255, 255, 0.25)',
                  borderRadius: '2rem',
                  cursor: 'pointer'
                }}
                onClick={() => setCurrentLineIndex(index)}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default NOGProjectSection;
