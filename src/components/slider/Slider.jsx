import React, { useState } from "react";
import "./slider.scss";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? numOfSlides - 1 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === numOfSlides - 1 ? 0 : (prev) => prev + 1);
  };

  const data = [
    "https://images.pexels.com/photos/7691133/pexels-photo-7691133.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/6774931/pexels-photo-6774931.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/6774858/pexels-photo-6774858.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  const numOfSlides = data.length;
  return (
    <div className="slider">
      <div
        className="pictures"
        style={{
          width: `${numOfSlides * 100}vw`,
          transform: `translateX(-${currentSlide * 100}vw)`,
        }}
      >
        {data.map((pic, index) => (
          <img src={pic} alt="" key={index} />
        ))}
      </div>

      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <ArrowCircleLeftOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <ArrowCircleRightOutlinedIcon />
        </div>
      </div>
    </div>
  );
};
