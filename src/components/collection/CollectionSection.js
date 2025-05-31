import React, { useRef, useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Zoom, // Modifié: Import de Zoom au lieu de Fade
  Backdrop
} from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import './CollectionSection.css';

const useStyles = makeStyles((theme) => ({
  dialog: {
    '& .MuiDialog-paper': {
      maxWidth: '800px',
      width: '90%',
      maxHeight: '80vh',
      borderRadius: '16px',
      overflow: 'hidden',
    },
  },
  backdrop: {
    backdropFilter: 'blur(8px)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  dialogTitle: {
    padding: '24px 24px 16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderBottom: '1px solid #eee',
  },
  titleSection: {
    flex: 1,
  },
  contextText: {
    fontSize: '0.875rem',
    color: '#666',
    marginBottom: '8px',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
  },
  titleText: {
    fontSize: '1.5rem',
    fontWeight: 600,
    color: '#000',
    margin: 0,
  },
  closeButton: {
    padding: '8px',
    marginLeft: '16px',
  },
  dialogContent: {
    padding: '24px',
    fontSize: '1.125rem',
    lineHeight: 1.7,
    color: '#333',
  },
}));

// NOUVEAU: Composant pour l'icône du prompt
const PromptIcon = () => (
    <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="prompt-icon"
    >
        <path d="M7.41 13.41L6 12l1.41-1.41L10.83 12 7.41 15.41 6 14l1.41-1.41zM12 18h-2v-2h2v2zm-4-4h-2v-2h2v2zm-4-4H2V8h2v2z" transform="translate(2, 0) scale(0.9)"/>
        <path d="M13 18v-2h8v2h-8z" transform="translate(2, 0) scale(0.9)"/>
    </svg>
);


const legalPrompts = [
  // ... (votre liste de prompts reste inchangée)
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
    body: "Explain the legal mechanics and implications of full-ratchet and weighted-average anti-dilution clauses in a Series A term sheet."
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
  const classes = useStyles();
  const [selectedPrompt, setSelectedPrompt] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleCardClick = (prompt) => {
    setSelectedPrompt(prompt);
    setDialogOpen(true);
    const cardsRows = document.querySelectorAll('.cards-row');
    cardsRows.forEach(row => {
      row.style.animationPlayState = 'paused';
    });
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setTimeout(() => {
      setSelectedPrompt(null);
      const cardsRows = document.querySelectorAll('.cards-row');
      cardsRows.forEach(row => {
        row.style.animationPlayState = 'running';
      });
    }, 300);
  };
  
  return (
    <section ref={sectionRef} className="collection-section">
      {/* ... (le reste de votre JSX avant le Dialog reste inchangé) */}
      
      <div className="collection-content">
        <div className="collection-header">
          <h3 className="section-label">COLLECTION</h3>
          
          <h2 className="collection-title">
            JOIN THE LEGAL PROMPTS MOVEMENT
          </h2>

          <p className="collection-intro">
            Introducing LegalPrompt Archive, our curated collection of advanced legal prompts for 
            AI-powered research, analysis, and professional development. Stay updated — ask for 
            early access to the hub.
          </p>

          <button className="early-access-button">
            Get Early Access <span>→</span>
          </button>
        </div>

        <div className="cards-container">
          <div className="cards-row top">
            {legalPrompts.slice(0, 6).map((prompt, index) => (
              <div 
                key={index} 
                className="prompt-card clickable"
                onClick={() => handleCardClick(prompt)}
              >
                <div className="card-context">{prompt.context}</div>
                <h3 className="card-title">{prompt.title}</h3>
                <div className="card-body">{prompt.body}</div>
              </div>
            ))}
          </div>

          <div className="statistics-section compact">
            <div className="stats-container">
              <div className="stat-item">
                <div className="stat-number">200+</div>
                <div className="stat-label">prompts</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">+12</div>
                <div className="stat-label">languages</div>
              </div>
            </div>
          </div>

          <div className="cards-row bottom">
            {legalPrompts.slice(6, 12).map((prompt, index) => (
              <div 
                key={index} 
                className="prompt-card clickable"
                onClick={() => handleCardClick(prompt)}
              >
                <div className="card-context">{prompt.context}</div>
                <h3 className="card-title">{prompt.title}</h3>
                <div className="card-body">{prompt.body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Dialog Modal */}
      <Dialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        className={classes.dialog}
        TransitionComponent={Zoom} // Modifié: Utilisation de Zoom pour la transition
        TransitionProps={{
          timeout: 400,
        }}
        BackdropComponent={Backdrop}
        BackdropProps={{
          className: classes.backdrop,
          timeout: 400,
        }}
        maxWidth={false}
      >
        {selectedPrompt && (
          <>
            <DialogTitle className={classes.dialogTitle} disableTypography>
              <div className={classes.titleSection}>
                <div className={classes.contextText}>
                  {selectedPrompt.context}
                </div>
                <h2 className={classes.titleText}>
                  {selectedPrompt.title}
                </h2>
              </div>
              <IconButton
                className={classes.closeButton}
                onClick={handleCloseDialog}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent className={classes.dialogContent}>
              {/* NOUVEAU: Conteneur pour l'icône et le texte */}
              <div className="prompt-content-container">
                <PromptIcon />
                <p>{selectedPrompt.body}</p>
              </div>
            </DialogContent>
          </>
        )}
      </Dialog>
    </section>
  );
};

export default CollectionSection;
