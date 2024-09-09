import React, { useState } from "react";
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
  DownIcon,
  UpIcon,
} from "../../image/index";

const Work2: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  const handleWebButtonClick = () => {
    window.open("https://stacker-labs.vercel.app/", "_blank");
  };

  const handleWebButtonClick2 = () => {
    window.open("https://github.com/sangheun969/projectStacker-Labs", "_blank");
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
      <div className="h-full flex flex-row justify-center rounded-lg gap-24">
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
                <img src={RecoilIcon} alt="" className="w-[30px] h-[30px]" />
              </li>

              <li className="p-1 border rounded-lg bg-white">
                <img src={TailwindIcon} alt="" className="w-[30px] h-[30px]" />
              </li>
              <li className="p-1 border rounded-lg bg-white">
                <img
                  src={GithubActionsIcon}
                  alt=""
                  className="w-[30px] h-[30px]"
                />
              </li>
              <li className="p-1 border rounded-lg bg-white">
                <img src={AWSICon} alt="" className="w-[30px] h-[30px]" />
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
                    전역상태 관리와 CLIENT/SERVER 간의 요청 응답을 확인.
                  </li>
                </ul>
                <ul>
                  <li className="font-bold text-xl">포스팅</li>
                  <li className="p-1">
                    사용자가 게시글의 필드와 에디터를 제공
                  </li>
                </ul>
                <ul>
                  <li className="font-bold text-xl">로그인</li>
                  <li className="p-1">사용자 로그인 여부를 확인</li>
                </ul>
                <ul>
                  <li className="font-bold text-xl">댓글</li>
                  <li className="p-1">
                    게시글에 작성된 댓글들을 작성,수정,대댓글 기능을 추가해
                    페이지별로 로드하여 사용자 경험을 제공.
                  </li>
                </ul>
                <ul>
                  <li className="font-bold text-xl">반응형</li>
                  <li className="p-1">
                    모바일, 노트북, 데스크탑 screens 속성을 사용하여 다양한 화면
                    크기 및 스타일 설정
                  </li>
                </ul>
              </div>
              <div>
                <ul className="font-['Tenada'] w-[400px] py-3  flex flex-col justify-between text-xs gap-5">
                  <li>댓글 기능: 댓글 관리는 부모-자식 관계로 구현</li>
                  <li>
                    반응형: Tailwind CSS를 사용하여 반응형으로 디자인되었으며,
                    모바일, 태블릿, 데스크탑 환경에서 일관된 UI/UX를 제공할 수
                    있었습니다.
                  </li>
                  <li>
                    실시간 UI 업데이트: React 라이브러리가 단방향 데이터 흐름을
                    통해 게시글을 수정하거나 삭제한 결과를 실시간으로 반영되어
                    UI 업데이트의 원리를 깊이 이해할 수 있었습니다.
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
        <div
          className="relative "
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={Stacker1}
            alt=""
            className="object-cover w-[500px] h-[500px] rounded-xl border"
          />
          {isHovered && (
            <div
              className={`absolute h-[500px] inset-0 bg-white flex items-center justify-center ${
                isHovered ? "bg-opacity-50 " : "bg-opacity-0"
              }`}
            >
              <Button
                variant="icontBtn"
                size="md"
                label="Web"
                onClick={handleWebButtonClick}
              />
            </div>
          )}
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
