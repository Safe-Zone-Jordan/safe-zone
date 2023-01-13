import React from "react";
import { useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

import ImageHolder from "../assets/images/slide/low-current-placeHolder-2.jpg";
import ImageHolder2 from "../assets/images/slide/low-current-placeHolder-3.jpg";
import ImageHolder3 from "../assets/images/slide/low-current-placeHolder-4.jpg";

const carouselImage = {
  width: "300px",
  height: "300px",
};
const carouselContainer = {
  width: "100%",
  height: "100%",
};

export default function ServiceFullPage() {
  const { name } = useParams();
  let data = require("../data/Categories.json");
  data = data.find((item) => item.name.split(" ").join("-") === name);
  return (
    <section className="about-section section-padding">
      <div className="container">
        <div className="py-6 row gx-8 align-items-center">
          <div className="col-12">
            <h1 className="text-center">{data.name}</h1>
          </div>
          <div className="col-12 order-lg-1 order-2 col-lg-6">
            <p>
              With more than 6 years of experienced, Safe Zone has built a wide
              reputation of Low Current system professional work. Safe Zone
              consist of 3 professional Engineers with 9 Professional crews who
              they can arrange to cover our business core. Safe Zone has
              accomplished many projects all over Jordan with a worth value of
              350k JOD more than 35 projects references.
            </p>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur</li>
              <li>Lorem ipsum dolor sit amet consectetur</li>
              <li>Lorem ipsum dolor sit amet consectetur</li>
              <li>Lorem ipsum dolor sit amet consectetur</li>
            </ul>
          </div>
          <div className="col-12 order-lg-2 order-1 col-lg-6 ">
            <div style={carouselContainer}>
              <Carousel>
                <Carousel.Item interval={1000}>
                  <img
                    style={carouselImage}
                    className="d-block w-100"
                    src={ImageHolder}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img
                    style={carouselImage}
                    className="d-block w-100"
                    src={ImageHolder2}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    style={carouselImage}
                    className="d-block w-100"
                    src={ImageHolder3}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-12">
            <h1 className="text-center">{data.name}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 " style={{ textAlign: "center" }}>
            <img src={ImageHolder} alt="ImageHolder" className="img-fluid" />
          </div>
        </div>
        <div className="row">
          <div className="col-12 custom-text-block">
            <p className="text-center">
              {data.description} : Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Inventore vel voluptates et quaerat perferendis?
              Magni praesentium nisi corrupti doloremque autem delectus minima
              illum, iste unde quidem aliquam vel! Saepe, dignissimos. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Ipsam alias
              itaque sint labore, assumenda nemo tenetur a voluptatem magni
              laborum odio debitis, obcaecati neque in officia accusantium.
              Illum, libero veritatis! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Earum ipsam voluptas repellendus tempore
              consequatur culpa accusamus aliquid impedit adipisci at suscipit
              modi, facilis blanditiis quae voluptates dignissimos esse mollitia
              incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quaerat ex amet eveniet voluptate incidunt dicta cumque deleniti
              eaque, dolore culpa impedit facere quo, repellendus alias quis
              repudiandae velit nemo dolores. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Inventore vel voluptates et quaerat
              perferendis? Magni praesentium nisi corrupti doloremque autem
              delectus minima illum, iste unde quidem aliquam vel! Saepe,
              dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Ipsam alias itaque sint labore, assumenda nemo tenetur a
              voluptatem magni laborum odio debitis, obcaecati neque in officia
              accusantium. Illum, libero veritatis! Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Earum ipsam voluptas repellendus
              tempore consequatur culpa accusamus aliquid impedit adipisci at
              suscipit modi, facilis blanditiis quae voluptates dignissimos esse
              mollitia incidunt. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quaerat ex amet eveniet voluptate incidunt dicta
              cumque deleniti eaque, dolore culpa impedit facere quo,
              repellendus alias quis repudiandae velit nemo dolores.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
