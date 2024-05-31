import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
  {
    id: 1, 
    title: "Who's Your Rep",
    description: "A responsive web application providing a list of government representatives based on address.",
    image: "/images/projects/1.png",
    gitUrl: "https://github.com/arandel1/whos-your-rep",
    previewUrl: "https://whos-your-rep.vercel.app/",
  },
  {
    id: 2, 
    title: "Tchotchkes",
    description: "A responsive data-driven e-commerce web application offering unique antiques and oddities.",
    image: "/images/projects/2.png",
    gitUrl: "https://github.com/arandel1/tchotchkes",
    previewUrl: "https://capstone-tchotchke-ghp-2401.vercel.app/",
  },
  {
    id: 3, 
    title: "Web Portfolio",
    description: "You're lookin' at it!",
    image: "/images/projects/3.png",
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  return (
    <>
    <div className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 mb-8'>
        <h2 className='text-4xl font-bold text-black mb-4'id="projects">My Projects</h2>
        <div className='grid md:grid-cols-3 gap-8 md:gap-12' >{projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tags={project}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default ProjectSection
