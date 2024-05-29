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
        <li>React + Vite</li>
        <li>PostgreSQL</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>GitHub</li>
        <li>Confluence + Jira</li>
        <li>Next.js + Vercel</li>
      </ul>
    )
  }, 
  {
    title: "Education",
    id: "education",
    content: (
      <ul className='list-disc pl-2'>
        <li>Fullstack Academy, Grace Hopper Program</li>
        <li>Texas State University</li>
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
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        {/* input image here */}
        <div>
          <h2 className='text-4xl font-bold text-black mb-4'>About Me</h2>
          <p className='text-base lg:text-lg'>
          Software engineer and web developer with six years of professional experience in operations and data analysis, creative writing, and graphic design. Excited to create thoughtful and quality products for teams and customers. Strong passion for learning, creative problem-solving, and bringing knowledge to people and communities.
          </p>
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
