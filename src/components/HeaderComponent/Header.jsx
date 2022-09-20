import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.jpg';
import OrderSathiNavbar from '../NavbarComponent/Navbar';
import SideNavbar from '../NavbarComponent/SideNavbar';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCart } from '../Redux/ActionNames/ActionCreator';

const Header = (props) => {

  const [menuCollapse, setMenuCollapse] = React.useState(true);

  const togglemenu = () => {
    setMenuCollapse(!menuCollapse)
  }
  const { carts } = useSelector((state) => state.carts)

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAllCart())
  }, [])

  const qty = carts && carts.length ? carts.reduce((qty1, item) => qty1 + (item.quantity), 0) : 0;

  return (
    <>
      <div className='merged-header'>
        <div className='order_sathi_header d-flex'>
          <div className='hamburger-menu d-lg-none d-block'>
            <label className='m-menu__toggle' onClick={() => setMenuCollapse(!menuCollapse)}>
              <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#333333" strokeWidth="2" strokeLinecap="butt" strokeLinejoin="arcs">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </label>
          </div>

          <SideNavbar isOpen={!menuCollapse} togglemenu={togglemenu} />


          <div className='main-header container'>
            <div className='header-logo'>
              <a href="/">
                <img src={logo} alt="" width="80px" />
              </a>
            </div>
            <div className="desktop-action d-none d-lg-block">
              <ul>
                <li className="action-links">
                  <div className="search">
                    <div className="input-group pl-0">
                      <div className="input-group-prepend">
                        <span className="input-group-text purple lighten-3" id="basic-text1"><i className="fas fa-search"
                          aria-hidden="true"></i></span>
                      </div>
                      <input className="form-control" type="text" placeholder="Search for products, brands..." aria-label="Search" />
                    </div>
                  </div>
                </li>
                  

                  <li className="action-links">
                    <Link to={"/cart/"}>
                      <span>
                        <i className="material-icons">shopping_cart
                        </i>
                      </span>
                      <span className="badge badge-warning">{qty}</span>
                    </Link>
                  </li>
                

                {/* <li className="action-links d-none">
                  <a href="wishlist.html">
                    <span><i className="material-icons">favorite</i></span>
                    <span className="badge badge-warning">1</span>
                  </a>
                </li> */}
                <li className="action-links d-sm-block">
                  <Link to="/login/">
                    <span>
                      <i className="material-icons">login
                      </i>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <ul className='mob d-lg-none d-block'>
              <li className="action-links">
                <Link to="/login">
                  <span>
                    <i className="material-icons">login
                    </i>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='container navbar__header d-none d-lg-block'>
          <OrderSathiNavbar navbar />
        </div>
      </div>

    </>
  )
}

export default Header;