import React from 'react';
import './NOGProjectSection.css';

const NOGProjectSection = () => {
  return (
    <section 
      className="nog-project-section"
      style={{ backgroundColor: '#fce96b' }}
    >
      <div className="nog-content">
        <div className="nog-main-content">
          <h1 className="nog-title">
            <span className="highlight">
              N.O.G<br />PROJECT
            </span>
          </h1>
          <p className="nog-description">
            A unique collection of legal prompts and agents, built for real-world legal practice. 
            Inspired by orchestration principles, the N.O.G Project offers a specialized framework 
            to build, test, and govern legal agents and intelligent chains.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NOGProjectSection;
