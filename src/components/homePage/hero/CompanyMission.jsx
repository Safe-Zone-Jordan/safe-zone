import React from "react";
import { Link } from "react-router-dom";

const cardsContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default function CompanyMission() {
  return (
    <>
      <section className="about-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-5 col-12">
              <img
                src="images/icons/safeZone.png"
                className="about-image ms-lg-auto bg-light shadow-lg img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-5 col-md-7 col-12">
              <div className="custom-text-block">
                <h2 className="mb-0">Sandy Chan</h2>
                <p className="text-muted mb-lg-4 mb-md-4">
                  Co-Founding Partner
                </p>
                <p>
                  Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg
                  kohm tokito Professional charity theme based
                </p>
                <p>
                  You are not allowed to redistribute this template ZIP file on
                  any other template collection website. Please contact
                  TemplateMo for more information.
                </p>
                <ul className="social-icon mt-4">
                  <li className="social-icon-item">
                    <Link to="#" className="social-icon-link bi-twitter" />
                  </li>
                  <li className="social-icon-item">
                    <Link to="#" className="social-icon-link bi-facebook" />
                  </li>
                  <li className="social-icon-item">
                    <Link to="#" className="social-icon-link bi-instagram" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" id="section_3">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12  text-center mb-4">
              <h2>Our Solutions</h2>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
              <div className="custom-block-wrap">
                <img
                  src="images/icons/lowCurrent.webp"
                  className="custom-block-image img-fluid"
                  alt=""
                />
                <div className="custom-block">
                  <div className="custom-block-body">
                    <h5 className="mb-3">Low Current</h5>
                    <p>
                      Sed leo nisl, posuere at molestie ac, suscipit auctor
                      mauris. Etiam quis metus tempor
                    </p>
                  </div>
                  <Link to="/Low-Current" className="custom-btn btn">
                    Check Services
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
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
                      montes, nascetur ridiculus jasnfjksafnkja aksfj
                      sakfjsajkfb kjbasfkjbsaf
                    </p>
                  </div>
                  <Link to="/Medical" className="custom-btn btn">
                    Check Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
