import React, { useEffect } from 'react'
import axios from 'axios';
import ProductItem from '../components/ProductItem';

const ProductList = ({list,setList}) => {

  console.log('list',list)
  /** 누군가가 상품 리스트 페이지를 열었을때, 
   * 베슽트 상품에 대한 정보를가져오겠다
   * 1) '화면이 렌더링 된 직후'에 
   * 2) http://localhost:3000/best.json 에 있는 정보를 받아오겠다
   * 3) 받아온 내용을 콘솔창에 출력
   */

  useEffect(()=>{
    /** react의 public 폴더는 서버와 통신하고있는 폴더
     * 그래서 public폴더에 정적인 파일을  업로드 하면 /폴더/파일명.확장자
     * 이렇게 url로 들어가 확인할수 있다.
     *  */ 

    let url='http://localhost:3000/best.json'

    axios.get(url)
    .then(res=> {setList(res.data.list)})

    /* 내가 가져온 list는 list,item, detail에 쓰일 중요한 데이터임
    => context를 방법이 있음
    => 볼륨이 너무 작을 때는 가장 상단인 App.js에 state관리
    
    */

  },[])

  return (
    <div className='list-container'>
      {list.map(item=>(
        <ProductItem key={item.no} item={item}/>
      ))}  
    </div>
  )
}

export default ProductList