import React from 'react'
import OrderDetails from './OrderDetails'

const Orders = () => {
  return (
    <>
      <div className='Orders-status'>
        <div className='orders-status-left'>
          <h4>My Orders</h4>
        </div>
        <div className='Orders-status-right'>
          <div className='sort-by-my-orders'>
            <form >
              <div className='form-group'>
                <span>
                  <label htmlFor="sort-by">Sort by:</label>
                </span>
                <select name="sort-order" id="sort-by" className='sort-by'>
                  <option >Date</option>
                  <option >Price</option>
                </select>
              </div>
            </form>
          </div>
          <div className='search-bar'>
            <form>
              <div className='input-group md-form form-sm form-1 pl-0'>
                <div className='input-group-prepared'>
                  <span id='basic-text1' className='input-group-text purple lighten-3'>
                    <i className='fas fa-search'></i>
                  </span>
                </div>
                <input type="text" className='form-control my-0 py-1' placeholder='(order number)' name='search_keyword' />
              </div>
            </form>
          </div>
        </div>
      </div>
      <OrderDetails />
    </>
  )
}

export default Orders