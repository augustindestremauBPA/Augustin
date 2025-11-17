import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-bpa-red">À propos des organisateurs</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="flex flex-col text-center md:text-left">
            <a href="https://www.pascal-advisors.com/" target="_blank" rel="noopener noreferrer" className="inline-block mb-4">
              <img 
                src="https://images.squarespace-cdn.com/content/v1/6321d1a0e854dc2d6d3a2a9c/25683639-38b0-45cf-9b37-e7e09314fb13/bpa-logo-rouge.png?format=1500w" 
                alt="Blaise Pascal Advisors Logo" 
                className="h-10 md:h-12 w-auto"
              />
            </a>
            <p className="font-sans text-bpa-black/80 leading-relaxed flex-grow">
              <strong>Blaise Pascal Advisors</strong> est un cabinet d'advisors-entrepreneurs qui accompagnent dirigeants et entrepreneurs pour prendre un cap stratégique de transformation ayant un sens à l'ère de l'IA pour développer des entreprises durables et profitables.
            </p>
          </div>
          <div className="flex flex-col text-center md:text-left">
            <a href="https://www.heartleadershipuniversity.org/" target="_blank" rel="noopener noreferrer" className="inline-block mb-4">
              <img 
                src="https://www.heartleadershipuniversity.org/wp-content/uploads/2022/03/cropped-logo.webp" 
                alt="Heart Leadership University Logo" 
                className="h-12 w-auto"
              />
            </a>
            <p className="font-sans text-bpa-black/80 leading-relaxed flex-grow">
              <strong>Heart Leadership University</strong> est une institution dédiée au leadership par l'intelligence du coeur. Elle forme les leaders à cultiver l'empathie, l'authenticité et le courage pour créer des cultures d'entreprise où la performance et le bien-être humain prospèrent de concert.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
