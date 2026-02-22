'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const reviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'London, UK',
    rating: 5,
    date: '2 weeks ago',
    title: 'Excellent IPTV Service',
    content: 'I\'ve been using NinhoTV for 6 months now and the service is outstanding. Great channel selection, crystal clear HD quality, and the customer support is always helpful when I need assistance.',
    verified: true
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'Manchester, UK',
    rating: 5,
    date: '1 month ago',
    title: 'Best IPTV Provider',
    content: 'After trying several IPTV services, NinhoTV is by far the best. The connection is stable, channels load quickly, and the price is very reasonable for the quality you get.',
    verified: true
  },
  {
    id: 3,
    name: 'Emma Wilson',
    location: 'Birmingham, UK',
    rating: 5,
    date: '3 weeks ago',
    title: 'Amazing Value for Money',
    content: 'The 12-month subscription offers incredible value. I get all the channels I want including sports and movies. The 4K quality is fantastic on my smart TV.',
    verified: true
  },
  {
    id: 4,
    name: 'David Thompson',
    location: 'Glasgow, UK',
    rating: 5,
    date: '2 months ago',
    title: 'Reliable and Professional',
    content: 'Very professional service. The setup was easy and the support team helped me configure it on all my devices. No buffering issues at all.',
    verified: true
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    location: 'Leeds, UK',
    rating: 5,
    date: '1 week ago',
    title: 'Perfect for Sports Fans',
    content: 'As a huge sports fan, I love the sports channels available. Premier League, Champions League, everything I need. The streaming quality is always excellent.',
    verified: true
  },
  {
    id: 6,
    name: 'James Miller',
    location: 'Liverpool, UK',
    rating: 5,
    date: '3 weeks ago',
    title: 'Outstanding Customer Service',
    content: 'Had a small issue with setup and the support team resolved it within minutes. Very responsive and knowledgeable. Highly recommend!',
    verified: true
  }
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        icon={index < rating ? 'mdi:star' : 'mdi:star-outline'}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-600'}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our <span className="text-green-500">Customers</span> Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Real reviews from satisfied customers across the UK
          </p>
          
          {/* TrustPilot Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-green-600 rounded-lg px-6 py-3 mb-8"
          >
            <Icon icon="mdi:star" className="w-6 h-6 text-white mr-2" />
            <span className="text-white font-bold text-lg">4.9</span>
            <span className="text-white ml-1">out of 5</span>
            <span className="text-green-100 ml-2">• 2,847 reviews</span>
          </motion.div>
        </motion.div>

        {/* Review Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div
            className="overflow-hidden rounded-2xl"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              animate={{ x: `-${currentIndex * 100}%` }}
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                    {/* Review Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-4">
                          <span className="text-white font-bold text-lg">
                            {review.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <div className="flex items-center">
                            <h3 className="text-white font-semibold mr-2">{review.name}</h3>
                            {review.verified && (
                              <div className="flex items-center bg-green-600/20 rounded-full px-2 py-1">
                                <Icon icon="mdi:check-circle" className="w-3 h-3 text-green-500 mr-1" />
                                <span className="text-green-500 text-xs font-medium">Verified</span>
                              </div>
                            )}
                          </div>
                          <div className="flex items-center text-gray-400 text-sm">
                            <Icon icon="mdi:map-marker" className="w-4 h-4 mr-1" />
                            <span>{review.location}</span>
                            <span className="mx-2">•</span>
                            <span>{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        {renderStars(review.rating)}
                      </div>
                    </div>

                    {/* Review Content */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold text-lg mb-3">{review.title}</h4>
                      <p className="text-gray-300 leading-relaxed">{review.content}</p>
                    </div>

                    {/* TrustPilot Attribution */}
                    <div className="flex items-center justify-between pt-6 border-t border-gray-700">
                      <div className="flex items-center text-gray-400 text-sm">
                        <Icon icon="mdi:star-four-points" className="w-4 h-4 text-green-500 mr-2" />
                        <span>TrustPilot Review</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-400 text-sm">Helpful?</span>
                        <button className="text-green-500 hover:text-green-400 transition-colors">
                          <Icon icon="mdi:thumb-up" className="w-5 h-5" />
                        </button>
                        <button className="text-gray-400 hover:text-gray-300 transition-colors">
                          <Icon icon="mdi:thumb-down" className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white rounded-full p-3 shadow-lg transition-colors"
          >
            <Icon icon="mdi:chevron-left" className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white rounded-full p-3 shadow-lg transition-colors"
          >
            <Icon icon="mdi:chevron-right" className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-green-500 w-8'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* TrustPilot Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center space-x-4 text-gray-400">
            <Icon icon="mdi:shield-check" className="w-5 h-5 text-green-500" />
            <span className="text-sm">All reviews are verified and collected from TrustPilot</span>
            <Icon icon="mdi:star-four-points" className="w-5 h-5 text-green-500" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
