import React from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { useDispatch } from 'react-redux';
import './SingleModal.css';
import { postCart } from '../../Redux/ActionNames/ActionCreator';

const SingleModal = (props) => {

  const [ counter, setCounter] = React.useState(1);
  const dispatch = useDispatch();

  const increment = () => setCounter( counter + 1 );
  let decrement = () => setCounter( counter - 1 );

  if(counter === 1){
    decrement = () => setCounter(1)
  }

  const [isProduct, setIsProduct] = React.useState(props);

  React.useEffect(() => {
    if (props.prod) {
      setIsProduct(props.prod)
    }
  })

  const handleSubmit = (product) => {
    dispatch(postCart(product,counter));
  }

  return (
    <>
      <Modal
        isOpen={props.isOpen}
        toggle={props.toggle}
        className="singleProduct_modal">
        <ModalHeader>
          Quick View
          <button onClick={props.toggleclose} className="close" >×</button>
        </ModalHeader>

        <ModalBody>
          <div className='row'>
            <div className='col-md-6 col-lg-6 col-12 product__slider'>
              <img src={isProduct.image} alt={isProduct.name} />
            </div>
            <div className='col-md-6 col-lg-6 col-12 product-details'>
              <div className="detail-head d-flex justify-content-between">
                <div className="product-title">
                  <div className="product-title-head">
                    <h3>{isProduct.name}</h3>
                    <div className="horizontal">
                      <hr />
                    </div>
                  </div>
                  <div>
                    <span className="price-new" >
                      <span className="currency" id="new_price">Rs.1500</span>
                      <span className="old-price" id="old_price">Rs. 2000</span>
                      <span className="offer" id="discount">(25% OFF)</span>
                    </span>
                  </div>
                  <p className="pdp-selling-price">
                    <span className="vat-info">Inclusive of all taxes</span>
                  </p>
                </div>
                <div className="social-icon">
                  <div className="cart_heart">
                    <form action="">
                      <span className="cart-heart-span">
                        <i className="fas fa-heart"></i>
                      </span>
                    </form>
                  </div>
                </div>
              </div>
              <div className="detail_in_stock">
                <h6>Availability :</h6>
                <p>In Stock</p>
              </div>
              <div className="product_select_color">
                <h6>Select Color :</h6>
                <select id="select_color">
                  <option value="Red">Red</option>
                  <option value="Black">Black</option>
                  <option value="Blue">Blue</option>
                </select>
              </div>
              <form action="" id="add_to_cart">
                <div className="quantity_button">
                  <div className="Qty_selector text-center">
                    <i className="fa fa-minus decrease_Qty" onClick={decrement}></i>
                    <input type="text" className="qty_value" name="quantity" placeholder={counter}/>
                    <i className="fa fa-plus indrease_Qty" onClick={increment}></i>
                  </div>
                  <div className="product_add_btn">
                    <button type="button" className="btn btn-primary" onClick={()=>handleSubmit(isProduct.product[0]["id"])}>
                      <span>
                        <i className="fa fa-shopping-bag"></i>
                      </span>Add to Cart
                    </button>
                  </div>
                </div>
              </form>
              <div className='category-description'>
                <ul>
                  {isProduct.category && isProduct.category.map((cat,index) => {
                    return (
                      <li key={index}>
                        Category : {cat.name}
                      </li>
                    )
                  })}
                  {isProduct.product && isProduct.product.map((item, index) => {
                    if (index !== 0) return null;
                    return (
                      <li key={index}>
                        SKU : &nbsp;
                        <span id='p-sku'>{item.slug}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  )
}

export default SingleModal;