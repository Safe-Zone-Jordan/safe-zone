import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import medical from "../../assets/images/icons/medical.webp";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

export default function PrefCard() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  let data = require("../../data/Categories.json");

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <section className="section-padding section-bg" id="section_3">
      <div className="container">
        <div className="row">
          <div
            style={{ paddingBottom: "50px" }}
            className="col-12  text-center "
          >
            <h2>Our Solutions</h2>
            <div></div>
          </div>

          {data.map((item, index) => {
            return (
              <React.Fragment key={item.id}>
                {index % 2 === 0 ? (
                  <>
                    <div className="col-12 col-sm-6 d-md-flex justify-content-md-ceneter">
                      <img
                        style={{ borderRadius: "5%" }}
                        src={medical}
                        alt="medical"
                        className="img-fluid"
                        loading="lazy"
                      />
                    </div>
                    <div className="col-12 col-sm-6 align-self-center justify-content-md-ceneter">
                      <div
                        className={`steps__content-width ${
                          windowSize.innerWidth < 580 ? "text-center" : ""
                        }`}
                      >
                        <h1 className="h2 mb-4">{item.name}</h1>
                        <p className="mb-4">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Officia totam dolorem quasi! Quis fugiat totam
                          id fuga non distinctio incidunt amet nesciunt itaque,
                          tempore repellat eos natus quo mollitia laborum.
                        </p>
                        <Link
                          to={`/${item.name.split(" ").join("-")}`}
                          className="custom-btn btn"
                          style={{
                            margin:
                              windowSize.innerWidth < 768 ? "5% 0px" : "0px",
                          }}
                        >
                          Check Services
                        </Link>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="row">
                    <div className="col-12 col-sm-6 d-md-flex justify-content-md-ceneter order-sm-1">
                      <img
                        style={{ borderRadius: "5%" }}
                        src={medical}
                        alt="Health Benefits"
                        className="img-fluid"
                        loading="lazy"
                      />
                    </div>
                    <div className="col-12 col-sm-6 align-self-center justify-content-md-ceneter">
                      <div
                        className={`steps__content-width ${
                          windowSize.innerWidth < 580 ? "text-center" : ""
                        }`}
                      >
                        <h1 className="h2 mb-4">{item.name}</h1>
                        <p className="mb-4">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Officia totam dolorem quasi! Quis fugiat totam
                          id fuga non distinctio incidunt amet nesciunt itaque,
                          tempore repellat eos natus quo mollitia laborum.
                        </p>
                        <Link
                          to={`/${item.name.split(" ").join("-")}`}
                          className="custom-btn btn"
                          style={{
                            margin:
                              windowSize.innerWidth < 768 ? "5% 0px" : "",
                          }}
                        >
                          Check Services
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
