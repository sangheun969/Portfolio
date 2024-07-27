import React from "react";
import { MediaWeb } from "../../image/index";
import Button from "../atoms/Button";
import { motion } from "framer-motion";
const Work3: React.FC = () => {
  const handleWebButtonClick2 = () => {
    window.open("https://github.com/sangheun969/mediaroad", "_blank");
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
      <div className="w-full flex flex-row justify-center">
        <div className="flex flex-col gap-10">
          <p className="text-[30px] font-['Tenada']">MediaRoad</p>
          <ul className="font-['Tenada']">
            <li>(주)MEDIA ROAD 홍보 WEB 페이지</li>
          </ul>
          <div className="flex flex-row gap-6">
            <Button
              variant="icontBtn"
              size="md"
              label="GitHub"
              onClick={handleWebButtonClick2}
            />
            {/* <Button variant="icontBtn" size="md" label="Web" /> */}
          </div>
        </div>
        <div className="">
          <img src={MediaWeb} alt="" className="w-[600px] h-[300px]" />
        </div>
      </div>
    </motion.div>
  );
};

export default Work3;
