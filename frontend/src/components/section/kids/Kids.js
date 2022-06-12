import React, {useState,useEffect} from 'react'
import axios from 'axios'
import '../../products/product.scss'
import './kids.scss'

import { Link ,Outlet} from 'react-router-dom';
import Header from '../../Home/header/Header'
import Carousel1 from './Carouselk';
export const DataContext =React.createContext();
function Women() {
  const [isScrolled,setIsScrolled]=useState(false);
  
  window.onscroll=()=>{
    setIsScrolled(window.pageYOffset===0 ? false:true);
    return()=>(Window.onscroll=null);
  };
   
    const [data,setData]=useState([]);

  useEffect(()=>{
     
    axios({
        method:"GET",
        url:'http://localhost:8000/api/kids'

    }).then(res=>{
        console.log(res.data)
        setData(res.data)

    }).catch(e=>console.log(e))
  },[]) 
  const searchHandle = async (e) => {
    let key = e.target.value;
    if (key) {
      const response = await axios.get(`http://localhost:8000/search/${key}`)
      // console.log(response);
      const result = response.data;
      console.log(result);
      if (result) {
        setData(result);
      }
    }
  };

  
  return (
    <>
    <Header />
    <input classname='searchbar' 
    onChange={searchHandle}
     type='text'
      id ='icon1'
      placeholder='Search for products, brands and more'
      style={{
      backgroundColor:isScrolled ? 'white' :""
      }}
      />
    
    <Carousel1 />
    <div className='products-container'>
    
        {data.map((product)=>(
            <div key={product.id} className="card">
            {/* <div><button onClick={() => displaySummery(product.id)}><img src={product.image} alt="#"/></button></div> */}
            <div > <Link to={`/buy/${product._id}`}><img src={product.image} alt="#"/></Link></div>
            <div className="card-description">
              
                <h4 className='details'>{`${product.category}`}</h4>
                <p className='details'>{product.title}</p>
                <h4 className='details'>{`Rs. ${product.price}`}</h4>
               
            </div>
           </div>
            
        ))}
        <Outlet />
        </div>
        </>
  )
}

export default Women