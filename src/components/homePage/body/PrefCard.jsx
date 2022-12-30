import React from "react";
import { Link } from "react-router-dom";

export default function PrefCard() {
  return (
    <section className="section-padding section-bg" id="section_3">
      <div className="container">
        <div className="row">
          <div
            style={{ paddingBottom: "50px" }}
            className="col-12  text-center "
          >
            <h2>Our Solutions</h2>
          </div>
          <div className="col-12 col-lg-6">
            <img
              src="images/icons/medical.webp"
              style={{ borderRadius: "5%" }}
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-12 col-lg-6">
            <h5 className="mb-3">Low Current</h5>
            <p>
              Sed leo nisl, posuere at molestie ac, suscipit auctor mauris.
              Etiam quis metus tempor
            </p>
            <Link to="/Low-Current" className="custom-btn btn">
              Check Services
            </Link>
          </div>
          <div className="col-12 col-lg-6 order-2 order-lg-1">
            <h5 className="mb-3">Low Current</h5>
            <p>
              Sed leo nisl, posuere at molestie ac, suscipit auctor mauris.
              Etiam quis metus tempor
            </p>
            <Link to="/Low-Current" className="custom-btn btn">
              Check Services
            </Link>
          </div>
          <div style={{ margin: "30px" }}></div>
          <div className="col-12 col-lg-6 order-1 order-lg-2">
            <img
              src="images/icons/medical.webp"
              style={{ borderRadius: "5%" }}
              className="img-fluid"
              alt=""
            />
          </div>
          {/* <div className="col-6 col-md-6">
            <div className="custom-block-wrap">
              <img
                src="images/icons/medical.webp"
                className="custom-block-image img-fluid"
                alt=""
              />
              <div className="custom-block">
                <div className="custom-block-body">
                  <h5 className="mb-3">Medical Solutions</h5>
                  <p>
                    Orci varius natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus jasnfjksafnkja aksfj sakfjsajkfb
                    kjbasfkjbsaf
                  </p>
                </div>
                <Link to="/Medical" className="custom-btn btn">
                  Check Services
                </Link>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
