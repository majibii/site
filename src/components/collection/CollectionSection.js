import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [uniqueId] = useState(() => `collection-${Math.random().toString(36).substr(2, 9)}`);
  const [selectedPrompt, setSelectedPrompt] = useState(null);
  const [editedPrompt, setEditedPrompt] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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

  const PromptIcon = () => (
    <svg 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
      className="prompt-icon"
    >
      <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"/>
    </svg>
  );

  return (
    <>
      <section 
        ref={sectionRef} 
        className="collection-section"
        style={{
          minHeight: '100vh',
          width: '100%',
          padding: 'clamp(2rem, 5vh, 4rem) clamp(1rem, 3vw, 2rem)',
          backgroundColor: 'transparent',
          color: '#fafafa',
          position: 'relative',
          // Assure la visibilité immédiate
          opacity: 1,
          visibility: 'visible'
        }}
      >
        <div 
          className="collection-content"
          style={{
            width: '100%',
            maxWidth: '1400px',
            margin: '0 auto',
            // Assure la visibilité du contenu
            opacity: 1,
            visibility: 'visible'
          }}
        >
          <div className="collection-header" style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 6vh, 5rem)' }}>
            <h3 
              className="section-label"
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
              className="collection-title"
              style={{
                fontSize: 'clamp(2rem, 6vw, 4rem)',
                fontWeight: '900',
                color: '#fafafa',
                lineHeight: '1.1',
                marginBottom: 'clamp(1.5rem, 3vh, 2rem)',
                textShadow: '2px 2px 8px rgba(0, 0, 0, 0.6)'
              }}
            >
              JOIN THE LEGAL PROMPTS MOVEMENT
            </h2>

            <p 
              className="collection-intro"
              style={{
                fontSize: 'clamp(1rem, 2.2vw, 1.3rem)',
                color: 'rgba(250, 250, 250, 0.9)',
                lineHeight: '1.6',
                marginBottom: 'clamp(2rem, 4vh, 3rem)',
                maxWidth: '80ch',
                margin: '0 auto clamp(2rem, 4vh, 3rem) auto'
              }}
            >
              Introducing LegalPrompt Archive, our curated collection of advanced legal prompts for 
              AI-powered research, analysis, and professional development. Stay updated — ask for 
              early access to the hub.
            </p>

            <button 
              className="early-access-button"
              style={{
                padding: 'clamp(0.8rem, 2vw, 1.2rem) clamp(1.5rem, 3vw, 2.5rem)',
                fontSize: 'clamp(0.9rem, 1.8vw, 1.1rem)',
                fontWeight: '600',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '50px',
                color: '#fafafa',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                marginBottom: 'clamp(3rem, 6vh, 4rem)'
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
          </div>

          <div className="cards-container">
            <div 
              className="cards-row top"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: 'clamp(1rem, 2vw, 1.5rem)',
                marginBottom: 'clamp(2rem, 4vh, 3rem)'
              }}
            >
              {legalPrompts.slice(0, 6).map((prompt, index) => (
                <div 
                  key={index} 
                  className="prompt-card"
                  onClick={() => handleCardClick(prompt)}
                  style={{
                    padding: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                    background: 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '16px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    // Assure la visibilité
                    opacity: 1,
                    visibility: 'visible'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-8px)';
                    e.target.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <div 
                    className="card-context"
                    style={{
                      fontSize: 'clamp(0.75rem, 1.5vw, 0.9rem)',
                      color: 'rgba(250, 250, 250, 0.7)',
                      marginBottom: '0.8rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}
                  >
                    {prompt.context}
                  </div>
                  <h3 
                    className="card-title"
                    style={{
                      fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                      fontWeight: '700',
                      color: '#fafafa',
                      marginBottom: '1rem',
                      lineHeight: '1.3'
                    }}
                  >
                    {prompt.title}
                  </h3>
                  <div 
                    className="card-body"
                    style={{
                      fontSize: 'clamp(0.85rem, 1.6vw, 1rem)',
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

            {/* Time Indicator */}
            <div 
              className="time-indicator"
              style={{
                textAlign: 'center',
                margin: 'clamp(3rem, 6vh, 4rem) 0',
                opacity: 0.6
              }}
            >
              <div 
                className="year-text"
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  fontWeight: '900',
                  color: '#fafafa'
                }}
              >
                2025
              </div>
              <div 
                className="last-update-text"
                style={{
                  fontSize: 'clamp(0.8rem, 1.5vw, 1rem)',
                  color: 'rgba(250, 250, 250, 0.6)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}
              >
                last update
              </div>
            </div>

            <div 
              className="cards-row bottom"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: 'clamp(1rem, 2vw, 1.5rem)',
                marginBottom: 'clamp(3rem, 6vh, 4rem)'
              }}
            >
              {legalPrompts.slice(6, 12).map((prompt, index) => (
                <div 
                  key={index} 
                  className="prompt-card"
                  onClick={() => handleCardClick(prompt)}
                  style={{
                    padding: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                    background: 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '16px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    // Assure la visibilité
                    opacity: 1,
                    visibility: 'visible'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-8px)';
                    e.target.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <div 
                    className="card-context"
                    style={{
                      fontSize: 'clamp(0.75rem, 1.5vw, 0.9rem)',
                      color: 'rgba(250, 250, 250, 0.7)',
                      marginBottom: '0.8rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}
                  >
                    {prompt.context}
                  </div>
                  <h3 
                    className="card-title"
                    style={{
                      fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                      fontWeight: '700',
                      color: '#fafafa',
                      marginBottom: '1rem',
                      lineHeight: '1.3'
                    }}
                  >
                    {prompt.title}
                  </h3>
                  <div 
                    className="card-body"
                    style={{
                      fontSize: 'clamp(0.85rem, 1.6vw, 1rem)',
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
          </div>

          {/* Editorial Section */}
          <div className="editorial-section" style={{ marginBottom: 'clamp(3rem, 6vh, 4rem)' }}>
            <div className="editorial-line" style={{ marginBottom: '2rem' }}>
              <span 
                className="editorial-title"
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
              className="editorial-content"
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
          </div>

          {/* Benefits Section */}
          <div className="benefits-section">
            <div className="benefits-title-line" style={{ marginBottom: '2rem' }}>
              <span 
                className="benefits-title"
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
              className="benefits-list"
              style={{
                display: 'grid',
                gap: '1.5rem',
                maxWidth: '90ch',
                margin: '0 auto'
              }}
            >
              {[
                "Contribute to the evolution of legal prompting strategies and frameworks",
                "Access a free hub for share prompts and work for transparency",
                "Create your prompts in private and keep your strategy",
                "Enjoy early access to new prompt collections, the legal agents will coming soon",
                "Unlock progressive roadmap features, including legal model, multiple integrations with legaltechs"
              ].map((benefit, index) => (
                <div 
                  key={index}
                  className="benefits-item"
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem'
                  }}
                >
                  <div 
                    className="benefit-icon-circle"
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
                    <svg 
                      className="benefit-icon" 
                      width="20" 
                      height="20"
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                      style={{ color: '#fafafa' }}
                    >
                      <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"/>
                    </svg>
                  </div>
                  <span
                    style={{
                      fontSize: 'clamp(0.9rem, 1.7vw, 1.05rem)',
                      lineHeight: '1.6',
                      color: 'rgba(250, 250, 250, 0.9)'
                    }}
                  >
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Dialog avec animation */}
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
                initial={{ 
                  opacity: 0,
                  scale: 0.3
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                  y: 0
                }}
                exit={{ 
                  opacity: 0,
                  scale: 0.3,
                  x: '-50%',
                  y: '-50%'
                }}
                transition={{ 
                  type: 'spring', 
                  bounce: 0.05, 
                  duration: 0.4 
                }}
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="modal-header">
                  <div className="modal-title-section">
                    <div className="modal-context">
                      {selectedPrompt.context}
                    </div>
                    <h2 className="modal-title">
                      {selectedPrompt.title}
                    </h2>
                  </div>
                  <button
                    className="close-button"
                    onClick={handleCloseDialog}
                    aria-label="close"
                  >
                    ×
                  </button>
                </div>
                
                <div className="modal-body">
                  <div className="prompt-textarea-container">
                    <PromptIcon />
                    <textarea
                      className="prompt-textarea"
                      value={editedPrompt}
                      onChange={(e) => setEditedPrompt(e.target.value)}
                      placeholder="Modifiez votre prompt ici..."
                      autoFocus
                    />
                  </div>
                  
                  <div className="modal-actions">
                    <button
                      className="action-button cancel-button"
                      onClick={handleCloseDialog}
                    >
                      Annuler
                    </button>
                    <button
                      className="action-button submit-button"
                      onClick={handleSubmit}
                    >
                      Submit →
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
};

export default CollectionSection;
