import React from 'react';

const NOGProjectSection = () => {
  console.log('NOGProjectSection rendu avec succès !');
  
  // Génération des 60 rectangles avec 5-6 types de hauteurs alternées
  const generateRectangles = () => {
    const rectangles = [];
    const heights = [0.2, 0.3, 0.4, 0.5, 0.6, 0.8]; // 6 types de hauteurs encore plus réduites
    
    for (let i = 0; i < 60; i++) {
      const randomHeight = heights[Math.floor(Math.random() * heights.length)]; // Sélection aléatoire d'une hauteur
      const randomSpacing = Math.random() * 3 + 1; // Espacement aléatoire entre 1px et 4px
      const opacity = Math.random() * 0.2 + 0.6; // Entre 0.6 et 0.8
      
      rectangles.push(
        <div
          key={i}
          style={{
            height: `${randomHeight}px`, // Hauteur aléatoire parmi les 6 types ultra-réduits
            width: 'clamp(8px, 2vw, 16px)', // Largeur responsive
            backgroundColor: '#fafafa',
            opacity: opacity,
            marginBottom: `${randomSpacing}px` // Espacement aléatoire plus important
          }}
        />
      );
    }
    return rectangles;
  };
  
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2f2f2e',
        padding: '2rem',
        position: 'relative'
      }}
    >
      {/* Container principal */}
      <div
        style={{
          textAlign: 'center',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          flex: '1'
        }}
      >
        {/* Container du titre avec motifs graphiques */}
        <div style={{ position: 'relative', marginBottom: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          {/* Motif graphique gauche - 60 rectangles centrés */}
          <div style={{ 
            position: 'absolute', 
            left: 'clamp(0.5%, 2vw, 2%)', 
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            justifyContent: 'center',
            height: 'clamp(12rem, 30vh, 20rem)', // Hauteur responsive
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

          {/* Titre principal - police écrasée et élargie */}
          <h1
            style={{
              fontSize: 'clamp(4rem, 16vw, 14rem)',
              fontWeight: '900',
              color: '#fafafa',
              lineHeight: '0.7',
              letterSpacing: '-0.12em',
              margin: '0',
              fontFamily: '"Arial Black", "Helvetica", sans-serif',
              textTransform: 'uppercase',
              fontStretch: 'ultra-condensed',
              width: '100%',
              maxWidth: '95%',
              transform: 'scaleY(0.8) scaleX(1.2)',
              transformOrigin: 'center'
            }}
          >
            N.O.G
            <br/>
            <div style={{ marginTop: '0.15em' }}>
              PROJECT
            </div>
          </h1>

          {/* Motif graphique droite - 60 rectangles centrés identiques */}
          <div style={{ 
            position: 'absolute', 
            right: 'clamp(0.5%, 2vw, 2%)', 
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            justifyContent: 'center',
            height: 'clamp(12rem, 30vh, 20rem)', // Hauteur responsive
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

        {/* Description - 3 lignes strictement, centrées, largeur adaptée */}
        <div
          style={{
            fontSize: 'clamp(0.8rem, 2.2vw, 1.25rem)',
            color: '#fafafa',
            lineHeight: 'clamp(1.4, 1.6, 1.8)',
            fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
            fontWeight: '500',
            margin: '0 auto',
            textAlign: 'center',
            width: '100%',
            maxWidth: 'min(95%, 70ch)',
            marginTop: 'clamp(1rem, 3vw, 2rem)',
            padding: '0 1rem'
          }}
        >
          <div style={{ marginBottom: 'clamp(0.6rem, 1.5vw, 1rem)', whiteSpace: 'nowrap', overflow: 'hidden' }}>
            A modular platform to build, orchestrate, and govern legal agents with full traceability
          </div>
          <div style={{ marginBottom: 'clamp(0.6rem, 1.5vw, 1rem)', whiteSpace: 'nowrap', overflow: 'hidden' }}>
            From prompts to legal logic chains, it powers compliant and scalable legal automation
          </div>
          <div style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
            Crafted by its own community
          </div>
        </div>
      </div>
    </div>
  );
};

export default NOGProjectSection;
