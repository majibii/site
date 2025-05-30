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
  const isVisible = useInViewport(sectionRef, false, { threshold: 0.2 });

  return (
    <section ref={sectionRef} className={`collection-section ${isVisible ? 'visible' : ''}`}>
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
              <div key={index} className="prompt-card">
                <div className="card-context">{prompt.context}</div>
                <h3 className="card-title">{prompt.title}</h3>
                <div className="card-body">{prompt.body}</div>
              </div>
            ))}
          </div>

          <div className="cards-row bottom">
            {legalPrompts.slice(6, 12).map((prompt, index) => (
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