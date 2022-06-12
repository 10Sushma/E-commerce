import React, {useState,useEffect} from 'react'


import { Link } from 'react-router-dom';
import './Header.scss'

import {WorkOutline,PermIdentity,
  FavoriteBorder} from '@material-ui/icons';

const Header = () => {
  const [isScrolled,setIsScrolled]=useState(false);
  
  window.onscroll=()=>{
    setIsScrolled(window.pageYOffset===0 ? false:true);
    return()=>(Window.onscroll=null);
  };
  // console.log(window.pageYOffset)
  
  return (
    <div className='navbar 'style={{backgroundColor:isScrolled ? 'white' :""}}>
        <div className='container'>
            <div className='left'>
              <Link to='/'>  <img className='img1' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Myntra_logo.png/800px-Myntra_logo.png"
                alt='logo'
                /></Link>
                 <span className='span-left'><Link className='link' to='/mens/section' >Men</Link></ span>
                <span className='span-left'><Link className='link' to='/womens/section'>Women</Link></span>
                <span className='span-left'><Link className='link' to='/kids/section'>Kids</Link></span>
                <span className='span-left'>Home & Living</span>
                <span className='span-left'>Beauty</span>
                <span className='span-left'>Studio</span>
            </div>
            <div className='right'>
            
            
            
              <div className='profile'>
              < PermIdentity className='icon' /> 
              {/* <div className='options'>
                <span className='span-options'>Profile</span>
               </div> */}
               <div  className='options'>
                <span className='span-options'>Profile</span>
                
               </div> 
              </div>            
              <div className='profile'>
              
              <FavoriteBorder className='icon' />
              <div className='options'>
                <span className='span-options'>WhiteList</span>
               </div> 
              </div> 
              
          
            <div className='profile'>
              < WorkOutline className='icon'/>
              <div className='options'>
                <span className='span-options'>Bags</span> 
              </div>
            </div>
            </div> 
        </div>
       

    </div>
  )
}

export default Header