import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="bg-black text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">E-Voting</Link>
          </div>
          
          <div className="flex space-x-8">
            <Link to="/" className="hover:text-blue-300 transition">Home</Link>
            <Link to="/register" className="hover:text-blue-300 transition">Register</Link>
            <Link to="/login" className="hover:text-blue-300 transition">Voter Login</Link>
            <Link to="/contact" className="hover:text-blue-300 transition">Contact Us</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav