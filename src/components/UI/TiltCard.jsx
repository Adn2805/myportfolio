import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const TiltCard = ({ children, className = '' }) => {
  const ref = useRef(null);
  const [isHoverable, setIsHoverable] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: none)');
    if (mediaQuery.matches) {
      setIsHoverable(false);
    }
  }, []);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [0, 1], [10, -10]);
  const rotateY = useTransform(mouseXSpring, [0, 1], [-10, 10]);

  const handleMouseMove = (e) => {
    if (!isHoverable || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    if (!isHoverable) return;
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 800 }}
      className={className}
    >
      <motion.div
        style={isHoverable ? { rotateX, rotateY } : {}}
        className="w-full h-full transform-gpu"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default TiltCard;
