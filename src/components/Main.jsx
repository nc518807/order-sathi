import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './HeaderComponent/Header';
import Footer from './FooterComponent/Footer';
import Login from './LoginComponent/Login';
import Home from './HomeComponent/Home';
import AllProduct from './ProductComponent/ProductComponent/AllProduct';
import SingleProductDetail from './ProductComponent/ProductComponent/SingleProductDetail';
import SignUp from './LoginComponent/SignUp';
import CartCheckout from './Cart & Checkout Component';
import SideNavbar from './NavbarComponent/SideNavbar';
import SingleCategories from './ProductComponent/ProductComponent/SingleCategories';
import ClientProfile from './LoginComponent/ClientProfile';
import MyOrders from './LoginComponent/MyOrders';
import MyTrack from './LoginComponent/MyTrack';
import Contact from './ContactComponent/Contact';
import About from './AboutComponent/About';

const Main = () => {
  return (
    <>
      <div className='__body'>
        <Header />
        <div className='d-lg-none d-block merged__header_mob'>
          <SideNavbar />
        </div>

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login/' element={<Login />} />
          <Route exact path='/signup/' element={<SignUp />} />
          <Route exact path='/product/all/' element={<AllProduct />} />
          <Route exact path='/product/all/:id' element={<AllProduct />} />
          <Route exact path='/product/detail/:id' element={<SingleProductDetail />} />
          <Route exact path='/cart/' element={<CartCheckout />} />
          <Route exact path='/categories/product/:id' element={<SingleCategories />} />
          <Route exact path='/client/profile/' element={<ClientProfile />} />
          <Route exact path='/client/orders/' element={<MyOrders />} />
          <Route exact path='/client/track/' element={<MyTrack />} />
          <Route exact path='/contact/' element={ <Contact /> } />
          <Route exact path='/aboutus/' element={ <About /> }/> 
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default Main;