import React, { useState } from "react";
const aTagStyle = {
  textDecoration: "none",
};
function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
export default function Footer() {
  const [windowSize] = useState(getWindowSize());
  return (
    <footer className="site-footer">
      <div
        className="container"
        style={{ padding: windowSize.innerWidth < 768 ? "0px 10%" : "0px" }}
      >
        <div className="row">
          <div className="col-lg-4 col-12 mb-4">
            <h1 className="text-logo">
              Safe Zone<sup className="text-logo-span">&reg;</sup>
            </h1>
            <h2 className="sup-text-logo">For Engineering & Trading Co.</h2>

            <br />
            <p
              className="text-white d-flex mb-2"
              style={{ fontSize: "18px", fontWeight: "normal" }}
            >
              Safe Zone listens to our customer and deliver flexible solutions.
              We are transparent and seek to earn long term partnerships based
              on trust and shared values.
              <br />
              <br />
              <br />
            </p>
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

            <ul className="d-flex">
              <li className="social-icon-item">
                <a
                  href="https://www.facebook.com/safezoneco"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-link bi-facebook social-icon-item-sup"
                >
                  {" "}
                </a>
              </li>
              <li className="social-icon-item">
                <a
                  href="https://www.instagram.com/safezone979"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-link bi-instagram social-icon-item-sup"
                >
                  {" "}
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mx-auto">
            <p className="text-white d-flex mt-3">
              <i className="bi-geo-alt me-2" />
              Jordan, Amman, Ash Shumaysani, Queen Nour St., Housing Bank
              Complex, GF
            </p>
            <iframe
              title="Google Map"
              className="w-screen h-screen z-0 absolute"
              id="gmap_canvas"
              src="https://maps.google.com/maps?width=1208&amp;height=721&amp;hl=en&amp;q=%20Jordan+Amman+Ash+Shumaysani+Queen+Nour+St.+Housing+Bank+Complex,+Amman&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
            <a
              style={{
                aTagStyle,
                display: "block",
                width: "50%",
                textAlign: "center",
              }}
              className="custom-btn btn mt-3"
              href="http://maps.google.com/?q=amman Jordan, Amman, Ash Shumaysani, Queen Nour St., Housing Bank Complex, Ground Floor"
              target="_blank"
              rel="noreferrer"
            >
              Get Direction
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
