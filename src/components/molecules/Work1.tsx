import React, { useEffect, useState } from "react";
import {
  Naegift1,
  ReactIcon,
  RecoilIcon,
  Ethericon,
  TailwindIcon,
  S3Icon,
  AWSICon,
  DownIcon,
  UpIcon,
} from "../../image/index";
import Button from "../atoms/Button";
import { motion } from "framer-motion";

const Work1: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  const handleWebButtonClick = () => {
    window.open("https://nae-gift.com", "_blank");
  };
  const handleWebButtonClick2 = () => {
    window.open("https://github.com/sangheun969/nae-gift", "_blank");
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
            #Naegift
          </p>
          <div className="border-b-2 py-4">
            <ul className="flex flex-row w-full gap-2">
              <li className="p-1 border rounded-lg bg-white">
                <img src={ReactIcon} alt="" className="w-[30px] h-[30px]" />
              </li>
              <li className="p-1 border rounded-lg bg-white">
                <img src={RecoilIcon} alt="" className="w-[30px] h-[30px]" />
              </li>
              <li className="p-1 border rounded-lg bg-white">
                <img src={Ethericon} alt="" className="w-[30px] h-[30px]" />
              </li>
              <li className="p-1 border rounded-lg bg-white">
                <img src={TailwindIcon} alt="" className="w-[30px] h-[30px]" />
              </li>
              <li className="p-1 border rounded-lg bg-white">
                <img src={S3Icon} alt="" className="w-[30px] h-[30px]" />
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
              <div className="font-['Tenada'] flex flex-col justify-between text-sm gap-3 py-4">
                <ul className="">
                  <li className="font-bold text-xl ">프로젝트 세팅</li>
                  <li className="p-1">
                    React, Recoil, Typescript, Tailwind 초기 프로젝트 세팅
                  </li>
                </ul>
                <ul>
                  <li className="font-bold text-xl">상품 관리</li>
                  <li className="p-1">
                    해당 프로젝트의 핵심 도메인인 상품 관리, 판매, 구매를 구현
                  </li>
                </ul>
                <ul>
                  <li className="font-bold text-xl">구매 내역</li>
                  <li className="p-1">사용자의 구매한 상품 목록을 구현</li>
                </ul>
                <ul>
                  <li className="font-bold text-xl">
                    이더리움 네트워크 상호작용
                  </li>
                  <li className="p-1">
                    상품 관련 NFT, DID를 이더리움 네트워크 요청과 응답을 담당
                  </li>
                </ul>
                <ul>
                  <li className="font-bold text-xl">배포</li>
                  <li className="p-1">Front Github Actions를 활용한 CI 구축</li>
                </ul>
              </div>
              <div>
                <ul className="font-['Tenada'] w-[400px] py-3 flex flex-col justify-between text-xs gap-5">
                  <li>
                    지갑 주소 연동: 지갑 주소를 기반으로 API를 호출해 해당
                    사용자의 지갑 주소를 가져오고 이를 통해 사용자가 소유한
                    상품을 조회하면서 데이터를 안전하게 관리하는 법을 배울 수가
                    있었습니다.
                  </li>
                  <li>
                    배포: Github Actions를 통해 CI/CD를 처음으로 구축하여, 이를
                    통해 팀원들과 빠른 피드백과 작업의 효율이 증가했다는 것을
                    느낄 수 있었습니다.
                  </li>
                  <li>
                    사용자 경험 개선: UX를 개선하기 위해 지갑 연결 실패 시
                    사용자에게 더 명확한 오류 메시지 및 해결 방법 같은 사용자
                    피드백 요소를 추가할 계획입니다. 또한, 더 직관적인
                    인터페이스를 제공하기 위해 UI를 개선할 예정입니다.
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={Naegift1}
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

export default Work1;
