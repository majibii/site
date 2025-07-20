import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const ParallaxContainer = ({ 
  children, 
  backgroundOffset = -50,
  contentOffset = 20,
  className = '',
  style = {},
  ...props 
}) => {
  const { scrollY } = useViewportScroll();
  
  // Différentes vitesses pour créer l'effet de profondeur
  const backgroundY = useTransform(scrollY, [0, 1000], [0, backgroundOffset]);
  const contentY = useTransform(scrollY, [0, 1000], [0, contentOffset]);
  
  return (
    <div className={className} style={{ position: 'relative', ...style }} {...props}>
      {/* Couche de fond avec parallax lent */}
      <motion.div
        style={{
          y: backgroundY,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      >
        {children.background}
      </motion.div>
      
      {/* Couche de contenu avec parallax plus rapide */}
      <motion.div
        style={{
          y: contentY,
          position: 'relative',
          zIndex: 1,
        }}
      >
        {children.content}
      </motion.div>
    </div>
  );
};

export default ParallaxContainer;