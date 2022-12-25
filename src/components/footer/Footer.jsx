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
            <img src="images/logo.png" className="logo img-fluid" alt="" />
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <h5 className="site-footer-title mb-3">Quick Links</h5>
            <ul className="footer-menu">
              <li className="footer-menu-item">
                <Link to="#" style={aTagStyle} className="footer-menu-link">
                  Our Story
                </Link>
              </li>
              <li className="footer-menu-item">
                <Link to="#" style={aTagStyle} className="footer-menu-link">
                  Newsroom
                </Link>
              </li>
              <li className="footer-menu-item">
                <Link to="#" style={aTagStyle} className="footer-menu-link">
                  Causes
                </Link>
              </li>
              <li className="footer-menu-item">
                <Link to="#" style={aTagStyle} className="footer-menu-link">
                  Become Link volunteer
                </Link>
              </li>
              <li className="footer-menu-item">
                <Link to="#" style={aTagStyle} className="footer-menu-link">
                  Partner with us
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mx-auto">
            <h5 className="site-footer-title mb-3">Contact Infomation</h5>
            <p className="text-white d-flex mb-2">
              <i className="bi-telephone me-2" />
              <Link to="tel: 120-240-9600" className="site-footer-link">
                120-240-9600
              </Link>
            </p>
            <p className="text-white d-flex">
              <i className="bi-envelope me-2" />
              <Link to="mailto:info@yourgmail.com" className="site-footer-link">
                donate@charity.org
              </Link>
            </p>
            <p className="text-white d-flex mt-3">
              <i className="bi-geo-alt me-2" />
              AkershusstrandLink 20, 0150 Oslo, Norway
            </p>
            <Link to="#" style={aTagStyle} className="custom-btn btn mt-3">
              Get Direction
            </Link>
          </div>
        </div>
      </div>
      <div className="site-footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7 col-12">
              <p className="copyright-text mb-0">
                Copyright © 2036{" "}
                <Link to="#" style={aTagStyle}>
                  Kind Heart
                </Link>{" "}
                Charity Org. Design:{" "}
                <Link to="https://templatemo.com" target="_blank">
                  TemplateMo
                </Link>
              </p>
            </div>
            <div className="col-lg-6 col-md-5 col-12 d-flex justify-content-center align-items-center mx-auto">
              <ul className="social-icon">
                <li className="social-icon-item">
                  <Link
                    to="#"
                    style={aTagStyle}
                    className="social-icon-link bi-twitter"
                  />
                </li>
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
                    className="social-icon-link bi-instagram"
                  />
                </li>
                <li className="social-icon-item">
                  <Link
                    to="#"
                    style={aTagStyle}
                    className="social-icon-link bi-linkedin"
                  />
                </li>
                <li className="social-icon-item">
                  <Link
                    to="https://youtube.com/templatemo"
                    className="social-icon-link bi-youtube"
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
