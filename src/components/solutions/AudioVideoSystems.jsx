import React from "react";
import Carousel from "react-bootstrap/Carousel";

import { audioVideo } from "../../data/solutions";

const carouselContainer = {
  width: "100%",
  height: "100%",
};

export default function AudioVideoSystems() {
  let data = audioVideo;
  return (
    <section className="about-section section-padding" data-aos="fade-in">
      <div className="container">
        <div className="py-6 row gx-8 align-items-center">
          <div className="col-12 mb-5">
            <h2 className="text-center">{data.name}</h2>
          </div>
          <div className="col-12 order-lg-1 order-2 col-lg-6">
            {data.paragraph.split("\n").map((str, idx) => (
              <p key={idx}>{str}</p>
            ))}

            <p style={{ fontWeight: "Bold" }}>{data.listTitle}</p>
            <ul>
              {data.list.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="col-12 order-lg-2 order-1 col-lg-6 mb-5">
            <div style={carouselContainer}>
              <Carousel fade={true} indicators={false}>
                {data.pictures.map((item, idx) => (
                  <Carousel.Item
                    interval={2000}
                    style={{ background: "#B7BFD0" }}
                    key={idx}
                  >
                    <img
                      className="d-block w-100 full-page-carousel-image"
                      src={item.image}
                      alt={item.name}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
