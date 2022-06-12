import { Link } from 'react-router-dom';
import React from 'react'
import Carousel1 from './carousel/Carousel1';
import Header from './header/Header';

function Home() {
  return (
    <div className="App">
    <Header />
  <Link to='/womens/section'>  <Carousel1 /> </Link>
    
    </div>
  );
}

export default Home;
