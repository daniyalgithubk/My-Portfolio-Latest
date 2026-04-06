import './App.css'
import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Home from './components/Home/Home'
import Education from './components/Education/Education'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import CV from './components/CV/CV'
import { Routes, Route } from 'react-router-dom'
import { useSelector } from "react-redux";
import { useEffect } from "react";


function App() {

  const theme = useSelector((state) => state.theme.theme);


  return (
    <div className={`flex h-screen ${theme === "dark" ? "dark" : ""}`}>
      <div className="flex h-screen w-full  bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      
      <Sidebar />

      <div className="flex-1 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cv" element={<CV />} />
        </Routes>
      </div>

    </div>

    </div>
  
  )
}

export default App
