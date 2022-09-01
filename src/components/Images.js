import React from 'react';
import Carousel from 'nuka-carousel';
import elenaMain from '../img/elena-main.jpg';
import elenaMarshallHiking from '../img/elena-marshall-hiking.jpg';
import tofuSnow from '../img/tofu-snow.jpg';
import elenaMarshallKayaks from '../img/elena-marshall-kayaks.jpg';
import huckTofu from '../img/huck-tofu.jpg';
import elenaSkiingTofu from '../img/elena-skiing-tofu.jpg';

export default function Images() {
  return (
    <Carousel
      autoplay={true}
      autoplayInterval={5000}
      autoplayReverse={true}
      animation="fade"
      enableKeyboardControls={true}
      wrapAround={true}
      className="carousel"
    >
      <div className="carousel-img-container">
        <img src={elenaMain} className="carousel-img" />
      </div>
      <div className="carousel-img-container">
        <img src={elenaMarshallHiking} className="carousel-img" />
      </div>
      <div className="carousel-img-container">
        <img src={tofuSnow} className="carousel-img" />
      </div>
      <div className="carousel-img-container">
        <img src={elenaMarshallKayaks} className="carousel-img" />
      </div>
      <div className="carousel-img-container">
        <img src={huckTofu} className="carousel-img" />
      </div>
      <div className="carousel-img-container">
        <img src={elenaSkiingTofu} className="carousel-img" />
      </div>
    </Carousel>
  )
}

