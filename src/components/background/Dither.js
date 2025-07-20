// src/components/background/Dither.js
import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import './Dither.css';

const Dither = () => {
  const { scrollY } = useViewportScroll();
  
  // Parallax très lent pour le fond
  const y = useTransform(scrollY, [0, 2000], [0, -100]);
  
  return (
    <motion.div
      className="dither-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ y }}
    />
  );
};

export default Dither;