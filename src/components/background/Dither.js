// src/components/background/Dither.js
import React from 'react';
import { motion } from 'framer-motion';
import './Dither.css';

const Dither = () => {
  return (
    <motion.div
      className="dither-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
};

export default Dither;