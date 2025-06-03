import React from 'react';

const NOGProjectSection = () => {
  const generateRectangles = () => {
    const rectangles = [];
    const heights = [0.2, 0.3, 0.4, 0.5, 0.6, 0.8];
    
    for (let i = 0; i < 60; i++) {
      const randomHeight = heights[Math.floor(Math.random() * heights.length)];
      const randomSpacing = Math.random() * 3 + 1;
      const opacity = Math.random() * 0.3 + 0.4;
      
      rectangles.push(
        <div
          key={i}
          style={{
            height: `${randomHeight}px`,
            width: 'clamp(8px, 2vw, 16px)',
            backgroundColor: 'rgba(250, 250, 250, 0.2)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            opacity: opacity,
            marginBottom: `${randomSpacing}px`,
            borderRadius: '2px'
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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        padding: '4rem 0',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0,
      }}
    >
      <div
        style={{
          textAlign: 'center',
          width: '100%',
          maxWidth: '1600px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          margin: '0 auto',
          padding: '0 2rem'
        }}
      >
        <div style={{ 
          position: 'relative', 
          marginBottom: '4rem', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          width: '100%',
          minHeight: 'clamp(8rem, 20vh, 16rem)'
        }}>
          
          <div style={{ 
            position: 'absolute', 
            left: '2%', 
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

          <div style={{ 
            position: 'absolute', 
            right: '2%', 
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

        <div
          style={{
            fontSize: 'clamp(0.9rem, 2.2vw, 1.25rem)',
            color: '#fafafa',
            lineHeight: '1.6',
            fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
            fontWeight: '500',
            margin: '0 auto',
            textAlign: 'center',
            width: '100%',
            maxWidth: '1200px',
            padding: '2rem',
            boxSizing: 'border-box',
            textShadow: '1px 1px 4px rgba(0, 0, 0, 0.6)',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '16px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
          }}
        >
          <div style={{ marginBottom: '1rem' }}>
            A modular platform to build, orchestrate, and govern legal agents with full traceability
          </div>
          <div style={{ marginBottom: '1rem' }}>
            From prompts to legal logic chains, it powers compliant and scalable legal automation
          </div>
          <div>
            Crafted by its own community
          </div>
        </div>
      </div>
    </section>
  );
};

export default NOGProjectSection;