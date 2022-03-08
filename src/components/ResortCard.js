import React from 'react';
import { Link } from 'react-router-dom';

const ResortCard = ({id, title, price, type, desc}) => {
  return (
    <div className="card">

      
        <div className="card-img">
          <Link to = {`/resorts/${id}`}>
            <img src="https://images6.alphacoders.com/312/thumb-1920-312773.jpg" alt="" />
          </Link>
        </div>
      

      <div className="card-body">
        <div className='card-body-header'>
          <span className="tag tag-pink country">{type}</span>
          <span className='price'>${price}</span>
        </div>
        
        <h4>
          {title}
        </h4>

        <p>
        {desc}
        </p>
      </div>

    </div>  
  )
}

export default ResortCard