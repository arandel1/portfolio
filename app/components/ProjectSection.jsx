import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
  {
    id: 1, 
    title: "Who's Your Rep?",
    description: "A responsive web application providing a list of government representatives based on address that gives a simple answer to the question: 'Who is representing me in government?'. This project served as a way to explore my interest for open-source citizen projects.",
    image: "/images/projects/1.png",
    gitUrl: "https://github.com/arandel1/whos-your-rep",
    previewUrl: "https://whos-your-rep.vercel.app/",
    techstack: "JavaScript, Node.js + Express, React, Vite, and the Google Civic Information API.",
  },
  {
    id: 2, 
    title: "Tchotchkes",
    description: "A responsive data-driven e-commerce web application offering unique antiques and oddities, simulating a real-world scenario for online shoppers and antique store owners. I gained valuable scrum master experience and navigated working in an Agile environment.",
    image: "/images/projects/2.png",
    gitUrl: "https://github.com/arandel1/tchotchkes",
    previewUrl: "https://capstone-tchotchke-ghp-2401.vercel.app/",
    techstack: "JavaScript, Prisma, NodeJS + Express, Postman, React, Vite, Bootstrap, and Vercel.",
  },
  {
    id: 3, 
    title: "Web Portfolio",
    description: "An opportunity to build my own online portfolio and explore new frameworks and logic.",
    image: "/images/projects/3.png",
    gitUrl: "https://github.com/arandel1/portfolio",
    previewUrl: "https://www.allisonrandel.com/",
    techstack: "JavaScript, Next.js, NodeJS, Tailwind CSS, Postman, and Vercel.",
  },
  {
    id: 4, 
    title: "SnapShop, The Collab Lab",
    description: "A smart shopping list app that learns user buying habits and helps remember what users will likely need to buy on their next trip to the store. Collaborated with Emma Ma, Sarah Mekonnen, and Marcos Perez.",
    image: "/images/projects/4.png",
    gitUrl: "https://github.com/the-collab-lab/tcl-76-smart-shopping-list",
    previewUrl: "https://github.com/the-collab-lab/tcl-76-smart-shopping-list",
    techstack: "JavaScript, React, NodeJS, Tailwind CSS, Daisy UI, and Material UI.",
  },
];

const ProjectSection = () => {
  return (
    <>
    <div className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 mb-5' id="projects">
        <h2 className='text-4xl font-bold text-black mb-4'>My Projects</h2>
        <div className='grid md:grid-cols-3 gap-8 md:gap-12' >{projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tags={project}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
            techstack={project.techstack}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default ProjectSection
