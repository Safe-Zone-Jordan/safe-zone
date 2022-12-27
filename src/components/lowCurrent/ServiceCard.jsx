import React from 'react'
import { Link } from 'react-router-dom'
const aTagStyle = {
    textDecoration: "none",
  };
export default function ServiceCard({id}) {
  return (
    <div className="col-lg-6 col-md-6 col-12 mb-4 mb-lg-0" key={id}>
              <div className="featured-block d-flex justify-content-center align-items-center">
                <img
                  src="images/icons/lowCurrent.webp"
                  className="custom-block-image img-fluid"
                  alt=""
                />
                <div className="custom-block">
                  <div className="custom-block-body">
                    <h5 className="mb-3">Low Current {id}</h5>
                    <p>
                      Sed leo nisl, posuere at molestie ac, suscipit auctor
                      mauris. Etiam quis metus tempor
                    </p>
                  </div>
                  <Link to={`/Low-Current/${id}`} className="custom-btn btn">
                  Check Services
                  </Link>
                </div>
              </div>
            </div>
    /* 
    <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
    <div className="featured-block d-flex justify-content-center align-items-center">
    <Link to="donate.html" style={aTagStyle} className="d-block">
    <img
    src="images/icons/lowCurrent.webp"
    className="featured-block-image img-fluid"
    alt=""
    />
    <p className="featured-block-text">
    <strong>Low Current</strong>
    </p>
    </Link>
    </div>
    </div>
*/

  )
}
