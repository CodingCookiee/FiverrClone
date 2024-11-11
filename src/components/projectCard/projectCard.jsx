import React from "react";


function ProjectCard({ card }) {
  return (
    <div className="projectCard w-[300px] h-[300px] rounded-[5px] overflow-hidden cursor-pointer border border-solid border-[rgb(225, 225, 225)]">
      <img src={card.img} alt="" className="w-full h-3/4 object-cover" />
      <div className="info flex items-center gap-5 p-3">
        <img src={card.pp} alt="" className="w-[40px] h-[40px] rounded-[50%] object-cover"/>
        <div className="texts text-sm ">
          <h2 className="text-sm font-medium">{card.cat}</h2>
          <span className="font-light text-sm">{card.username}</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;