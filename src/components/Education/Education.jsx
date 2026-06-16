import React from 'react'
import { useSelector } from 'react-redux'
import { pageBg, text, card } from '../../theme/backgrounds'

const Education = () => {
  const theme = useSelector((state) => state.theme.theme)
  const t = text(theme)

  return (
    <div className="min-h-screen p-8 md:p-16 transition-colors duration-300"
      style={{ background: pageBg(theme) }}>
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: t.heading }}>
        My Education
      </h1>
      <div className="relative pl-8 md:pl-12 space-y-12"
        style={{ borderLeft: `4px solid ${theme === 'dark' ? '#4b5563' : '#c4b5fd'}` }}>
        {[
          { title: "Bachelors in Software Engineering", school: "COMSATS University (2019 - 2023)", description: "Focus: Software Engineering" },
          { title: "Intermediate", school: "Punjab College Blue Area Islamabad (2017 - 2019)", description: "Courses: Computer, Mathematics, Physics, English, Urdu, Pak Studies" },
          { title: "Matriculation", school: "OPF Boys College (2015 - 2017)", description: "Courses: Computer, Mathematics, Physics, Chemistry, English, Urdu, Pak Studies" },
          { title: "Middle School", school: "OPF Boys College (2012 - 2015)", description: "Courses: Computer, Mathematics, Science, English, Urdu, Pak Studies" },
          { title: "Primary School", school: "The Educators School (2006 - 2012)", description: "Courses: Computer, Mathematics, Science, English, Urdu, Pak Studies" },
        ].map((edu, index) => (
          <div key={index} className="relative rounded-lg p-6 md:p-8 shadow-md hover:shadow-xl transition duration-300"
            style={{ background: card(theme) }}>
            <div className="absolute -left-7 top-6 w-5 h-5 bg-yellow-400 rounded-full border-2"
              style={{ borderColor: theme === 'dark' ? '#0f0221' : '#f3f0ff' }} />
            <h2 className="text-xl md:text-2xl font-semibold mb-2" style={{ color: t.heading }}>{edu.title}</h2>
            <p className="font-medium mb-2" style={{ color: t.body }}>{edu.school}</p>
            <p style={{ color: t.muted }}>{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education