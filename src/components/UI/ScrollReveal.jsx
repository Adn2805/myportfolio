import React from 'react';
import { motion } from 'framer-motion';

const ScrollReveal = ({ children, className = '', delay = 0, direction = 'up' }) => {
  const getInitialOffset = () => {
    switch (direction) {
      case 'left': return { x: -20, y: 0 };
      case 'right': return { x: 20, y: 0 };
      case 'up':
      default: return { x: 0, y: 20 };
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...getInitialOffset() }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px' }}
      transition={{ duration: 0.45, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;

