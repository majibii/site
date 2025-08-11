import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './CollectionSection.css';

const CollectionSection = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  // Remplace useId() par useState pour React 16
  const [uniqueId] = useState(() => `collection-${Math.random().toString(36).substr(2, 9)}`);
  const [selectedPrompt, setSelectedPrompt] = useState(null);
  const [editedPrompt, setEditedPrompt] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const legalPrompts = [
    // LEGAL
    {
      title: t('collection.prompts.contractAnalysis.title'),
      context: t('collection.prompts.contractAnalysis.context'),
      body: t('collection.prompts.contractAnalysis.body')
    },
    {
      title: t('collection.prompts.caseLawResearch.title'),
      context: t('collection.prompts.caseLawResearch.context'),
      body: t('collection.prompts.caseLawResearch.body')
    },

    // PRODUCTIVITY
    {
      title: t('collection.prompts.meetingPrep.title'),
      context: t('collection.prompts.meetingPrep.context'),
      body: t('collection.prompts.meetingPrep.body')
    },
    {
      title: t('collection.prompts.wikiBuilder.title'),
      context: t('collection.prompts.wikiBuilder.context'),
      body: t('collection.prompts.wikiBuilder.body')
    },

    // COMPLIANCE
    {
      title: t('collection.prompts.auditTrail.title'),
      context: t('collection.prompts.auditTrail.context'),
      body: t('collection.prompts.auditTrail.body')
    },
    {
      title: t('collection.prompts.supplierCompliance.title'),
      context: t('collection.prompts.supplierCompliance.context'),
      body: t('collection.prompts.supplierCompliance.body')
    },

    // BUSINESS OPS
    {
      title: t('collection.prompts.quotationAgent.title'),
      context: t('collection.prompts.quotationAgent.context'),
      body: t('collection.prompts.quotationAgent.body')
    },
    {
      title: t('collection.prompts.clientOnboarding.title'),
      context: t('collection.prompts.clientOnboarding.context'),
      body: t('collection.prompts.clientOnboarding.body')
    },

    // STRATEGY / R&D
    {
      title: t('collection.prompts.techIntelligence.title'),
      context: t('collection.prompts.techIntelligence.context'),
      body: t('collection.prompts.techIntelligence.body')
    },

    // PUBLIC SECTOR / TENDERS
    {
      title: t('collection.prompts.rfpDrafting.title'),
      context: t('collection.prompts.rfpDrafting.context'),
      body: t('collection.prompts.rfpDrafting.body')
    },

    // ADDITIONAL
    {
      title: t('collection.prompts.esgCompliance.title'),
      context: t('collection.prompts.esgCompliance.context'),
      body: t('collection.prompts.esgCompliance.body')
    },
    {
      title: t('collection.prompts.dataPrivacyAudit.title'),
      context: t('collection.prompts.dataPrivacyAudit.context'),
      body: t('collection.prompts.dataPrivacyAudit.body')
    }
  ];

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
    // Save the modified prompt
    console.log('Modified prompt:', editedPrompt);
    
    // Redirect to hub
    window.location.href = '/hub'; // Adjust URL according to your routing
    
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
      <section ref={sectionRef} className="collection-section">
        <div className="collection-content">
          <div className="collection-header">
            <h3 className="section-label">{t('collection.sectionLabel')}</h3>
            
            <h2 className="collection-title">
              {t('collection.title')}
            </h2>

            <p className="collection-intro">
              {t('collection.subtitle')}
            </p>

            <button className="early-access-button">
              <div className="button-content">
                <span className="arrow-left">→</span>
                <span className="button-text">
                  {t('collection.cta')}
                  <span className="arrow-right">→</span>
                </span>
              </div>
            </button>
          </div>

          <div className="cards-container">
            <div className="cards-row top">
              {legalPrompts.slice(0, 6).map((prompt, index) => (
                <div 
                  key={index} 
                  className="prompt-card"
                  onClick={() => handleCardClick(prompt)}
                >
                  <div className="card-context">{prompt.context}</div>
                  <h3 className="card-title">{prompt.title}</h3>
                  <div className="card-body">{prompt.body}</div>
                </div>
              ))}
            </div>

            {/* Time Indicator */}
            <div className="time-indicator">
              <div className="year-text">2025</div>
              <div className="last-update-text">{t('collection.lastUpdate')}</div>
            </div>

            <div className="cards-row bottom">
              {legalPrompts.slice(6, 12).map((prompt, index) => (
                <div 
                  key={index} 
                  className="prompt-card"
                  onClick={() => handleCardClick(prompt)}
                >
                  <div className="card-context">{prompt.context}</div>
                  <h3 className="card-title">{prompt.title}</h3>
                  <div className="card-body">{prompt.body}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Editorial Section */}
          <div className="editorial-section">
            <div className="editorial-line">
              <span className="editorial-title">{t('collection.editorial.title')}</span>
            </div>
            
            <div className="editorial-content">
              <p>
                {t('collection.editorial.paragraph1')}
              </p>
              <p>
                {t('collection.editorial.paragraph2')}
              </p>
              <p>
                {t('collection.editorial.paragraph3')}
              </p>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="benefits-section">
            <div className="benefits-title-line">
              <span className="benefits-title">{t('collection.benefits.title')}</span>
            </div>
            
            <div className="benefits-list">
              <div className="benefits-item">
                <div className="benefit-icon-circle">
                  <svg className="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"/>
                  </svg>
                </div>
                <span>{t('collection.benefits.item1')}</span>
              </div>
              <div className="benefits-item">
                <div className="benefit-icon-circle">
                  <svg className="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
                    <circle cx="16" cy="11" r="3"/>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                  </svg>
                </div>
                <span>{t('collection.benefits.item2')}</span>
              </div>
              <div className="benefits-item">
                <div className="benefit-icon-circle">
                  <svg className="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <circle cx="12" cy="16" r="1"/>
                    <path d="M7 11V7A5 5 0 0 1 17 7V11"/>
                  </svg>
                </div>
                <span>{t('collection.benefits.item3')}</span>
              </div>
              <div className="benefits-item">
                <div className="benefit-icon-circle">
                  <svg className="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z"/>
                  </svg>
                </div>
                <span>{t('collection.benefits.item4')}</span>
              </div>
              <div className="benefits-item">
                <div className="benefit-icon-circle">
                  <svg className="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2V6"/>
                    <path d="M12 18V22"/>
                    <path d="M4.93 4.93L7.76 7.76"/>
                    <path d="M16.24 16.24L19.07 19.07"/>
                    <path d="M2 12H6"/>
                    <path d="M18 12H22"/>
                    <path d="M4.93 19.07L7.76 16.24"/>
                    <path d="M16.24 7.76L19.07 4.93"/>
                  </svg>
                </div>
                <span>{t('collection.benefits.item5')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Dialog with animation */}
        <AnimatePresence>
          {isDialogOpen && selectedPrompt && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="modal-overlay"
              onClick={handleCloseDialog}
            >
              <motion.div
                initial={{ 
                  opacity: 0,
                  scale: 0.3,
                  x: '-50%',
                  y: '-50%'
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
                      placeholder={t('collection.modal.placeholder')}
                      autoFocus
                    />
                  </div>
                  
                  <div className="modal-actions">
                    <button
                      className="action-button cancel-button"
                      onClick={handleCloseDialog}
                    >
                      {t('collection.modal.cancel')}
                    </button>
                    <button
                      className="action-button submit-button"
                      onClick={handleSubmit}
                    >
                      {t('collection.modal.submit')} →
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

// Export par défaut pour que l'import fonctionne
export default CollectionSection;
