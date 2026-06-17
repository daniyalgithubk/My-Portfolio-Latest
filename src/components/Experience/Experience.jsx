import React from 'react';
import { useSelector } from 'react-redux'
import { pageBg, text, card } from '../../theme/backgrounds'

const Experience = () => {
  const theme = useSelector((state) => state.theme.theme)
  const t = text(theme)

  return (
    <div className="min-h-screen p-8 md:p-16 transition-colors duration-300"
      style={{ background: pageBg(theme) }}>
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: t.heading }}>
        My Experience
      </h1>
      <div className="relative pl-8 md:pl-12 space-y-12"
        style={{ borderLeft: `4px solid ${theme ===  "dark" ? "#facc15" : "#a78bfa"}` }}>
        {[
          {
            title: "Deister Software",
            position: "Application developer (02/01/2025 - Present)",
            description: [
              "Engineered 5+ enterprise-grade ERP, CRM, HR and Project Management applications using Airtool Studio, reducing manual operational workload by 30%.",
              "Designed and implemented automated business workflows using JavaScript, SQL and XML, streamlining cross-departmental processes and improving data accuracy.",
              "Collaborated with cross-functional teams of 8+ members through full SDLC including requirements analysis, deployment and post-release maintenance.",
            ],
            Technologies: "Airtool Studio, JavaScript, SQL, XML, Agile, SDLC"
          },
          {
            title: "MFSYS PVT LTD",
            position: "React js developer (01/06/2024 - 31/12/2024)",
            description: [
              "Developed and maintained 3+ scalable, production-level React.js applications including Carbon Cap, leveraging reusable components, React Hooks, and modular UI architecture to improve code reusability by 40%.",
              "Collaborated with UI/UX designers and backend developers in an Agile/Scrum environment to deliver responsive, user-friendly interfaces, reducing UI bug reports by 25%.",
              "Integrated 10+ RESTful APIs and managed global application state using Redux and Zustand, ensuring seamless data flow and real-time user interactions.",
              "Optimized frontend performance through lazy loading, code splitting and component memoization, improving page load speed by 35% and overall application stability.",
            ],
            Technologies: "React.js, Next.js, TypeScript, JavaScript (ES6+), Redux, Zustand, REST APIs, HTML5, CSS3, Tailwind CSS, Git"
          },
          {
            title: "HCI Expert PVT LTD",
            position: "React js developer (01/03/2024 - 31/05/2024)",
            description: [
              "Built 15+ reusable React.js components and responsive user interfaces, contributing to a 20% reduction in development time for recurring UI patterns.",
              "Integrated REST APIs to connect frontend interfaces with backend services, ensuring accurate and real-time data rendering.",
              "Collaborated within Agile development teams using Git for version control, participating in sprint planning and daily standups.",
            ],
            Technologies: "React.js, JavaScript (ES6+), Component-based Architecture, HTML5, CSS3, REST APIs, Git"
          },
        ].map((edu, index) => (
          <div key={index} className="relative rounded-lg p-6 md:p-8 shadow-md hover:shadow-xl transition duration-300"
            style={{ background: card(theme) }}>
            <div className="absolute -left-7 top-6 w-5 h-5 bg-yellow-400 rounded-full border-2"
              style={{  background: theme === "dark" ? "#facc15" : "#a78bfa",
                        borderColor: theme === 'dark' ? '#0f0221' : '#f3f0ff'  }} />

            <h2 className="text-xl md:text-2xl font-semibold mb-1" style={{ color: t.heading }}>
              {edu.title}
            </h2>
            <p className="font-medium mb-3" style={{ color: t.body }}>
              {edu.position}
            </p>

            {/* ---- Bullet points ---- */}
            <ul style={{ marginBottom: "12px" }}>
              {edu.description.map((point, i) => (
                <li key={i} style={{
                  color: t.muted,
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "8px",
                  marginBottom: "8px",
                  lineHeight: "1.7",
                }}>
                  <span style={{ color: theme === "dark" ? "#facc15" : "#a78bfa", marginTop: "5px", flexShrink: 0 }}>▹</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* ---- Technologies ---- */}
            <p className="text-sm mt-2" style={{ color: t.muted }}>
              <span style={{  color: theme === "dark" ? "#facc15" : "#a78bfa",  fontWeight: "600", fontSize: "16px"  }}>Technologies: </span>
              {edu.Technologies}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience;