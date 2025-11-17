
import React from 'react';
import type { ProgramItem } from '../types';

const ChipIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-bpa-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 7.5h-9a.75.75 0 00-.75.75v7.5c0 .414.336.75.75.75h9a.75.75 0 00.75-.75v-7.5a.75.75 0 00-.75-.75z" />
    </svg>
);

const CompassIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-bpa-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8-9h-1M4 12H3m14.5-5.5L16 8m-8 8l-1.5 1.5M8 8l-1.5-1.5m8 9.5l1.5 1.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15l-3-3 3-3 3 3-3 3z" />
  </svg>
);

const RoadmapIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-bpa-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
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
    title: "Pré-discernement préparatoire via IA",
    description: "Utilisez un outil d'IA pour une auto-évaluation préparatoire en discernant votre cas d'usage en amont de la session.",
    icon: <ChipIcon />,
  },
  {
    title: "Panorama des enjeux IA",
    description: "Conférence à 360° (tech, anthropologie, éthique, économie, raison d'être...) pour décrypter l'IA et son impact réel sur votre modèle d'affaires.",
    icon: <CompassIcon />,
  },
  {
    title: "Alignement collaboratif en petits groupes",
    description: "Ateliers interactifs pour discerner entre pairs le juste usage de l'IA, la valeur transformative, les trahisons-clé à éviter et les actions prioritaires.",
    icon: <GroupIcon />,
  },
  {
    title: "Pré-feuille de route personnalisée",
    description: "Repartez avec les premières étapes claires, actionnables et personnalisées pour tester, discerner et aligner de manière agile l'usage juste de l'IA.",
    icon: <RoadmapIcon />,
  },
];

const Program: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-bpa-off-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-bpa-red">Une journée pour vous transformer</h2>
          <p className="mt-4 text-lg text-bpa-black/70 max-w-3xl mx-auto">
            Parcours éclair combinant une conférence inspirante à 360° et une session collaborative pour initier un discernement stratégique concret.
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
