import React from 'react'
import { useParams } from 'react-router-dom'
import ImageHolder from './elementor-placeholder-image.jpg'

export default function ServiceFullPage() {
  const { id } = useParams()
  console.log(id, "lllllll")
  let data = require('../LowCurrentInfo.json')
  data = data.find((item) => +item.id === +id);
  console.log(data, id)
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <img src={ImageHolder} alt="ImageHolder"  className="img-fluid" />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h1 className="text-center">{data.name}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className="text-center">{data.description} :
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore vel voluptates et quaerat perferendis? Magni praesentium nisi corrupti doloremque autem delectus minima illum, iste unde quidem aliquam vel! Saepe, dignissimos.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam alias itaque sint labore, assumenda nemo tenetur a voluptatem magni laborum odio debitis, obcaecati neque in officia accusantium. Illum, libero veritatis!
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum ipsam voluptas repellendus tempore consequatur culpa accusamus aliquid impedit adipisci at suscipit modi, facilis blanditiis quae voluptates dignissimos esse mollitia incidunt.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ex amet eveniet voluptate incidunt dicta cumque deleniti eaque, dolore culpa impedit facere quo, repellendus alias quis repudiandae velit nemo dolores.
              
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore vel voluptates et quaerat perferendis? Magni praesentium nisi corrupti doloremque autem delectus minima illum, iste unde quidem aliquam vel! Saepe, dignissimos.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam alias itaque sint labore, assumenda nemo tenetur a voluptatem magni laborum odio debitis, obcaecati neque in officia accusantium. Illum, libero veritatis!
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum ipsam voluptas repellendus tempore consequatur culpa accusamus aliquid impedit adipisci at suscipit modi, facilis blanditiis quae voluptates dignissimos esse mollitia incidunt.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ex amet eveniet voluptate incidunt dicta cumque deleniti eaque, dolore culpa impedit facere quo, repellendus alias quis repudiandae velit nemo dolores.
              
            </p>
          </div>
        </div>
      </div>


    </>
    
  )
}
