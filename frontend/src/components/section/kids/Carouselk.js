import React from 'react'
import { Carousel } from 'react-carousel-minimal';

function Carousel1() {
    const data = [
        {
          image: "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/09f0df54-6f8f-4bb0-a4b9-3b374d4538561649782019495-Top-Brands-2_Desk_Banner.jpg",
        
        },
        {
          image: "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/a606c305-a23f-4fe3-a630-343ced4a10261649782019470-Kids-Wear_Desk_Banner.jpg?v1",
      
        },
        {
          image: "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/b97efc90-2359-48ea-bf74-9c72d552fdef1649782019503-T-Shirts-_-Shorts_Desk_Banner.jpg",
        
        },
        {
          image: "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/0e977afc-87e2-4798-a0d6-bfb05ba796911649782019489-Super-Bottoms_Desk_Banner.jpg",
         
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