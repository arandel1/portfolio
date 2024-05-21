'use client';
import React from 'react'
import Image from 'next/image'
import  { TypeAnimation } from 'react-type-animation'
import { Bai_Jamjuree } from 'next/font/google'



const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 lsm:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className="text-black mb-4 text-4xl sm:text-5xl font-extrabold">
            <span className="text-sky-700 text-4xl sm:text-5xl font-extrabold">
              Hello, I'm {" "}
            </span>
            <TypeAnimation
              sequence={[
                "Allison",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Software Engineer',
                1000,
                'Web Developer',
                1000,
                'Creator',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className='text-black  text-base sm:text-lg mb-6 lg:text-xl'>
            Based in Austin, Texas
          </p>
        </div>
        <div className='col-span-5'>
          {/* add image here at some point <image
            src = 'image'
          /> */} 
        </div>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent hover:bg-sky-700 hover:text-white'>
            Contact Me
          </button>
          <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent hover:bg-sky-700 hover:text-white'>
            Download Resume
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
