import React from "react";
import { Link } from "react-router-dom";
const aTagStyle = {
  textDecoration: "none",
};
export default function ServiceCard({ id }) {
  return (
    <div className="col-lg-6 col-md-6 col-12 mb-4 mb-lg-0" key={id}>
      <div className="featured-block  justify-content-center align-items-center">
        <img
          src="images/icons/medical.webp"
          className="custom-block-image img-fluid"
          alt=""
        />
        <div className="custom-block">
          <div className="custom-block-body">
            <h5 className="mb-3">Service {id}</h5>
            <p>
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus jasnfjksafnkja aksfj sakfjsajkfb kjbasfkjbsaf
            </p>
          </div>
          <Link to={`/low-current/${id}`} className="custom-btn btn">
            Check Services
          </Link>
        </div>
      </div>
    </div>
  );
}
