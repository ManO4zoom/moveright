import React from 'react';
import { Check, Star, Crown } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple Pricing for Every Moving Company
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your business size and grow without limits
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Starter Plan */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-8">
              <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                ₦15,000
                <span className="text-lg font-normal text-gray-600">/month</span>
              </div>
              <p className="text-gray-600">Perfect for small moving companies</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-600 mr-3" />
                <span className="text-gray-700">Up to 100 leads per month</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-600 mr-3" />
                <span className="text-gray-700">Basic reporting</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-600 mr-3" />
                <span className="text-gray-700">Email support</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-600 mr-3" />
                <span className="text-gray-700">Mobile app access</span>
              </li>
            </ul>

            <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors duration-200">
              Start Free Trial
            </button>
          </div>

          {/* Professional Plan */}
          <div className="bg-blue-600 rounded-2xl p-8 shadow-2xl transform scale-105 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              Most Popular
            </div>
            
            <div className="text-center mb-8">
              <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
              <div className="text-4xl font-bold text-white mb-2">
                ₦35,000
                <span className="text-lg font-normal text-blue-200">/month</span>
              </div>
              <p className="text-blue-200">For growing moving businesses</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-white mr-3" />
                <span className="text-white">Unlimited leads</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-white mr-3" />
                <span className="text-white">Advanced analytics</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-white mr-3" />
                <span className="text-white">Priority WhatsApp support</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-white mr-3" />
                <span className="text-white">Custom integrations</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-white mr-3" />
                <span className="text-white">Team collaboration tools</span>
              </li>
            </ul>

            <button className="w-full bg-white text-blue-600 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold">
              Start Free Trial
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-8">
              <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                Custom
              </div>
              <p className="text-gray-600">For large fleets and franchises</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-purple-600 mr-3" />
                <span className="text-gray-700">Full customization</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-purple-600 mr-3" />
                <span className="text-gray-700">Dedicated support manager</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-purple-600 mr-3" />
                <span className="text-gray-700">White-label options</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-purple-600 mr-3" />
                <span className="text-gray-700">API access</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-purple-600 mr-3" />
                <span className="text-gray-700">On-premise deployment</span>
              </li>
            </ul>

            <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200">
              Contact Sales
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            All plans include a 7-day free trial • No credit card required
          </p>
          <div className="text-sm text-gray-500">
            Questions about pricing? <a href="#contact" className="text-blue-600 hover:underline">Contact our sales team</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;