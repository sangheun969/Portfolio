import React from "react";
import Hackathon from "../organisms/Hackathon";
import { motion } from "framer-motion";

const Contest: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{
        ease: "easeInOut",
        duration: 2,
        y: { duration: 1 },
      }}
    >
      <div className="w-full h-full bg-[#15181B]">
        <div className="w-[1409px] flex flex-col mx-auto ">
          <div className="w-full py-[110px]">
            <p className="text-4xl font-bold font-['Tenada'] text-white">
              Contest
            </p>
          </div>
          <div className="">
            <Hackathon />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contest;
