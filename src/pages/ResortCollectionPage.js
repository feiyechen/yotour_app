import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ListingCard from '../components/ListingCard';
import FilterBox from '../components/FilterBox';

const ResortCollectionPage = () => {

  const [resorts, setResorts] = useState([]);
  const [types, setTypes] = useState([]);
  
  const { type } = useParams();

  const getTypesByResorts = (resorts) => {
    /* get all types array */
    const allTypes = ["All"];
    resorts.map(item => (allTypes.push(item.type)));

    /* get no-repeat types array */
    const types = allTypes.filter(
      (ele, pos) => {
        return allTypes.indexOf(ele) === pos;
      }
    )
    
    /* prepare types like {Type: "ALL", Selected: true} */
    const typesObj = [];
    types.map(item => (
      item === type ? (
        typesObj.push({type: item, Selected: true})
      ) : (
        typesObj.push({type: item, Selected: false})
      )
    ))

    return typesObj;
  }

  const changeSelected = (typeName) => {
    const newTypes = []
    types.map(item => (
      item.type === typeName ? (
        newTypes.push({type: item.type, Selected: true})
      ) : (
        newTypes.push({type: item.type, Selected: false})
      )
    ))
    setTypes(newTypes);
    console.log(newTypes);
  }

  useEffect(() => {
    fetch("http://localhost:8080/resorts")
    .then(response => response.json())
    .then(json => {

      setResorts(json);
      setTypes(getTypesByResorts(json));

    }).catch(err => {
      console.log(`Error ${err}`)
    })
  }, [])
  

  return (
    <>
      <Navbar />
      <main>
        <div className='resorts-list'>

          <FilterBox types={types} change={changeSelected} />

          <div className='list-box'>
            
            {
              type === "All" ? (
                resorts.map(item => (
                  <ListingCard
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    type={item.type}
                    location={item.location}
                    desc={item.desc[0]}
                    img={item.img}
                    featured={item.featured}/>
                ))
              ) : (
                resorts.filter(item => item.type === type).map(item => (
                  <ListingCard
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    type={item.type}
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