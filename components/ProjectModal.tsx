'use client'
import { Project } from '@/data/projects'

interface Props {
  project: Project
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white text-black max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-lg shadow-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black hover:text-red-500 font-bold text-xl"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
        <p className="text-sm text-gray-500 mb-4">{project.tag}</p>

        {project.video ? (
          <video className="w-full mb-4 rounded-lg" controls>
            <source src={project.video} type="video/mp4" />
          </video>
        ) : (
          <img src={project.image} className="w-full mb-4 rounded-lg" alt={project.title} />
        )}

        <p className="text-md whitespace-pre-wrap leading-relaxed">{project.description}</p>
      </div>
    </div>
  )
}
