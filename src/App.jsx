// src/App.jsx

import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';

import Gucci from './pages/Gucci';
import Armani from './pages/Armani';
import TomFord from './pages/TomFord';
import CalvinKlein from './pages/CalvinKlein';
import Dior from './pages/Dior';
import Chanel from './pages/Chanel';
import Signup from './pages/Signup';
import  Login  from './pages/Login';
import SignupUpdate from './pages/SignupUpdate'
import Footer from './components/Footer';
import ProductDetails from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './components/Checkout';
import AllPopularProducts from './pages/AllPopularProducts';
import PopularProducts from './components/PopularProducts';
import BestSellers from './components/BestSellers';
import AllBestSellers from './pages/AllBestSellers';
import Contactus from './components/Contactus';
import Blog from './components/Blog';
import Shipping from './components/Shipping';
import Consultation from './components/Consultation';
import  Faqs from './components/Faqs'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />\
                <Route path="/Checkout" element={<Checkout/>} />
        <Route path="/gucci" element={<Gucci />} />
        <Route path="/armani" element={<Armani />} />
        <Route path="/tomford" element={<TomFord />} />
        <Route path="/calvinklein" element={<CalvinKlein />} />
        <Route path="/dior" element={<Dior />} />
        <Route path="/chanel" element={<Chanel />} />
                <Route path="/Blog" element={<Blog />} />
                                <Route path="/Shipping" element={<Shipping />} />

<Route path="/consultation" element={<Consultation />} />
<Route path="/faqs" element={<Faqs />} />



<Route path="/contact" element={<Contactus />} />

        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
                <Route path="/Cart" element={<Cart />} />
        <Route path="/update/:id" element={<SignupUpdate />} />  

        <Route path="/product/:productId" element={<ProductDetails />} />

{/* 

        <Route path="/NewArrivals" element={<NewArrivals />} />
        <Route path="/NewArrivalsPage" element={<NewArrivalsPage />} />
         */}
      
      <Route path="/PopularProducts" element={<PopularProducts />} />
      <Route path="/AllPopularProducts" element={<AllPopularProducts />} />


      <Route path="/AllBestSellers" element={<AllBestSellers />} />
      <Route path="/BestSellers" element={<BestSellers />} />



      </Routes>
      <Footer      
    
      
      />


    </>
  );
}

export default App;



