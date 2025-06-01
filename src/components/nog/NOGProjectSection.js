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
        {/* Titre principal - 40% de la hauteur visible */}
        <h1
          style={{
            fontSize: 'clamp(8rem, 20vw, 16rem)',
            fontWeight: '900',
            color: '#000000',
            lineHeight: '0.8',
            letterSpacing: '-0.08em',
            margin: '0',
            fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
            textTransform: 'uppercase',
            fontStretch: 'condensed',
            marginBottom: '3rem'
          }}
        >
          N.O.G<br/>PROJECT
        </h1>

        {/* Description - Beaucoup plus petite */}
        <div
          style={{
            fontSize: 'clamp(0.9rem, 1.8vw, 1.1rem)',
            color: '#000000',
            lineHeight: '1.4',
            fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
            fontWeight: '500',
            maxWidth: '700px',
            margin: '0 auto',
            marginBottom: 'auto'
          }}
        >
          <div style={{ marginBottom: '0.3rem' }}>
            A modular platform to build, orchestrate, and govern legal agents with full traceability and security.
          </div>
          <div style={{ marginBottom: '0.3rem' }}>
            From prompt engineering to legal logic chains, N.O.G is the AI backbone for compliant, scalable legal automation.
          </div>
          <div>
            Crafted by their own community.
          </div>
        </div>

        {/* Signature - Tout en bas avec marge généreuse */}
        <div
          style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            color: '#000000',
            fontFamily: 'cursive, "Brush Script MT", "Lucida Handwriting", sans-serif',
            fontStyle: 'italic',
            marginTop: '6rem',
            alignSelf: 'center'
          }}
        >
          by EggOn Technology
        </div>
      </div>
    </div>
  );
};

export default NOGProjectSection;
