import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ScrollReveal = ({ children, className = '', delay = 0, direction = 'up' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const getInitialOffset = () => {
    switch (direction) {
      case 'left': return { x: -40, y: 0 };
      case 'right': return { x: 40, y: 0 };
      case 'up':
      default: return { x: 0, y: 40 };
    }
  };

  const initial = { opacity: 0, ...getInitialOffset() };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : initial}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
