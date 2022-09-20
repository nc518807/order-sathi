import React from 'react'

const About = () => {
  return (
    <div className='privacy-page-main-about container'>
      <h1 className='text-center border-0 text-white aboutus_headerText'>
        About Us
      </h1>
      <div className='aboutus_page_base'>
        <div className='privacy-page-content text-center'>
          <div className='mx-auto mb-2 pt-5'>
            <h2 className='aboutus_whoWeAre'>Who We Are</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Commodi dolorum nostrum dolores iste minima aspernatur quod quae 
              magnam accusantium! Nemo excepturi pariatur maiores odio explicabo, 
              omnis unde aliquam illo laborum?</p>
          </div>
          <div className='aboutus_highlightBase row col-11 col-md-12 mx-auto my-5'>
            <div className='col-12 col-md-4 col-lg-4'>
              <h2>HONESTY</h2>
              <i className='far fa-handshake fa-4x aboutus_highlightIcon'></i>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Omnis reiciendis eligendi expedita commodi ex quod et possimus, blanditiis deserunt ea.
                 Odit dignissimos fugiat laudantium mollitia repellendus in doloremque eius voluptate.</p>
            </div>
            <div className='col-12 col-md-4 col-lg-4'>
              <h2>PASSION</h2>
              <i className='far fa-heart fa-4x aboutus_highlightIcon'></i>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Veritatis iste laboriosam facere dignissimos neque dicta quisquam ipsam nulla, 
                aliquam dolorem! Quo dicta harum corrupti maxime ad facere doloremque assumenda vitae.</p>
            </div>
            <div className='col-12 col-md-4 col-lg-4'>
              <h2>USER-CENTRIC</h2>
              <i className='far fa-user fa-4x aboutus_highlightIcon'></i>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Expedita sunt iusto modi nemo commodi aspernatur! Dolorum nam 
                odio asperiores voluptatum consequatur ducimus et enim tenetur! 
                Dolor pariatur modi numquam iure!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About