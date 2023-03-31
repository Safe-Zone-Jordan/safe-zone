import React from "react";
import clientsData from "../data/clients.js";

const clientsLogo = {
  width: "60%",
  height: "60%",
  margin: "auto",
};
export default function ClientsHome(props) {
  let curLocation = window.location.pathname;
  return (
    <section className={`section-padding ${props.class}`} id="section_3">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center" data-aos="fade-in">
              Our Clients
            </h2>
            {curLocation !== "/" && (
              <p className="mx-5 pb-3" data-aos="fade-in">
                Safe Zone listens to our customer and deliver flexible
                solutions. We are transparent and seek to earn long term
                partnerships based on trust and shared values.
              </p>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="row">
              {clientsData.map((client) => (
                <div className="col-6 col-md-4 col-lg-3 p-1" key={client.id}>
                  <div style={clientsLogo}>
                    <img
                      className="grid-img-page-client-ios"
                      src={client.image}
                      alt={client.name}
                      data-aos="fade-in"
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
