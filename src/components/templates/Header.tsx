import React, { useState, useEffect } from "react";
// import Nav from "../organisms/Nav";

import { GitHub, Tstory, SangTitle } from "../../image/index";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const githubButtonClick = () => {
    window.open("https://github.com/sangheun969", "_blank");
  };
  const tStoryButtonClick = () => {
    window.open("https://sang969.tistory.com/", "_blank");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollTo = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const isSrolled = window.scrollY > 0;
      setScrolled(isSrolled);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const bannerElement = document.getElementById("banner");
      const projectElement = document.getElementById("work1");
      const skillElement = document.getElementById("skills");
      const contestElement = document.getElementById("contest");

      const scrollY = window.scrollY;

      const bannerTop = bannerElement ? bannerElement.offsetTop : 0;
      const projectTop = projectElement ? projectElement.offsetTop : 0;
      const skillTop = skillElement ? skillElement.offsetTop : 0;
      const contestTop = contestElement ? contestElement.offsetTop : 0;

      if (scrollY >= bannerTop && scrollY < projectTop) {
        setActiveMenu("about");
      } else if (scrollY >= projectTop && scrollY < skillTop) {
        setActiveMenu("project");
      } else if (scrollY >= skillTop && scrollY < contestTop) {
        setActiveMenu("skills");
      } else if (scrollY >= contestTop) {
        setActiveMenu("contest");
      } else {
        setActiveMenu(null);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 w-full h-[90px] px-4 flex flex-row justify-between items-center transition-colors duration-300 ${
        scrolled ? "bg-white" : "bg-black/5"
      } z-50`}
    >
      <div className="w-[70px] h-[70px] ">
        <img src={SangTitle} alt="" />
      </div>
      <ul className="flex gap-12 font-NOTO text-xl uppercase font-semibold text-[#666] ">
        <li
          className={`hover:text-[#333] cursor-pointer ${
            activeMenu === "about" ? "border-b-2 border-blue-500" : ""
          }`}
          onClick={scrollToTop}
        >
          <span>about</span>
        </li>
        <li
          className={`hover:text-[#333] cursor-pointer ${
            activeMenu === "project" ? "border-b-2 border-blue-500" : ""
          }`}
          onClick={() => handleScrollTo("work1")}
        >
          <span>project</span>
        </li>
        <li
          className={`hover:text-[#333] cursor-pointer ${
            activeMenu === "skills" ? "border-b-2 border-blue-500" : ""
          }`}
          onClick={() => handleScrollTo("skills")}
        >
          <span>skills</span>
        </li>
        <li
          className={`hover:text-[#333] cursor-pointer ${
            activeMenu === "contest" ? "border-b-2 border-blue-500" : ""
          }`}
          onClick={() => handleScrollTo("contest")}
        >
          <span>contest</span>
        </li>
      </ul>
      <div className="flex gap-4">
        <div
          className="w-[30px] h-[30px] cursor-pointer"
          onClick={githubButtonClick}
        >
          <img src={GitHub} alt="" />
        </div>
        <div
          className="w-[30px] h-[30px] cursor-pointer"
          onClick={tStoryButtonClick}
        >
          <img src={Tstory} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
