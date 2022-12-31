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
          <div className="col-lg-3 col-12 mb-4" >
            <img
              src="images/newLogoUnremv.jpg"
              style={{ width: "150px"}}
              className="logo img-fluid"
              alt=""
            />
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
            <h5 className="site-footer-title mb-3">Contact Information</h5>
            <p className="text-white d-flex mb-2">
              <i className="bi-telephone me-2" />
              <a
                href="tel: 120-240-9600"
                style={aTagStyle}
                className="footer-menu-link"
              >
                120-240-9600
              </a>
            </p>
            <p className="text-white d-flex">
              <i className="bi-envelope me-2" />
              <a
                style={aTagStyle}
                href={`mailto:SafeZone@Gmail.com`}
                className="footer-menu-link"
              >
                SafeZone@Gmail.com
              </a>
            </p>
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
                {/* 
                Charity Org. Design:{" "}
                <Link to="https://templatemo.com" target="_blank">
                  TemplateMo
                </Link>
                 */}
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
                {/*
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
                    className="social-icon-link bi-instagram"
                  />
                </li>
                <li className="social-icon-item">
                  <Link
                    to="https://youtube.com/templatemo"
                    className="social-icon-link bi-youtube"
                  />
                </li>
                */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
