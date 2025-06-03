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

  const duplicatedPrompts = [...legalPrompts, ...legalPrompts];

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
        <div className="collection-header" style={{ textAlign: 'center', marginBottom: '4rem', padding: '0 2rem' }}>
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
        </div>

        <div style={{ overflow: 'hidden', width: '100%', marginBottom: '4rem' }}>
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
        </div>

        <div style={{ padding: '0 2rem', marginBottom: '4rem' }}>
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
        </div>

        <div style={{ padding: '0 2rem' }}>
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
            {[
              "Contribute to the evolution of legal prompting strategies and frameworks",
              "Access a free hub for share prompts and work for transparency",
              "Create your prompts in private and keep your strategy",
              "Enjoy early access to new prompt collections, the legal agents will coming soon",
              "Unlock progressive roadmap features, including legal model, multiple integrations with legaltechs"
            ].map((benefit, index) => (
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
                  <svg 
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