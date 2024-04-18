import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductItem = ({item}) => {

  console.log('item',item)

  const nav=useNavigate();
  
  return (
    <div className='product-container'
    onClick={()=>{nav(`/detail/${item.no}`)}}>
      <img width='100px' src={item.src}></img>
      <h3>{item.title}</h3>
      <span>가격 {item.price}원</span>


    </div>
  )
}

export default ProductItem