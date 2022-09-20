import React from 'react';
import FilterProfile from '../FilterProfile';
import Orders from './Orders';

const MyOrders = () => {
  return (
    <section className='user__detail container'>
      <div className='d-flex'>
        <div className='user__detail-list d-none d-lg-block'>
          <FilterProfile />
        </div>
        <div className='user__detail-status'>
          <Orders />
        </div>
      </div>
    </section>
  )
}

export default MyOrders;