import React from 'react';
import { Link } from 'react-router-dom';
import resorts from '../assets/img/resorts.jpg';

const CollectionCard = ({ title }) => {
  return (
    
    <div className="card">

        <Link to = {`/resorts/type/${title}`}>
            <div className="card-img">
                <img src={resorts} alt="" />
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