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
          spaceBetween={12}
          slidesPerView={1}
          breakpoints={{
            480: { slidesPerView: 2, spaceBetween: 12 },
            768: { slidesPerView: 3, spaceBetween: 14 },
            1024: { slidesPerView: 4, spaceBetween: 16 },
            1280: { slidesPerView: 5, spaceBetween: 18 },
          }}
          navigation={true}
          modules={[ Autoplay,Navigation]}
          className="mySwiper">

            {data.map((item)=>{
              return(
                <SwiperSlide key={item.id}><Products item={item} /></SwiperSlide>                
              )
            })}


        </Swiper>
      </div>
    </div>
  );
}

export default SlideProducts;
