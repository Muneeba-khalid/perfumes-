// import React, { useState } from 'react';
// import { FaLock, FaCreditCard, FaPaypal, FaApplePay, FaGooglePay, FaCheckCircle } from 'react-icons/fa';
// import { MdLocationOn, MdLocalShipping, MdPayment } from 'react-icons/md';

// const CheckoutPage = () => {
//   const [activeTab, setActiveTab] = useState('shipping');
//   const [sameAsShipping, setSameAsShipping] = useState(true);
//   const [paymentMethod, setPaymentMethod] = useState('credit');
//   const [orderPlaced, setOrderPlaced] = useState(false);

//   // Sample cart data
//   const cartItems = [
//     {
//       id: 1,
//       name: 'Calvin Klein Euphoria',
//       price: 89.99,
//       quantity: 1,
//       image: 'https://images.unsplash.com/photo-1592945403247-b9a5d1aae67b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'
//     },
//     {
//       id: 2,
//       name: 'Calvin Klein Obsession',
//       price: 79.99,
//       quantity: 1,
//       image: 'https://images.unsplash.com/photo-1592945403247-b9a5d1aae67b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'
//     }
//   ];

//   const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
//   const shipping = 5.99;
//   const tax = subtotal * 0.08;
//   const total = subtotal + shipping + tax;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Simulate payment processing
//     setTimeout(() => {
//       setOrderPlaced(true);
//     }, 1500);
//   };

//   if (orderPlaced) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center p-4">
//         <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
//           <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-6" />
//           <h2 className="text-3xl font-bold text-gray-800 mb-4">Order Confirmed!</h2>
//           <p className="text-gray-600 mb-6">
//             Thank you for your purchase! Your order has been placed successfully.
//           </p>
//           <p className="text-gray-700 mb-8">
//             Order ID: <span className="font-semibold">CK-2023-{Math.floor(Math.random() * 10000)}</span>
//           </p>
//           <div className="bg-gray-50 rounded-lg p-4 mb-8">
//             <h3 className="font-semibold text-gray-800 mb-2">Estimated Delivery</h3>
//             <p className="text-gray-600">Monday, October 16, 2023</p>
//           </div>
//           <button 
//             onClick={() => window.location.href = '/'}
//             className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-medium transition duration-300"
//           >
//             Continue Shopping
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 py-12 px-4 sm:px-6">
//       <div className="max-w-5xl mx-auto">
//         <div className="text-center mb-10">
//           <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Checkout</h1>
//           <p className="text-gray-600">Complete your purchase with confidence</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
//           {/* Progress Bar */}
//           <div className="flex border-b border-gray-200">
//             <button 
//               onClick={() => setActiveTab('shipping')}
//               className={`flex-1 py-4 px-2 text-center font-medium transition-colors duration-300 ${
//                 activeTab === 'shipping' 
//                   ? 'text-indigo-600 border-b-2 border-indigo-600' 
//                   : 'text-gray-500 hover:text-indigo-500'
//               }`}
//             >
//               <div className="flex items-center justify-center gap-2">
//                 <MdLocationOn className="text-lg" />
//                 <span>Shipping</span>
//               </div>
//             </button>
//             <button 
//               onClick={() => setActiveTab('payment')}
//               className={`flex-1 py-4 px-2 text-center font-medium transition-colors duration-300 ${
//                 activeTab === 'payment' 
//                   ? 'text-indigo-600 border-b-2 border-indigo-600' 
//                   : 'text-gray-500 hover:text-indigo-500'
//               }`}
//             >
//               <div className="flex items-center justify-center gap-2">
//                 <MdPayment className="text-lg" />
//                 <span>Payment</span>
//               </div>
//             </button>
//             <button 
//               className="flex-1 py-4 px-2 text-center font-medium text-gray-400 cursor-not-allowed"
//             >
//               <div className="flex items-center justify-center gap-2">
//                 <FaCheckCircle className="text-lg" />
//                 <span>Confirmation</span>
//               </div>
//             </button>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 sm:p-8">
//             {/* Left Column - Forms */}
//             <div className="lg:border-r lg:border-gray-200 lg:pr-8">
//               {activeTab === 'shipping' ? (
//                 <div className="space-y-6">
//                   <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
//                     <MdLocalShipping className="text-indigo-600" />
//                     Shipping Information
//                   </h2>
                  
