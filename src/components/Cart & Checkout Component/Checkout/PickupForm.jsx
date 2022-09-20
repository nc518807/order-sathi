import React from 'react'
import { connect } from 'react-redux';
import TimePicker from 'react-time-picker';

const PickupForm = (props) => {

  const [timePicker, setTimePicker] = React.useState('10:00');

  return (
    <form className='pickup__form'>
      <div className='form-group'>
        <input type="text" className='form-control' placeholder='Receiver Name' />
      </div>

      <div className='form-group'>
        <input type="text" className='form-control' placeholder='Receiver Contact Number' />
      </div>

      <div className='form-group'>
        {/* <input type="time" id='pickTime' className='form-control timepicker' autoComplete='off' 
         name="time" /> */}
         <TimePicker  onChange={setTimePicker} value={timePicker} />
      </div>

      <div className='form-group'>
        <input type="text" className='form-control' placeholder='Receiver Email' />
      </div>
      
      <button className='btn btn-primary'>Continue</button>

    </form>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(PickupForm)