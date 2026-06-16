import React from 'react'
import { useSelector } from 'react-redux'
import { pageBg } from '../../theme/backgrounds'
import ProjectCard from './ProjectCard'
import ProjectsData from '../../../public/Data/ProjectsData'

const Projects = () => {
  const theme = useSelector((state) => state.theme.theme)

  return (
    <div className="projects-grid min-h-screen p-10 transition-colors duration-300"
      style={{ background: pageBg(theme) }}>
      {ProjectsData.map((data, index) => (
        <ProjectCard key={index} name={data.name} technology={data.technology} img={data.img} theme={theme} />
      ))}
    </div>
  )
}

export default Projects