import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const RAGArchitectureDiagram = () => {
  const { t } = useTranslation();

  // Animation variants pour les cartes
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Animation pour les flèches
  const arrowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  const ArrowIcon = () => (
    <svg 
      width="40" 
      height="24" 
      viewBox="0 0 40 24" 
      fill="none"
      style={{ color: '#fce96b' }}
    >
      <path 
        d="M2 12H38M38 12L30 4M38 12L30 20" 
        stroke="currentColor" 
        strokeWidth="3" 
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
        backgroundColor: 'transparent',
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
        {/* Header Section */}
        <motion.div 
          style={{ 
            textAlign: 'center', 
            marginBottom: 'clamp(4rem, 8vh, 6rem)'
          }}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          transition={{ duration: 0.6 }}
        >
          <h3 
            style={{
              fontSize: 'clamp(0.9rem, 1.5vw, 1.2rem)',
              fontWeight: '600',
              color: 'rgba(250, 250, 250, 0.8)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
              textDecoration: 'underline',
              background: 'transparent'
            }}
          >
            PLATFORM
          </h3>
          
          <h2 
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: '900',
              color: '#fafafa',
              lineHeight: '1.1',
              marginBottom: '2rem',
              textShadow: '2px 2px 8px rgba(0, 0, 0, 0.6)',
              background: 'transparent'
            }}
          >
            RAG ARCHITECTURE
          </h2>
        </motion.div>

        {/* Main Container Rectangle */}
        <motion.div 
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '3px solid rgba(252, 233, 107, 0.3)',
            borderRadius: '24px',
            padding: 'clamp(2rem, 4vw, 3rem)',
            width: '100%',
            position: 'relative',
            overflow: 'hidden'
          }}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          transition={{ duration: 0.8 }}
        >
          
          {/* Platform Label */}
          <div style={{
            position: 'absolute',
            top: '-12px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(252, 233, 107, 0.2)',
            border: '2px solid rgba(252, 233, 107, 0.5)',
            borderRadius: '12px',
            padding: '0.5rem 1.5rem',
            fontSize: 'clamp(0.8rem, 1.4vw, 1rem)',
            fontWeight: '700',
            color: '#fce96b',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            PLATFORM
          </div>

          {/* Horizontal Flow Container */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'clamp(1rem, 2vw, 2rem)',
            marginTop: '2rem',
            flexWrap: 'wrap'
          }}>
            
            {/* Data Sources */}
            <motion.div 
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '16px',
                padding: 'clamp(1.5rem, 2.5vw, 2rem)',
                flex: '1',
                minWidth: '200px',
                maxWidth: '280px'
              }}
              variants={cardVariants}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 style={{
                fontSize: 'clamp(0.9rem, 1.4vw, 1.1rem)',
                fontWeight: '700',
                color: '#fafafa',
                marginBottom: '1.5rem',
                textAlign: 'center',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                DATA SOURCES
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {[
                  { icon: 'file-text', text: 'Unstructured Data' },
                  { icon: 'database', text: 'Structured Data' },
                  { icon: 'zap', text: 'Application APIs' }
                ].map((item, index) => (
                  <div 
                    key={index}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '0.8rem',
                      padding: '1rem',
                      background: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: '12px',
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                      cursor: 'default'
                    }}
                  >
                    {/* Icon Circle */}
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.15)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 0.3s ease'
                    }}>
                      <svg 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                        style={{ color: '#fafafa' }}
                      >
                        {item.icon === 'file-text' && (
                          <>
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                            <polyline points="14,2 14,8 20,8"/>
                            <line x1="16" y1="13" x2="8" y2="13"/>
                            <line x1="16" y1="17" x2="8" y2="17"/>
                            <polyline points="10,9 9,9 8,9"/>
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
                    
                    {/* Text */}
                    <span style={{
                      fontSize: 'clamp(0.8rem, 1.3vw, 0.9rem)',
                      fontWeight: '600',
                      color: '#fafafa',
                      lineHeight: '1.2'
                    }}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Arrow 1 */}
            <motion.div 
              variants={arrowVariants}
              transition={{ duration: 0.4, delay: 0.4 }}
              style={{ flexShrink: 0 }}
            >
              <ArrowIcon />
            </motion.div>

            {/* Pipeline */}
            <motion.div 
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '2px solid rgba(255, 255, 255, 0.25)',
                borderRadius: '16px',
                padding: 'clamp(1.5rem, 2.5vw, 2rem)',
                flex: '1',
                minWidth: '220px',
                maxWidth: '350px'
              }}
              variants={cardVariants}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 style={{
                fontSize: 'clamp(0.8rem, 1.2vw, 1rem)',
                fontWeight: '700',
                color: '#fafafa',
                marginBottom: '1.5rem',
                textAlign: 'center',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                lineHeight: '1.2'
              }}>
                CONTEXTUAL DOCUMENT<br />UNDERSTANDING PIPELINE
              </h3>
              
              <div style={{ 
                display: 'flex', 
                alignItems: 'center',
                gap: '0.6rem',
                justifyContent: 'space-between',
                width: '100%'
              }}>
                {/* Left side - Two boxes vertically stacked */}
                <div style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '0.6rem',
                  flex: '1'
                }}>
                  <div style={{
                    padding: '0.6rem',
                    background: 'rgba(255, 255, 255, 0.15)',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    borderRadius: '6px',
                    textAlign: 'center',
                    fontSize: 'clamp(0.65rem, 1vw, 0.75rem)',
                    fontWeight: '600',
                    color: '#fafafa'
                  }}>
                    Multimodal<br/>Extraction
                  </div>
                  
                  <div style={{
                    padding: '0.6rem',
                    background: 'rgba(255, 255, 255, 0.15)',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    borderRadius: '6px',
                    textAlign: 'center',
                    fontSize: 'clamp(0.65rem, 1vw, 0.75rem)',
                    fontWeight: '600',
                    color: '#fafafa'
                  }}>
                    Continuous<br/>Ingestion
                  </div>
                </div>

                {/* Bracket/Brace */}
                <div style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  height: '80px',
                  flexShrink: 0
                }}>
                  <svg 
                    width="16" 
                    height="80" 
                    viewBox="0 0 16 80" 
                    fill="none"
                    style={{ color: 'rgba(255, 255, 255, 0.4)' }}
                  >
                    <path 
                      d="M2 8 Q2 2 6 2 Q12 2 12 8 L12 36 Q12 40 10 40 Q12 40 12 44 L12 72 Q12 78 6 78 Q2 78 2 72" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      fill="none"
                    />
                  </svg>
                </div>

                {/* Arrow Icon in circle */}
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <svg 
                    width="12" 
                    height="12" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5"
                    style={{ color: '#fafafa' }}
                  >
                    <path d="M5 12h14"/>
                    <path d="M12 5l7 7-7 7"/>
                  </svg>
                </div>

                {/* Right side - Datastore */}
                <div style={{
                  padding: '0.6rem',
                  background: 'rgba(255, 255, 255, 0.15)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  borderRadius: '6px',
                  textAlign: 'center',
                  fontSize: 'clamp(0.65rem, 1vw, 0.75rem)',
                  fontWeight: '600',
                  color: '#fafafa',
                  flex: '1',
                  alignSelf: 'center'
                }}>
                  Datastore
                </div>
              </div>
            </motion.div>

            {/* Arrow 2 */}
            <motion.div 
              variants={arrowVariants}
              transition={{ duration: 0.4, delay: 0.6 }}
              style={{ flexShrink: 0 }}
            >
              <ArrowIcon />
            </motion.div>

            {/* RAG Agent */}
            <motion.div 
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '2px solid rgba(255, 255, 255, 0.25)',
                borderRadius: '16px',
                padding: 'clamp(1.5rem, 2.5vw, 2rem)',
                flex: '1',
                minWidth: '240px',
                maxWidth: '320px'
              }}
              variants={cardVariants}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 style={{
                fontSize: 'clamp(0.8rem, 1.2vw, 1rem)',
                fontWeight: '700',
                color: '#fafafa',
                marginBottom: '1.5rem',
                textAlign: 'center',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                lineHeight: '1.2'
              }}>
                CONTEXTUAL<br />RAG AGENT
              </h3>
              
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '0.8rem',
                marginBottom: '1.5rem'
              }}>
                {['Mixture of retrievers', 'Reranker', 'Grounded Language Model'].map((item, index) => (
                  <div key={index} style={{
                    padding: '0.8rem',
                    background: 'rgba(255, 255, 255, 0.12)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    textAlign: 'center',
                    fontSize: 'clamp(0.7rem, 1.1vw, 0.8rem)',
                    fontWeight: '600'
                  }}>
                    {item}
                  </div>
                ))}
              </div>

              {/* Optimization Notes */}
              <div style={{
                borderTop: '1px solid rgba(255, 255, 255, 0.15)',
                paddingTop: '1rem',
                fontSize: 'clamp(0.65rem, 1vw, 0.75rem)',
                color: 'rgba(250, 250, 250, 0.9)'
              }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: '0.4rem',
                  marginBottom: '0.5rem'
                }}>
                  <span style={{ color: '#fce96b', flexShrink: 0 }}>✓</span>
                  <span>Components jointly optimized with RAG 2.0</span>
                </div>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: '0.4rem'
                }}>
                  <span style={{ color: '#fce96b', flexShrink: 0 }}>✓</span>
                  <span>Tuning and alignment to specialize to use case</span>
                </div>
              </div>
            </motion.div>

            {/* Arrow 3 */}
            <motion.div 
              variants={arrowVariants}
              transition={{ duration: 0.4, delay: 0.8 }}
              style={{ flexShrink: 0 }}
            >
              <ArrowIcon />
            </motion.div>

            {/* Specialized Agents */}
            <motion.div 
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '16px',
                padding: 'clamp(1.5rem, 2.5vw, 2rem)',
                flex: '1',
                minWidth: '200px',
                maxWidth: '280px'
              }}
              variants={cardVariants}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 style={{
                fontSize: 'clamp(0.8rem, 1.2vw, 1rem)',
                fontWeight: '700',
                color: '#fafafa',
                marginBottom: '1.5rem',
                textAlign: 'center',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                lineHeight: '1.2'
              }}>
                SPECIALIZED<br />RAG AGENTS
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {[
                  { name: 'Finance', icon: '💰' },
                  { name: 'Technology', icon: '⚡' },
                  { name: 'Professional Services', icon: '⚖️', highlight: true },
                  { name: 'Your Enterprise', icon: '🏢' }
                ].map((item, index) => (
                  <div 
                    key={index}
                    style={{
                      padding: '0.8rem',
                      background: item.highlight ? 'rgba(252, 233, 107, 0.2)' : 'rgba(255, 255, 255, 0.1)',
                      border: item.highlight ? '2px solid rgba(252, 233, 107, 0.4)' : '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: '8px',
                      textAlign: 'center',
                      fontSize: 'clamp(0.7rem, 1.1vw, 0.8rem)',
                      fontWeight: '600',
                      color: item.highlight ? '#fce96b' : '#fafafa',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {item.icon} {item.name}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Specialized Section - Only on larger screens */}
          <motion.div 
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: 'clamp(2rem, 4vw, 3rem)',
              '@media (max-width: 768px)': {
                display: 'none'
              }
            }}
            variants={cardVariants}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div style={{
              background: 'rgba(252, 233, 107, 0.15)',
              border: '2px solid rgba(252, 233, 107, 0.4)',
              borderRadius: '16px',
              padding: 'clamp(1.5rem, 2.5vw, 2rem)',
              maxWidth: '300px',
              width: '100%'
            }}>
              <h4 style={{
                fontSize: 'clamp(0.8rem, 1.2vw, 1rem)',
                fontWeight: '700',
                color: '#fce96b',
                marginBottom: '1.5rem',
                textAlign: 'center',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                LEGAL SPECIALIZATION
              </h4>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <div style={{
                  padding: '0.8rem',
                  background: 'rgba(255, 255, 255, 0.15)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  borderRadius: '8px',
                  textAlign: 'center',
                  fontSize: 'clamp(0.7rem, 1.1vw, 0.8rem)',
                  fontWeight: '600',
                  color: '#fafafa'
                }}>
                  📋 Contract Analysis
                </div>
                <div style={{
                  padding: '0.8rem',
                  background: 'rgba(255, 255, 255, 0.15)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  borderRadius: '8px',
                  textAlign: 'center',
                  fontSize: 'clamp(0.7rem, 1.1vw, 0.8rem)',
                  fontWeight: '600',
                  color: '#fafafa'
                }}>
                  💼 Devis
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 1200px) {
          .horizontal-flow {
            flex-wrap: wrap;
            justify-content: center;
            gap: 1.5rem;
          }
        }
        
        @media (max-width: 768px) {
          .horizontal-flow {
            flex-direction: column;
            align-items: center;
          }
          .horizontal-flow > div {
            max-width: 100% !important;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default RAGArchitectureDiagram;
