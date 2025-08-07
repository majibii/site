.legal-stack-section {
  position: relative;
  overflow: hidden;
}

/* Correction pour éviter les rectangles noirs dans les cartes */
.benefit-card,
.benefit-card *,
.benefit-card *::before,
.benefit-card *::after {
  background: transparent !important;
  background-color: transparent !important;
}

.benefit-card:hover,
.benefit-card:hover *,
.benefit-card:hover *::before,
.benefit-card:hover *::after {
  background: transparent !important;
  background-color: transparent !important;
}

.benefit-card:focus,
.benefit-card:focus *,
.benefit-card:focus *::before,
.benefit-card:focus *::after {
  background: transparent !important;
  background-color: transparent !important;
  outline: none !important;
}

.benefit-card:active,
.benefit-card:active *,
.benefit-card:active *::before,
.benefit-card:active *::after {
  background: transparent !important;
  background-color: transparent !important;
}

/* Empêcher la sélection de créer des backgrounds */
.benefit-card ::selection {
  background: #fce96b !important;
  color: #fafafa !important;
}

.benefit-card ::-moz-selection {
  background: #fce96b !important;
  color: #fafafa !important;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .legal-stack-section {
    padding: clamp(3rem, 6vh, 4rem) clamp(0.5rem, 2vw, 1rem);
  }
}

@media (max-width: 480px) {
  .legal-stack-section {
    padding: clamp(2rem, 4vh, 3rem) 1rem;
  }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  .legal-stack-section *,
  .legal-stack-section *::before,
  .legal-stack-section *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Performance optimizations */
@media (prefers-reduced-motion: no-preference) {
  .legal-stack-section {
    transform: translateZ(0);
    backface-visibility: hidden;
    perspective: 1000px;
  }
}
