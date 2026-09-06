import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FlipCard = ({ front, back, className = '' }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleHoverStart = () => {
    if (window.matchMedia('(hover: hover)').matches) {
      setIsFlipped(true);
    }
  };

  const handleHoverEnd = () => {
    if (window.matchMedia('(hover: hover)').matches) {
      setIsFlipped(false);
    }
  };

  const handleTap = () => {
    if (window.matchMedia('(hover: none)').matches) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div 
      className={`relative perspective-1000 min-h-[400px] ${className}`}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
      onClick={handleTap}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="w-full h-full relative preserve-3d"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div 
          className="absolute inset-0 backface-hidden bg-dark-card border border-dark-border rounded-card-lg p-5 md:p-6"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {front}
        </div>

        {/* Back */}
        <div 
          className="absolute inset-0 backface-hidden bg-dark-card border border-dark-border rounded-card-lg p-5 md:p-6"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          {back}
        </div>
      </motion.div>
    </div>
  );
};

export default FlipCard;
