"use client";
import { useTransition, useState } from 'react';
import React from 'react'
import TabButton from './TabButton';

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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quis minima distinctio ratione eaque. Unde molestiae facere maxime ea ab, sapiente eveniet aliquid veniam vitae molestias provident, aut fugit dolor?
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
        </div>
      </div>
    </section>
  )
}

export default AboutSection
