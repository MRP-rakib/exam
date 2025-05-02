import Image from 'next/image'
import React from 'react'
import footer from "@/Assets/footer.png"

const Footer = () => {
  return (
    <section className='bg-black py-[100px]'>
        <div className='container'>
             <div>
                <div>
                <Image src={footer} alt='image'/>
                </div>
             </div>
        </div>

    </section>
  )
}

export default Footer