'use client'
import Header from '@/components/Header'
import Image from 'next/image'
import { projects } from '@/app/data/projects'
import ProjectCard from '@/components/ProjectCard'
import AboutSection from '@/components/AboutSection'

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section
        id="home"
        className="h-screen bg-gray-100 flex items-center justify-center px-10"
      >
        {/* Left Side: Text */}
        <div className="flex-1 pl-30">
          <h1 className="text-3xl font-semibold mb-4">
            Hi! I'm <span className="text-pink-500">Almera</span>{' '}
            <span className="ml-1">ツ</span>
          </h1>
          <p className="text-lg leading-relaxed max-w-md">
            And this site is your one-stop scroll to learn more about what I do, what I've built
            and the things that keeps me awake at 2 AM <span className="text-black font-bold"> (ง ͠ಥ_ಥ)ง </span>
          </p>
          <a href="#contact">
          <button className="bg-pink-500 hover:bg-black hover:text-white p-3 pl-5 pr-5 mt-3 rounded-full font-bold">CONTACT ME</button>
          </a>
        </div>

        {/* Right Side: Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/images/toga.jpg"
            alt="Almera"
            width={300}
            height={300}
            className="rounded-full shadow-lg object-cover"
          />
        </div>
      </section>

      {/* About Section */}
      <AboutSection />
      

      {/* Projects Section */}
      <section id="projects" className="min-h-screen bg-[#150050] px-6 py-20 text-white">
        <div className="max-w-7xl mx-auto">
          {/* Title + Resume Button in a row */}
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-5xl font-bold">PROJECTS</h2>
            <a
              href="/resume.pdf"
              download
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-full transition duration-200"
            >
              Download CV
            </a>
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen bg-white px-10 py-20 flex items-center justify-center">
        <div className="max-w-4xl w-full bg-gray-50 p-10 rounded-xl shadow-lg">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Let's Connect</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div>
              <p className="text-lg mb-4 text-gray-700">
                Got a question, opportunity, or just wanna say hi? Feel free to reach out!
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:valladolidalmera.j@gmail.com" className="text-pink-500 hover:underline">
                    valladolidalmera.j@gmail.com
                  </a>
                </li>
                <li>
                  <strong>LinkedIn:</strong>{' '}
                  <a href="https://www.linkedin.com/in/almeravalladolid" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline">
                    linkedin.com/in/almeravalladolid
                  </a>
                </li>
                <li>
                  <strong>GitHub:</strong>{' '}
                  <a href="https://github.com/almerav" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline">
                    github.com/almerav
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Form */}
            <form
              action="https://formspree.io/f/meokryaw"
              method="POST"
              className="flex flex-col space-y-4"
            >
              <div>
                <label htmlFor="name" className="block mb-1 font-medium text-gray-700">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-1 font-medium text-gray-700">
                  Enter your message:
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Enter your message"
                  rows={5}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-pink-500 text-white py-3 px-6 rounded-full font-semibold hover:bg-black transition-all w-fit self-end"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>


    </>
  )
}
