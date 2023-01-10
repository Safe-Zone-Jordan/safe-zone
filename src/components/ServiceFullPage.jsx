import React from "react";
import { useParams } from "react-router-dom";
import ImageHolder from "../assets/elementor-placeholder-image.jpg";

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
            <picture>
              <img
                className="img-fluid rounded shadow-sm about-us-image"
                src={ImageHolder}
                alt="HTML Bootstrap Template by Pixel Rocket"
              />
            </picture>
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
