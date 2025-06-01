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
        backgroundColor: '#2f2f2e',
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
          <ellipse cx="40" cy="20" rx="35" ry="16" stroke="#fafafa" strokeWidth="2.5" fill="none"/>
          <ellipse cx="40" cy="20" rx="22" ry="10" stroke="#fafafa" strokeWidth="1.5" fill="none"/>
          <circle cx="40" cy="20" r="5" fill="#fafafa"/>
          <path d="M12 12 L68 12 M12 28 L68 28" stroke="#fafafa" strokeWidth="1"/>
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
          {/* Code-barre gauche - vertical agrandi */}
          <div style={{ 
            position: 'absolute', 
            left: '2%', 
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex', 
            flexDirection: 'column', 
            gap: '1.2px',
            width: '2.3px',
            height: 'clamp(4.6rem, 13.8vw, 11.5rem)',
            alignItems: 'center'
          }}>
            {/* Barres horizontales style code-barre vertical */}
            <div style={{ height: '3.5px', width: '100%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '1.2px', width: '80%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '4.6px', width: '100%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '2.3px', width: '60%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '3.5px', width: '100%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '1.2px', width: '70%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '2.3px', width: '90%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '3.5px', width: '100%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '1.2px', width: '50%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '4.6px', width: '100%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '2.3px', width: '85%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '3.5px', width: '100%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '1.2px', width: '65%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '2.3px', width: '95%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '3.5px', width: '100%', backgroundColor: '#fafafa' }}></div>
          </div>

          {/* Titre principal - version écrasée et élargie */}
          <h1
            style={{
              fontSize: 'clamp(3.2rem, 9.6vw, 8rem)',
              fontWeight: '900',
              color: '#fafafa',
              lineHeight: '0.64',
              letterSpacing: '-0.04em',
              margin: '0',
              fontFamily: '"Inter Black", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
              textTransform: 'uppercase',
              fontStretch: 'extra-condensed',
              width: 'clamp(60%, 75%, 85%)',
              maxWidth: '85%'
            }}
          >
            N.O.G<br/>PROJECT
          </h1>

          {/* Code-barre droite - vertical agrandi */}
          <div style={{ 
            position: 'absolute', 
            right: '2%', 
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex', 
            flexDirection: 'column', 
            gap: '1.2px',
            width: '2.3px',
            height: 'clamp(4.6rem, 13.8vw, 11.5rem)',
            alignItems: 'center'
          }}>
            {/* Barres horizontales style code-barre vertical */}
            <div style={{ height: '3.5px', width: '100%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '2.3px', width: '75%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '4.6px', width: '100%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '1.2px', width: '55%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '3.5px', width: '100%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '2.3px', width: '80%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '1.2px', width: '90%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '3.5px', width: '100%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '2.3px', width: '45%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '4.6px', width: '100%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '1.2px', width: '70%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '3.5px', width: '100%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '2.3px', width: '85%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '1.2px', width: '60%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '3.5px', width: '100%', backgroundColor: '#fafafa' }}></div>
          </div>
        </div>

        {/* Description - Forme pyramidale sur 3 lignes */}
        <div
          style={{
            fontSize: 'clamp(0.9rem, 1.8vw, 1.1rem)',
            color: '#fafafa',
            lineHeight: '1.4',
            fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
            fontWeight: '500',
            margin: '0 auto',
            marginBottom: '2rem',
            textAlign: 'center',
            maxWidth: 'clamp(60%, 75%, 85%)'
          }}
        >
          <div style={{ marginBottom: '0.4rem' }}>
            A modular platform to build, orchestrate, and govern legal agents with full traceability.
          </div>
          <div style={{ marginBottom: '0.4rem', maxWidth: '90%', margin: '0 auto 0.4rem auto' }}>
            From prompts to legal logic chains, it powers compliant and scalable legal automation.
          </div>
          <div style={{ maxWidth: '70%', margin: '0 auto' }}>
            Crafted by its own community.
          </div>
        </div>

        {/* Signature - Style manuscrit masculin compact */}
        <div
          style={{
            fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)',
            color: '#fafafa',
            fontFamily: '"Times New Roman", serif',
            fontStyle: 'italic',
            fontWeight: '600',
            textAlign: 'center',
            letterSpacing: '0.02em',
            transform: 'rotate(-0.5deg)',
            textShadow: '0 1px 2px rgba(0,0,0,0.3)',
            maxWidth: '85px',
            margin: '0 auto',
            lineHeight: '1.2'
          }}
        >
          by EggOn Technology
        </div>
      </div>
    </div>
  );
};

export default NOGProjectSection;
