import { Link } from 'react-router-dom';
import Gucci_main from '../assets/Gucci_main.jpeg';
import armani_main from '../assets/armani_main.jpeg';
import tom_main from '../assets/tom_main.jpeg';
import ck_main from '../assets/ck_main.jpeg';
import dior_main from '../assets/dior_main.jpeg';
import chanel_main from '../assets/chanel_main.jpeg';

const brands = [
  {
    name: 'Gucci',
    image: Gucci_main,
    description: 'Luxury fashion from Italy. Experience timeless craftsmanship and innovation.',
    route: '/gucci',
  },
  {
    name: 'Armani',
    image: armani_main,
    description: 'Timeless elegance and design. Elevate your wardrobe with Italian class.',
    route: '/armani',
  },
  {
    name: 'Tom Ford',
    image: tom_main,
    description: 'Modern glamour & bold style. Fashion that speaks confidence and power.',
    route: '/tomford',
  },
  {
    name: 'Calvin Klein',
    image: ck_main,
    description: 'Minimalist American design. Subtle style meets everyday comfort.',
    route: '/calvinklein',
  },
  {
    name: 'Dior',
    image: dior_main,
    description: 'Iconic French fashion house. Classic luxury and modern sophistication.',
    route: '/dior',
  },
  {
    name: 'Chanel',
    image: chanel_main,
    description: 'Elegant, classic, and bold. Redefining timeless beauty and fashion.',
    route: '/chanel',
  },
];

export default function FeaturedBrands() {
  return (
    <div className="py-16 bg-[#f7f7f7] px-6">
      {/* Heading */}
      <h2 className="text-4xl font-extrabold text-center mb-3 text-gray-900">
        ✨ Luxury Featured Brands ✨
      </h2>
      {/* Paragraph below heading with larger font */}
      <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
        Discover the world’s most iconic fashion brands with timeless style and modern elegance.
      </p>

      {/* Brands slider container */}
      <div className="overflow-hidden relative">
        <div
          className="flex space-x-10 animate-slide"
          style={{
            animation: 'slide 30s linear infinite',
            minWidth: '200%',
          }}
        >
          {/* Duplicate brands array to loop animation */}
          {brands.concat(brands).map((brand, index) => (
            <Link
              to={brand.route}
              key={index}
              className="w-80 h-[540px] bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 relative group"
            >
              {/* Brand Image */}
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-80 object-contain rounded-t-2xl bg-white"
              />

              {/* Card content */}
              <div className="p-6 flex flex-col justify-between h-[calc(100%-20rem)]">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">{brand.name}</h3>
                  {/* Paragraph with bigger font */}
                  <p className="text-gray-600 mt-2 text-base leading-relaxed">
                    {brand.description}
                  </p>
                </div>

                {/* Explore Button */}
                <div style={{fontSize:"20px", textDecoration:"none", fontWeight:"bold"}} className="mt-6">
                  <span    
                    className="inline-flex items-center gap-2 text-[#58397A] font-semibold cursor-pointer transition duration-300  hover:scale-105"
                  >
                    Explore <i className="fas fa-arrow-right"></i>
                  </span>
                </div>
              </div>

              {/* Tooltip popup on hover */}
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-full opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none z-20">
                <div className="bg-white border border-gray-300 shadow-lg px-4 py-2 rounded-lg text-sm text-gray-800 font-medium">
                  Explore more from {brand.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Animation keyframes */}
      <style>
        {`
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
}

