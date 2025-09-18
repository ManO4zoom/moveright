import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Adebayo Johnson',
    company: 'Fast Movers',
    location: 'Lagos, Nigeria',
    content: 'MoveRight CRM has transformed our operations. We now close more deals and stay organized! Our revenue increased by 60% in just 6 months.',
    rating: 5,
    avatar: 'https://portfolio.micidservices.com/wp-content/uploads/2025/08/525830789_1318122313070002_6308540936301608707_n-1.jpg'
  },
  {
    name: 'Yusuf Abubakar',
    company: 'QuickMove Logistics',
    location: 'Abuja, Nigeria',
    content: 'The automation features save us hours every week. It\'s a game-changer for movers in Nigeria. Customer satisfaction has never been higher.',
    rating: 5,
    avatar: 'https://portfolio.micidservices.com/wp-content/uploads/2025/08/525830789_1318122313070002_6308540936301608707_n-1.jpg'
  },
  {
    name: 'MarkDavid Ezeh',
    company: 'GoRight Movers',
    location: 'Lagos, Nigeria',
    content: 'From lead capture to final invoice, everything is seamless. Our team productivity increased dramatically and we rarely miss follow-ups now.',
    rating: 5,
    avatar: 'https://portfolio.micidservices.com/wp-content/uploads/2025/08/525830789_1318122313070002_6308540936301608707_n-1.jpg'
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Are Saying
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join hundreds of moving companies across the world who trust MoveRight CRM
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative"
            >
              <div className="absolute -top-4 -left-4 bg-blue-600 p-3 rounded-full">
                <Quote className="w-6 h-6 text-white" />
              </div>

              <div className="mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 inline fill-current" />
                ))}
              </div>

              <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </blockquote>

              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">
                    {testimonial.company}, {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Customer Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">WhatsApp Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
