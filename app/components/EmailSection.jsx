import React from 'react'
import GithubIcon from "../../public/images/projects/github-logo.svg";
import LinkedinIcon from "../../public/images/projects/linkedin-logo.svg";
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
      <div><h5 className='text-4xl font-bold text-black mb-2'>Let's Connect</h5>
      <p className='text-sky-800 mb-4 max-w-md'>
        {" "}
        I'm looking forward to putting my years of experience in tech and new technical skills to work. If you know of any open positions, want to connect, or talk soccer, send me a message. Thanks!
        </p>
        <div className='socials flex flex-row gap-2'>
          <Link href = "https://github.com/arandel1">
            <Image src={GithubIcon} alt="Github Icon"/>
          </Link>
          <Link href = "https://www.linkedin.com/in/allison-randel/">
            <Image src={LinkedinIcon} alt="LinkedIn Icon"/>
          </Link>
          </div>
      </div>
      <div>
        <form className='flex flex-col'>
          <label htmlFor="email" type="email"  className='text-black block mb-1 text-sm font-medium my-2'>Your email</label>
          <input 
            type = "email"
            id = "email"
            required
            className='bg-slate-200 border  border-slate-300 placeholder-slate-500 text-black text-sm mb-2 rounded-lg block w-full p-2.5'
            placeholder = "your@email.com"
            />
          <label htmlFor="subject" className='text-black block mb-1 text-sm font-medium'>Subject</label>
          <input 
            type = "text"
            id = "subject"
            required
            className='bg-slate-200 border  border-slate-300 placeholder-slate-500 mb-2 text-black text-sm rounded-lg block w-full p-2.5'
            placeholder = "Subject"
            />
            <div className='mb-6'>
              <label
              htmlFor='message'
              className='text-black block text-sm mb-2 font-medium'
              >Message
              </label>
              <textarea
              name="message"
                id="message"
                className='bg-slate-200 border  border-slate-300 placeholder-slate-500 text-black text-sm mb-2 rounded-lg block w-full p-2.5'
                placeholder='Your message'>
              </textarea>
              <button
                type="submit"
                className='bg-sky-700 hover:bg-sky-300 text-white hover:text-sky-800 font-medium py-2.5 px-5 rounded-lg'>Send message</button>
            </div>
        </form>
      </div>

    </section>
  )
}

export default EmailSection
