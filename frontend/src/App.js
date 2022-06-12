
import React from 'react'
// import Addproduct from './components/Addproduct';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Women from './components/section/women/Women';
import Kids from './components/section/kids/Kids';
import Mens from './components/section/mens/Mens';
import ProductView from './components/products/ProductView';
import Homeparent from './components/Homeparent'
import  {useState,useEffect} from 'react'


function App() {
  const[count1,setCount1]=useState(0)
  return (
  
   
    
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homeparent />}/>
        <Route exaxt path='/kids/section' element={<Kids /> }/>
        <Route exact path='/womens/section' element={<Women />}/>
        <Route exact path='/mens/section' element={<Mens />}/>


        <Route exact path="/buy/:getid" element={<ProductView count1={count1} setCount1={setCount1}/>} />
        
         
       
      </Routes>
    </BrowserRouter>
    
   
  );
}

export default App;
