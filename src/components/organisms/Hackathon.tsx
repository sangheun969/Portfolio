import React, { useEffect, useState } from "react";
import Button from "../atoms/Button";
import ImageSlide from "../molecules/ImageSlide";
import { motion } from "framer-motion";

const Hackathon: React.FC = () => {
  const [contestProject, setContestProject] = useState(false);
  const [targetedProject, setTargetedProject] = useState(false);
  const [resultProject, setResultProject] = useState(false);

  const handleWebButtonClick = () => {
    window.open("https://devfolio.co/projects/naegift-208b", "_blank");
  };
  const handleWebButtonClick2 = () => {
    window.open("https://github.com/naegift/did_project", "_blank");
  };

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
      <div className="w-full h-full]">
        <div className="flex flex-row mobile:flex-col">
          <div>
            <ImageSlide />
          </div>
          <div className="w-[700px] h-full mobile:w-[350px]">
            <span className="w-[590px] font-NOTO flex flex-col mx-auto mobile:w-[320px]">
              <div className="font-extrabold text-white text-[60px] mobile:text-[40px] py-3 font-NOTO bg-black bg-gradient-to-r from-black to-gray-500">
                <div className="">
                  <p>ETH SEOUL</p>
                </div>
                <p className="">HACKATON 2024</p>
              </div>
              <ul className="flex flex-col py-7 gap-2 font-['Tenada'] text-white mobile:py-5">
                <li className="flex flex-row gap-4">
                  <div className="border-2 rounded-2xl px-2 text-base">
                    <p className="">팀명</p>
                  </div>
                  <p className="text-base">Naegift</p>
                </li>
                <li className="flex flex-row gap-1">
                  <div className="border-2 rounded-2xl px-2 text-base">
                    <p>닉네임</p>
                  </div>
                  <p className="text-base">Asher Park(박상현)</p>
                </li>
                <li className="flex flex-row gap-4">
                  <div className="border-2 rounded-2xl px-2 text-base">
                    <p>기간</p>
                  </div>
                  <p className="text-base">2024/03/29~2024/03/31</p>
                </li>
                <li className="text-base flex flex-col gap-3 mobile:w-full mobile:text-[10px]">
                  <h1>
                    이 행사는 이더리움 생태계의 발전을 위한 아이디어를 공유하고
                    함께 발전시키는 동적인 플랫폼으로, 블록체인 분야의
                    권위자들이 연사로 참여하는 귀중한 기회였습니다. 특히,
                    Vitalik Buterin의 발표는 이더리움의 비전과 미래 방향과
                    블록체인 기술의 발전 가능성을 볼 수 있었습니다.
                  </h1>
                  <h1>
                    가장 인상 깊었던 점 중 하나는 바로 행사 전반에 걸쳐 형성된
                    활발한 토론 문화였습니다. 다양한 배경을 가진 참가자들이 모여
                    서로 다른 관점과 아이디어를 자유롭게 교환하는 모습을 보며
                    각자의 전문성을 바탕으로 심도 깊은 논의가 이루어졌습니다.
                    ETH Seoul 해커톤은 단순한 기술 경진대회를 넘어서, 블록체인
                    기술의 미래를 함께 고민하고 발전시킬 수 있는 중요한
                    장이었습니다.
                  </h1>
                </li>
                <li className="mt-5 flex flex-row gap-4">
                  <Button
                    variant="sendBtn1"
                    size="md"
                    label="Web Page"
                    onClick={handleWebButtonClick}
                  />
                  <Button
                    variant="sendBtn1"
                    size="md"
                    label="GitHub"
                    onClick={handleWebButtonClick2}
                  />
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hackathon;
