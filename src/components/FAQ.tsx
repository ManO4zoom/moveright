import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'How does MoveRight CRM help my business?',
    answer: 'MoveRight CRM centralizes all your operations – leads, quotes, job scheduling, and payments – in one place. This eliminates manual work, reduces errors, and helps you serve more customers efficiently. Most clients see a 45% increase in revenue within the first year.'
  },
  {
    question: 'Can I use it on my phone?',
    answer: 'Yes! MoveRight CRM is fully mobile-responsive and works perfectly on any device – smartphone, tablet, or computer. You can manage your business on the go, whether you\'re meeting clients or overseeing moves.'
  },
  {
    question: 'Do you offer training and support?',
    answer: 'Absolutely. We provide comprehensive onboarding, video tutorials, and 24/7 WhatsApp support. Our team understands the Nigerian moving industry and will help you get set up in under 24 hours.'
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes! Start with a 7-day free trial with full access to all features. No credit card required. You can explore the entire system and see how it works for your business before making any commitment.'
  },
  {
    question: 'What types of moves can the system handle?',
    answer: 'MoveRight CRM handles all types of moves – local residential, long-distance, office relocations, and commercial moves. You can customize quotes, scheduling, and workflows for each type of service you offer.'
  },
  {
    question: 'How secure is my business data?',
    answer: 'We use enterprise-grade security with SSL encryption, regular backups, and secure cloud hosting. Your data is protected 24/7 and we comply with international data protection standards.'
  },
  {
    question: 'Can I integrate with my existing tools?',
    answer: 'Yes, MoveRight CRM integrates with popular tools like WhatsApp Business, email marketing platforms, and accounting software. We also offer custom integrations for enterprise clients.'
  },
  {
    question: 'What happens if I need to cancel?',
    answer: 'You can cancel anytime with 30 days notice. We\'ll help you export all your data before cancellation. No hidden fees or long-term contracts – we earn your business every month.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Got Questions? We've Got Answers.
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about MoveRight CRM
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200"
            >
              <button
                className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-2xl"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-6 h-6 text-blue-600" />
                    ) : (
                      <Plus className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions?
          </p>
          <a
            href="https://wa.me/2349024026893"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
          >
            Chat with us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;