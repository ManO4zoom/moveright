import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const screenshots = [
  {
    title: 'Dashboard Overview',
    description: 'Get a complete view of your business performance at a glance',
    image: 'https://portfolio.micidservices.com/wp-content/uploads/2025/08/dashboard.jpg',
    features: ['Real-time metrics', 'Revenue tracking', 'Lead conversion rates', 'Monthly performance']
  },
  {
    title: 'Lead Management',
    description: 'Track and nurture leads through your sales pipeline',
    image: 'https://portfolio.micidservices.com/wp-content/uploads/2025/08/lead.jpg',
    features: ['Contact management', 'Pipeline tracking', 'Lead scoring', 'Follow-up reminders']
  },
  {
    title: 'Financial Reports',
    description: 'Comprehensive financial insights for better decision making',
    image: 'https://portfolio.micidservices.com/wp-content/uploads/2025/08/financial.jpg',
    features: ['Profit & Loss', 'Expense tracking', 'Cash flow analysis', 'Custom reports']
  }
];

export default function Screenshots() {
  return (
    <div className="w-full max-w-4xl mx-auto py-10">
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="w-full h-full"
      >
        {screenshots.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center text-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-full max-w-md rounded-xl shadow-lg mx-auto"
              />
              <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
