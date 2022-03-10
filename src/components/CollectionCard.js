import React from 'react';
import { Link } from 'react-router-dom';

const CollectionCard = ({ title }) => {
  return (
    
    <div className="card">

        <Link to = {`/resorts/type/${title}`}>
            <div className="card-img">
                <img src="https://images6.alphacoders.com/312/thumb-1920-312773.jpg" alt="" />
            </div>
        

            <div className="card-body">
                
                <h1>
                    {title}
                </h1>

            </div>
        </Link>
    </div>
    
  )
}

export default CollectionCard