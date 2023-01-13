import React from "react";
import { useParams } from "react-router-dom";
import ImageHolder from "../assets/images/slide/low-current-placeHolder-2.jpg";
import ImageHolder2 from "../assets/images/slide/low-current-placeHolder-3.jpg";
import ImageHolder3 from "../assets/images/slide/low-current-placeHolder-4.jpg";

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
            <div
              id="hero-slide"
              className="carousel carousel-fade slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    // src="images/slide/volunteer-helping-with-donation-box.jpg"
                    src={ImageHolder}
                    className="carousel-image img-fluid"
                    alt="..."
                  />
                  <div className="carousel-caption d-flex flex-column justify-content-end">
                    <h1 className="text-animation">Build Systems</h1>
                    <p className="sup-text-animation">
                      Professional at What We Do
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    // src="images/slide/volunteer-selecting-organizing-clothes-donations-charity.jpg"
                    src={ImageHolder2}
                    className="carousel-image img-fluid"
                    alt="..."
                  />
                  <div className="carousel-caption d-flex flex-column justify-content-end">
                    <h1 className="text-animation">Customize your Systems</h1>
                    <p className="sup-text-animation">
                      Lorem ipsum dolor, sit amet consectetur{" "}
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    // src="images/slide/volunteer-selecting-organizing-clothes-donations-charity.jpg"
                    src={ImageHolder3}
                    className="carousel-image img-fluid"
                    alt="..."
                  />
                  <div className="carousel-caption d-flex flex-column justify-content-end">
                    <h1 className="text-animation">Customize your Systems</h1>
                    <p className="sup-text-animation">
                      Lorem ipsum dolor, sit amet consectetur{" "}
                    </p>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#hero-slide"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#hero-slide"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
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
