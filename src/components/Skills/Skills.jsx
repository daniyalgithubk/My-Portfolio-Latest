import React from 'react'

const Skills = () => {
  return (
    <div className="min-h-screen p-8 md:p-16 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">
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
          { name: "Airtool", level: 70 },
          { name: "Tailwind CSS", level: 80 },
          { name: "Bootstrap", level: 75 },
          { name: "Easy-Peasy", level: 60 },
          { name: "Material UI", level: 70 },
          { name: "Technical Documentation", level: 65 },
          { name: "OOP", level: 85 },
        ].map((skill, index) => (
          <div
            key={index}
            className="relative bg-white dark:bg-gray-800 rounded-lg p-6 md:p-8 shadow-md hover:shadow-xl transition duration-300"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-7 top-6 w-5 h-5 bg-yellow-400 rounded-full border-2 border-white dark:border-gray-800"></div>

            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              {skill.name}
            </h2>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
              <div
                className="bg-yellow-400 h-4 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
