import React from "react";
import adler from "../components/assets/partners/adlerLogo.png";
import crestron from "../components/assets/partners/crestronLogo.png";
import detnov from "../components/assets/partners/detnovLogo.png";
import digmat from "../components/assets/partners/digmatLogo.png";
import eclerLogo from "../components/assets/partners/eclerLogo.png";
import faacLogo from "../components/assets/partners/faacLogo.png";
import gorgyLogo from "../components/assets/partners/gorgyLogo.png";
import hanwhaLogo from "../components/assets/partners/hanwhaLogo.svg.png";
import honeyLogo from "../components/assets/partners/honeywellLogo.svg.png";
import itcLogo from "../components/assets/partners/itcLogo.png";
import knxLogo from "../components/assets/partners/knxLogo.png";
import idaLogo from "../components/assets/partners/ldaLogo.png";
import mackielLogo from "../components/assets/partners/mackieLogo.webp";
import methaxdoorLogo from "../components/assets/partners/metaxdoorLogo.png";
import morleyLogo from "../components/assets/partners/morleyLogo.png";
import ogpLogo from "../components/assets/partners/ogpLogo.png";
import optimalLogo from "../components/assets/partners/optimaLogo.png";
import texecomLogo from "../components/assets/partners/texecomLogo.png";
import vissonicLogo from "../components/assets/partners/vissionicLogo.png";
import zetaLogo from "../components/assets/partners/zetaLogo.png";

const partnersData = [
  {
    id: 1,
    name: "Adler",
    logo: adler,
  },
  {
    id: 2,
    name: "Crestron",
    logo: crestron,
  },
  {
    id: 3,
    name: "Detnov",
    logo: detnov,
  },
  {
    id: 4,
    name: "Digmat",
    logo: digmat,
  },
  {
    id: 5,
    name: "Ecler",
    logo: eclerLogo,
  },
  {
    id: 6,
    name: "Faac",
    logo: faacLogo,
  },
  {
    id: 7,
    name: "Gorgy",
    logo: gorgyLogo,
  },
  {
    id: 8,
    name: "Hanwha",
    logo: hanwhaLogo,
  },
  {
    id: 9,
    name: "Honeywell",
    logo: honeyLogo,
  },
  {
    id: 10,
    name: "ITC",
    logo: itcLogo,
  },
  {
    id: 11,

    name: "KNX",

    logo: knxLogo,
  },
  {
    id: 12,
    name: "LDA",
    logo: idaLogo,
  },
  {
    id: 13,
    name: "Mackie",
    logo: mackielLogo,
  },
  {
    id: 14,
    name: "Metaxdoor",
    logo: methaxdoorLogo,
  },
  {
    id: 15,
    name: "Morley",
    logo: morleyLogo,
  },
  {
    id: 16,
    name: "OGP",
    logo: ogpLogo,
  },
  {
    id: 17,
    name: "Optima",
    logo: optimalLogo,
  },
  {
    id: 18,
    name: "Texecom",
    logo: texecomLogo,
  },
  {
    id: 19,
    name: "Vissionic",
    logo: vissonicLogo,
  },
  {
    id: 20,
    name: "Zeta",
    logo: zetaLogo,
  },
];

const partnersLogo = {
  position: "relative",
  top: 0,
  bottom: 0,
  width: "60%",
  height: "60%",
  margin: "auto",
};

export default function Partners() {
  return (
    <section className="section-padding" id="section_3">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center">Our Partners</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="row">
              {partnersData.map((partner) => (
                <div className="col-6 col-md-4 col-lg-3">
                  <div style={partnersLogo}>
                    <img
                      className="img-fluid"
                      src={partner.logo}
                      alt={partner.name}
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
