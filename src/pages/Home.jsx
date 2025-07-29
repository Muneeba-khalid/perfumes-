import React from 'react'
import HeroSection from '../components/HeroSection'
import FeaturedBrands from '../components/FeaturedBrands'
import PopularProducts from '../components/PopularProducts'
import BestSellers from '../components/BestSellers'
import PerfumeTestimonials from '../components/PerfumeTestimonials'
// import NewArrivals from '../components/NewArrivals'
// import Cart from '../pages/Cart'; // Uncommented import
const Home = () => {
  return (
    <div>
      <HeroSection/>
      <FeaturedBrands/>

      {/* <Cart /> */}
<PopularProducts/>
<BestSellers/>
<PerfumeTestimonials/>
    </div>
  )
}

export default Home


