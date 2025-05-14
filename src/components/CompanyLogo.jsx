"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Slider from "react-slick";

import matrixian from "@/Assets/matrixian.png";
import google from "@/Assets/google.png";
import factual from "@/Assets/factual.png";
import airbnb from "@/Assets/airbnb.png";
import chase from "@/Assets/chase.png";
import logitec from "@/Assets/logitec.png";
import Aos from "aos";

const CompanyLogo = () => {
  const logos = [matrixian, google, factual, airbnb, chase, logitec];

 const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 1500,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024, 
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768, 
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480, 
      settings: {
        slidesToShow: 1,
        centerMode: true,        
        centerPadding: "0px",
      },
    },
  ],
};
  useEffect(()=>{
   Aos.init(
    {
        duration: 1000,
        easing:"ease"
    }
   )
  }, [])
  return (
    <section className="mb-[120px]"
    data-aos="flip-down"
      data-aos-delay= "200"
    >
      <div className="container border-y-[1px] border-[#0808081A] py-10"
      
      >
        <Slider {...settings} className="">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center md:px-4">
              <Image src={logo} alt={`logo}`} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CompanyLogo;
