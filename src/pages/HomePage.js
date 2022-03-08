import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import FeaturedResortsList from '../components/FeaturedResortsList';
import Footer from '../components/Footer';
import FeaturedCollection from '../components/FeaturedCollection';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <main>
        <FeaturedResortsList />
        <FeaturedCollection />
      </main>
      <Footer />
    </>
  )
}

export default HomePage