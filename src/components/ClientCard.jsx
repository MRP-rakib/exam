import Image from 'next/image'
import React from 'react' 
import quotation from "@/Assets/quotation.png"

const ClientCard = ({title}) => {
  
  return (
    <div>
       <div className='pb-10 ml-2'>
       <Image src={quotation} alt='quotation'/>
       </div>
        <p className='pb-7 font-syne font-bold text-[20px] leading-[28px] pt-10'>{title.text}</p>
        <h1 className='font-black font-syne text-[18px] leading-[28px] flex items-center justify-center'>Jhon Smith</h1>
    </div>
  )
}

export default ClientCard