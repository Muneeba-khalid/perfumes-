// // ProductDetails.jsx
// import { useParams } from 'react-router-dom';
// import { products } from '../data/product';

// const ProductDetails = () => {
//   const { productId } = useParams();
//   const product = products.find(p => p.id === parseInt(productId));
//   const relatedProducts = products.filter(
//     p => p.brand === product.brand && p.id !== product.id
//   );

//   if (!product) return <div className="text-center py-20">Product not found</div>;

//   return (
//     <div className="w-full px-4 py-10">
//       {/* Product Details */}
//       <div className="flex flex-col md:flex-row gap-10 items-center mb-16">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-full md:w-1/2 h-auto rounded-2xl shadow-lg"
//         />
//         <div className="md:w-1/2">
//           <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
//           <p className="text-gray-600 text-lg mb-6">{product.description}</p>
//           <div className="flex gap-4 items-center">
//             <span className="text-2xl font-bold text-red-600">
//               RS:{product.newPrice}
//             </span>
//             <span className="line-through text-gray-400 text-lg">
//               RS:{product.oldPrice}
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Related Products */}
//       <div>
//         <h2 className="text-3xl font-bold mb-6">Related Products</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {relatedProducts.map(rp => (
//             <div
//               key={rp.id}
//               className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-[1.03] transition-all duration-500 cursor-pointer"
//               onClick={() => window.location.href = `/product/${rp.id}`}
//             >
//               <img
//                 src={rp.image}
//                 alt={rp.name}
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold mb-1">{rp.name}</h3>
//                 <p className="text-sm text-gray-600 min-h-[40px] mb-2">{rp.description}</p>
//                 <div className="flex items-center gap-3">
//                   <span className="text-red-600 font-bold">RS:{rp.newPrice}</span>
//                   <span className="text-gray-400 line-through">RS:{rp.oldPrice}</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;





// // ProductDetails.jsx

// import { useParams, useNavigate } from 'react-router-dom';
// import { products } from '../data/product';

// const ProductDetails = () => {
//   const { productId } = useParams();
//   const navigate = useNavigate();
//   const product = products.find(p => p.id === parseInt(productId));
//   const relatedProducts = products.filter(
//     p => p.brand === product.brand && p.id !== product.id
//   );

//   if (!product) return <div className="text-center py-20">Product not found</div>;

//   return (
//     <div className="w-full max-w-7xl mx-auto px-4 py-12">
//       {/* Breadcrumb */}
//       <div className="mb-8">
//         <nav className="text-sm text-gray-500">
//           <ol className="list-none p-0 inline-flex">
//             <li className="flex items-center">
//               <a href="/" className="hover:text-amber-600 transition-colors">Home</a>
//               <svg className="w-3 h-3 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path></svg>
//             </li>
//             <li className="flex items-center">
//               <a href="/brands" className="hover:text-amber-600 transition-colors">Brands</a>
//               <svg className="w-3 h-3 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path></svg>
//             </li>
//             <li className="flex items-center">
//               <a href={`/brand/${product.brand.toLowerCase().replace(' ', '-')}`} className="hover:text-amber-600 transition-colors">{product.brand}</a>
//               <svg className="w-3 h-3 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path></svg>
//             </li>
//             <li className="text-gray-900">{product.name}</li>
//           </ol>
//         </nav>
//       </div>

//       {/* Product Details */}
//       <div className="flex flex-col lg:flex-row gap-12 mb-20">
//         {/* Product Gallery */}
//         <div className="lg:w-1/2">
//           <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-auto max-h-[500px] object-contain"
//             />
//           </div>
          
//           {/* Thumbnails */}
//           <div className="flex gap-4 mt-6">
//             {[1, 2, 3, 4].map((thumb) => (
//               <div key={thumb} className="w-20 h-20 bg-gray-100 rounded-xl border border-gray-200 cursor-pointer hover:border-amber-500 transition-colors"></div>
//             ))}
//           </div>
//         </div>

