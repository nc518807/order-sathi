import React from 'react'
import { connect } from 'react-redux'

export const Profile = (props) => {

  const [ activeTab, setActiveTab ] = React.useState(true);

  const EditProfile = () => {
    setActiveTab(!activeTab)
  }

  const OpenProfile = () => {
    setActiveTab(!activeTab)
  }

  const handleChange = (e) => {
    // let { name, value } = e.target.value;

  }

  return (
    <>
      <h4>My Account</h4>
      {activeTab ? (
        <div className='user__detail-info display-profile'>
        <div className='user-info-form'>
          <p className='user-info-title'>Name</p>
          <p className='user-info-text'>Subharaj Narayan Chaudhary</p>
        </div>
        <div className='user-info-form'>
          <p className='user-info-title'>Email</p>
          <p className='user-info-text'>subharaj@smarttech.com.np</p>
        </div>
        <div className='user-info-form'>
          <p className='user-info-title'>Phone</p>
          <p className='user-info-text'>9861639757</p>
        </div>
        <div className='user-info-form'>
          <p className='user-info-title'>Password</p>
          <p className='user-info-text password-change'>********</p>
        </div>
        <div className='user-info-form'>
          <button className='btn btn-primary' onClick={EditProfile}>Edit</button>
        </div>
      </div>
        ) : 
      <div className='user__detail-info edit-form'>
        <form id='update-user' className='profile-form needs-validation'>
          <div className='form-group'>
            <label htmlFor="name" className='user-info-form'>Name</label>
            <input type="text"  className='form-control' placeholder='Enter FullName' 
            name='name' 
            onChange={handleChange} />
          </div>
          <div className='form-group'>
            <label htmlFor="email" className='user-info-form'>Email</label>
            <input type="email"  className='form-control' placeholder='Enter Email Address' 
            name='email' onChange={handleChange} />
          </div>
          <div className='form-group'>
            <label htmlFor="phone" className='user-info-form'>Phone</label>
            <input type="number"  className='form-control' placeholder='Enter Phone Number' 
            name='phone' onChange={handleChange} />
          </div>
          <div className='form-group'>
            <label htmlFor="password" className='user-info-form'>Password</label>
            <input type="password"  className='form-control mb-2' placeholder='Enter Password' 
            name='password' onChange={handleChange} />
            <input type="password"  className='form-control' placeholder='Re-enter New Password' 
            name='password2' onChange={handleChange} />
          </div>

          <div className='user-info-form'>
          <button className='btn btn-primary mr-2'>Save</button>
          <button type='button' className='btn btn-primary' onClick={OpenProfile}>Cancel</button>
        </div>
        </form>
      </div>
      }
    </>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)