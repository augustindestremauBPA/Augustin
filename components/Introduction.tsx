
import React from 'react';

const Introduction: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto max-w-4xl text-center px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl text-bpa-red mb-6">Pourquoi cette Masterclass est-elle essentielle ?</h2>
        <div className="font-sans text-lg text-bpa-black/80 leading-relaxed space-y-4">
          <p>
            Dans un monde en constante mutation, le leadership traditionnel ne suffit plus. Les dirigeants d'aujourd'hui doivent naviguer dans la complexité, inspirer des équipes diversifiées et piloter la performance tout en cultivant un environnement de travail humain et épanouissant.
          </p>
          <p>
            Cette masterclass unique, fruit de la collaboration entre l'expertise stratégique de <strong>Blaise Pascal Advisors</strong> et l'approche centrée sur l'humain de <strong>Heart Leadership University</strong>, vous offre les clés pour réconcilier deux forces que l'on oppose trop souvent : le Coeur et la Raison.
          </p>
          <p>
            Apprenez à maîtriser l'équilibre dynamique entre l'intelligence émotionnelle et la rigueur analytique pour devenir un leader complet, capable de générer une performance durable et un impact positif.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
