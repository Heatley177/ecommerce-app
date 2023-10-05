import React from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import BodyProducts from '../../components/BodyProducts/BodyProducts';

function Home() {
  return (
    <div className='home'>
        <Header />
        <BodyProducts />
    </div>
  )
}
 
export default Home