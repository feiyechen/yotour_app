import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>

      <div className='footer-top'>
        <div>
          YoTour is a hotel information sharing website. You can find your favourite place to stay here for your great trip.
        </div>
        <div>
          <ul>
            <li>About Us</li>
            <li>Policy</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Collaboration</li>
            <li>Sponser</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      <hr />

      <div className='footer-bottom'>
        <div className='footer-bottom-left'>2022 YoTour, Inc.</div>
        <div className='footer-bottom-right'>social medias</div>
      </div>
      
    </div>
  )
}

export default Footer