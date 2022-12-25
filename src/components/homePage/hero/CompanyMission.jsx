import React from "react";
import { Link } from "react-router-dom";

const aTagStyle = {
  textDecoration: "none",
};
export default function CompanyMission() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-12 text-center mx-auto">
            <h2 className="mb-5">Welcome to Safe Zone</h2>
            <div className="featured-block d-flex justify-content-center align-items-center">
                <img
                  src="images/icons/safeZone.png"
                  className="featured-block-image img-fluid"
                  alt=""
                />
                <p className="featured-block-text">
                  Our mession is to Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Nostrum quae numquam delectus magni sapiente
                  repellendus architecto perspiciatis ex minus, dolor vel unde
                  voluptate nam quasi odit sunt, ratione consequatur animi!{" "}
                  
                </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            {/*
            <div className="featured-block d-flex justify-content-center align-items-center">
              <Link style={aTagStyle} to="donate.html" className="d-block">
                <img
                  src="images/icons/hands.png"
                  className="featured-block-image img-fluid"
                  alt=""
                />
                <p className="featured-block-text">
                  Become a <strong>volunteer</strong>
                </p>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
            <div className="featured-block d-flex justify-content-center align-items-center">
              <Link to="donate.html" style={aTagStyle} className="d-block">
                <img
                  src="images/icons/heart.png"
                  className="featured-block-image img-fluid"
                  alt=""
                />
                <p className="featured-block-text">
                  <strong>Caring</strong> Earth
                </p>
              </Link>
            </div>
        */}
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
            <div className="featured-block d-flex justify-content-center align-items-center">
              <Link to="donate.html" style={aTagStyle} className="d-block">
                <img
                  src="images/icons/medical.webp"
                  className="featured-block-image img-fluid"
                  alt=""
                />
                <p className="featured-block-text">
                 <strong>Medical Field</strong>
                </p>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="featured-block d-flex justify-content-center align-items-center">
              <Link to="donate.html" style={aTagStyle} className="d-block">
                <img
                  src="images/icons/lowCurrent.webp"
                  className="featured-block-image img-fluid"
                  alt=""
                />
                <p className="featured-block-text">
                  <strong>Low Current</strong>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
