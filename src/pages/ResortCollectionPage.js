import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ListingCard from '../components/ListingCard';
import FilterBox from '../components/FilterBox';

const ResortCollectionPage = () => {

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

  const { type } = useParams();

  return (
    <>
      <Navbar />
      <main>
        <div className='resorts-list'>

          <FilterBox />

          <div className='list-box'>
            
            {resorts.filter(item => item.Type === type).map(item => (
              <ListingCard
                id={item.id}
                title={item.title}
                price={item.price}
                type={item.Type}
                desc={item.desc[0]}/>
            ))}

          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}

export default ResortCollectionPage