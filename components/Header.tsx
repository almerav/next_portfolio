'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="backdrop-blur-md bg-white/30 border-b border-white/20 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src="/images/logo.png" alt="Logo" width={20} height={20} />
          <span className="font-bold text-lg">MENG</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-pink-600">Home</a>
          <a href="#about" className="hover:text-pink-600">About</a>
          <a href="#projects" className="hover:text-pink-600">Projects</a>
          <a href="#contact" className="hover:text-pink-600">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden focus:outline-none">
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col space-y-2">
            <a href="#home" className="hover:text-pink-600" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" className="hover:text-pink-600" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#projects" className="hover:text-pink-600" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#contact" className="hover:text-pink-600" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
        </div>
      )}
    </header>
  )
}
