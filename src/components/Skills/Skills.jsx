import React from 'react'
import { useSelector } from 'react-redux'
import { pageBg, text, card } from '../../theme/backgrounds'

const Skills = () => {
  const theme = useSelector((state) => state.theme.theme)
  const t = text(theme)

  return (
    <div className="min-h-screen p-8 transition-colors duration-300"
      style={{ background: pageBg(theme) }}>
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: t.heading }}>
        Skills
      </h1>
      <div className="space-y-8">
        {[
          { name: "JavaScript", level: 80 },
          { name: "React", level: 75 },
          { name: "HTML/CSS", level: 90 },
          { name: "Node.js", level: 70 },
          { name: "Git", level: 85 },
          { name: "Redux", level: 65 },
          { name: "Tailwind CSS", level: 80 },
          { name: "Bootstrap", level: 75 },
          { name: "Material UI", level: 70 },
          { name: "OOP", level: 85 },
        ].map((skill, index) => (
          <div key={index} className="rounded-lg p-6 shadow-md hover:shadow-xl transition duration-300"
            style={{ background: card(theme) }}>
            <h2 className="text-xl font-semibold mb-3" style={{ color: t.heading }}>{skill.name}</h2>
            <div className="w-full rounded-full h-4"
              style={{ background: theme === 'dark' ? '#374151' : '#ede9fe' }}>
              <div className="bg-yellow-400 h-4 rounded-full transition-all duration-500"
                style={{ width: `${skill.level}%` }} />
            </div>
            <p className="text-sm mt-1" style={{ color: t.muted }}>{skill.level}%</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills