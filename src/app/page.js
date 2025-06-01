import React from 'react'
import AnnouncementBar from './components/home/Announcement'
import Image from 'next/image'
import TopLights from './components/home/TopLights'
import Brands from './components/home/Brands'

const page = () => {
  return (
    <div className=''>
     <AnnouncementBar />
     <Image src="/images/home/hero.png" width={1440} height={400} alt='hero image' className='w-full ' />
     <TopLights />
     <Brands />
    </div>
  )
}

export default page

