import React from 'react';

const PolaroidFrame = ({ 
  imageSrc, 
  alt = "Photo", 
  caption, 
  subtitle,
  rotation = '0deg', 
  className = '', 
  children,
  aspectRatio = 'aspect-[4/5]'
}) => {
  return (
    <div
      className={`bg-[#FAFAF7] p-2.5 pb-6 md:p-3 md:pb-7 rounded-sm shadow-2xl border border-black/10 transition-transform duration-300 hover:scale-[1.02] ${className}`}
      style={{ transform: `rotate(${rotation})` }}
    >
      {/* Top Tape Accent */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-[#F3EAD8]/70 backdrop-blur-sm border border-black/5 shadow-xs transform -rotate-2 pointer-events-none z-20"></div>

      {/* Image Container */}
      <div className={`w-full ${aspectRatio} relative bg-dark-card overflow-hidden rounded-xs`}>
        {imageSrc ? (
          <img 
            src={imageSrc} 
            alt={alt}
            className="w-full h-full object-cover object-[50%_20%] select-none transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        ) : (
          children
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
      </div>

      {/* Polaroid Caption Area */}
      {caption && (
        <div className="mt-3 text-center px-1">
          <div className="text-xs md:text-sm font-heading font-semibold text-dark tracking-tight">
            {caption}
          </div>
          {subtitle && (
            <div className="text-[10px] md:text-[11px] font-mono text-dark/60 mt-0.5 tracking-wider uppercase">
              {subtitle}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PolaroidFrame;
