import React from 'react';
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <main className='container'>
        <div className='account-signup'>
          <div className='sign-up-container'>
            <form>
              <div className='signup-heading'>
                <h1>Create a New Account</h1>
                <p className='small'>
                  Create your account to easily place orders and keep track of them.
                </p>
              </div>
              <div className='form-field'>
                <div className="form-group">
                  <label htmlFor="">Full Name</label>
                  <div className='row'>
                    <div className='col-md-6 form-name'>
                      <input type="text" className='form-control' placeholder='Enter your first name' maxLength={30} />
                    </div>
                    <div className='col-md-6 form-name'>
                      <input type="text" className='form-control' placeholder='Enter your last name' />
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <label htmlFor="">Email Address</label>
                  <input type="email" className='form-control' placeholder='Email' />
                </div>
                <div className='form-group'>
                  <label htmlFor="">Phone Number</label>
                  <input type="number" className='form-control' placeholder='Enter your phone number' />
                </div>
                <div className='form-group'>
                  <label htmlFor="">Password</label>
                  <input type="password" className='form-control' placeholder='Password' />
                </div>
                <div className='form-group'>
                  <label htmlFor="">Confirm Password</label>
                  <input type="password" className='form-control' placeholder='Password (Again)' />
                </div>
                <div className='signupfrm-btn-section'>
                  <button type="submit" className="btn-login btn btn-primary">Create Account</button>
                </div>
              </div>
            </form>
            <div className='have-account small d-flex justify-content-center'>
              <p>Have Account?</p> &nbsp;
              <Link to={"/login/"}>Sign in</Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default SignUp;