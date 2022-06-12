// import CircleIcon from '@mui/icons-material/Circle';
// import {Circle} from '@material-ui/icons'
import {useParams } from 'react-router-dom';
import React, {useState,useEffect} from 'react'
import axios from 'axios'
import Header from '../Home/header/Header';
import './productview.scss'

function ProductView({count1,setCount1}) {
  // var intvalue=parseInt(localStorage.getItem('itemCount'))
  // const[count,setCount]=useState(intvalue)
  // console.log(typeof(count))
  let { getid } = useParams(); 
const [data,setData]=useState([]);

  useEffect(()=>{  
    axios({
        method:"GET",
        url:`http://localhost:8000/buy/${getid}`
    }).then(res=>{
        // console.log(res.data[0])
   setData(res.data)

    }).catch(e=>console.log(e))
  },[]) 
  
 
 console.log(data)

 const incrementCount=()=>{
if (count1==0){
  
} 
  setCount1(count1+1)
  
 }

  return (
    <>
    <Header />
    <div className='summery'>
      <div className='image'>
          <img src={data.image}/>
       </div>
       <div className='details'>
        <h2>{data.title}</h2>
        <p>{data.category}</p>
        <h2>Rs. {data.price}</h2>
        <button className='loginButton' onClick={incrementCount} >ADD TO BAG</button>
        <div style={{display:count1 ? '' :"none"}}className='circle' >{count1}</div>
        </div> 
    </div>
    </>
  )
}

export default ProductView
