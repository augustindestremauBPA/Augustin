
import React from 'react';
import CTAButton from './CTAButton';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative text-center py-24 md:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cover bg-center text-white"
      style={{ backgroundImage: `url('https://images.pexels.com/photos/163347/rowing-competition-sport-team-163347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` }}
      aria-labelledby="masterclass-title"
    >
       <div className="absolute inset-0 bg-bpa-black opacity-60"></div>
      <div className="relative z-10 container mx-auto">
        <h2 className="font-serif text-bpa-gold text-lg md:text-xl mb-4">MasterClass IA - Entrepreneurs & Dirigeants</h2>
        <h1 id="masterclass-title" className="font-serif font-bold text-bpa-off-white text-4xl md:text-6xl lg:text-7xl leading-tight mb-6">
          Discerner la transformation IA de votre entreprise
        </h1>
        <p className="font-sans text-bpa-off-white/90 text-lg md:text-2xl max-w-3xl mx-auto mb-8">
          Mettre l'intelligence artificielle au service de votre réussite, fidèles à votre raison d'être
        </p>
        <div className="font-serif text-bpa-off-white text-xl md:text-2xl mb-10">
          <span>Jeudi 29 Janvier 2026</span>
          <span className="mx-4 text-bpa-gold">&#8226;</span>
          <span>Paris</span>
        </div>
        <CTAButton>Réservez votre place</CTAButton>
      </div>
    </section>
  );
};

export default Hero;