import Image from 'next/image'
import React from 'react'
import matrixian from "@/Assets/matrixian.png"
import google from "@/Assets/google.png"
import factual from "@/Assets/factual.png"
import airbnb from "@/Assets/airbnb.png"
import chase from "@/Assets/chase.png"
import logitec from "@/Assets/logitec.png"

const CompanyLogo = () => {
    
  return (
    <section className='mb-[120px]'>
       <div className="container">
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 border-t-1 border-b-1 border-gray-200 py-[40px]'>
            
            <div>
                <Image src={matrixian} alt='matrixian'/>
            </div>
            <div>
                <Image src={google} alt='google'/>
            </div>
            <div>
                <Image src={factual} alt='factual'/>
            </div>
            <div>
                <Image src={airbnb} alt='airbnb'/>
            </div>
            <div>
                <Image src={chase} alt='chase'/>
            </div>
            <div>
                <Image src={logitec} alt='logitec'/>
            </div>
            
        </div>
       </div>
    </section>
  )
}

export default CompanyLogo