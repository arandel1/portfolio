import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
  {
    id: 1, 
    title: "Who's Your Rep?",
    description: "Who's Your Rep? is a responsive web application providing a list of government representatives based on address that gives a simple answer to the question: 'Who is representing me in government?'. This project served as a way for me to flex my API call skills and to explore my interest for open-source citizen projects.",
    image: "/images/projects/1.png",
    gitUrl: "https://github.com/arandel1/whos-your-rep",
    previewUrl: "https://whos-your-rep.vercel.app/",
    techstack: "JavaScript, Node.js + Express, React, Vite, and the Google Civic Information API.",
  },
  {
    id: 2, 
    title: "Tchotchkes",
    description: "A responsive data-driven e-commerce web application offering unique antiques and oddities, simulating a real-world scenario for online shoppers and antique store owners. I gained valuable scrum master experience and navigated working in an Agile Environment for the first time. I focused primarily on frontend development while contributing to database construction, API creation and documentation, as well as CSS.",
    image: "/images/projects/2.png",
    gitUrl: "https://github.com/arandel1/tchotchkes",
    previewUrl: "https://capstone-tchotchke-ghp-2401.vercel.app/",
    techstack: "JavaScript, Prisma, Node.js + Express, Postman, React, Vite, Bootstrap, and Vercel.",
  },
  {
    id: 3, 
    title: "Web Portfolio",
    description: "I was excited to build my own online portfolio, and it was the perfect opportunity to explore new programs (Next.js, Tailwind CSS, and Resend) and logic by reshaping how I organize my components.",
    image: "/images/projects/3.png",
    gitUrl: "https://github.com/arandel1/portfolio",
    previewUrl: "https://www.allisonrandel.com/",
    techstack: "JavaScript, Next.js, Node.js, Resend, Tailwind CSS, Postman, and Vercel.",
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
