import React, { useState } from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'

const SearchPage = () => {
  const [ input, setInput ] = useState("");

  const handleSearch = () => {
    window.location.href = `/search/${input}`;
    setInput("");
  }

  return (
    <>
    <Navbar />
    <main className='search'>
        <span className='searchpage'>
            <input 
              type='text' 
              placeholder='Search your resort'
              onChange={e => {
                setInput(e.target.value);
                console.log(input);
              }}
            />
            <button onClick={handleSearch}>Search</button>
        </span> 
    </main>
    <Footer />
    </>
  )
}

export default SearchPage