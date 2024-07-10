import React, { useEffect, useState } from "react";
import {
  Naegift1,
  ReactIcon,
  RecoilIcon,
  Ethericon,
  TailwindIcon,
  S3Icon,
  AWSICon,
} from "../../image/index";
import Button from "../atoms/Button";
import { motion } from "framer-motion";

const Work1: React.FC = () => {
  const [majorTask, setMajorTask] = useState(false);
  const [projectRetrospection, setProjectRetrospection] = useState(false);

  useEffect(() => {
    toggleDescription1();
  }, []);

  const toggleDescription1 = () => {
    setMajorTask(true);
    setProjectRetrospection(false);
  };

  const toggleDescription2 = () => {
    setProjectRetrospection(true);
    setMajorTask(false);
  };

  const handleWebButtonClick = () => {
    window.open("https://nae-gift.com", "_blank");
  };
  const handleWebButtonClick2 = () => {
    window.open("https://github.com/sangheun969/nae-gift", "_blank");
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
      <div className="w-full h-full flex flex-row justify-center ">
        <div className="flex flex-col gap-4">
          <p className="text-[50px] font-['Tenada']">Naegift</p>
          <div>
            <ul className="flex flex-row w-full">
              <li className="p-1 border">
                <img src={ReactIcon} alt="" className="w-[30px] h-[30px] " />
              </li>
              <li className="p-1 border">
                <img src={RecoilIcon} alt="" className="w-[30px] h-[30px] " />
              </li>
              <li className="p-1 border">
                <img src={Ethericon} alt="" className="w-[30px] h-[30px] " />
              </li>
              <li className="p-1 border">
                <img src={TailwindIcon} alt="" className="w-[30px] h-[30px]" />
              </li>
              <li className="p-1 border">
                <img src={S3Icon} alt="" className="w-[30px] h-[30px]" />
              </li>
              <li className="p-1  border">
                <img src={AWSICon} alt="" className="w-[30px] h-[30px]" />
              </li>
            </ul>
          </div>

          <div className="flex flex-row">
            <ul className="flex flex-col justify-center border-r-2">
              <li className="border">
                <button onClick={toggleDescription1}>주요 업무</button>
              </li>
              <li className="border">
                <button onClick={toggleDescription2}>프로젝트 회고</button>
              </li>
              <li></li>
            </ul>
            {majorTask && (
              <ul className="font-['Tenada'] flex flex-col justify-between text-sm gap-3">
                <li>
                  프로젝트 세팅: React,Recoil,Typescript,tailwind 초기 프로젝트
                  세팅
                </li>
                <li>
                  상품 관리: 해당 프로젝트의 핵심 도메인인 상품 관리,
                  판매,구매를 구현
                </li>
                <li>구매 내역: 사용자의 구매한 상품 목록을 구현</li>
                <li>
                  이더리움 네트워크 상호작용: 상품 관련 NFT, DID를 이더리움
                  네트워크 요청과 응답을 담당
                </li>
                <li>배포: Front Github actions 를 활용한 CI 구축</li>
              </ul>
            )}
            {projectRetrospection && (
              <ul className="font-['Tenada'] w-[600px] flex flex-col justify-between text-xs gap-5 ">
                <li>
                  지갑 주소 연동: 지갑 주소를 기반으로 API를 호출해 해당
                  사용자의 지갑 주소를 가져오고 이를 통해 사용자가 소유한 상품을
                  조회하면서 데이터를 안전하게 관리하는 법을 배울 수가
                  있었습니다.
                </li>
                <li>
                  배포: Github Actions를 통해 CI/CD 를 처음으로 구축 하여, 이를
                  통해 팀원들과 빠른 피드백과 작업의 효율이 증가했다는 것을 느낄
                  수 있었습니다.
                </li>
                <li>
                  사용자 경험 개선: UX를 개선하기 위해 지갑 연결 실패 시
                  사용자에게 더 명확한 오류 메시지 및 해결 방법 같은 사용자
                  피드백 요소를 추가할 계획니다. 또한, 더 직관적인 인터페이스를
                  제공하기 위해 UI를 개선할 예정입니다.
                </li>
              </ul>
            )}
          </div>

          <div className="flex flex-row p-8 gap-6">
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
        <div className="w-[600px] h-[300px]">
          <img src={Naegift1} alt="" />
        </div>
      </div>
    </motion.div>
  );
};

export default Work1;
