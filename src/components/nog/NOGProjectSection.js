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
          {/* Code-barre gauche - vertical */}
          <div style={{ 
            position: 'absolute', 
            left: '2%', 
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex', 
            flexDirection: 'column', 
            gap: '1px',
            width: '2px',
            height: 'clamp(4rem, 12vw, 10rem)',
            alignItems: 'center'
          }}>
            {/* Barres horizontales style code-barre vertical */}
            <div style={{ height: '3px', width: '100%', backgroundColor: '#000' }}></div>
            <div style={{ height: '1px', width: '80%', backgroundColor: '#000' }}></div>
            <div style={{ height: '4px', width: '100%', backgroundColor: '#000' }}></div>
            <div style={{ height: '2px', width: '60%', backgroundColor: '#000' }}></div>
            <div style={{ height: '3px', width: '100%', backgroundColor: '#000' }}></div>
            <div style={{ height: '1px', width: '70%', backgroundColor: '#000' }}></div>
            <div style={{ height: '2px', width: '90%', backgroundColor: '#000' }}></div>
            <div style={{ height: '3px', width: '100%', backgroundColor: '#000' }}></div>
            <div style={{ height: '1px', width: '50%', backgroundColor: '#000' }}></div>
            <div style={{ height: '4px', width: '100%', backgroundColor: '#000' }}></div>
            <div style={{ height: '2px', width: '85%', backgroundColor: '#000' }}></div>
            <div style={{ height: '3px', width: '100%', backgroundColor: '#000' }}></div>
            <div style={{ height: '1px', width: '65%', backgroundColor: '#000' }}></div>
            <div style={{ height: '2px', width: '95%', backgroundColor: '#000' }}></div>
            <div style={{ height: '3px', width: '100%', backgroundColor: '#000' }}></div>
          </div>

          {/* Titre principal - version écrasée */}
          <h1
            style={{
              fontSize: 'clamp(4rem, 12vw, 10rem)',
              fontWeight: '900',
              color: '#000000',
              lineHeight: '0.8',
              letterSpacing: '-0.08em',
              margin: '0',
              fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
              textTransform: 'uppercase',
              fontStretch: 'extra-condensed'
            }}
          >
            N.O.G<br/>PROJECT
          </h1>

          {/* Code-barre droite - vertical */}
          <div style={{ 
            position: 'absolute', 
            right: '2%', 
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex', 
            flexDirection: 'column', 
            gap: '1px',
            width: '2px',
            height: 'clamp(4rem, 12vw, 10rem)',
            alignItems: 'center'
          }}>
            {/* Barres horizontales style code-barre vertical */}
            <div style={{ height: '3px', width: '100%', backgroundColor: '#000' }}></div>
            <div style={{ height: '2px', width: '75%', backgroundColor: '#000' }}></div>
            <div style={{ height: '4px', width: '100%', backgroundColor: '#000' }}></div>
            <div style={{ height: '1px', width: '55%', backgroundColor: '#000' }}></div>
            <div style={{ height: '3px', width: '100%', backgroundColor: '#000' }}></div>
            <div style={{ height: '2px', width: '80%', backgroundColor: '#000' }}></div>
            <div style={{ height: '1px', width: '90%', backgroundColor: '#000' }}></div>
            <div style={{ height: '3px', width: '100%', backgroundColor: '#000' }}></div>
            <div style={{ height: '2px', width: '45%', backgroundColor: '#000' }}></div>
            <div style={{ height: '4px', width: '100%', backgroundColor: '#000' }}></div>
            <div style={{ height: '1px', width: '70%', backgroundColor: '#000' }}></div>
            <div style={{ height: '3px', width: '100%', backgroundColor: '#000' }}></div>
            <div style={{ height: '2px', width: '85%', backgroundColor: '#000' }}></div>
            <div style={{ height: '1px', width: '60%', backgroundColor: '#000' }}></div>
            <div style={{ height: '3px', width: '100%', backgroundColor: '#000' }}></div>
          </div>
        </div>

        {/* Description - En forme pyramidale, alignée sous le titre */}
        <div
          style={{
            fontSize: 'clamp(0.9rem, 1.8vw, 1.1rem)',
            color: '#000000',
            lineHeight: '1.4',
            fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
            fontWeight: '700',
            margin: '0 auto',
            marginBottom: '1.5rem',
            textAlign: 'center',
            maxWidth: 'clamp(50%, 70%, 80%)'
          }}
        >
          <div style={{ marginBottom: '0.3rem' }}>
            A modular platform to build, orchestrate, and govern legal agents with full traceability and security.
          </div>
          <div style={{ marginBottom: '0.3rem', maxWidth: '85%', margin: '0 auto 0.3rem auto' }}>
            From prompt engineering to legal logic chains,
          </div>
          <div style={{ marginBottom: '0.3rem', maxWidth: '95%', margin: '0 auto 0.3rem auto' }}>
            N.O.G is the AI backbone for compliant, scalable legal automation.
          </div>
          <div style={{ maxWidth: '60%', margin: '0 auto' }}>
            Crafted by their own community.
          </div>
        </div>

        {/* Signature - Alignée avec la largeur du titre */}
        <div
          style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
            color: '#000000',
            fontFamily: '"Brush Script MT", "Lucida Handwriting", cursive',
            fontStyle: 'italic',
            fontWeight: '400',
            textAlign: 'center',
            letterSpacing: '0.01em',
            transform: 'rotate(-1deg)',
            textShadow: '0 1px 2px rgba(0,0,0,0.1)',
            width: 'clamp(50%, 70%, 80%)',
            margin: '0 auto'
          }}
        >
          by EggOn Technology
        </div>
      </div>
    </div>
  );
};

export default NOGProjectSection;
