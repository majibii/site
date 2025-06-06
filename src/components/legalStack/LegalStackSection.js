import React, { useRef } from 'react';
import { useInViewport } from '../../hooks/useInViewport';
import './LegalStackSection.css';

const LegalStackSection = () => {
  const sectionRef = useRef(null);
  const isVisible = useInViewport(sectionRef, false, { threshold: 0.2 });

  const benefits = [
    {
      icon: "🔧",
      title: "Accelerate Agent Construction",
      description: "Model rapidly with a visual interface and reusable templates. Combine prompts, documents, and business functions without technical complexity."
    },
    {
      icon: "🛡️",
      title: "Deliver Reliable Agents",
      description: "Track and trace your agents with comprehensive monitoring and validation systems for consistent performance."
    },
    {
      icon: "📈",
      title: "Gain Efficiency",
      description: "Optimize team work with configurable agents that adapt to your workflow and business requirements."
    },
    {
      icon: "⚖️",
      title: "Ensure Compliance",
      description: "Built-in governance and audit trails ensure your legal agents meet regulatory requirements and professional standards."
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
        <div style={{ textAlign: 'center', marginBottom: 'clamp(4rem, 8vh, 6rem)' }}>
          <h3 
            style={{
              fontSize: 'clamp(0.9rem, 1.5vw, 1.2rem)',
              fontWeight: '600',
              color: 'rgba(250, 250, 250, 0.8)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem'
            }}
          >
            LEGAL AGENT STACK
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
            DESIGN GOVERNED AI AGENTS
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
            Build, deploy, and govern legal AI agents with full traceability and compliance. 
            From prompt engineering to production deployment.
          </p>
        </div>

        {/* Benefits Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2.5rem)',
            marginBottom: 'clamp(6rem, 10vh, 8rem)'
          }}
        >
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              style={{
                padding: 'clamp(1.5rem, 3vw, 2rem)',
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '16px',
                transition: 'all 0.3s ease',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-5px)';
                e.target.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.4)';
                e.target.style.background = 'rgba(255, 255, 255, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
                e.target.style.background = 'rgba(255, 255, 255, 0.08)';
              }}
            >
              <div 
                style={{
                  fontSize: '2.5rem',
                  marginBottom: '1rem',
                  display: 'block'
                }}
              >
                {benefit.icon}
              </div>
              <h3 
                style={{
                  fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                  fontWeight: '700',
                  color: '#fafafa',
                  marginBottom: '1rem',
                  lineHeight: '1.3'
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
          ))}
        </div>

        {/* Technical Stack Section */}
        <div style={{ marginBottom: '4rem' }}>
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
        </div>
      </div>
    </section>
  );
};

export default LegalStackSection;