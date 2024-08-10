import React from "react";
import Work1 from "../molecules/Work1";
import Work2 from "../molecules/Work2";
import Work3 from "../molecules/Work3";
const ProjectWork: React.FC = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center py-[120px] bg-[#18191F]">
      <div className="py-[80px]">
        <p className="text-center font-bold text-[50px] font-['Tenada'] text-white">
          Project
        </p>
      </div>
      <div className="flex flex-col justify-around w-[1050px] h-full gap-[150px] items-center  ">
        <Work1 />
        <Work2 />
        <Work3 />
      </div>
    </div>
  );
};

export default ProjectWork;
