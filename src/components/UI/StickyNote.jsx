import React from 'react';

const StickyNote = ({ children, rotation = '-2deg', className = '' }) => {
  return (
    <div
      className={`relative bg-cream text-dark-alt rounded-lg p-4 md:p-5 shadow-lg transition-transform duration-300 hover:scale-[1.02] ${className}`}
      style={{ transform: `rotate(${rotation})` }}
    >
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-400 shadow-sm border border-red-500/20 z-10"></div>
      <div className="relative z-0 font-body">
        {children}
      </div>
    </div>
  );
};

export default StickyNote;
