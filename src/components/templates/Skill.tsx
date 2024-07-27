import React from "react";
import {
  ReactIcon,
  RecoilIcon,
  JavascriptIcon,
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
} from "../../image/";

const Skill: React.FC = () => {
  return (
    <div className="w-full h-[100vh] py-[150px] ">
      <div className="">
        <p className="text-center font-bold text-[50px] ">Skills</p>
      </div>
      <div className="flex flex-row mx-auto justify-center w-[70%] h-full pt-[80px] gap-4">
        <span className="border w-[60px] h-[60px]">
          <img src={JavascriptIcon} alt="" className="" />
        </span>
        <span className="border w-[60px] h-[60px]">
          <img src={TypeScriptIcon} alt="" className="" />
        </span>
        <span className="border w-[60px] h-[60px]">
          <img src={ReactIcon} alt="" />
        </span>
        <span className="border w-[60px] h-[60px]">
          <img src={ReactQIcon} alt="" />
        </span>
        <span className="border w-[60px] h-[60px]">
          <img src={RecoilIcon} alt="" />
        </span>
        <span className="border w-[60px] h-[60px]">
          <img src={NodeJSIcon} alt="" />
        </span>
        <span className="border w-[60px] h-[60px]">
          <img src={WebSocketIcon} alt="" />
        </span>
        <span className="border w-[60px] h-[60px]">
          <img src={TailwindIcon} alt="" />
        </span>
        <span className="border w-[60px] h-[60px]">
          <img src={SolidityIcon} alt="" />
        </span>
        <span className="border w-[60px] h-[60px]">
          <img src={NextIcon} alt="" />
        </span>
        <span className="border w-[60px] h-[60px]">
          <img src={MySQLIcon} alt="" />
        </span>
        <span className="border w-[60px] h-[60px]">
          <img src={AWSS3Icon} alt="" />
        </span>
        <span className="border w-[60px] h-[60px]">
          <img src={GithubActionsIcon} alt="" />
        </span>
      </div>
    </div>
  );
};

export default Skill;
