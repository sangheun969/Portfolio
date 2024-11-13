import Slider from "react-slick";
import { ETHSeoul2, ETHSeoul3, ETHSeoul4, ETHSeoul5 } from "../../image/index";

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
    <div className="slider-container slick-slider pb-5 w-[650px] h-[690px] mobile:w-[400px] mobile:h-[440px]">
      <Slider {...settings}>
        <div className="">
          <img
            src={ETHSeoul2}
            alt=""
            className="mx-[auto] border rounded-2xl"
          />
        </div>
        <div className="">
          <img
            src={ETHSeoul5}
            alt=""
            className="mx-[auto] border rounded-2xl"
          />
        </div>
        <div className="border rounded-2xl">
          <img
            src={ETHSeoul4}
            alt=""
            className="mx-[auto] border rounded-2xl"
          />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlide;
