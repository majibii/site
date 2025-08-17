import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './CollectionSection.css';

const CollectionSection = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const [uniqueId] = useState(() => `collection-${Math.random().toString(36).substr(2, 9)}`);
  const [selectedPrompt, setSelectedPrompt] = useState(null);
  const [editedPrompt, setEditedPrompt] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  // New refs and state for deployment section
  const deploymentBentoRef = useRef(null);
  const deploymentSectionRef = useRef(null);
  const [deploymentScrollProgress, setDeploymentScrollProgress] = useState(0);

  const legalPrompts = [
    // ... (existing prompt data remains unchanged)
  ];

  // ... existing functions (handleCardClick, handleCloseDialog, handleSubmit) remain unchanged

  // PromptIcon remains unchanged
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

  // New deployment icons
  const DeploymentCloudIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
    </svg>
  );
  
  const DeploymentAzureIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
      <path d="M5.5 5L8.5 2L16.5 12L13.5 22L5.5 18L2 12L5.5 5Z" fill="#2f2f2e"/>
      <path d="M8.5 2L22 8L18.5 18L13.5 22L16.5 12L8.5 2Z" fill="#2f2f2e" opacity="0.7"/>
    </svg>
  );
  
  const DeploymentServerIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
      <line x1="6" y1="6" x2="6.01" y2="6"/>
      <line x1="6" y1="18" x2="6.01" y2="18"/>
    </svg>
  );
  
  const getDeploymentIcon = (iconType) => {
    switch (iconType) {
      case 'cloud': return <DeploymentCloudIcon />;
      case 'azure': return <DeploymentAzureIcon />;
      case 'server': return <DeploymentServerIcon />;
      default: return <DeploymentCloudIcon />;
    }
  };

  // New deployment data
  const deploymentOptions = [
    { id: 'saas', icon: 'cloud', title: t('collection.deployment.saas.title', 'SaaS Cloud'), description: t('collection.deployment.saas.description', 'Fully managed solution'), features: ['Instant deployment', 'Automatic updates', 'Pay-as-you-scale', 'SOC2 certified'], recommended: false },
    { id: 'vpc', icon: 'azure', title: t('collection.deployment.vpc.title', 'VPC / Azure'), description: t('collection.deployment.vpc.description', 'Your cloud environment'), features: ['Your cloud, your rules', 'Network isolation', 'Custom compliance', 'Direct control'], recommended: true },
    { id: 'onprem', icon: 'server', title: t('collection.deployment.onprem.title', 'On-Premise'), description: t('collection.deployment.onprem.description', 'Complete control'), features: ['Air-gapped deployment', 'Maximum security', 'Custom infrastructure', 'Regulatory compliance'], recommended: false }
  ];

  // New useEffect for deployment scroll handling
  useEffect(() => {
    const handleScroll = () => {
      if (!deploymentSectionRef.current) return;
      const element = deploymentSectionRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = rect.height;
      const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + elementHeight)));
      setDeploymentScrollProgress(progress);
      if (progress < 0.3) {
        element.className = element.className.replace(/deployment-bg-transition-\w+/g, '') + ' deployment-bg-transition-start';
      } else if (progress < 0.7) {
        element.className = element.className.replace(/deployment-bg-transition-\w+/g, '') + ' deployment-bg-transition-middle';
      } else {
        element.className = element.className.replace(/deployment-bg-transition-\w+/g, '') + ' deployment-bg-transition-end';
      }
    };
    
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    if (deploymentBentoRef.current) observer.observe(deploymentBentoRef.current);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => { 
      observer.disconnect(); 
      window.removeEventListener('scroll', handleScroll); 
    };
  }, []);

  return (
    <>
      <section ref={sectionRef} className="collection-section">
        <div className="collection-content">
          <div className="collection-header">
            {/* ... existing header remains unchanged */}
          </div>

          <div className="cards-container">
            {/* ... existing cards container remains unchanged */}
          </div>

          {/* NEW DEPLOYMENT SECTION - Replaces old embedded version */}
          <div ref={deploymentSectionRef} className="deployment-section-enhanced deployment-bg-transition-start" style={{ minHeight: '100vh', width: '100%', padding: 'clamp(4rem, 8vh, 6rem) 0', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div ref={deploymentBentoRef} className="deployment-bento-container">
              <div style={{ width: '100%', maxWidth: '100%', margin: '0 auto' }}>
                <motion.div className="deployment-bento-header" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                  <h3 className="deployment-bento-subtitle">{t('collection.deployment.sectionLabel', 'DEPLOYMENT OPTIONS')}</h3>
                  <h2 className="deployment-bento-title">{t('collection.deployment.title', 'Deploy in our cloud or yours')}</h2>
                  <p className="deployment-bento-intro">{t('collection.deployment.subtitle', 'Choose the deployment model that best fits your needs.')}</p>
                </motion.div>
                <motion.div className="deployment-main-container" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                  <div className="deployment-platform-label">DEPLOYMENT OPTIONS</div>
                  <div className="deployment-cards-grid-bento">
                    {deploymentOptions.map((option, index) => (
                      <motion.div key={option.id} className={`deployment-option-card ${option.recommended ? 'recommended' : ''}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }}>
                        {option.recommended && <div className="deployment-recommendation-badge">Recommended</div>}
                        <div className="deployment-option-icon">{getDeploymentIcon(option.icon)}</div>
                        <h3 className="deployment-option-title">{option.title}</h3>
                        <p className="deployment-option-description">{option.description}</p>
                        <ul className="deployment-option-features">
                          {option.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="deployment-option-feature">{feature}</li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Benefits Section - remains unchanged */}
          <div className="benefits-section">
            {/* ... existing benefits section */}
          </div>
        </div>

        {/* Modal Dialog - remains unchanged */}
        <AnimatePresence>
          {/* ... existing modal code */}
        </AnimatePresence>
      </section>
    </>
  );
};

export default CollectionSection;
