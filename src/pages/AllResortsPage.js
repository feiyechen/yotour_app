import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ListingCard from '../components/ListingCard';
import FilterBox from '../components/FilterBox';

const AllResortsPage = () => {

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

  return (
    <>
      <Navbar />
      <main>
        <div className='resorts-list'>

          <FilterBox />

          <div className='list-box'>
            
            {resorts.map(item => (
              <ListingCard
                id={item.id}
                title={item.title}
                price={item.price}
                type={item.Type}
                location={item.location}
                desc={item.desc[0]}
                img={item.img}
                featured={item.featured}/>
            ))}

          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}

export default AllResortsPage