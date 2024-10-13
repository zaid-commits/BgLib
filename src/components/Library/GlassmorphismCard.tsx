import React from 'react';
import { motion } from 'framer-motion';

interface GlassmorphismCardProps {
  title: string;
  content: string;
  icon: React.ReactNode;
  className?: string;
}

export const GlassmorphismCard: React.FC<GlassmorphismCardProps> = ({ 
  title, 
  content, 
  icon,
  className = ''
}) => {
  return (
    <motion.div
      className={`bg-black bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg ${className}`}
      whileHover={{ scale: 1.05, rotateY: 5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="flex items-center mb-4">
        <div className="mr-4 text-3xl text-blue-500">{icon}</div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <p className="text-gray-200">{content}</p>
    </motion.div>
  );
};