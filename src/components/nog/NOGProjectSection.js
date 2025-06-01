import React from 'react';

const NOGProjectSection = () => {
  // Génération des 60 rectangles avec 5-6 types de hauteurs alternées
  const generateRectangles = () => {
    const rectangles = [];
    const heights = [0.2, 0.3, 0.4, 0.5, 0.6, 0.8];
    
    for (let i = 0; i < 60; i++) {
      const randomHeight = heights[Math.floor(Math.random() * heights.length)];
      const randomSpacing = Math.random() * 3 + 1;
      const opacity = Math.random() * 0.2 + 0.6;
      
      rectangles.push(
        <div
          key={i}
          style={{
            height: `${randomHeight}px`,
            width: 'clamp(8px, 2vw, 16px)',
            backgroundColor: '#fafafa',
            opacity: opacity,
            marginBottom: `${randomSpacing}px`
          }}
        />
      );
    }
    return rectangles;
  };
  
  return (
    <section
      style={{
        minHeight: '100vh',
        height: 'auto', // Permet à la section de grandir si nécessaire
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2f2f2e',
        padding: 'clamp(2rem, 5vh, 4rem) clamp(1rem, 3vw, 2rem)',
        position: 'relative',
        boxSizing: 'border-box'
      }}
    >
      {/* Container principal */}
      <div
        style={{
          textAlign: 'center',
          width: '100%',
          maxWidth: '1400px', // Limite la largeur maximale
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          flex: '1'
        }}
      >
        {/* Container du titre avec motifs graphiques */}
        <div style={{ 
          position: 'relative', 
          marginBottom: 'clamp(2rem, 5vh, 4rem)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          width: '100%',
          minHeight: 'clamp(8rem, 20vh, 16rem)' // Hauteur minimum responsive
        }}>
          
          {/* Motif graphique gauche - masqué sur mobile */}
          <div style={{ 
            position: 'absolute', 
            left: 'clamp(0.5%, 2vw, 2%)', 
            top: '50%',
            transform: 'translateY(-50%)',
            display: window.innerWidth > 768 ? 'flex' : 'none', // Masqué sur mobile
            flexDirection: 'column', 
            alignItems: 'center',
            justifyContent: 'center',
            height: 'clamp(12rem, 30vh, 20rem)',
            overflow: 'hidden'
          }}>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%'
            }}>
              {generateRectangles()}
            </div>
          </div>

          {/* Titre principal */}
          <h1
            style={{
              fontSize: 'clamp(3rem, 12vw, 12rem)',
              fontWeight: '900',
              color: '#fafafa',
              lineHeight: '0.7',
              letterSpacing: '-0.12em',
              margin: '0',
              fontFamily: '"Arial Black", "Helvetica", sans-serif',
              textTransform: 'uppercase',
              fontStretch: 'ultra-condensed',
              width: '100%',
              maxWidth: '90%', // Réduit pour éviter le débordement
              transform: 'scaleY(0.8) scaleX(1.2)',
              transformOrigin: 'center',
              textAlign: 'center'
            }}
          >
            N.O.G
            <br/>
            <div style={{ marginTop: '0.15em' }}>
              PROJECT
            </div>
          </h1>

          {/* Motif graphique droite - masqué sur mobile */}
          <div style={{ 
            position: 'absolute', 
            right: 'clamp(0.5%, 2vw, 2%)', 
            top: '50%',
            transform: 'translateY(-50%)',
            display: window.innerWidth > 768 ? 'flex' : 'none', // Masqué sur mobile
            flexDirection: 'column', 
            alignItems: 'center',
            justifyContent: 'center',
            height: 'clamp(12rem, 30vh, 20rem)',
            overflow: 'hidden'
          }}>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%'
            }}>
              {generateRectangles()}
            </div>
          </div>
        </div>

        {/* Description - Texte responsive sans coupure */}
        <div
          style={{
            fontSize: 'clamp(0.9rem, 2.2vw, 1.25rem)',
            color: '#fafafa',
            lineHeight: 'clamp(1.4, 1.6, 1.8)',
            fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
            fontWeight: '500',
            margin: '0 auto',
            textAlign: 'center',
            width: '100%',
            maxWidth: 'min(95%, 80ch)', // Plus large pour éviter les coupures
            marginTop: 'clamp(1rem, 3vw, 2rem)',
            padding: '0 1rem',
            boxSizing: 'border-box'
          }}
        >
          {/* Chaque ligne avec gestion responsive */}
          <div style={{ 
            marginBottom: 'clamp(0.6rem, 1.5vw, 1rem)',
            // Suppression des règles qui coupent le texte
            wordWrap: 'break-word',
            hyphens: 'auto'
          }}>
            A modular platform to build, orchestrate, and govern legal agents with full traceability
          </div>
          <div style={{ 
            marginBottom: 'clamp(0.6rem, 1.5vw, 1rem)',
            wordWrap: 'break-word',
            hyphens: 'auto'
          }}>
            From prompts to legal logic chains, it powers compliant and scalable legal automation
          </div>
          <div style={{ 
            wordWrap: 'break-word',
            hyphens: 'auto'
          }}>
            Crafted by its own community
          </div>
        </div>
      </div>
      
      {/* Media query responsivité via CSS-in-JS */}
      <style jsx>{`
        @media (max-width: 768px) {
          h1 {
            font-size: clamp(2.5rem, 10vw, 5rem) !important;
          }
        }
        
        @media (max-width: 480px) {
          section {
            padding: clamp(1rem, 3vh, 2rem) 0.5rem !important;
          }
          
          div {
            max-width: 95% !important;
          }
        }
      `}</style>
    </section>
  );
};

export default NOGProjectSection;
