
import React, { ReactNode } from 'react';
import CTAButton from './CTAButton';

const InfoItem: React.FC<{ icon: ReactNode; title: string; children: ReactNode }> = ({ icon, title, children }) => (
    <div className="flex items-start">
        <div className="flex-shrink-0 mr-4 mt-1">{icon}</div>
        <div>
            <h4 className="font-serif text-xl text-bpa-off-white/80">{title}</h4>
            <p className="font-sans text-lg text-bpa-off-white font-semibold">{children}</p>
        </div>
    </div>
);

const CalendarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-bpa-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const ClockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-bpa-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const LocationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-bpa-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const PriceIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-bpa-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0 1.172 1.953 1.172 5.119 0 7.072zM12 12h.01" /></svg>;


const PracticalInfo: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-bpa-red to-red-900 text-bpa-off-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <h2 className="font-serif text-3xl md:text-4xl mb-8">Informations Pratiques</h2>
            <div className="space-y-6">
                <InfoItem icon={<CalendarIcon />} title="Date">Jeudi 29 Janvier 2026</InfoItem>
                <InfoItem icon={<ClockIcon />} title="Horaires">9h30 - 17h30</InfoItem>
                <InfoItem icon={<LocationIcon />} title="Lieu">Un lieu de qualité au coeur de Paris<br /><span className="text-sm font-light opacity-80">(Adresse communiquée après inscription)</span></InfoItem>
                <InfoItem icon={<PriceIcon />} title="Tarif">1 300 € HT par participant<br /><span className="text-sm font-light opacity-80">(Inclut échanges préalables, animation et supports)</span></InfoItem>
            </div>
          </div>
          <div 
            className="bg-bpa-off-white text-bpa-black p-8 md:p-12 text-center rounded-sm shadow-2xl animate-on-scroll"
            style={{ '--animation-delay': '200ms' } as React.CSSProperties}
          >
              <h3 className="font-serif text-2xl md:text-3xl text-bpa-red mb-4">Les places sont limitées.</h3>
              <p className="font-sans text-lg mb-8">Pour garantir une expérience d'apprentissage et de networking de qualité, nous limitons volontairement le nombre de participants à 12.</p>
              <CTAButton href="https://form.typeform.com/to/Anx2Clfm">Je réserve ma place</CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticalInfo;