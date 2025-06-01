import React from 'react';

const NOGProjectSection = () => {
  console.log('NOGProjectSection rendu avec succès !');
  
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fce96b',
        padding: '2rem',
        position: 'relative'
      }}
    >
      {/* Logo au-dessus du titre */}
      <div
        style={{
          marginBottom: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <svg
          width="80"
          height="40"
          viewBox="0 0 80 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="40" cy="20" rx="35" ry="16" stroke="#000" strokeWidth="2.5" fill="none"/>
          <ellipse cx="40" cy="20" rx="22" ry="10" stroke="#000" strokeWidth="1.5" fill="none"/>
          <circle cx="40" cy="20" r="5" fill="#000"/>
          <path d="M12 12 L68 12 M12 28 L68 28" stroke="#000" strokeWidth="1"/>
        </svg>
      </div>

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
        {/* Container du titre avec codes-barres */}
        <div style={{ position: 'relative', marginBottom: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          {/* Code-barre gauche */}
          <div style={{ 
            position: 'absolute', 
            left: 'clamp(5%, 10vw, 15%)', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '2px',
            transform: 'rotate(90deg)',
            transformOrigin: 'center'
          }}>
            {Array.from({length: 40}, (_, i) => (
              <div key={i} style={{
                width: Math.random() > 0.3 ? '2px' : '4px',
                height: '60px',
                backgroundColor: '#000000'
              }} />
            ))}
          </div>

          {/* Titre principal - écrasé verticalement */}
          <h1
            style={{
              fontSize: 'clamp(8rem, 20vw, 16rem)',
              fontWeight: '900',
              color: '#000000',
              lineHeight: '0.55',
              letterSpacing: '-0.08em',
              margin: '0',
              fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
              textTransform: 'uppercase',
              fontStretch: 'extra-condensed',
              transform: 'scaleY(0.7)',
              transformOrigin: 'center'
            }}
          >
            N.O.G<br/>PROJECT
          </h1>

          {/* Code-barre droite */}
          <div style={{ 
            position: 'absolute', 
            right: 'clamp(5%, 10vw, 15%)', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '2px',
            transform: 'rotate(90deg)',
            transformOrigin: 'center'
          }}>
            {Array.from({length: 40}, (_, i) => (
              <div key={i} style={{
                width: Math.random() > 0.3 ? '2px' : '4px',
                height: '60px',
                backgroundColor: '#000000'
              }} />
            ))}
          </div>
        </div>

        {/* Description - En gras, non coupée */}
        <div
          style={{
            fontSize: 'clamp(0.9rem, 1.8vw, 1.1rem)',
            color: '#000000',
            lineHeight: '1.4',
            fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
            fontWeight: '700',
            maxWidth: '90%',
            margin: '0 auto',
            marginBottom: '1.5rem'
          }}
        >
          <div style={{ marginBottom: '0.3rem', whiteSpace: 'nowrap', overflow: 'visible' }}>
            A modular platform to build, orchestrate, and govern legal agents with full traceability and security.
          </div>
          <div style={{ marginBottom: '0.3rem', whiteSpace: 'nowrap', overflow: 'visible' }}>
            From prompt engineering to legal logic chains,
          </div>
          <div style={{ marginBottom: '0.3rem', whiteSpace: 'nowrap', overflow: 'visible' }}>
            N.O.G is the AI backbone for compliant, scalable legal automation.
          </div>
          <div style={{ whiteSpace: 'nowrap', overflow: 'visible' }}>
            Crafted by their own community.
          </div>
        </div>

        {/* Signature - Juste après le texte, alignée avec le titre */}
        <div
          style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
            color: '#000000',
            fontFamily: '"Times New Roman", "Georgia", serif',
            fontStyle: 'italic',
            fontWeight: '400',
            textAlign: 'center',
            letterSpacing: '0.02em',
            transform: 'rotate(-2deg)'
          }}
        >
          by EggOn Technology
        </div>
      </div>
    </div>
  );
};

export default NOGProjectSection;
