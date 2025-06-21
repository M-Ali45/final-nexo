import React from 'react'

const HeroSection = ({category}) => {
  return (
    <div className=' flex flex-col justify-center items-center text-center my-[30px]'>
      <h2 className='uppercase text-3xl'>{category=="smart-home"?"Smart Home": category=="digital-sign"?"Digital Sign":category=="show-more"?"Show More ":category}</h2>
      <p>
        Ceiling lights are the best way to bring light and style to any commercial or residential area. ceiling light can illuminate a room and make a cozy and warm atmosphere. ceiling lighting can be used as the task lighting in the indoor lighting solution. LED ceiling lamps have a wide variety of styles from classic to contemporary. hanging lights are mostly used in offices to give a main light source. dome & flush lights which are surface mount ceiling lights are used as classical lighting in an area. They can also be used to add a decorative touch to any space, with a variety of finishes and colors. With the right ceiling light, your room will be transformed.
      </p>
    </div>
  )
}

export default HeroSection
