import React from 'react';
import { motion } from 'framer-motion';

const NOGProjectSection = () => {
  console.log('NOGProjectSection rendu avec succès !');
  
  // Variants pour l'animation du container principal
  const containerVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
        staggerChildren: 0.3
      }
    }
  };

  // Variants pour le background animé
  const backgroundVariants = {
    hidden: { 
      backgroundColor: '#ffffff',
      scale: 1.1
    },
    visible: { 
      backgroundColor: '#fce96b',
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  // Variants pour le titre
  const titleVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
      rotateX: -15
    },
    visible: { 
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  // Variants pour le texte
  const textVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  // Variants pour l'effet de pulsation subtile
  const pulseVariants = {
    initial: { scale: 1 },
    animate: { 
      scale: [1, 1.02, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      variants={backgroundVariants}
      initial="hidden"
      animate="visible"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Effet de particules subtil en background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, delay: 0.5 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(0,0,0,0.05) 1px, transparent 1px),
                           radial-gradient(circle at 80% 20%, rgba(0,0,0,0.05) 1px, transparent 1px),
                           radial-gradient(circle at 40% 80%, rgba(0,0,0,0.05) 1px, transparent 1px)`,
          backgroundSize: '100px 100px, 150px 150px, 120px 120px'
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          textAlign: 'center',
          maxWidth: '900px',
          zIndex: 1
        }}
      >
        <motion.div
          variants={pulseVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            variants={titleVariants}
            style={{
              fontSize: '4rem',
              fontWeight: '900',
              color: '#000000',
              margin: '0 0 1rem 0',
              textShadow: '0 2px 20px rgba(0,0,0,0.1)',
              letterSpacing: '-0.02em'
            }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            N.O.G PROJECT
          </motion.h1>
        </motion.div>

        <motion.p
          variants={textVariants}
          style={{
            fontSize: '1.25rem',
            color: '#333333',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto'
          }}
          whileHover={{ 
            color: '#222222',
            transition: { duration: 0.2 }
          }}
        >
          A unique is a modular platform that enables legal professionals to build, orchestrate, and govern intelligent agents dedicated to legal tasks. Designed for automation, compliance, and trust, N.O.G lets users iterate on prompts, structure agents with reasoning chains, foundation models, semantic search engines, and legal logic templates.
All components are version-controlled and fully auditable, ensuring traceability, legal-grade security, and scalable operations.
            
        </motion.p>

        {/* Ligne décorative animée */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100px' }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            height: '3px',
            backgroundColor: '#000000',
            margin: '2rem auto',
            borderRadius: '2px'
          }}
        />

        {/* Bouton d'action optionnel */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          whileHover={{ 
            scale: 1.05,
            backgroundColor: '#000000',
            color: '#fce96b',
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: '0.75rem 2rem',
            fontSize: '1rem',
            fontWeight: '600',
            backgroundColor: 'transparent',
            color: '#000000',
            border: '2px solid #000000',
            borderRadius: '50px',
            cursor: 'pointer',
            marginTop: '1rem'
          }}
        >
          Explore Collection
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default NOGProjectSection;
