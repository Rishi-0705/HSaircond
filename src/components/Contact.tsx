import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Create WhatsApp message
    const whatsappMessage = `Hello Frosty Air Con!

I would like to request a quote for your services:

📋 CUSTOMER DETAILS:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || 'Not provided'}

🔧 SERVICE REQUIRED:
${formData.service}

💬 MESSAGE:
${formData.message || 'No additional message'}

Please provide me with a detailed quote. Thank you!`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // WhatsApp business number
    const whatsappNumber = '601115747113';
    
    // Open WhatsApp after a brief delay to show loading state
    setTimeout(() => {
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      window.open(whatsappURL, '_blank');
      setIsSubmitting(false);
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to fix your air conditioning or need a quote? Contact us today for fast, 
            professional service across Kuala Lumpur.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <a href="tel:+601115747113" className="text-blue-600 hover:text-blue-700">
                    +60 11-157 47113
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Available 24/7 for emergencies</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MessageCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">WhatsApp</h4>
                    <a 
                      href="https://wa.me/601115747113" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700"
                    >
                      +60 11-157 47113
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Quick response via WhatsApp</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <a href="mailto:frostyaircon4you@gmail.com" className="text-purple-600 hover:text-purple-700">
                    frostyaircon4you@gmail.com
                    </a>
                    <p className="text-sm text-gray-500 mt-1">For quotes and inquiries</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-700">
                      29 Tkt 2, MWE Commercial Park<br />
                      Jln 2/33B MWE Commercial Park<br />
                      52000 Kuala Lumpur<br />
                      WP Kuala Lumpur
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Need Immediate Help?</h3>
              <p className="mb-6 opacity-90">
                For urgent air conditioning repairs or emergencies, call us directly or send a WhatsApp message.
              </p>
              <div className="flex justify-center">
                <a
                  href="https://wa.me/601115747113"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors text-center"
                >
                  <MessageCircle className="w-4 h-4 inline mr-2" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Quote</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="+60 12-345 6789"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Required *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.service ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select a service</option>
                  <option value="Wall Mounted Chemical Services">Wall Mounted Chemical Services</option>
                  <option value="Wall Mounted Installation">Wall Mounted Installation</option>
                  <option value="Ceiling Cassette Chemical Services">Ceiling Cassette Chemical Services</option>
                  <option value="Ceiling Cassette Installation">Ceiling Cassette Installation</option>
                  <option value="Emergency Repair">Emergency Repair</option>
                  <option value="Other">Other</option>
                </select>
                {errors.service && (
                  <p className="text-red-500 text-sm mt-1">{errors.service}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your air conditioning needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-green-600 hover:bg-green-700 text-white'
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                <span>{isSubmitting ? 'Opening WhatsApp...' : 'Send via WhatsApp'}</span>
              </button>
            </form>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center space-x-2 text-blue-800">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">Response Time: Within 2 hours during business hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;