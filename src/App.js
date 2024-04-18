import React, { useState } from 'react'
import Main from './pages/Main'
import Footer from './components/Footer'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import ProductList from './pages/ProductList'
import ProductDetail from './pages/ProductDetail'
import NotFound from './pages/NotFound'
import './App.css'


function App() {

  const [list,setList]=useState([]);
  return (
    <div className='container'>
        <Header/>
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/list' element={<ProductList list={list} setList={setList}/>}/>
            <Route path='/detail/:num' element={<ProductDetail list={list}/>}/>
            <Route path='*' element={<NotFound/>}></Route>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
