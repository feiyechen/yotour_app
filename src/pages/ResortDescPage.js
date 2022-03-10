import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ResortDesc from '../components/ResortDesc';

const ResortDescPage = () => {

  const [resort, setResort] = useState({
    id: 0, 
    title: "", 
    price: 0, 
    img: [],
    desc: [],
    Type: "",
    Rules: [],
    Amenities: [],
    location: {
      street: "",
      state: "",
      postalCode: "",
      country: ""
    },
    featured: true 
  });

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://yotour-server.herokuapp.com/resorts/${id}`)
    .then(response => response.json())
    .then(json => setResort(json))
    .catch(err => console.log(`Error ${err}`))
  }, [])

  console.log(resort)

  return (
    <>
      <Navbar />
      <main className='resort-desc-main'>

        <ResortDesc 
          title={resort.title}
          price={resort.price}
          type={resort.Type}
          desc={resort.desc}
          rule={resort.Rules}
          amenities={resort.Amenities}
          location={resort.location}  
        />

      </main>
      <Footer />
    </>
  )
}

export default ResortDescPage