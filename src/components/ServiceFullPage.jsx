import React from "react";
import { useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

import sol from "../data/solutions";
import solText from "../data/solutionsText";
import data from "../data/Categories";
import NotFound from "./NotFound";

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
  let data1 = data.find((item) => item.name.split(" ").join("-") === name);
  if(!data1) return <NotFound />;

  let thisSol = sol[name];
  let thisSolText = solText[name];

  return (
    <section className="about-section section-padding">
      <div className="container">
        <div className="py-6 row gx-8 align-items-center">
          <div className="col-12 mb-5">
            <h2 className="text-center">{data1.name}</h2>
          </div>
          <div className="col-12 order-lg-1 order-2 col-lg-6">
             {thisSolText.paragraph.split('\n').map((str, idx) => <p key={idx}>{str}</p>)}
           
           <p style={{fontWeight: "Bold"}}>
              {thisSolText.listTitle}
           </p>
            <ul>
              {thisSolText.list.map((item, idx)=> (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="col-12 order-lg-2 order-1 col-lg-6 mb-5">
            <div style={carouselContainer}>
              <Carousel fade={true} indicators={false}>
                {thisSol.map((item, idx) => (
                <Carousel.Item interval={2000} style={{background: "#B7BFD0"}} key={idx}>
                  <img
                    style={carouselImage}
                    className="d-block w-100"
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
