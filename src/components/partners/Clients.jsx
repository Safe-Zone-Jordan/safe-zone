import React from "react";
import ammanGovLogo from "../assets/clients/ammanGovLogo.png";
import armyLogo from "../assets/clients/armyLogo.png";
import eductionofMinLogo from "../assets/clients/educationofMinLogo.png";
import gizLogo from "../assets/clients/gizLogo.png";
import goldsGymLogo from "../assets/clients/goldsGym.png";
import hiltonLogo from "../assets/clients/hiltonLogo.png";
import hrLogo from "../assets/clients/hrLogo.png";
import josLogo from "../assets/clients/josLogo.png";
import planingMinLogo from "../assets/clients/planingMinLogo.png";
import waterLogo from "../assets/clients/waterLogo.png";
import unnownLogo from "../assets/clients/unknownLogo.png";

const clientsData = [
  {
    id: 1,
    name: "Amman Gov",
    logo: ammanGovLogo,
  },
  {
    id: 2,
    name: "Army",
    logo: armyLogo,
  },
  {
    id: 3,
    name: "Eduction of Min",
    logo: eductionofMinLogo,
  },
  {
    id: 4,
    name: "Giz",
    logo: gizLogo,
  },
  {
    id: 5,
    name: "Golds Gym",
    logo: goldsGymLogo,
  },
  {
    id: 6,
    name: "Hilton",
    logo: hiltonLogo,
  },
  {
    id: 7,
    name: "HR",
    logo: hrLogo,
  },
  {
    id: 8,
    name: "Jos",
    logo: josLogo,
  },
  {
    id: 9,
    name: "Planing Min",
    logo: planingMinLogo,
  },
  {
    id: 10,
    name: "Water",
    logo: waterLogo,
  },
  {
    id: 11,
    name: "Unknown",
    logo: unnownLogo,
  },
];
const clientsLogo = {
  width: "60%",
  height: "60%",
  margin: "auto",
  height: "auto",
};
export default function Clients() {
  return (
    <section className="section-padding" id="section_3">
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
                <div className="col-6 col-md-4 col-lg-3">
                  <div style={clientsLogo}>
                    <img
                      className="img-fluid"
                      src={client.logo}
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
