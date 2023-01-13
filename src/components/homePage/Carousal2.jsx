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

const carouselImage = {
  width: "100%",
  height: "680px",
};

export default function Carousal2() {
  return (
    <section className="hero-section hero-section-full-height">
      <div style={carouselContainer}>
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              style={carouselImage}
              className="d-block w-100"
              src={placeHolder}
              alt="First slide"
            />
            <div className="carousel-caption d-flex flex-column justify-content-end">
              <h1 className="text-animation">Build Systems</h1>
              <p className="sup-text-animation">Professional at What We Do</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={carouselImage}
              className="d-block w-100"
              src={placeHolder2}
              alt="Second slide"
            />
            <div className="carousel-caption d-flex flex-column justify-content-end">
              <h1 className="text-animation">Build Systems</h1>
              <p className="sup-text-animation">Professional at What We Do</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={carouselImage}
              className="d-block w-100"
              src={placeHolder3}
              alt="Third slide"
            />
            <div className="carousel-caption d-flex flex-column justify-content-end">
              <h1 className="text-animation">Build Systems</h1>
              <p className="sup-text-animation">Professional at What We Do</p>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
}
