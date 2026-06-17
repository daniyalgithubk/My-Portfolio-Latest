import React from "react"
import { card, text } from '../../theme/backgrounds'

const ProjectCard = ({ name, technology, img, theme }) => {
  const t = text(theme)

  return (
   <div className="border-2 h-60 w-60 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 overflow-hidden"
  style={{ 
    background: card(theme),
    borderColor: theme === "dark" ? "#facc15" : "#a78bfa"
  }}>
      <div className="p-4 flex flex-col items-start">
        <h1 className="text-lg font-bold mb-2" style={{ color: t.heading }}>{name}</h1>
        <h2 className="text-sm mb-2" style={{ color: t.muted }}>{technology}</h2>
        <img src={img} alt="Project image" className="w-full h-32 object-cover rounded-md" />
      </div>
    </div>
  )
}

export default ProjectCard