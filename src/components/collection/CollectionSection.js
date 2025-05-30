import React, { useRef } from 'react';
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
  
  return (
    <section ref={sectionRef} className="collection-section">
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

          {/* Statistics Section */}
          <div className="statistics-section">
            <div className="stats-container">
              <div className="stat-item">
                <div className="stat-number">200+</div>
                <div className="stat-label">prompts</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">Specialized agents</div>
                <div className="stat-label">+20 AI-powered roles</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">+12</div>
                <div className="stat-label">languages</div>
              </div>
            </div>
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

        {/* Editorial Section */}
        <div className="editorial-section">
          <div className="editorial-line">
            <span className="editorial-title">ABOUT THE PROMPTING ART</span>
          </div>
          
          <div className="editorial-content">
            <p>
              The art of prompting is not just a technical exercise—it's a strategic method of legal reasoning. 
              By leveraging structured approaches like the IRAC method (Issue, Rule, Application, Conclusion), 
              your AI models yield significantly more precise and contextually relevant results.
            </p>
            <p>
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
          <div className="benefits-title-line">
            <span className="benefits-title">BENEFITS FOR HOLDERS</span>
          </div>
          
          <div className="benefits-list">
            <div className="benefits-item">
              <svg className="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"/>
              </svg>
              <span>Contribute to the evolution of legal prompting strategies and frameworks</span>
            </div>
            <div className="benefits-item">
              <svg className="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 16V8A2 2 0 0 0 19 6H5A2 2 0 0 0 3 8V16A2 2 0 0 0 5 18H19A2 2 0 0 0 21 16Z"/>
                <path d="M16 2V6"/>
                <path d="M8 2V6"/>
                <path d="M3 10H21"/>
              </svg>
              <span>Access a free hub for share prompts and work for transparency</span>
            </div>
            <div className="benefits-item">
              <svg className="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <circle cx="12" cy="16" r="1"/>
                <path d="M7 11V7A5 5 0 0 1 17 7V11"/>
              </svg>
              <span>Create your prompts in private and keep your strategy</span>
            </div>
            <div className="benefits-item">
              <svg className="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z"/>
              </svg>
              <span>Enjoy early access to new prompt collections, the legal agents will coming soon</span>
            </div>
            <div className="benefits-item">
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
              <span>Unlock progressive roadmap features, including legal model, multiple integrations with legaltechs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
