import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxScrollProps {
  backgroundImage: string;
  children: React.ReactNode;
}

export const ParallaxScroll: React.FC<ParallaxScrollProps> = ({
  backgroundImage,
  children,
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <div ref={ref} className="relative h-screen overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          y: backgroundY,
        }}
      />
      <div className="relative z-10 h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};