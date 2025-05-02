import React from 'react'
import AboutMe from './_component/AboutMe'
import ClientSec from './_component/ClientSec'
import ClientFeed from '@/components/ClientFeed'
import CompanyLogo from '@/components/CompanyLogo'
import Video from './_component/Video'
import Resume from './_component/Resume'

const page = () => {
    
  return (
    <div>
         <AboutMe/>
         <ClientSec/>
         <Video/>
         <Resume/>
         <ClientFeed/>
         <CompanyLogo/>
    </div>
  )
}

export default page