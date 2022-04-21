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
    type: "",
    rules: [],
    amenities: [],
    location: {
      street: "",
      state: "",
      postalCode: "",
      country: ""
    },
    featured: false 
  });

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/resorts/${id}`)
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
          type={resort.type}
          desc={resort.desc}
          rule={resort.rules}
          amenities={resort.amenities}
          location={resort.location}
          img={resort.img} 
          featured={resort.featured} 
        />

      </main>
      <Footer />
    </>
  )
}

export default ResortDescPage