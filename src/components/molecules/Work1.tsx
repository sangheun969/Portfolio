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
import NaegiftModal from "../atoms/NaegiftModal";

const Work1: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWebButtonClick = () => {
    window.open("https://nae-gift.com", "_blank");
  };
  const handleWebButtonClick2 = () => {
    window.open("https://github.com/sangheun969/nae-gift", "_blank");
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
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
      <div className="w-full h-full  p-3 flex flex-row justify-center border rounded-lg gap-4">
        <div className="flex flex-col gap-10">
          <p className="text-[30px] font-['Tenada']">Naegift</p>
          <div>
            <ul className="flex flex-row w-full">
              <li className="p-1 border">
                <img src={ReactIcon} alt="" className="w-[30px] h-[30px]" />
              </li>
              <li className="p-1 border">
                <img src={RecoilIcon} alt="" className="w-[30px] h-[30px]" />
              </li>
              <li className="p-1 border">
                <img src={Ethericon} alt="" className="w-[30px] h-[30px]" />
              </li>
              <li className="p-1 border">
                <img src={TailwindIcon} alt="" className="w-[30px] h-[30px]" />
              </li>
              <li className="p-1 border">
                <img src={S3Icon} alt="" className="w-[30px] h-[30px]" />
              </li>
              <li className="p-1 border">
                <img src={AWSICon} alt="" className="w-[30px] h-[30px]" />
              </li>
            </ul>
          </div>
          <ul className="font-['Tenada'] text-[15px]">
            <li>내기프트 선물 및 판매 등록 서비스</li>
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
        <div
          className="relative w-[600px] h-[300px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img src={Naegift1} alt="" className="w-full h-full object-cover" />
          {isHovered && (
            <div
              className={`absolute inset-0 bg-black flex items-center justify-center ${
                isHovered ? "bg-opacity-50 " : "bg-opacity-0"
              }`}
            >
              <button
                className="bg-white text-black py-2 px-4 rounded"
                onClick={handleModalOpen}
              >
                Read More
              </button>
            </div>
          )}
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <NaegiftModal onClose={handleModalClose} />
        </div>
      )}
    </motion.div>
  );
};

export default Work1;
