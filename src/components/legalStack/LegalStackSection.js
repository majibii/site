import React, { useRef } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { useInViewport } from '../../hooks/useInViewport';
import './LegalStackSection.css';

const LegalStackSection = () => {
  const sectionRef = useRef(null);
  const isVisible = useInViewport(sectionRef, false, { threshold: 0.2 });
  const { scrollY } = useViewportScroll();
  
  // Effets parallax pour différents éléments
  const headerY = useTransform(scrollY, [0, 1000], [0, -25]);
  const benefitsY = useTransform(scrollY, [0, 1000], [0, 15]);
  const stackY = useTransform(scrollY, [0, 1000], [0, 30]);

  const benefits = [
    {
      icon: (
        <svg 
          width="24" 
          height="24"
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          style={{ color: '#fafafa' }}
        >
          <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2z"/>
          <path d="M8 21v-4a2 2 0 012-2h4a2 2 0 012 2v4"/>
          <path d="M3 10h18"/>
          <path d="M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
        </svg>
      ),
      title: "Connected to Your World",
      description: "We build AI agents exclusively for legal and defense — no gimmicks, just secure, usable workflows tailored to your enterprise, by a team with real experience in your field."
    },
    {
      icon: (
        <svg 
          width="24" 
          height="24"
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          style={{ color: '#fafafa' }}
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      ),
      title: "Solves Your Toughest Challenges",
      description: "From simple tasks to complex reasoning, we connect your documents, tools, and AI with ROI in mind — and we stay aligned with your mission."
    },
    {
      icon: (
        <svg 
          width="24" 
          height="24"
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          style={{ color: '#fafafa' }}
        >
          <path d="M9 12l2 2 4-4"/>
          <circle cx="12" cy="12" r="10"/>
        </svg>
      ),
      title: "From Complexity to Clarity",
      description: "We transform legal and technical complexity into clear, actionable outputs — with an experienced team that manages the project and stays by your side."
    },
    {
      icon: (
        <svg 
          width="24" 
          height="24"
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          style={{ color: '#fafafa' }}
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
          <path d="M6 8h12"/>
          <path d="M6 12h8"/>
        </svg>
      ),
      title: "Real AI Engineering",
      description: "We build, develop, and deploy real AI systems. Whether from a simple agent in your Copilot Studio to a more complex AI using our custom chat interface, private API, and a vector database built for you — we deliver what works: fast, reliable, and integrated."
    }
  ];

  const stackComponents = [ 
  {
    badge: "RAG",
    title: "Connect Your Internal Databases to a Large Model (RAG)",
    category: "RAG INTEGRATION",
    description: "We enable seamless connections between your internal databases and large models, utilizing Retrieval Augmented Generation (RAG) for enhanced knowledge extraction while maintaining security and confidentiality."
  },
  {
    badge: "AI Agent",
    title: "Build AI Agents",
    category: "AGENT CREATION",
    description: "We build advanced AI agents using Microsoft Azure Studio, creating tailored solutions that meet specific client needs. Our agents can be deployed in cloud or on-prem environments, leveraging locally stored language models to handle sensitive documents securely."
  },
  {
    badge: "Custom Agent",
    title: "Build Custom Agents",
    category: "CUSTOMIZATION",
    description: "If needed, we develop custom agents that seamlessly integrate with your specific tools and systems. These agents can be deployed in on-prem environments, using locally stored language models to process confidential files securely."
  },
  {
    badge: "AI Integration",
    title: "Total AI Custom Solutions",
    category: "INTEGRATIONS",
    description: "We specialize in integrating agents with large language model APIs while ensuring the highest standards of data security and confidentiality. For confidential tasks, we can deploy local models like GPT OSS or Mistral."
  },
  {
    badge: "Chatbot",
    title: "Chatbot Interface & API Connectivity",
    category: "CHATBOT",
    description: "Our chatbot interface connects to your vector databases via API, allowing for enhanced search capabilities, personalized responses, and dynamic data retrieval. It can be used to automatically analyze contracts, process legal documents, or even assist in real-time legal decision-making."
  }
];

  return (
    <section 
      ref={sectionRef} 
      className={`legal-stack-section ${isVisible ? 'visible' : ''}`}
      style={{
        minHeight: '100vh',
        width: '100%',
        padding: 'clamp(4rem, 8vh, 6rem) clamp(1rem, 3vw, 2rem)',
        backgroundColor: 'transparent',
        color: '#fafafa',
        position: 'relative',
        opacity: 1,
        visibility: 'visible'
      }}
    >
      <div 
        style={{
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
          opacity: 1,
          visibility: 'visible'
        }}
      >
        {/* Hero Section */}
        <motion.div 
          style={{ 
            textAlign: 'center', 
            marginBottom: 'clamp(4rem, 8vh, 6rem)',
            y: headerY
          }}
        >
          <h3 
            style={{
              fontSize: 'clamp(0.9rem, 1.5vw, 1.2rem)',
              fontWeight: '600',
              color: 'rgba(250, 250, 250, 0.8)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
              textDecoration: 'underline'
            }}
          >
            WHY EGGON
          </h3>
          
          <h2 
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: '900',
              color: '#fafafa',
              lineHeight: '1.1',
              marginBottom: '2rem',
              textShadow: '2px 2px 8px rgba(0, 0, 0, 0.6)'
            }}
          >
            Trust a team with expertise in your field
          </h2>

          <p 
            style={{
              fontSize: 'clamp(1rem, 2.2vw, 1.3rem)',
              color: 'rgba(250, 250, 250, 0.9)',
              lineHeight: '1.6',
              maxWidth: '80ch',
              margin: '0 auto'
            }}
          >
            Eggon combines deep legal expertise with real AI engineering to deliver trusted, integrated solutions tailored to your operational challenges.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2.5rem)',
            marginBottom: 'clamp(6rem, 10vh, 8rem)',
            y: benefitsY
          }}
        >
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              style={{
                padding: 'clamp(1.8rem, 3vw, 2.4rem)',
                background: 'transparent !important',
                backdropFilter: 'blur(20px)',
                border: '2px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '16px',
                transition: 'all 0.3s ease',
                cursor: 'default',
                minHeight: '280px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
              }}
              className="benefit-card"
              onMouseEnter={(e) => {
                e.stopPropagation();
                const card = e.currentTarget;
                card.style.transform = 'translateY(-5px)';
                card.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.4)';
                card.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                // Forcer tous les éléments enfants à rester transparents
                const allChildren = card.querySelectorAll('*');
                allChildren.forEach(child => {
                  child.style.background = 'transparent';
                  child.style.backgroundColor = 'transparent';
                });
              }}
              onMouseLeave={(e) => {
                e.stopPropagation();
                const card = e.currentTarget;
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = 'none';
                card.style.borderColor = 'rgba(255, 255, 255, 0.15)';
              }}
            >
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}
              >
                <div 
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  {benefit.icon}
                </div>
              </div>
              
              <div style={{ flex: 1, textAlign: 'center' }}>
                <h3 
                  style={{
                    fontSize: 'clamp(1.2rem, 2vw, 1.4rem)',
                    fontWeight: '700',
                    color: '#fafafa',
                    marginBottom: '1.2rem',
                    lineHeight: '1.3'
                  }}
                >
                  {benefit.title}
                </h3>
                
                <p 
                  style={{
                    fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
                    color: 'rgba(250, 250, 250, 0.85)',
                    lineHeight: '1.6',
                    textAlign: 'left',
                    margin: 0
                  }}
                >
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Technical Stack Section */}
        <motion.div 
          style={{ 
            marginBottom: '4rem',
            y: stackY
          }}
        >
          <h3 
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: '700',
              color: '#fafafa',
              textAlign: 'center',
              marginBottom: 'clamp(3rem, 6vh, 4rem)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}
          >
            THE LEGAL AGENT STACK
          </h3>

          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(1.5rem, 3vh, 2rem)',
              maxWidth: '1000px',
              margin: '0 auto'
            }}
          >
            {stackComponents.map((component, index) => (
              <div 
                key={index}
                style={{
                  padding: 'clamp(1.5rem, 3vw, 2rem)',
                  background: 'rgba(255, 255, 255, 0.06)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.06)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                  <div 
                    style={{
                      padding: '0.5rem 1rem',
                      background: 'rgba(252, 233, 107, 0.2)',
                      border: '1px solid rgba(252, 233, 107, 0.4)',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      color: '#fce96b',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      flexShrink: 0,
                      marginTop: '0.2rem'
                    }}
                  >
                    {component.badge}
                  </div>
                  
                  <div style={{ flex: 1 }}>
                    <div 
                      style={{
                        fontSize: '0.8rem',
                        color: 'rgba(250, 250, 250, 0.6)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        marginBottom: '0.5rem',
                        fontWeight: '500'
                      }}
                    >
                      {component.category}
                    </div>
                    
                    <h4 
                      style={{
                        fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                        fontWeight: '700',
                        color: '#fafafa',
                        marginBottom: '0.8rem',
                        lineHeight: '1.3'
                      }}
                    >
                      {component.title}
                    </h4>
                    
                    <p 
                      style={{
                        fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
                        color: 'rgba(250, 250, 250, 0.8)',
                        lineHeight: '1.5',
                        margin: 0
                      }}
                    >
                      {component.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LegalStackSection;
