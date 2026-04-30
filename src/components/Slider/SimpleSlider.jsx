import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <img className="w-full h-80" src={img1} alt="" />
      </div>
      <div>
        <img className="w-full h-80" src={img2} alt="" />
      </div>
      <div>
        <img className="w-full h-80" src={img3} alt="" />
      </div>
      <div>
        <img className="w-full h-80" src={img1} alt="" />
      </div>
      <div>
        <img className="w-full h-80" src={img2} alt="" />
      </div>
      <div>
        <img className="w-full h-80" src={img3} alt="" />
      </div>
    </Slider>
  );
}
