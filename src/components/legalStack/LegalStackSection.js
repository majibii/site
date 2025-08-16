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

        {/* Architecture Flow */}
        <div style={{ 
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(3rem, 6vh, 4rem)',
          alignItems: 'center'
        }}>
          
          {/* Data Sources */}
          <motion.div 
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              border: '2px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '16px',
              padding: 'clamp(2rem, 4vw, 3rem)',
              width: '100%',
              maxWidth: '320px',
              position: 'relative'
            }}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
              fontWeight: '700',
              color: '#fafafa',
              marginBottom: '2rem',
              textAlign: 'center',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              DATA SOURCES
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {['Unstructured Data', 'Structured Data', 'Application APIs'].map((item, index) => (
                <div 
                  key={index}
                  style={{
                    padding: '1rem',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    textAlign: 'center',
                    fontSize: 'clamp(0.9rem, 1.6vw, 1rem)',
                    fontWeight: '500'
                  }}
                >
                  📄 {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Arrow 1 */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={arrowVariants}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <ArrowIcon />
          </motion.div>

          {/* Contextual Document Understanding Pipeline */}
          <motion.div 
            style={{
              background: 'rgba(252, 233, 107, 0.1)',
              border: '2px solid rgba(252, 233, 107, 0.3)',
              borderRadius: '16px',
              padding: 'clamp(2rem, 4vw, 3rem)',
              width: '100%',
              maxWidth: '400px',
              position: 'relative'
            }}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
              fontWeight: '700',
              color: '#fce96b',
              marginBottom: '2rem',
              textAlign: 'center',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              CONTEXTUAL DOCUMENT<br />UNDERSTANDING PIPELINE
            </h3>
            
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1rem',
              alignItems: 'center'
            }}>
              <div style={{
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '8px',
                textAlign: 'center',
                fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)',
                fontWeight: '600',
                width: '80%'
              }}>
                Multimodal<br />Extraction
              </div>
              <div style={{ fontSize: '1.5rem' }}>⬇️</div>
              <div style={{
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '8px',
                textAlign: 'center',
                fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)',
                fontWeight: '600',
                width: '80%'
              }}>
                Continuous<br />Ingestion
              </div>
              <div style={{ fontSize: '1.5rem' }}>⬇️</div>
              <div style={{
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '8px',
                textAlign: 'center',
                fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)',
                fontWeight: '600',
                width: '80%'
              }}>
                Datastore
              </div>
            </div>
          </motion.div>

          {/* Arrow 2 */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={arrowVariants}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <ArrowIcon />
          </motion.div>

          {/* Contextual RAG Agent */}
          <motion.div 
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '16px',
              padding: 'clamp(2rem, 4vw, 3rem)',
              width: '100%',
              maxWidth: '450px',
              position: 'relative'
            }}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h3 style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
              fontWeight: '700',
              color: '#fafafa',
              marginBottom: '2rem',
              textAlign: 'center',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              CONTEXTUAL<br />RAG AGENT
            </h3>
            
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1rem',
              alignItems: 'center',
              marginBottom: '2rem'
            }}>
              {['Mixture of retrievers', 'Reranker', 'Grounded Language Model'].map((item, index) => (
                <div key={index} style={{
                  padding: '1rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '8px',
                  textAlign: 'center',
                  fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)',
                  fontWeight: '600',
                  width: '90%'
                }}>
                  {item}
                </div>
              ))}
            </div>

            {/* Optimization Notes */}
            <div style={{
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              paddingTop: '1.5rem',
              fontSize: 'clamp(0.8rem, 1.4vw, 0.9rem)',
              color: 'rgba(250, 250, 250, 0.9)'
            }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                marginBottom: '0.5rem'
              }}>
                <span style={{ color: '#fce96b' }}>✓</span>
                Components jointly optimized with RAG 2.0
              </div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem'
              }}>
                <span style={{ color: '#fce96b' }}>✓</span>
                Tuning and alignment to specialize to use case
              </div>
            </div>
          </motion.div>

          {/* Arrow 3 */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={arrowVariants}
            transition={{ duration: 0.4, delay: 0.9 }}
          >
            <ArrowIcon />
          </motion.div>

          {/* Specialized RAG Agents */}
          <motion.div 
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              border: '2px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '16px',
              padding: 'clamp(2rem, 4vw, 3rem)',
              width: '100%',
              maxWidth: '350px'
            }}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <h3 style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
              fontWeight: '700',
              color: '#fafafa',
              marginBottom: '2rem',
              textAlign: 'center',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              SPECIALIZED<br />RAG AGENTS
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { name: 'Finance', icon: '💰' },
                { name: 'Technology', icon: '⚡' },
                { name: 'Professional Services', icon: '⚖️' },
                { name: 'Your Enterprise', icon: '🏢' }
              ].map((item, index) => (
                <div 
                  key={index}
                  style={{
                    padding: '1rem',
                    background: index === 2 ? 'rgba(252, 233, 107, 0.15)' : 'rgba(255, 255, 255, 0.08)',
                    border: index === 2 ? '2px solid rgba(252, 233, 107, 0.3)' : '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    textAlign: 'center',
                    fontSize: 'clamp(0.9rem, 1.6vw, 1rem)',
                    fontWeight: '600',
                    color: index === 2 ? '#fce96b' : '#fafafa',
                    cursor: index === 2 ? 'pointer' : 'default',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {item.icon} {item.name}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Final Arrow and Specialized Agent 3 - Only visible on larger screens */}
          <div style={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem',
            '@media (max-width: 768px)': {
              display: 'none'
            }
          }}>
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={arrowVariants}
              transition={{ duration: 0.4, delay: 1.2 }}
            >
              <ArrowIcon />
            </motion.div>

            {/* Contract Analysis & Devis */}
            <motion.div 
              style={{
                background: 'rgba(252, 233, 107, 0.15)',
                border: '2px solid rgba(252, 233, 107, 0.4)',
                borderRadius: '16px',
                padding: 'clamp(1.5rem, 3vw, 2rem)',
                width: '100%',
                maxWidth: '280px'
              }}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              <h4 style={{
                fontSize: 'clamp(0.9rem, 1.6vw, 1.1rem)',
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
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '6px',
                  textAlign: 'center',
                  fontSize: 'clamp(0.8rem, 1.4vw, 0.9rem)',
                  fontWeight: '600',
                  color: '#fafafa'
                }}>
                  📋 Contract Analysis
                </div>
                <div style={{
                  padding: '0.8rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '6px',
                  textAlign: 'center',
                  fontSize: 'clamp(0.8rem, 1.4vw, 0.9rem)',
                  fontWeight: '600',
                  color: '#fafafa'
                }}>
                  💼 Devis
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          section > div > div:last-child > div:last-child {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default RAGArchitectureDiagram;
