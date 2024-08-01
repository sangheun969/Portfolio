import React from "react";
import {
  ReactIcon,
  RecoilIcon,
  JsIcon2,
  TypeScriptIcon,
  ReactQIcon,
  NodeJSIcon,
  TailwindIcon,
  WebSocketIcon,
  SolidityIcon,
  NextIcon,
  MySQLIcon,
  AWSS3Icon,
  GithubActionsIcon,
  ExpressJSIcon,
} from "../../image/";
import { motion } from "framer-motion";

const Skill: React.FC = () => {
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
      <div className="w-full h-full py-[150px]">
        <div className="">
          <p className="text-center font-bold text-[50px] ">Skills</p>
        </div>
        <div className="flex flex-col mx-auto justify-center w-[70%] h-full pt-[80px] gap-8">
          <div className="relative w-full h-full border-2">
            <div className="absolute top-[-20px] bg-white px-2 text-xl">
              <p>Programing Languages</p>
            </div>
            <div className="flex flex-row gap-3 py-3">
              <span className="border w-[60px] h-[60px] rounded-lg hover:scale-105 duration-200">
                <img src={JsIcon2} alt="" className="" />
              </span>
              <span className="border w-[60px] h-[60px] rounded-lg hover:scale-105 duration-200">
                <img src={TypeScriptIcon} alt="" className="" />
              </span>
            </div>
          </div>
          <div className="relative w-full h-full border-2">
            <div className="absolute top-[-20px] bg-white px-2 text-xl">
              <p>Framework/ Library</p>
            </div>
            <div className="flex flex-row gap-3 py-3">
              <span className="border w-[60px] h-[60px] rounded-lg hover:scale-105 duration-200">
                <img src={ReactIcon} alt="" />
              </span>
              <span className="border w-[60px] h-[60px] rounded-lg hover:scale-105 duration-200">
                <img src={ReactQIcon} alt="" />
              </span>
              <span className="border w-[60px] h-[60px] rounded-lg hover:scale-105 duration-200">
                <img src={RecoilIcon} alt="" />
              </span>
              <span className="border w-[60px] h-[60px] rounded-lg hover:scale-105 duration-200">
                <img src={NodeJSIcon} alt="" />
              </span>
              <span className="border w-[60px] h-[60px] rounded-lg hover:scale-105 duration-200">
                <img src={ExpressJSIcon} alt="" />
              </span>
              <span className="border w-[60px] h-[60px] rounded-lg hover:scale-105 duration-200">
                <img src={WebSocketIcon} alt="" />
              </span>
              <span className="border w-[60px] h-[60px] rounded-lg hover:scale-105 duration-200">
                <img src={TailwindIcon} alt="" />
              </span>
              <span className="border w-[60px] h-[60px] rounded-lg hover:scale-105 duration-200">
                <img src={SolidityIcon} alt="" />
              </span>
              <span className="border w-[60px] h-[60px] rounded-lg hover:scale-105 duration-200">
                <img src={NextIcon} alt="" />
              </span>
            </div>
          </div>
          <div className="relative w-full h-full border-2">
            <div className="absolute top-[-20px] bg-white px-2 text-xl">
              <p>Server</p>
            </div>
            <div className="flex flex-row gap-3 py-3">
              <span className="border w-[60px] h-[60px] rounded-lg hover:scale-105 duration-200">
                <img src={MySQLIcon} alt="" />
              </span>
            </div>
          </div>
          <div className="relative w-full h-full border-2">
            <div className="absolute top-[-20px] bg-white px-2 text-xl">
              <p>Tooling/ DevOps</p>
            </div>
            <div className="flex flex-row gap-3 py-3">
              <span className="border w-[60px] h-[60px] rounded-lg hover:scale-105 duration-200">
                <img src={AWSS3Icon} alt="" />
              </span>
              <span className="border w-[60px] h-[60px] rounded-lg hover:scale-105 duration-200">
                <img src={GithubActionsIcon} alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skill;
