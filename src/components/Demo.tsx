import React from 'react';
import { Play, MessageCircle, Calendar } from 'lucide-react';

const Demo = () => {
  return (
    <section id="demo" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            See MoveRight CRM in Action
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Watch a short demo of how MoveRight CRM helps you close deals and manage jobs efficiently
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <a
              href="https://youtu.be/diq4hXyEyYg"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group cursor-pointer block"
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 shadow-2xl transform group-hover:scale-105 transition-all duration-300">
                <div className="bg-white/20 rounded-2xl p-8 text-center">
                  <div className="bg-white/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/40 transition-all duration-300">
                    <Play className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Watch Demo Video</h3>
                  <p className="text-white/90">
                    See how moving companies use MoveRight CRM to grow their business
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 p-3 rounded-lg flex-shrink-0">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Schedule a Personal Demo</h3>
                <p className="text-gray-300 mb-4">
                  Get a customized walkthrough of MoveRight CRM tailored to your business needs
                </p>
                <a
                  href="https://calendly.com/gorightmovers/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold inline-block"
                >
                  Book Demo Call
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-green-600 p-3 rounded-lg flex-shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Chat with Us on WhatsApp</h3>
                <p className="text-gray-300 mb-4">
                  Have questions? Chat with our team directly on WhatsApp for instant support
                </p>
                <a
                  href="https://wa.me/2349024026893"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 font-semibold inline-block"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
