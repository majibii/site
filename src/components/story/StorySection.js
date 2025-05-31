import React, { useRef } from 'react';
import { Logo } from '../logo/Logo';
import { useInViewport } from '../../hooks/useInViewport';
import './StorySection.css';

const DialogueBubbles = [
  {
    id: 1,
    text: "You've tried building legal workflows with LLMs.\nThey seemed powerful — until the outputs started drifting.",
    animation: "fade-scale"
  },
  {
    id: 2,
    text: "Prompts quickly turned into fragile chains.\nOne change, and everything broke. You lost trust.",
    animation: "slide-left"
  },
  {
    id: 3,
    text: "You needed agents to specialize — in tax law, contracts, compliance.\nBut they couldn't talk to each other. Or worse, they did — without governance.",
    animation: "slide-right"
  },
  {
    id: 4,
    text: "Debugging was a black box.\nWhy did the agent cite that clause? Why did it skip that paragraph?\nNo trace. No audit. No accountability.",
    animation: "fade-up"
  },
  {
    id: 5,
    text: "Evaluating quality felt like guesswork.\nAnd when you involved humans, tracking feedback was a mess.",
    animation: "bounce"
  },
  {
    id: 6,
    text: "Even in production, things didn't get easier.\nErrors hid in logs, reviews were manual, and oversight slipped.",
    animation: "scale"
  },
  {
    id: 7,
    text: "That's why we built LegalHub:\nA traceable, modular, and governable platform for legal prompts and agents.\nFrom prompt engineering to evaluation and automation —\nfinally, a legal-grade AI stack you can trust.",
    animation: "glow"
  }
];

const StorySection = () => {
  const sectionRef = useRef(null);
  const isVisible = useInViewport(sectionRef, false, { threshold: 0.2 });
  
  return (
    <section ref={sectionRef} className={`story-section ${isVisible ? 'visible' : ''}`}>
      <div className="story-content">
        <div className="story-header">
          <h3 className="section-label">Story</h3>
          <div className="header-line"></div>
        </div>

        <h2 className="story-title">
          The Legal LLM Journey — And Why It Fails (Until Now)
        </h2>

        <p className="story-intro">
          You've heard about legal AI. Maybe you've tried it. But do you really understand where it fits? 
          Can you explain what it does — or why it fails? Let's find out.
        </p>

        <div className="sticky-logo">
          <Logo />
        </div>

        <div className="dialogue-container">
          {DialogueBubbles.map((bubble) => (
            <div 
              key={bubble.id}
              className={`dialogue-bubble ${bubble.animation}`}
              data-bubble-id={bubble.id}
            >
              {bubble.text.split('\n').map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorySection;
