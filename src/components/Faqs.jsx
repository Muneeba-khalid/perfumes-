import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I choose the right fragrance?",
      answer: "Consider your personal style, the occasion, and season. Our fragrance quiz can help narrow down options based on your preferences."
    },
    {
      question: "What's the difference between perfume types?",
      answer: "Eau de Parfum has 15-20% fragrance oil, Eau de Toilette 5-15%, and Cologne 2-4%. Higher concentration means longer lasting scent."
    },
    {
      question: "How should I apply fragrance?",
      answer: "Spray on pulse points (wrists, neck, behind ears) from 5-7 inches away. Don't rub as it breaks down the fragrance molecules."
    },
    {
      question: "How long does perfume last?",
      answer: "Most fragrances last 4-8 hours on skin. Store in cool, dark places away from sunlight to preserve quality for 3-5 years."
    },
    {
      question: "Can I return a fragrance if I don't like it?",
      answer: "We accept returns within 30 days of purchase for unopened products. Opened items can be exchanged for store credit."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#F8F5FC] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-light text-[#58397A] mb-8 text-center">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-[#E8D8F2] pb-4">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full text-left focus:outline-none"
                >
                  <h3 className="text-lg font-medium text-[#58397A]">{faq.question}</h3>
                  {activeIndex === index ? (
                    <FiChevronUp className="text-[#7886C7] text-xl" />
                  ) : (
                    <FiChevronDown className="text-[#7886C7] text-xl" />
                  )}
                </button>
                {activeIndex === index && (
                  <p className="mt-2 text-[#68507B]">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-[#F8F5FC] p-6 rounded-lg">
            <h3 className="text-lg font-medium text-[#58397A] mb-4">Still have questions?</h3>
            <p className="text-[#68507B] mb-4">Our fragrance experts are available to help you find the perfect scent.</p>
            {/* <button className="bg-[#7886C7] text-white py-2 px-6 rounded hover:bg-[#58397A] transition">
              CONTACT US
            </button> */}
             <Link 
                to="/contact"  // Changed to match your route path
               className="bg-[#7886C7] text-white py-2 px-6 rounded hover:bg-[#58397A] transition"
              >
                CONTACT SUPPORT
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;