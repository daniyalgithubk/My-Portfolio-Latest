import React from "react";
import ProjectsData from '../../../public/Data/ProjectsData'

const ProjectCard = ({id , name , technology, img}) => {
  return (
    <div className=" border-yellow-400 border-2 h-60 w-60 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 overflow-hidden">
      <div className="p-4 flex flex-col items-start">
        <h1 className="text-lg font-bold mb-2"> {name}</h1>
        <h2 className="text-sm text-gray-500 mb-2">{technology}</h2>
        <img
          src={img}
          alt="Project image"
          className="w-full h-32 object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
