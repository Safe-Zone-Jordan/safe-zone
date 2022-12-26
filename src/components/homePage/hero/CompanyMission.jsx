import React from "react";
import { Link } from "react-router-dom";

const aTagStyle = {
  textDecoration: "none",
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
            <div className="col-lg-12 col-12 text-center mb-4">
              <h2>Our Causes</h2>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
              <div className="custom-block-wrap">
                <img
                  src="images/causes/group-african-kids-paying-attention-class.jpg"
                  className="custom-block-image img-fluid"
                  alt=""
                />
                <div className="custom-block">
                  <div className="custom-block-body">
                    <h5 className="mb-3">Children Education</h5>
                    <p>
                      Lorem Ipsum dolor sit amet, consectetur adipsicing kengan
                      omeg kohm tokito
                    </p>
                    <div className="progress mt-4">
                      <div
                        className="progress-bar w-75"
                        role="progressbar"
                        aria-valuenow={75}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <div className="d-flex align-items-center my-2">
                      <p className="mb-0">
                        <strong>Raised:</strong>
                        $18,500
                      </p>
                      <p className="ms-auto mb-0">
                        <strong>Goal:</strong>
                        $32,000
                      </p>
                    </div>
                  </div>
                  <Link to="donate.html" className="custom-btn btn">
                    Donate now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
              <div className="custom-block-wrap">
                <img
                  src="images/causes/poor-child-landfill-looks-forward-with-hope.jpg"
                  className="custom-block-image img-fluid"
                  alt=""
                />
                <div className="custom-block">
                  <div className="custom-block-body">
                    <h5 className="mb-3">Poverty Development</h5>
                    <p>
                      Sed leo nisl, posuere at molestie ac, suscipit auctor
                      mauris. Etiam quis metus tempor
                    </p>
                    <div className="progress mt-4">
                      <div
                        className="progress-bar w-50"
                        role="progressbar"
                        aria-valuenow={50}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <div className="d-flex align-items-center my-2">
                      <p className="mb-0">
                        <strong>Raised:</strong>
                        $27,600
                      </p>
                      <p className="ms-auto mb-0">
                        <strong>Goal:</strong>
                        $60,000
                      </p>
                    </div>
                  </div>
                  <Link to="donate.html" className="custom-btn btn">
                    Donate now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="custom-block-wrap">
                <img
                  src="images/causes/african-woman-pouring-water-recipient-outdoors.jpg"
                  className="custom-block-image img-fluid"
                  alt=""
                />
                <div className="custom-block">
                  <div className="custom-block-body">
                    <h5 className="mb-3">Supply drinking water</h5>
                    <p>
                      Orci varius natoque penatibus et magnis dis parturient
                      montes, nascetur ridiculus
                    </p>
                    <div className="progress mt-4">
                      <div
                        className="progress-bar w-100"
                        role="progressbar"
                        aria-valuenow={100}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <div className="d-flex align-items-center my-2">
                      <p className="mb-0">
                        <strong>Raised:</strong>
                        $84,600
                      </p>
                      <p className="ms-auto mb-0">
                        <strong>Goal:</strong>
                        $100,000
                      </p>
                    </div>
                  </div>
                  <Link to="donate.html" className="custom-btn btn">
                    Donate now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* // momani
      design.......................................................................................................................................
      //..................................................................................................................................................... */}
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
                  Become Link toong>volunteer</ong>
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
    </>
  );
}
