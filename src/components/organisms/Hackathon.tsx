import React, { useEffect, useState } from "react";
import Button from "../atoms/Button";
import ImageSlide from "../molecules/ImageSlide";
import { Link } from "react-router-dom";
const Hackathon: React.FC = () => {
  const [contestProject, setContestProject] = useState(false);
  const [targetedProject, setTargetedProject] = useState(false);
  const [resultProject, setResultProject] = useState(false);

  useEffect(() => {
    toggleDescription1();
  }, []);

  const toggleDescription1 = () => {
    setContestProject(true);
    setTargetedProject(false);
    setResultProject(false);
  };
  const toggleDescription2 = () => {
    setContestProject(false);
    setTargetedProject(true);
    setResultProject(false);
  };
  const toggleDescription3 = () => {
    setContestProject(false);
    setTargetedProject(false);
    setResultProject(true);
  };

  return (
    <div className="flex flex-row justify-between ">
      <ImageSlide />
      <div className="w-[400px]">
        <div className="py-3  flex flex-row justify-around">
          <button className="border px-4 py-2" onClick={toggleDescription1}>
            참가 대회
          </button>
          <button className="border px-4 py-2" onClick={toggleDescription2}>
            프로젝트 목적
          </button>
          <button className="border px-4 py-2" onClick={toggleDescription3}>
            역할&결과
          </button>
        </div>
        {contestProject && (
          <div>
            <span className="font-NOTO text-2xl">
              <ul>
                <li>
                  <p>팀명: Authrium</p>
                </li>
                <li>
                  <p>닉네임: Asher Park(박상현)</p>
                </li>
                <li>
                  <p>2024/03/29~2024/03/31</p>
                </li>
                <li className="flex flex-row gap-4">
                  <Button variant="icontBtn" size="md" label="Web Page" />
                  <Button variant="icontBtn" size="md" label="GitHub" />
                </li>
                <li></li>
              </ul>
            </span>
          </div>
        )}
        {targetedProject && (
          <span className="font-NOTO text-lg">
            분산형 식별자(DID), 검증 가능한 자격 증명(VC) 및 스마트 계약(SC)의
            최첨단 트리오를 활용 판매자(예: 상점 주인), 선물 제공자(선물을
            구매하려는 개인), 선물 받는 사람(선물 수령인)의 세 가지 주요 역할
            간에 신뢰 할 수 있고 원활한 선물 교환을 하도록 설계. 백엔드 서버를
            중심으로 사용하여 판매자가 발행한 검증 가능한 선물 자격 증명이
            선물을 받은 사람에게 전달되며, 그 후 자 격 증명이 청구되면 선물을
            받은 사람의 MetaMask Snap에 저장됩니다. 선물을 준 사람과 선물을 받은
            사람 모두를 보호하도록 설계된 에스크로 스마트 계약을 사용하는
            것입니다
          </span>
        )}
        {resultProject && (
          <div>
            <ul>
              <li>
                NextJS 와 Dapp Scraffold-ETH 분산 응용 프로그램 프레임 워크를
                이용하여 프론트엔드와 백엔드를 구축 및 스마트 컨트랙트 상호 자용
                확인
              </li>
              <li>
                NextJS 아토믹 스타일의 components 구축 & TypeScript, TailwindCSS
                CVA, CLSX 세팅
              </li>
              <li>
                사용자 지갑과 구독을 관리하는 커스텀 Hook을 이용하여 지갑 연결.
              </li>
              <li>
                Recoil atom을 사용하여 정의된 전역 상태 구축, 지갑 주소와 해당
                지갑이 구독되었는지 여부를 포함하는 객체로 초기화
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hackathon;