//         {/* Product Info */}
//         <div className="lg:w-1/2">
//           <div className="sticky top-24">
//             <div className="flex items-center mb-4">
//               <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full">
//                 {product.brand}
//               </span>
//               <div className="flex items-center ml-4">
//                 {[...Array(5)].map((_, i) => (
//                   <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                   </svg>
//                 ))}
//                 <span className="text-gray-500 text-sm ml-2">(128 reviews)</span>
//               </div>
//             </div>
            
//             <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
//             <p className="text-lg text-gray-600 mb-8 leading-relaxed">{product.description}</p>
            
//             <div className="mb-8">
//               <h3 className="text-lg font-semibold text-gray-900 mb-3">Fragrance Notes</h3>
//               <div className="flex flex-wrap gap-3">
//                 <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">Bergamot</span>
//                 <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">Jasmine</span>
//                 <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">Sandalwood</span>
//                 <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">Amber</span>
//               </div>
//             </div>
            
//             <div className="mb-8">
//               <h3 className="text-lg font-semibold text-gray-900 mb-3">Size</h3>
//               <div className="flex gap-3">
//                 <button className="px-6 py-3 border-2 border-gray-300 rounded-xl font-medium hover:border-amber-500 hover:bg-amber-50 transition-colors">50ml</button>
//                 <button className="px-6 py-3 border-2 border-amber-500 bg-amber-50 text-amber-600 rounded-xl font-medium">100ml</button>
//                 <button className="px-6 py-3 border-2 border-gray-300 rounded-xl font-medium hover:border-amber-500 hover:bg-amber-50 transition-colors">200ml</button>
//               </div>
//             </div>
            
//             <div className="flex items-center mb-8">
//               <div className="flex gap-4 items-center mr-10">
//                 <span className="text-3xl font-bold text-gray-900">
//                   RS:{product.newPrice}
//                 </span>
//                 <span className="line-through text-gray-400 text-xl">
//                   RS:{product.oldPrice}
//                 </span>
//               </div>
//               <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full font-semibold">25% OFF</span>
//             </div>
            
//             <div className="flex flex-col sm:flex-row gap-4">
//               <div className="flex items-center border border-gray-300 rounded-xl">
//                 <button className="px-4 py-3 text-gray-600 hover:text-amber-600">
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4"></path></svg>
//                 </button>
//                 <span className="px-4 py-3 font-medium">1</span>
//                 <button className="px-4 py-3 text-gray-600 hover:text-amber-600">
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
//                 </button>
//               </div>
//               <button className="flex-1 bg-gray-900 text-white py-4 rounded-xl font-semibold hover:bg-amber-600 transition-colors flex items-center justify-center">
//                 <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
//                 Add to Cart
//               </button>
//             </div>
            
//             <div className="mt-8 pt-8 border-t border-gray-200">
//               <div className="flex flex-wrap gap-4">
//                 <button className="flex items-center text-gray-600 hover:text-amber-600">
//                   <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
//                   Add to Wishlist
//                 </button>
//                 <button className="flex items-center text-gray-600 hover:text-amber-600">
//                   <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
//                   Share
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Product Tabs */}
//       <div className="mb-20">
//         <div className="border-b border-gray-200">
//           <nav className="flex -mb-px">
//             <button className="px-6 py-4 font-medium border-b-2 border-amber-500 text-amber-500">Description</button>
//             <button className="px-6 py-4 font-medium text-gray-500 hover:text-gray-700">Reviews (128)</button>
//             <button className="px-6 py-4 font-medium text-gray-500 hover:text-gray-700">Shipping & Returns</button>
//           </nav>
//         </div>
        
//         <div className="py-8">
//           <h3 className="text-xl font-semibold mb-4">About this Fragrance</h3>
//           <p className="text-gray-600 leading-relaxed">
//             {product.description} This iconic fragrance embodies the spirit of modern elegance. 
//             Crafted with precision and passion, it opens with sparkling top notes of 
//             citrus and bergamot, leading to a heart of delicate florals and warm spices, 
//             before settling into a base of rich woods and sensual musk. Perfect for both 
//             day and evening wear, this versatile scent leaves a lasting impression wherever you go.
//           </p>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
//             <div className="flex items-start">
//               <div className="bg-amber-100 p-3 rounded-lg mr-4">
//                 <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
//               </div>
//               <div>
//                 <h4 className="font-semibold text-lg mb-1">Long Lasting</h4>
//                 <p className="text-gray-600">8-10 hours of consistent fragrance</p>
//               </div>
//             </div>
            
