import React from 'react'

const Home = () => {
  return (
     <div className="h-screen flex flex-col items-center justify-center
                bg-white dark:bg-gray-900
                text-black dark:text-white
                transition-colors duration-300">
     <img src="/Images/Daniyal.jpeg" alt="Profile" className="w-38 h-40 rounded-full mb-4"/>
     <h1 className="text-4xl font-bold">Hello My Name is Daniyal khattak</h1>
     <h2 className="text-2xl font-semibold">I am a React js Developer</h2>
     <p className="text-center max-w-2xl mx-auto">
          I design and develop modern, responsive, and user-focused web applications
          that deliver seamless user experiences across all devices. My focus is on
          writing clean, maintainable code and building performant interfaces 
          using modern frontend technologies.
    </p>
    </div>
  )
}

export default Home
