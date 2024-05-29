import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
  {
    id: 1, 
    title: "Who's Your Rep",
    description: "A responsive web application providing a list of government representatives based on address.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
  },
  {
    id: 2, 
    title: "Tchotchkes",
    description: "A responsive data-driven e-commerce web application offering unique antiques and oddities.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
  },
  {
    id: 3, 
    title: "Web Portfolio",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
  },
];

const ProjectSection = () => {
  return (
    <>
      <h2>My Projects</h2>
      <div>{projectsData.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          imgUrl={project.image}/>
        ))}
      </div>
    </>
  )
}

export default ProjectSection
