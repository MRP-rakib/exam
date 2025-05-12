import Image from 'next/image'
import React from 'react' 
import quotation from "@/Assets/quotation.png"

const ClientCard = ({title}) => {
    const settings = {
  
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  
  return (
    
    <div>
       <div className='pb-4 ml-2 mr-3'>
       <Image src={quotation} alt='quotation'/>
       </div>
        <p className='pb-7 mr-10 font-syne font-bold text-[18px] leading-6 lg:leading-[28px] pt-10'>{title.text}</p>
        <h1 className='font-black font-syne text-[18px] leading-[28px] flex items-center justify-center'>Jhon Smith</h1>
    </div>
  )
}

export default ClientCard