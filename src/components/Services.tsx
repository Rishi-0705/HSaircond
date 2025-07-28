import React from 'react';
import { Wind, Wrench, Snowflake, Settings, CheckCircle, Clock, Home, Droplets, Zap, Refrigerator, Microwave, Thermometer, Star, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Settings className="w-12 h-12 text-blue-600" />,
      title: "Air Conditioner Installation",
      description: "Professional installation of Skyworth air conditioning units with comprehensive warranty coverage",
      features: ["Skyworth Inverter Series", "Skyworth Non-Inverter R32 Series", "1.0HP to 2.5HP Available", "Professional Installation"]
    },
    {
      icon: <Droplets className="w-12 h-12 text-cyan-600" />,
      title: "Maintenance & Cleaning Services",
      description: "Complete cleaning and maintenance services to keep your AC running efficiently",
      features: ["Canvas Wash + Chemical Service", "Overhaul Chemical Wash", "45-day Water Leaking Warranty", "Special Launch Offer: RM99"]
    },
    {
      icon: <Wrench className="w-12 h-12 text-green-600" />,
      title: "Repair & Troubleshooting",
      description: "Comprehensive diagnostic and repair services for all air conditioning issues",
      features: ["Component Replacement", "Emergency Repair Services", "Post-repair Testing", "Comprehensive Warranty"]
    }
  ];

  const acFeatures = [
    "Vitamin C, BIO Fresh, Silver Lonac+, Catechin technology",
    "Fast Cooling capability",
    "Large Blade Long Distance airflow",
    "LED Display",
    "Smart Mode & Sleep Mode",
    "1 Feel temperature sensing",
    "Gold Fin coating",
    "Environment Friendly refrigerant"
  ];

  const maintenanceServices = [
    {
      title: "Canvas Wash + Chemical Service",
      price: "RM99 per unit",
      description: "Complete external and internal cleaning for all wall-mounted units",
      features: ["All horsepower sizes", "Professional canvas protection", "45-day water leaking warranty"]
    },
    {
      title: "Overhaul Chemical Wash",
      price: "Starting from RM160",
      description: "Deep cleaning service for 1.0-1.5HP units with complete dismantling",
      features: ["For 3 units or more", "Complete dismantling", "Before and after comparison", "45-day warranty"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Professional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive air conditioning and appliance services for homes and businesses across KL and PJ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group"
            >
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Skyworth AC Features */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Skyworth Air Conditioner Features
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Advanced technology for superior cooling performance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {acFeatures.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <Star className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-sm text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Maintenance Services */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Maintenance Services
            </h3>
            <p className="text-lg text-gray-600">
              Keep your air conditioning system running efficiently
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {maintenanceServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-500">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-gray-900">{service.title}</h4>
                  <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Warranty Information */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Warranty Coverage</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Shield className="w-12 h-12 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Installation Warranty</h4>
                <p className="text-sm opacity-90">3 Years General Warranty</p>
              </div>
              <div className="text-center">
                <Zap className="w-12 h-12 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Compressor Warranty</h4>
                <p className="text-sm opacity-90">10 Years Compressor Warranty</p>
              </div>
              <div className="text-center">
                <Droplets className="w-12 h-12 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Service Warranty</h4>
                <p className="text-sm opacity-90">45 Days Water Leaking Warranty</p>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Service Banner */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-center text-white">
          <div className="flex items-center justify-center mb-4">
            <Clock className="w-8 h-8 mr-3" />
            <h3 className="text-2xl font-bold">24/7 Emergency Service Available</h3>
          </div>
          <p className="text-lg mb-6 opacity-90">
            Air conditioning breakdown? We're here to help anytime, day or night.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            <a
              href="https://wa.me/60126565936"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              WhatsApp Emergency
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;