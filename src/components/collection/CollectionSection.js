import React, { useRef } from 'react';
import { useInViewport } from '../../hooks/useInViewport';
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
  }
];

const CollectionSection = () => {
  const sectionRef = useRef(null);
  const isVisible = useInViewport(sectionRef, false, { threshold: 0.2 });

  return (
    <section ref={sectionRef} className={`collection-section ${isVisible ? 'visible' : ''}`}>
      <div className="collection-content">
        <div className="collection-header">
          <h3 className="section-label">COLLECTION</h3>
        </div>

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

        <div className="cards-container">
          <div className="cards-row top">
            {legalPrompts.slice(0, 3).map((prompt, index) => (
              <div key={index} className="prompt-card">
                <div className="card-context">{prompt.context}</div>
                <h3 className="card-title">{prompt.title}</h3>
                <div className="card-body">{prompt.body}</div>
              </div>
            ))}
          </div>

          <div className="cards-row bottom">
            {legalPrompts.slice(3, 6).map((prompt, index) => (
              <div key={index} className="prompt-card">
                <div className="card-context">{prompt.context}</div>
                <h3 className="card-title">{prompt.title}</h3>
                <div className="card-body">{prompt.body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;