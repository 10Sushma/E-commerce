const express = require('express')
require('dotenv').config()
const Product=require('./models/productmodel')
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.connect('mongodb+srv://Ssushma:sushma@ecommerce.bbcul.mongodb.net/?retryWrites=true&w=majority')
.then(()=>console.log('db connection successfull'))
.catch(err=>console.log(err));

const app = express()
app.use(express.json())

const corsoptions={
    origin:"*",
    credentials:true,
    optionSuccessStatus:200,
};
app.use(cors(corsoptions))
app.get('/api/Allproducts',async(req,res)=>{
    const allProducts = await Product.find(); 
   
    res.json(allProducts);
})

app.get('/api/womens',async(req,res)=>{
    const women = await Product.find({category:"women's clothing"}); 
   
    res.json(women);
})
app.get('/api/kids',async(req,res)=>{
    const kid = await Product.find({category:"kid's clothing"}); 
   
    res.json(kid);
})
app.get('/api/mens',async(req,res)=>{
    const men= await Product.find({category:"men's clothing"}); 
   
    res.json(men);
})
app.get('/buy/:id',async(req,res)=>{
 
    const buy= await Product.findOne({_id:req.params.id}); 
  
    res.json(buy);
})
app.get('/search/:key',async(req,res)=>{
    const data = await Product.find({
        $or: [
          {
            category: { $regex: req.params.key },
          },
          {
            title:{ $regex: req.params.key }
          },
          {
            price:{ $regex: req.params.key }
          }
        ],
       
      });
      res.json(data);
})

app.listen(8000,()=>
console.log('Backend server is ruuning'))
