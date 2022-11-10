import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Graphpage from '../Page/Graphpage'
import Login from '../Page/Login'
import Product from '../Page/Product'

const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/graph' element={<Graphpage/>} />
            <Route path='/product' element={<Product/>} />
        </Routes>
    </div>
  )
}

export default Allroutes