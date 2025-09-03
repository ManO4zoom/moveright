import React, { useState } from 'react';
import { Users, Calculator, Calendar, TrendingUp, BarChart3, Receipt, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Lead Management',
    description: 'Capture, track & convert leads easily with our smart pipeline system.',
    details: 'Never lose another potential customer. Our intelligent lead scoring helps you prioritize high-value prospects.',
    color: 'blue'
  },
  {
    icon: Calculator,
    title: 'Smart Quotes',
    description: 'Create and send professional estimates in seconds, not hours.',
    details: 'Pre-built templates for local and long-distance moves with automatic pricing calculations.',
    color: 'green'
  },
  {
    icon: Calendar,
    title: 'Job Scheduling',
    description: 'Assign drivers and movers with intuitive drag-and-drop scheduling.',
    details: 'Visual calendar view with real-time updates and automated notifications for your team.',
    color: 'purple'
  },
  {
    icon: TrendingUp,
    title: 'Financial Tracking',
    description: 'Stay on top of revenue, expenses & profit with real-time insights.',
    details: 'Comprehensive financial reports that help you understand your business performance.',
    color: 'orange'
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Real-time business insights to grow your moving company.',
    details: 'Track conversion rates, average job values, and seasonal trends to make data-driven decisions.',
    color: 'red'
  },
  {
    icon: Receipt,
    title: 'Automated Invoices',
    description: 'Collect payments faster with automated billing and reminders.',
    details: 'Professional invoices with multiple payment options including bank transfers and mobile money.',
    color: 'indigo'
  }
];

const colorClasses = {
  blue: 'bg-blue-100 text-blue-600 hover:bg-blue-200',
  green: 'bg-green-100 text-green-600 hover:bg-green-200',
  purple: 'bg-purple-100 text-purple-600 hover:bg-purple-200',
  orange: 'bg-orange-100 text-orange-600 hover:bg-orange-200',
  red: 'bg-red-100 text-red-600 hover:bg-red-200',
  indigo: 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200',
};

const Features = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Run a Moving Business
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            All the tools and features you need to manage your moving company in one powerful CRM
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-gray-100"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`w-16 h-16 rounded-2xl ${colorClasses[feature.color as keyof typeof colorClasses]} flex items-center justify-center mb-6 transition-all duration-300`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  hoveredIndex === index ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <p className="text-sm text-gray-500 mb-3">
                    {feature.details}
                  </p>
                  <div className="flex items-center text-blue-600 text-sm font-medium">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;