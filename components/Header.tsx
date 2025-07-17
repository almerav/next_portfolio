'use client'
import Image from 'next/image'
import {
  User,
  Folder,
  Mail,
  Home,
} from 'lucide-react'

export default function Header() {
  return (
    <>
      {/* Top Header - Desktop Only */}
      <header className="font-intel hidden md:block fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl rounded-full bg-white/30 backdrop-blur-md border border-white/20 shadow-lg px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo with text */}
          <div className="flex items-center space-x-2">
            <Image src="/images/logo.png" alt="Logo" width={24} height={24} />
            <span className="font-bold text-lg text-white">MENG</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="flex space-x-6 font-medium text-white">
            <a href="#home" className="hover:text-pink-400 transition">Home</a>
            <a href="#about" className="hover:text-pink-400 transition">About</a>
            <a href="#projects" className="hover:text-pink-400 transition">Projects</a>
            <a href="#contact" className="hover:text-pink-400 transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Bottom Mobile Nav - Only Icons */}
      <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 flex justify-around items-center py-2 z-50 md:hidden">
        <a href="#home" className="text-gray-600 hover:text-pink-500" aria-label="Home">
          <Home className="w-6 h-6" />
        </a>
        <a href="#about" className="text-gray-600 hover:text-pink-500" aria-label="About">
          <User className="w-6 h-6" />
        </a>
        <a href="#projects" className="text-gray-600 hover:text-pink-500" aria-label="Projects">
          <Folder className="w-6 h-6" />
        </a>
        <a href="#contact" className="text-gray-600 hover:text-pink-500" aria-label="Contact">
          <Mail className="w-6 h-6" />
        </a>
      </nav>
    </>
  )
}
