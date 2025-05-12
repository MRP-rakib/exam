"use client"
import React from 'react'
import ClientCard from './ClientCard'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientFeed = () => {
    const title = [
        {
            id: 1,
            text: "“Energistically build alternative scenarios via cross-unit applications. Credibly exploit one-to-one strategic theme areas and clicks-and-mortar services”"
        },
        {
            id: 2,
            text: "“Unleash  energistically build alternative scenarios via cross-unit  build efficient initiatives for distinctive vortals. Synergistically strategize via adaptiv“"
        },
        {
            id: 3,
            text: "“Aliquam vehicula nunc facilisis tincidunt feugiat. Pellentesque sed viverra nisi. Fusce et laoreet augue. Quisque pretium, ligula lectus semper urna. Aliquam vehicula.”"
        },
        {
            id: 4,
            text: "“Aliquam vehicula nunc facilisis tincidunt feugiat. Pellentesque sed viverra nisi. Fusce et laoreet augue. Quisque pretium, ligula lectus semper urna. Aliquam vehicula.”"
        },
        // {
        //     text: "“Energistically build alternative scenarios via cross-unit applications. Credibly exploit one-to-one strategic theme areas and clicks-and-mortar services”"
        // },
    ];
    const settings = {
  
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024, 
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768, 
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
  return (
    <section className='py-[120px]'>
            <div className="container">
                <div className='grid grid-cols-1 md:grid-cols-[auto_1fr]  '>
                    <div className='mb-5 md:mb-0'>
                        <p className='text-[20px] ml-2 leading-7 font-syne font-bold text-[#FF9330] pb-[10px]'>Testimonial</p>
                        <h2 className='font-syne font-bold text-[40px] md:text-[50px] lg:text-[64px] leading-12 lg:leading-[72px] max-w-[416px]'>Client feedback</h2>
                    </div>
                    <div className='grid grid-cols-1  '>
                     <Slider {...settings}>
                         {
                        title.map((item)=>{
                            return <ClientCard key={item.id} title={item}/>
                        })
                      }
                     </Slider>
                      
                    </div>
                </div>
            </div>
    </section>
  )
}

export default ClientFeed