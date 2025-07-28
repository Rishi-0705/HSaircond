import React from 'react';
import { Star, Quote } from 'lucide-react';

const CustomerReviews = () => {
  const reviews = [
    {
      name: "Nifiza Akhter",
      rating: 5,
      review: "Professional and efficient service. The technician was punctual, knowledgeable, and thorough. My aircon is now running smoothly and more efficiently. Highly recommended!",
      emoji: "🥰"
    },
    {
      name: "Emily Yoong",
      rating: 5,
      review: "Fast response and very good services provided especially we need urgently during the weekend.",
      emoji: "👍"
    },
    {
      name: "Wong Jun Wei",
      rating: 5,
      review: "Very experienced service team. They will let me know what's the actual type of service required after checking my ac unit. Am impressed with their level of service and customer service. Job well done!",
      emoji: "👏"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our professional air conditioning services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-8 h-8 text-blue-200" />
              </div>

              {/* Rating Stars */}
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{review.review}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-500">Satisfied Customer</p>
                </div>
                <div className="text-2xl">
                  {review.emoji}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
              ))}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Trusted by Hundreds of Customers
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Join our growing list of satisfied customers who trust HS Air Conditioner Services for their cooling needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+60126565936"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Call Now: +60 12-656 5936
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

export default CustomerReviews; 