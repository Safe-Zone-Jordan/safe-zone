import React from "react";
// #e9ecefc9
export default function Carousal() {
  return (
    <section className="hero-section hero-section-full-height">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-12 p-0">
            <div
              id="hero-slide"
              className="carousel carousel-fade slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    // src="images/slide/volunteer-helping-with-donation-box.jpg"
                    src="images/slide/low-current-placeHolder-4.jpg"
                    className="carousel-image img-fluid"
                    alt="..."
                  />
                  <div className="carousel-caption d-flex flex-column justify-content-end">
                    <h1>Build Systems</h1>
                    <p>Professional at What We Do</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    // src="images/slide/volunteer-selecting-organizing-clothes-donations-charity.jpg"
                    src="images/slide/low-current-placeHolder-2.jpg"
                    className="carousel-image img-fluid"
                    alt="..."
                  />
                  <div className="carousel-caption d-flex flex-column justify-content-end">
                    <h1>Customize your Systems</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    // src="images/slide/volunteer-selecting-organizing-clothes-donations-charity.jpg"
                    src="images/slide/low-current-placeHolder-5.jpg"
                    className="carousel-image img-fluid"
                    alt="..."
                  />
                  <div className="carousel-caption d-flex flex-column justify-content-end">
                    <h1>Customize your Systems</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    // src="images/slide/medium-shot-people-collecting-donations.jpg"
                    src="images/slide/low-current-placeHolder-3.jpg"
                    className="carousel-image img-fluid"
                    alt="..."
                  />
                  <div className="carousel-caption d-flex flex-column justify-content-end">
                    <h1>Modify and Shine</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur </p>
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
      </div>
    </section>
  );
}