//                   <form className="space-y-4">
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
//                         <input
//                           type="text"
//                           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//                           placeholder="John"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
//                         <input
//                           type="text"
//                           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//                           placeholder="Doe"
//                         />
//                       </div>
//                     </div>
                    
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
//                       <input
//                         type="email"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//                         placeholder="john.doe@example.com"
//                       />
//                     </div>
                    
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">Shipping Address</label>
//                       <input
//                         type="text"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//                         placeholder="123 Main Street"
//                       />
//                     </div>
                    
//                     <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//                       <div className="sm:col-span-2">
//                         <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
//                         <input
//                           type="text"
//                           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//                           placeholder="New York"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
//                         <input
//                           type="text"
//                           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//                           placeholder="10001"
//                         />
//                       </div>
//                     </div>
                    
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
//                         <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
//                           <option>United States</option>
//                           <option>Canada</option>
//                           <option>United Kingdom</option>
//                           <option>Australia</option>
//                         </select>
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
//                         <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
//                           <option>New York</option>
//                           <option>California</option>
//                           <option>Texas</option>
//                           <option>Florida</option>
//                         </select>
//                       </div>
//                     </div>
                    
//                     <div className="pt-4">
//                       <div className="flex items-center mb-4">
//                         <input
//                           id="billing-same"
//                           type="checkbox"
//                           checked={sameAsShipping}
//                           onChange={() => setSameAsShipping(!sameAsShipping)}
//                           className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
//                         />
//                         <label htmlFor="billing-same" className="ml-2 block text-sm text-gray-700">
//                           Billing address same as shipping
//                         </label>
//                       </div>
                      
//                       {!sameAsShipping && (
//                         <div className="mt-4 space-y-4">
//                           <h3 className="font-medium text-gray-900">Billing Address</h3>
//                           <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-1">Billing Address</label>
//                             <input
//                               type="text"
//                               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//                               placeholder="456 Billing Street"
//                             />
//                           </div>
//                         </div>
//                       )}
//                     </div>
                    
