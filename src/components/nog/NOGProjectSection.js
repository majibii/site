import React from 'react';

const NOGProjectSection = () => {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fce96b',
      padding: '4rem 2rem'
    }}>
      <div style={{
        textAlign: 'center',
        maxWidth: '900px'
      }}>
        <h1 style={{
          fontSize: 'clamp(4rem, 10vw, 8rem)',
          fontWeight: '900',
          color: '#000000',
          lineHeight: '1.1',
          margin: '0 0 2rem 0',
          fontFamily: 'Inter, sans-serif'
        }}>
          N.O.G<br />PROJECT
        </h1>
        <p style={{
          fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
          color: '#333333',
          lineHeight: '1.6',
          fontFamily: 'Inter, sans-serif',
          maxWidth: '700px',
          margin: '0 auto'
        }}>
          A unique collection of legal prompts and agents, built for real-world legal practice. 
          Inspired by orchestration principles, the N.O.G Project offers a specialized framework 
          to build, test, and govern legal agents and intelligent chains.
        </p>
      </div>
    </section>
  );
};

export default NOGProjectSection;
