import React from 'react';
import FilterProfile from '../FilterProfile';

const MyTrack = () => {
  return (
    <section className='user__detail container'>
      <div className='d-flex'>
        <div className='user__detail-list d-none d-lg-block'>
          <FilterProfile />
        </div>
        <div className='user__detail-status tracking-status'>
          <h4>Track Order</h4>
          <form  className='track-my-order-form'>
            <div className='form-group'>
              <input type="text" className='form-control'
                placeholder='Order Number' name='order_number'
              />
            </div>
            <button className='btn btn-primary track-button'>Track</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default MyTrack;