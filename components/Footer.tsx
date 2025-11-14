import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-bpa-black text-bpa-off-white/70 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center items-center gap-8 mb-8">
          <img 
            src="https://images.squarespace-cdn.com/content/v1/6321d1a0e854dc2d6d3a2a9c/25683639-38b0-45cf-9b37-e7e09314fb13/bpa-logo-rouge.png?format=1500w" 
            alt="Blaise Pascal Advisors Logo" 
            className="h-10 w-auto filter brightness-0 invert"
          />
          <img 
            src="https://www.heartleadershipuniversity.org/wp-content/uploads/2022/03/cropped-logo.webp" 
            alt="Heart Leadership University Logo" 
            className="h-12 w-auto filter brightness-0 invert"
          />
        </div>
        <p className="font-sans text-sm">
          Pour toute question, contactez-nous à <a href="mailto:contact@pascal-advisors.com" className="text-bpa-gold hover:underline">contact@pascal-advisors.com</a>
        </p>
        <p className="font-sans text-xs mt-4 opacity-50">
          &copy; {new Date().getFullYear()} Blaise Pascal Advisors & Heart Leadership University. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;