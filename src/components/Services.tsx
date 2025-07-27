import React from 'react';
import { Wind, Wrench, Snowflake, Settings, CheckCircle, Clock, Home, Droplets, Zap, Refrigerator, Microwave, Thermometer } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Settings className="w-12 h-12 text-blue-600" />,
      title: "Installation",
      description: "Professional installation services for all types of air conditioning units",
      features: ["Wall-Mounted", "Ceiling Mounted", "Ceiling Exposed"]
    },
    {
      icon: <Wrench className="w-12 h-12 text-cyan-600" />,
      title: "Air Con Repairs",
      description: "Comprehensive repair and maintenance services for air conditioning systems",
      features: ["General service", "Chemical service", "Gas licking", "Water licking", "Gas charging", "Compressor fault"]
    },
    {
      icon: <Home className="w-12 h-12 text-green-600" />,
      title: "Others",
      description: "Additional appliance repair and maintenance services",
      features: ["Upright Freezer", "Chest Freezer", "Washing Machine", "Microwave", "Water Heater"]
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
            Comprehensive air conditioning and appliance services for homes and businesses across Kuala Lumpur
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

        {/* Service Highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <Wind className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 mb-2">Air Conditioning</h4>
            <p className="text-sm text-gray-600">Installation & Repair</p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <Droplets className="w-8 h-8 text-cyan-600 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 mb-2">Chemical Service</h4>
            <p className="text-sm text-gray-600">Deep Cleaning</p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <Zap className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 mb-2">Gas Services</h4>
            <p className="text-sm text-gray-600">Charging & Leak Repair</p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <Refrigerator className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 mb-2">Appliances</h4>
            <p className="text-sm text-gray-600">Freezer & Washing Machine</p>
          </div>
        </div>

        {/* Emergency Service Banner */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-center text-white">
          <div className="flex items-center justify-center mb-4">
            <Clock className="w-8 h-8 mr-3" />
            <h3 className="text-2xl font-bold">24/7 Emergency Service Available</h3>
          </div>
          <p className="text-lg mb-6 opacity-90">
            Air conditioning breakdown? We're here to help anytime, day or night.
          </p>
          <a
            href="tel:+601115747113"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Call Now: +6011-1574 7113
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;