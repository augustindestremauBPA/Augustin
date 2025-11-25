
import React, { ReactNode } from 'react';

interface CTAButtonProps {
  children: ReactNode;
  href: string;
  className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ children, href, className = '' }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block bg-bpa-gold text-bpa-off-white font-serif font-semibold text-lg py-3 px-10 rounded-sm shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bpa-off-white focus:ring-bpa-gold ${className}`}
    >
      {children}
    </a>
  );
};

export default CTAButton;
