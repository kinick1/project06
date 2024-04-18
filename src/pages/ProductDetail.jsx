import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const ProductDetail = ({list}) => {

  let {num}=useParams();
  // console.log(num)

  // console.log(list.find(item=>item.no==num))

  const [obj,setObj]=useState({})

  useEffect(()=>{
    setObj(list.find(item=>item.no==num))
    console.log('obj',obj)
  },[list])
  
  return (
    <div className='list-container'>
      <div className='detail-item'>
        <img src={obj.src} alt="1" width='250px'/>
        <h3>{obj.titel}</h3>
        <p>
          <span>가격 : {obj.price }</span>
          <br/>
          {obj.delivery=="free"?<span>배송비 무료</span>:<span>배송비 {obj.delivery}</span>}
        </p>
      </div>
      
    </div>
  )
}

export default ProductDetail