import React, { useEffect, useState } from "react";
import safeZone from "../../assets/images/icons/safeZone.png";
import safeLogo from "../../assets/images/newSafeLogo.png";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}


export default function CompanyMission() {
  
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
    <section className=" about-main-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-5 col-12">
            <img
              src={safeZone}
              className="about-image ms-lg-auto ms-md-auto bg-light shadow-lg about-missions-image"
              alt=""
              data-aos="fade-right"
            />
          </div>
          <div className="col-lg-8 col-md-7 col-12">
            <div className="custom-text-block">
              <div className="text-muted mb-lg-4 mb-md-4 text-center">
                <img
                  src={safeLogo}
                  style={{ width: "255px" }}
                  className="logo img-fluid"
                  alt="Logo"
                  data-aos="fade-in"
                />
              </div>
              <p data-aos={`${windowSize.innerWidth < 768? "fade-right": "fade-left"}`}>
                We continuously strive to be the independent world-class Low
                Current systems company and technical service of choice by
                delivering safe, efficient, flexible, and technology-enabled
                quality services to our customers, with responsibility towards
                the environment, the society, and the shareholders.
              </p>
              <p data-aos={`${windowSize.innerWidth < 768? "fade-right": "fade-left"}`}>
                We will perpetually grow by investing in our people in order to
                develop a distinguished, passionate, dedicated, and highly
                competent team.
              </p>
              <ul className="social-icon mt-4">
                <li className="social-icon-item" data-aos="fade-in">
                  <a
                    href="https://www.facebook.com/safezoneco"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon-link bi-facebook"
                  >
                    {" "}
                  </a>
                </li>
                <li className="social-icon-item" data-aos="fade-in">
                  <a
                    href="https://www.instagram.com/safezone979"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon-link bi-instagram"
                  >
                    {" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
