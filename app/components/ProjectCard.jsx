import React from 'react'
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from 'next/link';

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, techstack }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl mt-4 relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize:"cover"}}>

          <div className="overlay items-center justify-center top-0 left-0 w-full h-full bg-white bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-90 transition-all duration-700">

            <Link

              href={gitUrl}
              className='h-14 w-14 mr-2 border-2 relative rounded-full border-sky-200 hover:border-sky-700 group/link'>

                <CodeBracketIcon className='h-10 w-10 text-sky-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-sky-700'/>

            </Link>

            <Link

              href={previewUrl}
              className='h-14 w-14 border-2 relative rounded-full border-sky-200 hover:border-sky-700 group/link'>

                <EyeIcon className='h-10 w-10 text-sky-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-sky-700'/>

            </Link>

          </div>
          
      </div>

      <div className="text-sky-800 rounded-b-xl mt-3 bg-sky-100 py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{ title }</h5>
        <p className="text-black">{ description }</p>
        <br/>
        <ul
          className="text-black">
            <li><span className='font-semibold'>Tech stack: </span>{ techstack }</li>
        </ul>

      </div>

    </div>
  )
}

export default ProjectCard
