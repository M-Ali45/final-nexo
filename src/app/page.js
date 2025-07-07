import React from 'react'
import AnnouncementBar from './components/home/Announcement'
import Image from 'next/image'
import TopLights from './components/home/TopLights'
import Brands from './components/home/Brands'

const page = () => {
  return (
    <div className=''>
     <AnnouncementBar />
     <Image src="/images/home/5.png" width={1440} height={400} alt='hero image' className='w-full' />
     <TopLights />
     <image src="images/home/light2.png" width={220} height={128} alt='Architectural'className='top light-1st'/>
     <Brands />
    </div>
  )
}

export default page
     
