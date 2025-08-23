import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './LegalStackSection.css';

const RAGArchitectureDiagram = () => {
  const { t } = useTranslation();
  const ragSectionRef = useRef(null);
  const ragContentRef = useRef(null);
  const [ragScrollProgress, setRagScrollProgress] = useState(0);

  // useEffect pour gérer l'effet de transition de scroll ACCÉLÉRÉ sur la section RAG (même logique que deployment)
  useEffect(() => {
    const handleScroll = () => {
      if (!ragSectionRef.current) return;
      
      const element = ragSectionRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = rect.height;
      
      // MÊME CALCUL ACCÉLÉRÉ que deployment
      const startPoint = windowHeight * 0.8;
      const endPoint = -elementHeight * 0.2;
      
      let progress;
      if (rect.top > startPoint) {
        progress = 0;
      } else if (rect.top < endPoint) {
        progress = 1;
      } else {
        progress = (startPoint - rect.top) / (startPoint - endPoint);
      }
      
      progress = Math.pow(progress, 0.7);
      setRagScrollProgress(progress);
      
      // Appliquer les classes de transition de couleur avec mêmes seuils que deployment
      if (progress < 0.15) {
        element.className = element.className.replace(/rag-bg-enhanced-\w+/g, '') + ' rag-bg-enhanced-start';
      } else if (progress < 0.45) {
        element.className = element.className.replace(/rag-bg-enhanced-\w+/g, '') + ' rag-bg-enhanced-middle';
      } else {
        element.className = element.className.replace(/rag-bg-enhanced-\w+/g, '') + ' rag-bg-enhanced-end';
      }
    };
    
    // Observer d'intersection pour les animations
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        // Animer les éléments individuellement
        const steps = entry.target.querySelectorAll('.rag-flow-step');
        steps.forEach((step, index) => {
          setTimeout(() => {
            step.classList.add('visible');
          }, index * 100);
        });
        
        const header = entry.target.querySelector('.rag-header-enhanced');
        if (header) header.classList.add('visible');
      }
    }, { 
      threshold: 0.05,
      rootMargin: '0px 0px -30px 0px'
    });
    
    if (ragContentRef.current) {
      observer.observe(ragContentRef.current);
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => { 
      observer.disconnect(); 
      window.removeEventListener('scroll', handleScroll); 
    };
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const arrowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  const ArrowIcon = () => (
    <svg 
      width="32" 
      height="24" 
      viewBox="0 0 40 24" 
      fill="none"
      style={{ color: 'var(--rag-text-color, #ffffff)' }}
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
      ref={ragSectionRef}
      className="rag-section-enhanced rag-bg-enhanced-start"
    >
      <div 
        ref={ragContentRef}
        className="rag-content-container"
      >
        {/* Header harmonisé avec le style deployment */}
        <div className="rag-header-enhanced">
          <h3 className="rag-subtitle-enhanced">
            {t('ragArchitecture.subtitle', 'LA PLATEFORME RAG CONTEXTUELLE')}
          </h3>
          <h2 className="rag-title-enhanced">
            {t('ragArchitecture.title', 'ARCHITECTURE DE NOUVELLE GÉNÉRATION POUR LES AGENTS')}
          </h2>
          <p className="rag-intro-enhanced">
            {t('ragArchitecture.introduction', 'Conçue par des pionniers en RAG, notre plateforme vous permet d\'intégrer de manière transparente des agents IA à vos connaissances d\'entreprise, offrant une solution complète pour concevoir des systèmes RAG de pointe.')}
          </p>
        </div>

        {/* Diagramme dans un container unifié */}
        <div className="rag-diagram-container">
          <div className="rag-platform-label">
            PLATFORM
          </div>

          <div className="rag-flow-container">
            {/* DATA SOURCES */}
            <div className="rag-flow-step">
              <h3 style={{
                fontSize: 'clamp(0.9rem, 1.4vw, 1.1rem)',
                fontWeight: '700',
                color: 'var(--rag-text-color, #2f2f2e)',
                marginBottom: '1.5rem',
                textAlign: 'center',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                DATA SOURCES
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {[
                  { 
                    icon: 'file-text', 
                    text: 'Unstructured Data',
                    iconPath: (
                      <>
                        <rect x="4" y="4" width="16" height="16" rx="2" ry="2"/>
                        <path d="M8 8h8"/>
                        <path d="M8 12h8"/>
                        <path d="M8 16h4"/>
                      </>
                    )
                  },
                  { 
                    icon: 'database', 
                    text: 'Structured Data',
                    iconPath: (
                      <>
                        <rect x="3" y="3" width="18" height="6" rx="2"/>
                        <rect x="3" y="9" width="18" height="6" rx="2"/>
                        <rect x="3" y="15" width="18" height="6" rx="2"/>
                      </>
                    )
                  },
                  { 
                    icon: 'zap', 
                    text: 'Application APIs',
                    iconPath: (
                      <>
                        <circle cx="12" cy="12" r="3"/>
                        <path d="M12 1v6m0 6v6"/>
                        <path d="m21 12-6-3.5v7"/>
                        <path d="m3 12 6-3.5v7"/>
                      </>
                    )
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '0.6rem',
                      padding: '0.8rem',
                      background: 'var(--rag-step-bg, rgba(47, 47, 46, 0.08))',
                      border: '1px solid var(--rag-step-border, rgba(47, 47, 46, 0.15))',
                      borderRadius: '10px',
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                      cursor: 'default'
                    }}
                  >
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'var(--rag-step-bg-hover, rgba(47, 47, 46, 0.15))',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid var(--rag-step-border, rgba(47, 47, 46, 0.2))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 0.3s ease'
                    }}>
                      <svg 
                        width="18" 
                        height="18" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                        style={{ color: 'var(--rag-text-color, #2f2f2e)' }}
                      >
                        {item.iconPath}
                      </svg>
                    </div>
                    
                    <span style={{
                      fontSize: 'clamp(0.8rem, 1.3vw, 0.9rem)',
                      fontWeight: '600',
                      color: 'var(--rag-text-color, #2f2f2e)',
                      lineHeight: '1.2'
                    }}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <ArrowIcon />

            {/* CONTEXTUAL DOCUMENT UNDERSTANDING PIPELINE */}
            <div className="rag-flow-step">
              <h3 style={{
                fontSize: 'clamp(0.8rem, 1.2vw, 1rem)',
                fontWeight: '700',
                color: 'var(--rag-text-color, #2f2f2e)',
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
                <div style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '0.6rem',
                  flex: '1'
                }}>
                  <div style={{
                    padding: '0.6rem',
                    background: 'var(--rag-step-bg-hover, rgba(47, 47, 46, 0.15))',
                    border: '1px solid var(--rag-step-border-hover, rgba(47, 47, 46, 0.25))',
                    borderRadius: '6px',
                    textAlign: 'center',
                    fontSize: 'clamp(0.65rem, 1vw, 0.75rem)',
                    fontWeight: '600',
                    color: 'var(--rag-text-color, #2f2f2e)'
                  }}>
                    Multimodal<br/>Extraction
                  </div>
                  
                  <div style={{
                    padding: '0.6rem',
                    background: 'var(--rag-step-bg-hover, rgba(47, 47, 46, 0.15))',
                    border: '1px solid var(--rag-step-border-hover, rgba(47, 47, 46, 0.25))',
                    borderRadius: '6px',
                    textAlign: 'center',
                    fontSize: 'clamp(0.65rem, 1vw, 0.75rem)',
                    fontWeight: '600',
                    color: 'var(--rag-text-color, #2f2f2e)'
                  }}>
                    Continuous<br/>Ingestion
                  </div>
                </div>

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
                    style={{ color: 'var(--rag-text-color, rgba(47, 47, 46, 0.4))' }}
                  >
                    <path 
                      d="M2 8 Q2 2 6 2 Q12 2 12 8 L12 36 Q12 40 10 40 Q12 40 12 44 L12 72 Q12 78 6 78 Q2 78 2 72" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      fill="none"
                    />
                  </svg>
                </div>

                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'var(--rag-step-bg-hover, rgba(47, 47, 46, 0.15))',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid var(--rag-step-border, rgba(47, 47, 46, 0.2))',
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
                    style={{ color: 'var(--rag-text-color, #2f2f2e)' }}
                  >
                    <path d="M5 12h14"/>
                    <path d="M12 5l7 7-7 7"/>
                  </svg>
                </div>

                <div style={{
                  padding: '0.4rem 0.3rem',
                  background: 'var(--rag-step-bg-hover, rgba(47, 47, 46, 0.15))',
                  border: '1px solid var(--rag-step-border-hover, rgba(47, 47, 46, 0.25))',
                  borderRadius: '6px',
                  textAlign: 'center',
                  fontSize: 'clamp(0.55rem, 0.9vw, 0.65rem)',
                  fontWeight: '600',
                  color: 'var(--rag-text-color, #2f2f2e)',
                  flex: '1',
                  alignSelf: 'center',
                  minWidth: '50px',
                  maxWidth: '80px'
                }}>
                  Datastore
                </div>
              </div>
            </div>

            <ArrowIcon />

            {/* CONTEXTUAL RAG AGENT */}
            <div className="rag-flow-step">
              <h3 style={{
                fontSize: 'clamp(0.8rem, 1.2vw, 1rem)',
                fontWeight: '700',
                color: 'var(--rag-text-color, #2f2f2e)',
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
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem',
                marginBottom: '1.5rem',
                width: '100%',
                padding: '0 0.5rem'
              }}>
                <div style={{
                  padding: 'clamp(0.3rem, 0.8vw, 0.5rem)',
                  background: 'var(--rag-step-bg-hover, rgba(47, 47, 46, 0.18))',
                  border: '1px solid var(--rag-step-border-hover, rgba(47, 47, 46, 0.3))',
                  borderRadius: '6px',
                  textAlign: 'center',
                  fontSize: 'clamp(0.55rem, 0.9vw, 0.65rem)',
                  fontWeight: '600',
                  color: 'var(--rag-text-color, #2f2f2e)',
                  flex: '1',
                  minWidth: '70px',
                  maxWidth: '90px',
                  lineHeight: '1.1'
                }}>
                  <span style={{ whiteSpace: 'nowrap' }}>Mixture</span>{' '}
                  <span style={{ whiteSpace: 'nowrap' }}>of</span>{' '}
                  <span style={{ whiteSpace: 'nowrap' }}>retrievers</span>
                </div>

                <div style={{
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  background: 'var(--rag-step-bg, rgba(47, 47, 46, 0.2))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  margin: '0 0.2rem'
                }}>
                  <svg 
                    width="6" 
                    height="6" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="3"
                    style={{ color: 'var(--rag-text-color, #2f2f2e)' }}
                  >
                    <path d="M5 12h14"/>
                    <path d="M12 5l7 7-7 7"/>
                  </svg>
                </div>

                <div style={{
                  padding: 'clamp(0.3rem, 0.8vw, 0.5rem)',
                  background: 'var(--rag-step-bg-hover, rgba(47, 47, 46, 0.18))',
                  border: '1px solid var(--rag-step-border-hover, rgba(47, 47, 46, 0.3))',
                  borderRadius: '6px',
                  textAlign: 'center',
                  fontSize: 'clamp(0.55rem, 0.9vw, 0.65rem)',
                  fontWeight: '600',
                  color: 'var(--rag-text-color, #2f2f2e)',
                  flex: '1',
                  minWidth: '60px',
                  maxWidth: '80px',
                  lineHeight: '1.1'
                }}>
                  <span style={{ whiteSpace: 'nowrap' }}>Reranker</span>
                </div>

                <div style={{
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  background: 'var(--rag-step-bg, rgba(47, 47, 46, 0.2))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  margin: '0 0.2rem'
                }}>
                  <svg 
                    width="6" 
                    height="6" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="3"
                    style={{ color: 'var(--rag-text-color, #2f2f2e)' }}
                  >
                    <path d="M5 12h14"/>
                    <path d="M12 5l7 7-7 7"/>
                  </svg>
                </div>

                <div style={{
                  padding: 'clamp(0.3rem, 0.8vw, 0.5rem)',
                  background: 'var(--rag-step-bg-hover, rgba(47, 47, 46, 0.18))',
                  border: '1px solid var(--rag-step-border-hover, rgba(47, 47, 46, 0.3))',
                  borderRadius: '6px',
                  textAlign: 'center',
                  fontSize: 'clamp(0.55rem, 0.9vw, 0.65rem)',
                  fontWeight: '600',
                  color: 'var(--rag-text-color, #2f2f2e)',
                  flex: '1',
                  minWidth: '70px',
                  maxWidth: '95px',
                  lineHeight: '1.1'
                }}>
                  <span style={{ whiteSpace: 'nowrap' }}>Grounded</span>{' '}
                  <span style={{ whiteSpace: 'nowrap' }}>Language</span>{' '}
                  <span style={{ whiteSpace: 'nowrap' }}>Model</span>
                </div>
              </div>

              <div style={{
                borderTop: '1px solid var(--rag-step-border, rgba(47, 47, 46, 0.2))',
                paddingTop: '1rem',
                fontSize: 'clamp(0.65rem, 1vw, 0.75rem)',
                color: 'var(--rag-text-color, rgba(47, 47, 46, 0.9))'
              }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: '0.4rem',
                  marginBottom: '0.5rem'
                }}>
                  <span style={{ color: 'var(--rag-text-color, #2f2f2e)', flexShrink: 0 }}>✓</span>
                  <span>Components jointly optimized with RAG 2.0</span>
                </div>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: '0.4rem'
                }}>
                  <span style={{ color: 'var(--rag-text-color, #2f2f2e)', flexShrink: 0 }}>✓</span>
                  <span>Tuning and alignment to specialize to use case</span>
                </div>
              </div>
            </div>

            <ArrowIcon />

            {/* SPECIALIZED AGENTS BY DOMAIN */}
            <div className="rag-flow-step">
              <h3 style={{
                fontSize: 'clamp(0.8rem, 1.2vw, 1rem)',
                fontWeight: '700',
                color: 'var(--rag-text-color, #2f2f2e)',
                marginBottom: '1.5rem',
                textAlign: 'center',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                lineHeight: '1.2'
              }}>
                SPECIALIZED<br />AGENTS BY DOMAIN
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {[
                  { 
                    name: 'Finance',
                    iconPath: (
                      <>
                        <rect x="3" y="3" width="18" height="18" rx="2"/>
                        <path d="M9 9h6v6H9z"/>
                        <path d="M12 6v12"/>
                        <path d="M6 12h12"/>
                      </>
                    )
                  },
                  { 
                    name: 'Law',
                    iconPath: (
                      <>
                        <rect x="4" y="4" width="16" height="16" rx="2"/>
                        <path d="M8 8h8"/>
                        <path d="M8 12h8"/>
                        <path d="M8 16h6"/>
                        <circle cx="18" cy="18" r="2"/>
                      </>
                    )
                  },
                  { 
                    name: 'Technology',
                    iconPath: (
                      <>
                        <circle cx="12" cy="12" r="9"/>
                        <circle cx="12" cy="12" r="4"/>
                        <path d="M12 3v2"/>
                        <path d="M12 19v2"/>
                        <path d="M3 12h2"/>
                        <path d="M19 12h2"/>
                      </>
                    )
                  },
                  { 
                    name: 'Your Enterprise',
                    iconPath: (
                      <>
                        <rect x="2" y="6" width="20" height="12" rx="2"/>
                        <path d="M6 10h12"/>
                        <path d="M6 14h12"/>
                        <circle cx="8" cy="10" r="1"/>
                        <circle cx="8" cy="14" r="1"/>
                      </>
                    )
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '0.6rem',
                      padding: '0.8rem',
                      background: 'var(--rag-step-bg, rgba(47, 47, 46, 0.08))',
                      border: '1px solid var(--rag-step-border, rgba(47, 47, 46, 0.15))',
                      borderRadius: '10px',
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                      cursor: 'default'
                    }}
                  >
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'var(--rag-step-bg-hover, rgba(47, 47, 46, 0.15))',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid var(--rag-step-border, rgba(47, 47, 46, 0.2))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 0.3s ease'
                    }}>
                      <svg 
                        width="18" 
                        height="18" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                        style={{ color: 'var(--rag-text-color, #2f2f2e)' }}
                      >
                        {item.iconPath}
                      </svg>
                    </div>
                    
                    <span style={{
                      fontSize: 'clamp(0.8rem, 1.3vw, 0.9rem)',
                      fontWeight: '600',
                      color: 'var(--rag-text-color, #2f2f2e)',
                      lineHeight: '1.2'
                    }}>
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RAGArchitectureDiagram;
