"use client"
import React from 'react'
import HeroSection from '../components/category/HeroSection'
import { useParams } from 'next/navigation';
import ShowCategory from '../components/category/ShowCategory';
const page = () => {
  const { category } = useParams();
  
  return (
    <div className='max-w-[1440px] mx-auto'>
      <HeroSection category={category}  />
      <ShowCategory />
    </div>
  )
}

export default page
