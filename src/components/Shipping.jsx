import React from 'react';
import { FaTruck, FaExchangeAlt, FaBoxOpen } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Added this import

const Shipping = () => {
  return (
    <div className="min-h-screen bg-[#F8F5FC] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-light text-[#58397A] mb-8 text-center">
            SHIPPING & RETURNS
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-[#F8F5FC] p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <FaTruck className="text-[#7886C7] text-3xl" />
              </div>
              <h3 className="text-lg font-medium text-[#58397A] mb-2">Shipping Information</h3>
              <p className="text-[#68507B] text-sm">
                Standard shipping: 3-5 business days
                <br />
                Express shipping: 1-2 business days
                <br />
                Free shipping on orders over $100
              </p>
            </div>
            
            <div className="bg-[#F8F5FC] p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <FaExchangeAlt className="text-[#7886C7] text-3xl" />
              </div>
              <h3 className="text-lg font-medium text-[#58397A] mb-2">Returns Policy</h3>
              <p className="text-[#68507B] text-sm">
                30-day return policy
                <br />
                Unopened products only
                <br />
                Original receipt required
              </p>
            </div>
            
            <div className="bg-[#F8F5FC] p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <FaBoxOpen className="text-[#7886C7] text-3xl" />
              </div>
              <h3 className="text-lg font-medium text-[#58397A] mb-2">Packaging</h3>
              <p className="text-[#68507B] text-sm">
                Eco-friendly packaging
                <br />
                Gift wrapping available
                <br />
                Secure protective casing
              </p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium text-[#58397A] mb-4">Shipping Details</h3>
              <div className="space-y-4 text-[#68507B]">
                <p>
                  We ship worldwide from our New York headquarters. All orders are processed within 1-2 business days (excluding weekends and holidays).
                </p>
                <p>
                  You will receive a shipping confirmation email with tracking information once your order has shipped. Please allow 24 hours for tracking information to update in the system.
                </p>
                <p>
                  <strong>International Shipping:</strong> Additional customs fees and taxes may apply upon delivery. These charges are the responsibility of the customer.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-[#58397A] mb-4">Returns Process</h3>
              <div className="space-y-4 text-[#68507B]">
                <p>
                  To initiate a return, please contact our customer service team at returns@luxescents.com with your order number. We will provide you with a return authorization number and instructions.
                </p>
                <p>
                  <strong>Important:</strong> For hygiene reasons, we cannot accept returns of opened fragrance products unless they are defective. All returned items must be in their original condition with packaging intact.
                </p>
                <p>
                  Refunds will be processed within 5-7 business days after we receive your return. The original shipping charges are non-refundable.
                </p>
              </div>
            </div>
            
            <div className="bg-[#F8F5FC] p-6 rounded-lg">
              <h3 className="text-lg font-medium text-[#58397A] mb-4">Need Help?</h3>
              <p className="text-[#68507B] mb-4">Our customer service team is available to assist with any shipping or return questions.</p>
              <Link 
                to="/contact"  // Changed to match your route path
                className="bg-[#7886C7] text-white py-2 px-6 rounded hover:bg-[#58397A] transition inline-block"
              >
                CONTACT SUPPORT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;