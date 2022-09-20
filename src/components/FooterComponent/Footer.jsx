import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.jpg';
import eSewa from '../../assets/images/esewa_logo.png';
import fonePay from '../../assets/images/fonepay-logo-C9B7151FD6-seeklogo.com.png';
import IME from '../../assets/images/ime-red.png';
import Khalti from '../../assets/images/khalti-logo-F0B049E67E-seeklogo.com.png'

class Footer extends Component {
  render() {
    return (
      <>
        <div className='cover-footer'>
          <footer className='footer container'>
            <div className='row'>
              <div className='col-md-2 d-none d-lg-block'>
                <div className='footer-logo'>
                  <img src={Logo} alt="Logo" width="100px" />
                </div>
              </div>
              <div className='col-md-3'>
                <div className='quick-links'>
                  <h5>Contact</h5>
                  <div className='mid_head'>
                    <ul>
                      <li><Link to="#">Home</Link></li>
                      <li><Link to="#">About</Link></li>
                      <li><Link to={'/contact/'}>Contact</Link></li>
                      <li><Link to="#">Track my Order</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-md-3'>
                <div className="quick-links">
                  <h5>Links</h5>
                  <div className="mid_head">
                    <ul>
                      <li><Link to="#">Privacy Policy</Link></li>
                      <li><Link to="#">Terms of use</Link></li>
                    </ul>

                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='powered-by footer-icon'>
                  <h5>Payment Options</h5>
                  <div className='row payment'>
                    <ul className='col-md-6 col-6'>
                      <li>
                        <img src={eSewa} alt="" />
                      </li>
                    </ul>
                    <ul className='col-md-6 col-6'>
                      <li>
                        <img src={fonePay} alt="" />
                      </li>
                    </ul>
                    <ul className='col-md-6 col-6'>
                      <li>
                        <img src={Khalti} alt="" />
                      </li>
                    </ul>
                    <ul className='col-md-6 col-6'>
                      <li>
                        <img src={IME} alt="" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
        <section className="footer_bottom">
          <div className='row'>
            <div className='col-md-9 col-12'>
              <div className='copyright'>
                <span>© Ordersathi. © 2022. All Rights Reserved</span>
              </div>
            </div>
            <div className='col-md-3 d-flex justify-content-center'>
              <div className="footer_social-media">
                <ul>
                  <li>
                    <Link to="https://www.gmail.com"><i className="fas fa-envelope gmail"></i></Link>
                  </li>
                  <li>
                    <Link to="https://www.facebook.com/"><i className="fab fa-facebook-f facebook"></i></Link>
                  </li>
                  <li>
                    <Link to="https://www.instagram.com"><i className="fab fa-instagram instagram"></i></Link>
                  </li>
                  <li>
                    <Link to="https://twitter.com/"><i className="fab fa-twitter twitter"></i></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default Footer;