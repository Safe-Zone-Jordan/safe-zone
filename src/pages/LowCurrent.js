import React from 'react'
import ServiceCard from '../components/lowCurrent/ServiceCard'
// import myData from '../LowCurrentInfo.json';

let data = require('../LowCurrentInfo.json');

export default function LowCurrent() {
  return (
    <>
        <section className="section-padding">
    <div className="container">
      <div className="row">
        {
          data.map((item, index) => {
            return (
              <ServiceCard
                {...item}
              />
            )
          }
          )
}      
      </div>
    </div>
  </section>
    </>
  )
}
