  'use client'
  import Header from '@/components/Header'
  import Image from 'next/image'
  import { projects } from '@/app/data/projects'
  import ProjectCard from '@/components/ProjectCard'
  import AboutSection from '@/components/AboutSection'
  import { motion } from 'framer-motion'

  export default function Home() {
    return (
      <>
        <Header />

        {/* Hero Section */}
        <section
          id="home"
          className="relative min-h-screen px-4 sm:px-6 md:px-8 py-20 flex items-center justify-center overflow-hidden"
          style={{
      background: 'radial-gradient(circle, rgba(117,113,113,1) 0%, rgba(60,60,60,1) 50%, rgba(30,30,30,1) 100%)'
    }}
        >

        {/* Floating Circles */}
  <motion.div
    className="absolute inset-0 z-0 pointer-events-none"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
  >
    {Array.from({ length: 50 }).map((_, i) => {
      const size = 20 + Math.random() * 40; // varied size
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const colors = [
        'rgba(203, 227, 255, 0.8',   // electric blue
        'rgba(229, 174, 252, 0.8)',   // cyber purple
        'rgba(255, 105, 180, 0.3)', // hot pink
        'rgba(255, 255, 255, 0.1)', // soft white glow
      ];
      const color = colors[Math.floor(Math.random() * colors.length)];

      return (
        <motion.div
          key={i}
          className="absolute rounded-full blur-11xl"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${top}%`,
            left: `${left}%`,
            background: `radial-gradient(circle, ${color}, transparent)`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 40, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 5,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
      );
    })}
  </motion.div>

          <div className="font-sans max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 w-full text-white">
            {/* Left Side: Text */}
            <div className="md:flex-1 text-center md:text-left ">
              <h1 className="text-4xl font-bold mb-4">
                Hi! I&apos;m <span className="text-pink-300">Almera</span> <span className="ml-1">ツ</span>
              </h1>
              <p className="text-lg leading-relaxed text-gray-700 max-w-md mx-auto md:mx-0 text-white">
                A Web Developer and UI/UX Designer. This site is your one-stop scroll to learn more about what I do, what I&apos;ve built,
                and the things that keep me awake at 2 AM <span className="text-white font-bold">(ง ͠ಥ_ಥ)ง</span>
              </p>
              <a href="#contact">
                <button className="bg-pink-200 hover:bg-pink-500 hover:text-white text-gray-800 p-3 px-6 mt-5 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-md">
                  CONTACT ME
                </button>
              </a>
            </div>

            {/* Right Side: Image */}
            <div className="md:flex-1 flex justify-center items-center relative h-[400px] w-full md:h-[500px]"> 
            {/* Glow Aura Background */}
            <div className="absolute bottom-0 w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full bg-white/30 blur-3xl animate-pulse z-0"></div>

            {/* Image*/}
            <Image
              src="/images/me.png"
              alt="Almera Portrait"
              width={400}
              height={400}
              className="relative z-10 object-contain scale-[1.5] drop-shadow-[0_10px_40px_rgba(0,0,0,0.4)] transition-transform duration-300"
              priority
            />
          </div>


          </div>
        </section>


        {/* About Section */}
        <AboutSection />
        

        {/* Projects Section */}
        <section id="projects" className="min-h-screen bg-[#fceef5] px-6 py-24 text-gray-800 relative overflow-hidden">
        {/* Floating pastel circles for background flair */}
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#ffd6e0] opacity-30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#ffe0ed] opacity-30 rounded-full blur-3xl animate-pulse" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Title and Resume Button */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-14 gap-6 text-center md:text-left">
            <div>
              <h1>SOME OF MY</h1>
              <h2 className="text-5xl font-bold text-gray-800 font-poppins">PROJECTS</h2>
            </div>
            <a
              href="/portresume.pdf"
              download
              className="bg-pink-500 hover:bg-pink-200 hover:text-gray-800 text-white p-3 px-6 mt-5 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-md">
              Download CV
            </a>
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

        {/* Contact */}
        <section id="contact" className="min-h-screen px-10 py-20 flex items-center justify-center"
        style={{
      background: 'radial-gradient(circle, rgba(117,113,113,1) 0%, rgba(60,60,60,1) 50%, rgba(30,30,30,1) 100%)'
    }}
        >
          <div className="max-w-4xl w-full bg-gray-50 p-10 rounded-xl shadow-lg">
            <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Let&apos;s Connect</h2>

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
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 text-base md:text-lg"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 text-base md:text-lg"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 text-base md:text-lg"
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
