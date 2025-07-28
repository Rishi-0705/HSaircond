import React from 'react';
import { Snowflake, Wind, Shield, Clock, MapPin, Thermometer, Sparkles, CheckCircle, Star, Award } from 'lucide-react';

// Snowflake component for animation
const SnowflakeAnimation = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {[...Array(15)].map((_, i) => (
      <div
        key={i}
        className={`absolute text-blue-400/40 animate-snowfall-${i % 3 + 1}`}
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${12 + Math.random() * 8}s`,
        }}
      >
        {i % 2 === 0 ? '❅' : '❆'}
      </div>
    ))}
  </div>
);

// Cooling waves background
const CoolingWaves = () => (
  <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-blue-500/5 to-transparent animate-wave-float" />
);

// Geometric pattern background
const GeometricPattern = () => (
  <div className="absolute inset-0 opacity-30">
    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pattern-float" />
    <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-cyan-400/10 rounded-full blur-3xl animate-pattern-float-delayed" />
    <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-pattern-float" />
  </div>
);



const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-32">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100">
        <div className="absolute inset-0 bg-white/40"></div>
      </div>
      
      {/* Background Elements */}
      <GeometricPattern />
      <CoolingWaves />
      <SnowflakeAnimation />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 md:py-2">
        <div className="max-w-4xl mx-auto">
          {/* Enhanced Trust Badge */}
          

          {/* Enhanced Main Headline with staggered animation */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
            <span className="block animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
             HS Air Conditioner
            </span>
            <span className="block animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <span className="text-blue-600">
                Repair
              </span>
              {' '}&{' '}
              <span className="text-cyan-600">Service</span>
            </span>
            <span className="block animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
              
            </span>
          </h1>

          {/* Enhanced Subtext */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '1.1s' }}>
           Professional Aircond Service & Installation for Every Project
          </p>

          {/* Service Area & Emergency Info */}
          

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
            <button
              onClick={() => scrollToSection('services')}
              className="group bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105"
            >
              <div className="flex items-center gap-2">
                <Snowflake className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180" />
                <span>View Services</span>
              </div>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="group bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105 animate-pulse"
            >
              <div className="flex items-center gap-2">
                <Thermometer className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                <span>Get Quote</span>
              </div>
            </button>
          </div>

          {/* Enhanced Trust Indicators */}
          

          {/* Enhanced Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mt-12 animate-fade-in-up" style={{ animationDelay: '1.9s' }}>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">On Time</h3>
              <p className="text-gray-600">Quick Response</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Shield className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
              <p className="text-gray-600">Professional Technicians</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Wind className="w-8 h-8 text-cyan-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">100%</h3>
              <p className="text-gray-600">Satisfaction Guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;