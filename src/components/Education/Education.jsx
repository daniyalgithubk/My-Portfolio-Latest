import React from 'react'

const Education = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8 md:p-16">
      {/* Page Header */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">
        My Education
      </h1>

      {/* Timeline Container */}
      <div className="relative border-l-4 border-gray-300 dark:border-gray-600 pl-8 md:pl-12 space-y-12">
        
        {/* Timeline Item */}
        {[
          {
            title: "Bachelors in Software Engineering",
            school: "COMSATS University (2019 - 2023)",
            description: "Focus: Software Engineering"
          },
          {
            title: "Intermediate",
            school: "Punjab College Blue Area Islamabad (2017 - 2019)",
            description: "Courses: Computer, Mathematics, Physics, English, Urdu, Pak Studies"
          },
          {
            title: "Matriculation",
            school: "OPF Boys College (2015 - 2017)",
            description: "Courses: Computer, Mathematics, Physics, Chemistry, English, Urdu, Pak Studies"
          },
          {
            title: "Middle School",
            school: "OPF Boys College (2012 - 2015)",
            description: "Courses: Computer, Mathematics, Science, English, Urdu, Pak Studies"
          },
          {
            title: "Primary School",
            school: "The Educators School (2006 - 2012)",
            description: "Courses: Computer, Mathematics, Science, English, Urdu, Pak Studies"
          }
        ].map((edu, index) => (
          <div
            key={index}
            className="relative bg-white dark:bg-gray-800 rounded-lg p-6 md:p-8 shadow-md hover:shadow-xl transition duration-300"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-7 top-6 w-5 h-5 bg-yellow-400 rounded-full border-2 border-white dark:border-gray-800"></div>

            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              {edu.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">
              {edu.school}
            </p>
            <p className="text-gray-600 dark:text-gray-400">{edu.description}</p>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Education
