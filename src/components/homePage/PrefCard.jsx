import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../../data/Categories";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

const PrefCardStyle = {
  borderRadius: "5%",
  width: "600px",
  height: "400px",
};

export default function PrefCard() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

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
            className="col-12  text-center"
          >
            <h2 data-aos="fade-in">Our Solutions</h2>
          </div>

          {data.map((item, index) => {
            return (
              <React.Fragment key={item.id}>
                {index % 2 === 0 ? (
                  <div className="row">
                    <div className="col-12 col-md-6 mb-2">
                      <img
                        style={PrefCardStyle}
                        src={item.image}
                        alt="medical"
                        className="img-fluid"
                        loading="lazy"
                        data-aos="fade-right"
                      />
                    </div>
                    <div className="col-12 col-md-6 mb-5">
                      <div
                        className="steps__content-width"
                      >
                        <h1 className="h2 mb-4 home-page-solutions-headers" data-aos={`${windowSize.innerWidth < 768? "fade-right": "fade-left"}`}>{item.name}</h1>
                        {item.id !== 7 && (
                          <>
                            {item.description.split("\n").map((str, idx) => (
                              <p className="mb-4" key={idx}  data-aos={`${windowSize.innerWidth < 768? "fade-right": "fade-left"}`}>{str}</p>
                              ))}
                              </>
                        )}
                        {item.id === 7 && (
                          <ul>
                            {item.services.map((service, idx) => (
                              <li key={idx} data-aos={`${windowSize.innerWidth < 768? "fade-right": "fade-left"}`}>{service}</li>
                            ))}
                          </ul>
                        )}
                        <Link
                          to={`/services/${item.name.split(" ").join("-")}`}
                          className="custom-btn btn"
                          data-aos={`${windowSize.innerWidth < 768? "fade-right": "fade-left"}`}
                          // style={{
                          //   margin:
                          //     windowSize.innerWidth < 768 ? "5% 0px" : "0px",
                          // }}
                        >
                          See More...
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="row">
                    <div className="col-12 col-md-6  order-md-1 mb-2">
                      <img
                        style={PrefCardStyle}
                        src={item.image}
                        alt="Health Benefits"
                        className="img-fluid"
                        loading="lazy"
                        data-aos={`${windowSize.innerWidth < 768? "fade-right": "fade-left"}`}
                      />
                    </div>
                    <div className="col-12 col-md-6 mb-5">
                      <div
                        className="steps__content-width"
                      >
                        <h1 className="h2 mb-4 home-page-solutions-headers" data-aos="fade-right">{item.name}</h1>
                        <>
                          {item.description.split("\n").map((str,idx) => (
                            <p className="mb-4" key={idx} data-aos="fade-right">{str}</p>
                          ))}
                        </>
                        <Link
                          to={`/services/${item.name.split(" ").join("-")}`}
                          className="custom-btn btn"
                          data-aos="fade-right"
                          // style={{
                          //   margin: windowSize.innerWidth < 768 ? "5% 0px" : "",
                          // }}
                        >
                          See More...
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
