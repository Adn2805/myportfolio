import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SectionHeader = ({ number, title, subtitle, annotation }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="relative mb-6 sm:mb-10 md:mb-12"
    >
      {/* Kicker row with number, line, and annotation */}
      <div className="flex items-center justify-between flex-wrap gap-2 mb-2 sm:mb-3">
        <div className="flex items-center gap-2.5 sm:gap-3">
          {number && <span className="font-mono text-lime text-xs sm:text-sm font-bold">{number}</span>}
          <div className="w-8 sm:w-12 h-0.5 bg-lime rounded-full" />
        </div>
        {annotation && (
          <span className="annotation text-lime text-xs sm:text-sm md:text-base rotate-[-2deg] tracking-wide">
            {annotation}
          </span>
        )}
      </div>
      
      {/* Title */}
      <div>
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-cream tracking-tight">
          {title}
        </h2>
      </div>

      {subtitle && (
        <p className="mt-2.5 sm:mt-3 text-blue-gray max-w-2xl text-xs sm:text-base font-body leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
