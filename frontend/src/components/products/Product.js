import React from 'react'
import '../section/kids/kids.scss'
import './p.scss'

import { Link } from 'react-router-dom';
export const DataContext =React.createContext();
function Product() {
   
    
  return (
    <div className='products-container'>
      <input classname='searchbar' 

     type='text'
      id ='icon1'
      placeholder='Search for products, brands and more'
      style={{ marginLeft: "430px"}}
      />

       {/* <img src='./images/Homekid/hk1.webp' alt=''/> */}
            {/* <div className="card"> */}
            
            {/* <div className="card-description"> */}
            <div > <Link to='/kids/section'><img src='./images/Homekids/hk1.webp' alt="home images"/></Link></div>
            <div > <Link to='/kids/section'><img src='./images/Homekids/hk2.webp' alt="home images"/></Link></div>
            <div > <Link to='/kids/section'><img src='./images/Homekids/hk3.webp' alt="home images"/></Link></div>
            <div > <Link to='/kids/section'><img src='./images/Homekids/hk4.webp' alt="home images"/></Link></div>
                
           
            <div > <Link to='/womens/section'><img src='./images/homewomen/hw1.webp' alt="home images"/></Link></div>
            <div > <Link to='/womens/section'><img src='./images/homewomen/hw2.webp' alt="home images"/></Link></div>
            <div > <Link to='/womens/section'><img src='./images/homewomen/hw5.webp' alt="home images"/></Link></div>
            <div > <Link to='/womens/section'><img src='./images/homewomen/hw4.webp' alt="home images"/></Link></div>

            <div > <Link to='/mens/section'><img src='./images/homemen/h2.webp' alt="home images"/></Link></div>
            <div > <Link to='/mens/section'><img src='./images/homemen/hm1.webp' alt="home images"/></Link></div>
            <div > <Link to='/mens/section'><img src='./images/homemen/hm3.webp' alt="home images"/></Link></div>
            <div > <Link to='/mens/section'><img src='./images/homemen/hm4.webp' alt="home images"/></Link></div>
       
       
        </div>
  )
}

export default Product