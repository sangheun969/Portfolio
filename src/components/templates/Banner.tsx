import React from "react";
import FadeAnime from "../organisms/FadeAnime";
import BgAnime1 from "../../assets/BgAnime1.mp4";

const Banner: React.FC = () => {
  return (
    <div>
      <div className="border w-full h-[100vh] pt-[90px] flex justify-center items-center">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={BgAnime1}
          autoPlay
          loop
          muted
        />
        <FadeAnime />
      </div>
    </div>
  );
};

export default Banner;
