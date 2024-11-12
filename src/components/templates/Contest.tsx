import React from "react";
import Hackathon from "../organisms/Hackathon";
import { motion } from "framer-motion";

const Contest: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#15181B]">
      <div className="flex flex-col mx-auto mobile:w-full">
        <div className="w-full py-[110px]">
          <p className="text-5xl font-bold font-['Tenada'] text-white">
            Contest
          </p>
        </div>
        <div className="">
          <Hackathon />
        </div>
      </div>
    </div>
  );
};

export default Contest;
