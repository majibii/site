import React from 'react';
// Commentons temporairement le CSS pour voir si c'est lui le problème
// import './NOGProjectSection.css';

const NOGProjectSection = () => {
  console.log('NOGProjectSection is rendering'); // DEBUG

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#fce96b',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <div style={{
        textAlign: 'center',
        maxWidth: '900px',
        border: '3px solid blue' // DEBUG border
      }}>
        <h1 style={{
          fontSize: '4rem',
          fontWeight: '900',
          color: '#000000',
          margin: '0 0 1rem 0'
        }}>
          N.O.G PROJECT
        </h1>
        <p style={{
          fontSize: '1.25rem',
          color: '#333333',
          lineHeight: '1.6'
        }}>
          A unique collection of legal prompts and agents, built for real-world legal practice. 
          Inspired by orchestration principles, the N.O.G Project offers a specialized framework 
          to build, test, and govern legal agents and intelligent chains.
        </p>
        <div style={{ 
          marginTop: '2rem', 
          padding: '1rem', 
          backgroundColor: 'red', 
          color: 'white' 
        }}>
          DEBUG: Si vous voyez ceci, NOGProjectSection fonctionne !
        </div>
      </div>
    </div>
  );
};

export default NOGProjectSection;
