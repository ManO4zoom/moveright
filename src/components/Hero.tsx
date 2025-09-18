import React from 'react';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-24 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-6">
              🚛 Built for all Moving Companies
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Automate Your Moving Business –{' '}
              <span className="text-blue-600 relative">
                Get More Jobs Done
                <svg
                  className="absolute -bottom-2 left-0 right-0 h-3 text-blue-600/30"
                  viewBox="0 0 200 12"
                  fill="currentColor"
                >
                  <path d="M0 8c40-4 80-4 120 0s80 4 80 0V12H0z"/>
                </svg>
              </span>{' '}
              Faster.
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              The All-in-One CRM built for Moving Companies. 
              Manage leads, send quotes, schedule jobs, track revenue – all from one simple dashboard.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#trial"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <CheckCircle className="w-5 h-5 mr-2" />
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="https://calendly.com/gorightmovers/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                <Play className="w-5 h-5 mr-2" />
                Book a Free Demo
              </a>
            </div>
            
            <div className="text-sm text-gray-500">
              ✅ 7-day free trial • ✅ No credit card required • ✅ Setup in 5 minutes
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white rounded-2xl shadow-2xl p-4 border">
                <img
                  src="https://images.pexels.com/photos/4065158/pexels-photo-4065158.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="CRM Dashboard Preview"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-4 -left-4 bg-green-100 text-green-800 px-3 py-2 rounded-lg text-sm font-medium shadow-lg animate-bounce">
              💼 Lead Converted
            </div>
            <div className="absolute bottom-4 -right-4 bg-blue-100 text-blue-800 px-3 py-2 rounded-lg text-sm font-medium shadow-lg animate-pulse">
              📈 Revenue Up 45%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
