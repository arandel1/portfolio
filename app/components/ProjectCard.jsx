import React from 'react'
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from 'next/link';

const ProjectCard = ({ imgUrl, title, description }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl mt-4 relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize:"cover"}}>

        <div className="overlay absolute top-0 left-0 w-full h-full bg-white bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500"></div>

      </div>

      <div className="text-black rounded-b-xl bg-sky-100 py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{ title }</h5>
        <p className="text-sky-800">{ description }</p>
      </div>

    </div>
  )
}

export default ProjectCard
