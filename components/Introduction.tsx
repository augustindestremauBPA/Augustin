
import React from 'react';

const Introduction: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-on-scroll">
            <img 
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Équipe de dirigeants en pleine discussion stratégique"
              className="rounded-sm shadow-lg w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
          <div className="animate-on-scroll" style={{ '--animation-delay': '150ms' } as React.CSSProperties}>
            <h2 className="font-serif text-3xl md:text-4xl text-bpa-red mb-6">Pourquoi cette Masterclass ?</h2>
            <div className="font-sans text-lg text-bpa-black/80 leading-relaxed space-y-4">
              <p>
                L’IA s’invite avec force dans la stratégie des PMETI. Entre promesses réelles (productivité, expérience client, automatisation), Fear of Missing Out des dernières nouveautés) et risques (désengagement, régression de savoir-faire, asservissement stratégique), comment <strong>garder le juste cap</strong> ?
              </p>
              <p>
                Cette masterclass unique, fruit du partenariat entre l'expertise de <strong>Blaise Pascal Advisors</strong> et l'approche centrée sur l'humain de <strong>Heart Leadership University</strong>, vous offre les clés pour réconcilier deux forces que l'on oppose trop souvent : le Coeur et la Raison.
              </p>
              <p>
                Notre expérience d'entrepreneurs-advisors montre que le discernement du juste usage de l'IA peut souvent servir des modèles d’affaires durablement performants, porteurs d'un sens renouvelé.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
