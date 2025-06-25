'use client'
import { useState } from 'react'
import Image from 'next/image'
import SkillCard from '@/components/SkillCard'

const tabs = ['About Me', 'Experience', 'Education', 'Skills',]

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('About Me')

  const renderContent = () => {
    switch (activeTab) {
      case 'Experience':
        return (
          <div className="grid md:grid-cols-2 gap-4 mt-40 ml-30">
            <div className="bg-gray-800 hover:bg-gray-600 p-4 rounded-xl">
              <p className="text-pink-400 text-sm">January 2025 – April 2025</p>
              <h3 className="font-bold text-white">Software Developer Intern</h3>
              <p className="text-gray-300 text-sm">WARP Technologies by Prometheus</p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mt-5 mb-3">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">TypeScript</span>
                <span className="bg-pink-100 text-pink-800 text-xs font-semibold px-3 py-1 rounded-full">React.js</span>
                <span className="bg-cyan-100 text-cyan-800 text-xs font-semibold px-3 py-1 rounded-full">Tailwind CSS</span>
                <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">Next.js</span>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">NestJS</span>
                <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">PostgreSQL</span>
              </div>
            </div>
            
            <div className="bg-gray-800 hover:bg-gray-600 p-4 rounded-xl">
              <p className="text-pink-400 text-sm">December 2023 - 2024</p>
              <h3 className="font-bold text-white">Technical Lead</h3>
              <p className="text-gray-300 text-sm">Charlie Co. - BINHI Startup Incubation Program</p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mt-5 mb-3">
                <span className="bg-lime-100 text-lime-800 text-xs font-semibold px-3 py-1 rounded-full">Arduino</span>
                <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full">Leadership</span>
                <span className="bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full">Hardware Integration</span>
                <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-3 py-1 rounded-full">IoT Concepts</span>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">Project Management</span>
                <span className="bg-slate-100 text-slate-800 text-xs font-semibold px-3 py-1 rounded-full">Pitching</span>
              </div>

            </div>
          </div>
        )
      case 'Education':
        return (
        <div className="grid md:grid-cols-2 gap-4 mt-30 ml-30 ">
          <div className="bg-gray-800 p-4 rounded-xl">
            <p className="text-gray-300 text-sm">Tertiary Education</p>
            <h3 className="font-bold text-white">WEST VISAYAS STATE UNIVERSITY - MAIN CAMPUS</h3>
            <p className="text-gray-300 text-sm">Bachelor of Science in Computer Science, Major in AI</p>
            <p className="bg-pink-100 text-pink-800 text-xs font-semibold px-3 py-1 rounded-full text-center mt-4 w-50">Cum Laude</p>
          </div>

          <div className="bg-gray-800 p-4 rounded-xl">
            <p className="text-gray-300 text-sm">Secondary Education - Senior High School</p>
            <h3 className="font-bold text-white">Victorias National High School</h3>
            <p className="text-gray-300 text-sm">Humanities and Social Sciences</p>
            <p className="bg-pink-100 text-pink-800 text-xs font-semibold px-3 py-1 rounded-full text-center mt-4 w-50">with High Honors</p>
          </div>

          <div className="bg-gray-800 p-4 rounded-xl">
            <p className="text-gray-300 text-sm">Secondary Education - Junior High School</p>
            <h3 className="font-bold text-white">Don Bosco Technical Insititue - Victorias</h3>
            <p className="bg-pink-100 text-pink-800 text-xs font-semibold px-3 py-1 rounded-full text-center mt-4 w-50">Completed 4-year Preparatory Technician’s Course in Electrical 
            Technology and Mechanical Technology 
            </p>
          </div>

          <div className="bg-gray-800 p-4 rounded-xl">
            <p className="text-gray-300 text-sm">Secondary Education - Junior High School</p>
            <h3 className="font-bold text-white">Colegio de Sta. Ana de Victorias - Integrated School</h3>
            <p className="bg-pink-100 text-pink-800 text-xs font-semibold px-3 py-1 rounded-full text-center mt-4 w-50">with Honors</p>
          </div>
        </div>
        )
case 'Skills':
  return (
    <div className="max-h-[500px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
      <div className="grid lg:grid-cols-3 gap-4">
        {/* Programming & Web Development */}
        <SkillCard title="Python" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
        <SkillCard title="C++" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
        <SkillCard title="JavaScript" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
        <SkillCard title="TypeScript" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
        <SkillCard title="HTML5" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
        <SkillCard title="CSS3" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
        <SkillCard title="React.js" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
        <SkillCard title="Tailwind CSS" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
        <SkillCard title="Next.js" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" />

        {/* Backend & Databases */}
        <SkillCard title="NestJS" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" />
        <SkillCard title="PostgreSQL" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
        <SkillCard title="Firebase" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" />
        <SkillCard title="MySQL" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />

        {/* Tools */}
        <SkillCard title="Git" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
        <SkillCard title="GitHub" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />

        {/* Mobile Dev & Design */}
        <SkillCard title="Flutter" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" />
        <SkillCard title="Figma" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
        <SkillCard title="Photoshop" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" />
        <SkillCard title="Canva" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" />

        {/* Office & AutoCAD */}
        <SkillCard title="MS Word" icon="https://img.icons8.com/color/48/microsoft-word-2019.png" />
        <SkillCard title="MS Excel" icon="https://img.icons8.com/color/48/microsoft-excel-2019.png" />
        <SkillCard title="MS PowerPoint" icon="https://img.icons8.com/color/48/microsoft-powerpoint-2019.png" />
        <SkillCard title="AutoCAD" icon="https://img.icons8.com/color/48/autocad.png" />
      </div>
    </div>
  )



      case 'About Me':
        return (
          <div className="text-gray-300 space-y-4 mt-40 ml-30">
            <h3 className="text-3xl font-semibold text-white">I'm Almera Valladolid ツ</h3>
            <p className="text-3xl">
              A <span className="text-amber-400  font-bold">Computer Science</span> graduate majoring in{' '}
              <span className="text-blue-500 font-bold">Artificial Intelligence</span> @ WVSU.
            </p>
            <p>
              Even though my background is in AI, I’m passionate about clean, intuitive web interfaces and crafting
              seamless digital experiences.
              If I’m not debugging or designing, I’m probably mid-game in League, Valorant, or just vibing with good
              coffee and code.
            </p>
            
            
          </div>
        )
      default:
        return null
    }
  }

  return (
    <section id="about" className="min-h-screen bg-[#0a0a0a] px-6 py-20 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Left Tabs */}
        <div className="md:w-1/4 space-y-4 mt-30 ml-30 ">
          <h2 className="text-4xl font-bold mb-4">ABOUT ME</h2>
          <p className="text-gray-400 mb-6">Let’s break it down 👇</p>
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`w-full text-left px-4 py-2 rounded-md font-semibold ${
                activeTab === tab
                  ? 'bg-pink-500 text-black'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Right Content */}
        <div className="md:w-3/4">{renderContent()}</div>
      </div>
    </section>
  )
}
