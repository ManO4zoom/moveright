import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import WhyChoose from './components/WhyChoose';
import Screenshots from './components/Screenshots';
import Pricing from './components/Pricing';
import Demo from './components/Demo';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-white transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      <Hero />
      <Features />
      <Screenshots />
      <WhyChoose />
      <Pricing />
      <Demo />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;