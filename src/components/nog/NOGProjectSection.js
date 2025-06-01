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
          width: '120px',
          height: '60px',
          marginBottom: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <svg
          width="120"
          height="60"
          viewBox="0 0 120 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="60" cy="30" rx="55" ry="25" stroke="#000" strokeWidth="3" fill="none"/>
          <ellipse cx="60" cy="30" rx="35" ry="15" stroke="#000" strokeWidth="2" fill="none"/>
          <circle cx="60" cy="30" r="8" fill="#000"/>
          <path d="M25 20 L95 20 M25 40 L95 40" stroke="#000" strokeWidth="1.5"/>
          <path d="M35 15 L85 15 M35 45 L85 45" stroke="#000" strokeWidth="1"/>
        </svg>
      </div>

      {/* Container principal */}
      <div
        style={{
          textAlign: 'center',
          maxWidth: '1000px'
        }}
      >
        {/* Titre principal */}
        <h1
          style={{
            fontSize: 'clamp(4rem, 12vw, 8rem)',
            fontWeight: '900',
            color: '#000000',
            lineHeight: '0.9',
            letterSpacing: '-0.02em',
            margin: '0 0 2rem 0',
            fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
            textTransform: 'uppercase'
          }}
        >
          N.O.G<br/>PROJECT
        </h1>

        {/* Description */}
        <div
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
            color: '#000000',
            lineHeight: '1.5',
            fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
            fontWeight: '500',
            marginBottom: '3rem',
            maxWidth: '800px',
            margin: '0 auto 3rem auto'
          }}
        >
          <p style={{ margin: '0 0 1rem 0' }}>
            A modular platform to build, orchestrate, and govern legal agents with full traceability and security.
          </p>
          <p style={{ margin: '0 0 1rem 0' }}>
            From prompt engineering to legal logic chains, N.O.G is the AI backbone for compliant, scalable legal automation.
          </p>
          <p style={{ margin: '0' }}>
            Crafted by their own community.
          </p>
        </div>

        {/* Signature */}
        <div
          style={{
            fontSize: '2rem',
            color: '#000000',
            fontFamily: 'cursive, "Brush Script MT", "Lucida Handwriting", sans-serif',
            fontStyle: 'italic',
            marginTop: '4rem'
          }}
        >
          by EggOn Technology
        </div>
      </div>
    </div>
  );
};

export default NOGProjectSection;
