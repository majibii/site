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
          {/* Code-barre gauche - traits fins et épais alternés */}
          <div style={{ 
            position: 'absolute', 
            left: '1%', 
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex', 
            flexDirection: 'column', 
            gap: '1px',
            width: '5px',
            height: 'clamp(9rem, 22vw, 18rem)',
            alignItems: 'flex-start'
          }}>
            {/* Enchaînement de traits fins et épais comme un vrai code-barre */}
            <div style={{ height: '2px', width: '1px', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '2px', width: '1px', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '2px', width: '3px', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '2px', width: '1px', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '2px', width: '2px', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '2px', width: '1px', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '2px', width: '4px', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '2px', width: '1px', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '2px', width: '1px', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '2px', width: '2px', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '2px', width: '1px', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '2px', width: '3px', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '2px', width: '1px', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '2px', width: '1px', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '2px', width: '2px', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '2px', width: '1px', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '2px', width: '5px', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '2px', width: '1px', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '2px', width: '2px', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '2px', width: '1px', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '2px', width: '1px', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '2px', width: '3px', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '2px', width: '1px', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '2px', width: '2px', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '2px', width: '1px', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '2px', width: '4px', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '2px', width: '1px', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '2px', width: '1px', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '2px', width: '2px', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '2px', width: '1px', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '2px', width: '3px', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '2px', width: '1px', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '2px', width: '2px', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '2px', width: '1px', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '2px', width: '1px', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '2px', width: '4px', backgroundColor: '#fafafa' }}></div>
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

          {/* Code-barre droite - vertical centré */}
          <div style={{ 
            position: 'absolute', 
            right: '1%', 
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex', 
            flexDirection: 'column', 
            gap: '0.5px',
            width: '5px',
            height: 'clamp(9rem, 22vw, 18rem)',
            alignItems: 'center'
          }}>
            {/* Séquence de barres continues style code-barre */}
            <div style={{ height: '7px', width: '100%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '5px', width: '100%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '10px', width: '100%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '3px', width: '100%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '8px', width: '100%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '6px', width: '100%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '4px', width: '100%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '11px', width: '100%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '3px', width: '100%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '9px', width: '100%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '5px', width: '100%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '7px', width: '100%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '4px', width: '100%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '12px', width: '100%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '6px', width: '100%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '3px', width: '100%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '8px', width: '100%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '5px', width: '100%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '10px', width: '100%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '4px', width: '100%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '7px', width: '100%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '6px', width: '100%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '3px', width: '100%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '9px', width: '100%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '5px', width: '100%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '8px', width: '100%', backgroundColor: '#fafafa' }}></div>
          </div>
        </div>

        {/* Description - Pyramide inversée sur 3 lignes compactes */}
        <div
          style={{
            fontSize: 'clamp(0.95rem, 1.8vw, 1.25rem)',
            color: '#fafafa',
            lineHeight: '1.6',
            fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
            fontWeight: '500',
            margin: '0 auto',
            textAlign: 'center',
            maxWidth: 'min(90%, 60ch)',
            marginTop: '0.5rem'
          }}
        >
          <div style={{ marginBottom: '0.8rem', width: '100%' }}>
            A modular platform to build, orchestrate, and govern legal agents with full traceability.
          </div>
          <div style={{ marginBottom: '0.8rem', width: '85%', margin: '0 auto 0.8rem auto' }}>
            From prompts to legal logic chains, it powers compliant and scalable legal automation.
          </div>
          <div style={{ width: '60%', margin: '0 auto' }}>
            Crafted by its own community.
          </div>
        </div>
      </div>
    </div>
  );
};

export default NOGProjectSection;
