'use client'
import { useState } from 'react'
import { Project } from '@/data/projects'
import Modal from './ProjectModal'

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  const truncate = (text: string, max: number) =>
    text.length > max ? text.substring(0, max) + '...' : text

  return (
    <>
      <div className="bg-purple-800 p-4 rounded-xl h-full flex flex-col justify-between">
        {project.video ? (
          <video className="rounded-lg mb-2 w-full h-40 object-cover" autoPlay loop muted controls>
            <source src={project.video} type="video/mp4" />
          </video>
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className="rounded-lg mb-2 w-full h-40 object-cover"
          />
        )}
        <p className="text-sm text-purple-200">{project.tag}</p>
        <h3 className="text-lg font-bold mt-2">{truncate(project.title, 65)}</h3>
        <div className="flex justify-end mt-3">
          <button
            onClick={() => setIsOpen(true)}
            className="text-blue-300 text-sm hover:underline"
          >
            Read More
          </button>
        </div>
      </div>

      {/* Modal */}
      {isOpen && <Modal project={project} onClose={() => setIsOpen(false)} />}
    </>
  )
}
