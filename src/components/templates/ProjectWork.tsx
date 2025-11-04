import React from "react";
import Work1 from "../molecules/Work1";
import Work2 from "../molecules/Work2";
import Work3 from "../molecules/Work3";
const ProjectWork: React.FC = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center py-[120px] bg-[#F4F3ED]">
      <div className="py-[80px]">
        <p className="text-center font-bold text-[50px] font-['Tenada'] mobile:text-[40px]">
          Project
        </p>
      </div>
      <div className="flex flex-col justify-around w-[1050px] h-full gap-[150px] items-center mobile:w-[520px]">
        <Work3 />
        <Work2 />
        <Work1 />
      </div>
    </div>
  );
};

export default ProjectWork;
