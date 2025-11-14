
import React from 'react';

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-bpa-gold text-bpa-off-white font-serif font-semibold text-lg py-3 px-10 rounded-sm shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bpa-off-white focus:ring-bpa-gold ${className}`}
    >
      {children}
    </button>
  );
};

export default CTAButton;
