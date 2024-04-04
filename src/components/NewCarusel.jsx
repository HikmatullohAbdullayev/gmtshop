import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import VectorIcon from "../assets/icon/VectorIcon.jsx";
import newDatas from "../constants/NewCaruslelData.js"
import Button from "./Button.jsx";
import HeadingThere from "../typography/HeadingThere.jsx";
import TextOne from "../typography/TextOne.jsx";


function SampleNextArrow(props) {
  const {  onClick } = props;
  return (
    <div
      className={` absolute left-10 top-[360px] h-8 w-8 rounded-full bg-white border border-slate-600 text-center rotate-180 p-[12px]  flex justify-center items-center  hover:bg-[#088269]  table1080:hidden`}
      
      onClick={onClick}
    >
      <span className="w-[41px] h-[41px] mt-7 cursor-pointer table1080:hidden">
     <VectorIcon />
      </span>

    </div>
  );
}

function SamplePrevArrow(props) {
  const {  onClick } = props;
  return (
    <div
      className={` absolute left-0  top-[360px]  h-8 w-8 rounded-full bg-white border border-slate-600 text-center  p-[12px]  flex justify-center items-center  hover:bg-[#088269]  table1080:hidden`}
      
      onClick={onClick}
    >
      <span className="w-[41px] h-[41px] mt-6 cursor-pointer table1080:hidden">
        <VectorIcon />
      </span>
    </div>
  );
}

function NewCarusel() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          nextArrow: null,
          prevArrow: null,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: null,
          prevArrow: null,
        },
      },
    ],
  };
  function gap() {
    console.log('Button clicked!');
  }
 

  return (
    <div className="slider-container ">
      <div className=" relative  w-full max-w-[980px] mobil2:max-w-[600px] mobile490:max-w-[350px] ">
        <Slider {...settings}>
          {newDatas.map((card) => (
            <div
              key={card.id}
              className="rounded-[10px] border-[1px]   border-[#E5E2EE] max-w-[320px] mobile375: w-[286px]"
            >
            <div className="w-full ">
            <LazyLoadImage
                src={card.src}
                alt={card.title}
                className="block overflow-hidden w-full  rounded-t-[10px]"
                // effect="blur"
              />
            </div>
              <div className="py-4 pl-3  mobile3:py-5">
                <span className="mb-1 block text-[12px] text-[#7A7687]">
                  07.11.2022
                </span>
                <HeadingThere className="">
                  Название новости
                </HeadingThere>
                <div className="pr-1">
                <TextOne className="">
                  Допускает внедрение поэтапного и развития общества.
                </TextOne>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="w-full text-right pt-4 px-[20px] table1080:hidden ">
        <Button primary={true} btn={gap}  >
        Все новости
</Button>

          </div>
      </div>
    </div>
  );
}

export default NewCarusel;
