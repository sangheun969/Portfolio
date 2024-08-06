import React from "react";
import FadeAnime from "../organisms/FadeAnime";

const Banner: React.FC = () => {
  return (
    <div>
      <div className="border w-full h-[100vh] pt-[90px] flex justify-center items-center bg-[#F4F3ED]">
        {/* <div>hello</div> */}
        <FadeAnime />
      </div>
    </div>
  );
};

export default Banner;
