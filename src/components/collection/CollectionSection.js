import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useViewportScroll, useTransform } from 'framer-motion';
import './CollectionSection.css';

const legalPrompts = [
  {
    title: "Drafting a Shareholder Agreement",
    context: "Corporate law, early-stage company",
    body: "You are a legal expert drafting a shareholder agreement for a private limited company. Draft key clauses covering voting rights, transfer restrictions, and exit provisions. Adapt to UK corporate law."
  },
  {
    title: "Startup Incorporation Checklist",
    context: "Formation stage",
    body: "Create a comprehensive legal checklist for incorporating a tech startup in Delaware, including required filings, board resolutions, and IP assignments."
  },
  {
    title: "NDAs in Cross-Border Deals",
    context: "Confidentiality in international transactions",
    body: "Compare and contrast enforceability of NDAs under US and German law. What clauses must be included to ensure mutual protection of confidential information?"
  },
  {
    title: "Due Diligence – M&A",
    context: "Buyer-side legal audit",
    body: "Generate a detailed legal due diligence questionnaire for an acquisition of a SaaS company. Focus on IP, contracts, liabilities, and employment."
  },
  {
    title: "Contract Risk Analysis",
    context: "Commercial contract negotiation",
    body: "Analyze a draft distribution agreement and flag clauses that present excessive legal risk. Highlight indemnity, termination, and governing law sections."
  },
  {
    title: "Employment Contract (C-Suite)",
    context: "Executive hiring",
    body: "Draft an employment agreement for a Chief Operating Officer in a VC-backed startup. Include equity grants, non-compete clauses, and KPIs."
  },
  {
    title: "Legal Risk Memo – Joint Venture",
    context: "Complex corporate structure",
    body: "Write a legal risk assessment memo for a joint venture between two multinational corporations operating in regulated markets."
  },
  {
    title: "IP Assignment Clauses",
    context: "Startup asset protection",
    body: "Draft strong intellectual property assignment clauses ensuring that all IP created by employees and contractors vests in the company."
  },
  {
    title: "Anti-Dilution Protections",
    context: "Investor rights",
    body: "Explain the legal mechanisms and implications of full-ratchet and weighted-average anti-dilution clauses in a Series A term sheet."
  },
  {
    title: "Cross-Border Dispute Resolution",
    context: "Commercial arbitration",
    body: "Recommend a dispute resolution clause for a supply agreement between a French supplier and a US buyer. Justify arbitration forum and governing law."
  },
  {
    title: "Convertible Note Template (SAFE)",
    context: "Startup financing",
    body: "Generate a founder-friendly convertible note (SAFE) agreement template for pre-seed investment. Include conversion triggers and cap valuation."
  },
  {
    title: "Force Majeure Clauses in Commercial Leases",
    context: "Post-COVID contract updates",
    body: "Draft a force majeure clause for a commercial lease agreement that includes pandemics, lockdowns, and supply chain disruptions."
  }
];

