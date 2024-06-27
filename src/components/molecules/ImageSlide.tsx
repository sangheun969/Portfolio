import Slider from "react-slick";
import { ETHSeoul2, ETHSeoul3, ETHSeoul4 } from "../../image/index";

const ImageSlide = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
  };
  return (
    <div className="slider-container slick-slider pb-5  w-[50%] h-[50%]">
      <Slider {...settings}>
        <div className="">
          <img src={ETHSeoul2} alt="" className="mx-[auto]" />
        </div>
        <div className="bg-black/90">
          <img src={ETHSeoul3} alt="" className="h-[30%] w-[60%] mx-[auto]" />
        </div>
        <div className="">
          <img src={ETHSeoul4} alt="" className="mx-[auto]" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlide;
