import React, { useEffect, useState } from "react";
import Button from "../atoms/Button";
import ImageSlide from "../molecules/ImageSlide";

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
    <div className="border rounded-lg">
      <p className="font-extrabold text-center text-[30px] py-3 font-NOTO">
        ETH SEOUL HACKATON 2024
      </p>
      <div className="flex flex-row justify-around">
        <ImageSlide />
        <div>
          <span className="font-NOTO text-2xl ">
            <ul className="flex flex-col gap-4">
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
                <Button
                  variant="icontBtn"
                  size="md"
                  label="Web Page"
                  onClick={handleWebButtonClick}
                />
                <Button
                  variant="icontBtn"
                  size="md"
                  label="GitHub"
                  onClick={handleWebButtonClick2}
                />
              </li>
              <li></li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hackathon;
