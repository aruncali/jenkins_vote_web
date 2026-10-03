import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-12">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Digital Voting Platform
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Our system ensures fair, transparent, and secure elections with modern technology.
            Electronic Voting Machine (EVM) Style Interface with enhanced security features.
          </p>
          <Link to="/register">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">
              Start Voting
            </button>
          </Link>
        </div>
        <div className="md:w-1/2">
          <div className="bg-blue-100 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Secure & Transparent</h3>
            <p className="text-blue-700">Your vote is confidential and securely recorded</p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-3xl font-bold text-center mb-8">About Online Voting</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 mb-4">
              Learning how to vote online can save a lot of time and effort. After all,
              voting is a fundamental right of every citizen. To make the process hassle-free
              for everyone, we provide maximum convenience possible.
            </p>
            <p className="text-gray-700">
              In the quest to modernize the democratic process,
              we have advanced with secure steps towards online voting.
            </p>
          </div>
          <div className="bg-blue-50 rounded-lg p-6">
            <h4 className="font-semibold text-lg mb-3">Benefits</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Vote from anywhere</li>
              <li>Secure and transparent</li>
              <li>Real-time results</li>
              <li>Environment friendly</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Voting Guidelines */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-center mb-6">Voting Guidelines</h2>
        <div className="max-w-2xl mx-auto">
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>Ensure you are registered before attempting to vote</li>
            <li>Keep your voter ID and password secure</li>
            <li>Verify your candidate selection before submitting</li>
            <li>Voting is anonymous - your identity is not linked to your vote</li>
            <li>Each voter can only vote once</li>
            <li>Report any suspicious activity to election officials</li>
            <li>Voting is not only our right, it is our power</li>
          </ol>
          <div className="text-center mt-6">
            <Link to="/register">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg">
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-100 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <h4 className="font-semibold mb-4">Phone Support</h4>
            <p className="text-blue-600 font-semibold">+91 9894717881</p>
            <div className="bg-white p-4 rounded-lg mt-3">
              <p className="font-semibold">Director</p>
              <p>Name: Arun</p>
              <p>Email: arun@tnevm.in</p>
            </div>
          </div>
          <div className="text-center">
            <h4 className="font-semibold mb-4">Email Support</h4>
            <p className="text-blue-600 font-semibold">contact@tnevm.in</p>
            <div className="bg-white p-4 rounded-lg mt-3">
              <p className="font-semibold">Website Info Manager</p>
              <p>Name: Arun</p>
              <p>Email: arun@tnevm.in</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home