import React from 'react';
import { connect } from 'react-redux';
import { Nav, NavItem, NavLink } from 'reactstrap';
import pickup from '../../../assets/images/ready-stock.png';
import classnames from 'classnames';
import { TabContent, TabPane } from 'reactstrap';
import DeliveryForm from './DeliveryForm';
import PickupForm from './PickupForm';

const DeliveryPickup = (props) => {

  const [activeTab, setActiveTab] = React.useState("1");

  const toggleTab = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div className='shopping-delivery-section'>
      <div className='checkout__type'>
        <div className='checkout_title'>
          <h3>Shipping & Delivery</h3>
          <p className='small'>
            Select how you would like to receive your order:
          </p>
        </div>
        <div className='chekcout__form'>
          {/* <form> */}
          <div className='row delivery__pick'>
            <div className='col-lg-6 col-md-6 col-12 mb-2'>
              <Nav className='delivery'>
                <NavItem>
                  <NavLink className={classnames({ active: activeTab === "1" })}
                    onClick={() => {
                      toggleTab("1")
                    }}
                  >
                    <div className='delivery_img'>
                      <span className='delivery_span'>
                        Delivery
                      </span>
                    </div>
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
            <div className='col-lg-6 col-md-6 col-12'>
              <Nav className='pickup'>
                <NavItem>
                  <NavLink className={classnames({ active: activeTab === "2" })}
                    onClick={() => {
                      toggleTab("2")
                    }}
                  >
                    <div className='pickup_img'>
                      <img src={pickup} alt="pickup" /><br />
                      <span className='pickup_span'>
                        Pick Up
                      </span>
                    </div>
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </div>
          {/* </form> */}
        </div>

        <div className='mt-1 delt_pick'>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <DeliveryForm />
            </TabPane>
            <TabPane tabId="2">
              <PickupForm />
            </TabPane>
          </TabContent>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryPickup)