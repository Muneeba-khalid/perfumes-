// // src/pages/AllBestSellers.jsx
// import React, { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { bestSellers } from '../data/bestSellers';
// import { CartContext } from '../context/CartContext';
// import { FaPlus, FaCheck } from 'react-icons/fa';

// const AllBestSellers = () => {
//   const { addToCart } = useContext(CartContext);
//   const [addedProductIds, setAddedProductIds] = useState([]);

//   const handleAddToCart = (product) => {
//     addToCart(product);
//     setAddedProductIds(prev => [...prev, product.id]);
//     setTimeout(() => {
//       setAddedProductIds(prev => prev.filter(id => id !== product.id));
//     }, 1500);
//   };

//   return (
//     <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 py-10 sm:py-16 bg-white">
//       <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-14 text-center text-gray-800 uppercase tracking-wide">
//         All Best Sellers
//       </h2>

//       <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8">
//         {bestSellers.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-[1.05]"
//           >
//             <Link to={`/product/${product.id}`}>
//               <div className="overflow-hidden relative">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-[180px] sm:h-[320px] md:h-[420px] lg:h-[520px] object-contain object-center"
//                   loading="lazy"
//                 />
//               </div>
//             </Link>

//             <div className="p-4 sm:p-5">
//               <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2 truncate">
//                 {product.name}
//               </h3>
//               <p className="text-gray-600 text-xs sm:text-sm mb-2 min-h-[50px] line-clamp-3">
//                 {product.description}
//               </p>

//               <div className="relative mt-1 flex items-center justify-between">
//                 <div className="flex flex-col">
//                   <span className="text-lg sm:text-xl font-bold text-red-600">
//                     {product.newPrice}
//                   </span>
//                   <span className="line-through text-gray-400 text-xs sm:text-sm">
//                     {product.oldPrice}
//                   </span>
//                 </div>
//                 <button
//                   onClick={() => handleAddToCart(product)}
//                   className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full shadow-md ${
//                     addedProductIds.includes(product.id)
//                       ? 'bg-[#2D336B]'
//                       : 'bg-[#A9B5DF]'
//                   } text-white hover:bg-[#68507B] hover:scale-110 transition duration-300`}
//                   aria-label={`Add ${product.name} to cart`}
//                 >
//                   {addedProductIds.includes(product.id) ? (
//                     <FaCheck />
//                   ) : (
//                     <FaPlus />
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllBestSellers;
import { Link } from 'react-router-dom'; 
import React, { useContext, useState } from 'react';
import { bestSellers } from '../data/bestSellers';
import { CartContext } from '../context/CartContext';
import { FaPlus, FaCheck, FaStar, FaTimes } from 'react-icons/fa';

