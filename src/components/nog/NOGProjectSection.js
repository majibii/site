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
        <div style={{ position: 'relative', marginBottom: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          {/* Code-barre gauche - vertical agrandi */}
          <div style={{ 
            position: 'absolute', 
            left: '1%', 
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex', 
            flexDirection: 'column', 
            gap: '1.5px',
            width: '3px',
            height: 'clamp(6rem, 18vw, 14rem)',
            alignItems: 'center'
          }}>
            {/* Barres horizontales style code-barre vertical */}
            <div style={{ height: '4px', width: '100%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '2px', width: '80%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '5px', width: '100%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '3px', width: '60%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '4px', width: '100%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '2px', width: '70%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '3px', width: '90%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '4px', width: '100%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '2px', width: '50%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '5px', width: '100%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '3px', width: '85%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '4px', width: '100%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '2px', width: '65%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '3px', width: '95%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '4px', width: '100%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '2px', width: '75%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '5px', width: '100%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '3px', width: '55%', backgroundColor: '#fafafa' }}></div>
          </div>

          {/* Titre principal - plus large et imposant */}
          <h1
            style={{
              fontSize: 'clamp(4rem, 14vw, 12rem)',
              fontWeight: '900',
              color: '#fafafa',
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
              margin: '0',
              fontFamily: '"Inter Black", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
              textTransform: 'uppercase',
              fontStretch: 'extra-condensed',
              width: '100%',
              maxWidth: '90%'
            }}
          >
            N.O.G
            <br/>
            <div style={{ marginTop: '0.5em' }}>
              PROJECT
            </div>
          </h1>

          {/* Code-barre droite - vertical agrandi */}
          <div style={{ 
            position: 'absolute', 
            right: '1%', 
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex', 
            flexDirection: 'column', 
            gap: '1.5px',
            width: '3px',
            height: 'clamp(6rem, 18vw, 14rem)',
            alignItems: 'center'
          }}>
            {/* Barres horizontales style code-barre vertical */}
            <div style={{ height: '4px', width: '100%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '3px', width: '75%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '5px', width: '100%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '2px', width: '55%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '4px', width: '100%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '3px', width: '80%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '2px', width: '90%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '4px', width: '100%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '3px', width: '45%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '5px', width: '100%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '2px', width: '70%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '4px', width: '100%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '3px', width: '85%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '2px', width: '60%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '4px', width: '100%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '3px', width: '95%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '5px', width: '100%', backgroundColor: '#fafafa' }}></div>
            <div style={{ height: '2px', width: '65%', backgroundColor: '#fafafa' }}></div>
          </div>
        </div>

        {/* Description - Forme pyramidale inversée sur 3 lignes */}
        <div
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.3rem)',
            color: '#fafafa',
            lineHeight: '1.5',
            fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
            fontWeight: '500',
            margin: '0 auto',
            textAlign: 'center',
            maxWidth: '90%'
          }}
        >
          <div style={{ marginBottom: '0.5rem', maxWidth: '100%' }}>
            A modular platform to build, orchestrate, and govern legal agents with full traceability.
          </div>
          <div style={{ marginBottom: '0.5rem', maxWidth: '85%', margin: '0 auto 0.5rem auto' }}>
            From prompts to legal logic chains, it powers compliant and scalable legal automation.
          </div>
          <div style={{ maxWidth: '60%', margin: '0 auto' }}>
            Crafted by its own community.
          </div>
        </div>
      </div>
    </div>
  );
};

export default NOGProjectSection;
