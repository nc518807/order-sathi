import React from 'react';
import DatePicker from 'react-datepicker';
import { connect } from 'react-redux';

const DeliveryForm = (props) => {

  const [startDate, setStartDate] = React.useState(new Date(), "mm/dd/yy");

  return (
    <form className='delivery__form'>
      <div className='form-group'>
        <input type="text" className='form-control' placeholder='Receiver Name' />
      </div>

      <div className='form-group'>
        <input type="text" className='form-control' placeholder='Receiver Contact Number' />
      </div>

      <div className='form-group'>
        <select className="form-control" id="deli_district">
          <option>Select District</option>
          <option value="">Kathmandu</option>
          <option value="">Bhaktapur</option>
          <option value="">Lalitpur</option>
        </select>
      </div>

      <div className='form-group'>
        <select className="form-control" id="deli_city">
          <option>Select City</option>
          {/* <option value="">Kathmandu</option>
                    <option value="">Bhaktapur</option>
                    <option value="">Lalitpur</option> */}
        </select>
      </div>

      <div className='form-group'>
        <select className="form-control" id="deli_district">
          <option>Select Location</option>
          {/* <option value="">Kathmandu</option>
                    <option value="">Bhaktapur</option>
                    <option value="">Lalitpur</option> */}
        </select>
      </div>

      <div className='form-group'>
        <input type="text" className='form-control' placeholder='Receiver Address' />
      </div>

      <div className='form-group'>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        {/* <input type="date" id='datepicker' className='form-control' placeholder='Receiver Address' /> */}
      </div>

      <div className='form-group'>
        <input type="text" className='form-control' placeholder='Receiver Email' />
      </div>

      <div className='form-group'>
        <textarea className='form-control' id="comment" cols="30" rows="3" placeholder='Order Notes'></textarea>
      </div>

      <button className='btn btn-primary'>Continue</button>

    </form>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryForm)