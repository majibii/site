import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const NOGProjectSection = () => {
  const { t } = useTranslation();
  const [currentLineIndex, setCurrentLineIndex] = React.useState(0);
  
  // Récupération des données de traduction avec vérification
  const actions = React.useMemo(() => {
    const translatedActions = t('nog.actions', { returnObjects: true });
    return Array.isArray(translatedActions) ? translatedActions : [];
  }, [t]);

  // Rotation automatique des lignes
  React.useEffect(() => {
    if (actions.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentLineIndex((prevIndex) => (prevIndex + 1) % actions.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [actions.length]);

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

  const handleCasUsageClick = () => {
    const collectionSection = document.getElementById('collection');
    if (collectionSection) {
      collectionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAcademyClick = () => {
    window.location.href = '/learn';
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

  const currentAction = actions[currentLineIndex] || '';

  return (
    <>
      <style>
        {`
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

          .dynamic-text {
            color: #fce96b;
            font-weight: 600;
            transition: opacity 0.3s ease;
            position: relative;
            display: inline-block;
            white-space: nowrap;
            padding-bottom: 4px;
          }

          .dynamic-text::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            height: 2px;
            background: linear-gradient(90deg, #fce96b, #f5d917);
            animation: underlineProgress 2.5s ease-in-out infinite;
            border-radius: 1px;
            box-shadow: 0 0 4px rgba(252, 233, 107, 0.4);
          }

          @keyframes underlineProgress {
            0% { 
              width: 0%; 
              opacity: 0.8;
            }
            20% {
              opacity: 1;
            }
            50% { 
              width: 100%; 
              opacity: 1;
            }
            70% {
              width: 100%;
              opacity: 0.8;
            }
            100% { 
              width: 100%; 
              opacity: 0.6;
            }
          }

          .premium-card {
            background: rgba(255, 255, 255, 0.02) !important;
            backdrop-filter: blur(20px) !important;
            border: 1px solid rgba(252, 233, 107, 0.1) !important;
            transition: all 0.3s ease !important;
          }

          .premium-card:hover {
            border-color: rgba(252, 233, 107, 0.2) !important;
          }

          .button-container-desktop {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: clamp(2rem, 4vw, 3.5rem);
            width: 100%;
            flex-wrap: wrap;
            margin-top: clamp(0.5rem, 2vw, 1rem);
          }

          .button-container-mobile {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            width: 100%;
            max-width: 300px;
            margin-top: 1rem;
          }

          .action-button {
            padding: clamp(0.6rem, 1.2vw, 0.8rem) clamp(1.5rem, 3vw, 2.2rem);
            fontSize: clamp(0.85rem, 1.6vw, 1.1rem);
            fontWeight: 600;
            color: #fafafa;
            backgroundColor: transparent;
            border: 2px solid rgba(255, 255, 255, 0.3);
            borderRadius: 50px;
            cursor: pointer;
            transition: all 0.3s ease;
            fontFamily: "Inter", sans-serif;
            textTransform: uppercase;
            letterSpacing: 0.05em;
            minWidth: max-content;
            whiteSpace: nowrap;
          }

          .action-button-mobile {
            padding: 0.7rem 1.4rem;
            fontSize: 0.9rem;
            fontWeight: 600;
            color: #fafafa;
            backgroundColor: transparent;
            border: 2px solid rgba(255, 255, 255, 0.3);
            borderRadius: 50px;
            cursor: pointer;
            transition: all 0.3s ease;
            fontFamily: "Inter", sans-serif;
            textTransform: uppercase;
            letterSpacing: 0.05em;
            width: 100%;
            whiteSpace: nowrap;
          }

          @media (max-width: 768px) {
            .desktop-layout { 
              display: none !important; 
            }
            .mobile-layout { 
              display: flex !important;
              flex-direction: column;
              align-items: center;
              width: 100%;
            }
          }
          
          @media (min-width: 769px) {
            .mobile-layout { 
              display: none !important; 
            }
            .desktop-layout { 
              display: flex !important;
              flex-direction: column;
              align-items: center;
              width: 100%;
            }
          }

          /* Animation d'apparition pour les boutons */
          .action-button, .action-button-mobile {
            animation: buttonFadeIn 0.6s ease-out forwards;
            opacity: 0;
            transform: translateY(10px);
          }

          .action-button:nth-child(1) {
            animation-delay: 0.1s;
          }

          .action-button:nth-child(2) {
            animation-delay: 0.2s;
          }

          @keyframes buttonFadeIn {
            to {
              opacity: 1;
              transform: translateY(0);
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
              padding: 'clamp(1.5rem, 4vw, 2.5rem)',
              borderRadius: '16px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'clamp(1.2rem, 3vw, 2rem)',
              maxWidth: '95%',
              minHeight: 'auto',
              overflow: 'hidden'
            }}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Phrase principale avec texte dynamique animé */}
            <div style={{
              fontSize: 'clamp(0.9rem, 2.2vw, 1.6rem)',
              fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
              fontWeight: '400',
              textAlign: 'center',
              lineHeight: '1.7',
              maxWidth: '100%',
              wordWrap: 'break-word',
              hyphens: 'auto'
            }}>
              {t('nog.intro')}{' '}
              <span className="dynamic-text" key={currentLineIndex}>
                {currentAction}
              </span>
            </div>

            {/* Version Desktop - Boutons côte à côte */}
            <div className="desktop-layout">
              <div className="button-container-desktop">
                <button
                  className="action-button"
                  onClick={handleCasUsageClick}
                  onMouseEnter={handleButtonMouseEnter}
                  onMouseLeave={handleButtonMouseLeave}
                  style={{
                    padding: 'clamp(0.6rem, 1.2vw, 0.8rem) clamp(1.5rem, 3vw, 2.2rem)',
                    fontSize: 'clamp(0.85rem, 1.6vw, 1.1rem)',
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
                    minWidth: 'max-content',
                    whiteSpace: 'nowrap'
                  }}
                >
                  Cas d'usage
                </button>

                <button
                  className="action-button"
                  onClick={handleAcademyClick}
                  onMouseEnter={handleButtonMouseEnter}
                  onMouseLeave={handleButtonMouseLeave}
                  style={{
                    padding: 'clamp(0.6rem, 1.2vw, 0.8rem) clamp(1.5rem, 3vw, 2.2rem)',
                    fontSize: 'clamp(0.85rem, 1.6vw, 1.1rem)',
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
                    minWidth: 'max-content',
                    whiteSpace: 'nowrap'
                  }}
                >
                  IA Académie
                </button>
              </div>
            </div>

            {/* Version Mobile - Boutons empilés */}
            <div className="mobile-layout">
              <div className="button-container-mobile">
                <button
                  className="action-button-mobile"
                  onClick={handleCasUsageClick}
                  onMouseEnter={handleButtonMouseEnter}
                  onMouseLeave={handleButtonMouseLeave}
                  style={{
                    padding: '0.7rem 1.4rem',
                    fontSize: '0.9rem',
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
                    width: '100%',
                    whiteSpace: 'nowrap'
                  }}
                >
                  Cas d'usage
                </button>

                <button
                  className="action-button-mobile"
                  onClick={handleAcademyClick}
                  onMouseEnter={handleButtonMouseEnter}
                  onMouseLeave={handleButtonMouseLeave}
                  style={{
                    padding: '0.7rem 1.4rem',
                    fontSize: '0.9rem',
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
                    width: '100%',
                    whiteSpace: 'nowrap'
                  }}
                >
                  IA Académie
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default NOGProjectSection;
