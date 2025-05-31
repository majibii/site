import React from 'react';

const NOGProjectSection = () => {
  console.log('NOGProjectSection rendu avec succès !');
  
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
        maxWidth: '900px'
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
        </p>
      </div>
    </div>
  );
};

export default NOGProjectSection;
