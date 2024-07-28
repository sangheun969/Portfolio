import React from "react";
import { Stacker1 } from "../../image/index";
import Button from "../atoms/Button";
import { motion } from "framer-motion";
import {
  Naegift1,
  ReactIcon,
  RecoilIcon,
  TailwindIcon,
  GithubActionsIcon,
  AWSICon,
} from "../../image/index";

const handleWebButtonClick = () => {
  window.open("https://stacker-labs.vercel.app/", "_blank");
};

const handleWebButtonClick2 = () => {
  window.open("https://github.com/sangheun969/projectStacker-Labs", "_blank");
};

const Work2: React.FC = () => {
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
      <div className="w-full p-3 flex flex-row justify-center border rounded-lg">
        <div className="flex flex-col gap-10">
          <p className="text-[30px] font-['Tenada']">STACKER-LABS</p>
          <div>
            <ul className="flex flex-row w-full">
              <li className="p-1 border">
                <img src={ReactIcon} alt="" className="w-[30px] h-[30px]" />
              </li>
              <li className="p-1 border">
                <img src={RecoilIcon} alt="" className="w-[30px] h-[30px]" />
              </li>

              <li className="p-1 border">
                <img src={TailwindIcon} alt="" className="w-[30px] h-[30px]" />
              </li>
              <li className="p-1 border">
                <img
                  src={GithubActionsIcon}
                  alt=""
                  className="w-[30px] h-[30px]"
                />
              </li>
              <li className="p-1 border">
                <img src={AWSICon} alt="" className="w-[30px] h-[30px]" />
              </li>
            </ul>
          </div>
          <ul className="font-['Tenada']">
            <li>개발자 커뮤니티 WEB PAGE</li>
          </ul>
          <div className="flex flex-row gap-6">
            <Button
              variant="icontBtn"
              size="md"
              label="GitHub"
              onClick={handleWebButtonClick2}
            />
            <Button
              variant="icontBtn"
              size="md"
              label="Web"
              onClick={handleWebButtonClick}
            />
          </div>
        </div>
        <div className="">
          <img src={Stacker1} alt="" className="w-[600px] h-[300px]" />
        </div>
      </div>
    </motion.div>
  );
};

export default Work2;
