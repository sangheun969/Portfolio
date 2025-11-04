import React, { useState } from "react";
import {
  Naegift1,
  ReactIcon,
  RecoilIcon,
  TailwindIcon,
  GithubActionsIcon,
  AWSICon,
  DownIcon,
  MediaWeb,
  UpIcon,
} from "../../image/index";
import Button from "../atoms/Button";
import { motion } from "framer-motion";

const Work3: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  const handleWebButtonClick = () => {
    window.open("https://mediaroad.net/", "_blank");
  };
  const handleWebButtonClick2 = () => {
    window.open(
      "https://github.com/sangheun969/MediaRoadCom/tree/main/company",
      "_blank"
    );
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
            #MediaRoad
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
          {/* <ul className="font-['Tenada']">
            <li>(주)MEDIA ROAD 홍보 WEB 페이지</li>
          </ul> */}
          <div className="pt-4 flex flex-row justify-between">
            <button className="w-[15px]" onClick={handleToggleContent}>
              <img src={!isContentVisible ? UpIcon : DownIcon} alt="" />
            </button>
          </div>
          {!isContentVisible && (
            <div className="gap-6">
              <div className="font-['Tenada'] flex flex-col justify-between text-sm gap-3 py-4">
                <ul>
                  <li className="font-bold text-xl">프로젝트 세팅</li>
                  <li className="p-1">React JS, Tailwind 초기 프로젝트 세팅</li>
                </ul>
                <ul>
                  <li className="font-bold text-xl">홍보 게시물</li>
                  <li className="p-1">(주)메디아 로드 홍보물 사이트</li>
                </ul>
                <ul>
                  {/* <li className="font-bold text-xl">구매 내역</li>
                  <li className="p-1">사용자의 구매한 상품 목록을 구현</li>
                </ul>
                <ul>
                  <li className="font-bold text-xl">
                    이더리움 네트워크 상호작용
                  </li>
                  <li className="p-1">
                    상품 관련 NFT, DID를 이더리움 네트워크 요청과 응답을 담당
                  </li> */}
                </ul>
              </div>
              <div>
                <ul className="font-['Tenada'] w-[400px] py-3 flex flex-col justify-between text-xs gap-5">
                  <li>
                    자동 재생 (autoPlay): 플레이어가 끝났을 때 다음 영상 자동
                    재생
                  </li>
                  <li>
                    Control UI 커스텀: 재생, 일시정지, 뒤로가기 등 UI 커스텀
                    가능 범위 추가
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
            src={MediaWeb}
            alt=""
            className="object-cover w-[500px] h-[500px] rounded-xl border mobile:w-[300px] mobile:h-[300px]"
          />
          {isHovered && (
            <div
              className={`absolute h-[500px] mobile:w-[300px] mobile:h-[300px] inset-0 bg-white flex items-center justify-center ${
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

export default Work3;
