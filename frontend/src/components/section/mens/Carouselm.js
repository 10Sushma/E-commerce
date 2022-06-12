import React from 'react'
import { Carousel } from 'react-carousel-minimal';

function Carousel1() {
    const data = [
      
      {
        image: "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/4031994d-9092-4aa7-aea1-f52f2ae5194f1654006594976-Activewear_DK.jpg",
      
      },
      {
        image: "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/1/3d0ac179-044c-4060-a28a-89bbf63a112f1654099355774-Premium-Watches_DK--1-.jpg",
     
      },
        
       
        {
          image: "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/1/9041bdba-b48a-4ed9-8fcb-e1eeb23a74e31654099110315-Sports---Casual-Shoes_Desk.jpg",
        
        },
        
        {
          image: "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/a1a2d3b7-f227-4ee9-9026-4f0754e219851654006760962-Smartwatches_DK.jpg",
         
        },
       
        
      ];
      
  return (
    <div>
        
        <div style={{
          padding: "70px 0px"
        }}>
          <Carousel
            data={data}
            time={5000}
            width="100vw"
            height="50vh"  
            radius="10px"
            automatic={true}
            dots={true}
            dotsPadding='100px'
            pauseIconColor="white"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            
          />
        </div>
      </div>
   
  )
}

export default Carousel1