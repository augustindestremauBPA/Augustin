import React from 'react';
import type { Speaker } from '../types';

const speakersData: Speaker[] = [
  {
    name: 'Augustin Destremau',
    title: 'Fondateur',
    organization: 'Blaise Pascal Advisors',
    bio: 'Augustin accompagne les dirigeants dans leurs transformations. Son approche unique allie rigueur analytique et inspiration philosophique pour aligner stratégie, leadership et sens.',
    imageUrl: 'https://media.licdn.com/dms/image/D4E03AQGgq0oQ0z4Xzg/profile-displayphoto-shrink_400_400/0/1690804724490?e=1726704000&v=beta&t=4Yn1x9t_d_1bS1XmJz6wX2sFz5n_q8E7H0N3r5X1iA4',
  },
  {
    name: 'Etienne de Rocquigny',
    title: 'Fondateur',
    organization: 'Heart Leadership University',
    bio: 'Spécialiste de la décision en univers complexe, Etienne aide les leaders à développer leur intelligence du coeur pour naviguer l\'incertitude avec courage et discernement.',
    imageUrl: 'https://media.licdn.com/dms/image/C4E03AQE1B5t9yYhE0g/profile-displayphoto-shrink_400_400/0/1645041921312?e=1726704000&v=beta&t=sC0aP-1P5bF_n8F-c-z6Z_c_w4A-jR9N-gX_F8e6s_Y',
  },
  {
    name: 'Jerome Lasalle',
    title: 'Managing Director',
    organization: 'Societe Generale',
    bio: 'Expert en stratégie et transformation, Jerome apporte une perspective unique sur le leadership au sein des grandes organisations et partage sa vision en tant que professeur à HEC Paris.',
    imageUrl: 'https://media.licdn.com/dms/image/C5603AQF43v-Yd3nSjA/profile-displayphoto-shrink_400_400/0/1516275811776?e=1726704000&v=beta&t=2z-l-A4lV1e-c_R9uF9Z1_u7X_H-A5x_Y5vQ_r7c_w0',
  },
];

const Speakers: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-bpa-red">Vos intervenants d'exception</h2>
          <p className="mt-4 text-lg text-bpa-black/70 max-w-2xl mx-auto">
            Bénéficiez de l'expertise de leaders d'opinion à la pointe de leur domaine.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {speakersData.map((speaker) => (
            <div key={speaker.name} className="flex flex-col items-center text-center">
              <img 
                src={speaker.imageUrl} 
                alt={`Portrait de ${speaker.name}`}
                className="w-32 h-32 rounded-full object-cover flex-shrink-0 mb-4"
              />
              <div>
                <h3 className="font-serif text-2xl text-bpa-black font-semibold">{speaker.name}</h3>
                <p className="font-sans text-bpa-red font-medium mb-2">{speaker.title}{speaker.organization && `, ${speaker.organization}`}</p>
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