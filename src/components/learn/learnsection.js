import React from 'react';
import './learnsection.css';

const LearnSection = () => {
  return (
    <div className="learn-section">
      <div className="learn-container">
        {/* Main Title */}
        <h1 className="learn-shiny-title">
          Working EggOn Lab
        </h1>

        {/* Introduction */}
        <p className="learn-body-text">
          EggOn Lab is dedicated to the governance and traceability of artificial intelligence agents through a next-generation orchestrator.
        </p>
        <p className="learn-body-text">
          We are building a future where professionals — especially in law, finance, and healthcare — can deploy AI agents that are certified compliant, auditable, and insurable.
        </p>
        <p className="learn-body-text">
          We are engineers and builders who have worked for some of the most secure tech companies, including iManage, and for industry leaders as Traceability System Experts and Quality Engineers.
        </p>

        {/* Subtitle 1 */}
        <div className="learn-section-subtitle">
          <span className="learn-section-subtitle-text">
            Legitimacy in AI Is About More Than Right or Wrong Answers
          </span>
        </div>

        <p className="learn-body-text">
          AI capabilities are advancing at an unprecedented pace, but one major problem remains: opacity.
        </p>

        <p className="learn-body-text">
          This opacity is even more concerning as AI enters sectors that are not like any other industries: justice and healthcare. These are the foundations of a free and fair society.
        </p>
        <p className="learn-body-text">
          Every day, courts make decisions that change the course of human lives. Such decisions demand empathy, experience, and context — but also a process that feels legitimate to those affected.
        </p>
        <p className="learn-body-text">
          No family should ever wonder if they lost custody because of a poorly calibrated algorithm. No patient should ever doubt that their treatment was decided after genuine human evaluation.
        </p>

        <p className="learn-body-text">
          The real issue isn't simply whether AI gives the right or wrong answer — it's doubt. And once doubt sets in, it erodes trust and undermines the legitimacy of our systems.
        </p>

        {/* Subtitle 2 */}
        <div className="learn-section-subtitle">
          <span className="learn-section-subtitle-text">
            AI That Works for Everyone
          </span>
        </div>

        <p className="learn-body-text">
          Knowledge of how AI agents operate and make decisions must not remain concentrated in a few labs.
        </p>
        <p className="learn-body-text">
          This lack of transparency slows adoption in high-responsibility professions, and the absence of explainability makes insuring AI-driven processes impossible.
        </p>
        <p className="learn-body-text">
          To bridge this gap, we created N.O.G (Nested Orchestration & Governance) — a platform designed to understand, audit, and certify AI agents.
        </p>

        {/* Subtitle 3 */}
        <div className="learn-section-subtitle">
          <span className="learn-section-subtitle-text">
            Solid Legitimacy Matters
          </span>
        </div>

        <div className="learn-principle-title">
          <span className="learn-bold-text">Explicability</span>
        </div>
        <p className="learn-body-text">
          Every task executed by an AI agent must be understandable and explainable. Users must be able to trace the full reasoning and verify its legitimacy.
        </p>

        <div className="learn-principle-title">
          <span className="learn-bold-text">Accessibility</span>
        </div>
        <p className="learn-body-text">
          Explainability only matters if it's shared. Results and supporting evidence must be easy to access for everyone impacted by a decision.
        </p>

        <div className="learn-principle-title">
          <span className="learn-bold-text">Recall</span>
        </div>
        <p className="learn-body-text">
          If bias, error, or manipulation is detected, the system must allow for immediate recall — just like product recalls in critical industries. Governed AI should never be irreversible.
        </p>

        <div className="learn-principle-title">
          <span className="learn-bold-text">Speed</span>
        </div>
        <p className="learn-body-text">
          Compliance must not slow innovation. Explainable AI should be as fast as it is powerful, accelerating adoption while building trust.
        </p>

        {/* Subtitle 4 */}
        <div className="learn-section-subtitle">
          <span className="learn-section-subtitle-text">
            Growth Step by Step
          </span>
        </div>

        <p className="learn-body-text">
          <span className="learn-bold-text">Engineering and product co-design</span> enable iterative improvement through deployment, while great products and partner feedback strengthen each other. Products keep us grounded in reality and guide us to solve the most impactful problems with our design partners.
        </p>

        <p className="learn-body-text">
          <span className="learn-bold-text">Empirical and iterative approach</span> to explainable AI is the most effective and reliable measures come from a combination of proactive development and feedback from careful real-world testing with experienced professionals.
        </p>

        <p className="learn-body-text">
          We plan to contribute to AI legitimacy by (1) maintaining a high security bar — preventing attacks, (2) sharing best practices and frameworks for building safe AI systems with our clients, and (3) accelerating new types of certifications on alignment by sharing our new reference standards and agent specifications.
        </p>

        <p className="learn-body-text">
          We believe that methods developed for today's systems, such as effective red-teaming and post-deployment monitoring, provide valuable insights that will extend to future, more explainable systems.
        </p>

        {/* Subtitle 5 */}
        <div className="learn-section-subtitle">
          <span className="learn-section-subtitle-text">
            Measure what truly matters
          </span>
        </div>

        <p className="learn-body-text">
          We will focus on understanding how our systems create genuine value in the real world. The most important breakthroughs often come from rethinking our objectives, not just optimizing existing metrics.
        </p>

        {/* Subtitle 6 */}
        <div className="learn-section-subtitle">
          <span className="learn-section-subtitle-text">
            Be Design Partners
          </span>
        </div>

        <p className="learn-body-text">
          If you are a law firm or compliance professional interested in becoming a design partner, click here: <span className="learn-design-partner-link">Be Design Partners</span>.
        </p>
      </div>
    </div>
  );
};

export default LearnSection;
