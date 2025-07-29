// import React from 'react';
// import tom_banner from '../assets/tom_banner.jpeg'
// import { products } from '../data/product';

// const TomFordPage = () => {
//   const tomFordProducts = products.filter(p => p.brand === 'Tom Ford');

//   return (
//     <div>
//       <img src={tom_banner} alt="Tom Ford Banner" className="w-full h-64 object-cover" />
//       <h2 className="text-3xl font-bold my-4 text-center">Tom Ford Perfumes</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
//         {tomFordProducts.map(product => (
//           <div key={product.id} className="border rounded shadow p-4">
//             <img src={product.image} alt={product.name} className="h-48 w-full object-cover" />
//             <h3 className="text-xl font-semibold mt-2">{product.name}</h3>
//             <p className="text-gray-700">{product.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TomFordPage;
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import bnn2 from '../assets/bnn2.jpeg';
import { products } from '../data/product';
import { CartContext } from '../context/CartContext';
import { FaPlus, FaCheck } from 'react-icons/fa';

const TomFordPage = () => {
  const { addToCart } = useContext(CartContext);
  const tomFordProducts = products.filter(p => p.brand === 'Tom Ford');
  const [addedProductIds, setAddedProductIds] = useState([]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedProductIds(prev => [...prev, product.id]);

    setTimeout(() => {
      setAddedProductIds(prev => prev.filter(id => id !== product.id));
    }, 1500);
  };

  return (
    <div className="w-full bg-white overflow-hidden">
      {/* Banner */}
      <div className="relative w-full h-[90vh] sm:h-[70vh] md:h-[90vh] overflow-hidden">
        <img
          src={bnn2}
          alt="Tom Ford Banner"
          className="w-full h-full object-cover object-center brightness-100 contrast-125 saturate-150 transition-all duration-[3000ms] ease-in-out"
          style={{ animation: 'zoomLoop 10s ease-in-out infinite' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/30 to-transparent backdrop-blur-sm flex items-center justify-center animate__animated animate__fadeIn animate__slower px-4">
          <h1
            className="text-white text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-[0.3em] uppercase drop-shadow-2xl text-center"
            style={{ animation: 'popUp 2s ease-in-out infinite' }}
          >
            Tom Ford
          </h1>
        </div>
      </div>

      {/* Product Grid */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-10 py-10 sm:py-16">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8 text-center text-gray-800 uppercase tracking-wide animate__animated animate__fadeIn animate__slow">
          Tom Ford Perfumes
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {tomFordProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-[1.05] animate__animated animate__fadeInUp animate__slow"
            >
              <Link to={`/product/${product.id}`}>
                <div className="overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[180px] sm:h-[320px] md:h-[420px] lg:h-[520px] object-contain object-center transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </Link>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1 truncate">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-2 min-h-[50px] line-clamp-3">
                  {product.description}
                </p>

                <div className="mt-1 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-red-600">
                      {product.newPrice}
                    </span>
                    <span className="line-through text-gray-400 text-sm">
                      {product.oldPrice}
                    </span>
                  </div>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className={`w-10 h-10 flex items-center justify-center rounded-full shadow-md ${
                      addedProductIds.includes(product.id)
                        ? 'bg-[#2D336B]'
                        : 'bg-[#A9B5DF]'
                    } text-white hover:bg-[#68507B] hover:scale-110 transition duration-300`}
                    aria-label={`Add ${product.name} to cart`}
                  >
                    {addedProductIds.includes(product.id) ? <FaCheck /> : <FaPlus />}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Animations */}
      <style>{`
        @keyframes zoomLoop {
          0% { transform: scale(1); }
          25% { transform: scale(1.1); }
          50% { transform: scale(1.15); }
          75% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        @keyframes popUp {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.2); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default TomFordPage;
