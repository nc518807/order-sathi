import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { postMessage } from '../Redux/ActionNames/ActionCreator';

const SendMassage = (props) => {

  const [ initialState, setInitialState ] = React.useState({
    first_name: "",
    last_name: "",
    contact_number: "",
    message: ""
  });

  const { first_name, last_name, contact_number, message } = initialState;

  // const [ error, setError ] = React.useState("")

  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setInitialState({ ...initialState, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!first_name || !last_name || !contact_number || !message) {
      // setError("please fill out this field")
    }
    else{
      dispatch(postMessage(initialState))
    }
  }

  return (
    <>
      <form>
        <div className='form-group'>
          <label htmlFor="fullname">FullName:</label>
          <div className='row'>
            <div className='col-md-6'>
              <input type="text" className='form-control' name='first_name'
                id='first_name'
                placeholder='First Name'
                value={first_name || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className='col-md-6'>
              <input type="text" className='form-control' name='last_name'
                id='last_name'
                placeholder='Last Name'
                value={last_name || ""}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className='form-group'>
          <label htmlFor="contact_number">Contact_number Number</label>
          <input type="text" name='contact_number' className='form-control'
            placeholder='Phone Number'
            id='contact_number'
            value={contact_number || ""}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="" rows="4"
            value={message || ""}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div className='send-message'>
          <button type='button' className='btn btn-primary'
            onClick={handleSubmit}
          >Send Message</button>
        </div>
      </form>
    </>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SendMassage)