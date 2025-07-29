

import React, { useState } from 'react';
import { FaStar, FaChevronUp, FaChevronDown } from 'react-icons/fa';
import ck8 from '../assets/ck8.jpeg';
import d2 from '../assets/d2.jpeg';
import t8 from '../assets/t8.jpeg';
import a4 from '../assets/a4.jpeg';
import gg from '../assets/gg.jpeg';
import ck4 from '../assets/ck4.jpeg';

const testimonials = [
  {
    id: 1,
    name: "Idrees Khan",
    review: "Just love it",
    comment: "Amazing long-lasting fragrance that gets me compliments all day",
    rating: 5,
    productImage: ck8,
  },
  {
    id: 2,
    name: "Ayesha",
    review: "Very good product",
    comment: "Beautiful scent that lasts all day. The packaging was elegant and delivery was fast.",
    rating: 5,
    productImage: d2,
  },
  {
    id: 3,
    name: "Ahmed Ali",
    review: "Premium Quality",
    comment: "The perfume has a unique scent that stands out. Worth every penny!",
    rating: 5,
    productImage: t8,
  },
  {
    id: 4,
    name: "Sara Khan",
    review: "Perfect Gift",
    comment: "Bought this for my sister's birthday and she absolutely loved it!",
    rating: 4,
    productImage: a4,
  },
  {
    id: 5,
    name: "Rahul Sharma",
    review: "Exotic Fragrance",
    comment: "This has become my signature scent. Gets me compliments everywhere I go.",
    rating: 5,
    productImage: gg,
  },
  {
    id: 6,
    name: "Fatima Ahmed",
    review: "Luxury in a Bottle",
    comment: "The scent develops beautifully throughout the day. Highly recommended!",
    rating: 5,
    productImage: ck4,
  },
];

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleTestimonials = testimonials.slice(startIndex, startIndex + 4);

  const scrollUp = () => {
    setStartIndex(prev => (prev === 0 ? testimonials.length - 4 : prev - 1));
  };

  const scrollDown = () => {
    setStartIndex(prev => (prev >= testimonials.length - 4 ? 0 : prev + 1));
  };

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header - Improved Styling */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-0">
          Let customers speak for us
        </h2>
        <div className="flex items-center bg-amber-50 px-4 py-2 rounded-full">
          <div className="flex mr-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-amber-400" />
            ))}
          </div>
          <span className="text-sm font-medium text-gray-700">
            from 125 reviews
          </span>
          <span className="ml-2 text-green-500">✓</span>
        </div>
      </div>

      {/* Testimonials */}
      <div className="space-y-6">
        {visibleTestimonials.map((t) => (
          <div
            key={t.id}
            className="bg-gray-50 p-6 rounded-xl flex flex-col sm:flex-row items-start gap-6 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {/* Left Image - Larger */}
            <img
              src={t.productImage}
              alt={t.name}
              className="w-full sm:w-32 h-40 object-cover rounded-lg border border-gray-200"
            />

            {/* Middle Content */}
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-lg text-gray-800">{t.name}</h3>
                <div className="flex gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
              
              {t.review && (
                <p className="font-bold text-gray-700 mt-2">"{t.review}"</p>
              )}
              <p className="text-gray-600 mt-2">{t.comment}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Centered */}
      <div className="flex justify-center items-center mt-10 space-x-6">
        <button 
          onClick={scrollUp}
          className="p-3 rounded-full bg-gray-100 hover:bg-amber-100 transition-colors"
        >
          <FaChevronUp className="text-gray-600 text-xl" />
        </button>
        <button 
          onClick={scrollDown}
          className="p-3 rounded-full bg-gray-100 hover:bg-amber-100 transition-colors"
        >
          <FaChevronDown className="text-gray-600 text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;