import React from 'react';
import { Link } from 'react-router-dom';

const ListingCard = ({id, title, price, type, desc, img, location, featured}) => {
  return (
    <div className='list-card'>

        
          <div className='list-card-img'>
            <Link to = {`/resorts/${id}`}>
              <img src={img[0]} alt="" />
            </Link>
          </div>
        

        <div className='list-card-info'>
          <h2>{title}</h2>
  
          <div>
            <span className="list-card-tag tag-gold">{type}</span>
            {featured ? (
              <span className="list-card-tag tag-best-seller">Best Seller</span>
            ) : (<></>)}
          </div>

          <p className='location'>{location.street}, {location.state}, {location.country}, {location.postalCode}</p>
          <p className='desc'>{desc}</p>
        </div>

        <div className='list-card-price'>
          <h2>${price}</h2>
        </div>
    
    </div>
  )
}

export default ListingCard