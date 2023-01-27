import React from "react";
import clientsData from "../data/clients.js";

const clientsLogo = {
  width: "60%",
  height: "60%",
  margin: "auto",
};
export default function Clients(props) {
  return (
    <section className={`section-padding ${props.class}`} id="section_3">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center">Our Clients</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="row">
              {clientsData.map((client) => (
                <div className="col-6 col-md-4 col-lg-3" key={client.id}>
                  <div style={clientsLogo}>
                    <img
                      className="img-fluid"
                      src={client.image}
                      alt={client.name}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
