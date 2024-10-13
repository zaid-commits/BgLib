import React from 'react';

export const GlowingStars: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
      <div className="absolute top-3/4 left-1/2 w-1 h-1 bg-teal-400 rounded-full animate-ping"></div>
      <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-purple-500 rounded-full animate-bounce"></div>
    </div>
  );
};
