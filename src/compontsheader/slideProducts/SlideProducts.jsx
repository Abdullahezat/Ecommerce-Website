import React from "react";
import Products from "./Products";
import "./slideProducts.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
function SlideProducts({data ,title}) {
  return (
    <div className="slide_product slide">
      <div className="container">
        <div className="top_slide">
          <h2>{title}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            rem!
          </p>
        </div>
        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={5}
          navigation={true}
          modules={[ Autoplay,Navigation]}
          className="mySwiper">

            {data.map((item)=>{
              return(
                <SwiperSlide><Products item={item} /></SwiperSlide>                
              )
            })}


        </Swiper>
      </div>
    </div>
  );
}

export default SlideProducts;
