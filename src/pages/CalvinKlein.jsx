










import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ck_banner2 from '../assets/ck_banner2.jpeg';
import { products } from '../data/product';
import { CartContext } from '../context/CartContext';
import { FaPlus, FaCheck } from 'react-icons/fa';

const CalvinKleinPage = () => {
  const { addToCart } = useContext(CartContext);
  const ckProducts = products.filter(p => p.brand === 'Calvin Klein');

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
          src={ck_banner2}
          alt="Calvin Klein Banner"
          className="w-full h-full object-cover object-center sm:object-center md:object-center brightness-100 contrast-125 saturate-150 transition-all duration-[3000ms] ease-in-out"
          style={{
            animation: 'zoomLoop 10s ease-in-out infinite'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/30 to-transparent backdrop-blur-sm flex items-center justify-center animate__animated animate__fadeIn animate__slower px-4 sm:px-8">
          <h1
            className="text-white text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-[0.3em] uppercase drop-shadow-2xl text-center"
            style={{
              animation: 'popUp 2s ease-in-out infinite'
            }}
          >
            Calvin Klein
          </h1>
        </div>
      </div>

      {/* Product Grid */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-10 py-10 sm:py-16">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8 sm:mb-14 text-center text-gray-800 uppercase tracking-wide animate__animated animate__fadeIn animate__slow">
          Calvin Klein Perfumes
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8">
          {ckProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-[1.05] animate__animated animate__fadeInUp animate__slow"
            >
              <Link to={`/product/${product.id}`}>
                <div className="overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[180px] sm:h-[320px] md:h-[420px] lg:h-[520px] object-contain object-center transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              </Link>

              <div className="p-4 sm:p-5">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2 truncate">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-2 min-h-[50px] line-clamp-3">
                  {product.description}
                </p>

                <div className="relative mt-1 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-lg sm:text-xl font-bold text-red-600">
                      {product.newPrice}
                    </span>
                    <span className="line-through text-gray-400 text-xs sm:text-sm">
                      {product.oldPrice}
                    </span>
                  </div>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full shadow-md ${
                      addedProductIds.includes(product.id)
                        ? 'bg-[#2D336B]'
                        : 'bg-[#A9B5DF]'
                    } text-white hover:bg-[#68507B] hover:scale-110 transition duration-300`}
                    aria-label={`Add ${product.name} to cart`}
                  >
                    {addedProductIds.includes(product.id) ? (
                      <FaCheck />
                    ) : (
                      <FaPlus />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Animation Keyframes */}
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

export default CalvinKleinPage;





























