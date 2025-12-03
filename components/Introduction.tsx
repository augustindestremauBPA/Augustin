
import React from 'react';

const Introduction: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Titre déplacé au-dessus */}
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="font-serif text-3xl md:text-4xl text-bpa-red">Pourquoi cette Masterclass ?</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Images avec taille réduite (max-w-sm au lieu de max-w-md) */}
          <div className="animate-on-scroll flex flex-col gap-6 max-w-sm mx-auto">
            <img 
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Équipe de dirigeants en pleine discussion stratégique"
              className="rounded-sm shadow-lg w-full h-auto object-cover aspect-[4/3]"
            />
            <img 
              src="https://i.postimg.cc/cLXfRFPc/HLU.png" 
              alt="Publications HLU sur l'IA"
              className="rounded-sm shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Texte espacé selon la demande */}
          <div className="animate-on-scroll" style={{ '--animation-delay': '150ms' } as React.CSSProperties}>
            <div className="font-sans text-lg text-bpa-black/80 leading-relaxed space-y-6">
              <p>
                L’IA s’invite avec force dans la stratégie des PMETI.
              </p>
              
              <p>
                Entre les promesses réelles - productivité, expérience client, automatisation- , la "Fear of Missing Out" des dernières nouveautés et les risques - désengagement, régression de savoir-faire, asservissement stratégique -, comment garder le juste cap ?
              </p>
              
              <p>
                Cette masterclass unique, fruit du partenariat entre l'expertise de <strong>Blaise Pascal Advisors</strong> et l'approche centrée sur l'humain de <strong>Heart Leadership University</strong>, vous offre les clés pour réconcilier deux forces que l'on oppose trop souvent : le Coeur et la Raison.
              </p>

              <p>
                <a href="https://www.heartleadershipuniversity.org/wp-content/uploads/2024/06/publicationHLU-IDC-a-l-ere-de-l-intelligence-artificielle.pdf" target="_blank" rel="noopener noreferrer" className="text-bpa-red underline hover:text-bpa-gold transition-colors font-medium">
                  Retrouvez les 2 publications de HLU sur l’IA : état des lieux et prospective 2035.
                </a>
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
