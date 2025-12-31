
import React from 'react';
import type { Testimonial } from '../types';

const testimonialsData: Testimonial[] = [
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
  {
    quote: `À l’heure où l’IA génère autant de fantasmes que de peurs, notre responsabilité est claire : retrouver le discernement.

Pas pour suivre la mode.
Mais pour remettre la technologie au service du vivant, du travail bien fait et de la dignité humaine.

Cette Master Class m’a permis de : 
Faire de la clarté dans le brouillard médiatique, distinguer l’utile du bruit, comprendre comment l’IA peut renforcer nos métiers, réconcilier tête, cœur et corps dans nos décisions de dirigeants.

Chez Janus France, notre raison d’être est simple : assurer les conditions de vie sur Terre pour les enfants d’aujourd’hui et de demain.
Ce n’est pas un slogan, c’est un cap.

Alors la vraie question est :
Quelle place voulons-nous donner à l’IA ?
Au service de quoi, et de qui ?
Avec quelle responsabilité envers le monde que nous transmettrons ?

Grâce à cette méthode, j’ai pu aligner vision, contribution et action.
De la réaction à la décision, du bruit à la justesse et de la peur à la lucidité.
C’est ça, nos Justes Combats.

Merci à HLU pour cet apport précieux.
On continue : construire, coopérer, transmettre.
Pour un futur solide, vivable et profondément humain.`,
    author: "Michel Meunier",
    company: "Dirigeant-entrepreneur & Président de Janus France (Société à mission)",
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
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonialsData.map((testimonial, index) => (
            <div 
              key={testimonial.author} 
              className={`bg-white p-8 rounded-sm shadow-lg border-l-4 border-bpa-gold transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl hover:border-l-8 animate-on-scroll ${index === 2 ? 'md:col-span-2' : ''}`}
              style={{ '--animation-delay': `${index * 150}ms` } as React.CSSProperties}
            >
              <p className="font-serif text-xl italic text-bpa-black/90 mb-6 whitespace-pre-line leading-relaxed">"{testimonial.quote}"</p>
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
