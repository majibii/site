import React from 'react';

const NOGProjectSection = () => {
  // Génération des 60 rectangles avec 5-6 types de hauteurs alternées
  const generateRectangles = () => {
    const rectangles = [];
    const heights = [0.2, 0.3, 0.4, 0.5, 0.6, 0.8];
    
    for (let i = 0; i < 60; i++) {
      const randomHeight = heights[Math.floor(Math.random() * heights.length)];
      const randomSpacing = Math.random() * 3 + 1;
      const opacity = Math.random() * 0.3 + 0.4; // Réduit l'opacité pour l'effet glassy
      
      rectangles.push(
        <div
          key={i}
          style={{
            height: `${randomHeight}px`,
            width: 'clamp(8px, 2vw, 16px)',
            backgroundColor: 'rgba(250, 250, 250, 0.2)', // Plus transparent
            backdropFilter: 'blur(10px)', // Effet blur glassy
            border: '1px solid rgba(255, 255, 255, 0.1)', // Bordure subtile
            opacity: opacity,
            marginBottom: `${randomSpacing}px`,
            borderRadius: '2px' // Coins légèrement arrondis
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
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent', // Fond complètement transparent
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
          maxWidth: '1400px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          flex: '1',
          position: 'relative'
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
          minHeight: 'clamp(8rem, 20vh, 16rem)'
        }}>
          
          {/* Motif graphique gauche - masqué sur mobile */}
          <div style={{ 
            position: 'absolute', 
            left: 'clamp(0.5%, 2vw, 2%)', 
            top: '50%',
            transform: 'translateY(-50%)',
            display: window.innerWidth > 768 ? 'flex' : 'none',
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

          {/* Titre principal avec effet glassy */}
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
              maxWidth: '90%',
              transform: 'scaleY(0.8) scaleX(1.2)',
              transformOrigin: 'center',
              textAlign: 'center',
              textShadow: '2px 2px 8px rgba(0, 0, 0, 0.6)',
              filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.1))'
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
            display: window.innerWidth > 768 ? 'flex' : 'none',
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

        {/* Description avec effet glassy */}
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
            maxWidth: 'min(95%, 80ch)',
            marginTop: 'clamp(1rem, 3vw, 2rem)',
            padding: 'clamp(1rem, 2vw, 2rem)',
            boxSizing: 'border-box',
            textShadow: '1px 1px 4px rgba(0, 0, 0, 0.6)',
            // Effet glassy moderne
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '16px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
          }}
        >
          <div style={{ 
            marginBottom: 'clamp(0.6rem, 1.5vw, 1rem)',
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
