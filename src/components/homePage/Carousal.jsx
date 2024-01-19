import React from "react";
import Carousel from "react-bootstrap/Carousel";

import Carousal1 from "../../assets/homePage/01.jpg";
import Carousal2 from "../../assets/homePage/02.jpg";
import Carousal3 from "../../assets/homePage/03.jpg";

const carouselContainer = {
  width: "100%",
  height: "100%",
};

export default function Carousal() {
  return (
    <section className="hero-section hero-section-full-height" data-aos="fade-in">
      <div id="hero-slide" style={carouselContainer}>
        <Carousel variant="green" fade={true}>
          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100 home-carousel-size"
              src={Carousal1}
              alt="First slide"
            />
            <div className="carousel-caption d-flex flex-column justify-content-end">
              <h1 className="text-animation carousalText font-primary">Audio/Visual Systems</h1>
              <p className="sup-text-animation carousalText">
              Build Your System
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100 home-carousel-size"
              src={Carousal2}
              alt="Second slide"
            />
            <div className="carousel-caption d-flex flex-column justify-content-end">
              <h1 className="text-animation carousalText font-primary">Security Systems</h1>
              <p className="sup-text-animation carousalText">Customize your System</p>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100 home-carousel-size"
              src={Carousal3}
              alt="Third slide"
            />
            <div className="carousel-caption d-flex flex-column justify-content-end">
              <h1 className="text-animation carousalText font-primary">Entrance Solutions</h1>
              <p className="sup-text-animation carousalText">
              Maintain Your System
              </p>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
}
