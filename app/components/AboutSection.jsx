"use client";
import { useTransition, useState } from 'react';
import React from 'react'
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Skills", 
    id: "skills",
    content: (
      <ul className='list-disc pl-2'>
        <li><b>Programming Languages:</b> JavaScript, HTML, CSS, SQL</li>
        <li><b>Front End:</b> React, Vite, Next.js, Tailwind CSS, Daisy UI, Material UI </li>
        <li><b>Back End:</b> PostgreSQL, Node.js, JSON Web Tokens, Express, Firebase, RESTful API</li>
        <li><b>Project Management:</b> Atlassian, Jira, GitHub, Miro, Figma, Excel, Microsoft Office, Google Workplace, Tableau</li>
      </ul>
    )
  }, 
  {
    title: "Education",
    id: "education",
    content: (
      <ul className='list-disc pl-2'>
        <li>Fullstack Academy, Grace Hopper Program | 2024</li>
        <li>Texas State University | 2017</li>
      </ul>
    )
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className='list-disc pl-2'>
        <li>Web Development Certificate | Fullstack Academy, Grace Hopper Program</li>
        <li>Bachelor of Arts, Mass Communications-Journalism | Sociology Minor</li>
      </ul>
    )
  },
  {
    title: "Technical Experience",
    id: "technical-experience",
    content: (
      <ul className='list-disc pl-2'>
        <li><a href ="https://the-collab-lab.codes/participate/">The Collab Lab</a> | October 2024</li>
      </ul>
    )
  }
]

const AboutSection = () => {
  const [tab, setTab] = useState ("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  }

  return (
    <section className='text-black'>
      <div className='md:grid gap-8 items-left py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        {/* input image here */}
        <div id = "aboutme">
          <h2 className='text-4xl font-bold text-black mb-4'>About Me</h2>
          <p className='text-base lg:text-lg'>
          Hello! I'm a journalist turned community manager, turned operations analyst, turned software engineer and web developer, eager to bridge the gap between engineering, product, sales, and customers.
          <br/>
          <br/>
          I'm passionate about learning, creative problem-solving, and access to information. In my free time, I'm usually running around Town Lake, watching or playing soccer, attending chess club at a local bookstore, and making homemade ice cream (fluffernutter has been the best so far).</p>
          <div className='flex flex-row mt-8'>
            <TabButton
              selectTab = {()=>handleTabChange("skills")}
              active={tab === "skills"}>
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab = {()=>handleTabChange("education")}
              active={tab === "education"}>
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab = {()=>handleTabChange("certifications")}
              active={tab === "certifications"}>
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton
              selectTab = {()=>handleTabChange("technical-experience")}
              active={tab === "technical-experience"}>
              {" "}
              Technical Experience{" "}
            </TabButton>
          </div>
          <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
