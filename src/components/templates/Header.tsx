import React, { useState, useEffect } from "react";
import Nav from "../organisms/Nav";

import { GitHub, Tstory, SangTitle } from "../../image/index";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <div
      className={`fixed top-0 w-full h-[70px] px-4 flex flex-row justify-between items-center transition-colors duration-300 ${
        scrolled ? "bg-white" : "bg-black/5"
      } z-50`}
    >
      <div className="w-[70px] h-[70px] ">
        <img src={SangTitle} alt="" />
      </div>
      <ul className="flex gap-12 font-NOTO text-xl uppercase font-semibold text-[#666] ">
        <li className="hover:text-[#333] cursor-pointer" onClick={scrollToTop}>
          <span>about</span>
        </li>
        <li
          className="hover:text-[#333] cursor-pointer"
          onClick={() => handleScrollTo("work1")}
        >
          <span>project</span>
        </li>
        <li
          className="hover:text-[#333] cursor-pointer"
          onClick={() => handleScrollTo("contest")}
        >
          <span>contest</span>
        </li>
        <li
          className="hover:text-[#333] cursor-pointer"
          onClick={() => handleScrollTo("skills")}
        >
          <span>skills</span>
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
      <Nav />
    </div>
  );
};

export default Header;
