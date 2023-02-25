import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowRight,
  faCircleArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import "../style/slider.css";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      {SliderData.map((slide, index) => {
        return (
          <div>
            <div>
              <FontAwesomeIcon
                className="left-arrow"
                onClick={prevSlide}
                icon={faCircleArrowLeft}
              />
              <FontAwesomeIcon
                className="right-arrow"
                onClick={nextSlide}
                icon={faCircleArrowRight}
              />
            </div>
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && <img src={slide.image} />}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
