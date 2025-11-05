import React, { useState } from "react";
import { Stacker1 } from "../../image/index";
import Button from "../atoms/Button";
import { motion } from "framer-motion";
import {
  Naegift1,
  ReactIcon,
  RecoilIcon,
  TailwindIcon,
  NodeJSIcon,
  DownIcon,
  UpIcon,
  Dealer,
  Vite,
} from "../../image/index";

const Work2: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  const handleWebButtonClick2 = () => {
    window.open("https://github.com/sangheun969/Isekai_Dealer", "_blank");
  };

  const handleToggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };

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
      <div className="h-full flex flex-row justify-center rounded-lg gap-24 mobile:flex-col">
        <div className="flex flex-col w-[400px]">
          <p className="text-[30px] font-['Tenada'] text-[#9d85f1] font-bold">
            #STACKER-LABS
          </p>
          <div className="border-b-2 py-4">
            <ul className="flex flex-row w-full gap-2">
              <li className="p-1 border rounded-lg bg-white">
                <img src={ReactIcon} alt="" className="w-[30px] h-[30px] " />
              </li>
              <li className="p-1 border rounded-lg bg-white">
                <img src={Vite} alt="" className="w-[30px] h-[30px] " />
              </li>
              <li className="p-1 border rounded-lg bg-white">
                <img src={TailwindIcon} alt="" className="w-[30px] h-[30px]" />
              </li>
              <li className="p-1 border rounded-lg bg-white">
                <p>Phaser3</p>
              </li>
              <li className="p-1 border rounded-lg bg-white">
                <p>Electron</p>
              </li>
              <li className="p-1 border rounded-lg bg-white">
                <img src={NodeJSIcon} alt="" className="w-[30px] h-[30px]" />
              </li>
            </ul>
          </div>
          <div className="pt-4 flex flex-row justify-between">
            <button className="w-[15px]" onClick={handleToggleContent}>
              <img src={!isContentVisible ? UpIcon : DownIcon} alt="" />
            </button>
          </div>
          {!isContentVisible && (
            <div className="gap-6">
              <div className="font-['Tenada'] py-3 flex flex-col justify-between text-sm gap-3">
                <ul>
                  <li className="font-bold text-xl">프로젝트 세팅</li>
                  <li className="p-1">
                    React + Vite + TypeScript로 프론트엔드 환경 구축
                  </li>
                  <li className="p-1">
                    Phaser로 게임 로직 및 씬(Scene) 관리 구현
                  </li>
                  <li className="p-1">
                    Electron을 통해 데스크탑 앱 형태로 빌드
                  </li>
                </ul>
                <ul>
                  <li className="font-bold text-xl">주요 특징</li>
                  <li className="p-1">
                    React와 Phaser를 통합하여 웹·데스크탑 모두 대응 가능한
                    하이브리드 구조 구현 Electron 빌드로 Steam 배포를 목표로
                    하는 데스크탑 앱화 게임 데이터의 로컬 영구 저장 및 API 기반
                    상태 관리 구조 확립
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
        <div>
          <img
            src={Dealer}
            alt=""
            className="object-cover w-[500px] h-[500px] rounded-xl border mobile:w-[300px] mobile:h-[300px]"
          />
          {/* {isHovered && (
            <div className="absolute h-[500px] mobile:w-[300px] mobile:h-[300px] inset-0 bg-white flex items-center justify-center">
              <Button
                variant="icontBtn"
                size="md"
                label="Web"
                onClick={handleWebButtonClick}
              />
            </div>
          )} */}
          <div className="mt-10">
            <Button
              variant="sendBtn1"
              size="md"
              label="GitHub"
              onClick={handleWebButtonClick2}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work2;
