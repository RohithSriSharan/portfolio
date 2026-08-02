import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'accent';
}

export function GradientText({ children, className = '', variant = 'primary' }: GradientTextProps) {
  const gradients = {
    primary: 'from-primary-400 to-secondary-400',
    secondary: 'from-secondary-400 to-accent-400',
    accent: 'from-accent-400 to-primary-400',
  };

  return (
    <span className={`bg-gradient-to-r ${gradients[variant]} bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
}