import React from 'react';
import { Shield, Clock, Users, MapPin, Award, Wrench } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield className="w-12 h-12 text-green-600" />,
      title: "Low Rates Guarantee",
      description: "Competitive pricing with no hidden costs. We guarantee the best value for professional service in KL."
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Professional Technicians",
      description: "Licensed and experienced technicians with years of expertise in air conditioning and refrigeration."
    },
    {
      icon: <Clock className="w-12 h-12 text-purple-600" />,
      title: "Quick Response",
      description: "Same-day service available. We understand the urgency of cooling system breakdowns in Malaysia's climate."
    },
    {
      icon: <MapPin className="w-12 h-12 text-red-600" />,
      title: "Wide Service Coverage",
      description: "Serving all areas across Kuala Lumpur and surrounding regions with reliable, prompt service."
    },
    {
      icon: <Award className="w-12 h-12 text-yellow-600" />,
      title: "Quality Assurance",
      description: "All work comes with warranty. We stand behind our service with 100% satisfaction guarantee."
    },
    {
      icon: <Wrench className="w-12 h-12 text-cyan-600" />,
      title: "Complete Solutions",
      description: "From installation to maintenance and emergency repairs - we handle all your cooling needs."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Frosty Air Con?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to providing exceptional air conditioning and refrigeration services 
            that keep you cool and comfortable year-round.
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

        {/* Trust Indicators */}
        

        {/* Testimonial */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Award key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-xl text-gray-700 italic mb-6">
              "Excellent service! The technician arrived on time, was very professional, 
              and fixed our air conditioning quickly. The pricing was fair and transparent. 
              Highly recommend Frosty Air Con for anyone in KL!"
            </blockquote>
            <div className="text-gray-600">
              <p className="font-semibold">Sarah Lim</p>
              <p className="text-sm">Mont Kiara Resident</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;