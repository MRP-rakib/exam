import React from 'react'
import MyDesing from './_components/MyDesing'
import DesingDetails from './_components/DesingDetails'
import RecentWork from '@/components/RecentWork'
import Work from './_components/Work'


const page = () => {
  return (
    <div className='mt-20'>
                <MyDesing/>
                <DesingDetails/>
                <Work/>

    </div>
  )
}

export default page