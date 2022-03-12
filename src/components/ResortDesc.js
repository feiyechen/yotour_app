import React from 'react';

const ResortDesc = ({ title, type, desc, price, rule, amenities, location, img }) => {

  return (
    <section className='resort-desc'>

        <div className='desc-header'>
            <h2>{title}</h2>
            <div>
              <span className="list-card-tag tag-pink">{type}</span>
              <p>{location.street}, {location.state}, {location.country}, {location.postalCode}</p>
            </div>
        </div>

        <div className='desc-img'>
            <div className='desc-main-img'>
              <img 
                className='img1' 
                src={img[0]} alt="" />
            </div>

            <div className='desc-s-imgs'>
              <img 
                className='img2' 
                src={img[1]} alt="" />
              <img 
                className='img3' 
                src={img[2]} alt="" />
              <img 
                className='img4' 
                src={img[3]} alt="" />
              <img 
                className='img5' 
                src={img[4]} alt="" />
            </div>
        </div>

        <div className='desc-body'>
            <section className='desc-detial'>
              <h2>Description</h2>
              {desc.map(item => (<p>{item}</p>))}

              <h2>Rules</h2>
              <ul>{rule.map(item => (<li>{item}</li>))}</ul>

              <h2>Amenities</h2>
              <ul>{amenities.map(item => (<li>{item}</li>))}</ul>
            </section>
            <div className='booking-card'>
              <h2>${price}</h2>  
            </div>
        </div>

        <div className='desc-review'>
        </div>

    </section>
  )
}

export default ResortDesc