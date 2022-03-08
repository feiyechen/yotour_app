import React, { useState, useEffect } from 'react'
import CollectionCard from './CollectionCard'

const FeaturedCollection = () => {

  const [resorts, setResorts] = useState([]);

  useEffect(() => {
    fetch("https://yotour-server.herokuapp.com/resorts")
    .then(response => response.json())
    .then(json => {
      setResorts(json)
    }).catch(err => {
      console.log(`Error ${err}`)
    })
  }, [])

  /* get all types array */
  const allType = [];
  resorts.map(item => (allType.push(item.Type)));
  console.log(allType);

  /* get no-repeat types array */
  const collection = allType.filter(
    (ele, pos) => {
      return allType.indexOf(ele) == pos;
    }
  )
  console.log(collection);

  /* get the first 4 types */
  const featuredCollection = [];
  for(let i=0; i<4; i++){
    featuredCollection.push(collection[i]);
  }
  console.log(featuredCollection);

  return (
    <section className='featured-collection-section'>

      <h2>Featured Collections</h2>

      <div className='featured-collection'>
        
        {featuredCollection.map(item => (
          <CollectionCard title={item} />
        ))}

      </div>
      
    </section>
  )
}

export default FeaturedCollection