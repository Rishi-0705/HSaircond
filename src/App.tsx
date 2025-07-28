import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import CustomerReviews from './components/CustomerReviews';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Pricing />
      <CustomerReviews />
      <WhyChooseUs />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;