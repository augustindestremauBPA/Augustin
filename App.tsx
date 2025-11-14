
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Program from './components/Program';
import Speakers from './components/Speakers';
import PracticalInfo from './components/PracticalInfo';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-bpa-off-white">
      <Header />
      <main>
        <Hero />
        <Introduction />
        <Program />
        <Speakers />
        <PracticalInfo />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default App;
