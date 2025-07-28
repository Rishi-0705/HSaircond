import React from 'react';
import { MapPin, Phone, Clock, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About HS Air Conditioner
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            We are a professional Air Conditioner Services company based in Klang Valley.

We strive to offer the best, professional and affordable services to our customers!

We provide various air-cond related services, including cleaning, installation, repair, water heater installation, lighting services, and fan services.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <Users className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Expert Team</h3>
                  <p className="text-gray-600">
                    Our professional technicians have extensive experience in servicing all major AC and refrigeration brands.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Reliable Service</h3>
                  <p className="text-gray-600">
                    We pride ourselves on punctuality, quality workmanship, and transparent pricing for every job.
                  </p>
                </div>
              </div>
              
                              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Local Expertise</h3>
                  <p className="text-gray-600">
                    Based in Klang Valley, we understand the local climate challenges and provide solutions that work.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-700">
                To provide reliable, affordable, and professional air conditioning and refrigeration services 
                that exceed customer expectations while building long-term relationships based on trust and quality.
              </p>
            </div>
          </div>

          {/* Service Area Map & Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Areas</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Kuala Lumpur City Center</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Petaling Jaya</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Selangor</span>
                </div>
                
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday-Saturday</span>
                  <span className="font-semibold text-gray-900">9:00 AM - 5:00 PM</span>
                </div>
                
                <div className="border-t pt-3 mt-4">
                  <div className="flex items-center space-x-2 text-red-600">
                    <Clock className="w-4 h-4" />
                    <span className="font-semibold">24/7 Emergency Service Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;