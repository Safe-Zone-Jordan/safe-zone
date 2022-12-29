import React from 'react'
import ammanGovLogo from '../assets/clients/ammanGovLogo.png'
import armyLogo from '../assets/clients/armyLogo.png'
import eductionofMinLogo from '../assets/clients/educationofMinLogo.png'
import gizLogo from '../assets/clients/gizLogo.png'
import goldsGymLogo from '../assets/clients/goldsGym.png'
import hiltonLogo from '../assets/clients/hiltonLogo.png'
import hrLogo from '../assets/clients/hrLogo.png'
import josLogo from '../assets/clients/josLogo.png'
import planingMinLogo from '../assets/clients/planingMinLogo.png'
import waterLogo from '../assets/clients/waterLogo.png'
import unnownLogo from '../assets/clients/unknownLogo.png'
export default function Clients() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center">Our Clients</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-6 col-md-3">
              <img src={ammanGovLogo} alt="Amman Gov" className="img-fluid" />
            </div>
            <div className="col-6 col-md-3">
              <img src={armyLogo} alt="Army" className="img-fluid" />
            </div>
            <div className="col-6 col-md-3">
              <img src={eductionofMinLogo} alt="Eduction of Min" className="img-fluid" />
            </div>
            <div className="col-6 col-md-3">
              <img src={gizLogo} alt="Giz" className="img-fluid" />
            </div>
            <div className="col-6 col-md-3">
              <img src={goldsGymLogo
              } alt="Golds Gym" className="img-fluid" />
            </div>
            <div className="col-6 col-md-3">
              <img src={hiltonLogo}
              alt="Hilton" className="img-fluid" />
            </div>
            <div className="col-6 col-md-3">
              <img src={hrLogo} alt="HR" className="img-fluid" />
            </div>
            <div className="col-6 col-md-3">
              <img src={josLogo} alt="Jos" className="img-fluid" />
            </div>
            <div className="col-6 col-md-3">
              <img src={planingMinLogo} alt="Planing Min" className="img-fluid" />
            </div>
            <div className="col-6 col-md-3">
              <img src={waterLogo} alt="Water" className="img-fluid" />
            </div>
            <div className="col-6 col-md-3">
              <img src={unnownLogo} alt="Unnown" className="img-fluid" /> 
                </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}
