'use client';
import React from 'react'
// import Image from 'next/image'
import  { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className="text-black mb-4 text-4xl sm:text-5xl font-extrabold">
            <span className="text-sky-700 text-4xl sm:text-5xl font-extrabold">
              Hello, I'm {" "}
            </span>
            <br/>
            <TypeAnimation
              sequence={[
                "Allison",
                1000, // wait 1s 
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
        </div>
        {/* <div className='col-span-7 place-self-center text-center sm:text-left'>
          <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent hover:bg-sky-700 hover:text-white'>
            Contact Me
          </button>
          <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent border border-sky-800 hover:bg-sky-700 hover:text-white'>
            Download Resume
          </button>
        </div> */}
      </div>
    </section>
  )
}

export default HeroSection
