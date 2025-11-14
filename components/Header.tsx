
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8 bg-bpa-off-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-bpa-gold/20">
      <div className="container mx-auto flex justify-center items-center gap-8">
        <a href="https://www.pascal-advisors.com/" target="_blank" rel="noopener noreferrer">
          <img 
            src="https://images.squarespace-cdn.com/content/v1/6321d1a0e854dc2d6d3a2a9c/25683639-38b0-45cf-9b37-e7e09314fb13/bpa-logo-rouge.png?format=1500w" 
            alt="Blaise Pascal Advisors Logo" 
            className="h-10 md:h-12 w-auto"
          />
        </a>
        <a href="https://www.heartleadershipuniversity.org/" target="_blank" rel="noopener noreferrer">
          <img 
            src="https://www.heartleadershipuniversity.org/wp-content/uploads/2022/03/cropped-logo.webp" 
            alt="Heart Leadership University Logo" 
            className="h-12 md:h-16 w-auto"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
