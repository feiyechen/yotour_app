import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ListingCard from '../components/ListingCard';

const SearchResultPage = () => {

  const [resorts, setResorts] = useState([]);

  const { input } = useParams();

  useEffect(() => {
      fetch(`http://localhost:8080/resorts/typeortitle?type=${input}&title=${input}`)
      .then(res => res.json())
      .then(json => setResorts(json))
      .catch(err => console.log(`Error ${err}`))
  }, [])

  return (
      <>
        <Navbar />
        <main>
            <div className='resorts-list'>
                <div className='list-box'>
                    {resorts.length >= 1 ? (resorts.map(item => (
                        <ListingCard
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            type={item.type}
                            location={item.location}
                            desc={item.desc[0]}
                            img={item.img}
                            featured={item.featured}
                        />
                        ))) : (<h3>No Result</h3>)
                    }
                </div>
            </div>
        </main>
        <Footer />
      </>
  )
}

export default SearchResultPage