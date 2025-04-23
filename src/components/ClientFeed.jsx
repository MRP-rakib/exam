import React from 'react'
import ClientCard from './ClientCard'

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
        // {
        //     text: "“Energistically build alternative scenarios via cross-unit applications. Credibly exploit one-to-one strategic theme areas and clicks-and-mortar services”"
        // },
    ]
  return (
    <section className='py-[120px]'>
            <div className="container">
                <div className='grid grid-cols-1 md:grid-cols-[auto_1fr]  '>
                    <div>
                        <p className='text-[20px] ml-2 leading-7 font-syne font-bold text-[#FF9330] pb-[10px]'>Testimonial</p>
                        <h2 className='font-syne font-bold text-10 md:text-[50px] lg:text-[64px] leading-12 lg:leading-[72px] max-w-[416px]'>Client feedback</h2>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[48px]'>
                      {
                        title.map((item)=>{
                            return <ClientCard key={item.id} title={item}/>
                        })
                      }
                      
                    </div>
                </div>
            </div>
    </section>
  )
}

export default ClientFeed