import React from "react";
import Slider from "react-slick";
import Swiper from "swiper";


function Responsive() {
 
  return (
    <div className="slider-container">
       <Swiper
        pagination={{
          dynamicBullets: true,
          clickable:true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><SlideItem discount={"10%"}/></SwiperSlide>
        <SwiperSlide><SlideItem discount={"20%"}/></SwiperSlide>
        <SwiperSlide><SlideItem discount={"30%"}/></SwiperSlide>
        <SwiperSlide><SlideItem discount={"40%"}/></SwiperSlide>
        <SwiperSlide><SlideItem discount={"50%"}/></SwiperSlide>
       
        </Swiper> 
    </div>
  );
}

export default Responsive;
