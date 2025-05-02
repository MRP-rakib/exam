import Image from 'next/image'
import React from 'react'
import aboutme from "@/app/about/image/about_2.png"

const AboutMe = () => {
  return (
    <section className='mt-[80px]  pt-[80px] pb-[120px] bg-[#FFE9D9] w-full'>
        <div className=' container'>
           <div>
            <Image src={aboutme} alt='img'/>
           </div>
           <div></div>
        </div>
    </section>
  )
}

export default AboutMe