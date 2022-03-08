import React from 'react';
import { Link } from 'react-router-dom';

const ListingCard = ({id, title, price, type, desc}) => {
  return (
    <div className='list-card'>

        
          <div className='list-card-img'>
            <Link to = {`/resorts/${id}`}>
              <img src="https://images6.alphacoders.com/312/thumb-1920-312773.jpg" alt="" />
            </Link>
          </div>
        

        <div className='list-card-info'>
          <h2>{title}</h2>
          <div><span className="list-card-tag tag-pink">{type}</span></div>
          <p>{desc}</p>
        </div>

        <div className='list-card-price'>
          <h2>${price}</h2>
        </div>
    
    </div>
  )
}

export default ListingCard