const CollectionSection = () => {
  const sectionRef = useRef(null);
  const [selectedPrompt, setSelectedPrompt] = useState(null);
  const [editedPrompt, setEditedPrompt] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { scrollY } = useViewportScroll();
  
  // Effets parallax pour différents éléments
  const headerY = useTransform(scrollY, [0, 1000], [0, -20]);
  const cardsY = useTransform(scrollY, [0, 1000], [0, 25]);
  const benefitsY = useTransform(scrollY, [0, 1000], [0, 35]);

  const handleCardClick = (prompt) => {
    setSelectedPrompt(prompt);
    setEditedPrompt(prompt.body);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setTimeout(() => {
      setSelectedPrompt(null);
      setEditedPrompt('');
    }, 300);
  };

  const handleSubmit = () => {
    console.log('Modified prompt:', editedPrompt);
    window.location.href = '/hub';
    handleCloseDialog();
  };

  const duplicatedPrompts = [...legalPrompts, ...legalPrompts];

  const benefits = [
    {
      icon: (
        <svg 
          width="20" 
          height="20"
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          style={{ color: '#fafafa' }}
        >
          <line x1="6" y1="3" x2="6" y2="15"/>
          <circle cx="18" cy="6" r="3"/>
          <circle cx="6" cy="18" r="3"/>
          <path d="m18 9 2.5-2.5"/>
          <path d="m21.5 6.5-2.5 2.5"/>
        </svg>
      ),
      text: "Contribuer à l'évolution des stratégies et frameworks de prompting légal"
    },
    {
      icon: (
        <svg 
          width="20" 
          height="20"
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          style={{ color: '#fafafa' }}
        >
          <circle cx="18" cy="5" r="3"/>
          <circle cx="6" cy="12" r="3"/>
          <circle cx="18" cy="19" r="3"/>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
        </svg>
      ),
      text: "Accéder à un hub gratuit pour partager des prompts et travailler en transparence"
    },
    {
      icon: (
        <svg 
          width="20" 
          height="20"
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          style={{ color: '#fafafa' }}
        >
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
          <circle cx="12" cy="16" r="1"/>
          <path d="m7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
      ),
      text: "Créer vos prompts en privé et garder votre stratégie confidentielle"
    },
    {
      icon: (
        <svg 
          width="20" 
          height="20"
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          style={{ color: '#fafafa' }}
        >
          <polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/>
        </svg>
      ),
      text: "Profiter d'un accès anticipé aux nouvelles collections, les agents légaux arrivent bientôt"
    },
    {
      icon: (
        <svg 
          width="20" 
          height="20"
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          style={{ color: '#fafafa' }}
        >
          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
          <polyline points="10,17 15,12 10,7"/>
          <line x1="15" y1="12" x2="3" y2="12"/>
        </svg>
      ),
      text: "Débloquer des fonctionnalités progressives, incluant modèle légal et intégrations multiples avec les legaltechs"
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      style={{
        minHeight: '100vh',
        width: '100%',
        padding: '4rem 0',
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
          maxWidth: '100%',
          margin: '0 auto',
          opacity: 1,
          visibility: 'visible'
        }}
      >
        <motion.div 
          className="collection-header" 
          style={{ 
            textAlign: 'center', 
            marginBottom: '4rem', 
            padding: '0 2rem',
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
              marginBottom: '1.5rem'
            }}
          >
            COLLECTION
          </h3>
          
          <h2 
            style={{
              fontSize: 'clamp(2rem, 6vw, 4rem)',
              fontWeight: '900',
              color: '#fafafa',
              lineHeight: '1.1',
              marginBottom: '2rem',
              textShadow: '2px 2px 8px rgba(0, 0, 0, 0.6)'
            }}
          >
            JOIN THE LEGAL PROMPTS MOVEMENT
          </h2>

          <p 
            style={{
              fontSize: 'clamp(1rem, 2.2vw, 1.3rem)',
              color: 'rgba(250, 250, 250, 0.9)',
              lineHeight: '1.6',
              marginBottom: '3rem',
              maxWidth: '80ch',
              margin: '0 auto 3rem'
            }}
          >
            Introducing LegalPrompt Archive, our curated collection of advanced legal prompts for 
            AI-powered research, analysis, and professional development. Stay updated — ask for 
            early access to the hub.
          </p>

          <button 
            style={{
              padding: '1.2rem 2.5rem',
              fontSize: '1.1rem',
              fontWeight: '600',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '50px',
              color: '#fafafa',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              marginBottom: '4rem'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.2)';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            Get Early Access <span>→</span>
          </button>
        </motion.div>

        <motion.div 
          style={{ 
            overflow: 'hidden', 
            width: '100%', 
            marginBottom: '4rem',
            y: cardsY
          }}
        >
          <div style={{ 
            display: 'flex',
            width: 'max-content',
            animation: 'scrollLeft 30s linear infinite',
            gap: '2rem',
            padding: '2rem'
          }}>
            {duplicatedPrompts.slice(0, 12).map((prompt, index) => (
              <div 
                key={`top-${index}`}
                onClick={() => handleCardClick(prompt)}
                style={{
                  flex: '0 0 300px',
                  padding: '1.8rem',
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <div 
                  style={{
                    fontSize: '0.9rem',
                    color: 'rgba(250, 250, 250, 0.7)',
                    marginBottom: '0.8rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  {prompt.context}
                </div>
                <h3 
                  style={{
                    fontSize: '1.3rem',
                    fontWeight: '700',
                    color: '#fafafa',
                    marginBottom: '1rem',
                    lineHeight: '1.3'
                  }}
                >
                  {prompt.title}
                </h3>
                <div 
                  style={{
                    fontSize: '1rem',
                    color: 'rgba(250, 250, 250, 0.8)',
                    lineHeight: '1.5',
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical'
                  }}
                >
                  {prompt.body}
                </div>
              </div>
            ))}
          </div>

          <div 
            style={{
              textAlign: 'center',
              margin: '4rem 0',
              opacity: 0.8
            }}
          >
            <div 
              style={{
                fontSize: 'clamp(3rem, 6vw, 5rem)',
                fontWeight: '900',
                color: '#fafafa',
                lineHeight: '1'
              }}
            >
              2025
            </div>
            <div 
              style={{
                fontSize: 'clamp(0.8rem, 1.5vw, 1rem)',
                color: 'rgba(250, 250, 250, 0.6)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginTop: '0.5rem'
              }}
            >
              last update
            </div>
          </div>

          <div style={{ 
            display: 'flex',
            width: 'max-content',
            animation: 'scrollRight 30s linear infinite',
            gap: '2rem',
            padding: '2rem'
          }}>
            {duplicatedPrompts.slice(6, 18).map((prompt, index) => (
              <div 
                key={`bottom-${index}`}
                onClick={() => handleCardClick(prompt)}
                style={{
                  flex: '0 0 300px',
                  padding: '1.8rem',
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <div 
                  style={{
                    fontSize: '0.9rem',
                    color: 'rgba(250, 250, 250, 0.7)',
                    marginBottom: '0.8rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  {prompt.context}
                </div>
                <h3 
                  style={{
                    fontSize: '1.3rem',
                    fontWeight: '700',
                    color: '#fafafa',
                    marginBottom: '1rem',
                    lineHeight: '1.3'
                  }}
                >
                  {prompt.title}
                </h3>
                <div 
                  style={{
                    fontSize: '1rem',
                    color: 'rgba(250, 250, 250, 0.8)',
                    lineHeight: '1.5',
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical'
                  }}
                >
                  {prompt.body}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          style={{ 
            padding: '0 2rem', 
            marginBottom: '4rem',
            y: benefitsY
          }}
        >
          <div style={{ marginBottom: '2rem' }}>
            <span 
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                fontWeight: '700',
                color: '#fafafa',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}
            >
              ABOUT THE PROMPTING ART
            </span>
          </div>
          
          <div 
            style={{
              maxWidth: '80ch',
              margin: '0 auto',
              fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
              lineHeight: '1.7',
              color: 'rgba(250, 250, 250, 0.9)'
            }}
          >
            <p style={{ marginBottom: '1.5rem' }}>
              The art of prompting is not just a technical exercise—it's a strategic method of legal reasoning. 
              By leveraging structured approaches like the IRAC method (Issue, Rule, Application, Conclusion), 
              your AI models yield significantly more precise and contextually relevant results.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              This collection demonstrates how advanced prompting techniques are transforming the practice of law, 
              enabling attorneys to draft, analyze, and argue more effectively. We've designed these prompts to 
              operate across multilingual legal contexts, ensuring flexibility, depth, and compliance in diverse jurisdictions.
            </p>
            <p>
              At the intersection of legal thought and artificial intelligence, prompting becomes not only a tool—but a new legal craft.
            </p>
          </div>
        </motion.div>

        <motion.div 
          style={{ 
            padding: '0 2rem',
            y: benefitsY
          }}
        >
          <div style={{ marginBottom: '2rem' }}>
            <span 
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                fontWeight: '700',
                color: '#fafafa',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}
            >
              BENEFITS FOR HOLDERS
            </span>
          </div>
          
          <div 
            style={{
              display: 'grid',
              gap: '1.5rem',
              maxWidth: '90ch',
              margin: '0 auto'
            }}
          >
            {benefits.map((benefit, index) => (
              <div 
                key={index}
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
                <span
                  style={{
                    fontSize: 'clamp(0.9rem, 1.7vw, 1.05rem)',
                    lineHeight: '1.6',
                    color: 'rgba(250, 250, 250, 0.9)'
                  }}
                >
                  {benefit.text}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <AnimatePresence>
          {isDialogOpen && selectedPrompt && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                backdropFilter: 'blur(10px)',
                zIndex: 1000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem'
              }}
              onClick={handleCloseDialog}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, scale: 0.3, x: '-50%', y: '-50%' }}
                transition={{ type: 'spring', bounce: 0.05, duration: 0.4 }}
                onClick={(e) => e.stopPropagation()}
                style={{
                  background: 'rgba(20, 20, 20, 0.95)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  padding: '2rem',
                  maxWidth: '800px',
                  width: '90%',
                  maxHeight: '80vh',
                  overflow: 'auto'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                  <div>
                    <div style={{ fontSize: '0.9rem', color: 'rgba(250, 250, 250, 0.7)', marginBottom: '0.5rem' }}>
                      {selectedPrompt.context}
                    </div>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#fafafa', margin: 0 }}>
                      {selectedPrompt.title}
                    </h2>
                  </div>
                  <button
                    onClick={handleCloseDialog}
                    aria-label="close"
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#fafafa',
                      fontSize: '2rem',
                      cursor: 'pointer',
                      padding: '0',
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    ×
                  </button>
                </div>
                
                <div>
                  <div style={{ position: 'relative', marginBottom: '2rem' }}>
                    <textarea
                      value={editedPrompt}
                      onChange={(e) => setEditedPrompt(e.target.value)}
                      placeholder="Modifiez votre prompt ici..."
                      autoFocus
                      style={{
                        width: '100%',
                        minHeight: '200px',
                        padding: '1rem',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '12px',
                        color: '#fafafa',
                        fontSize: '1rem',
                        lineHeight: '1.5',
                        resize: 'vertical',
                        fontFamily: 'inherit'
                      }}
                    />
                  </div>
                  
                  <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                    <button
                      onClick={handleCloseDialog}
                      style={{
                        padding: '0.8rem 1.5rem',
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '8px',
                        color: '#fafafa',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      Annuler
                    </button>
                    <button
                      onClick={handleSubmit}
                      style={{
                        padding: '0.8rem 1.5rem',
                        background: 'rgba(255, 255, 255, 0.2)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        borderRadius: '8px',
                        color: '#fafafa',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      Submit →
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CollectionSection;