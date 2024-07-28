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

const Skill: React.FC = () => {
  return (
    <div className="w-full py-[150px] ">
      <div className="">
        <p className="text-center font-bold text-[50px] ">Skills</p>
      </div>
      <div className="flex flex-col mx-auto justify-center w-[70%] h-full pt-[80px] gap-4 border rounded-lg">
        <div className="border">
          <p>Programing Languages</p>
        </div>
        <div className="flex flex-row">
          <span className="border w-[60px] h-[60px]">
            <img src={JsIcon2} alt="" className="" />
          </span>
          <span className="border w-[60px] h-[60px]">
            <img src={TypeScriptIcon} alt="" className="" />
          </span>
        </div>
        <div className="border">
          <p>Framework/ Library</p>
        </div>
        <div className="flex flex-row">
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
            <img src={ExpressJSIcon} alt="" />
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
        </div>
        <div className="border">
          <p>Server</p>
        </div>
        <div className="flex flex-row">
          <span className="border w-[60px] h-[60px]">
            <img src={MySQLIcon} alt="" />
          </span>
        </div>
        <div className="border">
          <p>Tooling/ DevOps</p>
        </div>
        <div className="flex flex-row">
          <span className="border w-[60px] h-[60px]">
            <img src={AWSS3Icon} alt="" />
          </span>
          <span className="border w-[60px] h-[60px]">
            <img src={GithubActionsIcon} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skill;
