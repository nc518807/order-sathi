import React from 'react';
import './contact.css';
import SendMassage from './SendMassage';

const Contact = () => {
  return (
    <>
      <section id='contact-details' className='container'>
        <div className='contact__us row'>
          <div className='google__map col-md-6 col-lg-6 col-12'>
            <div className='google__map_only'>
              <iframe title='SmartTech' width="100%" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=smartTech%20solution&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
            </div>
            <div className='address-details'>
              <table className='table'>
                <tbody>
                  <tr>
                    <th scope='row'>
                      Address
                    </th>
                    <td>Maiti Marga, Bakhundole
                      <br />
                      Lalitpur
                    </td>
                  </tr>
                  <tr>
                    <th scope='row'>Phone</th>
                    <td>9819319633</td>
                  </tr>
                  <tr>
                    <th scope='row'>Email</th>
                    <td>demoClothing@gmail.com</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className='message_form col-md-6 col-lg-6 col-12'>
            <h4>Send us a Message</h4>
            <SendMassage />
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact;