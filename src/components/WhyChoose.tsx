import React from 'react';
import { CheckCircle, Smartphone, MapPin, TrendingUp, DollarSign } from 'lucide-react';

const reasons = [
  {
    icon: CheckCircle,
    title: 'Built specifically for moving companies',
    description: 'Every feature is designed with moving businesses in mind'
  },
  {
    icon: Smartphone,
    title: 'Simple and mobile-friendly',
    description: 'No tech skills needed – works perfectly on any device'
  },
  {
    icon: MapPin,
    title: 'Perfect for local and long-distance moves',
    description: 'Handles all types of moves with customizable workflows'
  },
  {
    icon: TrendingUp,
    title: 'Real-time business insights',
    description: 'Make data-driven decisions with comprehensive analytics'
  },
  {
    icon: DollarSign,
    title: 'Affordable and scalable pricing',
    description: 'Grow your business without worrying about software costs'
  }
];

const WhyChoose = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Moving Companies Choose MoveRight CRM
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand the unique challenges of running a moving business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">3+</div>
              <div className="text-gray-600">Moving Companies</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">₦8.4M+</div>
              <div className="text-gray-600">Revenue Processed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">45%</div>
              <div className="text-gray-600">Average Revenue Increase</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
