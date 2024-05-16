import React from 'react'

const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-12'>
        <div className='col-span-7 place-self-center'>
          <h1 className="text-black mb-4 text-4xl lg:text-6xl font-extrabold">
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
              Hello, I'm {" "}
            </span>
            Allison
          </h1>
          <p className='text-black text-lg lg:text-xl'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum minus voluptatibus dolores tempora veritatis, ullam officiis. Consectetur, deleniti maiores sunt amet incidunt at, vitae voluptatum ut, temporibus porro mollitia. Officiis?
          </p>
        </div>
        <div className='col-span-5'>
          {/* add image here at some point <image
            src = 'image'
          /> */} 
        </div>
        <div>
          <button className='px-6 py-3 rounded-full mr-4 bg-transparent hover:bg-slate-200'>
            Contact Me
          </button>
          <button className='px-6 py-3 rounded-full mr-4 bg-transparent hover:bg-slate-200'>
            Download Resume
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
