"use client"
import React, { useContext } from 'react'
import { CreateCntx } from '../contex'

const TrendingImages = () => {

  const [data, setData] = useContext(CreateCntx)
  // console.log(data.urls.small);


  const ShowImage = data.map((d,i) => {
    return (
      <li key={i}>
      <img height={150} width={150} className='mt-5 flex' src={d.urls.small} alt="nhi mil rhi" />
      </li>
    )
  })

  return (
    <div>
      {ShowImage}
    </div>
  )
}

export default TrendingImages