//             <div className="flex items-start">
//               <div className="bg-amber-100 p-3 rounded-lg mr-4">
//                 <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
//               </div>
//               <div>
//                 <h4 className="font-semibold text-lg mb-1">Gender Neutral</h4>
//                 <p className="text-gray-600">Perfect for all genders</p>
//               </div>
//             </div>
            
//             <div className="flex items-start">
//               <div className="bg-amber-100 p-3 rounded-lg mr-4">
//                 <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
//               </div>
//               <div>
//                 <h4 className="font-semibold text-lg mb-1">Eco-Friendly</h4>
//                 <p className="text-gray-600">Recyclable packaging</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Related Products */}
//       <div className="mb-16">
//         <div className="flex justify-between items-center mb-8">
//           <h2 className="text-3xl font-bold">Related Products</h2>
//           <a href={`/brand/${product.brand.toLowerCase().replace(' ', '-')}`} className="text-amber-600 hover:text-amber-700 font-medium flex items-center">
//             View all {product.brand} products
//             <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
//           </a>
//         </div>
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {relatedProducts.map(rp => (
//             <div
//               key={rp.id}
//               className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
//               onClick={() => navigate(`/product/${rp.id}`)}
//             >
//               <div className="relative h-64 bg-gray-50 flex items-center justify-center p-4">
//                 <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full flex items-center justify-center text-gray-500">
//                   Product Image
//                 </div>
//                 <div className="absolute top-4 right-4 bg-amber-500 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
//                   SALE
//                 </div>
//               </div>
//               <div className="p-5">
//                 <div className="flex justify-between items-start mb-2">
//                   <h3 className="text-lg font-bold group-hover:text-amber-600 transition-colors">
//                     {rp.name}
//                   </h3>
//                   <div className="flex items-center gap-1 text-amber-500">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                     </svg>
//                     <span className="font-bold text-sm">4.8</span>
//                   </div>
//                 </div>
//                 <p className="text-gray-600 text-sm mb-3 h-12 overflow-hidden">
//                   {rp.description}
//                 </p>
//                 <div className="flex justify-between items-center">
//                   <div className="flex items-center gap-2">
//                     <span className="font-bold text-gray-900">{rp.newPrice}</span>
//                     <span className="line-through text-gray-400 text-sm">
//                       {rp.oldPrice}
//                     </span>
//                   </div>
//                   <button className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-900 text-white hover:bg-amber-500 hover:text-gray-900 transition-colors">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

// Popular Products section below the related products?

// Recently Viewed products?

// Customer Reviews or Ratings?

// “Buy Now” button?

// Animated image zoom on hover?


import { useParams, Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { products } from '../data/product';
import { CartContext } from '../context/CartContext';
import { FaPlus, FaCheck, FaHeart, FaRegHeart } from 'react-icons/fa';

const ProductDetails = () => {
  const { productId } = useParams();
  const { addToCart } = useContext(CartContext);
  const [addedProductIds, setAddedProductIds] = useState([]);
  const [wishlistIds, setWishlistIds] = useState([]);
  const [selectedSize, setSelectedSize] = useState('250ml');
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === parseInt(productId));
  const relatedProducts = products.filter(
    p => p.brand === product?.brand && p.id !== product?.id
       );

  const handleAddToCart = (product) => {
    const productWithSize = { ...product, size: selectedSize, quantity };
    addToCart(productWithSize);
    setAddedProductIds(prev => [...prev, product.id]);
    setTimeout(() => {
      setAddedProductIds(prev => prev.filter(id => id !== product.id));
    }, 1500);
  };

  const handleWishlistToggle = (productId) => {
    setWishlistIds((prev) =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleQuantityChange = (type) => {
    setQuantity(prev =>
      type === 'inc' ? prev + 1 : prev > 1 ? prev - 1 : 1
    );
  };

  if (!product) return <div className="text-center py-20">Product not found</div>;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10">
      {/* Breadcrumb Navigation */}
      <div className="text-sm mb-4 text-gray-500">
        <Link to="/" className="hover:underline">Home</Link> &gt;{' '}
        <Link to="/BrandPage" className="hover:underline">Brands</Link> &gt;{' '}
        <Link to={`/brands/${product.brand}`} className="hover:underline">{product.brand}</Link> &gt;{' '}
        <span className="text-gray-700 font-medium">{product.name}</span>
      </div>

      {/* Product Details */}
      <div className="flex flex-col lg:flex-row gap-10 mb-16">
        <div className="lg:w-1/2">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-sm">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto max-h-[500px] object-contain"
            />
          </div>
        </div>

        <div className="lg:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 text-lg mb-4">{product.description}</p>

            {/* Fragrance Notes */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-800">Fragrance Notes</h4>
              <p className="text-gray-600 italic">{product.notes || "Top: Citrus • Heart: Floral • Base: Woody"}</p>
            </div>

            <div className="flex gap-4 items-center mb-4">
              <span className="text-2xl font-bold text-red-600">RS: {product.newPrice}</span>
              <span className="line-through text-gray-400 text-lg">RS: {product.oldPrice}</span>
            </div>

            {/* Size Selection Buttons */}
            <div className="mb-4">
              <span className="block text-sm font-medium text-gray-700 mb-2">Select Size</span>
              <div className="flex gap-3">
                {['250ml', '500ml', '750ml', '1L'].map(size => (
                  <button
                    key={size}
                    className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
                      selectedSize === size
                        ? 'bg-[#2D336B] text-white border-[#2D336B]'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-gray-500'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm font-medium text-gray-700">Quantity</span>
              <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-1">
                <button
                  onClick={() => handleQuantityChange('dec')}
                  className="text-lg font-bold text-gray-700 hover:text-[#2D336B]"
                >-</button>
                <span className="text-md font-medium">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange('inc')}
                  className="text-lg font-bold text-gray-700 hover:text-[#2D336B]"
                >+</button>
              </div>
            </div>

            {/* Add to Cart & Wishlist */}
            <div className="flex gap-4">
              <button
                onClick={() => handleAddToCart(product)}
                className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 text-white font-semibold rounded-xl transition-all duration-300 ${
                  addedProductIds.includes(product.id)
                    ? 'bg-[#2D336B]'
                    : 'bg-[#A9B5DF] hover:bg-[#68507B]'
                }`}
              >
                {addedProductIds.includes(product.id) ? <FaCheck /> : <FaPlus />}
                {addedProductIds.includes(product.id) ? 'Added' : 'Add to Cart'}
              </button>

              <button
                onClick={() => handleWishlistToggle(product.id)}
                className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 hover:bg-pink-100 transition"
              >
                {wishlistIds.includes(product.id) ? (
                  <FaHeart className="text-pink-600" />
                ) : (
                  <FaRegHeart className="text-gray-600" />
                )}
              </button>
            </div>

            {/* About This Fragrance */}
            <div className="mt-8">
              <h4 className="font-semibold text-gray-800 mb-2">About this Fragrance</h4>
              <p className="text-gray-600">
                {product.about ||
                  "Crafted with passion and precision, this fragrance captures the essence of elegance and luxury, perfect for every special occasion."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 uppercase tracking-wide">
          Related Products
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {relatedProducts.map((rp) => (
            <div
              key={rp.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-[1.05]"
            >
              <Link to={`/product/${rp.id}`}>
                <div className="overflow-hidden relative">
                  <img
                    src={rp.image}
                    alt={rp.name}
                    className="w-full h-[180px] sm:h-[320px] md:h-[420px] object-contain object-center transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </Link>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1 truncate">{rp.name}</h3>
                <p className="text-gray-600 text-sm mb-2 min-h-[50px] line-clamp-3">
                  {rp.description}
                </p>

                <div className="mt-1 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-red-600">RS:{rp.newPrice}</span>
                    <span className="line-through text-gray-400 text-sm">RS:{rp.oldPrice}</span>
                  </div>
                  <button
                    onClick={() => handleAddToCart(rp)}
                    className={`w-10 h-10 flex items-center justify-center rounded-full shadow-md ${
                      addedProductIds.includes(rp.id) ? 'bg-[#2D336B]' : 'bg-[#A9B5DF]'
                    } text-white hover:bg-[#68507B] hover:scale-110 transition duration-300`}
                    aria-label={`Add ${rp.name} to cart`}
                  >
                    {addedProductIds.includes(rp.id) ? <FaCheck /> : <FaPlus />}
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

export default ProductDetails;









































// import { useParams, Link } from 'react-router-dom';
// import { useContext, useState } from 'react';
// import { products } from '../data/product';
// import { popular } from '../data/popular'; // ✅ NEW IMPORT
// import { CartContext } from '../context/CartContext';
// import { FaPlus, FaCheck, FaHeart, FaRegHeart } from 'react-icons/fa';

// const ProductDetails = () => {
//   const { productId } = useParams();
//   const { addToCart } = useContext(CartContext);
//   const [addedProductIds, setAddedProductIds] = useState([]);
//   const [wishlistIds, setWishlistIds] = useState([]);
//   const [selectedSize, setSelectedSize] = useState('250ml');
//   const [quantity, setQuantity] = useState(1);

//   const product = products.find(p => p.id === parseInt(productId));

//   const relatedProducts = products.filter(
//     p => p.brand === product?.brand && p.id !== product?.id
//   );

//   const popularRelatedProducts = popular.filter( // ✅ NEW
//     p => p.brand === product?.brand && p.id !== product?.id
//   );

//   const handleAddToCart = (product) => {
//     const productWithSize = { ...product, size: selectedSize, quantity };
//     addToCart(productWithSize);
//     setAddedProductIds(prev => [...prev, product.id]);
//     setTimeout(() => {
//       setAddedProductIds(prev => prev.filter(id => id !== product.id));
//     }, 1500);
//   };

//   const handleWishlistToggle = (productId) => {
//     setWishlistIds((prev) =>
//       prev.includes(productId)
//         ? prev.filter(id => id !== productId)
//         : [...prev, productId]
//     );
//   };

//   const handleQuantityChange = (type) => {
//     setQuantity(prev =>
//       type === 'inc' ? prev + 1 : prev > 1 ? prev - 1 : 1
//     );
//   };

//   if (!product) return <div className="text-center py-20">Product not found</div>;

//   return (
//     <div className="w-full max-w-7xl mx-auto px-4 py-10">

//       {/* Breadcrumb Navigation */}
//       <div className="text-sm mb-4 text-gray-500">
//         <Link to="/" className="hover:underline">Home</Link> &gt;{' '}
//         <Link to="/BrandPage" className="hover:underline">Brands</Link> &gt;{' '}
//         <Link to={`/brands/${product.brand}`} className="hover:underline">{product.brand}</Link> &gt;{' '}
//         <span className="text-gray-700 font-medium">{product.name}</span>
//       </div>

//       {/* Product Details */}
//       <div className="flex flex-col lg:flex-row gap-10 mb-16">
//         <div className="lg:w-1/2">
//           <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-sm">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-auto max-h-[500px] object-contain"
//             />
//           </div>
//         </div>

//         <div className="lg:w-1/2 flex flex-col justify-between">
//           <div>
//             <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
//             <p className="text-gray-600 text-lg mb-4">{product.description}</p>

//             <div className="mb-6">
//               <h4 className="font-semibold text-gray-800">Fragrance Notes</h4>
//               <p className="text-gray-600 italic">{product.notes || "Top: Citrus • Heart: Floral • Base: Woody"}</p>
//             </div>

//             <div className="flex gap-4 items-center mb-4">
//               <span className="text-2xl font-bold text-red-600">RS: {product.newPrice}</span>
//               <span className="line-through text-gray-400 text-lg">RS: {product.oldPrice}</span>
//             </div>

//             <div className="mb-4">
//               <span className="block text-sm font-medium text-gray-700 mb-2">Select Size</span>
//               <div className="flex gap-3">
//                 {['250ml', '500ml', '750ml', '1L'].map(size => (
//                   <button
//                     key={size}
//                     className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
//                       selectedSize === size
//                         ? 'bg-[#2D336B] text-white border-[#2D336B]'
//                         : 'bg-white text-gray-700 border-gray-300 hover:border-gray-500'
//                     }`}
//                     onClick={() => setSelectedSize(size)}
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div className="flex items-center gap-4 mb-4">
//               <span className="text-sm font-medium text-gray-700">Quantity</span>
//               <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-1">
//                 <button
//                   onClick={() => handleQuantityChange('dec')}
//                   className="text-lg font-bold text-gray-700 hover:text-[#2D336B]"
//                 >-</button>
//                 <span className="text-md font-medium">{quantity}</span>
//                 <button
//                   onClick={() => handleQuantityChange('inc')}
//                   className="text-lg font-bold text-gray-700 hover:text-[#2D336B]"
//                 >+</button>
//               </div>
//             </div>

//             <div className="flex gap-4">
//               <button
//                 onClick={() => handleAddToCart(product)}
//                 className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 text-white font-semibold rounded-xl transition-all duration-300 ${
//                   addedProductIds.includes(product.id)
//                     ? 'bg-[#2D336B]'
//                     : 'bg-[#A9B5DF] hover:bg-[#68507B]'
//                 }`}
//               >
//                 {addedProductIds.includes(product.id) ? <FaCheck /> : <FaPlus />}
//                 {addedProductIds.includes(product.id) ? 'Added' : 'Add to Cart'}
//               </button>

//               <button
//                 onClick={() => handleWishlistToggle(product.id)}
//                 className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 hover:bg-pink-100 transition"
//               >
//                 {wishlistIds.includes(product.id) ? (
//                   <FaHeart className="text-pink-600" />
//                 ) : (
//                   <FaRegHeart className="text-gray-600" />
//                 )}
//               </button>
//             </div>

//             <div className="mt-8">
//               <h4 className="font-semibold text-gray-800 mb-2">About this Fragrance</h4>
//               <p className="text-gray-600">
//                 {product.about ||
//                   "Crafted with passion and precision, this fragrance captures the essence of elegance and luxury, perfect for every special occasion."}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Related Products */}
//       <div className="mt-20">
//         <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 uppercase tracking-wide">
//           Related Products
//         </h2>
//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {relatedProducts.map((rp) => (
//             <div
//               key={rp.id}
//               className="bg-white rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-[1.05]"
//             >
//               <Link to={`/product/${rp.id}`}>
//                 <div className="overflow-hidden relative">
//                   <img
//                     src={rp.image}
//                     alt={rp.name}
//                     className="w-full h-[180px] sm:h-[320px] md:h-[420px] object-contain object-center transition-transform duration-700"
//                     loading="lazy"
//                   />
//                 </div>
//               </Link>

//               <div className="p-4">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-1 truncate">{rp.name}</h3>
//                 <p className="text-gray-600 text-sm mb-2 min-h-[50px] line-clamp-3">
//                   {rp.description}
//                 </p>

//                 <div className="mt-1 flex items-center justify-between">
//                   <div className="flex flex-col">
//                     <span className="text-lg font-bold text-red-600">RS:{rp.newPrice}</span>
//                     <span className="line-through text-gray-400 text-sm">RS:{rp.oldPrice}</span>
//                   </div>
//                   <button
//                     onClick={() => handleAddToCart(rp)}
//                     className={`w-10 h-10 flex items-center justify-center rounded-full shadow-md ${
//                       addedProductIds.includes(rp.id) ? 'bg-[#2D336B]' : 'bg-[#A9B5DF]'
//                     } text-white hover:bg-[#68507B] hover:scale-110 transition duration-300`}
//                     aria-label={`Add ${rp.name} to cart`}
//                   >
//                     {addedProductIds.includes(rp.id) ? <FaCheck /> : <FaPlus />}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;
