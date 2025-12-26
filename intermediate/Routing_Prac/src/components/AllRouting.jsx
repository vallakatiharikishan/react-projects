import React from 'react'
import { Route, Routes } from "react-router-dom";


import Home from './Home';
import SingleProduct from './SingleProduct';
import Sales from './Sales';
import Sellers from './Sellers';
import NotFound from './NotFound';
import Products from './Products';
import Articles from './Articles';
import Admin from './Admin';
const AllRouting = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct/>}/>
        <Route path="/articles" element={<Articles />} />
        <Route path="/admin" element={<Admin />} >
        <Route path="sales" element={<Sales/>}/>
        <Route path="sellers" element={<Sellers/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
  )
}

export default AllRouting