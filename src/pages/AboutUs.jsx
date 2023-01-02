import React from "react";

export default function AboutUs() {
  return (
    <section className="section-padding" id="section_3">
      <header className="pt-10 text-center col-12 col-sm-9 col-lg-7 col-xl-6 mx-auto">
        <h1 className="display-3 fw-bold mb-3">About us</h1>
        <p className="text-muted lead mb-0">
          Launched in 2017, Sigma is an online template design tool with a
          mission to make landing page design accessible to everyone in the
          world.
        </p>
      </header>
      <div className="container py-7">
        <div className="col-12 col-md-8 col-lg-6 mx-auto text-center py-4 border-bottom mb-5">
          <div className="my-5 d-none d-md-flex align-items-start justify-content-between">
            <div>
              <span className="display-3 fw-bold text-primary d-block">12</span>
              <span className="d-block fs-9 fw-bolder tracking-wide text-uppercase text-muted">
                Locations
              </span>
            </div>
            <div>
              <span className="display-3 fw-bold text-primary d-block">
                75K
              </span>
              <span className="d-block fs-9 fw-bolder tracking-wide text-uppercase text-muted">
                Customers
              </span>
            </div>
            <div>
              <span className="display-3 fw-bold text-primary d-block">
                160
              </span>
              <span className="d-block fs-9 fw-bolder tracking-wide text-uppercase text-muted">
                Staff
              </span>
            </div>
          </div>{" "}
        </div>

        <div className="py-6 row gx-8 align-items-center">
          <div className="col-12 col-lg-6">
            <p className="mb-3 small fw-bolder tracking-wider text-uppercase text-primary">
              How it started
            </p>
            <h2 className="display-5 fw-bold mb-6">Our story</h2>
            <p>
              In 2015, one of our founders had an experience with landing pages
              where he realized that you can’t control your results, but only
              act on them. This is what inspired him and the other co-founder to
              build a landing page design tool which helps users build their
              landing pages.
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
                src="images/icons/medical.webp"
                alt="HTML Bootstrap Template by Pixel Rocket"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
