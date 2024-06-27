import React from "react";
import Hackathon from "../organisms/Hackathon";

const Contest: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col ">
      <div className=" w-full  py-[150px]">
        <p className=" text-center font-bold text-[50px] ">Contest</p>
      </div>
      <div className="mx-[auto] w-[80%] h-full   drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] rounded-md hover:scale-105 duration-200 pb-3">
        <p className="font-extrabold text-center text-[60px] py-6 font-NOTO">
          ETH SEOUL HACKATON 2024
        </p>
        <Hackathon />
      </div>
    </div>
  );
};

export default Contest;
