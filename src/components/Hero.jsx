import Image from 'next/image'
import React from 'react'
import heroBg from "@/Assets/hero.png"


const Hero = () => {
  return (
    <section>
      <div className=' bg-[#FFE9D9] h-[850px] w-full  '>
        {/* left side */}
            <div className=''>
            <Image className='absolute top-0 right-0'  src={heroBg}/>
            </div>
        <div className='container pt-[140px]'>
            <h2 className='flex items-center gap-5 text-[32px] font-bold'> <hr className='w-[65px] ' /> Hello, I’m✌</h2>
            <h1 className='flex flex-col  text-[140px] font-bold'><span className='bg-amber-300 w-[50px] h-[50px]'></span><span>Mark</span>  Hengry</h1>
            <p>Product Designer | Based in Germany</p>
            <div className='flex gap-3 pt-[30px]'>
              <button className='bg-black py-4 px-8 text-white'>Let’s Talk</button>
              <button className='bg-black py-4 px-8 text-white'>My Work</button>
            </div>

        </div>
        {/* right side  */}
        
        
      </div>
    </section>
  )
}

export default Hero
