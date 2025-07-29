import React, { useState } from 'react';
import { FaCalendarAlt, FaClock, FaUserAlt, FaTimes } from 'react-icons/fa';

const Consultation = () => {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <div className={`min-h-screen bg-[#F8F5FC] py-16 px-4 sm:px-6 lg:px-8 ${showDialog ? 'backdrop-blur-sm' : ''}`}>
      <div className={`max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden ${showDialog ? 'opacity-90' : ''}`}>
        <div className="p-8">
          <h1 className="text-3xl font-light text-[#58397A] mb-8 text-center">
            BOOK A PERSONAL FRAGRANCE CONSULTATION
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <FaUserAlt className="text-[#7886C7] mt-1 mr-4 text-xl" />
                <div>
                  <h3 className="text-lg font-medium text-[#58397A]">Personalized Session</h3>
                  <p className="text-[#68507B]">30-minute one-on-one with our master perfumer</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FaClock className="text-[#7886C7] mt-1 mr-4 text-xl" />
                <div>
                  <h3 className="text-lg font-medium text-[#58397A]">Available Times</h3>
                  <p className="text-[#68507B]">Monday to Friday</p>
                  <p className="text-[#68507B]">10:00 AM - 6:00 PM EST</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FaCalendarAlt className="text-[#7886C7] mt-1 mr-4 text-xl" />
                <div>
                  <h3 className="text-lg font-medium text-[#58397A]">Flexible Scheduling</h3>
                  <p className="text-[#68507B]">Reschedule up to 24 hours before</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#F8F5FC] p-6 rounded-lg">
              <h3 className="text-lg font-medium text-[#58397A] mb-4">Schedule Your Consultation</h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-2 border border-[#E8D8F2] rounded focus:outline-none focus:ring-1 focus:ring-[#7886C7]"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-4 py-2 border border-[#E8D8F2] rounded focus:outline-none focus:ring-1 focus:ring-[#7886C7]"
                  />
                </div>
                <div>
                  <input 
                    type="date" 
                    className="w-full px-4 py-2 border border-[#E8D8F2] rounded focus:outline-none focus:ring-1 focus:ring-[#7886C7]"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-2 border border-[#E8D8F2] rounded focus:outline-none focus:ring-1 focus:ring-[#7886C7]">
                    <option>Select Time Slot</option>
                    <option>10:00 AM - 10:30 AM</option>
                    <option>11:00 AM - 11:30 AM</option>
                    <option>2:00 PM - 2:30 PM</option>
                    <option>4:00 PM - 4:30 PM</option>
                  </select>
                </div>
                <button 
                  type="button" 
                  onClick={() => setShowDialog(true)}
                  className="w-full bg-[#7886C7] text-white py-2 px-4 rounded hover:bg-[#58397A] transition"
                >
                  BOOK CONSULTATION
                </button>
              </form>
            </div>
          </div>
          
          <div className="bg-[#F8F5FC] p-6 rounded-lg">
            <h3 className="text-lg font-medium text-[#58397A] mb-2">What to Expect</h3>
            <ul className="list-disc pl-5 space-y-2 text-[#68507B]">
              <li>Personalized fragrance recommendations based on your preferences</li>
              <li>Education on fragrance families and notes</li>
              <li>Tips for proper fragrance application</li>
              <li>Q&A session with our expert</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Dialog Box with Blur Effect */}
      {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-md w-full mx-4 p-6 relative shadow-2xl border border-[#E8D8F2]">
            <button 
              onClick={() => setShowDialog(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <FaTimes />
            </button>
            
            <h2 className="text-2xl font-light text-[#58397A] mb-4">Consultation Booked</h2>
            <p className="text-[#68507B]">Your fragrance consultation request has been received.</p>
            
            <button
              onClick={() => setShowDialog(false)}
              className="mt-6 px-4 py-2 bg-[#7886C7] text-white rounded hover:bg-[#58397A] transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Consultation;