import React from 'react'
import ProjectCard from './ProjectCard'
import ProjectsData from '../../../public/Data/ProjectsData'

const Projects = () => {
  return (
   <div className="h-screen grid grid-cols-3 gap-12 p-22 mb-4">
    {
      ProjectsData.map((data) => {
        return <ProjectCard name={data.name} technology={data.technology} img={data.img}  />
      })
    }
      
       {/* <ProjectCard/>
        <ProjectCard/>
         <ProjectCard/>
         <ProjectCard/>
       <ProjectCard/>
        <ProjectCard/>
         <ProjectCard/>
         <ProjectCard/>
       <ProjectCard/>
        <ProjectCard/>
         <ProjectCard/> */}
      
    </div>
  )
}

export default Projects
