'use client'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src="/next.svg" alt="Logo" width={40} height={40} />
          <span className="font-bold text-lg">MyPortfolio</span>
        </div>

        {/* Navigation */}
        <nav className="space-x-6">
          <a href="#home" className="hover:text-pink-600">Home</a>
          <a href="#about" className="hover:text-pink-600">About</a>
          <a href="#projects" className="hover:text-pink-600">Projects</a>
          <a href="#contact" className="hover:text-pink-600">Contact</a>
        </nav>
      </div>
    </header>
  )
}
