import React from 'react'
import { useParams } from 'react-router-dom'

export default function ServiceFullPage() {
 
  const { id } = useParams()
  console.log(id, "lllllll")
  let data = require('../LowCurrentInfo.json')
  data = data.find((item) => +item.id === +id);
  console.log(data, id)
  return (
    <>
          <br></br>
          <br></br>
          <br></br>

    <div>ServiceFullPage {data?.name} sss</div>

    <div>
      <p>
        
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, est delectus quaerat accusamus possimus perspiciatis. Debitis nihil nam atque nulla consequuntur obcaecati voluptate? Officiis necessitatibus dicta, voluptatum deleniti commodi vero?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fugiat officia iusto dolorum possimus nam qui ratione corporis, repudiandae ipsam. Repellat accusamus voluptatum sapiente, nemo ipsa ad facere impedit. Asperiores?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae saepe voluptatibus placeat aliquam, molestiae reiciendis ipsam, qui deserunt officia, ipsa commodi modi iusto totam! Incidunt non aliquam ipsum officia itaque.
      </p>
    </div>
      <br></br>      <br></br>
      <br></br>
      <br></br>

    </>
    
  )
}
