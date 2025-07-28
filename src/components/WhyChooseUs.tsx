import React from 'react';
import { Shield, Clock, Users, DollarSign, Award, Wrench, CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <DollarSign className="w-12 h-12 text-green-600" />,
      title: "No Deposit Required",
      description: "Start your air conditioning service without any upfront payment. We believe in building trust through quality work, not advance fees."
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Skilled & Certified Technicians",
      description: "Our team consists of professionally trained and certified technicians with extensive experience in air conditioning installation, repair, and maintenance."
    },
    {
      icon: <Clock className="w-12 h-12 text-purple-600" />,
      title: "Fast & Efficient Service",
      description: "We understand the urgency of air conditioning issues, especially in Malaysia's climate. Our team provides prompt response and efficient service to get your AC running quickly."
    },
    {
      icon: <Shield className="w-12 h-12 text-red-600" />,
      title: "Affordable & Transparent Pricing",
      description: "Honest, upfront pricing with no hidden costs. We provide clear quotes before any work begins, ensuring you know exactly what you're paying for."
    },
    {
      icon: <Award className="w-12 h-12 text-yellow-600" />,
      title: "Builds Credibility and Trust",
      description: "With years of experience serving KL and PJ areas, we've built a reputation based on reliable service and customer satisfaction."
    },
    {
      icon: <Wrench className="w-12 h-12 text-cyan-600" />,
      title: "Comprehensive Warranty Coverage",
      description: "3 Years General Warranty on installations, 10 Years Compressor Warranty, and 45 Days Water Leaking Warranty on all services."
    }
  ];

  const warrantyItems = [
    "3 Years General Warranty on installations",
    "10 Years Compressor Warranty",
    "45 Days Water Leaking Warranty on all services"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose HS Air Conditioner?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional air conditioning services with transparent pricing, no deposits required, 
            and comprehensive warranty coverage for your peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group"
            >
              <div className="mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Warranty Details */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Warranty Promise
            </h3>
            <p className="text-lg text-gray-600">
              We stand behind our work with comprehensive warranty coverage
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {warrantyItems.map((item, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl shadow-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Service Areas
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Primary Coverage: KL (Wilayah) & PJ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+60126565936"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call: +6012-656 5936
              </a>
              <a
                href="https://wa.me/60126565936"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;