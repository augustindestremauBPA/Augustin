import React from 'react';
import type { Speaker } from '../types';

const speakersData: Speaker[] = [
  {
    name: 'Augustin Destremau',
    title: 'Partner',
    organization: 'Blaise Pascal Advisors',
    bio: 'Entrepreneur social et numérique, Augustin accompagne les dirigeants et associations dans leurs transformations à la fois IA et passionément humaine, au service du bien commun.',
    imageUrl: '/assets/augustin_destremau.jpeg',
    linkedinUrl: 'https://www.linkedin.com/in/augustin-destremau-99062680',
  },
  {
    name: 'Etienne de Rocquigny',
    title: 'Fondateur',
    organization: 'Blaise Pascal Advisors',
    bio: 'Mathématicien, serial entrepreneur, conférencier et essayiste, ex-vice doyen Centrale Paris, Etienne forme et accompagne dirigeants et entrepreneurs pour aligner la stratégie et le sens.',
    imageUrl: '/assets/etienne_de_rocquigny.jpeg',
    linkedinUrl: 'https://www.linkedin.com/in/ederocquigny',
  },
  {
    name: 'Jerome Lasalle',
    title: 'Partner',
    organization: 'Blaise Pascal Advisors',
    bio: 'Expert en transformation et busdev d\'entreprises numériques, Jerome accompagne l\'exploration de nouveaux business-models et la structuration de la croissance.',
    imageUrl: '/assets/jerome_lasalle.jpeg',
    linkedinUrl: 'https://www.linkedin.com/in/jerome-unleash-growth-data-ai-insights-impact',
  },
];

const Speakers: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="font-serif text-3xl md:text-4xl text-bpa-red">Vos intervenants d'exception</h2>
          <p className="mt-4 text-lg text-bpa-black/70 max-w-2xl mx-auto">
            Bénéficiez de l'expertise de leaders d'opinion à la pointe de leur domaine.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {speakersData.map((speaker, index) => (
            <div 
              key={speaker.name} 
              className="flex flex-col items-center text-center animate-on-scroll transition-transform duration-300 hover:-translate-y-2"
              style={{ '--animation-delay': `${index * 150}ms` } as React.CSSProperties}
            >
              <img 
                src={speaker.imageUrl} 
                alt={`Portrait de ${speaker.name}`}
                className="w-32 h-32 rounded-full object-cover flex-shrink-0 mb-4"
              />
              <div>
                {speaker.linkedinUrl ? (
                  <a href={speaker.linkedinUrl} target="_blank" rel="noopener noreferrer">
                    <h3 className="font-serif text-2xl text-bpa-black font-semibold hover:text-bpa-gold hover:underline transition-colors duration-300">{speaker.name}</h3>
                  </a>
                ) : (
                  <h3 className="font-serif text-2xl text-bpa-black font-semibold">{speaker.name}</h3>
                )}
                <p className="font-sans text-bpa-red font-medium mb-2">{speaker.title}{speaker.organization ? `, ${speaker.organization}` : ''}</p>
                <p className="font-sans text-bpa-black/80 leading-relaxed">{speaker.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;