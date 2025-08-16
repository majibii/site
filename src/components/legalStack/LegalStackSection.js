import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const RAGArchitectureDiagram = () => {
  const { t } = useTranslation();

  // Animation variants pour les cartes
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  // Animation pour les flèches
  const arrowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  const ArrowIcon = ({ color = "#2c3e50" }) => (
    <svg 
      width="32" 
      height="20" 
      viewBox="0 0 32 20" 
      fill="none"
      style={{ color: color }}
    >
      <path 
        d="M2 10H30M30 10L24 4M30 10L24 16" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <section 
      style={{
        minHeight: '100vh',
        width: '100%',
        padding: 'clamp(4rem, 8vh, 6rem) clamp(1rem, 3vw, 2rem)',
        backgroundColor: '#000000', // Fond noir principal
        color: '#fafafa',
        position: 'relative'
      }}
    >
      <div 
        style={{
          width: '100%',
          maxWidth: '1600px',
          margin: '0 auto'
        }}
      >
        {/* Header Section - Encadré Bento principal */}
        <motion.div 
          style={{ 
            backgroundColor: '#faf2d7', // Blanc cassé
            borderRadius: '24px',
            padding: 'clamp(3rem, 6vw, 4rem)',
            marginBottom: 'clamp(3rem, 6vh, 4rem)',
            border: '1px solid rgba(44, 62, 80, 0.1)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
            textAlign: 'center'
          }}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          transition={{ duration: 0.8 }}
        >
          <h3 
            style={{
              fontSize: 'clamp(0.9rem, 1.5vw, 1.2rem)',
              fontWeight: '600',
              color: '#8B7355', // Brun doux pour le contraste
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
              textDecoration: 'underline',
              textDecorationColor: '#D4AF37',
              textUnderlineOffset: '8px',
              textDecorationThickness: '2px'
            }}
          >
            {t('ragArchitecture.subtitle', 'THE CONTEXTUAL RAG PLATFORM')}
          </h3>
          
          <h2 
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: '900',
              color: '#2c3e50', // Bleu-gris foncé
              lineHeight: '1.1',
              marginBottom: '1.5rem',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)'
            }}
          >
            {t('ragArchitecture.title', 'NEXT-GEN ARCHITECTURE FOR AGENTS')}
          </h2>
          
          <p 
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.3rem)',
              fontWeight: '400',
              color: '#5d6d7e', // Gris-bleu pour le texte
              lineHeight: '1.6',
              maxWidth: '900px',
              margin: '0 auto'
            }}
          >
            {t('ragArchitecture.introduction', 'Built by pioneers in RAG, our platform empowers you to seamlessly integrate AI agents with your enterprise knowledge, providing a complete solution for designing cutting-edge RAG systems.')}
          </p>
        </motion.div>

        {/* Grille Bento pour les composants */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(1.5rem, 3vw, 2rem)',
          marginBottom: 'clamp(2rem, 4vh, 3rem)'
        }}>
          
          {/* Data Sources - Encadré Bento */}
          <motion.div 
            style={{
              backgroundColor: '#faf2d7',
              borderRadius: '20px',
              padding: 'clamp(1.5rem, 3vw, 2rem)',
              border: '1px solid rgba(44, 62, 80, 0.1)',
              boxShadow: '0 6px 24px rgba(0, 0, 0, 0.15)',
              gridColumn: 'span 1'
            }}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
              fontWeight: '700',
              color: '#2c3e50',
              marginBottom: '1.5rem',
              textAlign: 'center',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              DATA SOURCES
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { icon: 'file-text', text: 'Unstructured Data', color: '#e74c3c' },
                { icon: 'database', text: 'Structured Data', color: '#3498db' },
                { icon: 'zap', text: 'Application APIs', color: '#f39c12' }
              ].map((item, index) => (
                <div 
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    border: '1px solid rgba(44, 62, 80, 0.1)',
                    borderRadius: '12px',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: item.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="white" 
                      strokeWidth="2"
                    >
                      {item.icon === 'file-text' && (
                        <>
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                          <polyline points="14,2 14,8 20,8"/>
                          <line x1="16" y1="13" x2="8" y2="13"/>
                          <line x1="16" y1="17" x2="8" y2="17"/>
                        </>
                      )}
                      {item.icon === 'database' && (
                        <>
                          <ellipse cx="12" cy="5" rx="9" ry="3"/>
                          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
                          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
                        </>
                      )}
                      {item.icon === 'zap' && (
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                      )}
                    </svg>
                  </div>
                  
                  <span style={{
                    fontSize: 'clamp(0.9rem, 1.3vw, 1rem)',
                    fontWeight: '600',
                    color: '#2c3e50'
                  }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pipeline - Encadré Bento large */}
          <motion.div 
            style={{
              backgroundColor: '#faf2d7',
              borderRadius: '20px',
              padding: 'clamp(1.5rem, 3vw, 2rem)',
              border: '1px solid rgba(44, 62, 80, 0.1)',
              boxShadow: '0 6px 24px rgba(0, 0, 0, 0.15)',
              gridColumn: 'span 2',
              '@media (max-width: 768px)': {
                gridColumn: 'span 1'
              }
            }}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
              fontWeight: '700',
              color: '#2c3e50',
              marginBottom: '2rem',
              textAlign: 'center',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              CONTEXTUAL DOCUMENT UNDERSTANDING PIPELINE
            </h3>
            
            <div style={{ 
              display: 'flex', 
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              flexWrap: 'wrap'
            }}>
              {/* Extraction & Ingestion */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.8rem',
                flex: '1',
                minWidth: '160px'
              }}>
                <div style={{
                  padding: '1rem',
                  backgroundColor: 'rgba(52, 152, 219, 0.1)',
                  border: '2px solid #3498db',
                  borderRadius: '12px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#2c3e50', marginBottom: '0.5rem' }}>
                    MULTIMODAL
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#3498db' }}>
                    Extraction
                  </div>
                </div>
                
                <div style={{
                  padding: '1rem',
                  backgroundColor: 'rgba(155, 89, 182, 0.1)',
                  border: '2px solid #9b59b6',
                  borderRadius: '12px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#2c3e50', marginBottom: '0.5rem' }}>
                    CONTINUOUS
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#9b59b6' }}>
                    Ingestion
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <motion.div 
                variants={arrowVariants}
                transition={{ duration: 0.4, delay: 0.6 }}
                style={{ flexShrink: 0 }}
              >
                <ArrowIcon color="#2c3e50" />
              </motion.div>

              {/* Datastore */}
              <div style={{
                padding: '1.5rem',
                backgroundColor: 'rgba(46, 204, 113, 0.1)',
                border: '2px solid #2ecc71',
                borderRadius: '12px',
                textAlign: 'center',
                flex: '1',
                minWidth: '120px'
              }}>
                <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#2c3e50', marginBottom: '0.5rem' }}>
                  VECTOR
                </div>
                <div style={{ fontSize: '1rem', fontWeight: '600', color: '#2ecc71' }}>
                  Datastore
                </div>
              </div>
            </div>
          </motion.div>

          {/* RAG Agent - Encadré Bento */}
          <motion.div 
            style={{
              backgroundColor: '#faf2d7',
              borderRadius: '20px',
              padding: 'clamp(1.5rem, 3vw, 2rem)',
              border: '1px solid rgba(44, 62, 80, 0.1)',
              boxShadow: '0 6px 24px rgba(0, 0, 0, 0.15)',
              gridColumn: 'span 1'
            }}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
              fontWeight: '700',
              color: '#2c3e50',
              marginBottom: '1.5rem',
              textAlign: 'center',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              CONTEXTUAL RAG AGENT
            </h3>
            
            <div style={{ 
              display: 'flex', 
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.8rem',
              marginBottom: '1.5rem'
            }}>
              {[
                { name: 'Mixture of\nretrievers', color: '#e67e22' },
                { name: 'Reranker', color: '#8e44ad' },
                { name: 'Grounded\nLanguage\nModel', color: '#27ae60' }
              ].map((item, index) => (
                <React.Fragment key={index}>
                  <div style={{
                    padding: '0.8rem',
                    backgroundColor: `rgba(${item.color === '#e67e22' ? '230, 126, 34' : item.color === '#8e44ad' ? '142, 68, 173' : '39, 174, 96'}, 0.1)`,
                    border: `2px solid ${item.color}`,
                    borderRadius: '8px',
                    textAlign: 'center',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    color: '#2c3e50',
                    flex: '1',
                    minWidth: '0',
                    whiteSpace: 'pre-line'
                  }}>
                    {item.name}
                  </div>
                  
                  {index < 2 && (
                    <div style={{ flexShrink: 0 }}>
                      <ArrowIcon color={item.color} />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div style={{
              borderTop: '2px solid rgba(44, 62, 80, 0.1)',
              paddingTop: '1rem',
              fontSize: '0.8rem',
              color: '#5d6d7e'
            }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <span style={{ color: '#27ae60', fontWeight: 'bold' }}>✓</span> Components jointly optimized with RAG 2.0
              </div>
              <div>
                <span style={{ color: '#27ae60', fontWeight: 'bold' }}>✓</span> Tuning and alignment to specialize to use case
              </div>
            </div>
          </motion.div>

          {/* Specialized Agents - Encadré Bento */}
          <motion.div 
            style={{
              backgroundColor: '#faf2d7',
              borderRadius: '20px',
              padding: 'clamp(1.5rem, 3vw, 2rem)',
              border: '1px solid rgba(44, 62, 80, 0.1)',
              boxShadow: '0 6px 24px rgba(0, 0, 0, 0.15)',
              gridColumn: 'span 1'
            }}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
              fontWeight: '700',
              color: '#2c3e50',
              marginBottom: '1.5rem',
              textAlign: 'center',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              SPECIALIZED AGENTS
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {[
                { name: 'Finance', color: '#e74c3c', iconPath: 'M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' },
                { name: 'Law', color: '#f39c12', iconPath: 'M9 12 6.5 9.5a2.5 2.5 0 0 1 0-3.5 2.5 2.5 0 0 1 3.5 0L12 8l2-2a2.5 2.5 0 0 1 3.5 0 2.5 2.5 0 0 1 0 3.5L15 12 M12 12v8 M8 21h8' },
                { name: 'Technology', color: '#9b59b6', iconPath: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z M12 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z' },
                { name: 'Your Enterprise', color: '#2ecc71', iconPath: 'M3 21h18 M5 21V7l8-4v18 M19 21V11l-6-4', highlight: true }
              ].map((item, index) => (
                <div 
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem',
                    backgroundColor: item.highlight ? 'rgba(46, 204, 113, 0.2)' : 'rgba(255, 255, 255, 0.5)',
                    border: item.highlight ? '2px solid #2ecc71' : '1px solid rgba(44, 62, 80, 0.1)',
                    borderRadius: '10px',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    backgroundColor: item.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <svg 
                      width="18" 
                      height="18" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="white" 
                      strokeWidth="2"
                    >
                      <path d={item.iconPath} />
                    </svg>
                  </div>
                  
                  <span style={{
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: item.highlight ? '#2ecc71' : '#2c3e50'
                  }}>
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Styles responsifs intégrés */}
      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="gridColumn: span 2"] {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default RAGArchitectureDiagram;
