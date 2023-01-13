import React from "react";
import Carousel from "react-bootstrap/Carousel";

import placeHolder from "../../assets/images/slide/low-current-placeHolder-2.jpg";
import placeHolder2 from "../../assets/images/slide/low-current-placeHolder-4.jpg";
import placeHolder3 from "../../assets/images/slide/low-current-placeHolder-5.jpg";
import placeHolder4 from "../../assets/images/slide/low-current-placeHolder-3.jpg";

const carouselContainer = {
  width: "100%",
  height: "100%",
};

export default function Carousal() {
  return (
    <section className="hero-section hero-section-full-height">
      <div id="hero-slide" style={carouselContainer}>
        <Carousel variant="green">
          <Carousel.Item>
            <img
              className="d-block w-100 home-carousel-size"
              src={placeHolder}
              alt="First slide"
            />
            <div className="carousel-caption d-flex flex-column justify-content-end">
              <h1 className="text-animation">Build Systems</h1>
              <p className="sup-text-animation">
                Lorem ipsum dolor, sit amet consectetur
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 home-carousel-size"
              src={placeHolder2}
              alt="Second slide"
            />
            <div className="carousel-caption d-flex flex-column justify-content-end">
              <h1 className="text-animation">Customize your Systems</h1>
              <p className="sup-text-animation">Professional at What We Do</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 home-carousel-size"
              src={placeHolder3}
              alt="Third slide"
            />
            <div className="carousel-caption d-flex flex-column justify-content-end">
              <h1 className="text-animation">Customize your Systems</h1>
              <p className="sup-text-animation">Professional at What We Do</p>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
}
