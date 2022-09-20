import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Breadcrumb, BreadcrumbItem, Modal, ModalBody,
  Nav, NavItem, NavLink, TabContent, TabPane
} from 'reactstrap';
import { connect } from 'react-redux'
import { getSingleProduct, postCart } from '../../Redux/ActionNames/ActionCreator';
import classnames from 'classnames';
// import hero_image from '../../../assets/images/user-1.jpg';

const SingleProductDetail = () => {

  const [color, setColor] = React.useState();

  // Modal open state
  const [modal, setModal] = React.useState(false);

  // Toggle for Modal
  const toggle = () => setModal(!modal);

  //ToggleClose Modal
  const toggleClose = () => setModal(false)

  //Active_Tab
  const [activeTab, setActiveTab] = React.useState("1");

  //SUCCESSFULLY ADD TO CART
  // const [ cart, setCart ] = React.useState(false)

  const toggleTab = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  const dispatch = useDispatch();
  const navigate = useNavigate()

  let { id } = useParams();

  const { product } = useSelector((state) => state.products)
  const { image, name, description, highlights, delivery_information } = product;


  const [ counter, setCounter ] = React.useState(1);

  const increment = () => setCounter(counter + 1);
  let decrement = () => setCounter(counter - 1);

  if(counter === 1 ){
    decrement = () => setCounter(1)
  }

  React.useEffect(() => {
    dispatch(getSingleProduct(id))
  }, [dispatch,id]);


  const handleAddToCart = () => {
    dispatch(postCart(product.product[0]["id"],counter,navigate))
    // setTimeout(() => {
    //   setCart(!cart)
    // }, 1000)
    console.log(product.id, "ADD To CART");
    // toast.success(' Wow so easy!', {
    //   position: "top-center",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   });
  }

  const RenderPrice = () =>
    <>
      {product.product && product.product.map((item, index) => {
        if (index !== 0) return null;
        return (
          <span className="price-new" key={index}>
            <span className="currency" id="new_price">Rs.{item.price}</span>
            <span className="old-price" id="old_price">Rs. {item.old_price}</span>
            <span className="offer" id="discount">(25% OFF)</span>
          </span>
        )
      })}
    </>

  return (
    <>
      <div className='container productSingleDetails'>
        <div className='breadcrum'>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/" >Home</Link>
              <span> &nbsp;
                <i className="fa fa-angle-right" aria-hidden="true">
                </i>
              </span>&nbsp;
            </BreadcrumbItem>
            <BreadcrumbItem>{name}</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className='product-single-detail'>
          <div className='row'>
            <div className='col-lg-6 col-12 col-md-6 product-slider'>
              <div className='big-slider'>
                <div className='products-slides'>
                  <img src={image} alt="" />
                </div>
              </div>
              <div className='small-slider'>

              </div>
            </div>
            <div className='col-lg-6 col-12 col-md-6 product-details'>
              <div className='detail-head d-flex justify-content-between'>
                <div className='product-title'>
                  <div className='product-title-head'>
                    <h3>{name}</h3>
                    <div className="horizontal">
                      <hr />
                    </div>
                  </div>

                  <div>
                    <RenderPrice />
                  </div>

                  <p className="pdp-selling-price">
                    <span className="vat-info">Inclusive of all taxes</span>
                  </p>
                </div>

                <div className='social-icon'>
                  <div className='cart_heart'>
                    <form action="">  {/* form */}
                      <span className="cart-heart-span">
                        <i className="fas fa-heart"></i>
                      </span>
                    </form>
                  </div>
                </div>
              </div>
              <div className='detail_in_stock'>
                <h6>Availability :</h6>
                <p>In Stock</p>
              </div>
              <div className='product_select_color'>
                <h6>Select Color :</h6>
                <select id="select_color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}>
                  <option value="Red">Red</option>
                  <option value="Black">Black</option>
                  <option value="Blue">Blue</option>
                </select>
              </div>

              <form action="" id='add_to_cart'>
                <div className='quantity_button'>
                  <div className='Qty_selector text-center'>
                    <i className='fa fa-minus decrease_Qty' onClick={decrement}></i>
                      <input type="text" className='qty_value' name='quantity' placeholder={counter} />
                    <i className='fa fa-plus indrease_Qty' onClick={increment}></i>
                  </div>
                  <div className='product_add_btn'>
                    <button type='button' className='btn btn-primary' onClick={handleAddToCart}>
                      <span>
                        <i className='fa fa-shopping-bag'></i>
                      </span>Add to Cart
                    </button>
                  </div>
                </div>
              </form>

              <div className='more_info'>
                <Link className='' to="" onClick={toggle}>More Information
                  <span className='more-info-sign'>
                    <i className='material-icons'>info</i>
                  </span>
                </Link>
                <Modal isOpen={modal} className="single_prod_modal"
                  toggle={toggle}>
                  <div className='modal-header'>
                    <h5 className='modal-title'>More Information of the Product</h5>
                    <button onClick={toggleClose} className="close" >×</button>
                  </div>
                  <ModalBody className='single_product_body'>
                    <Nav className='mb-3'>
                      <NavItem>
                        <NavLink
                          className={classnames({ active: activeTab === "1" })}
                          onClick={() => {
                            toggleTab("1")
                          }}
                        >
                          HIGHLIGHTS
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({ active: activeTab === "2" })}
                          onClick={() => {
                            toggleTab("2")
                          }}
                        >
                          DESCRIPTION
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink className={classnames({ active: activeTab === "3" })}
                          onClick={() => {
                            toggleTab("3")
                          }}
                        >
                          DELIVERY INFORMATION
                        </NavLink>
                      </NavItem>
                    </Nav>

                    <TabContent activeTab={activeTab}>
                      <TabPane tabId="1">
                        <span>{description}</span>
                      </TabPane>
                      <TabPane tabId="2">
                        <span>{highlights}</span>
                      </TabPane>
                      <TabPane tabId="3">
                        <span>{delivery_information}</span>
                      </TabPane>
                    </TabContent>
                  </ModalBody>
                </Modal>

                {/* FOR ADD TO CART MODAL */}
                {/* <Modal isOpen={cart}>
                  <ModalBody className='text-center'>Product has been added successfully</ModalBody>
                </Modal> */}

              </div>
              <div className='category-description'>
                <ul>
                  {product.category && product.category.map((cat,index) => {
                    return (
                      <li key={index}>
                        Category : {cat.name}
                      </li>
                    )
                  })}
                  {product.product && product.product.map((item, index) => {
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
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProductDetail)