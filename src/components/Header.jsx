import { FaShoppingCart, FaUser, FaSearch, FaBars, FaTimes, FaHome, FaBlog, FaEnvelope } from "react-icons/fa";
import { GiPerfumeBottle } from "react-icons/gi";
import { useState, useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { products } from "../data/product";

const brandData = ["Gucci", "Armani", "Tom Ford", "Calvin Klein", "Dior", "Chanel"];

const Header = () => {
  const [showDesktopBrands, setShowDesktopBrands] = useState(false);
  const [showMobileBrands, setShowMobileBrands] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  const { cartCount } = useContext(CartContext);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && !document.getElementById("mobile-menu")?.contains(e.target)) {
        if (!e.target.closest('.menu-button')) {
          setMenuOpen(false);
        }
      }
      
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSearchResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  // Enhanced search functionality
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      setShowSearchResults(false);
      return;
    }

    const query = searchQuery.toLowerCase();
    
    // Search brands
    const brandMatches = brandData.filter(brand => 
      brand.toLowerCase().includes(query)
    ).map(brand => {
      // Custom URL handling for specific brands
      let brandId = brand.toLowerCase().replace(/\s+/g, '-');
      if (brand === "Tom Ford") brandId = "tomford";
      if (brand === "Calvin Klein") brandId = "calvinklein";
      
      return { 
        type: 'brand', 
        name: brand,
        id: brandId
      };
    });
    
    // Search products from imported data
    const productMatches = products.filter(product => 
      product.name.toLowerCase().includes(query) || 
      product.brand.toLowerCase().includes(query)
    ).map(product => ({ 
      type: 'product', 
      name: product.name,
      brand: product.brand,
      id: product.id,
      image: product.image
    }));
    
    setSearchResults([...brandMatches, ...productMatches]);
    setShowSearchResults(true);
  }, [searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setSearchOpen(false);
      setMenuOpen(false);
      setShowSearchResults(false);
    }
  };

  const handleResultClick = (result) => {
    if (result.type === 'brand') {
      navigate(`/${result.id}`);
    } else {
      navigate(`/product/${result.id}`);
    }
    setSearchQuery("");
    setShowSearchResults(false);
    setSearchOpen(false);
    setMenuOpen(false);
  };

  // Helper function to get brand path
  const getBrandPath = (brand) => {
    if (brand === "Tom Ford") return "tomford";
    if (brand === "Calvin Klein") return "calvinklein";
    return brand.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <header className="w-full shadow-md px-4 md:px-8 py-4 flex justify-between items-center bg-white sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center space-x-3 select-none">
        <GiPerfumeBottle
          style={{
            color: "#7C3AED",
            fontSize: "3rem",
            transition: "transform 0.3s ease",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        />
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "800",
            color: "#6B21A8",
            transition: "color 0.3s ease, transform 0.3s ease",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
          className="hidden sm:block"
        >
          Luxe<span style={{ color: "#A78BFA" }}>Scents</span>
        </h1>
      </div>

      {/* Mobile Search */}
      {searchOpen && (
        <div className="md:hidden fixed top-[72px] left-0 w-full bg-white shadow-md p-4 z-40">
          <form onSubmit={handleSearch} className="relative" ref={searchRef}>
            <input
              type="text"
              placeholder="Search brands or perfumes..."
              className="pl-12 pr-4 py-3 w-full rounded-full border border-gray-300 focus:outline-purple-500 text-base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => searchQuery && setShowSearchResults(true)}
              autoFocus
            />
            <FaSearch className="absolute left-4 top-3.5 text-purple-500 text-lg" />
            
            {showSearchResults && searchResults.length > 0 && (
              <div className="absolute left-0 top-full w-full mt-2 bg-white shadow-lg rounded-xl z-50 max-h-80 overflow-y-auto">
                {searchResults.map((result, index) => (
                  <div
                    key={index}
                    className="p-3 border-b border-gray-100 hover:bg-purple-50 cursor-pointer flex items-center"
                    onClick={() => handleResultClick(result)}
                  >
                    {result.type === 'product' ? (
                      <>
                        <img 
                          src={result.image} 
                          alt={result.name} 
                          className="w-10 h-10 object-cover rounded mr-3"
                        />
                        <div>
                          <div className="font-medium">{result.name}</div>
                          <div className="text-sm text-gray-500">Perfume • {result.brand}</div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="bg-purple-100 text-purple-700 w-10 h-10 flex items-center justify-center rounded-full mr-3">
                          {result.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-medium">{result.name}</div>
                          <div className="text-sm text-gray-500">Brand</div>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            )}
          </form>
        </div>
      )}

      {/* Mobile Actions */}
      <div className="md:hidden flex items-center space-x-4">
        <button 
          onClick={() => {
            setSearchOpen(!searchOpen);
            if (!searchOpen) setSearchQuery("");
          }}
          className="text-gray-700 hover:text-purple-600 transition"
        >
          <FaSearch size={22} />
        </button>
        
        <div className="relative cursor-pointer" onClick={() => navigate("/cart")}>
          <FaShoppingCart className="text-2xl text-gray-700 hover:text-purple-600 transition" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </div>
        
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="text-gray-700 hover:text-purple-600 transition menu-button"
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-8 text-gray-700">
        {["Home", "Brands", "Blog", "Contact"].map((item, index) => {
          if (item === "Brands") {
            return (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setShowDesktopBrands(true)}
                onMouseLeave={() => setShowDesktopBrands(false)}
              >
                <button
                  className="flex items-center space-x-2"
                  style={{
                    fontSize: "1.8rem",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "color 0.3s ease, transform 0.3s ease",
                  }}
                >
                  <span>Brands</span>
                  <span>▼</span>
                </button>
                {showDesktopBrands && (
                  <div className="absolute top-10 left-0 bg-white shadow-2xl rounded-xl w-80 p-5 z-10 text-lg font-semibold text-gray-800 grid grid-cols-2 gap-4 border border-purple-100">
                    {brandData.map((brand, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 p-3 bg-purple-50 rounded-lg hover:bg-purple-200 transition cursor-pointer"
                        onClick={() => navigate(`/${getBrandPath(brand)}`)}
                      >
                        <div className="bg-purple-600 text-white w-7 h-7 flex items-center justify-center rounded-full text-sm font-bold">
                          {brand.charAt(0)}
                        </div>
                        <span>{brand}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          } else {
            const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
            return (
              <Link
                key={index}
                to={path}
                style={{
                  fontSize: "1.8rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "color 0.3s ease, transform 0.3s ease",
                }}
                className="hover:text-purple-700 hover:scale-105"
              >
                {item}
              </Link>
            );
          }
        })}
      </nav>

      {/* Desktop Actions */}
      <div className="hidden md:flex items-center space-x-5">
        <div className="relative cursor-pointer" onClick={() => navigate("/cart")}>
          <FaShoppingCart className="text-3xl text-gray-700 hover:text-purple-600 transition" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </div>
        
        <div className="relative" ref={searchRef}>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search brands or perfumes..."
              className="pl-12 pr-6 py-3 w-80 rounded-full border border-gray-300 focus:outline-purple-500 text-base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => searchQuery && setShowSearchResults(true)}
            />
            <FaSearch className="absolute left-4 top-3.5 text-purple-500 text-lg" />
            
            {showSearchResults && searchResults.length > 0 && (
              <div className="absolute left-0 top-full w-full mt-2 bg-white shadow-lg rounded-xl z-50 max-h-80 overflow-y-auto">
                {searchResults.map((result, index) => (
                  <div
                    key={index}
                    className="p-3 border-b border-gray-100 hover:bg-purple-50 cursor-pointer flex items-center"
                    onClick={() => handleResultClick(result)}
                  >
                    {result.type === 'product' ? (
                      <>
                        <img 
                          src={result.image} 
                          alt={result.name} 
                          className="w-10 h-10 object-cover rounded mr-3"
                        />
                        <div>
                          <div className="font-medium">{result.name}</div>
                          <div className="text-sm text-gray-500">Perfume • {result.brand}</div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="bg-purple-100 text-purple-700 w-10 h-10 flex items-center justify-center rounded-full mr-3">
                          {result.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-medium">{result.name}</div>
                          <div className="text-sm text-gray-500">Brand</div>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            )}
          </form>
        </div>
        
        <Link to="/signup" className="flex items-center gap-2 bg-purple-100 hover:bg-purple-200 text-purple-700 px-5 py-2.5 rounded-full text-lg font-semibold shadow-sm hover:shadow-md transition">
          <FaUser /> Signup
        </Link>
        <Link to="/login" className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-full text-lg shadow-sm hover:shadow-md transition">
          <FaUser /> Login
        </Link>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed top-[72px] left-0 w-full bg-white shadow-2xl flex flex-col items-start px-6 py-6 space-y-6 z-40 transition-all duration-300 ease-in-out
        ${menuOpen ? "translate-y-0 opacity-100 h-[calc(100vh-72px)] overflow-y-auto" : "-translate-y-[150%] opacity-0 h-0 overflow-hidden"}`}
      >
        <Link 
          to="/" 
          className="flex items-center gap-3 text-xl font-semibold hover:text-purple-700 transition w-full py-3"
          onClick={() => setMenuOpen(false)}
        >
          <FaHome className="text-purple-600" />
          <span>Home</span>
        </Link>
        
        <div className="w-full">
          <button 
            className="flex items-center gap-3 text-xl font-semibold text-purple-700 mb-3 w-full py-3"
            onClick={() => setShowMobileBrands(!showMobileBrands)}
          >
            <GiPerfumeBottle className="text-purple-600" />
            <span>Brands</span>
            <span className="ml-auto">{showMobileBrands ? "▲" : "▼"}</span>
          </button>
          
          {showMobileBrands && (
            <div className="grid grid-cols-2 gap-3">
              {brandData.map((brand, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-base font-medium bg-purple-50 p-3 rounded hover:bg-purple-200 cursor-pointer transition"
                  onClick={() => {
                    navigate(`/${getBrandPath(brand)}`);
                    setMenuOpen(false);
                  }}
                >
                  <div className="bg-purple-600 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold">
                    {brand.charAt(0)}
                  </div>
                  <span>{brand}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <Link 
          to="/Blog" 
          className="flex items-center gap-3 text-xl font-semibold hover:text-purple-700 transition w-full py-3"
          onClick={() => setMenuOpen(false)}
        >
          <FaBlog className="text-purple-600" />
          <span>Blog</span>
        </Link>
        
        <Link 
          to="/Contactus" 
          className="flex items-center gap-3 text-xl font-semibold hover:text-purple-700 transition w-full py-3"
          onClick={() => setMenuOpen(false)}
        >
          <FaEnvelope className="text-purple-600" />
          <span>Contact Us</span>
        </Link>
        
        <div className="flex flex-col gap-4 w-full mt-6 pt-6 border-t border-gray-200">
          <Link 
            to="/signup" 
            className="flex items-center justify-center gap-2 bg-purple-100 hover:bg-purple-200 text-purple-700 px-5 py-3 rounded-full text-lg font-semibold shadow-sm hover:shadow-md transition w-full"
            onClick={() => setMenuOpen(false)}
          >
            <FaUser /> Signup
          </Link>
          <Link 
            to="/login" 
            className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-full text-lg shadow-sm hover:shadow-md transition w-full"
            onClick={() => setMenuOpen(false)}
          >
            <FaUser /> Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;