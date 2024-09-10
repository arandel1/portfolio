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
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>React</li>
        <li>Vite</li>
        <li>Firebase</li>
        <li>PostgreSQL</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>GitHub</li>
        <li>Jira + Confluence</li>
        <li>Next.js + Vercel</li>
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
        <li>Learn C++ | Codecademy | In Progress</li>
        <li>Web Development Certificate | Fullstack Academy, Grace Hopper Program</li>
        <li>Bachelor of Arts, Journalism</li>
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
          Hello! I'm a journalist turned community manager, turned operations analyst, turned software engineer and web developer, and I'm looking for my next opportunity.
          <br/>
          <br/>
          I'm excited to combine my years in operations and technical skills! I'm passionate about learning, creative problem-solving, and access to information.</p>
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
          </div>
          <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
