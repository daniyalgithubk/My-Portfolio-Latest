import './App.css'
import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Home from './components/Home/Home'
import Education from './components/Education/Education'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import CV from './components/CV/CV'
import Experience from './components/Experience/Experience'
import { Routes, Route } from 'react-router-dom'
import { useSelector } from "react-redux";
import { useEffect , useState } from "react";
import MobileMenuButton from './components/Sidebar/MobileMenuButton'


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className={`${theme === "dark" ? "dark" : ""}`}>
      <div className="flex h-screen overflow-hidden">

        <MobileMenuButton isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

        <Sidebar
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen}
        />

        <div className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cv" element={<CV />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App
