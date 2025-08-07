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
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
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
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
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
          <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/>
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
          <path d="M9 12l2 2 4-4"/>
          <path d="M21 12c.552 0 1-.448 1-1V8c0-.552-.448-1-1-1h-1V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v1H3c-.552 0-1 .448-1 1v3c0 .552.448 1 1 1h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1h1z"/>
        </svg>
      ),
      title: "Real AI Engineering",
      description: "We build, develop, and deploy real AI systems. Whether from a simple agent in your Copilot Studio to a more complex AI using our custom chat interface, private API, and a vector database built for you — we deliver what works: fast, reliable, and integrated."
    }
  ];

  const stackComponents = [
    {
      badge: "N.O.G.",
      title: "Nested Orchestration and Governance",
      category: "ORCHESTRATION",
      description: "Manage persistent, traceable and audited agent graphs. Native support for conversational contexts and inter-agent collaborations."
    },
    {
      badge: "LangChain",
      title: "Native Connectors",
      category: "INTEGRATIONS",
      description: "Integrate LLMs, contractual databases, business tools or providers (iManage, Jina AI, Pinecone, etc.) without technical friction."
    },
    {
      badge: "EAN-GOV 128",
      title: "Barcode for each execution",
      category: "GOVERNANCE & TRACE",
      description: "Each agent emits a structured barcode including: LLM model, prompt, agent code, provider audit, country, expiry date, result number, etc."
    },
    {
      badge: "LangSmith",
      title: "Supervision and evaluation",
      category: "OBSERVABILITY",
      description: "Run analysis, qualitative evaluation, and reporting of errors or behavioral drift for compliance and continuous improvement purposes."
    },
    {
      badge: "N.O.G. Platform",
      title: "Secure publication",
      category: "DEPLOYMENT",
      description: "Deploy your agents on a compliant platform, with lifecycle management, access control and certified logging."
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2.5rem)',
            marginBottom: 'clamp(6rem, 10vh, 8rem)',
            y: benefitsY
          }}
        >
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              style={{
                padding: 'clamp(1.5rem, 3vw, 2rem)',
                background: 'transparent',
                backdropFilter: 'blur(20px)',
                border: '1px solid transparent',
                borderRadius: '16px',
                transition: 'all 0.3s ease',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-5px)';
                e.target.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.4)';
                e.target.style.background = 'rgba(255, 255, 255, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
                e.target.style.background = 'transparent';
              }}
            >
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem'
                }}
              >
                <div 
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  {benefit.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 
                    style={{
                      fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                      fontWeight: '700',
                      color: '#fafafa',
                      marginBottom: '1rem',
                      lineHeight: '1.3',
                      margin: '0 0 1rem 0'
                    }}
                  >
                    {benefit.title}
                  </h3>
                  <p 
                    style={{
                      fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
                      color: 'rgba(250, 250, 250, 0.8)',
                      lineHeight: '1.5',
                      margin: 0
                    }}
                  >
                    {benefit.description}
                  </p>
                </div>
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