const AllBestSellers = () => {
  const { addToCart } = useContext(CartContext);
  const [addedProductIds, setAddedProductIds] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupProduct, setPopupProduct] = useState(null);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedProductIds(prev => [...prev, product.id]);
    setPopupProduct(product);
    setShowPopup(true);
    
    setTimeout(() => {
      setAddedProductIds(prev => prev.filter(id => id !== product.id));
    }, 1500);

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 py-10 sm:py-16 bg-white relative">
      {/* Popup Notification */}
      {showPopup && (
        <div className="fixed top-4 right-4 z-50 animate-[fadeIn_0.3s_ease-out]">
          <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center">
            <span className="mr-4">Added {popupProduct?.name} to cart!</span>
            <button 
              onClick={() => setShowPopup(false)}
              className="text-white hover:text-gray-200"
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}

      {/* Header Section */}
      <div className="flex flex-col items-center mb-10 text-center">
        <div className="flex items-center gap-2 sm:gap-4 justify-center mb-4">
          <FaStar className="text-purple-500 text-xl sm:text-3xl animate-[pulse_0.8s_ease-in-out_infinite]" />
          
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-purple-700 uppercase">
            All Best Sellers
          </h2>
          
          <FaStar className="text-purple-500 text-xl sm:text-3xl animate-[pulse_2s_ease-in-out_infinite]" />
        </div>
        
        {/* Descriptive Paragraph */}
        <p className="max-w-4xl text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mt-2 sm:mt-4">
          Discover our most loved and best selling perfumes chosen by our customers.
          These top-rated picks represent the highest quality and most popular fragrances
          that define luxury and excellence.
        </p>
      </div>

      {/* Products Grid */}
      <div className="space-y-8 sm:space-y-12">
        {/* First Row */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
          {bestSellers.slice(0, 5).map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg sm:rounded-2xl overflow-hidden shadow-md sm:shadow-lg transition-transform duration-300 sm:duration-500 hover:scale-[1.03] border border-gray-100 hover:border-gray-200 relative"
            >
              {/* Sale Tag */}
              {product.oldPrice && (
                // <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md z-10">
                //   SALE
                // </div>
                <div className="absolute top-2 right-2 bg-red-600 text-white text-sm font-bold px-3 py-1.5 rounded-lg z-10">
  SALE
</div>
              )}
              
              <Link to={`/product/${product.id}`}>
                <div className="overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[120px] sm:h-[320px] md:h-[420px] lg:h-[520px] object-contain object-center"
                    loading="lazy"
                  />
                </div>
              </Link>

              <div className="p-3 sm:p-4 md:p-5">
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-900 mb-1 sm:mb-2 truncate">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-2 min-h-[40px] sm:min-h-[50px] line-clamp-2 sm:line-clamp-3">
                  {product.description}
                </p>

                <div className="relative mt-1 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-red-600">
                      {product.newPrice}
                    </span>
                    <span className="line-through text-gray-400 text-[10px] sm:text-xs">
                      {product.oldPrice}
                    </span>
                  </div>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full shadow-md ${
                      addedProductIds.includes(product.id)
                        ? 'bg-[#2D336B]'
                        : 'bg-[#A9B5DF]'
                    } text-white hover:bg-[#68507B] hover:scale-110 transition duration-300 border-2 ${
                      addedProductIds.includes(product.id)
                        ? 'border-[#2D336B]'
                        : 'border-[#A9B5DF]'
                    }`}
                    aria-label={`Add ${product.name} to cart`}
                  >
                    {addedProductIds.includes(product.id) ? (
                      <FaCheck className="text-xs sm:text-sm" />
                    ) : (
                      <FaPlus className="text-xs sm:text-sm" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
          {bestSellers.slice(5).map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg sm:rounded-2xl overflow-hidden shadow-md sm:shadow-lg transition-transform duration-300 sm:duration-500 hover:scale-[1.03] border border-gray-100 hover:border-gray-200 relative"
            >
              {/* Sale Tag */}
              {product.oldPrice && (
                // <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md z-10">
                //   SALE
                // </div>
                <div className="absolute top-2 right-2 bg-red-600 text-white text-sm font-bold px-3 py-1.5 rounded-lg z-10">
  SALE
</div>
              )}
              
              <Link to={`/product/${product.id}`}>
                <div className="overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[120px] sm:h-[320px] md:h-[420px] lg:h-[520px] object-contain object-center"
                    loading="lazy"
                  />
                </div>
              </Link>

              <div className="p-3 sm:p-4 md:p-5">
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-900 mb-1 sm:mb-2 truncate">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-2 min-h-[40px] sm:min-h-[50px] line-clamp-2 sm:line-clamp-3">
                  {product.description}
                </p>

                <div className="relative mt-1 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-red-600">
                      {product.newPrice}
                    </span>
                    <span className="line-through text-gray-400 text-[10px] sm:text-xs">
                      {product.oldPrice}
                    </span>
                  </div>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full shadow-md ${
                      addedProductIds.includes(product.id)
                        ? 'bg-[#2D336B]'
                        : 'bg-[#A9B5DF]'
                    } text-white hover:bg-[#68507B] hover:scale-110 transition duration-300 border-2 ${
                      addedProductIds.includes(product.id)
                        ? 'border-[#2D336B]'
                        : 'border-[#A9B5DF]'
                    }`}
                    aria-label={`Add ${product.name} to cart`}
                  >
                    {addedProductIds.includes(product.id) ? (
                      <FaCheck className="text-xs sm:text-sm" />
                    ) : (
                      <FaPlus className="text-xs sm:text-sm" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBestSellers;