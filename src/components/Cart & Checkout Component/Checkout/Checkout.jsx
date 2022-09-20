import React from 'react';
import { Link } from 'react-router-dom';
import DeliveryPickup from './DeliveryPickup';

const Checkout = () => {

  const [isShow, setIsShow] = React.useState(true);

  return (
    <div className='col-lg-6 col-12 col-md-6 checkout__body'>
      <div className='checkout_title'>
        <h3>Checkout</h3>
      </div>
      {isShow ? (
        <>
          <div className='mb-4'>
            <span className='small check_instruct pb-1' style={{ color: "red" }} >
              Minimum cart requirement is Rs.10.0
            </span>
            <p className='small check_instruct mb-1'>Login to checkout or continue as a guest.
              The credentials will be used to send you the information of your orders.</p>
          </div>
          <div className='continue_to_place_order'>
            <div className='row'>
              <div className='col-md-6 col-lg-6 col-12'>
                <div className='login-form-btn'>
                  <Link to={"/login/"} >
                    <button className='btn btn-primary'>
                      Login To Checkout
                    </button>
                  </Link>
                </div>
              </div>
              <div className='col-lg-6 col-md-6 col-12'>
                <div className='continue-to-checkout'>
                  <button className='btn btn-primary' onClick={() => setIsShow(false)}>
                    Continue To Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) :
        <div className='deli__pick'>
          <DeliveryPickup />
        </div>
      }
    </div>

  )
}

export default Checkout;