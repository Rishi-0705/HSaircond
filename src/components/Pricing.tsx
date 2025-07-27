import React from 'react';
import { CheckCircle, Star, Wind, Settings, Droplets, MessageCircle } from 'lucide-react';

const Pricing = () => {
  // WhatsApp message templates for each service
  const whatsappMessages = [
    "Hello, I'm interested in Wall Mounted Chemical Services.",
    "Hello, I'm interested in Wall Mounted Installation service.",
    "Hello, I'm interested in Ceiling Cassette Chemical Services.",
    "Hello, I'm interested in Ceiling Cassette Installation service."
  ];

  const whatsappNumber = "601115747113";

  const pricingPlans = [
    {
      icon: <Droplets className="w-8 h-8 text-blue-600" />,
      title: "Wall Mounted Chemical Services",
      description: "Complete chemical cleaning and maintenance for wall mounted units",
      pricing: [
        { hp: "1.0 HP", price: "RM 99" },
        { hp: "1.5 HP", price: "RM 99" },
        { hp: "2.0 HP", price: "RM 99" },
        { hp: "2.5 HP", price: "RM 99" },
        { hp: "3.0 HP", price: "RM 99" }
      ],
      popular: false,
      whatsappMessage: whatsappMessages[0]
    },
    {
      icon: <Settings className="w-8 h-8 text-green-600" />,
      title: "Wall Mounted Installation",
      description: "Professional installation of wall mounted air conditioning units",
      pricing: [
        { hp: "1.0 HP", price: "RM 195" },
        { hp: "1.5 HP", price: "RM 195" },
        { hp: "2.0 HP", price: "RM 245" },
        { hp: "2.5 HP", price: "RM 245" },
        { hp: "3.0 HP", price: "RM 245" }
      ],
      popular: false,
      whatsappMessage: whatsappMessages[1]
    },
    {
      icon: <Droplets className="w-8 h-8 text-cyan-600" />,
      title: "Ceiling Cassette Chemical Services",
      description: "Deep cleaning and chemical servicing for ceiling cassette units",
      pricing: [
        { hp: "1.5 HP", price: "RM 189" },
        { hp: "2.0 HP", price: "RM 189" },
        { hp: "2.5 HP", price: "RM 189" },
        { hp: "3.0 HP", price: "RM 189" }
      ],
      popular: false,
      whatsappMessage: whatsappMessages[2]
    },
    {
      icon: <Settings className="w-8 h-8 text-purple-600" />,
      title: "Ceiling Cassette Installation",
      description: "Expert installation of ceiling cassette air conditioning systems",
      pricing: [
        { hp: "1.5 HP", price: "RM 250" },
        { hp: "2.0 HP", price: "RM 290" },
        { hp: "2.5 HP", price: "RM 330" },
        { hp: "3.0 HP", price: "RM 370" }
      ],
      popular: false,
      whatsappMessage: whatsappMessages[3]
    }
  ];

  const handleWhatsAppClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No hidden fees, no surprises. Get professional air conditioning services at competitive rates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-2 ${
                plan.popular 
                  ? 'border-blue-500 transform scale-105' 
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="mb-4 flex justify-center">
                  {plan.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {plan.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {plan.description}
                </p>
              </div>

              {/* Pricing Table */}
              <div className="mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <div>Capacity</div>
                    <div className="text-right">Price</div>
                  </div>
                  <div className="space-y-2">
                    {plan.pricing.map((item, itemIndex) => (
                      <div key={itemIndex} className="grid grid-cols-2 gap-2 text-sm border-b border-gray-200 pb-2 last:border-b-0">
                        <div className="text-gray-600">{item.hp}</div>
                        <div className="text-right font-semibold text-gray-900">{item.price}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-xs text-gray-500 text-center mt-2">
                  All prices include basic materials and labor
                </p>
              </div>

              <button 
                onClick={() => handleWhatsAppClick(plan.whatsappMessage)}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book Service</span>
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-blue-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Custom Quote?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              For commercial installations, multiple units, or special requirements, 
              contact us for a personalized quote tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
              <a
                href="https://wa.me/601115747113"
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

export default Pricing;