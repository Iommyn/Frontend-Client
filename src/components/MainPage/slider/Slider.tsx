import React, { useEffect, useState } from "react";
import s from "./slider.module.css";
import right from "../../../assets/page_home/slider/buttons/right_btn.svg";
import left from "../../../assets/page_home/slider/buttons/left_btn.svg";
import { servers } from "../../../information/servers";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [visibleSlides, setVisibleSlides] = useState(1);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setVisibleSlides(1);
      } else {
        setVisibleSlides(3);
      }
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = servers.length;
  const canSlide = totalSlides > visibleSlides;

  const prevSlide = () => {
    if (canSlide) {
      setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);
    }
  };

  const nextSlide = () => {
    if (canSlide) {
      setCurrentSlide((currentSlide + 1) % totalSlides);
    }
  };

  const getAdjacentIndex = (offset) =>
    (currentSlide + offset + totalSlides) % totalSlides;
  const slideIndexes = Array.from({ length: visibleSlides }, (_, i) =>
    getAdjacentIndex(i - Math.floor(visibleSlides / 2)),
  );

  return (
    <div className={s.slider}>
      <button
        className={s.button}
        onClick={prevSlide}
        disabled={!canSlide || currentSlide === 1}
      >
        <img className={s.btn_strell} src={left} alt="Previous" />
      </button>
      {slideIndexes.map((index) => (
        <div className={s.information} key={index}>
          <img
            src={servers[index].image}
            className={s.server}
            alt={servers[index].version}
          />
          <h3 className={s.h3}>{servers[index].version}</h3>
          <h1 className={s.h1}>{servers[index].name}</h1>
          <div className={s.server_progress__online}></div>
          <div className={s.server_status}>
            <span className={s.online}>Online 0/100</span>
          </div>
        </div>
      ))}
      <button
        className={s.button}
        onClick={nextSlide}
        disabled={!canSlide || currentSlide === totalSlides}
      >
        <img className={s.btn_strell} src={right} alt="Next" />
      </button>
    </div>
  );
};

export default Slider;
