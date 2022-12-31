import React from "react";
import { Link } from "react-router-dom";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
export default function PrefCard() {
  const size = getWindowSize();
  console.log(size);
  return (
    <section className="section-padding section-bg" id="section_3">
      <div className="container">
        {/* <div className="row">
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
        </div> */}
        <div className="row">
          <div
            style={{ paddingBottom: "50px" }}
            className="col-12  text-center "
          >
            <h2>Our Solutions</h2>
          </div>
          <div className="col-12 col-sm-6 d-md-flex justify-content-md-ceneter">
            <img
              style={{ borderRadius: "5%" }}
              src="images/icons/medical.webp"
              alt="Coffe Flavour"
              className="img-fluid"
              loading="lazy"
            />
          </div>
          <div className="col-12 col-sm-6 align-self-center justify-content-md-ceneter">
            <div className="steps__content-width">
              <h1 className="h2 mb-4">Low Current</h1>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officia totam dolorem quasi! Quis fugiat totam id fuga non
                distinctio incidunt amet nesciunt itaque, tempore repellat eos
                natus quo mollitia laborum.
              </p>
              <Link to="/Low-Current" className="custom-btn btn">
                Check Services
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 d-md-flex justify-content-md-ceneter order-sm-1">
            <img
              style={{ borderRadius: "5%" }}
              src="images/icons/medical.webp"
              alt="Health Benefits"
              className="img-fluid"
              loading="lazy"
            />
          </div>
          <div className="col-12 col-sm-6 align-self-center justify-content-md-ceneter">
            <div
              className={`steps__content-width ${size ? "text-center" : ""}`}
            >
              <h1 className="h2 mb-4">Low Current</h1>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officia totam dolorem quasi! Quis fugiat totam id fuga non
                distinctio incidunt amet nesciunt itaque, tempore repellat eos
                natus quo mollitia laborum.
              </p>
              <Link to="/Low-Current" className="custom-btn btn">
                Check Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
