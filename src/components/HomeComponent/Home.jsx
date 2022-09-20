import React from 'react';
import socialculture from '../../assets/images/socialculture.jpg';
import sporthero from '../../assets/images/store-hero.png';
import shop11 from '../../assets/images/nordwood.jpg';
import NewProduct from '../ProductComponent/ProductComponent/NewProduct';
import ShopBrand from '../ProductComponent/BrandComponent/Brand';
// import AllProduct from '../ProductComponent/ProductComponent/AllProduct';
// import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import Category from '../ProductComponent/CategoryComponent/Category';

const Home = () => {

  const options = {
    margin: 12,
    responsiveClass: true,
    nav: true,
    items: 1,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    // navText:[
    //   '<span class="arrow prev">‹</span>',
    //   '<span class="arrow next">›</span>'
    // ]
  };

  return (
    <>
      <div className='container home_carousel' >

        <OwlCarousel className="owl-theme" {...options}>
          <div className="item">
            <img
              src={socialculture}
              alt="socialculture"
            />
          </div>
          <div className="item">
            <img
              src={sporthero}
              alt="sporthero"
            />
          </div>
          <div className="item">
            <img
              src={shop11}
              alt="shop11"
            />
          </div>
        </OwlCarousel>
      </div>

      <div className='our-categories mt-5'>
        <Category />
      </div>

      <div className='new-product'>
        <NewProduct />
      </div>

      <div className='shop-by-brand'>
        <ShopBrand />
      </div>
    </>
  )
}

export default Home;




