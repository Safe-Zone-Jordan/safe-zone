import React from "react";
import medical from "../assets/images/icons/medical.webp";

export default function AboutUs() {
  return (
    <section className="section-padding" id="section_3">
      <header className="pt-10 text-center col-12 col-sm-9 col-lg-7 col-xl-6 mx-auto">
        <h2 className="text-center">About Us</h2>
        <p className="text-muted lead mb-0">
          Launched in 2015, Safe Zone is a leading Low Current System company in
          Jordan
        </p>
      </header>
      <div className="container py-7">
        <div className="col-12 col-md-8 col-lg-6 mx-auto text-center py-4 border-bottom mb-5">
          <div className="my-5 d-none d-md-flex align-items-start justify-content-between">
            <div>
              <span className="display-3 fw-bold  d-block">40+</span>
              <span className="d-block fs-9 fw-bolder tracking-wide text-uppercase text-muted">
                Covered Locations
              </span>
            </div>
            <div>
              <span className="display-3 fw-bold  d-block">30+</span>
              <span className="d-block fs-9 fw-bolder tracking-wide text-uppercase text-muted">
                Customers
              </span>
            </div>
            <div>
              <span className="display-3 fw-bold  d-block">10+</span>
              <span className="d-block fs-9 fw-bolder tracking-wide text-uppercase text-muted">
                Staff
              </span>
            </div>
          </div>{" "}
        </div>

        <div className="py-6 row gx-8 align-items-center">
          <div className="col-12 col-lg-6">
            <p
              style={{ color: "#5bc1ac" }}
              className="mb-3 small fw-bolder tracking-wider text-uppercase "
            >
              How it started
            </p>
            <h2 className="display-5 fw-bold mb-6">Our story</h2>
            <p>
              With more than 6 years of experienced, Safe Zone has built a wide
              reputation of Low Current system professional work. Safe Zone
              consist of 3 professional Engineers with 9 Professional crews who
              they can arrange to cover our business core. Safe Zone has
              accomplished many projects all over Jordan with a worth value of
              350k JOD more than 35 projects references.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              quis tortor sed neque pellentesque suscipit. Quisque finibus
              tristique faucibus. Pellentesque rhoncus justo ac ipsum pulvinar
              commodo. Nam quis hendrerit dui. Vestibulum dolor ligula, vehicula
              bibendum iaculis in, placerat et sapien. Maecenas in odio at quam
              volutpat lobortis.
            </p>
          </div>
          <div className="col-12 col-lg-6">
            <picture>
              <img
                className="img-fluid rounded shadow-sm"
                src={medical}
                alt="HTML Bootstrap Template by Pixel Rocket"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
