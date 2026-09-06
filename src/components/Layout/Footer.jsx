import React from 'react';
import { FiHeart } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="border-t border-dark-border py-8 text-center bg-dark z-10 relative lg:pl-24">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-blue-gray">
        <div>
          © 2026 Mohammed Adnan. All rights reserved.
        </div>
        <div className="flex items-center gap-1.5 text-cream-dark">
          <span>Crafted with</span>
          <FiHeart className="text-lime fill-lime text-xs" />
          <span>and genuine curiosity.</span>
        </div>
      </div>
    </footer>
  );
}
