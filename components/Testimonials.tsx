
import React from 'react';
import type { Testimonial } from '../types';

const testimonialsData: Testimonial[] = [
  {
    quote: "L’heure où l’IA nourrit autant de fantasmes que de peurs, nous avons un devoir : retrouver notre capacité de discernement. Pas pour suivre le mouvement. Pas pour faire “comme les autres”. Mais pour remettre la technologie au service du vivant, du travail bien fait et de la dignité humaine. \nC’est exactement ce que cette Master Class m’a permis de faire : \n- remettre de la clarté dans le brouillard médiatique, \n- distinguer l’utile du bruit, \n- comprendre comment l’IA peut renforcer nos métiers plutôt que les dénaturer, \n- et surtout réconcilier tête, cœur et corps dans nos décisions de dirigeants.",
    author: "Michel Meunier",
    company: "Dirigeant-entrepreneur & Président de Janus France (Société à mission)",
  },
  {
    quote: "J’ai beaucoup apprécié cette masterclass qui apportait un bon équilibre entre mise à niveau de culture générale, qualité des interactions en atelier en tenant compte de l’expérience de chacun, et livrable structurant. Avec le prisme d’un regard éthique sur l’IA, dont les entreprises ont bien besoin aujourd’hui pour engager les réflexions préalables nécessaires, garder la maîtrise et discerner ses justes usages.",
    author: "Florence Guémy",
    company: "Ex-Bayard, VP de Heart Leadership University",
  },
  {
    quote: "Enfin une approche qui ne sacrifie pas l'humain sur l'autel de la performance. Cette réflexion profonde et apaisée sur l'IA m'a permis de poursuivre l’intégration de l’IA dans mon entreprise de façon collaborative et en plaçant l’humain au centre de la réflexion. Exactement les clés que je cherchais. Indispensable.",
    author: "Martial Deboeuf",
    company: "Président - Serue Ingénierie",
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
              <p className="font-serif text-xl italic text-bpa-black/90 mb-6 whitespace-pre-line">"{testimonial.quote}"</p>
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