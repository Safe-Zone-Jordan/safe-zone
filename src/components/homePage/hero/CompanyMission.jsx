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
            <h2 className="mb-5">Welcome to Kind Heart Charity</h2>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
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
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
            <div className="featured-block d-flex justify-content-center align-items-center">
              <Link to="donate.html" style={aTagStyle} className="d-block">
                <img
                  src="images/icons/receive.png"
                  className="featured-block-image img-fluid"
                  alt=""
                />
                <p className="featured-block-text">
                  Make a <strong>Donation</strong>
                </p>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="featured-block d-flex justify-content-center align-items-center">
              <Link to="donate.html" style={aTagStyle} className="d-block">
                <img
                  src="images/icons/scholarship.png"
                  className="featured-block-image img-fluid"
                  alt=""
                />
                <p className="featured-block-text">
                  <strong>Scholarship</strong> Program
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
