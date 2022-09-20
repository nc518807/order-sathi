import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import cloth from '../../assets/images/cloth.jpg';
import { deleteCart, getAllCart } from '../Redux/ActionNames/ActionCreator';

const Cart = () => {

  const [counter, setCounter] = React.useState("1");
  // const [ total, setTotal ] = React.useState()

  const dispatch = useDispatch();

  const { carts } = useSelector((state) => state.carts);


  React.useEffect(() => {
    dispatch(getAllCart())
  }, [])

  const handleDelete = (id) => {
    dispatch(deleteCart(id))
    console.log(id, 'cart deleted successfully');
  }

  const increment = () => setCounter(counter + 1)
  let decrement = () => setCounter(counter - 1)



  if (counter === 1) {
    decrement = () => setCounter("1")
  }


  // const subTotal = (total) => {
  //   var subtotal_ = []
  //   subtotal_ += total
  //   console.log(subtotal_, "8888888888888888888888888")
  // }


  const RenderCart = () =>
    <>
      {carts && carts.map((item) => {

        return (
          <li key={item.id}>
            <div className='product-row' key={item.product.id}>
              <div className='product__image'>
                <img src={cloth} alt="cloth" />
              </div>
              <div className='product_cart_attribute'>
                <div className='product_cart_name'>
                  <h1>{item.product.varient_name}</h1>
                  <p className='product_price'>{(item.product.price * item.quantity)}</p>
                </div>
              </div>
              <div className='cart-manager'>
                <form action="" id='qty_manage'>
                  <div className='quantity_plus_minus'>
                    <div className='Qty_selector text-center'>
                      <i className='fa fa-minus decrease_Qty' name='decrement' onClick={decrement}></i>
                      {/* <input type="text" className='qty_value' name='quantity' placeholder={(item.quantity + counter)} /> */}
                      <input type="text" className='qty_value' name='quantity' placeholder={item.quantity} />
                      <i className='fa fa-plus increase_Qty' name='increment' onClick={increment}></i>
                    </div>
                  </div>
                </form>
              </div>
              <div className='close-cart' onClick={(e) => handleDelete(item.product.id)}>
                <span>
                  <i className='fa fa-times-circle'></i>
                </span>
              </div>
            </div>
          </li>
        )
      })}
    </>
  return (
    <div className='col-lg-6 col-12 col-md-6 cart__body'>
      <div className='cart_title'>
        <h3>Shopping Cart</h3>
      </div>
      <div className='cart__summary_item'>
        <ul className='cart__summary_list'>
          {carts.length === 0 ? (
            <div className='cart__summary__ d-flex'>
              <h6>Your Cart is empty.
                <span>
                  <Link to={"/"}>Continue Shopping</Link>
                </span>
              </h6>
            </div>
          ) : (
            <RenderCart />
          )
          }



          {/* { empty ? (
            <RenderCart />
          ): 
          <div className='cart__summary__ d-flex'>
            <h6>Your Cart is empty.

            <span>
              <Link to={"/"}>Continue Shopping</Link>
            </span>
            </h6>
          </div>
          } */}

        </ul>
      </div>
      <div className='promo_code mt-4'>
        <form className='d-flex'>
          <div className='form-group d-flex'>
            <label htmlFor="" className='mr-3 mt-1'>Promo Code</label>
            <input type="text" className='form-control' placeholder='Enter Code' />
          </div>
          <div className='promo_btn'>
            <button className='btn btn-primary'>Apply</button>
          </div>
        </form>
      </div>
      {carts && carts.map((item, index) => {
        if (index !== 0) return null
        const subtotal = carts.reduce((total, item) => total + (item.product.price * item.quantity), 0)
        const deliveryChrg = 20;
        const total = subtotal + deliveryChrg;

        return (
          <dl className='cart__summary__amount' key={index}>
            <dt className='cart__summary_subtotal'>
              Subtotal
            </dt>
            <dd className='cart__summary_price'>
              Rs. {subtotal}
            </dd>
            <dt className='cart__summary_delivery'>
              Delivery Charge
            </dt>
            <dd className='cart__summary_delivery_payable'>
              Rs. {deliveryChrg}
            </dd>
            <dt className='cart__summary_total'>
              Total Amount
            </dt>
            <dd className='cart__summary_payable'>
              Rs. {total}
            </dd>
          </dl>)
      })}
    </div>
  )
}

export default Cart;