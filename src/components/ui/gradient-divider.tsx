import React from 'react';

export const GradientDivider: React.FC<React.HTMLAttributes<HTMLHRElement>> = ({ className, ...props }) => {
  return (
    <hr
      className={`h-px border-0 bg-gradient-to-r from-transparent via-gray-300 to-transparent ${className}`}
      {...props}
    />
  );
};
