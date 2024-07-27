import React from "react";
import Work1 from "../molecules/Work1";
import Work2 from "../molecules/Work2";
import Work3 from "../molecules/Work3";
const ProjectWork: React.FC = () => {
  return (
    <div className="flex flex-col w-full  ">
      <p className="text-center py-[150px] font-bold text-[50px] font-['Tenada']">
        Project
      </p>
      <div className="flex flex-col justify-around w-full h-full gap-[150px] items-center  ">
        <Work1 />
        <Work2 />
        <Work3 />
      </div>
    </div>
  );
};

export default ProjectWork;
