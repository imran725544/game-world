import React from "react";
import './Slider.css'
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Sliderimage = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };


  return (
    <>
    <div className="rec">
    <h2 >Recommended Streams</h2>
    </div>
     

      <Slider {...settings}>
        {props.Image.map((img) => {
          return (
            <div className="slider-img">
            <img src={img} className="se-img" alt="" />
          </div>
          );

        })}
      </Slider>
    </>
  );
};

export default Sliderimage;
