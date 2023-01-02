import React from "react";
import { Link } from "react-router-dom";
const aTagStyle = {
  textDecoration: "none",
};

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-12 mb-4">
            <img
              src="images/newSafeLogo.png"
              style={{ width: "250px" }}
              className="logo img-fluid"
              alt=""
            />
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <h5 className="site-footer-title mb-3">Contact Information</h5>
            <p className="text-white d-flex mb-2">
              <i className="bi-whatsapp me-2" />
              <a
                href="tel: 00962798809276"
                style={aTagStyle}
                className="footer-menu-link"
              >
                +962 798809276
              </a>
            </p>

            <p className="text-white d-flex mt-3">
              <i className="bi-printer me-2" />
              Fax: 009626/5235823
            </p>
            <p className="text-white d-flex">
              <i className="bi-envelope me-2" />
              <a
                style={aTagStyle}
                href={`mailto:sales@safezoneco.net`}
                className="footer-menu-link"
              >
                sales@safezoneco.net
              </a>
            </p>
            <p className="text-white d-flex">
              <i className="bi-envelope me-2" />
              <a
                style={aTagStyle}
                href={`mailto:contact@safezoneco.net`}
                className="footer-menu-link"
              >
                contact@safezoneco.net
              </a>
            </p>           
          </div>
          <div className="col-lg-4 col-md-6 col-12 mx-auto">
          <p className="text-white d-flex mt-3">
              <i className="bi-geo-alt me-2" />
              Jordan, Amman, Abdoon, Malta
            </p>
            <iframe
              title="Google Map"
              className="w-screen h-screen z-0 absolute"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              id="gmap_canvas"
              src="https://maps.google.com/maps?width=1208&amp;height=721&amp;hl=en&amp;q=%20Amman+(ltus)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>

            {/* <Link to="#" style={aTagStyle} className="custom-btn btn mt-3"> */}
            <a
              style={aTagStyle}
              className="custom-btn btn mt-3"
              href="http://maps.google.com/?q=amman Abu Nseir Medical Labs, Abu Nuseir St, Amman"
            >
              Get Direction
            </a>
            {/* </Link> */}
          </div>
        </div>
      </div>
      <div className="site-footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7 col-12">
              <p className="copyright-text mb-0">
                Copyright © 2022{" "}
                <Link to="#" style={aTagStyle}>
                  Geeks Dota
                </Link>{" "}
                All rights reserved.
              </p>
            </div>
            <div className="col-lg-6 col-md-5 col-12 d-flex justify-content-center align-items-center mx-auto">
              <ul className="social-icon">
                <li className="social-icon-item">
                  <Link
                    to="#"
                    style={aTagStyle}
                    className="social-icon-link bi-facebook"
                  />
                </li>
                <li className="social-icon-item">
                  <Link
                    to="#"
                    style={aTagStyle}
                    className="social-icon-link bi-linkedin"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
