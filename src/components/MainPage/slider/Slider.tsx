import React, { useState } from 'react';
import s from './slider.module.css';
import right from '../../../assets/page_home/slider/buttons/right_btn.svg';
import left from '../../../assets/page_home/slider/buttons/left_btn.svg';

import {servers} from '../../../information/servers'
const Slider = () => {


    const [currentSlide, setCurrentSlide] = useState(1);

    const totalSlides = servers.length;

    const canSlide = totalSlides > 3;

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

    const getAdjacentIndex = (offset) => (currentSlide + offset + totalSlides) % totalSlides;

    const prevIndex = getAdjacentIndex(-1);
    const nextIndex = getAdjacentIndex(1);

    return (
        <div className={s.slider}>
            <button className={s.button} onClick={prevSlide} disabled= {!canSlide || currentSlide === 1}>
                <img src={left}/>
            </button>
            {[prevIndex, currentSlide, nextIndex].map((index) => (
                <div className={s.information} key={index}>

                        <img src={servers[index].image} className={s.server}/>

                        <h3 className={s.h3}>{servers[index].version}</h3>

                        <h1 className={s.h1}>{servers[index].name}</h1>

                        <div className={s.server_progress__online}></div>

                        <div className={s.server_status}>
                            <span className={s.online}>Онлайн 0/100</span>
                        </div>

                </div>
            ))}
            <button className={s.button} onClick={nextSlide} disabled= { !canSlide || currentSlide === totalSlides}>
                <img src={right}/>
            </button>
        </div>
    );
}

export default Slider;