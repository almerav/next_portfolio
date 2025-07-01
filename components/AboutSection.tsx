'use client'
import { useState } from 'react'
import React from 'react'
import SkillCard from '@/components/SkillCard'
import {
  User,
  Briefcase,
  GraduationCap,
  Wrench
} from 'lucide-react'

const tabs = ['About Me', 'Experience', 'Education', 'Skills and Tools']

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('About Me')

  const icons: Record<string, React.ReactElement> = {
    'About Me': <User className="w-6 h-6" />,
    'Experience': <Briefcase className="w-6 h-6" />,
    'Education': <GraduationCap className="w-6 h-6" />,
    'Skills and Tools': <Wrench className="w-6 h-6" />,
  }

  const renderContent = () => {
    switch (activeTab) {
       case 'Experience':
        return (
          <div className="grid md:grid-cols-2 gap-6  px-6">
            <div className="bg-gray-800 hover:bg-gray-600 p-6 rounded-xl">
              <p className="text-pink-400 text-sm">January 2025 – April 2025</p>
              <h3 className="font-bold text-white">Software Developer Intern</h3>
              <p className="text-gray-300 text-sm">WARP Technologies by Prometheus</p>

              <div className="flex flex-wrap gap-2 mt-5">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">TypeScript</span>
                <span className="bg-pink-100 text-pink-800 text-xs font-semibold px-3 py-1 rounded-full">React.js</span>
                <span className="bg-cyan-100 text-cyan-800 text-xs font-semibold px-3 py-1 rounded-full">Tailwind CSS</span>
                <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">Next.js</span>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">NestJS</span>
                <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">PostgreSQL</span>
              </div>
            </div>

            <div className="bg-gray-800 hover:bg-gray-600 p-6 rounded-xl">
              <p className="text-pink-400 text-sm">December 2023 - 2024</p>
              <h3 className="font-bold text-white">Technical Lead</h3>
              <p className="text-gray-300 text-sm">Charlie Co. - BINHI Startup Incubation Program</p>

              <div className="flex flex-wrap gap-2 mt-5">
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
        <div className="grid md:grid-cols-2 gap-6 px-4">
          <div className="bg-gray-800 p-6 rounded-xl">
            <p className="text-gray-300 text-sm">Tertiary Education</p>
            <h3 className="font-bold text-white">WEST VISAYAS STATE UNIVERSITY - MAIN CAMPUS</h3>
            <p className="text-gray-300 text-sm">Bachelor of Science in Computer Science, Major in AI</p>
            <p className="bg-pink-100 text-pink-800 text-xs font-semibold px-3 py-1 rounded-full text-center mt-4 inline-block">Cum Laude</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <p className="text-gray-300 text-sm">Senior High School</p>
            <h3 className="font-bold text-white">Victorias National High School</h3>
            <p className="text-gray-300 text-sm">Humanities and Social Sciences</p>
            <p className="bg-pink-100 text-pink-800 text-xs font-semibold px-3 py-1 rounded-full text-center mt-4 inline-block">with High Honors</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <p className="text-gray-300 text-sm">Junior High School</p>
            <h3 className="font-bold text-white">Don Bosco Technical Institute - Victorias</h3>
            <p className="bg-pink-100 text-pink-800 text-xs font-semibold px-3 py-1 rounded-full text-center mt-4 inline-block">
              Completed 4-year Preparatory Technician’s Course in Electrical & Mechanical Technology
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <p className="text-gray-300 text-sm">Junior High School</p>
            <h3 className="font-bold text-white">Colegio de Sta. Ana de Victorias - Integrated School</h3>
            <p className="bg-pink-100 text-pink-800 text-xs font-semibold px-3 py-1 rounded-full text-center mt-4 inline-block">with Honors</p>
          </div>
        </div>
      )
      case 'Skills and Tools':
        return (
          <div className="max-h-[500px] overflow-y-auto pr-2 mt-8 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
            <div className="grid lg:grid-cols-3 gap-4">
              <SkillCard title="Python" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
              <SkillCard title="C++" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
              <SkillCard title="JavaScript" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
              <SkillCard title="TypeScript" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
              <SkillCard title="HTML5" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
              <SkillCard title="CSS3" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
              <SkillCard title="React.js" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
              <SkillCard title="Tailwind CSS" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
              <SkillCard title="Next.js" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" />
              <SkillCard title="NestJS" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" />
              <SkillCard title="PostgreSQL" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
              <SkillCard title="Firebase" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" />
              <SkillCard title="MySQL" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
              <SkillCard title="Git" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
              <SkillCard title="GitHub" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
              <SkillCard title="Flutter" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" />
              <SkillCard title="Figma" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
              <SkillCard title="Photoshop" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" />
              <SkillCard title="Canva" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" />
              <SkillCard title="MS Word" icon="https://img.icons8.com/color/48/microsoft-word-2019.png" />
              <SkillCard title="MS Excel" icon="https://img.icons8.com/color/48/microsoft-excel-2019.png" />
              <SkillCard title="MS PowerPoint" icon="https://img.icons8.com/color/48/microsoft-powerpoint-2019.png" />
              <SkillCard title="AutoCAD" icon="https://img.icons8.com/color/48/autocad.png" />
            </div>
          </div>
        )

      case 'About Me':
        return (
          <div className="text-gray-300 space-y-6 px-4 md:px-0 flex flex-col items-center text-center">
            <h3 className="text-3xl font-bold text-white">My name is Almera Valladolid ツ</h3>
            <p className="text-xl leading-snug">
              A recent <span className="text-yellow-400 font-bold">Computer Science</span> graduate majoring in{' '}
              <span className="text-blue-500 font-bold">Artificial Intelligence</span> @ WVSU.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Even though my background is in AI, I&apos;m passionate about clean, intuitive web interfaces and crafting
              seamless digital experiences. In short, I&apos;m into front-end development and UI/UX designing.
              If I&apos;m not debugging or designing, I&apos;m probably mid-game in League, Valorant, or just vibing with my iced
              choco and dogs.
            </p>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <section id="about" className="min-h-screen bg-[#0a0a0a] px-4 sm:px-6 md:px-8 py-20 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8">
          ABOUT <span className="text-pink-400">ME</span>
        </h2>

        {/* Mobile View */}
        <div className="md:hidden mb-8">
          <div className="flex gap-3 overflow-x-auto px-2 pb-1 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent justify-center">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`min-w-[60px] h-[60px] flex items-center justify-center rounded-lg text-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeTab === tab
                    ? 'bg-pink-400 text-gray-900'
                    : 'bg-gray-800 text-white hover:bg-pink-200 hover:text-gray-800'
                }`}
                title={tab}
              >
                {icons[tab]}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop Tabs */}
        <div className="hidden md:flex justify-center gap-6 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 shadow-md ${
                activeTab === tab
                  ? 'bg-pink-500 text-white shadow-pink-700'
                  : 'bg-[#2d2d2d] text-white hover:bg-pink-300 hover:text-black'
              }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="w-full">{renderContent()}</div>
      </div>
    </section>
  )
}
