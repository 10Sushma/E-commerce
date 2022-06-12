import React from 'react'
import { Carousel } from 'react-carousel-minimal';

function Carousel1() {
    const data = [
        {
          image: "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/1ae72dae-ffbd-465d-81e2-4751fd06fbbe1654012895525-EORS-Desktop-Banner.jpg",
        
        },
        {
          image: "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/1/735e64d7-b478-4c04-9a2d-0c93ae257cfc1654097850282-Kurtas-Sets_Desktop.jpg",
      
        },
        {
          image: "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/1/553384ff-be1f-4272-81d6-6f9e43fe5fe51654097949853-Dresses_Desk.jpg",
        
        },
        {
          image: "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/1/7b1da839-34a4-4e78-b5b5-e18af304e3bd1654099311017-Top-Kurta-Sets_Desk.jpg",
         
        },
        
        {
          image: "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/5b4e9f29-f0ef-41bf-be9d-83f468c823cc1654006815381-Tees---Tops_DK.jpg",
         
        },
        {
          image: "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/1768e5bd-41a3-4373-b583-eafb68c41f401654006978408-Indian-Wear_DK.jpg",
         
        },
        {
          image: "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/ad85684f-9dda-47e2-bdfe-c6d2ea3bb7271654007028955-Handbags-Wallets_DK.jpg",
         
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