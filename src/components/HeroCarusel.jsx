
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { useRef } from "react";


import newDatas from "../constants/NewCaruslelData.js"
import HeadingThere from "../typography/HeadingThere.jsx";
import TextOne from "../typography/TextOne.jsx";
import TextTwo from "../typography/TextTwo.jsx";
import foto from "../assets/img/Photo.png"


function HeroCarusel() {

  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };
  const prev = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <div className="relative w-[95%] max-w-[900px]">
        <Slider
          {...settings} 
          ref={(slider) => {  sliderRef = slider;  }}
        >

           {/* {newDatas.map(() => (
            <div key={} className="" >
          nma gap
            </div>

          ))} */}
        </Slider>
        <div>
          <button
            className=""
            onClick={prev}
          >
            prev
          </button>
          <button
            className=""
            onClick={next}
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroCarusel;

{/* <div className="w-[180px] mx-auto ">
<LazyLoadImage
    src={foto}
    alt={card.title}
    className="block overflow-hidden w-full  rounded-t-[10px]"
    width={181}
    // effect="blur"
  />
</div> */}