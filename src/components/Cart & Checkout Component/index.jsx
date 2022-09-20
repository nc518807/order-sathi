import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Cart from './Cart';
// import cloth from '../../assets/images/cloth.jpg';
import Checkout from './Checkout/Checkout';

const CartCheckout = () => {
  return (
    <>
      <div className='container cart-checkout'>
        <div className='cart-breadcumb mt-2'>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to={'/'}>
                Home
              </Link>
            </BreadcrumbItem>
            <span>
              &nbsp;&nbsp;
              <i className='fa fa-angle-right'></i>
            </span>&nbsp;
            <BreadcrumbItem>
              Cart
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className='cart_body_part'>
          <div className='row'>
            <Cart />
            <Checkout />
          </div>
        </div>
      </div>
    </>
  )
}

export default CartCheckout;