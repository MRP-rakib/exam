import Image from 'next/image'
import React from 'react'
import post_1 from "@/app/blogdetails/images/post1.png"
import post_2 from "@/app/blogdetails/images/post2.png"


const DesingDetails = () => {
  return (
    <section className=' mt-[10px] lg:pt-[130px] md:mt-[280px]  md:pt-[280px]'>
        <div className="container">
            <div className=''>
            
                <div className="mt-12">
                    <h1 className='font-syne font-bold text-[20px] md:text-[24px] lg:text-[32px] leading-10 pb-4'>Overview</h1>
                    <p className='font-normal text-[18px] leading-7 text-[#08080899] pb-4'>Minimalism combined with elements of french typography and brutalism helped us to realize the site exactly as we imagined with the client at the beginning: visually restrained, but stylish. Informative and pleasant to use, with an elegant aftertaste of a serious financial institution. Combined with elements of french typography and visually restrained, but stylish. Informative and pleasant to use, with an elegant aftertaste of a serious financial institutional client, and close collaboration.</p>
                    <p className='text-[#08080899] font-normal leading-7'>That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not only reflects who you are and what you stand for, but words that truly land with those that read them, calling your audience in and making them want more.</p>
                    <ul className='pt-3 list-disc ml-5'>
                        <li className='font-bold text-[20px] leading-7 pb-1'> Advantage</li>
                        <li className='font-bold text-[20px] leading-7 pb-1'> Accomplished</li>
                        <li className='font-bold text-[20px] leading-7 pb-1'> Marketplace startups</li>
                        <li className='font-bold text-[20px] leading-7 pb-1'>  SaaS startups</li>
                    </ul>
                    <h2 className='pt-12 pb-4 font-syne font-bold text-[20px] md:text-[24px] lg:text-[32px] leading-[24px] md:leading-[40px]'>Typography</h2>
                    <p className='text-[#08080899] font-normal text-[18px] leading-7 pb-12'>The basic idea was to find a balance between the thin, wispy sans-serif used to indicate a ‘futuristic‘ tone, and a bold, masculine font synonymous with ‘construction‘. We came up with something in the middle, leaning towards lighter-weighted fonts, but still with a hint of that blocky ‘construction’ vibe. We use Chaney for general display and when we want to drive attention to the content, and the technical and geometric Sora font for the body copy and paste overall hierachy.</p>
                    <div className='grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 items-center justify-center'>
                        <div>
                            <Image src={post_2} className=' '/>
                        </div>
                        <div>
                        <Image src={post_2} className=''/>
                        </div>
                    </div>
                    <h2 className=' pt-12 pb-4 font-syne font-bold text-[20px] md:text-[24px] lg:text-[32px] leading-10 '>Conclusion</h2>
                    <div className='gap-6 grid grid-cols-1 md:grid-cols-2'>
                        <p className='font-normal text-[18px] leading-7 text-[#08080899]'>The basic idea was to find a balance between the thin, wispy sans-serif used to indicate a ‘futuristic‘ tone, and a bold, masculine font synonymous with ‘construction‘. We came up with something in the middle, leaning towards lighter-weighted fonts, but still with a hint of that blocky ‘construction’ vibe. We use Chaney for general display and when we want to drive attention to the content, and the technical and geometric Sora font for the body copy and paste overall hierachy.</p>
                        <p className='font-normal text-[18px] leading-7 text-[#08080899]'>The basic idea was to find a balance between the thin, wispy sans-serif used to indicate a ‘futuristic‘ tone, and a bold, masculine font synonymous with ‘construction‘. We came up with something in the middle, leaning towards lighter-weighted fonts, but still with a hint of that blocky ‘construction’ vibe.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default DesingDetails