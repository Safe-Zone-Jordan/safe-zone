import React from "react";

import { partnersHomePage } from "../data/partners.js";

const partnersLogo = {
  position: "relative",
  top: 0,
  bottom: 0,
  width: "60%",
  height: "60%",
  margin: "auto",
};

export default function Partners() {
  return (
    <section className="section-padding" id="section_3">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center" data-aos="fade-in">
              Our Partners
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="row">
              {partnersHomePage.map((partner) => (
                <div className="col-6 col-md-4 col-lg-3 p-4" key={partner.id}>
                  <div style={partnersLogo}>
                    <img
                      className="grid-img-page"
                      src={partner.image}
                      alt={partner.name}
                      data-aos="fade-in"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
