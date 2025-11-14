
import React from 'react';
import type { ProgramItem } from '../types';

const BrainIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-bpa-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.87 7.21a4.5 4.5 0 016.26 0L12 8.27l.87-.85a4.5 4.5 0 016.26 0l.01.01a4.5 4.5 0 010 6.26l-6.63 6.63a.75.75 0 01-1.06 0l-6.63-6.63a4.5 4.5 0 010-6.26l.01-.01z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75c-4.14-2.82-6.63-6.63-6.63-10.5C5.37 6.63 8.25 4 12 4s6.63 2.63 6.63 7.25c0 3.87-2.49 7.68-6.63 10.5z" clipRule="evenodd" />
  </svg>
);

const CompassIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-bpa-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8-9h-1M4 12H3m14.5-5.5L16 8m-8 8l-1.5 1.5M8 8l-1.5-1.5m8 9.5l1.5 1.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15l-3-3 3-3 3 3-3 3z" />
  </svg>
);

const BalanceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-bpa-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m-6-6h12M6 9h12m-9 0V6a3 3 0 013-3h0a3 3 0 013 3v3m-6 0v3m6-3v3" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M3 15l2.25-4.5L7.5 15M16.5 15l2.25-4.5L21 15" />
  </svg>
);

const GroupIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-bpa-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.04-2.72a3 3 0 00-4.682 2.72 9.094 9.094 0 003.741.479m7.04-2.72a3 3 0 00-5.398-.052A3 3 0 006.26 16.18m11.48 0A9.094 9.094 0 0012 18.72a9.094 9.094 0 00-5.741-.479m5.741 0a3 3 0 00-4.133-3.152 3 3 0 00-4.133 3.152" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z" />
    </svg>
);

const programData: ProgramItem[] = [
  {
    title: "Le Leadership du Coeur",
    description: "Intelligence Émotionnelle et Empathie Stratégique pour mobiliser et inspirer vos équipes.",
    icon: <BrainIcon />,
  },
  {
    title: "La Raison au Service de la Décision",
    description: "Développez clarté, courage et vision pour prendre des décisions complexes avec confiance.",
    icon: <CompassIcon />,
  },
  {
    title: "L'Équilibre Dynamique",
    description: "Intégrez Coeur et Raison pour une performance durable, un leadership authentique et un impact mesurable.",
    icon: <BalanceIcon />,
  },
  {
    title: "Ateliers Pratiques & Networking",
    description: "Mise en situation sur des cas réels, et des moments privilégiés pour échanger entre pairs.",
    icon: <GroupIcon />,
  },
];

const Program: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-bpa-off-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-bpa-red">Une journée pour vous transformer</h2>
          <p className="mt-4 text-lg text-bpa-black/70 max-w-2xl mx-auto">
            Notre programme est conçu comme un parcours intensif et interactif pour équiper les leaders des compétences de demain.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programData.map((item, index) => (
            <div key={index} className="bg-white p-8 text-center rounded-sm shadow-sm border-t-2 border-bpa-gold">
              <div className="flex justify-center items-center mb-4">{item.icon}</div>
              <h3 className="font-serif text-xl font-semibold text-bpa-black mb-2">{item.title}</h3>
              <p className="font-sans text-bpa-black/70 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Program;
