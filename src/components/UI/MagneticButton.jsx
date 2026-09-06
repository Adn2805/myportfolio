import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const MagneticButton = ({ children, className = '', onClick, href }) => {
  const ref = useRef(null);
  const [isHoverable, setIsHoverable] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: none)');
    if (mediaQuery.matches) {
      setIsHoverable(false);
    }
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!isHoverable || !ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.2); // max ~10px offset
    y.set(middleY * 0.2);
  };

  const handleMouseLeave = () => {
    if (!isHoverable) return;
    x.set(0);
    y.set(0);
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={`inline-block ${className}`}
    >
      {children}
    </Component>
  );
};

export default MagneticButton;
