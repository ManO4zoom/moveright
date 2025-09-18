import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Grow Your Moving Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Start managing leads, jobs, and payments the smart way. Join hundreds of moving companies already using MoveRight CRM.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a
              href="#trial"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <CheckCircle className="w-6 h-6 mr-2" />
              Start Free Trial Now
              <ArrowRight className="w-6 h-6 ml-2" />
            </a>
            <a
              href="https://wa.me/2349024026893"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200 transform hover:scale-105"
            >
              Chat on WhatsApp
            </a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-2xl font-bold mb-2">✅ 7-Day</div>
              <div className="text-blue-100">Free Trial</div>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-2xl font-bold mb-2">💳 No</div>
              <div className="text-blue-100">Credit Card Required</div>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-2xl font-bold mb-2">🚀 5-Min</div>
              <div className="text-blue-100">Setup Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
