import React, { useState, useEffect } from 'react';
import ResortCard from './ResortCard';

const FeaturedResortsList = () => {

  const [resorts, setResorts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/resorts")
    .then(response => response.json())
    .then(json => {
      setResorts(json)
    }).catch(err => {
      console.log(`Error ${err}`)
    })
  }, [])

  return (
    <section className='featured-resorts-section'>

      <h1>Featured Resorts</h1>

      <div className='featured-resorts'>
        
        {resorts.filter(item => item.featured === true).map(item => (
          <ResortCard 
            key={item.id}
            id={item.id} 
            title={item.title}
            price={item.price}
            type={item.type}
            desc={item.desc[0]}
            img={item.img}/>
        ))}

      </div>
      
    </section>
  )
}

export default FeaturedResortsList