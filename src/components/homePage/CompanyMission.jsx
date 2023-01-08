import React from "react";
import safeZone from "../../assets/images/icons/safeZone.png";
import safeLogo from "../../assets/images/newSafeLogo.png";
export default function CompanyMission() {
  return (
    <section className=" about-main-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5 col-md-5 col-12">
            <img
              src={safeZone}
              className="about-image ms-lg-auto ms-md-auto bg-light shadow-lg about-missions-image"
              alt=""
            />
          </div>
          <div className="col-lg-7 col-md-7 col-12">
            <div className="custom-text-block">
              <p className="text-muted mb-lg-4 mb-md-4 text-center">
                <img
                  src={safeLogo}
                  style={{ width: "255px" }}
                  className="logo img-fluid"
                  alt="Logo"
                />
              </p>
              <p>
                We continuously strive to be the independent world-class Low
                Current systems company and technical service of choice by
                delivering safe, efficient, flexible, and technology-enabled
                quality services to our customers, with responsibility towards
                the environment, the society, and the shareholders.
              </p>
              <p>
                We will perpetually grow by investing in our people in order to
                develop a distinguished, passionate, dedicated, and highly
                competent team.
              </p>
              <ul className="social-icon mt-4">
                <li className="social-icon-item">
                  <a
                    href="https://www.facebook.com/safezoneco"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon-link bi-facebook"
                  >
                    {" "}
                  </a>
                </li>
                <li className="social-icon-item">
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
