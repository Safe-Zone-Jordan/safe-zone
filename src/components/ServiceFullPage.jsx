import React from 'react'
import { useParams } from 'react-router-dom'

export default function ServiceFullPage() {
  const { id } = useParams()
  let data = require('../LowCurrentInfo.json')
  data = data.find((item) => +item.id === +id);
  console.log(data, id)
  return (
    <>
          <br></br>
          <br></br>
          <br></br>

    <div>ServiceFullPage {data?.name} sss</div>
      <br></br>      <br></br>
      <br></br>
      <br></br>

    </>
    
  )
}
