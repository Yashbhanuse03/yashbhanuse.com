import React from 'react'

const navbar = () => {
  return (
    <nav className="bg-white rounded-full shadow-md px-5 py-3 flex items-center justify-between w-full max-w-3xl mx-auto mt-6">
      <div className="font-bold text-lg text-gray-800">MyPortfolio</div>
      <ul className="flex space-x-6">
        <li>
          <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
        </li>
        <li>
          <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">Projects</a>
        </li>
        <li>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default navbar