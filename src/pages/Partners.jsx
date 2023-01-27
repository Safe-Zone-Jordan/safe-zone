import React from "react";

import { partners } from "../data/partners.js";

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
            <h2 className="text-center">Our Partners</h2>
            <p className="text-center mx-5 pb-3">
              Safe Zone believes that our people are integral to our success and
              we are committed to their well-being. We develop talent giving
              them the opportunity to grow within the organization. We work
              together as a passionate, dedicated and loyal team that respect
              and appreciate each other.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="row">
              {partners.map((partner) => (
                <div className="col-6 col-md-4 col-lg-3" key={partner.id}>
                  <div style={partnersLogo}>
                    <img
                      className="img-fluid"
                      src={partner.image}
                      alt={partner.name}
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
