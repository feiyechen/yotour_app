import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ListingCard from '../components/ListingCard';
import FilterBox from '../components/FilterBox';

const ResortCollectionPage = () => {

  const [resorts, setResorts] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    fetch("https://yotour-server.herokuapp.com/resorts")
    .then(response => response.json())
    .then(json => {
      setResorts(json);
    }).catch(err => {
      console.log(`Error ${err}`)
    })
  }, [])

  /* get all types array */
  const allType = ["All"];
  resorts.map(item => (allType.push(item.Type)));

  /* get no-repeat types array */
  const collection = allType.filter(
    (ele, pos) => {
      return allType.indexOf(ele) === pos;
    }
  )

  const typeObjs = [];
  collection.map(item => (
    item === type ? (
      typeObjs.push({ Type: item, Selected: true })
    ) : (
      typeObjs.push({ Type: item, Selected: false })
    )
  ));
  console.log(typeObjs);


  

  return (
    <>
      <Navbar />
      <main>
        <div className='resorts-list'>

          <FilterBox type={typeObjs} />

          <div className='list-box'>
            
            {
              type === "All" ? (
                resorts.map(item => (
                  <ListingCard
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    type={item.Type}
                    location={item.location}
                    desc={item.desc[0]}
                    img={item.img}
                    featured={item.featured}/>
                ))
              ) : (
                resorts.filter(item => item.Type === type).map(item => (
                  <ListingCard
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    type={item.Type}
                    location={item.location}
                    desc={item.desc[0]}
                    img={item.img}
                    featured={item.featured}/>
                ))
              )
            }

          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}

export default ResortCollectionPage