//                     <div className="flex justify-end pt-4">
//                       <button
//                         type="button"
//                         onClick={() => setActiveTab('payment')}
//                         className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition duration-300"
//                       >
//                         Continue to Payment
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               ) : (
//                 <div className="space-y-6">
//                   <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
//                     <MdPayment className="text-indigo-600" />
//                     Payment Method
//                   </h2>
                  
//                   <div className="space-y-4">
//                     <div className="flex gap-4">
//                       <button
//                         onClick={() => setPaymentMethod('credit')}
//                         className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border transition-colors duration-300 ${
//                           paymentMethod === 'credit' 
//                             ? 'border-indigo-600 bg-indigo-50 text-indigo-700' 
//                             : 'border-gray-300 hover:border-indigo-400'
//                         }`}
//                       >
//                         <FaCreditCard />
//                         <span>Credit Card</span>
//                       </button>
//                       <button
//                         onClick={() => setPaymentMethod('paypal')}
//                         className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border transition-colors duration-300 ${
//                           paymentMethod === 'paypal' 
//                             ? 'border-indigo-600 bg-indigo-50 text-indigo-700' 
//                             : 'border-gray-300 hover:border-indigo-400'
//                         }`}
//                       >
//                         <FaPaypal className="text-blue-600" />
//                         <span>PayPal</span>
//                       </button>
//                     </div>
                    
//                     <button
//                       onClick={() => setPaymentMethod('apple')}
//                       className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg border transition-colors duration-300 ${
//                         paymentMethod === 'apple' 
//                           ? 'border-indigo-600 bg-indigo-50 text-indigo-700' 
//                           : 'border-gray-300 hover:border-indigo-400'
//                       }`}
//                     >
//                       <FaApplePay className="text-black text-xl" />
//                       <span>Apple Pay</span>
//                     </button>
                    
//                     <button
//                       onClick={() => setPaymentMethod('google')}
//                       className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg border transition-colors duration-300 ${
//                         paymentMethod === 'google' 
//                           ? 'border-indigo-600 bg-indigo-50 text-indigo-700' 
//                           : 'border-gray-300 hover:border-indigo-400'
//                       }`}
//                     >
//                       <FaGooglePay className="text-blue-500 text-xl" />
//                       <span>Google Pay</span>
//                     </button>
//                   </div>
                  
//                   {paymentMethod === 'credit' && (
//                     <form className="space-y-4 pt-4" onSubmit={handleSubmit}>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
//                         <div className="relative">
//                           <input
//                             type="text"
//                             className="w-full px-4 py-2 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//                             placeholder="0000 0000 0000 0000"
//                           />
//                           <FaCreditCard className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                         </div>
//                       </div>
                      
//                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                         <div>
//                           <label className="block text-sm font-medium text-gray-700 mb-1">Expiration Date</label>
//                           <input
//                             type="text"
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//                             placeholder="MM/YY"
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
//                           <input
//                             type="text"
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//                             placeholder="123"
//                           />
//                         </div>
//                       </div>
                      
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Name on Card</label>
//                         <input
//                           type="text"
//                           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//                           placeholder="John Doe"
//                         />
//                       </div>
                      
//                       <div className="flex items-center pt-2">
//                         <input
//                           id="save-card"
//                           type="checkbox"
//                           className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
//                         />
//                         <label htmlFor="save-card" className="ml-2 block text-sm text-gray-700">
//                           Save card for future purchases
//                         </label>
//                       </div>
                      
//                       <div className="pt-6">
//                         <button
//                           type="submit"
//                           className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-medium transition duration-300 flex items-center justify-center gap-2"
//                         >
//                           <FaLock />
//                           <span>Pay ${total.toFixed(2)}</span>
//                         </button>
//                       </div>
//                     </form>
//                   )}
                  
//                   {paymentMethod === 'paypal' && (
//                     <div className="pt-6">
//                       <button
//                         onClick={handleSubmit}
//                         className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition duration-300 flex items-center justify-center gap-2"
//                       >
//                         <FaPaypal className="text-xl" />
//                         <span>Pay with PayPal</span>
//                       </button>
//                     </div>
//                   )}
                  
//                   {(paymentMethod === 'apple' || paymentMethod === 'google') && (
//                     <div className="pt-6">
//                       <button
//                         onClick={handleSubmit}
//                         className="w-full bg-black hover:bg-gray-900 text-white py-3 rounded-lg font-medium transition duration-300"
//                       >
//                         Pay ${total.toFixed(2)}
//                       </button>
//                     </div>
//                   )}
                  
//                   <div className="pt-4 flex justify-start">
//                     <button
//                       onClick={() => setActiveTab('shipping')}
//                       className="text-indigo-600 hover:text-indigo-800 font-medium"
//                     >
//                       ← Back to Shipping
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
            
//             {/* Right Column - Order Summary */}
//             <div className="lg:pl-8">
//               <div className="bg-gray-50 rounded-xl p-6">
//                 <h3 className="text-lg font-bold text-gray-900 mb-4">Order Summary</h3>
                
//                 <div className="space-y-4">
//                   {cartItems.map((item) => (
//                     <div key={item.id} className="flex items-center border-b border-gray-200 pb-4">
//                       <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
//                       <div className="ml-4 flex-1">
//                         <h4 className="font-medium text-gray-900">{item.name}</h4>
//                         <p className="text-gray-600">${item.price.toFixed(2)} × {item.quantity}</p>
//                       </div>
//                       <div className="font-medium text-gray-900">
//                         ${(item.price * item.quantity).toFixed(2)}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
                
//                 <div className="space-y-3 mt-6">
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Subtotal</span>
//                     <span className="font-medium">${subtotal.toFixed(2)}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Shipping</span>
//                     <span className="font-medium">${shipping.toFixed(2)}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Tax</span>
//                     <span className="font-medium">${tax.toFixed(2)}</span>
//                   </div>
//                   <div className="flex justify-between pt-3 border-t border-gray-200">
//                     <span className="text-lg font-bold text-gray-900">Total</span>
//                     <span className="text-lg font-bold text-gray-900">${total.toFixed(2)}</span>
//                   </div>
//                 </div>
                
//                 <div className="mt-6 flex items-center text-sm text-gray-500">
//                   <FaLock className="mr-2" />
//                   <span>Your payment is secure and encrypted</span>
//                 </div>
//               </div>
              
//               <div className="mt-6 bg-indigo-50 rounded-xl p-6">
//                 <h4 className="font-bold text-indigo-700 mb-2">Free Shipping</h4>
//                 <p className="text-sm text-gray-700">
//                   All orders over $100 qualify for free standard shipping. Express delivery options also available.
//                 </p>
//               </div>
              
//               <div className="mt-6 bg-gray-50 rounded-xl p-6">
//                 <h4 className="font-bold text-gray-900 mb-2">Return Policy</h4>
//                 <p className="text-sm text-gray-700">
//                   Not satisfied? We offer a 30-day return policy. Free return shipping on all orders.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;



import React, { useState } from 'react';
import { FaLock, FaCreditCard, FaPaypal, FaApplePay, FaGooglePay, FaCheckCircle, FaShoppingBag } from 'react-icons/fa';
import { MdLocationOn, MdLocalShipping, MdPayment } from 'react-icons/md';

const CheckoutPage = () => {
  const [activeTab, setActiveTab] = useState('shipping');
  const [sameAsShipping, setSameAsShipping] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [orderPlaced, setOrderPlaced] = useState(false);
  
  // Sample cart data - should match what's in your cart
  const cartItems = [
    {
      id: 1,
      name: 'Calvin Klein Euphoria',
      price: 89.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1592945403247-b9a5d1aae67b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      name: 'Calvin Klein Obsession',
      price: 79.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1592945403247-b9a5d1aae67b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 3,
      name: 'Calvin Klein Eternity',
      price: 75.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1592945403247-b9a5d1aae67b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  // Comprehensive list of countries
  const countries = [
    "United States", "Canada", "United Kingdom", "Australia", "Germany", "France", "Italy", "Spain",
    "Japan", "China", "India", "Brazil", "Mexico", "South Africa", "Russia", "South Korea", "Singapore",
    "Switzerland", "Netherlands", "Sweden", "Norway", "Denmark", "Finland", "New Zealand", "Argentina",
    "Chile", "Saudi Arabia", "United Arab Emirates", "Turkey", "Thailand", "Malaysia", "Indonesia", "Philippines",
    "Vietnam", "Egypt", "Nigeria", "Kenya", "Ghana", "Morocco", "Israel", "Greece", "Portugal", "Ireland", "Poland"
  ];

  // US states for when US is selected
  const usStates = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
    "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
    "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri",
    "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina",
    "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
    "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
    "Wisconsin", "Wyoming"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate payment processing
    setTimeout(() => {
      setOrderPlaced(true);
    }, 1500);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Order Confirmed!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for your purchase! Your order has been placed successfully.
          </p>
          <p className="text-gray-700 mb-8">
            Order ID: <span className="font-semibold">CK-2023-{Math.floor(Math.random() * 10000)}</span>
          </p>
          <div className="bg-gray-50 rounded-lg p-4 mb-8">
            <h3 className="font-semibold text-gray-800 mb-2">Estimated Delivery</h3>
            <p className="text-gray-600">Monday, October 16, 2023</p>
          </div>
          <button 
            onClick={() => window.location.href = '/'}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-medium transition duration-300"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Checkout</h1>
          <p className="text-gray-600">Complete your purchase with confidence</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Progress Bar */}
          <div className="flex border-b border-gray-200">
            <button 
              onClick={() => setActiveTab('shipping')}
              className={`flex-1 py-4 px-2 text-center font-medium transition-colors duration-300 ${
                activeTab === 'shipping' 
                  ? 'text-indigo-600 border-b-2 border-indigo-600' 
                  : 'text-gray-500 hover:text-indigo-500'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <MdLocationOn className="text-lg" />
                <span>Shipping</span>
              </div>
            </button>
            <button 
              onClick={() => setActiveTab('payment')}
              className={`flex-1 py-4 px-2 text-center font-medium transition-colors duration-300 ${
                activeTab === 'payment' 
                  ? 'text-indigo-600 border-b-2 border-indigo-600' 
                  : 'text-gray-500 hover:text-indigo-500'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <MdPayment className="text-lg" />
                <span>Payment</span>
              </div>
            </button>
            <button 
              className="flex-1 py-4 px-2 text-center font-medium text-gray-400 cursor-not-allowed"
            >
              <div className="flex items-center justify-center gap-2">
                <FaCheckCircle className="text-lg" />
                <span>Confirmation</span>
              </div>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 sm:p-8">
            {/* Left Column - Forms */}
            <div className="lg:border-r lg:border-gray-200 lg:pr-8">
              {activeTab === 'shipping' ? (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <MdLocalShipping className="text-indigo-600" />
                    Shipping Information
                  </h2>
                  
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="john.doe@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Shipping Address</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="123 Main Street"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="New York"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="10001"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                          {countries.map(country => (
                            <option key={country} value={country}>{country}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                          {usStates.map(state => (
                            <option key={state} value={state}>{state}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <div className="flex items-center mb-4">
                        <input
                          id="billing-same"
                          type="checkbox"
                          checked={sameAsShipping}
                          onChange={() => setSameAsShipping(!sameAsShipping)}
                          className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <label htmlFor="billing-same" className="ml-2 block text-sm text-gray-700">
                          Billing address same as shipping
                        </label>
                      </div>
                      
                      {!sameAsShipping && (
                        <div className="mt-4 space-y-4">
                          <h3 className="font-medium text-gray-900">Billing Address</h3>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Billing Address</label>
                            <input
                              type="text"
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                              placeholder="456 Billing Street"
                            />
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                                {countries.map(country => (
                                  <option key={country} value={country}>{country}</option>
                                ))}
                              </select>
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                                {usStates.map(state => (
                                  <option key={state} value={state}>{state}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex justify-end pt-4">
                      <button
                        type="button"
                        onClick={() => setActiveTab('payment')}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition duration-300"
                      >
                        Continue to Payment
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <MdPayment className="text-indigo-600" />
                    Payment Method
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <button
                        onClick={() => setPaymentMethod('credit')}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border transition-colors duration-300 ${
                          paymentMethod === 'credit' 
                            ? 'border-indigo-600 bg-indigo-50 text-indigo-700' 
                            : 'border-gray-300 hover:border-indigo-400'
                        }`}
                      >
                        <FaCreditCard />
                        <span>Credit Card</span>
                      </button>
                      <button
                        onClick={() => setPaymentMethod('paypal')}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border transition-colors duration-300 ${
                          paymentMethod === 'paypal' 
                            ? 'border-indigo-600 bg-indigo-50 text-indigo-700' 
                            : 'border-gray-300 hover:border-indigo-400'
                        }`}
                      >
                        <FaPaypal className="text-blue-600" />
                        <span>PayPal</span>
                      </button>
                    </div>
                    
                    <button
                      onClick={() => setPaymentMethod('apple')}
                      className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg border transition-colors duration-300 ${
                        paymentMethod === 'apple' 
                          ? 'border-indigo-600 bg-indigo-50 text-indigo-700' 
                          : 'border-gray-300 hover:border-indigo-400'
                      }`}
                    >
                      <FaApplePay className="text-black text-xl" />
                      <span>Apple Pay</span>
                    </button>
                    
                    <button
                      onClick={() => setPaymentMethod('google')}
                      className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg border transition-colors duration-300 ${
                        paymentMethod === 'google' 
                          ? 'border-indigo-600 bg-indigo-50 text-indigo-700' 
                          : 'border-gray-300 hover:border-indigo-400'
                      }`}
                    >
                      <FaGooglePay className="text-blue-500 text-xl" />
                      <span>Google Pay</span>
                    </button>
                  </div>
                  
                  {paymentMethod === 'credit' && (
                    <form className="space-y-4 pt-4" onSubmit={handleSubmit}>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                        <div className="relative">
                          <input
                            type="text"
                            className="w-full px-4 py-2 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="0000 0000 0000 0000"
                          />
                          <FaCreditCard className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Expiration Date</label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="MM/YY"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="123"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name on Card</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div className="flex items-center pt-2">
                        <input
                          id="save-card"
                          type="checkbox"
                          className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <label htmlFor="save-card" className="ml-2 block text-sm text-gray-700">
                          Save card for future purchases
                        </label>
                      </div>
                      
                      <div className="pt-6">
                        <button
                          type="submit"
                          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-medium transition duration-300 flex items-center justify-center gap-2"
                        >
                          <FaLock />
                          <span>Pay ${total.toFixed(2)}</span>
                        </button>
                      </div>
                    </form>
                  )}
                  
                  {paymentMethod === 'paypal' && (
                    <div className="pt-6">
                      <button
                        onClick={handleSubmit}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition duration-300 flex items-center justify-center gap-2"
                      >
                        <FaPaypal className="text-xl" />
                        <span>Pay with PayPal</span>
                      </button>
                    </div>
                  )}
                  
                  {(paymentMethod === 'apple' || paymentMethod === 'google') && (
                    <div className="pt-6">
                      <button
                        onClick={handleSubmit}
                        className="w-full bg-black hover:bg-gray-900 text-white py-3 rounded-lg font-medium transition duration-300"
                      >
                        Pay ${total.toFixed(2)}
                      </button>
                    </div>
                  )}
                  
                  <div className="pt-4 flex justify-start">
                    <button
                      onClick={() => setActiveTab('shipping')}
                      className="text-indigo-600 hover:text-indigo-800 font-medium"
                    >
                      ← Back to Shipping
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            {/* Right Column - Order Summary */}
            <div className="lg:pl-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-gray-900">Order Summary</h3>
                  <div className="flex items-center text-indigo-600">
                    <FaShoppingBag className="mr-2" />
                    <span>{cartItems.length} items</span>
                  </div>
                </div>
                
                <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center border-b border-gray-200 pb-4">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                      <div className="ml-4 flex-1">
                        <h4 className="font-medium text-gray-900">{item.name}</h4>
                        <p className="text-gray-600">${item.price.toFixed(2)} × {item.quantity}</p>
                      </div>
                      <div className="font-medium text-gray-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-3 mt-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-gray-200">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <span className="text-lg font-bold text-gray-900">${total.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="mt-6 flex items-center text-sm text-gray-500">
                  <FaLock className="mr-2" />
                  <span>Your payment is secure and encrypted</span>
                </div>
              </div>
              
              <div className="mt-6 bg-indigo-50 rounded-xl p-6">
                <h4 className="font-bold text-indigo-700 mb-2">Free Shipping</h4>
                <p className="text-sm text-gray-700">
                  All orders over $100 qualify for free standard shipping. Express delivery options also available.
                </p>
              </div>
              
              <div className="mt-6 bg-gray-50 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-2">Return Policy</h4>
                <p className="text-sm text-gray-700">
                  Not satisfied? We offer a 30-day return policy. Free return shipping on all orders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;