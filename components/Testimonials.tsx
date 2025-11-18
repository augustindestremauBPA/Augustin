import React from 'react';
import type { Testimonial } from '../types';

const testimonialsData: Testimonial[] = [
  {
    quote: "Une journée qui change radicalement la perspective sur son propre leadership. Le duo Coeur/Raison est d'une puissance incroyable une fois maîtrisé.",
    author: "Michel Meunier",
    company: "Janus France",
  },
  {
    quote: "J'ai rarement participé à une formation avec un tel niveau de profondeur et d'applicabilité. Les outils sont concrets et l'énergie du groupe, très porteuse.",
    author: "Florence Guemy",
    company: "Ex-Bayard",
  },
  {
    quote: "Enfin une approche qui ne sacrifie pas l'humain sur l'autel de la performance. C'est la clé du management durable que je cherchais. Indispensable.",
    author: "Martial Deboeuf",
    company: "Serue Ingenierie",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-bpa-off-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="font-serif text-3xl md:text-4xl text-bpa-red">Ce qu'en disent les dirigeants</h2>
           <p className="mt-2 text-md text-bpa-black/60">Participants de la session de Septembre 2025</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div 
              key={testimonial.author} 
              className="bg-white p-8 rounded-sm shadow-lg border-l-4 border-bpa-gold transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:border-l-8 animate-on-scroll"
              style={{ '--animation-delay': `${index * 150}ms` } as React.CSSProperties}
            >
              <p className="font-serif text-xl italic text-bpa-black/90 mb-6">"{testimonial.quote}"</p>
              <div className="text-right">
                <p className="font-sans font-bold text-bpa-black">{testimonial.author}</p>
                <p className="font-sans text-bpa-black/70">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;